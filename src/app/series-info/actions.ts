"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { seriesFactInputSchema, type SeriesFactInput } from "@/lib/validation/series-fact";
import {
  createSeriesFact,
  updateSeriesFact,
  deleteSeriesFact,
} from "@/lib/dal/series-facts";
import { isValidEditKey, INVALID_EDIT_KEY_MESSAGE } from "@/lib/auth/edit-key";

/**
 * Server Actions para "datos sobre la serie" (premios, actores invitados,
 * carrera paralela, doblaje, ubicaciones, otros). Crear/editar exigen la
 * clave compartida, igual que en `app/questions/actions.ts` y
 * `app/episodes/actions.ts`.
 */

export type ActionErrors = Record<string, string[]>;

export type SeriesFactActionResult =
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

export async function createSeriesFactAction(
  input: SeriesFactInput,
  key: string
): Promise<SeriesFactActionResult> {
  if (!isValidEditKey(key)) {
    return { success: false, errors: { _key: [INVALID_EDIT_KEY_MESSAGE] } };
  }

  const parsed = seriesFactInputSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, errors: toErrorMap(parsed.error) };
  }

  await createSeriesFact(parsed.data);
  revalidatePath("/series-info");
  return { success: true };
}

export async function updateSeriesFactAction(
  id: number,
  input: SeriesFactInput,
  key: string
): Promise<SeriesFactActionResult> {
  if (!isValidEditKey(key)) {
    return { success: false, errors: { _key: [INVALID_EDIT_KEY_MESSAGE] } };
  }

  const parsed = seriesFactInputSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, errors: toErrorMap(parsed.error) };
  }

  await updateSeriesFact(id, parsed.data);
  revalidatePath("/series-info");
  return { success: true };
}

export type DeleteSeriesFactResult =
  | { success: true }
  | { success: false; error: string };

export async function deleteSeriesFactAction(id: number): Promise<DeleteSeriesFactResult> {
  try {
    await deleteSeriesFact(id);
  } catch {
    return {
      success: false,
      error: "No se pudo eliminar el dato. Inténtalo de nuevo.",
    };
  }
  revalidatePath("/series-info");
  return { success: true };
}
