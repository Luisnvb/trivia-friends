import type { SeriesFactInput } from "@/lib/validation/series-fact";

/**
 * Datos sobre la serie que no están ligados a un episodio concreto: premios,
 * actores invitados, carrera paralela de los protagonistas, actores de
 * doblaje, ubicaciones y otros detalles de producción (ver `schema.seriesFact`).
 * Fuentes: Wikipedia ("Friends"), Television Academy (televisionacademy.com),
 * eldoblaje.com y búsquedas dirigidas (Collider, Screen Rant, Time, History.com)
 * para los datos más concretos (años de premios, localizaciones, doblaje).
 */
export const seriesFactData: SeriesFactInput[] = [
  // Premios
  {
    category: "award",
    title: "Mejor serie de comedia (Emmy 2002)",
    description:
      "Friends ganó el Emmy a Outstanding Comedy Series en la 54ª edición de los Premios Emmy (22 de septiembre de 2002), ya en su octava temporada, después de varias nominaciones previas sin premio.",
  },
  {
    category: "award",
    title: "Jennifer Aniston, mejor actriz protagonista (Emmy 2002)",
    description:
      "Jennifer Aniston ganó el Emmy a mejor actriz protagonista de comedia por su papel de Rachel Green, en su quinta nominación en esa categoría.",
  },
  {
    category: "award",
    title: "Lisa Kudrow, mejor actriz secundaria (Emmy 1998)",
    description:
      "Lisa Kudrow ganó el Emmy a mejor actriz secundaria de comedia por Phoebe Buffay, la primera de los seis protagonistas en ganar un Emmy por la serie.",
  },
  {
    category: "award",
    title: "Bruce Willis, mejor actor invitado (Emmy 2000)",
    description:
      "Bruce Willis ganó el Emmy a mejor actor invitado de comedia por su papel de Paul Stevens, el padre de la novia de Ross que acaba saliendo con Rachel.",
  },
  {
    category: "award",
    title: "Christina Applegate, mejor actriz invitada (Emmy 2003)",
    description:
      "Christina Applegate ganó el Emmy a mejor actriz invitada de comedia por interpretar a Amy Green, otra hermana de Rachel, en el episodio \"El de la otra hermana de Rachel\".",
  },

  // Actores invitados
  {
    category: "guest_actor",
    title: "Brad Pitt — Will Colbert (temporada 8)",
    description:
      "Brad Pitt interpretó a Will Colbert, un antiguo compañero de instituto de Ross que odiaba a Rachel, en \"El del rumor\". En ese momento Pitt estaba casado con Jennifer Aniston en la vida real.",
  },
  {
    category: "guest_actor",
    title: "Julia Roberts — Susie Moss (temporada 2)",
    description:
      "Julia Roberts interpretó a Susie Moss, una antigua compañera de instituto de Chandler que se venga de él años después, en \"El de después de la Super Bowl\".",
  },
  {
    category: "guest_actor",
    title: "Bruce Willis — Paul Stevens (temporada 6)",
    description:
      "Bruce Willis apareció en tres episodios como Paul Stevens, padre de la novia de Ross, tras perder una apuesta con Matthew Perry; donó su sueldo a obras benéficas.",
  },
  {
    category: "guest_actor",
    title: "Reese Witherspoon — Jill Green (temporada 6)",
    description:
      "Reese Witherspoon interpretó a Jill Green, una de las hermanas de Rachel, que atrae la atención de Ross durante su visita.",
  },
  {
    category: "guest_actor",
    title: "Christina Applegate — Amy Green (temporadas 9 y 10)",
    description:
      "Christina Applegate interpretó a Amy Green, otra hermana de Rachel, en dos episodios; el papel le valió un Emmy a mejor actriz invitada de comedia.",
  },
  {
    category: "guest_actor",
    title: "George Clooney y Noah Wyle — médicos (temporada 2)",
    description:
      "En \"El de las dos partes\", Chandler y Joey son atendidos por dos médicos interpretados por George Clooney y Noah Wyle, en un guiño a la serie Urgencias (ER), que se rodaba en el mismo estudio.",
  },
  {
    category: "guest_actor",
    title: "Sean Penn — Eric (temporada 8)",
    description:
      "Sean Penn interpretó a Eric, con quien Phoebe tiene un breve romance después de que este rompiera con Ursula, la hermana gemela de Phoebe.",
  },

  // Carrera paralela de los protagonistas
  {
    category: "cast_career",
    title: "Jennifer Aniston, del cine a The Morning Show",
    description:
      "Tras Friends, Jennifer Aniston protagonizó numerosas comedias de cine (Along Came Polly, Marley & Me, Cake) y más tarde la serie The Morning Show (Apple TV+), por la que ha recibido varias nominaciones al Emmy.",
  },
  {
    category: "cast_career",
    title: "Courteney Cox, de Scream a Cougar Town",
    description:
      "Courteney Cox interpretó a la periodista Gale Weathers en toda la saga de terror Scream y protagonizó y produjo la comedia Cougar Town.",
  },
  {
    category: "cast_career",
    title: "Lisa Kudrow, The Comeback y Web Therapy",
    description:
      "Lisa Kudrow coprotagonizó y coescribió la comedia de HBO The Comeback y creó la serie web Web Therapy, en la que interpreta a una terapeuta poco convencional.",
  },
  {
    category: "cast_career",
    title: "Matt LeBlanc, de Joey a Episodes",
    description:
      "Matt LeBlanc protagonizó el spin-off Joey (2004-2006) y más tarde la comedia británica Episodes y la serie Man with a Plan.",
  },
  {
    category: "cast_career",
    title: "Matthew Perry, cine, teatro y memorias",
    description:
      "Matthew Perry trabajó en cine (Fool's Gold) y televisión (The Odd Couple, 2015) y publicó en 2022 las memorias Friends, Lovers, and the Big Terrible Thing, sobre su adicción y su recuperación. Falleció en octubre de 2023.",
  },
  {
    category: "cast_career",
    title: "David Schwimmer, dirección y Madagascar",
    description:
      "David Schwimmer dirigió episodios de televisión y alguna película, puso voz a la jirafa Melman en la saga de animación Madagascar y protagonizó la serie Intelligence.",
  },

  // Actores de doblaje (España)
  {
    category: "dubbing_actor",
    title: "Alberto Mieza dobla a Ross Geller",
    description:
      "Alberto Mieza fue la voz habitual de Ross Geller (David Schwimmer) en el doblaje español de la serie.",
  },
  {
    category: "dubbing_actor",
    title: "José Posada dobla a Chandler Bing",
    description:
      "José Posada fue la voz habitual de Chandler Bing (Matthew Perry) en el doblaje español de la serie.",
  },
  {
    category: "dubbing_actor",
    title: "Daniel García dobla a Joey Tribbiani",
    description:
      "Daniel García fue la voz habitual de Joey Tribbiani (Matt LeBlanc) en el doblaje español de la serie.",
  },
  {
    category: "dubbing_actor",
    title: "Alicia Laorden dobla a Rachel Green",
    description:
      "Alicia Laorden fue la voz habitual de Rachel Green (Jennifer Aniston) en el doblaje español de la serie.",
  },
  {
    category: "dubbing_actor",
    title: "Alba Sola dobla a Phoebe Buffay",
    description:
      "Alba Sola fue la voz habitual de Phoebe Buffay (Lisa Kudrow) en el doblaje español de la serie.",
  },
  {
    category: "dubbing_actor",
    title: "Concha García Valero dobla a Monica Geller",
    description:
      "Concha García Valero fue la voz de Monica Geller (Courteney Cox) durante toda la serie. El doblaje español estuvo dirigido por Santiago Cortés, a partir de la traducción de Darryl Clark.",
  },

  // Ubicaciones
  {
    category: "location",
    title: "El edificio de Monica y Rachel: 90 Bedford Street",
    description:
      "Los exteriores del edificio de Monica y Rachel se rodaron en el número 90 de Bedford Street, esquina con Grove Street, en el barrio neoyorquino de Greenwich Village.",
  },
  {
    category: "location",
    title: "Interiores rodados en Warner Bros. Studios",
    description:
      "Pese a estar ambientada en Manhattan, la serie apenas se rodó en Nueva York: los apartamentos de Monica/Rachel y Chandler/Joey, y la cafetería Central Perk, se construyeron en platós de Warner Bros. Studios, en Burbank (California).",
  },
  {
    category: "location",
    title: "El sofá de Central Perk, atracción turística",
    description:
      "Warner Bros. reconstruyó el set de Central Perk como parte de la visita guiada de su estudio (Warner Bros. Studio Tour Hollywood), donde los fans pueden sentarse en el sofá naranja original.",
  },

  // Otros detalles de producción
  {
    category: "other",
    title: "El título original era \"Insomnia Cafe\"",
    description:
      "Antes de llamarse Friends, el proyecto se desarrolló en 1993 bajo el título Insomnia Cafe (también se barajó Friends Like Us) antes de quedarse con el nombre definitivo.",
  },
  {
    category: "other",
    title: "Estreno y final de la serie",
    description:
      "Friends se estrenó el 22 de septiembre de 1994 y el episodio final se emitió el 6 de mayo de 2004, con una audiencia estimada de 51,1 millones de espectadores solo en Estados Unidos.",
  },
  {
    category: "other",
    title: "Diez temporadas y sueldos negociados en bloque",
    description:
      "La serie duró diez temporadas (236 episodios) entre 1994 y 2004. Desde la tercera temporada, los seis protagonistas negociaron siempre juntos su sueldo, llegando a cobrar 1 millón de dólares por episodio cada uno en las últimas temporadas.",
  },
  {
    category: "other",
    title: "\"I'll Be There for You\", la canción de la cabecera",
    description:
      "El tema principal lo escribió e interpretó el grupo The Rembrandts. Antes de elegirlos, los productores intentaron sin éxito que R.E.M. cediera su canción Shiny Happy People para la cabecera.",
  },
  {
    category: "other",
    title: "\"El Rachel\", el corte de pelo del fenómeno",
    description:
      "El peinado que lució Jennifer Aniston en las primeras temporadas se popularizó como \"el Rachel\" y se convirtió en uno de los cortes de pelo más copiados de la década de 1990.",
  },
];
