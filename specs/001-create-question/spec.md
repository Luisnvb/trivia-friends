# Spec: Crear pregunta — Trivia Friends

**Estado:** CERRADA (v1). Referencia el modelo de datos en `000-data-model`.

## 1. Resumen

Alta de una nueva pregunta, en modo `single` (una respuesta) o
`multiple_choice` (varias opciones, una correcta), con metadatos opcionales
de temporada/episodio.

## 2. Comportamiento esperado

- El usuario elige el modo de la pregunta (`single` o `multiple_choice`)
  antes o durante la creación.
- Modo `single`: un único campo de respuesta.
- Modo `multiple_choice`: lista dinámica de opciones (añadir/quitar), con
  selección de cuál es la correcta.
- `season`/`episode` son opcionales; si se informan, se validan según
  `000-data-model` sección 4.
- El texto de pregunta y opciones admite Markdown simple (negrita, cursiva,
  saltos de línea).

## 3. Criterios de aceptación

1. **Dado** que relleno el texto de la pregunta y elijo modo `single` con una
   respuesta, **cuando** guardo, **entonces** se crea 1 `Question` y 1
   `AnswerOption` con `isCorrect = true`.
2. **Dado** que elijo modo `multiple_choice` y añado 2+ opciones marcando
   exactamente una como correcta, **cuando** guardo, **entonces** se crea la
   `Question` con sus `AnswerOption` asociadas respetando esa cardinalidad.
3. **Dado** que estoy en modo `multiple_choice` con menos de 2 opciones, o sin
   ninguna marcada como correcta, o con más de una marcada como correcta,
   **cuando** intento guardar, **entonces** el sistema rechaza el guardado y
   muestra un error explicativo.
4. **Dado** que dejo el texto de la pregunta vacío, **cuando** intento
   guardar, **entonces** el sistema rechaza el guardado (campo requerido).
5. **Dado** que informo una `season` fuera de 1–10, o un `episode` fuera del
   rango real de la temporada indicada, **cuando** intento guardar,
   **entonces** el sistema rechaza el guardado con un mensaje de validación.
6. **Dado** que dejo `season`/`episode` vacíos, **cuando** guardo, **entonces**
   la pregunta se crea correctamente sin esos datos (son opcionales).
7. Tras un guardado correcto, la pregunta creada aparece en el listado
   (`002-list-questions`).

## 4. Fuera de alcance

- Edición de una pregunta ya creada → `003-edit-question`.
- Visibilidad de la respuesta en el listado → `002-list-questions`.
