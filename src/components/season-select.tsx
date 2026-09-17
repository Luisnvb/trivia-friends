"use client";

/**
 * Select de temporada de `/episodes`: envía su `<form>` (GET nativo) al
 * cambiar, sin esperar a que se pulse el botón "Ver".
 */

type SeasonSelectProps = {
  seasons: number[];
  defaultValue: number;
};

export function SeasonSelect({ seasons, defaultValue }: SeasonSelectProps) {
  return (
    <select
      name="season"
      id="season"
      defaultValue={defaultValue}
      onChange={(e) => e.currentTarget.form?.requestSubmit()}
      className="block w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 shadow-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
    >
      {seasons.map((s) => (
        <option key={s} value={s}>
          Temporada {s}
        </option>
      ))}
    </select>
  );
}
