/**
 * Categorías de "datos sobre la serie" (fuera de las specs numeradas, igual
 * que dificultad/episodios): mismo patrón que
 * `reference/difficulty.ts` — etiquetas centralizadas, compartidas por el
 * formulario y la página de listado.
 */
export const SERIES_FACT_CATEGORY_VALUES = [
  "award",
  "guest_actor",
  "cast_career",
  "dubbing_actor",
  "location",
  "other",
] as const;

export type SeriesFactCategory = (typeof SERIES_FACT_CATEGORY_VALUES)[number];

export const SERIES_FACT_CATEGORY_LABELS: Record<SeriesFactCategory, string> = {
  award: "Premios",
  guest_actor: "Actores invitados",
  cast_career: "Carrera paralela de los protagonistas",
  dubbing_actor: "Actores de doblaje",
  location: "Ubicaciones",
  other: "Otros detalles de producción",
};
