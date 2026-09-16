import Link from "next/link";
import { listEpisodesBySeason } from "@/lib/dal/episodes";
import { MIN_SEASON, MAX_SEASON, EPISODES_PER_SEASON } from "@/lib/reference/episodes";

/**
 * Muestra el contenido de la tabla `episode` (sinopsis, personajes,
 * momentos y frases memorables), agrupado por temporada. Server Component
 * que lee `searchParams` y llama al DAL directamente, igual que
 * `/questions` — sin estado cliente para el filtro de temporada (select +
 * GET nativo de Next.js).
 */

const SEASONS = Array.from(
  { length: MAX_SEASON - MIN_SEASON + 1 },
  (_, i) => MIN_SEASON + i
);

function parseSeason(value: string | string[] | undefined): number {
  const raw = Array.isArray(value) ? value[0] : value;
  const n = Number(raw);
  return Number.isInteger(n) && n >= MIN_SEASON && n <= MAX_SEASON ? n : MIN_SEASON;
}

export default async function EpisodesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;
  const season = parseSeason(rawParams.season);
  const episodes = await listEpisodesBySeason(season);
  const expectedCount = EPISODES_PER_SEASON[season];

  return (
    <main className="space-y-6">
      <p>
        <Link href="/questions" className="text-sm font-medium text-amber-700 hover:underline">
          « Volver a preguntas
        </Link>
      </p>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">
          Episodios
        </h1>
        <p className="text-stone-600">
          Datos de referencia por episodio para preparar trivia.
        </p>
      </div>

      <form
        method="get"
        action="/episodes"
        className="flex flex-wrap items-end gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
      >
        <div>
          <label htmlFor="season" className="mb-1 block text-xs font-medium text-stone-600">
            Temporada
          </label>
          <select
            name="season"
            id="season"
            defaultValue={season}
            className="block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            {SEASONS.map((s) => (
              <option key={s} value={s}>
                Temporada {s}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700"
        >
          Ver
        </button>
      </form>

      <p className="text-sm text-stone-500">
        {episodes.length} de {expectedCount} episodios cargados para la
        temporada {season}.
      </p>

      {episodes.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-center text-stone-500">
          No hay episodios cargados todavía para esta temporada.
        </p>
      ) : (
        <div className="space-y-4">
          {episodes.map((ep) => (
            <article
              key={ep.id}
              className="space-y-3 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                    T{ep.season}E{ep.episode}
                  </span>
                  <h2 className="text-lg font-semibold text-stone-900">{ep.titleEs}</h2>
                </div>
                <p className="text-sm italic text-stone-500">{ep.titleEn}</p>
              </div>

              <p className="text-stone-700">{ep.synopsis}</p>

              {ep.characters.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                    Personajes:
                  </span>
                  {ep.characters.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-stone-100 px-2 py-0.5 text-xs text-stone-700"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {ep.memorableMoments.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                    Momentos memorables
                  </h3>
                  <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm text-stone-700">
                    {ep.memorableMoments.map((moment) => (
                      <li key={moment}>{moment}</li>
                    ))}
                  </ul>
                </div>
              )}

              {ep.memorableQuotes.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">
                    Frases memorables
                  </h3>
                  <ul className="mt-1 space-y-1">
                    {ep.memorableQuotes.map((q) => (
                      <li
                        key={`${q.character}-${q.quote}`}
                        className="border-l-2 border-amber-300 pl-3 text-sm text-stone-700"
                      >
                        «{q.quote}» <span className="text-stone-500">— {q.character}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
