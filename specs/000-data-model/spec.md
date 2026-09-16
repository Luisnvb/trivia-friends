# Spec: Modelo de datos — Trivia Friends

**Estado:** CERRADA (v1). Fuente de verdad del esquema para todas las specs
de operación (`001-create-question`, `002-list-questions`,
`003-edit-question`, `004-delete-question`). Ninguna de ellas debe redefinir
estas entidades: deben referenciar esta spec (principio de arquitectura nº4:
no duplicar lógica de negocio).

## 1. Entidades

### Question

| Campo | Tipo | Reglas |
|---|---|---|
| `id` | serial, PK | autoincremental |
| `text` | text | requerido, sin límite de longitud, Markdown simple (ver 3) |
| `mode` | enum(`single`, `multiple_choice`) | requerido (ver 2) |
| `season` | integer, nullable | si se informa, validado contra 1–10 (ver 4) |
| `episode` | integer, nullable | si se informa, validado contra el rango real de la temporada indicada (ver 4) |
| `createdAt` | timestamp | server-generated |
| `updatedAt` | timestamp | server-generated |

### AnswerOption

| Campo | Tipo | Reglas |
|---|---|---|
| `id` | serial, PK | autoincremental |
| `questionId` | FK → Question.id | requerido, `ON DELETE CASCADE` |
| `text` | text | requerido, sin límite de longitud, Markdown simple |
| `isCorrect` | boolean | ver reglas de cardinalidad en 2 |
| `sortOrder` | integer | orden de presentación de las opciones |

## 2. Modos de pregunta y cardinalidad de opciones

Conviven dos modos, fijados en `Question.mode`:

- **`single`** (flashcard): la pregunta tiene **exactamente 1** `AnswerOption`.
  `isCorrect` se guarda como `true` en esa única opción (no hay ambigüedad posible).
- **`multiple_choice`** (tipo test): la pregunta tiene **2 o más** `AnswerOption`,
  de las cuales **exactamente una** tiene `isCorrect = true`.

  > Asunción de implementación (no bloqueante, revisable en el plan): mínimo
  > 2 opciones exigido por el modelo; no se impone un máximo. La UI podrá
  > sugerir un número por defecto (p. ej. 4) sin que sea una restricción del
  > esquema.

Invariantes que la capa de acceso a datos debe garantizar en creación y edición:
- `single` → `AnswerOption.count == 1`
- `multiple_choice` → `AnswerOption.count >= 2` AND `COUNT(isCorrect = true) == 1`

## 3. Texto enriquecido

`Question.text` y `AnswerOption.text` admiten **Markdown simple**: negrita,
cursiva y saltos de línea. No se admite HTML embebido ni Markdown extendido
(tablas, imágenes, enlaces, etc.) — se renderiza con un parser de Markdown que
solo interprete ese subconjunto, evitando saneado complejo de HTML.

## 4. Validación de `season` / `episode`

- Ambos son opcionales: una pregunta puede ser transversal o sobre producción
  de la serie, sin ligarse a un episodio concreto.
- Si se informa `season`, debe estar entre 1 y 10.
- Si se informa `episode`, debe ser un entero positivo válido dentro del
  número real de episodios de esa temporada.

> Asunción de implementación (no bloqueante): el número de episodios por
> temporada se mantiene como una tabla de referencia estática en el código
> (no editable por el usuario), usada solo para validar el rango de
> `episode` dado un `season`. Se confirmará el detalle exacto en el plan de
> implementación.

## 5. Fuera de alcance de esta spec

- Visibilidad de la respuesta ("mostrar/ocultar"): es estado de interfaz,
  no forma parte del modelo de datos. Ver `002-list-questions`.
- Cualquier campo de puntuación, corrección de usuario o resultado de
  partida: fuera de alcance del MVP completo.
