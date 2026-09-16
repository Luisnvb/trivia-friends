/**
 * Tabla de referencia estática: número de episodios por temporada de
 * Friends. No editable por el usuario (ver /specs/000-data-model/spec.md §4,
 * asunción de implementación). Usada por la validación (season/episode) y
 * por el seed.
 */
export const EPISODES_PER_SEASON: Readonly<Record<number, number>> = {
  1: 24,
  2: 24,
  3: 25,
  4: 24,
  5: 24,
  6: 25,
  7: 24,
  8: 24,
  9: 24,
  10: 18,
};

export const MIN_SEASON = 1;
export const MAX_SEASON = 10;

export function isValidSeason(season: number): boolean {
  return Number.isInteger(season) && season >= MIN_SEASON && season <= MAX_SEASON;
}

export function isValidEpisodeForSeason(
  season: number,
  episode: number
): boolean {
  const maxEpisode = EPISODES_PER_SEASON[season];
  if (maxEpisode === undefined) return false;
  return Number.isInteger(episode) && episode >= 1 && episode <= maxEpisode;
}
