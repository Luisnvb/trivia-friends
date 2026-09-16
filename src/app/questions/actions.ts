"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { questionInputSchema, type QuestionInput } from "@/lib/validation/question";
import { createQuestion, updateQuestion, deleteQuestion } from "@/lib/dal/questions";

/**
 * 001-create-question / 003-edit-question / 004-delete-question: Server
 * Actions co-localizadas. Validan con el esquema zod compartido
 * (000-data-model §2 y §4) y delegan en el DAL — ningún componente accede a
 * Drizzle directamente (principio de arquitectura nº6).
 */

export type ActionErrors = Record<string, string[]>;

export type QuestionActionResult =
  | { success: true }
  | { success: false; errors: ActionErrors };

function toErrorMap(error: z.ZodError): ActionErrors {
  const map: ActionErrors = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".") || "_root";
    (map[key] ??= []).push(issue.message);
  }
  return map;
}

export async function createQuestionAction(
  input: QuestionInput
): Promise<QuestionActionResult> {
  const parsed = questionInputSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, errors: toErrorMap(parsed.error) };
  }

  await createQuestion(parsed.data);
  redirect("/questions");
}

export async function updateQuestionAction(
  id: number,
  input: QuestionInput
): Promise<QuestionActionResult> {
  const parsed = questionInputSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, errors: toErrorMap(parsed.error) };
  }

  await updateQuestion(id, parsed.data);
  redirect("/questions");
}

export type DeleteQuestionResult =
  | { success: true }
  | { success: false; error: string };

/**
 * 004-delete-question: sin optimismo de UI — el llamador solo debe quitar
 * la pregunta de la interfaz tras recibir `{ success: true }` (AC4).
 */
export async function deleteQuestionAction(
  id: number
): Promise<DeleteQuestionResult> {
  try {
    await deleteQuestion(id);
  } catch {
    return {
      success: false,
      error: "No se pudo eliminar la pregunta. Inténtalo de nuevo.",
    };
  }
  revalidatePath("/questions");
  return { success: true };
}
