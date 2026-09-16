# Spec: Editar pregunta — Trivia Friends

**Estado:** CERRADA (v1). Referencia el modelo de datos en `000-data-model`.

## 1. Resumen

Modificar una pregunta existente: su texto, metadatos (`season`/`episode`),
y sus opciones de respuesta, respetando las mismas reglas de creación
(`001-create-question`).

## 2. Comportamiento esperado

- Se puede editar el texto de la pregunta y de las opciones.
- Se puede editar `season`/`episode` (añadir, quitar o cambiar), con la
  misma validación que en creación.
- Se puede cambiar el modo (`single` ↔ `multiple_choice`); al hacerlo, la
  UI debe guiar al usuario a dejar el conjunto de opciones en un estado
  válido para el nuevo modo antes de poder guardar.
- Se pueden añadir, eliminar o reordenar opciones en modo `multiple_choice`,
  y cambiar cuál está marcada como correcta.

## 3. Criterios de aceptación

1. **Dado** que cambio el texto de una pregunta existente, **cuando** guardo,
   **entonces** el cambio se refleja en el listado.
2. **Dado** que edito una pregunta en modo `multiple_choice` y dejo el
   conjunto de opciones sin cumplir las invariantes (menos de 2 opciones,
   ninguna o más de una marcada como correcta), **cuando** intento guardar,
   **entonces** el sistema rechaza el guardado, igual que en creación.
3. **Dado** que cambio el modo de `single` a `multiple_choice`, **cuando**
   guardo sin haber añadido opciones adicionales, **entonces** el sistema
   rechaza el guardado hasta que se cumpla el mínimo de 2 opciones con
   exactamente una correcta.
4. **Dado** que cambio el modo de `multiple_choice` a `single`, **cuando**
   guardo, **entonces** solo se conserva una opción como respuesta (la que
   estaba marcada como correcta) y el resto se descartan; se pide
   confirmación antes de perder las demás opciones.
5. **Dado** que modifico `season`/`episode` con valores fuera de rango,
   **cuando** intento guardar, **entonces** el sistema rechaza el cambio con
   un mensaje de validación (igual que en creación).
6. **Dado** que vacío `season`/`episode`, **cuando** guardo, **entonces** la
   pregunta queda sin esos datos (son opcionales).

## 4. Fuera de alcance

- Historial de cambios o versionado de preguntas: no se contempla en el MVP.
