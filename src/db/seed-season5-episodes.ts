import "./load-env";
import { upsertEpisode } from "@/lib/dal/episodes";
import { season5EpisodeData } from "./season5-episode-data";

/**
 * Inserta (o actualiza) los datos de referencia por episodio de la
 * temporada 5 (ver `season5-episode-data.ts`) en la tabla `episode`.
 */
async function main() {
  console.log(`Insertando ${season5EpisodeData.length} episodios de la temporada 5...`);

  let count = 0;
  for (const ep of season5EpisodeData) {
    await upsertEpisode(ep);
    count++;
  }

  console.log(`Insertados/actualizados ${count} episodios de la temporada 5.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los episodios de la temporada 5:", err);
    process.exit(1);
  });
