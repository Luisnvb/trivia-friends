# Plan: Modelo de datos — Trivia Friends

**Depende de:** nada (es la base técnica del proyecto).
**Del que dependen:** 001, 002, 003, 004.

## Objetivo

Preparar la base técnica sin la cual ninguna operación CRUD puede
implementarse: proyecto Next.js, conexión a Neon vía Drizzle, esquema de
datos, capa de acceso a datos (DAL), validación y datos de semilla.

## Decisiones técnicas

- Next.js (App Router) + TypeScript en modo `strict`.
- Drizzle ORM + driver `@neondatabase/serverless`.
- Esquema en `src/db/schema.ts` (`pgTable`), incluyendo el enum `mode`
  (`single` | `multiple_choice`) y la FK `answerOption.questionId` con
  `ON DELETE CASCADE`.
- Migraciones con `drizzle-kit`, ejecutadas **manualmente** (decisión ya
  tomada): `drizzle-kit generate` + aplicación contra Neon.
- `DATABASE_URL` como variable de entorno (`.env.local` en desarrollo,
  variable de entorno de Vercel en despliegue) — nunca hardcoded.
- DAL: único punto de acceso a Postgres, en `src/lib/dal/questions.ts`.
  Ningún Server/Client Component accede a Drizzle directamente
  (principio de arquitectura nº6).
- Validación: esquemas `zod` en `src/lib/validation/question.ts`,
  compartidos por creación y edición (evita duplicar reglas — principio 4).
  Aplican las invariantes de cardinalidad de `000-data-model` §2.
- Tabla de referencia estática temporada→nº de episodios en
  `src/lib/reference/episodes.ts`, usada por la validación y por el seed.
- Renderizado Markdown restringido (negrita/cursiva/saltos de línea) con una
  librería ligera, sin soporte de HTML embebido.
- Seed en `src/db/seed.ts`, ejecución manual, con preguntas de ejemplo que
  cubran ambos modos y con/sin season-episode.

## Estructura de archivos (alto nivel)

```
src/
├── db/
│   ├── schema.ts
│   ├── client.ts
│   └── seed.ts
├── lib/
│   ├── dal/questions.ts
│   ├── validation/question.ts
│   └── reference/episodes.ts
drizzle.config.ts
.env.local            (no versionado)
```

## Riesgos / consideraciones

- Las invariantes de cardinalidad (single=1 opción; multiple_choice≥2 con
  exactamente 1 correcta) no se expresan como constraint SQL simple; se
  aplican a nivel de aplicación (validación + DAL), asumido conscientemente
  por simplicidad.
- Hay que dar de alta el proyecto en Neon y configurar `DATABASE_URL` tanto
  en local como en Vercel antes de que el resto de specs puedan probarse
  end-to-end.
