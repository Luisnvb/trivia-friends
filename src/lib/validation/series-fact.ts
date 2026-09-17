import { z } from "zod";
import { SERIES_FACT_CATEGORY_VALUES } from "@/lib/reference/series-fact-category";

/**
 * Esquema único de validación para los datos sobre la serie (premios,
 * actores invitados, etc.), compartido por creación y edición — mismo
 * patrón que `validation/question.ts`.
 */
export const seriesFactInputSchema = z.object({
  category: z.enum(SERIES_FACT_CATEGORY_VALUES, {
    errorMap: () => ({ message: "Selecciona una categoría válida." }),
  }),
  title: z.string().trim().min(1, "El título es obligatorio."),
  description: z.string().trim().min(1, "La descripción es obligatoria."),
});

export type SeriesFactInput = z.infer<typeof seriesFactInputSchema>;
