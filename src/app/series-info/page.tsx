import Link from "next/link";
import { listSeriesFacts } from "@/lib/dal/series-facts";
import {
  SERIES_FACT_CATEGORY_VALUES,
  SERIES_FACT_CATEGORY_LABELS,
} from "@/lib/reference/series-fact-category";
import { SeriesFactItem } from "@/components/series-fact-item";
import { SeriesFactForm } from "@/components/series-fact-form";

/**
 * Datos sobre la serie que no están ligados a un episodio concreto: premios,
 * actores invitados, carrera paralela de los protagonistas, actores de
 * doblaje, ubicaciones y otros detalles de producción. Server Component,
 * sin filtros/paginación (lista corta) — una sección por categoría, cada
 * una con sus entradas y un formulario para añadir más.
 */

export default async function SeriesInfoPage() {
  const facts = await listSeriesFacts();

  return (
    <main className="space-y-6">
      <p>
        <Link href="/questions" className="text-sm font-medium text-amber-700 hover:underline">
          « Volver a preguntas
        </Link>
      </p>

      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">
          Más sobre la serie
        </h1>
        <p className="text-stone-600">
          Premios, actores invitados, carrera paralela de los protagonistas,
          actores de doblaje, ubicaciones y otros detalles de producción.
        </p>
      </div>

      <div className="space-y-6">
        {SERIES_FACT_CATEGORY_VALUES.map((category) => {
          const items = facts.filter((f) => f.category === category);
          return (
            <section
              key={category}
              className="space-y-3 rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-stone-900">
                {SERIES_FACT_CATEGORY_LABELS[category]}
              </h2>

              {items.length === 0 ? (
                <p className="text-sm text-stone-500">Todavía no hay datos en esta categoría.</p>
              ) : (
                <div className="space-y-2">
                  {items.map((item) => (
                    <SeriesFactItem
                      key={item.id}
                      id={item.id}
                      category={category}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              )}

              <SeriesFactForm category={category} />
            </section>
          );
        })}
      </div>
    </main>
  );
}
