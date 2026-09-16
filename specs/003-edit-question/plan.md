# Plan: Editar pregunta — Trivia Friends

**Depende de:** 000-data-model, 001-create-question (reutiliza el formulario).

## Decisiones técnicas

- Ruta `/questions/[id]/edit`: Server Component que carga la pregunta vía
  DAL (`getQuestionById`) y pasa los datos como valores iniciales al mismo
  `question-form.tsx` de `001-create-question` (evita duplicar UI/lógica —
  principio de arquitectura nº4).
- Server Action `updateQuestion`: reutiliza el esquema zod compartido;
  aplica las mismas invariantes de cardinalidad que en creación.
- Cambio de modo `multiple_choice` → `single`: requiere diálogo de
  confirmación (Client Component) antes de descartar las opciones sobrantes,
  ya que es una operación destructiva (AC4 de la spec).
- Cambio de modo `single` → `multiple_choice`: el formulario bloquea el
  guardado hasta que se cumpla el mínimo de 2 opciones con 1 correcta
  (reutiliza la misma validación de creación).

## Pasos de alto nivel

1. DAL: `getQuestionById(id)`.
2. Ruta `/questions/[id]/edit` cargando la pregunta y sus opciones.
3. Adaptar `question-form.tsx` para aceptar valores iniciales (modo edición).
4. Implementar Server Action `updateQuestion`.
5. Diálogo de confirmación al cambiar de `multiple_choice` a `single`.
6. Validación de `season`/`episode` reutilizando la lógica de creación.

## Criterios de aceptación cubiertos

Ver `spec.md` — AC1 a AC6.
