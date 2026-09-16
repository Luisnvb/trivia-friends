import "./load-env";
import { createQuestion } from "@/lib/dal/questions";
import { questionInputSchema } from "@/lib/validation/question";
import { season3TriviaData } from "./season3-trivia-data";

/**
 * Inserta las preguntas de trivia de la Temporada 3 (ver
 * `season3-trivia-data.ts`). No toca las preguntas ya existentes en la
 * tabla (temporadas 1, 2 y pruebas anteriores) — solo añade filas nuevas.
 *
 * Las opciones de cada pregunta se barajan antes de insertar para que la
 * respuesta correcta no quede siempre en la misma posición del listado.
 */

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j] as T, arr[i] as T];
  }
  return arr;
}

async function main() {
  console.log(`Insertando ${season3TriviaData.length} preguntas de la temporada 3...`);

  let inserted = 0;
  for (const seed of season3TriviaData) {
    const shuffledOptions = shuffle(seed.options).map((opt, index) => ({
      text: opt.text,
      isCorrect: opt.isCorrect,
      sortOrder: index,
    }));

    const input = questionInputSchema.parse({
      mode: "multiple_choice",
      difficulty: seed.difficulty,
      text: seed.text,
      season: 3,
      episode: seed.episode,
      options: shuffledOptions,
    });

    await createQuestion(input);
    inserted++;
    if (inserted % 25 === 0) {
      console.log(`  ...${inserted}/${season3TriviaData.length}`);
    }
  }

  console.log(`Insertadas ${inserted} preguntas de la temporada 3.`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error insertando las preguntas de la temporada 3:", err);
    process.exit(1);
  });
