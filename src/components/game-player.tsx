"use client";

import { useState } from "react";
import Link from "next/link";
import { RestrictedMarkdown } from "@/components/restricted-markdown";
import { QUESTION_DIFFICULTY_LABELS } from "@/lib/reference/difficulty";
import type { QuestionDifficulty } from "@/lib/dal/questions";

/**
 * Modo de juego: recorre las preguntas de la partida una a una, con
 * feedback inmediato (correcta/incorrecta resaltada) y marcador final.
 * Las preguntas ya vienen con sus opciones (incluida `isCorrect`) desde el
 * servidor — no hay backend anti-trampas que ocultarlas, es una app de
 * trivia para jugar entre amigos, no una plataforma de examen.
 */

type GameOption = {
  id: number;
  text: string;
  isCorrect: boolean;
};

type GameQuestion = {
  id: number;
  text: string;
  difficulty: QuestionDifficulty;
  season: number | null;
  episode: number | null;
  episodeTitle: string | null;
  options: GameOption[];
};

const DIFFICULTY_BADGE_CLASS: Record<QuestionDifficulty, string> = {
  easy: "bg-emerald-100 text-emerald-800",
  medium: "bg-amber-100 text-amber-800",
  hard: "bg-red-100 text-red-800",
};

const PRIMARY_BUTTON_CLASS =
  "inline-flex items-center justify-center rounded-md bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700";
const SECONDARY_BUTTON_CLASS =
  "inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 shadow-sm transition hover:bg-stone-50";

export function GamePlayer({
  questions,
  replayHref,
}: {
  questions: GameQuestion[];
  replayHref: string;
}) {
  const [index, setIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const total = questions.length;
  const current = questions[index];
  const isLast = index === total - 1;
  const hasAnswered = selectedOptionId !== null;

  function handleSelect(option: GameOption) {
    if (hasAnswered) return;
    setSelectedOptionId(option.id);
    if (option.isCorrect) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    setSelectedOptionId(null);
    setIndex((i) => i + 1);
  }

  if (index >= total || !current) {
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;
    return (
      <div className="space-y-6 rounded-xl border border-stone-200 bg-white p-8 text-center shadow-sm">
        <div>
          <p className="text-5xl">🏆</p>
          <h1 className="mt-2 text-2xl font-bold text-stone-900">Partida terminada</h1>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-amber-600">
            {score} / {total}
          </p>
          <p className="text-sm text-stone-500">{percent}% de aciertos</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href={replayHref} className={PRIMARY_BUTTON_CLASS}>
            Jugar otra vez
          </Link>
          <Link href="/play" className={SECONDARY_BUTTON_CLASS}>
            Cambiar configuración
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm font-medium text-stone-600">
          <span>
            Pregunta {index + 1} de {total}
          </span>
          <span>
            Puntuación: <span className="font-semibold text-amber-700">{score}</span>
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-stone-200">
          <div
            className="h-full rounded-full bg-amber-500 transition-all"
            style={{ width: `${(index / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${DIFFICULTY_BADGE_CLASS[current.difficulty]}`}
          >
            {QUESTION_DIFFICULTY_LABELS[current.difficulty]}
          </span>
          {current.season !== null && (
            <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-600">
              Temporada {current.season}
              {current.episode !== null && `, episodio ${current.episode}`}
            </span>
          )}
        </div>

        {current.episodeTitle && (
          <p className="mb-2 text-sm italic text-stone-500">📺 {current.episodeTitle}</p>
        )}

        <h2 className="text-lg font-semibold text-stone-900">
          <RestrictedMarkdown text={current.text} />
        </h2>

        <ul className="mt-4 space-y-2">
          {current.options.map((option) => {
            const isSelected = option.id === selectedOptionId;
            const showAsCorrect = hasAnswered && option.isCorrect;
            const showAsWrong = hasAnswered && isSelected && !option.isCorrect;

            let stateClass =
              "border-stone-300 bg-white text-stone-800 hover:border-amber-400 hover:bg-amber-50";
            if (showAsCorrect) {
              stateClass = "border-emerald-500 bg-emerald-50 text-emerald-800";
            } else if (showAsWrong) {
              stateClass = "border-red-500 bg-red-50 text-red-800";
            } else if (hasAnswered) {
              stateClass = "border-stone-200 bg-white text-stone-400";
            }

            return (
              <li key={option.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(option)}
                  disabled={hasAnswered}
                  aria-pressed={isSelected}
                  className={`flex w-full items-center justify-between gap-2 rounded-lg border px-4 py-3 text-left text-sm font-medium shadow-sm transition disabled:cursor-not-allowed ${stateClass}`}
                >
                  <span>
                    <RestrictedMarkdown text={option.text} />
                  </span>
                  {showAsCorrect && <span>✓</span>}
                  {showAsWrong && <span>✗</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {hasAnswered && (
        <button type="button" onClick={handleNext} className={`${PRIMARY_BUTTON_CLASS} w-full`}>
          {isLast ? "Ver resultado final" : "Siguiente pregunta"}
        </button>
      )}
    </div>
  );
}
