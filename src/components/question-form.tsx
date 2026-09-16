"use client";

import { useState, useTransition } from "react";
import {
  createQuestionAction,
  updateQuestionAction,
  type ActionErrors,
} from "@/app/questions/actions";
import type { QuestionMode, QuestionDifficulty } from "@/lib/dal/questions";
import type { QuestionInput } from "@/lib/validation/question";
import {
  MIN_SEASON,
  MAX_SEASON,
  EPISODES_PER_SEASON,
} from "@/lib/reference/episodes";
import {
  QUESTION_DIFFICULTY_LABELS,
  QUESTION_DIFFICULTY_VALUES,
} from "@/lib/reference/difficulty";
import { ConfirmDialog } from "@/components/confirm-dialog";

/**
 * 001-create-question / 003-edit-question: mismo formulario para creación y
 * edición (principio de arquitectura nº4: no duplicar UI/lógica), tal como
 * describe `specs/001-create-question/plan.md` y
 * `specs/003-edit-question/plan.md`. En modo edición, pasar de
 * `multiple_choice` a `single` pide confirmación antes de descartar las
 * opciones sobrantes (003, AC4); en creación no hay nada persistido que
 * perder, así que el cambio de modo es directo.
 */

type OptionDraft = {
  text: string;
  isCorrect: boolean;
};

export type QuestionFormInitialValues = {
  mode: QuestionMode;
  difficulty: QuestionDifficulty;
  text: string;
  season: number | null;
  episode: number | null;
  options: { text: string; isCorrect: boolean }[];
};

type QuestionFormProps =
  | { formMode: "create"; questionId?: undefined; initialValues?: undefined }
  | { formMode: "edit"; questionId: number; initialValues: QuestionFormInitialValues };

const SEASONS = Array.from(
  { length: MAX_SEASON - MIN_SEASON + 1 },
  (_, i) => MIN_SEASON + i
);

const INPUT_CLASS =
  "block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 disabled:cursor-not-allowed disabled:bg-stone-100 disabled:text-stone-400";
const LABEL_CLASS = "mb-1 block text-sm font-medium text-stone-700";
const FIELD_ERROR_CLASS = "mt-1 text-xs font-medium text-red-600";
const FIELDSET_CLASS = "rounded-xl border border-stone-200 bg-white p-4";
const LEGEND_CLASS = "px-1 text-sm font-semibold text-stone-800";

function errorsFor(errors: ActionErrors, key: string): string[] {
  return errors[key] ?? [];
}

export function QuestionForm({ formMode, questionId, initialValues }: QuestionFormProps) {
  const [mode, setMode] = useState<QuestionMode>(initialValues?.mode ?? "single");
  const [difficulty, setDifficulty] = useState<QuestionDifficulty>(
    initialValues?.difficulty ?? "medium"
  );
  const [text, setText] = useState(initialValues?.text ?? "");
  const [season, setSeason] = useState<number | "">(initialValues?.season ?? "");
  const [episode, setEpisode] = useState<number | "">(initialValues?.episode ?? "");
  const [options, setOptions] = useState<OptionDraft[]>(
    initialValues?.options.map((o) => ({ text: o.text, isCorrect: o.isCorrect })) ?? [
      { text: "", isCorrect: true },
    ]
  );
  const [errors, setErrors] = useState<ActionErrors>({});
  const [isPending, startTransition] = useTransition();
  const [pendingSingleSwitch, setPendingSingleSwitch] = useState(false);

  const episodeChoices = season === "" ? [] : Array.from(
    { length: EPISODES_PER_SEASON[season] ?? 0 },
    (_, i) => i + 1
  );

  function applyModeChange(nextMode: QuestionMode) {
    setMode(nextMode);
    setOptions((prev) => {
      if (nextMode === "single") {
        const correct = prev.find((o) => o.isCorrect) ?? prev[0];
        return [{ text: correct?.text ?? "", isCorrect: true }];
      }
      if (prev.length >= 2) return prev;
      const first = prev[0] ?? { text: "", isCorrect: true };
      return [{ ...first, isCorrect: true }, { text: "", isCorrect: false }];
    });
    setPendingSingleSwitch(false);
  }

  function handleModeChange(nextMode: QuestionMode) {
    const isDestructiveSwitch =
      formMode === "edit" &&
      mode === "multiple_choice" &&
      nextMode === "single" &&
      options.length > 1;

    if (isDestructiveSwitch) {
      setPendingSingleSwitch(true);
      return;
    }
    applyModeChange(nextMode);
  }

  function addOption() {
    setOptions((prev) => [...prev, { text: "", isCorrect: false }]);
  }

  function removeOption(index: number) {
    setOptions((prev) => {
      const next = prev.filter((_, i) => i !== index);
      if (next.length > 0 && !next.some((o) => o.isCorrect)) {
        next[0] = { ...next[0]!, isCorrect: true };
      }
      return next;
    });
  }

  function updateOptionText(index: number, value: string) {
    setOptions((prev) =>
      prev.map((o, i) => (i === index ? { ...o, text: value } : o))
    );
  }

  function setCorrectOption(index: number) {
    setOptions((prev) => prev.map((o, i) => ({ ...o, isCorrect: i === index })));
  }

  function handleSeasonChange(value: string) {
    setSeason(value === "" ? "" : Number(value));
    setEpisode("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const input = {
      mode,
      difficulty,
      text,
      season: season === "" ? null : season,
      episode: episode === "" ? null : episode,
      options: options.map((o, index) => ({
        text: o.text,
        isCorrect: o.isCorrect,
        sortOrder: index,
      })),
    } as QuestionInput;

    startTransition(async () => {
      const result =
        formMode === "edit"
          ? await updateQuestionAction(questionId, input)
          : await createQuestionAction(input);
      if (!result.success) {
        setErrors(result.errors);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset className={FIELDSET_CLASS}>
        <legend className={LEGEND_CLASS}>Modo de pregunta</legend>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 text-sm text-stone-700">
            <input
              type="radio"
              name="mode"
              value="single"
              checked={mode === "single"}
              onChange={() => handleModeChange("single")}
              className="h-4 w-4 accent-amber-600"
            />
            Respuesta única (flashcard)
          </label>
          <label className="flex items-center gap-2 text-sm text-stone-700">
            <input
              type="radio"
              name="mode"
              value="multiple_choice"
              checked={mode === "multiple_choice"}
              onChange={() => handleModeChange("multiple_choice")}
              className="h-4 w-4 accent-amber-600"
            />
            Tipo test (varias opciones)
          </label>
        </div>
      </fieldset>

      {pendingSingleSwitch && (
        <ConfirmDialog
          message={`Cambiar a "Respuesta única" descartará ${options.length - 1} opción(es) y solo se conservará la marcada como correcta. ¿Continuar?`}
          confirmLabel="Sí, cambiar"
          cancelLabel="Cancelar"
          onConfirm={() => applyModeChange("single")}
          onCancel={() => setPendingSingleSwitch(false)}
        />
      )}

      <div>
        <label htmlFor="difficulty" className={LABEL_CLASS}>
          Dificultad
        </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as QuestionDifficulty)}
          className={`${INPUT_CLASS} max-w-xs`}
        >
          {QUESTION_DIFFICULTY_VALUES.map((value) => (
            <option key={value} value={value}>
              {QUESTION_DIFFICULTY_LABELS[value]}
            </option>
          ))}
        </select>
        {errorsFor(errors, "difficulty").map((msg) => (
          <p key={msg} role="alert" className={FIELD_ERROR_CLASS}>
            {msg}
          </p>
        ))}
      </div>

      <div>
        <label htmlFor="question-text" className={LABEL_CLASS}>
          Pregunta
        </label>
        <textarea
          id="question-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className={INPUT_CLASS}
        />
        {errorsFor(errors, "text").map((msg) => (
          <p key={msg} role="alert" className={FIELD_ERROR_CLASS}>
            {msg}
          </p>
        ))}
      </div>

      <fieldset className={FIELDSET_CLASS}>
        <legend className={LEGEND_CLASS}>
          {mode === "single" ? "Respuesta" : "Opciones"}
        </legend>
        <div className="space-y-3">
          {options.map((option, index) => (
            <div key={index}>
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  value={option.text}
                  placeholder={mode === "single" ? "Respuesta correcta" : `Opción ${index + 1}`}
                  onChange={(e) => updateOptionText(index, e.target.value)}
                  className={`${INPUT_CLASS} flex-1`}
                />
                {mode === "multiple_choice" && (
                  <>
                    <label className="flex items-center gap-1.5 whitespace-nowrap text-sm text-stone-700">
                      <input
                        type="radio"
                        name="correct-option"
                        checked={option.isCorrect}
                        onChange={() => setCorrectOption(index)}
                        className="h-4 w-4 accent-emerald-600"
                      />
                      Correcta
                    </label>
                    {options.length > 2 && (
                      <button
                        type="button"
                        onClick={() => removeOption(index)}
                        className="whitespace-nowrap rounded-md border border-stone-300 bg-white px-2.5 py-1.5 text-xs font-medium text-stone-600 shadow-sm transition hover:bg-stone-50"
                      >
                        Quitar
                      </button>
                    )}
                  </>
                )}
              </div>
              {errorsFor(errors, `options.${index}.text`).map((msg) => (
                <p key={msg} role="alert" className={FIELD_ERROR_CLASS}>
                  {msg}
                </p>
              ))}
            </div>
          ))}
        </div>
        {mode === "multiple_choice" && (
          <button
            type="button"
            onClick={addOption}
            className="mt-3 inline-flex items-center justify-center rounded-md border border-dashed border-amber-400 px-3 py-1.5 text-sm font-medium text-amber-700 transition hover:bg-amber-50"
          >
            + Añadir opción
          </button>
        )}
        {errorsFor(errors, "options").map((msg) => (
          <p key={msg} role="alert" className={FIELD_ERROR_CLASS}>
            {msg}
          </p>
        ))}
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="season" className={LABEL_CLASS}>
            Temporada (opcional)
          </label>
          <select
            id="season"
            value={season === "" ? "" : String(season)}
            onChange={(e) => handleSeasonChange(e.target.value)}
            className={INPUT_CLASS}
          >
            <option value="">Sin temporada</option>
            {SEASONS.map((s) => (
              <option key={s} value={s}>
                Temporada {s}
              </option>
            ))}
          </select>
          {errorsFor(errors, "season").map((msg) => (
            <p key={msg} role="alert" className={FIELD_ERROR_CLASS}>
              {msg}
            </p>
          ))}
        </div>

        <div>
          <label htmlFor="episode" className={LABEL_CLASS}>
            Episodio (opcional)
          </label>
          <select
            id="episode"
            value={episode === "" ? "" : String(episode)}
            onChange={(e) =>
              setEpisode(e.target.value === "" ? "" : Number(e.target.value))
            }
            disabled={season === ""}
            className={INPUT_CLASS}
          >
            <option value="">Sin episodio</option>
            {episodeChoices.map((e) => (
              <option key={e} value={e}>
                Episodio {e}
              </option>
            ))}
          </select>
          {errorsFor(errors, "episode").map((msg) => (
            <p key={msg} role="alert" className={FIELD_ERROR_CLASS}>
              {msg}
            </p>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center rounded-md bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Guardando..." : formMode === "edit" ? "Guardar cambios" : "Guardar pregunta"}
      </button>
    </form>
  );
}
