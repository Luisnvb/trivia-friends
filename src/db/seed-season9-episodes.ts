import "./load-env";
import { upsertEpisode } from "@/lib/dal/episodes";
import { season9EpisodeData } from "./season9-episode-data";

/**
 * Inserta (o actualiza) los datos de referencia por episodio de la
 * temporada 9 (ver `season9-episode-data.ts`) en la tabla `episode`.
 */
async function main() {
  console.log(`Insertando ${season9EpisodeData.length} episodios de la temporada 9...`);

  let count = 0;
  for (const ep of season9EpisodeData) {
    await upsertEpisode(ep);
    count++;
  }

  console.log(`Insertados/actualizados ${count} episodios de la temporada 9.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los episodios de la temporada 9:", err);
    process.exit(1);
  });
