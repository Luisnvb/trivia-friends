# Plan: Crear pregunta — Trivia Friends

**Depende de:** 000-data-model.

## Decisiones técnicas

- Ruta `/questions/new`: `page.tsx` como Server Component (layout, carga de
  la tabla de referencia de episodios); formulario como Client Component
  (`question-form.tsx`) por la interactividad requerida (modo, opciones
  dinámicas) — el resto de la página permanece Server Component (principio:
  Client Components solo cuando sean necesarios).
- Server Action `createQuestion` (co-localizada, p.ej.
  `src/app/questions/actions.ts`): valida con el esquema zod compartido de
  `000-data-model` y delega en el DAL (`dal/questions.ts`). Ninguna query
  directa desde el componente.
- El formulario reutilizará el mismo componente que `003-edit-question`
  (parametrizado por "modo creación/edición") para no duplicar UI ni lógica.
- Errores de validación se devuelven desde la Server Action y se muestran
  inline junto a cada campo.

## Pasos de alto nivel

1. Crear ruta `/questions/new` (Server Component de página).
2. Implementar `question-form.tsx` (Client Component): selector de modo,
   campo de texto de pregunta, lista dinámica de opciones (añadir/quitar,
   marcar correcta) para `multiple_choice`, selects de season/episode
   acotados por la tabla de referencia.
3. Implementar Server Action `createQuestion` usando el esquema zod y el DAL.
4. Conectar el formulario a la Server Action y mostrar errores de validación.
5. Tras guardado correcto, redirigir a `/questions` (listado) — cumple AC7.

## Criterios de aceptación cubiertos

Ver `spec.md` — AC1 a AC7.
