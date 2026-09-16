import "./load-env";
import { upsertEpisode } from "@/lib/dal/episodes";
import { season8EpisodeData } from "./season8-episode-data";

/**
 * Inserta (o actualiza) los datos de referencia por episodio de la
 * temporada 8 (ver `season8-episode-data.ts`) en la tabla `episode`.
 */
async function main() {
  console.log(`Insertando ${season8EpisodeData.length} episodios de la temporada 8...`);

  let count = 0;
  for (const ep of season8EpisodeData) {
    await upsertEpisode(ep);
    count++;
  }

  console.log(`Insertados/actualizados ${count} episodios de la temporada 8.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los episodios de la temporada 8:", err);
    process.exit(1);
  });
