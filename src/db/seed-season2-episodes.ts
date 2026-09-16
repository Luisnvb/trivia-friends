import "./load-env";
import { upsertEpisode } from "@/lib/dal/episodes";
import { season2EpisodeData } from "./season2-episode-data";

/**
 * Inserta (o actualiza) los datos de referencia por episodio de la
 * temporada 2 (ver `season2-episode-data.ts`) en la tabla `episode`.
 */
async function main() {
  console.log(`Insertando ${season2EpisodeData.length} episodios de la temporada 2...`);

  let count = 0;
  for (const ep of season2EpisodeData) {
    await upsertEpisode(ep);
    count++;
  }

  console.log(`Insertados/actualizados ${count} episodios de la temporada 2.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando los episodios de la temporada 2:", err);
    process.exit(1);
  });
