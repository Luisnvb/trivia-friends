import "./load-env";
import { upsertEpisode } from "@/lib/dal/episodes";
import { season1EpisodeData } from "./season1-episode-data";

/**
 * Inserta (o actualiza) los datos de referencia por episodio de la
 * temporada 1 (ver `season1-episode-data.ts`) en la tabla `episode`.
 */
async function main() {
  console.log(`Insertando ${season1EpisodeData.length} episodios de la temporada 1...`);

  let count = 0;
  for (const ep of season1EpisodeData) {
    await upsertEpisode(ep);
    count++;
  }

  console.log(`Insertados/actualizados ${count} episodios de la temporada 1.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los episodios de la temporada 1:", err);
    process.exit(1);
  });
