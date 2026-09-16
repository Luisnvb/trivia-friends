import Link from "next/link";
import { getRandomQuestions } from "@/lib/dal/questions";
import type { QuestionDifficulty } from "@/lib/dal/questions";
import { getEpisodeTitlesFor } from "@/lib/dal/episodes";
import { GamePlayer } from "@/components/game-player";
import { isValidSeason } from "@/lib/reference/episodes";
import { QUESTION_DIFFICULTY_VALUES } from "@/lib/reference/difficulty";

/**
 * Modo de juego: Server Component que lee la configuración de la partida
 * desde `searchParams`, pide preguntas aleatorias al DAL y las pasa al
 * `GamePlayer` (Client Component) — la aleatoriedad y el acceso a
 * PostgreSQL quedan en el servidor, la interactividad de la partida en el
 * cliente.
 */

const MIN_COUNT = 1;
const MAX_COUNT = 50;
const DEFAULT_COUNT = 10;

type RawSearchParams = { [key: string]: string | string[] | undefined };

function toSingle(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function isQuestionDifficulty(value: string): value is QuestionDifficulty {
  return (QUESTION_DIFFICULTY_VALUES as readonly string[]).includes(value);
}

export default async function PlaySessionPage({
  searchParams,
}: {
  searchParams: Promise<RawSearchParams>;
}) {
  const rawParams = await searchParams;

  const countParam = Number(toSingle(rawParams.count));
  const count =
    Number.isInteger(countParam) && countParam >= MIN_COUNT && countParam <= MAX_COUNT
      ? countParam
      : DEFAULT_COUNT;

  const seasonParam = toSingle(rawParams.season);
  const season =
    seasonParam && isValidSeason(Number(seasonParam)) ? Number(seasonParam) : undefined;

  const difficultyParam = toSingle(rawParams.difficulty);
  const difficulty =
    difficultyParam && isQuestionDifficulty(difficultyParam) ? difficultyParam : undefined;

  const questions = await getRandomQuestions({ count, season, difficulty });

  const episodePairs = questions
    .filter((q): q is typeof q & { season: number; episode: number } => q.season !== null && q.episode !== null)
    .map((q) => ({ season: q.season, episode: q.episode }));
  const episodeTitles = await getEpisodeTitlesFor(episodePairs);

  const questionsWithEpisodeTitle = questions.map((q) => ({
    ...q,
    episodeTitle:
      q.season !== null && q.episode !== null
        ? (episodeTitles.get(`${q.season}-${q.episode}`) ?? null)
        : null,
  }));

  const usp = new URLSearchParams();
  usp.set("count", String(count));
  if (season !== undefined) usp.set("season", String(season));
  if (difficulty !== undefined) usp.set("difficulty", difficulty);
  const replayHref = `/play/session?${usp.toString()}`;

  if (questions.length === 0) {
    return (
      <main className="mx-auto max-w-lg space-y-4">
        <p>
          <Link href="/play" className="text-sm font-medium text-amber-700 hover:underline">
            « Volver a configurar
          </Link>
        </p>
        <div className="space-y-2 rounded-xl border border-dashed border-stone-300 bg-white p-6 text-center">
          <h1 className="text-xl font-bold text-stone-900">No hay preguntas</h1>
          <p className="text-stone-600">
            No hay preguntas de tipo test que coincidan con esa temporada y
            dificultad. Prueba con otros filtros.
          </p>
        </div>
      </main>
    );
  }

  // La `key` fuerza a React a remontar `GamePlayer` (y por tanto reiniciar
  // su estado interno: índice, puntuación...) cada vez que la navegación
  // trae un conjunto de preguntas distinto — por ejemplo al pulsar "Jugar
  // otra vez", donde la URL cambia pero Next.js reutiliza la instancia del
  // Client Component si no se lo indicamos explícitamente.
  const sessionKey = questions.map((q) => q.id).join("-");

  return (
    <main className="mx-auto max-w-lg">
      <GamePlayer key={sessionKey} questions={questionsWithEpisodeTitle} replayHref={replayHref} />
    </main>
  );
}
