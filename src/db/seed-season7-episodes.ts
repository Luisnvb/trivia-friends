import "./load-env";
import { upsertEpisode } from "@/lib/dal/episodes";
import { season7EpisodeData } from "./season7-episode-data";

/**
 * Inserta (o actualiza) los datos de referencia por episodio de la
 * temporada 7 (ver `season7-episode-data.ts`) en la tabla `episode`.
 */
async function main() {
  console.log(`Insertando ${season7EpisodeData.length} episodios de la temporada 7...`);

  let count = 0;
  for (const ep of season7EpisodeData) {
    await upsertEpisode(ep);
    count++;
  }

  console.log(`Insertados/actualizados ${count} episodios de la temporada 7.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los episodios de la temporada 7:", err);
    process.exit(1);
  });
