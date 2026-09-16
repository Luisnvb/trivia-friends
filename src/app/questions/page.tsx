import Link from "next/link";
import { listQuestions } from "@/lib/dal/questions";
import type { SortColumn, SortDirection } from "@/lib/dal/questions";
import { AnswerReveal } from "@/components/answer-reveal";
import { RestrictedMarkdown } from "@/components/restricted-markdown";
import { DeleteQuestionButton } from "@/components/delete-question-button";
import { MIN_SEASON, MAX_SEASON } from "@/lib/reference/episodes";
import { QUESTION_DIFFICULTY_LABELS } from "@/lib/reference/difficulty";

/**
 * 002-list-questions: Server Component que lee `searchParams` y llama al
 * DAL directamente (sin estado cliente para búsqueda/filtros/orden/
 * paginación — formularios y enlaces GET nativos de Next.js).
 */

const PAGE_SIZE = 20;

const SORTABLE_COLUMNS: { key: SortColumn; label: string }[] = [
  { key: "text", label: "Pregunta" },
  { key: "season", label: "Temporada" },
  { key: "episode", label: "Episodio" },
  { key: "createdAt", label: "Creada" },
];

const SEASONS = Array.from(
  { length: MAX_SEASON - MIN_SEASON + 1 },
  (_, i) => MIN_SEASON + i
);

const INPUT_CLASS =
  "block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500";

type RawSearchParams = { [key: string]: string | string[] | undefined };

function toSingle(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function toPositiveInt(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const n = Number(value);
  return Number.isInteger(n) && n > 0 ? n : undefined;
}

export default async function QuestionsPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const rawParams = await searchParams;
  const query = toSingle(rawParams.query)?.trim() || undefined;
  const season = toPositiveInt(toSingle(rawParams.season));
  const episode = toPositiveInt(toSingle(rawParams.episode));
  const sortByParam = toSingle(rawParams.sortBy);
  const sortDirParam = toSingle(rawParams.sortDir);
  const sortBy: SortColumn = SORTABLE_COLUMNS.some((c) => c.key === sortByParam)
    ? (sortByParam as SortColumn)
    : "createdAt";
  const sortDir: SortDirection = sortDirParam === "asc" ? "asc" : "desc";
  const page = toPositiveInt(toSingle(rawParams.page)) ?? 1;

  const result = await listQuestions({
    query,
    season,
    episode,
    sortBy,
    sortDir,
    page,
    pageSize: PAGE_SIZE,
  });
  const totalPages = Math.max(1, Math.ceil(result.total / PAGE_SIZE));

  function hrefFor(overrides: Record<string, string | undefined>): string {
    const merged: Record<string, string | undefined> = {
      query,
      season: season !== undefined ? String(season) : undefined,
      episode: episode !== undefined ? String(episode) : undefined,
      sortBy,
      sortDir,
      page: page !== 1 ? String(page) : undefined,
      ...overrides,
    };
    const usp = new URLSearchParams();
    for (const [key, value] of Object.entries(merged)) {
      if (value !== undefined && value !== "") usp.set(key, value);
    }
    const qs = usp.toString();
    return qs ? `/questions?${qs}` : "/questions";
  }

  return (
    <main className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">
          Preguntas
        </h1>
        <div className="flex gap-3 text-sm font-medium">
          <Link
            href="/questions/new"
            className="inline-flex items-center justify-center rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700"
          >
            + Nueva pregunta
          </Link>
          <Link
            href="/episodes"
            className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition hover:bg-stone-50"
          >
            Ver episodios
          </Link>
        </div>
      </div>

      <form
        method="get"
        action="/questions"
        className="flex flex-wrap items-end gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
      >
        <div className="min-w-[200px] flex-1">
          <label className="mb-1 block text-xs font-medium text-stone-600">
            Buscar
          </label>
          <input
            type="text"
            name="query"
            placeholder="Buscar en el texto de la pregunta..."
            defaultValue={query ?? ""}
            className={INPUT_CLASS}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-stone-600">
            Temporada
          </label>
          <select
            name="season"
            defaultValue={season !== undefined ? String(season) : ""}
            className={INPUT_CLASS}
          >
            <option value="">Todas las temporadas</option>
            {SEASONS.map((s) => (
              <option key={s} value={s}>
                Temporada {s}
              </option>
            ))}
          </select>
        </div>
        <div className="w-28">
          <label className="mb-1 block text-xs font-medium text-stone-600">
            Episodio
          </label>
          <input
            type="number"
            name="episode"
            placeholder="Episodio"
            min={1}
            defaultValue={episode !== undefined ? String(episode) : ""}
            className={INPUT_CLASS}
          />
        </div>
        <input type="hidden" name="sortBy" value={sortBy} />
        <input type="hidden" name="sortDir" value={sortDir} />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-stone-800 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-stone-900"
        >
          Filtrar
        </button>
      </form>

      {result.items.length === 0 ? (
        <p className="rounded-xl border border-dashed border-stone-300 bg-white p-6 text-center text-stone-500">
          No hay preguntas que coincidan con los filtros.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-stone-100 text-xs font-semibold uppercase tracking-wide text-stone-500">
              <tr>
                {SORTABLE_COLUMNS.map((col) => {
                  const isActive = sortBy === col.key;
                  const nextDir = isActive && sortDir === "asc" ? "desc" : "asc";
                  return (
                    <th key={col.key} className="px-4 py-3">
                      <Link
                        href={hrefFor({ sortBy: col.key, sortDir: nextDir, page: undefined })}
                        className="inline-flex items-center gap-1 hover:text-amber-700"
                      >
                        {col.label}
                        {isActive ? (sortDir === "asc" ? " ▲" : " ▼") : ""}
                      </Link>
                    </th>
                  );
                })}
                <th className="px-4 py-3">Dificultad</th>
                <th className="px-4 py-3">Respuesta</th>
                <th className="px-4 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {result.items.map((q) => (
                <tr key={q.id} className="hover:bg-amber-50/40">
                  <td className="max-w-sm px-4 py-3 align-top text-stone-800">
                    <RestrictedMarkdown text={q.text} />
                  </td>
                  <td className="px-4 py-3 align-top text-stone-600">
                    {q.season ?? "—"}
                  </td>
                  <td className="px-4 py-3 align-top text-stone-600">
                    {q.episode ?? "—"}
                  </td>
                  <td className="px-4 py-3 align-top text-stone-600">
                    {new Date(q.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 align-top text-stone-600">
                    {QUESTION_DIFFICULTY_LABELS[q.difficulty]}
                  </td>
                  <td className="px-4 py-3 align-top">
                    <AnswerReveal options={q.options} />
                  </td>
                  <td className="px-4 py-3 align-top">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        href={`/questions/${q.id}/edit`}
                        className="font-medium text-amber-700 hover:underline"
                      >
                        Editar
                      </Link>
                      <DeleteQuestionButton questionId={q.id} questionText={q.text} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <nav className="flex items-center justify-between text-sm text-stone-600">
        <div>
          {page > 1 ? (
            <Link
              href={hrefFor({ page: String(page - 1) })}
              className="font-medium text-amber-700 hover:underline"
            >
              « Anterior
            </Link>
          ) : (
            <span />
          )}
        </div>
        <span>
          Página {page} de {totalPages} ({result.total} preguntas)
        </span>
        <div>
          {page < totalPages ? (
            <Link
              href={hrefFor({ page: String(page + 1) })}
              className="font-medium text-amber-700 hover:underline"
            >
              Siguiente »
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </main>
  );
}
