import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  pgEnum,
  jsonb,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

/**
 * Fuente de verdad del esquema. Definido según /specs/000-data-model/spec.md.
 * No duplicar estas definiciones en otras capas: toda referencia al modelo
 * debe importar desde aquí (principio de arquitectura nº4).
 */

// Modos de pregunta (ver spec §2):
// - "single": exactamente 1 answer_option (flashcard).
// - "multiple_choice": 2+ answer_option, exactamente 1 marcada como correcta.
export const questionModeEnum = pgEnum("question_mode", [
  "single",
  "multiple_choice",
]);

// Dificultad de la pregunta, tres niveles fijos. Requerido (no forma parte
// de "000-data-model"; se añade sobre ese esquema base). Por defecto
// "medium" para no romper filas existentes al migrar.
export const questionDifficultyEnum = pgEnum("question_difficulty", [
  "easy",
  "medium",
  "hard",
]);

export const question = pgTable("question", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  mode: questionModeEnum("mode").notNull(),
  difficulty: questionDifficultyEnum("difficulty").notNull().default("medium"),
  // Opcionales: preguntas transversales o de producción no ligadas a un
  // episodio concreto (spec §4). Rango validado en la capa de aplicación,
  // ver src/lib/validation/question.ts.
  season: integer("season"),
  episode: integer("episode"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const answerOption = pgTable("answer_option", {
  id: serial("id").primaryKey(),
  questionId: integer("question_id")
    .notNull()
    .references(() => question.id, { onDelete: "cascade" }),
  text: text("text").notNull(),
  isCorrect: boolean("is_correct").notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const questionRelations = relations(question, ({ many }) => ({
  answerOptions: many(answerOption),
}));

export const answerOptionRelations = relations(answerOption, ({ one }) => ({
  question: one(question, {
    fields: [answerOption.questionId],
    references: [question.id],
  }),
}));

export type Question = typeof question.$inferSelect;
export type NewQuestion = typeof question.$inferInsert;
export type AnswerOption = typeof answerOption.$inferSelect;
export type NewAnswerOption = typeof answerOption.$inferInsert;

/**
 * Datos de referencia por episodio (fuera de las specs numeradas, a
 * petición del usuario): material de preparación para escribir trivia —
 * sinopsis, personajes y momentos/frases memorables. No está ligada por FK
 * a `question` (es contenido de consulta/referencia, no parte del modelo
 * transaccional de preguntas); se relaciona con ella solo por convención
 * (season, episode) igual que question.season/question.episode.
 */
export type MemorableQuote = {
  character: string;
  quote: string;
};

export const episode = pgTable(
  "episode",
  {
    id: serial("id").primaryKey(),
    season: integer("season").notNull(),
    episode: integer("episode").notNull(),
    titleEn: text("title_en").notNull(),
    titleEs: text("title_es").notNull(),
    synopsis: text("synopsis").notNull(),
    characters: text("characters").array().notNull().default([]),
    memorableMoments: text("memorable_moments").array().notNull().default([]),
    memorableQuotes: jsonb("memorable_quotes")
      .$type<MemorableQuote[]>()
      .notNull()
      .default([]),
    // Datos adicionales de texto libre (curiosidades, notas de producción,
    // etc.), añadidos manualmente desde /episodes — a diferencia del resto
    // de campos de esta tabla, no viene del seed inicial. Markdown simple,
    // igual que question.text.
    extraNotes: text("extra_notes"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    uniqueIndex("episode_season_episode_unique").on(table.season, table.episode),
  ]
);

export type Episode = typeof episode.$inferSelect;
export type NewEpisode = typeof episode.$inferInsert;

/**
 * Datos sobre la serie que no están ligados a un episodio concreto: premios,
 * actores invitados, carrera paralela de los protagonistas, actores de
 * doblaje, ubicaciones y otros detalles de producción (fuera de las specs
 * numeradas, a petición del usuario, igual que `episode`). Una única tabla
 * con `category` en vez de una tabla por categoría — todas comparten la
 * misma forma (título + descripción).
 */
export const seriesFactCategoryEnum = pgEnum("series_fact_category", [
  "award",
  "guest_actor",
  "cast_career",
  "dubbing_actor",
  "location",
  "other",
]);

export const seriesFact = pgTable("series_fact", {
  id: serial("id").primaryKey(),
  category: seriesFactCategoryEnum("category").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type SeriesFact = typeof seriesFact.$inferSelect;
export type NewSeriesFact = typeof seriesFact.$inferInsert;
