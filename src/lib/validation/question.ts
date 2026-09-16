import { z } from "zod";
import { isValidSeason, isValidEpisodeForSeason } from "@/lib/reference/episodes";

/**
 * Esquema único de validación, compartido por 001-create-question y
 * 003-edit-question (principio de arquitectura nº4: no duplicar lógica de
 * negocio). Aplica las invariantes de /specs/000-data-model/spec.md §2 y §4.
 */

const answerOptionInputSchema = z.object({
  text: z.string().trim().min(1, "El texto de la opción es obligatorio."),
  isCorrect: z.boolean(),
  sortOrder: z.number().int().nonnegative(),
});

export const questionDifficultyValues = ["easy", "medium", "hard"] as const;

const baseQuestionInputSchema = z.object({
  text: z.string().trim().min(1, "El texto de la pregunta es obligatorio."),
  difficulty: z.enum(questionDifficultyValues, {
    errorMap: () => ({ message: "Selecciona una dificultad válida." }),
  }),
  season: z.number().int().nullable().optional(),
  episode: z.number().int().nullable().optional(),
});

export const questionInputSchema = z
  .discriminatedUnion("mode", [
    baseQuestionInputSchema.extend({
      mode: z.literal("single"),
      options: z
        .array(answerOptionInputSchema)
        .length(1, "El modo 'single' requiere exactamente 1 respuesta."),
    }),
    baseQuestionInputSchema.extend({
      mode: z.literal("multiple_choice"),
      options: z
        .array(answerOptionInputSchema)
        .min(2, "El modo 'multiple_choice' requiere al menos 2 opciones."),
    }),
  ])
  .superRefine((data, ctx) => {
    // Invariante de cardinalidad de "correcta" (spec §2)
    const correctCount = data.options.filter((o) => o.isCorrect).length;

    if (data.mode === "single" && correctCount !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "En modo 'single' la única opción debe estar marcada como correcta.",
        path: ["options"],
      });
    }

    if (data.mode === "multiple_choice" && correctCount !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "En modo 'multiple_choice' debe haber exactamente una opción marcada como correcta.",
        path: ["options"],
      });
    }

    // Validación de season/episode (spec §4)
    const { season, episode } = data;

    if (season !== null && season !== undefined && !isValidSeason(season)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "La temporada debe estar entre 1 y 10.",
        path: ["season"],
      });
    }

    if (episode !== null && episode !== undefined) {
      if (season === null || season === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "No se puede indicar episodio sin indicar temporada.",
          path: ["episode"],
        });
      } else if (!isValidEpisodeForSeason(season, episode)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "El episodio no es válido para la temporada indicada.",
          path: ["episode"],
        });
      }
    }
  });

export type QuestionInput = z.infer<typeof questionInputSchema>;
