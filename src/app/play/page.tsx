import Link from "next/link";
import { MIN_SEASON, MAX_SEASON } from "@/lib/reference/episodes";

/**
 * Modo de juego: pantalla de configuración de la partida (nº de preguntas,
 * temporada, dificultad). Formulario GET sin JS — igual que los filtros de
 * `/questions` — que lleva a `/play/session` con la configuración elegida
 * en la URL.
 */

const QUESTION_COUNTS = [5, 10, 15, 20];

const SEASONS = Array.from(
  { length: MAX_SEASON - MIN_SEASON + 1 },
  (_, i) => MIN_SEASON + i
);

const SELECT_CLASS =
  "block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500";

export default function PlaySetupPage() {
  return (
    <main className="mx-auto max-w-lg space-y-6">
      <p>
        <Link href="/" className="text-sm font-medium text-amber-700 hover:underline">
          « Volver
        </Link>
      </p>

      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">
          🎮 Jugar una partida
        </h1>
        <p className="text-stone-600">
          Elige cuántas preguntas quieres y, si te apetece, acota por
          temporada o dificultad.
        </p>
      </div>

      <form
        method="get"
        action="/play/session"
        className="space-y-5 rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label htmlFor="count" className="mb-1 block text-sm font-medium text-stone-700">
            Número de preguntas
          </label>
          <select name="count" id="count" defaultValue={10} className={SELECT_CLASS}>
            {QUESTION_COUNTS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="season" className="mb-1 block text-sm font-medium text-stone-700">
            Temporada
          </label>
          <select name="season" id="season" defaultValue="" className={SELECT_CLASS}>
            <option value="">Todas</option>
            {SEASONS.map((s) => (
              <option key={s} value={s}>
                Temporada {s}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700"
        >
          Empezar partida
        </button>
      </form>
    </main>
  );
}
