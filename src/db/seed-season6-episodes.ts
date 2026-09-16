import "./load-env";
import { upsertEpisode } from "@/lib/dal/episodes";
import { season6EpisodeData } from "./season6-episode-data";

/**
 * Inserta (o actualiza) los datos de referencia por episodio de la
 * temporada 6 (ver `season6-episode-data.ts`) en la tabla `episode`.
 */
async function main() {
  console.log(`Insertando ${season6EpisodeData.length} episodios de la temporada 6...`);

  let count = 0;
  for (const ep of season6EpisodeData) {
    await upsertEpisode(ep);
    count++;
  }

  console.log(`Insertados/actualizados ${count} episodios de la temporada 6.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los episodios de la temporada 6:", err);
    process.exit(1);
  });
