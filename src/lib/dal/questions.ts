import { and, asc, desc, eq, ilike, sql, SQL } from "drizzle-orm";
import { db } from "@/db/client";
import { question, answerOption } from "@/db/schema";
import type { QuestionInput } from "@/lib/validation/question";

/**
 * Único módulo con acceso directo a Drizzle/Postgres (restricción del
 * proyecto: acceso a PostgreSQL exclusivamente desde servidor, a través de
 * esta capa). Server Components, Server Actions y route handlers deben
 * llamar a estas funciones en lugar de importar `db` directamente.
 */

export type QuestionMode = "single" | "multiple_choice";
export type QuestionDifficulty = "easy" | "medium" | "hard";

export type QuestionWithOptions = {
  id: number;
  text: string;
  mode: QuestionMode;
  difficulty: QuestionDifficulty;
  season: number | null;
  episode: number | null;
  createdAt: Date;
  updatedAt: Date;
  options: {
    id: number;
    text: string;
    isCorrect: boolean;
    sortOrder: number;
  }[];
};

export type SortColumn = "text" | "season" | "episode" | "createdAt";
export type SortDirection = "asc" | "desc";

export type ListQuestionsParams = {
  query?: string;
  season?: number;
  episode?: number;
  sortBy?: SortColumn;
  sortDir?: SortDirection;
  page?: number;
  pageSize?: number;
};

export type ListQuestionsResult = {
  items: QuestionWithOptions[];
  page: number;
  pageSize: number;
  total: number;
};

const DEFAULT_PAGE_SIZE = 20;

function sortColumnToExpr(sortBy: SortColumn) {
  switch (sortBy) {
    case "text":
      return question.text;
    case "season":
      return question.season;
    case "episode":
      return question.episode;
    case "createdAt":
      return question.createdAt;
  }
}

/** 002-list-questions: listado con búsqueda, filtros, orden y paginación. */
export async function listQuestions(
  params: ListQuestionsParams = {}
): Promise<ListQuestionsResult> {
  const page = params.page ?? 1;
  const pageSize = params.pageSize ?? DEFAULT_PAGE_SIZE;
  const sortBy = params.sortBy ?? "createdAt";
  const sortDir = params.sortDir ?? "desc";

  const filters: SQL[] = [];
  if (params.query) {
    filters.push(ilike(question.text, `%${params.query}%`));
  }
  if (params.season !== undefined) {
    filters.push(eq(question.season, params.season));
  }
  if (params.episode !== undefined) {
    filters.push(eq(question.episode, params.episode));
  }
  const where = filters.length > 0 ? and(...filters) : undefined;

  const orderExpr = sortColumnToExpr(sortBy);
  const orderBy = sortDir === "asc" ? asc(orderExpr) : desc(orderExpr);

  const rows = await db.query.question.findMany({
    where,
    orderBy,
    limit: pageSize,
    offset: (page - 1) * pageSize,
    with: {
      answerOptions: {
        orderBy: (opt, { asc: ascFn }) => [ascFn(opt.sortOrder)],
      },
    },
  });

  const totalRows = await db
    .select({ id: question.id })
    .from(question)
    .where(where);

  return {
    items: rows.map(toQuestionWithOptions),
    page,
    pageSize,
    total: totalRows.length,
  };
}

/** 003-edit-question / 004-delete-question: obtener una pregunta por id. */
export async function getQuestionById(
  id: number
): Promise<QuestionWithOptions | null> {
  const row = await db.query.question.findFirst({
    where: eq(question.id, id),
    with: {
      answerOptions: {
        orderBy: (opt, { asc: ascFn }) => [ascFn(opt.sortOrder)],
      },
    },
  });
  return row ? toQuestionWithOptions(row) : null;
}

/** 001-create-question: crear pregunta + opciones en una transacción. */
export async function createQuestion(
  input: QuestionInput
): Promise<QuestionWithOptions> {
  return db.transaction(async (tx) => {
    const [createdQuestion] = await tx
      .insert(question)
      .values({
        text: input.text,
        mode: input.mode,
        difficulty: input.difficulty,
        season: input.season ?? null,
        episode: input.episode ?? null,
      })
      .returning();

    if (!createdQuestion) {
      throw new Error("No se pudo crear la pregunta.");
    }

    const insertedOptions = await tx
      .insert(answerOption)
      .values(
        input.options.map((opt) => ({
          questionId: createdQuestion.id,
          text: opt.text,
          isCorrect: opt.isCorrect,
          sortOrder: opt.sortOrder,
        }))
      )
      .returning();

    return {
      ...createdQuestion,
      mode: createdQuestion.mode as QuestionMode,
      options: insertedOptions,
    };
  });
}

/**
 * 003-edit-question: actualizar pregunta y reemplazar por completo su
 * conjunto de opciones (estrategia "delete + insert" dentro de una
 * transacción; más simple que hacer un diff fino, alineado con el
 * principio de mantener la arquitectura sencilla).
 */
export async function updateQuestion(
  id: number,
  input: QuestionInput
): Promise<QuestionWithOptions> {
  return db.transaction(async (tx) => {
    const [updatedQuestion] = await tx
      .update(question)
      .set({
        text: input.text,
        mode: input.mode,
        difficulty: input.difficulty,
        season: input.season ?? null,
        episode: input.episode ?? null,
        updatedAt: new Date(),
      })
      .where(eq(question.id, id))
      .returning();

    if (!updatedQuestion) {
      throw new Error(`No existe la pregunta con id ${id}.`);
    }

    await tx.delete(answerOption).where(eq(answerOption.questionId, id));

    const insertedOptions = await tx
      .insert(answerOption)
      .values(
        input.options.map((opt) => ({
          questionId: id,
          text: opt.text,
          isCorrect: opt.isCorrect,
          sortOrder: opt.sortOrder,
        }))
      )
      .returning();

    return {
      ...updatedQuestion,
      mode: updatedQuestion.mode as QuestionMode,
      options: insertedOptions,
    };
  });
}

/**
 * 004-delete-question: hard delete. Las AnswerOption asociadas se eliminan
 * vía ON DELETE CASCADE definido en el esquema, no aquí.
 */
export async function deleteQuestion(id: number): Promise<void> {
  await db.delete(question).where(eq(question.id, id));
}

export type GetRandomQuestionsParams = {
  count: number;
  season?: number;
  difficulty?: QuestionDifficulty;
};

/**
 * Modo de juego: selección aleatoria de preguntas para una partida.
 * Restringido a `multiple_choice` — el modo `single` no tiene opciones
 * incorrectas con las que jugar (es una flashcard, no una pregunta con
 * respuestas entre las que elegir).
 */
export async function getRandomQuestions(
  params: GetRandomQuestionsParams
): Promise<QuestionWithOptions[]> {
  const filters: SQL[] = [eq(question.mode, "multiple_choice")];
  if (params.season !== undefined) {
    filters.push(eq(question.season, params.season));
  }
  if (params.difficulty !== undefined) {
    filters.push(eq(question.difficulty, params.difficulty));
  }

  const rows = await db.query.question.findMany({
    where: and(...filters),
    orderBy: sql`random()`,
    limit: params.count,
    with: {
      answerOptions: {
        orderBy: (opt, { asc: ascFn }) => [ascFn(opt.sortOrder)],
      },
    },
  });

  return rows.map(toQuestionWithOptions);
}

function toQuestionWithOptions(row: {
  id: number;
  text: string;
  mode: string;
  difficulty: string;
  season: number | null;
  episode: number | null;
  createdAt: Date;
  updatedAt: Date;
  answerOptions: {
    id: number;
    text: string;
    isCorrect: boolean;
    sortOrder: number;
  }[];
}): QuestionWithOptions {
  return {
    id: row.id,
    text: row.text,
    mode: row.mode as QuestionMode,
    difficulty: row.difficulty as QuestionDifficulty,
    season: row.season,
    episode: row.episode,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
    options: row.answerOptions,
  };
}
