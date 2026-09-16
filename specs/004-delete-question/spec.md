# Spec: Eliminar pregunta — Trivia Friends

**Estado:** CERRADA (v1). Referencia el modelo de datos en `000-data-model`.

## 1. Resumen

Borrado definitivo (hard delete) de una pregunta y todas sus opciones de
respuesta asociadas, con confirmación previa en la interfaz.

## 2. Comportamiento esperado

- Acción de eliminar disponible desde el listado (`002-list-questions`) y/o
  la vista de edición (`003-edit-question`).
- Requiere confirmación explícita del usuario antes de ejecutarse.
- Es un borrado físico (`hard delete`): la pregunta y sus `AnswerOption`
  (vía `ON DELETE CASCADE`, ver `000-data-model`) desaparecen de la base de
  datos, sin posibilidad de recuperación desde la aplicación.

## 3. Criterios de aceptación

1. **Dado** que pulso "eliminar" sobre una pregunta, **cuando** se muestra el
   diálogo de confirmación y lo cancelo, **entonces** la pregunta no se
   elimina y permanece en el listado.
2. **Dado** que pulso "eliminar" y confirmo, **cuando** se completa la
   operación, **entonces** la pregunta y todas sus opciones desaparecen de
   la base de datos y del listado.
3. **Dado** que elimino una pregunta, **cuando** consulto la base de datos
   directamente, **entonces** no quedan `AnswerOption` huérfanas asociadas a
   esa `Question`.
4. **Dado** que la eliminación falla (p. ej. error de conexión), **cuando**
   ocurre, **entonces** se muestra un mensaje de error y la pregunta
   permanece intacta en el listado.

## 4. Fuera de alcance

- Soft delete, papelera o cualquier mecanismo de recuperación (descartado
  explícitamente).
