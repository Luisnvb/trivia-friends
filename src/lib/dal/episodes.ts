import { and, asc, eq, or } from "drizzle-orm";
import { db } from "@/db/client";
import { episode } from "@/db/schema";
import type { Episode, MemorableQuote } from "@/db/schema";

/**
 * Acceso a los datos de referencia por episodio (sinopsis, personajes,
 * momentos/frases memorables). Al igual que `dal/questions.ts`, es el único
 * punto de acceso a Drizzle para esta tabla.
 */

export type EpisodeInput = {
  season: number;
  episode: number;
  titleEn: string;
  titleEs: string;
  synopsis: string;
  characters: string[];
  memorableMoments: string[];
  memorableQuotes: MemorableQuote[];
};

export async function getEpisode(
  season: number,
  episodeNumber: number
): Promise<Episode | null> {
  const row = await db.query.episode.findFirst({
    where: and(eq(episode.season, season), eq(episode.episode, episodeNumber)),
  });
  return row ?? null;
}

export async function listEpisodesBySeason(season: number): Promise<Episode[]> {
  return db.query.episode.findMany({
    where: eq(episode.season, season),
    orderBy: asc(episode.episode),
  });
}

/**
 * Modo de juego: título en español de los episodios de un conjunto de
 * pares (season, episode) — p. ej. los de las preguntas de una partida —
 * en una sola consulta, devuelto como mapa `"season-episode" -> titleEs`.
 */
export async function getEpisodeTitlesFor(
  pairs: { season: number; episode: number }[]
): Promise<Map<string, string>> {
  const uniquePairs = Array.from(
    new Map(pairs.map((p) => [`${p.season}-${p.episode}`, p])).values()
  );
  if (uniquePairs.length === 0) return new Map();

  const rows = await db
    .select({ season: episode.season, episode: episode.episode, titleEs: episode.titleEs })
    .from(episode)
    .where(
      or(
        ...uniquePairs.map((p) => and(eq(episode.season, p.season), eq(episode.episode, p.episode)))
      )
    );

  return new Map(rows.map((r) => [`${r.season}-${r.episode}`, r.titleEs]));
}

/** Actualiza las notas/datos adicionales de un episodio existente. */
export async function updateEpisodeExtraNotes(
  id: number,
  extraNotes: string | null
): Promise<Episode> {
  const [row] = await db
    .update(episode)
    .set({ extraNotes, updatedAt: new Date() })
    .where(eq(episode.id, id))
    .returning();

  if (!row) {
    throw new Error(`No existe el episodio con id ${id}.`);
  }
  return row;
}

/** Crea el episodio si no existe (por season+episode) o lo reemplaza si ya existe. */
export async function upsertEpisode(input: EpisodeInput): Promise<Episode> {
  const [row] = await db
    .insert(episode)
    .values(input)
    .onConflictDoUpdate({
      target: [episode.season, episode.episode],
      set: {
        titleEn: input.titleEn,
        titleEs: input.titleEs,
        synopsis: input.synopsis,
        characters: input.characters,
        memorableMoments: input.memorableMoments,
        memorableQuotes: input.memorableQuotes,
        updatedAt: new Date(),
      },
    })
    .returning();

  if (!row) {
    throw new Error(
      `No se pudo guardar el episodio S${input.season}E${input.episode}.`
    );
  }
  return row;
}
