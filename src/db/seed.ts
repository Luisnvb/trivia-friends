import "./load-env";
import { db } from "./client";
import { question, answerOption } from "./schema";

/**
 * Datos de ejemplo (T13). Ejecutar manualmente con `npm run db:seed`
 * después de aplicar las migraciones. Cubre:
 * - Modo "single" con y sin season/episode.
 * - Modo "multiple_choice" con y sin season/episode.
 */
async function seed() {
  console.log("Insertando preguntas de ejemplo...");

  const [q1] = await db
    .insert(question)
    .values({
      text: "¿Cuál es el nombre del mono de Ross?",
      mode: "single",
      difficulty: "easy",
      season: 1,
      episode: 1,
    })
    .returning();

  const [q2] = await db
    .insert(question)
    .values({
      text: "¿En qué cafetería se reúnen habitualmente los protagonistas?",
      mode: "single",
      difficulty: "easy",
      season: null,
      episode: null,
    })
    .returning();

  const [q3] = await db
    .insert(question)
    .values({
      text: "¿Quién grita '¡PIVOT!' mientras suben un sofá por las escaleras?",
      mode: "multiple_choice",
      difficulty: "medium",
      season: 5,
      episode: 16,
    })
    .returning();

  const [q4] = await db
    .insert(question)
    .values({
      text: "¿Cuántas temporadas tiene Friends en total?",
      mode: "multiple_choice",
      difficulty: "hard",
      season: null,
      episode: null,
    })
    .returning();

  if (!q1 || !q2 || !q3 || !q4) {
    throw new Error("Fallo al insertar las preguntas de ejemplo.");
  }

  await db.insert(answerOption).values([
    { questionId: q1.id, text: "Marcel", isCorrect: true, sortOrder: 0 },
  ]);

  await db.insert(answerOption).values([
    { questionId: q2.id, text: "Central Perk", isCorrect: true, sortOrder: 0 },
  ]);

  await db.insert(answerOption).values([
    { questionId: q3.id, text: "Ross", isCorrect: true, sortOrder: 0 },
    { questionId: q3.id, text: "Chandler", isCorrect: false, sortOrder: 1 },
    { questionId: q3.id, text: "Joey", isCorrect: false, sortOrder: 2 },
  ]);

  await db.insert(answerOption).values([
    { questionId: q4.id, text: "8", isCorrect: false, sortOrder: 0 },
    { questionId: q4.id, text: "10", isCorrect: true, sortOrder: 1 },
    { questionId: q4.id, text: "12", isCorrect: false, sortOrder: 2 },
  ]);

  console.log("Seed completado.");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error ejecutando el seed:", err);
    process.exit(1);
  });
