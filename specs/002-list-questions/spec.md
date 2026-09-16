# Spec: Listar preguntas — Trivia Friends

**Estado:** CERRADA (v1). Referencia el modelo de datos en `000-data-model`.
Incluye "mostrar/ocultar respuesta", que ya no es una operación persistida
sino un criterio de aceptación de esta spec.

## 1. Resumen

Vista en la que se listan todas las preguntas existentes, con búsqueda,
filtros, ordenación y paginación, y con la posibilidad de mostrar/ocultar la
respuesta de cada pregunta sin recargar ni persistir ese estado.

## 2. Comportamiento esperado

- Listado paginado de preguntas.
- Búsqueda de texto libre sobre `Question.text`.
- Filtros por `season` y por `episode`.
- Ordenación por un subconjunto de columnas: **pregunta (texto), temporada,
  episodio, fecha de creación** — no por otras columnas.
- Cada fila muestra la pregunta con la(s) respuesta(s)/opciones ocultas por
  defecto, con un control para revelarlas.
- El estado mostrar/ocultar es **puramente de interfaz** (React state):
  no se persiste en base de datos ni afecta a otros usuarios/sesiones.

## 3. Criterios de aceptación

1. **Dado** que existen preguntas creadas, **cuando** accedo al listado,
   **entonces** veo sus textos, con las respuestas ocultas por defecto.
2. **Dado** que pulso "mostrar respuesta" en una pregunta, **cuando** se
   activa, **entonces** veo el texto de la(s) opción(es) de esa pregunta
   (marcando cuál es la correcta si el modo es `multiple_choice`), sin
   recargar la página ni afectar a otras preguntas.
3. **Dado** que oculto de nuevo la respuesta, **cuando** recargo la página,
   **entonces** todas las respuestas vuelven a aparecer ocultas (no persiste).
4. **Dado** que escribo un término de búsqueda, **cuando** se aplica,
   **entonces** solo se listan preguntas cuyo texto lo contiene.
5. **Dado** que filtro por `season` y/o `episode`, **cuando** se aplica,
   **entonces** solo se listan preguntas que coinciden con ese filtro.
6. **Dado** que ordeno por una de las columnas permitidas (pregunta,
   temporada, episodio, fecha de creación), **cuando** se aplica, **entonces**
   el listado se reordena en consecuencia (ascendente/descendente).
7. **Dado** que hay más preguntas que el tamaño de página, **cuando** navego
   entre páginas, **entonces** veo los resultados correspondientes sin
   duplicados ni huecos.
8. Búsqueda, filtros, orden y paginación son combinables entre sí.

## 4. Fuera de alcance

- Modificar o eliminar preguntas desde este listado más allá de navegar a
  esas acciones → `003-edit-question`, `004-delete-question`.
- Persistencia de la visibilidad de la respuesta (explícitamente descartada).
