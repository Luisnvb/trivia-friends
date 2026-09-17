# Trivia Friends

MVP de gestión de preguntas y respuestas sobre la serie Friends.
Next.js (App Router) + TypeScript + Drizzle ORM + PostgreSQL (Neon).

Las especificaciones de producto viven en `/specs` (ver también la copia en
`specs/` de este mismo paquete). Este código implementa las cinco specs
cerradas: `000-data-model` a `004-delete-question`. Además incluye un campo
de dificultad (`Question.difficulty`) que no forma parte de ninguna spec
numerada — se añadió directamente sobre el modelo base (ver más abajo).

## Puesta en marcha

1. `npm install`
2. Crear un proyecto en [Neon](https://neon.tech) y copiar la connection string.
3. `cp .env.local.example .env.local` y rellenar `DATABASE_URL`.
4. Aplicar la migración inicial contra tu base de datos:
   ```
   npm run db:migrate
   ```
   (La migración ya está generada en `src/db/migrations/0000_right_magdalene.sql`;
   si modificas `src/db/schema.ts`, regenera con `npm run db:generate`.)
5. (Opcional) Cargar datos de ejemplo:
   ```
   npm run db:seed
   ```
6. `npm run dev` y abrir `http://localhost:3000`.

## Estado

- ✅ `000-data-model`: esquema, cliente Drizzle, DAL, validación zod,
  tabla de referencia de episodios, seed y renderer Markdown restringido.
  Migración generada y aplicada contra Neon.
  - Nota: el cliente usa el driver `neon-serverless` (Pool sobre WebSocket,
    ver `src/db/client.ts`), no `neon-http`, porque el DAL usa
    `db.transaction()` y `neon-http` no soporta transacciones. `ws` está
    marcado como `serverExternalPackages` en `next.config.ts` (si no,
    webpack rompe la detección de sus dependencias nativas opcionales).
- ✅ `001-create-question`: `/questions/new`, `question-form.tsx` y la
  Server Action `createQuestionAction`. Verificado manualmente en
  navegador (AC1–AC7).
- ✅ `002-list-questions`: `/questions` con búsqueda, filtros, orden,
  paginación y mostrar/ocultar respuesta (`answer-reveal.tsx`). Verificado
  manualmente (AC1–AC8).
- ✅ `003-edit-question`: `/questions/[id]/edit`, reutiliza `question-form.tsx`
  (parametrizado con `formMode`/`initialValues`) y la Server Action
  `updateQuestionAction`. Cambio de modo `multiple_choice` → `single` pide
  confirmación inline (`confirm-dialog.tsx`, sin `window.confirm`) antes de
  descartar opciones. Verificado manualmente (AC1–AC6), incluida la ausencia
  de `AnswerOption` huérfanas tras el cambio de modo.
- ✅ `004-delete-question`: `deleteQuestionAction` + `delete-question-button.tsx`
  (reutiliza `confirm-dialog.tsx`), integrado en el listado y en la vista de
  edición. Sin optimismo de UI. Verificado manualmente (confirmar/cancelar,
  borrado real y actualización del listado).
- ✅ **Dificultad** (fuera de las specs numeradas): columna `question.difficulty`
  (enum `easy`/`medium`/`hard`, `NOT NULL DEFAULT 'medium'`), migración
  `0001_huge_blazing_skull.sql`. Validada en `lib/validation/question.ts`
  (`questionDifficultyValues`), con etiquetas centralizadas en
  `lib/reference/difficulty.ts` (Fácil/Media/Difícil). Editable en el
  formulario de creación/edición y visible como columna en el listado (sin
  filtro ni orden por dificultad, no solicitado). Verificado manualmente.

- ✅ **Contenido: temporadas 1–10 completas** — 1416 preguntas de trivia
  reales (6 por episodio, todas `multiple_choice`, mayoría dificultad
  `medium`/`hard`), generadas a partir de sinopsis de Wikipedia (una por
  temporada) e insertadas vía scripts dedicados. Cada temporada tiene su
  fichero de datos y su script de inserción (no borrar, sirven de
  referencia/regeneración):
  - `src/db/season{1..10}-trivia-data.ts` + `src/db/seed-season{1..10}.ts`
  - Verificado de forma independiente tras cada inserción: conteo por
    episodio, cardinalidad de opciones, ausencia de opciones duplicadas,
    y contraste de varios hechos concretos contra fuentes externas
    (Fandom/IMDb/Wikipedia). Se encontró y corrigió un error real de
    coherencia pregunta/respuesta en temporada 9 (episodio 24).
  - Total en la tabla `question`: 1422 filas (1416 de las 10 temporadas +
    6 de preguntas de prueba de sesiones anteriores a este contenido).

- ✅ **Tabla `episode`** (fuera de las specs numeradas): datos de referencia
  por episodio para preparar trivia — no está pensada como parte del modelo
  transaccional de preguntas, sino como material de consulta. Esquema en
  `src/db/schema.ts` (migración `0002_fantastic_slapstick.sql`), acceso vía
  `src/lib/dal/episodes.ts` (`getEpisode`, `listEpisodesBySeason`,
  `upsertEpisode`). Por cada uno de los 236 episodios de las 10 temporadas:
  título en inglés y en español, sinopsis (español, ~200-350 caracteres),
  personajes que participan en la trama, 3-5 momentos memorables y 1-3
  frases memorables atribuidas (`{character, quote}`), en `jsonb`.
  - Ficheros por temporada (conservados, igual que los de `question`):
    `src/db/season{1..10}-episode-data.ts` + `src/db/seed-season{1..10}-episodes.ts`.
  - Verificado de forma independiente tras cada temporada: conteo de filas
    (236 en total, sin huecos ni duplicados en `(season, episode)`), que
    ningún episodio quedara sin frases memorables, y contraste de varios
    datos contra fuentes externas (Wikiquote/IMDb Quotes/Wikipedia). En
    temporada 1 hubo que rehacer manualmente las citas de 4 episodios que
    la primera pasada dejó vacíos.
  - UI de solo lectura en `/episodes` (`src/app/episodes/page.tsx`):
    selector de temporada (GET, sin JS) y una tarjeta por episodio con
    título ES/EN, sinopsis, personajes, momentos y frases memorables.
    Enlazada desde `/` y desde `/questions`. Verificada manualmente en
    navegador (cambio de temporada, conteo correcto de episodios).

- ✅ **Modo de juego** (fuera de las specs numeradas): `/play` (configurar
  nº de preguntas, temporada y dificultad, formulario GET sin JS) →
  `/play/session` (Server Component: pide preguntas aleatorias al DAL con
  `getRandomQuestions`, `ORDER BY random()`, solo `multiple_choice`) →
  `game-player.tsx` (Client Component: una pregunta a la vez, feedback
  inmediato ✓/✗, puntuación, pantalla final con "jugar otra vez"/"cambiar
  configuración"). Sin lógica anti-trampas: las opciones (con `isCorrect`)
  viajan al cliente desde el principio — es una app de trivia para jugar
  entre amigos, no una plataforma de examen.
  - Verificado manualmente jugando una partida completa (respuestas
    correctas e incorrectas, puntuación final exacta).
  - Bug real encontrado y corregido durante la prueba: al pulsar "jugar
    otra vez", Next.js reutilizaba la instancia de `GamePlayer` (misma
    ruta, solo cambian los `searchParams`) y se quedaba con el estado
    (índice, puntuación) de la partida anterior en vez de reiniciar. Se
    arregló pasando `key={idsDeLasPreguntas.join("-")}` desde
    `/play/session/page.tsx` para forzar el remontaje en cada partida.
  - Cada pregunta de la partida muestra el título del episodio al que
    pertenece (📺, junto a los badges de dificultad/temporada) cuando la
    pregunta tiene `season`/`episode`. `getEpisodeTitlesFor` en
    `lib/dal/episodes.ts` resuelve los títulos de todas las preguntas de la
    partida en una sola consulta (por pares únicos `(season, episode)`) y
    `/play/session/page.tsx` los adjunta antes de pasarlos a `GamePlayer`.

- ✅ **Estilos con Tailwind CSS v4** (fuera de las specs numeradas):
  `postcss.config.mjs` + `@tailwindcss/postcss`, `src/app/globals.css`
  (`@import "tailwindcss"`). Todas las páginas y componentes reestilizados
  (cabecera/nav compartida en `layout.tsx`, tarjetas, tablas, formularios,
  badges de dificultad, barra de progreso del juego). Paleta: ámbar como
  color de acento, `stone` como neutro.
  - Bug real encontrado y corregido durante la prueba visual: el diálogo
    de confirmación de borrado (`confirm-dialog.tsx`), al vivir en la
    última columna de la tabla de `/questions`, ensanchaba esa columna al
    aparecer y se salía por la derecha del contenedor con scroll (mala UX
    para una confirmación de borrado). Se arregló posicionándolo en
    absoluto (`position: absolute`, ancla `relative` en
    `delete-question-button.tsx`) para que flote como popover sin afectar
    el ancho de la tabla.
  - Verificado con `next build` (build de producción limpio) y revisando
    visualmente en navegador cada página: inicio, listado y filtros de
    preguntas, formulario de creación/edición, `/episodes` y el flujo
    completo de `/play`.

- ✅ **Clave de edición** (fuera de las specs numeradas): variable de entorno
  `EDIT_PASSWORD` (ver `.env.local.example`), verificada en el servidor
  (`src/lib/auth/edit-key.ts`) en todas las Server Actions que crean o
  editan contenido: `createQuestionAction`/`updateQuestionAction`,
  `updateEpisodeExtraNotesAction`, `createSeriesFactAction`/
  `updateSeriesFactAction`. Al pulsar "Guardar" en cualquiera de esos
  formularios se abre `key-prompt-dialog.tsx` (mismo estilo sin
  `window.prompt` que `confirm-dialog.tsx`) pidiendo la clave; si es
  incorrecta se muestra el error y no se persiste nada, el formulario
  conserva lo escrito para reintentar. No se aplica a los botones
  "Eliminar" (ya tienen su propia confirmación destructiva).
- ✅ **Dificultad oculta en listado y modo de juego** (fuera de las specs
  numeradas): la columna `question.difficulty` se sigue guardando y
  editando en el formulario de creación/edición y mostrando durante la
  partida, pero ya no aparece como columna en `/questions` ni como filtro
  en la configuración de `/play`.
- ✅ **Datos adicionales por episodio** (fuera de las specs numeradas):
  columna `episode.extraNotes` (texto libre, Markdown simple, nullable),
  migración `0003_colossal_zeigeist.sql`. Editable desde `/episodes`
  (`episode-extra-notes.tsx`, botón "+ Añadir datos adicionales" /
  "Editar datos adicionales" con textarea inline), protegido por la clave
  de edición. DAL en `lib/dal/episodes.ts` (`updateEpisodeExtraNotes`).
- ✅ **Datos sobre la serie** (fuera de las specs numeradas): nueva tabla
  `series_fact` (`id`, `category` enum — premios/actores invitados/carrera
  paralela/doblaje/ubicaciones/otros —, `title`, `description`,
  `sortOrder`), misma migración `0003_colossal_zeigeist.sql`. DAL en
  `lib/dal/series-facts.ts`, validación en `lib/validation/series-fact.ts`,
  etiquetas en `lib/reference/series-fact-category.ts`. Nueva página
  `/series-info` ("Más sobre la serie", enlazada desde la navegación): una
  sección por categoría con sus entradas y un formulario para añadir más;
  cada entrada se puede editar (protegido por la clave) o eliminar
  (confirmación, sin clave).

Despliegue previsto en Vercel; configurar `DATABASE_URL` y `EDIT_PASSWORD`
como variables de entorno del proyecto en Vercel (no versionar `.env.local`).
