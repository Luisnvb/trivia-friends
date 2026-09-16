import { questionDifficultyValues } from "@/lib/validation/question";

/**
 * Etiquetas de los tres niveles de dificultad, compartidas por el
 * formulario (001/003) y el listado (002) para no duplicar los textos.
 * Los valores vienen del esquema zod (`questionDifficultyValues`), fuente
 * de verdad de las variantes válidas.
 */
export const QUESTION_DIFFICULTY_LABELS: Record<
  (typeof questionDifficultyValues)[number],
  string
> = {
  easy: "Fácil",
  medium: "Media",
  hard: "Difícil",
};

export const QUESTION_DIFFICULTY_VALUES = questionDifficultyValues;
