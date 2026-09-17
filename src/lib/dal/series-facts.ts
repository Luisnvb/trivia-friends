import { asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { seriesFact } from "@/db/schema";
import type { SeriesFact } from "@/db/schema";
import type { SeriesFactInput } from "@/lib/validation/series-fact";

/**
 * Acceso a los datos sobre la serie que no están ligados a un episodio
 * concreto (premios, actores invitados, carrera paralela, doblaje,
 * ubicaciones, otros). Único punto de acceso a Drizzle para esta tabla,
 * igual que `dal/questions.ts` y `dal/episodes.ts`.
 */

export async function listSeriesFacts(): Promise<SeriesFact[]> {
  return db.query.seriesFact.findMany({
    orderBy: [asc(seriesFact.category), asc(seriesFact.sortOrder), asc(seriesFact.id)],
  });
}

export async function createSeriesFact(input: SeriesFactInput): Promise<SeriesFact> {
  const [row] = await db.insert(seriesFact).values(input).returning();
  if (!row) {
    throw new Error("No se pudo crear el dato de la serie.");
  }
  return row;
}

export async function updateSeriesFact(
  id: number,
  input: SeriesFactInput
): Promise<SeriesFact> {
  const [row] = await db
    .update(seriesFact)
    .set({ ...input, updatedAt: new Date() })
    .where(eq(seriesFact.id, id))
    .returning();
  if (!row) {
    throw new Error(`No existe el dato de la serie con id ${id}.`);
  }
  return row;
}

export async function deleteSeriesFact(id: number): Promise<void> {
  await db.delete(seriesFact).where(eq(seriesFact.id, id));
}
