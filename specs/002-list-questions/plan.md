# Plan: Listar preguntas — Trivia Friends

**Depende de:** 000-data-model.

## Decisiones técnicas

- Ruta `/questions`: Server Component que lee `searchParams` (query, season,
  episode, sortBy, sortDir, page) y llama al DAL — sin estado cliente para
  estos parámetros (patrón nativo de Next.js: formularios/enlaces `GET`
  que actualizan la URL, evitando JS innecesario).
- DAL: `listQuestions({ query, season, episode, sortBy, sortDir, page, pageSize })`
  en `dal/questions.ts`, con `LIMIT`/`OFFSET` para paginación (suficiente
  para el volumen esperado del MVP).
- Ordenación restringida a las columnas acordadas: texto de la pregunta,
  `season`, `episode`, `createdAt`.
- Filtros restringidos a `season` y `episode` (selects, no texto libre para
  estos campos).
- Mostrar/ocultar respuesta: Client Component mínimo por fila
  (`answer-reveal.tsx`) con `useState` local — no persiste, no requiere
  Server Action.

## Pasos de alto nivel

1. Implementar `listQuestions` en el DAL (búsqueda + filtros + orden + paginación).
2. Construir `page.tsx` de `/questions` leyendo `searchParams` y renderizando
   la tabla/lista de preguntas.
3. Input de búsqueda de texto libre (formulario `GET`).
4. Selects de filtro por `season`/`episode`.
5. Cabeceras de columna ordenables (enlaces que alternan asc/desc y
   preservan el resto de `searchParams`).
6. Controles de paginación (anterior/siguiente, preservando filtros y orden).
7. Componente de fila con toggle mostrar/ocultar respuesta.
8. Verificación manual de que búsqueda, filtros, orden y paginación son
   combinables entre sí (AC8).

## Criterios de aceptación cubiertos

Ver `spec.md` — AC1 a AC8.
