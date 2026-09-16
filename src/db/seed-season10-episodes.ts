import "./load-env";
import { upsertEpisode } from "@/lib/dal/episodes";
import { season10EpisodeData } from "./season10-episode-data";

/**
 * Inserta (o actualiza) los datos de referencia por episodio de la
 * temporada 10 (ver `season10-episode-data.ts`) en la tabla `episode`.
 */
async function main() {
  console.log(`Insertando ${season10EpisodeData.length} episodios de la temporada 10...`);

  let count = 0;
  for (const ep of season10EpisodeData) {
    await upsertEpisode(ep);
    count++;
  }

  console.log(`Insertados/actualizados ${count} episodios de la temporada 10.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los episodios de la temporada 10:", err);
    process.exit(1);
  });
