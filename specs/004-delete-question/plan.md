# Plan: Eliminar pregunta — Trivia Friends

**Depende de:** 000-data-model.

## Decisiones técnicas

- Server Action `deleteQuestion(id)` en `src/app/questions/actions.ts`,
  delega en el DAL; el borrado en cascada de `AnswerOption` lo garantiza la
  FK `ON DELETE CASCADE` definida en `000-data-model`, no lógica de
  aplicación adicional.
- Componente de confirmación reutilizable (`confirm-dialog.tsx`, Client
  Component) usado tanto desde el listado (`002-list-questions`) como desde
  la vista de edición (`003-edit-question`).
- Manejo de error sin optimismo de UI: la fila/pregunta no desaparece de la
  interfaz hasta que la Server Action confirma el éxito.

## Pasos de alto nivel

1. DAL: `deleteQuestion(id)`.
2. Server Action `deleteQuestion`.
3. Componente `confirm-dialog.tsx` reutilizable.
4. Integrar botón "eliminar" + confirmación en la fila del listado.
5. Integrar botón "eliminar" + confirmación en la vista de edición.
6. Manejo de error (mensaje visible, sin eliminar la fila si falla).

## Criterios de aceptación cubiertos

Ver `spec.md` — AC1 a AC4.
