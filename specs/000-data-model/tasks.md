# Tasks: Modelo de datos — Trivia Friends

- [x] T1 — Inicializar proyecto Next.js (TypeScript, App Router, ESLint, `strict: true`)
- [x] T2 — Instalar dependencias: `drizzle-orm`, `drizzle-kit`, `@neondatabase/serverless`, `zod`, librería de Markdown restringido
- [ ] T3 — Crear proyecto en Neon y obtener connection string **(acción manual del usuario — este entorno no tiene acceso a Neon)**
- [ ] T4 — Configurar `.env.local` (local) y variable `DATABASE_URL` en Vercel **(bloqueada por T3; plantilla ya creada en `.env.local.example`)**
- [x] T5 — Definir `src/db/schema.ts` (`question`, `answer_option`, enum `mode`, FK con `ON DELETE CASCADE`)
- [x] T6 — Configurar `drizzle.config.ts`
- [x] T7 — Generar migración inicial (`drizzle-kit generate`) → `src/db/migrations/0000_right_magdalene.sql`
- [ ] T8 — Aplicar migración contra Neon **(bloqueada por T3/T4; comando ya disponible: `npm run db:migrate`)**
- [x] T9 — Implementar `src/db/client.ts` (conexión Drizzle + Neon)
- [x] T10 — Implementar `src/lib/reference/episodes.ts` (tabla season → nº episodios)
- [x] T11 — Implementar `src/lib/validation/question.ts` (zod: reglas de `000-data-model` §2 y §4)
- [x] T12 — Implementar `src/lib/dal/questions.ts` (funciones CRUD base, sin lógica de UI)
- [x] T13 — Escribir `src/db/seed.ts` con datos de ejemplo (ambos modos, con/sin season-episode) — **ejecución (`npm run db:seed`) pendiente de T3/T4/T8**
- [x] T14 — Configurar el componente de renderizado Markdown restringido (`src/components/restricted-markdown.tsx`), reutilizable por 001–003

**Verificado en este entorno:** `npm install`, `npx drizzle-kit generate` y
`npx tsc --noEmit` (modo `strict`) se han ejecutado sin errores. T3, T4, T8 y
la ejecución del seed requieren un proyecto Neon real y credenciales, que
este entorno no puede crear ni alcanzar por red.
