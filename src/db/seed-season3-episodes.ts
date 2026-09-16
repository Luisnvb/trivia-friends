import "./load-env";
import { upsertEpisode } from "@/lib/dal/episodes";
import { season3EpisodeData } from "./season3-episode-data";

/**
 * Inserta (o actualiza) los datos de referencia por episodio de la
 * temporada 3 (ver `season3-episode-data.ts`) en la tabla `episode`.
 */
async function main() {
  console.log(`Insertando ${season3EpisodeData.length} episodios de la temporada 3...`);

  let count = 0;
  for (const ep of season3EpisodeData) {
    await upsertEpisode(ep);
    count++;
  }

  console.log(`Insertados/actualizados ${count} episodios de la temporada 3.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los episodios de la temporada 3:", err);
    process.exit(1);
  });
