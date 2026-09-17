import "./load-env";
import { db } from "./client";
import { seriesFact } from "./schema";
import { createSeriesFact } from "@/lib/dal/series-facts";
import { seriesFactData } from "./series-facts-data";

/**
 * Inserta los datos sobre la serie (ver `series-facts-data.ts`) en la tabla
 * `series_fact`. No es un upsert (no hay clave natural, a diferencia de
 * `episode`): si la tabla ya tiene filas, no inserta nada para evitar
 * duplicados en re-ejecuciones.
 */
async function main() {
  const existing = await db.select().from(seriesFact);
  if (existing.length > 0) {
    console.log(
      `La tabla series_fact ya tiene ${existing.length} filas; no se inserta nada para evitar duplicados.`
    );
    return;
  }

  console.log(`Insertando ${seriesFactData.length} datos sobre la serie...`);

  let count = 0;
  for (const fact of seriesFactData) {
    await createSeriesFact(fact);
    count++;
  }

  console.log(`Insertados ${count} datos sobre la serie.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los datos sobre la serie:", err);
    process.exit(1);
  });
