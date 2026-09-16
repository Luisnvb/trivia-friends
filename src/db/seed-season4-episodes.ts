import "./load-env";
import { upsertEpisode } from "@/lib/dal/episodes";
import { season4EpisodeData } from "./season4-episode-data";

/**
 * Inserta (o actualiza) los datos de referencia por episodio de la
 * temporada 4 (ver `season4-episode-data.ts`) en la tabla `episode`.
 */
async function main() {
  console.log(`Insertando ${season4EpisodeData.length} episodios de la temporada 4...`);

  let count = 0;
  for (const ep of season4EpisodeData) {
    await upsertEpisode(ep);
    count++;
  }

  console.log(`Insertados/actualizados ${count} episodios de la temporada 4.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los episodios de la temporada 4:", err);
    process.exit(1);
  });
