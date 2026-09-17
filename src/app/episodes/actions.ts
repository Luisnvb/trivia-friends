"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { updateEpisodeExtraNotes } from "@/lib/dal/episodes";
import { isValidEditKey, INVALID_EDIT_KEY_MESSAGE } from "@/lib/auth/edit-key";

/**
 * Datos adicionales por episodio (fuera de las specs numeradas, igual que el
 * resto de la tabla `episode`): texto libre, sin límite de longitud,
 * Markdown simple igual que `question.text`. Guardarlo exige la clave
 * compartida (ver src/lib/auth/edit-key.ts).
 */

const extraNotesSchema = z.string().trim();

export type EpisodeExtraNotesActionResult =
  | { success: true; extraNotes: string | null }
  | { success: false; error: string };

export async function updateEpisodeExtraNotesAction(
  episodeId: number,
  extraNotes: string,
  key: string
): Promise<EpisodeExtraNotesActionResult> {
  if (!isValidEditKey(key)) {
    return { success: false, error: INVALID_EDIT_KEY_MESSAGE };
  }

  const parsed = extraNotesSchema.safeParse(extraNotes);
  if (!parsed.success) {
    return { success: false, error: "Datos adicionales no válidos." };
  }

  const normalized = parsed.data.length > 0 ? parsed.data : null;

  try {
    const updated = await updateEpisodeExtraNotes(episodeId, normalized);
    revalidatePath("/episodes");
    return { success: true, extraNotes: updated.extraNotes };
  } catch {
    return {
      success: false,
      error: "No se pudieron guardar los datos adicionales. Inténtalo de nuevo.",
    };
  }
}
