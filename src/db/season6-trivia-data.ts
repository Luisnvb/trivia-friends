/**
 * Preguntas de trivia de la Temporada 6 de Friends (25 episodios, 6 por
 * episodio = 150 preguntas). Generadas a partir de la sinopsis de Wikipedia
 * ("Friends (season 6)"), siguiendo el mismo patrón que
 * `season1-trivia-data.ts` a `season5-trivia-data.ts`. Insertadas por
 * `seed-season6.ts`.
 */

export type Season6TriviaSeed = {
  episode: number;
  difficulty: "easy" | "medium" | "hard";
  text: string;
  options: { text: string; isCorrect: boolean }[];
};

function opt(text: string, isCorrect = false) {
  return { text, isCorrect };
}

export const season6TriviaData: Season6TriviaSeed[] = [
  // Episodio 1 — The One After Vegas
  {
    episode: 1,
    difficulty: "easy",
    text: "¿Qué descubren Ross y Rachel al despertar tras la noche en Las Vegas?",
    options: [
      opt("Que se casaron estando borrachos", true),
      opt("Que perdieron todo su dinero"),
      opt("Que se prometieron en secreto"),
      opt("Que Ross perdió el anillo de boda"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Qué deciden hacer Monica y Chandler en este episodio?",
    options: [
      opt("Mudarse juntos", true),
      opt("Comprometerse en secreto"),
      opt("Viajar a Las Vegas también"),
      opt("Abrir un restaurante juntos"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Por qué se tensa la relación entre Phoebe y Joey durante el viaje de vuelta a Nueva York?",
    options: [
      opt("Por discusiones sobre los juegos que hacen en el coche", true),
      opt("Porque Joey se queda dormido al volante"),
      opt("Porque se pierden en el desierto"),
      opt("Porque Phoebe quiere volver en avión"),
    ],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Quién conduce de vuelta desde Las Vegas junto a Joey?",
    options: [
      opt("Phoebe", true),
      opt("Chandler"),
      opt("Monica"),
      opt("Rachel"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Cómo se titula este episodio que abre la temporada 6?",
    options: [
      opt("The One After Vegas", true),
      opt("The One in Vegas: Part 2"),
      opt("The One with the Hangover"),
      opt("The One with Ross's Wedding"),
    ],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Qué anuncia Monica al grupo que afecta directamente a Rachel?",
    options: [
      opt("Que Chandler se muda con ella, así que Rachel deberá dejar el piso", true),
      opt("Que se va a vivir sola"),
      opt("Que Chandler y ella rompen"),
      opt("Que se casa con Chandler ese mismo mes"),
    ],
  },

  // Episodio 2 — The One Where Ross Hugs Rachel
  {
    episode: 2,
    difficulty: "medium",
    text: "¿A quién le confiesa Ross que no consigue anular el matrimonio con Rachel?",
    options: [
      opt("A Phoebe", true),
      opt("A Chandler"),
      opt("A Joey"),
      opt("A Monica"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué teme Ross que le pase si anula rápidamente otro matrimonio?",
    options: [
      opt("Que parezca que vuelve a fracasar en una relación", true),
      opt("Que tenga que pagar una multa"),
      opt("Que Rachel se enfade con él para siempre"),
      opt("Que sus padres lo desaprueben"),
    ],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Cómo se entera Rachel de que sigue legalmente casada con Ross?",
    options: [
      opt("Lo descubre por su cuenta y se enfada", true),
      opt("Se lo cuenta Phoebe"),
      opt("Se lo cuenta Monica"),
      opt("Lo lee en una carta oficial que Ross le enseña"),
    ],
  },
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Quién anuncia al grupo que se muda a vivir con Chandler?",
    options: [
      opt("Monica", true),
      opt("Rachel"),
      opt("Phoebe"),
      opt("Joey"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué consecuencia tiene para Rachel la mudanza de Monica con Chandler?",
    options: [
      opt("Tiene que dejar el apartamento que comparten", true),
      opt("Tiene que pagar todo el alquiler ella sola"),
      opt("Se muda a vivir con Ross de inmediato"),
      opt("Decide irse de Nueva York"),
    ],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Qué título hace referencia a un gesto de Ross hacia Rachel en este episodio?",
    options: [
      opt("The One Where Ross Hugs Rachel", true),
      opt("The One Where Ross Kisses Rachel"),
      opt("The One with the Hug"),
      opt("The One Where Ross Apologizes"),
    ],
  },

  // Episodio 3 — The One with Ross' Denial
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué le propone Ross a Rachel en este episodio, sin admitir sus verdaderos sentimientos?",
    options: [
      opt("Que se vaya a vivir con él", true),
      opt("Que se vayan de viaje juntos"),
      opt("Que finjan estar divorciados ante todos"),
      opt("Que trabajen juntos en el museo"),
    ],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Qué le niega Ross a sí mismo durante todo este episodio?",
    options: [
      opt("Que sigue enamorado de Rachel", true),
      opt("Que está casado con Rachel"),
      opt("Que perdió su trabajo"),
      opt("Que Carol volvió a la ciudad"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Sobre qué discuten Monica y Chandler al decorar su apartamento juntos?",
    options: [
      opt("Sobre el estilo y los muebles a elegir", true),
      opt("Sobre el color de las paredes únicamente"),
      opt("Sobre dónde poner la televisión"),
      opt("Sobre a qué piso mudarse"),
    ],
  },
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Qué dificultad tiene Joey en este episodio respecto a su vivienda?",
    options: [
      opt("Encontrar un nuevo compañero de piso", true),
      opt("Pagar el alquiler"),
      opt("Encontrar apartamento nuevo"),
      opt("Arreglar la calefacción"),
    ],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Qué mantienen en secreto Ross y Rachel durante este episodio?",
    options: [
      opt("Que siguen legalmente casados", true),
      opt("Que se besaron en la mudanza"),
      opt("Que Ross fue despedido"),
      opt("Que Rachel está buscando otro trabajo"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué hace Rachel al aceptar la propuesta de Ross de este episodio?",
    options: [
      opt("Se muda a vivir con él", true),
      opt("Firma los papeles de divorcio"),
      opt("Le confiesa que aún lo quiere"),
      opt("Se compromete con él"),
    ],
  },

  // Episodio 4 — The One Where Joey Loses His Insurance
  {
    episode: 4,
    difficulty: "easy",
    text: "¿Qué problema de salud desarrolla Joey en este episodio?",
    options: [
      opt("Una hernia", true),
      opt("Una alergia grave"),
      opt("Un esguince de tobillo"),
      opt("Una infección de garganta"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Por qué pierde Joey su seguro médico?",
    options: [
      opt("Porque caduca al no tener suficiente trabajo como actor", true),
      opt("Porque lo cancela por error"),
      opt("Porque cambia de sindicato de actores"),
      opt("Porque no paga la prima a tiempo"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué hace Joey para recuperar su seguro médico?",
    options: [
      opt("Acepta un papel de actor para volver a cualificar", true),
      opt("Se casa por conveniencia"),
      opt("Pide ayuda económica a Chandler"),
      opt("Consigue un trabajo de oficina"),
    ],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Qué hace Ross mientras da clases en la universidad (NYU) en este episodio?",
    options: [
      opt("Finge tener acento inglés", true),
      opt("Finge ser profesor titular cuando no lo es"),
      opt("Cancela todas sus clases"),
      opt("Da la clase disfrazado de dinosaurio"),
    ],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Qué hace Rachel al descubrir la farsa del acento de Ross?",
    options: [
      opt("Interrumpe su clase en la universidad", true),
      opt("Se lo cuenta a todos sus alumnos por carta"),
      opt("Graba la clase en secreto"),
      opt("Avisa al decano de la universidad"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Cómo se titula este episodio centrado en el problema médico de Joey?",
    options: [
      opt("The One Where Joey Loses His Insurance", true),
      opt("The One with Joey's Hernia"),
      opt("The One with the Sick Actor"),
      opt("The One Where Joey Gets Sick"),
    ],
  },

  // Episodio 5 — The One with Joey's Porsche
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué alega Rachel en los papeles para intentar anular su matrimonio con Ross?",
    options: [
      opt("Que Ross es homosexual e inestable", true),
      opt("Que Ross la engañó para casarse"),
      opt("Que el matrimonio nunca se consumó"),
      opt("Que Ross ya estaba casado antes"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué decide el juez sobre la anulación del matrimonio de Ross y Rachel?",
    options: [
      opt("Que no procede la anulación y deben divorciarse", true),
      opt("Que la anulación es inmediata"),
      opt("Que deben esperar un año para decidir"),
      opt("Que deben acudir a terapia de pareja primero"),
    ],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué termina admitiendo Rachel sobre la boda de Las Vegas?",
    options: [
      opt("Que la boda fue idea suya", true),
      opt("Que en realidad no recuerda nada"),
      opt("Que planeaba casarse con Ross de todos modos"),
      opt("Que fue Ross quien insistió"),
    ],
  },
  {
    episode: 5,
    difficulty: "easy",
    text: "¿Qué finge tener Joey en este episodio, dejándolo aparcado en Central Perk?",
    options: [
      opt("Un Porsche", true),
      opt("Una moto de lujo"),
      opt("Un Ferrari"),
      opt("Un descapotable clásico"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿De quién es en realidad el coche que Joey presume como suyo?",
    options: [
      opt("No es suyo, solo se hace pasar por su dueño", true),
      opt("De su padre"),
      opt("De un compañero de reparto"),
      opt("De Chandler"),
    ],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué deben hacer legalmente Ross y Rachel tras la decisión del juez?",
    options: [
      opt("Tramitar un divorcio en lugar de una anulación", true),
      opt("Renovar los votos matrimoniales"),
      opt("Pagar una multa por la boda en Las Vegas"),
      opt("Esperar seis meses antes de volver a intentarlo"),
    ],
  },

  // Episodio 6 — The One on the Last Night
  {
    episode: 6,
    difficulty: "easy",
    text: "¿A qué juego juegan Chandler y Joey la última noche antes de que Chandler se mude?",
    options: [
      opt('Al juego de los "vasos" ("Cups")', true),
      opt("Al póker"),
      opt("A las cartas Uno"),
      opt("A un videojuego de lucha"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué se juegan Chandler y Joey en su partida final al juego de los vasos?",
    options: [
      opt("Dinero", true),
      opt("Quién se queda con la televisión"),
      opt("Quién se queda con el sofá"),
      opt("Un favor sin límite"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué actitud tiene Rachel respecto a hacer las maletas para mudarse?",
    options: [
      opt("Se niega a empezar a empacar", true),
      opt("Empieza semanas antes de lo necesario"),
      opt("Contrata a alguien para que lo haga"),
      opt("Empaca todo en una sola caja"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Quiénes ayudan a Rachel a hacer las maletas en este episodio?",
    options: [
      opt("Monica y Phoebe", true),
      opt("Chandler y Joey"),
      opt("Solo Phoebe"),
      opt("Ross y Monica"),
    ],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Por qué discuten Monica y Phoebe mientras ayudan con la mudanza de Rachel?",
    options: [
      opt("Por cosas que van a extrañar la una de la otra", true),
      opt("Por cómo doblar la ropa"),
      opt("Por el precio de las cajas de mudanza"),
      opt("Por quién se queda con una lámpara"),
    ],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué representa este episodio para Chandler y Joey como compañeros de piso?",
    options: [
      opt("Su última noche viviendo juntos antes de que Chandler se mude con Monica", true),
      opt("El día que Chandler decide no mudarse"),
      opt("El día que ambos deciden mudarse juntos a otro piso"),
      opt("El día que Joey se muda primero"),
    ],
  },

  // Episodio 7 — The One Where Phoebe Runs
  {
    episode: 7,
    difficulty: "easy",
    text: "¿Con quién se muda Rachel tras dejar el apartamento de Monica?",
    options: [
      opt("Con Phoebe", true),
      opt("Con Joey"),
      opt("Sola"),
      opt("Con Ross"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué evita Rachel al principio de vivir con Phoebe?",
    options: [
      opt("Correr con ella por Central Park, por su peculiar forma de correr", true),
      opt("Cocinar juntas"),
      opt("Compartir el cuarto de baño"),
      opt("Ir juntas a Central Perk"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Cómo describe el episodio la forma de correr de Phoebe?",
    options: [
      opt("Como algo muy poco convencional y llamativo", true),
      opt("Como extremadamente lenta"),
      opt("Como profesional, de atleta"),
      opt("Como idéntica a la de un corredor olímpico"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Quién es la nueva compañera de piso de Joey en este episodio?",
    options: [
      opt("Janine, una bailarina", true),
      opt("Una actriz de su serie"),
      opt("Una prima de Chandler"),
      opt("Una amiga de Monica"),
    ],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Qué actriz/modelo interpreta a Janine?",
    options: [
      opt("Elle Macpherson", true),
      opt("Reese Witherspoon"),
      opt("Winona Ryder"),
      opt("Christina Applegate"),
    ],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Por qué entra en pánico Chandler en este episodio, ya viviendo con Monica?",
    options: [
      opt("Por tener que mantener organizado el apartamento a su gusto", true),
      opt("Por una visita sorpresa de los padres de Monica"),
      opt("Por perder las llaves del apartamento"),
      opt("Por una discusión sobre las finanzas del piso"),
    ],
  },

  // Episodio 8 — The One with Ross's Teeth
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Qué se hace Ross en exceso antes de una cita en este episodio?",
    options: [
      opt("Blanquearse los dientes", true),
      opt("Broncearse"),
      opt("Cortarse el pelo"),
      opt("Hacerse la manicura"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué le pasa a Ross como consecuencia de blanquearse los dientes demasiado?",
    options: [
      opt("Le quedan de un brillo antinatural y exagerado", true),
      opt("Se le caen dos dientes"),
      opt("Le sangran las encías en la cita"),
      opt("No nota ningún cambio"),
    ],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Con qué diseñador de moda podría haberse liado Phoebe, según se comenta en el episodio?",
    options: [
      opt("Ralph Lauren", true),
      opt("Calvin Klein"),
      opt("Giorgio Armani"),
      opt("Tommy Hilfiger"),
    ],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Por qué le preocupa a Rachel el posible lío de Phoebe con ese diseñador?",
    options: [
      opt("Porque es su jefe en el trabajo", true),
      opt("Porque está casado"),
      opt("Porque es amigo de Ross"),
      opt("Porque es mucho mayor que Phoebe"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué le empieza a pasar a Joey por pasar tanto tiempo con Janine?",
    options: [
      opt("Empieza a adoptar gustos y costumbres más \"femeninas\"", true),
      opt("Empieza a vestir igual que ella"),
      opt("Se apunta a clases de baile"),
      opt("Deja de comer carne"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿A quién le preocupa el cambio de gustos de Joey?",
    options: [
      opt("A Chandler", true),
      opt("A Ross"),
      opt("A Monica"),
      opt("A Rachel"),
    ],
  },

  // Episodio 9 — The One Where Ross Got High
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué revela Ross que hizo cuando sus padres encontraron marihuana en su cuarto de joven?",
    options: [
      opt("Culpó a Chandler", true),
      opt("Culpó a Monica"),
      opt("Dijo que era de un amigo del instituto"),
      opt("Confesó la verdad de inmediato"),
    ],
  },
  {
    episode: 9,
    difficulty: "easy",
    text: "¿Qué celebración reúne a las familias en este episodio?",
    options: [
      opt("Acción de Gracias", true),
      opt("Nochevieja"),
      opt("Un cumpleaños de Ross"),
      opt("Navidad"),
    ],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Qué mezcla Rachel por error al preparar el postre inglés (trifle) de Acción de Gracias?",
    options: [
      opt("Carne picada y guisantes con el trifle de natillas", true),
      opt("Nata montada con mayonesa"),
      opt("Pastel de calabaza con chile picante"),
      opt("Gelatina con puré de patata"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué quieren hacer Joey y Ross en lugar de quedarse en la cena de Acción de Gracias?",
    options: [
      opt("Irse pronto por los planes de Joey con Janine", true),
      opt("Ver un partido de fútbol americano"),
      opt("Ir a un concierto"),
      opt("Visitar a Carol y Susan"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Ante quién confiesa Ross finalmente la verdad sobre la marihuana de su adolescencia?",
    options: [
      opt("Ante sus padres, delante de todos", true),
      opt("Ante Chandler, en privado"),
      opt("Ante Rachel"),
      opt("No llega a confesarlo en este episodio"),
    ],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Cómo se titula este episodio centrado en la confesión de Ross?",
    options: [
      opt("The One Where Ross Got High", true),
      opt("The One with the Pot Confession"),
      opt("The One with Thanksgiving Again"),
      opt("The One Where Chandler Gets Blamed"),
    ],
  },

  // Episodio 10 — The One with the Routine
  {
    episode: 10,
    difficulty: "easy",
    text: "¿En qué programa de Nochevieja aparece Janine bailando?",
    options: [
      opt("El especial de Nochevieja de Dick Clark", true),
      opt("Un especial de la MTV"),
      opt("Un desfile de Times Square retransmitido en directo"),
      opt("Un programa de talentos"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Quiénes acompañan a Janine al plató del especial de Nochevieja?",
    options: [
      opt("Joey, Ross y Monica", true),
      opt("Chandler y Phoebe"),
      opt("Solo Joey"),
      opt("Todo el grupo al completo"),
    ],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué baile de instituto recrean Ross y Monica frente a las cámaras?",
    options: [
      opt('"La Rutina" que ensayaban de adolescentes', true),
      opt("Un vals de graduación"),
      opt("Una coreografía de baile moderno"),
      opt("Un baile que inventan en el momento"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué buscan Phoebe, Chandler y Rachel mientras los demás están en el especial de TV?",
    options: [
      opt("Los regalos de Navidad que Monica ha escondido", true),
      opt("Un anillo de compromiso perdido"),
      opt("Las llaves del apartamento de Monica"),
      opt("Un gato perdido"),
    ],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Por qué reaccionan mal Ross y Monica al ver la grabación de su baile en televisión?",
    options: [
      opt("Les da mucha vergüenza verse bailando así en público", true),
      opt("Porque cortaron la parte final del baile"),
      opt("Porque pusieron música equivocada"),
      opt("Porque no los grabaron en absoluto"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Por qué se llama este episodio \"The One with the Routine\"?",
    options: [
      opt("Por el baile de instituto de Ross y Monica", true),
      opt("Por la rutina diaria de Chandler y Monica"),
      opt("Por el nuevo horario de trabajo de Rachel"),
      opt("Por los ejercicios de Phoebe"),
    ],
  },

  // Episodio 11 — The One with the Apothecary Table
  {
    episode: 11,
    difficulty: "easy",
    text: "¿Qué mueble compra Rachel y presenta como un hallazgo especial?",
    options: [
      opt("Una mesa de farmacia (\"apothecary table\")", true),
      opt("Un armario antiguo"),
      opt("Una lámpara de época"),
      opt("Una cómoda restaurada"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Dónde dice Rachel que compró la mesa, en realidad, para hacerla parecer única?",
    options: [
      opt("En un mercadillo (cuando en verdad es de Pottery Barn)", true),
      opt("En una subasta"),
      opt("En una tienda de antigüedades cara"),
      opt("Se la regaló su padre"),
    ],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Cómo descubre Phoebe la verdad sobre la mesa de Rachel?",
    options: [
      opt("Ve una idéntica en el apartamento de Ross", true),
      opt("Encuentra el recibo de Pottery Barn"),
      opt("Rachel se lo confiesa directamente"),
      opt("La ve en el catálogo de la tienda"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué empiezan a hacer finalmente Joey y Janine en este episodio?",
    options: [
      opt("Salir juntos como pareja", true),
      opt("Vivir juntos"),
      opt("Trabajar en la misma obra de teatro"),
      opt("Viajar juntos a Europa"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué opinión tiene Janine sobre Monica y Chandler como pareja de amigos de Joey?",
    options: [
      opt("No le caen bien", true),
      opt("Le encantan desde el principio"),
      opt("Le da igual, no los conoce"),
      opt("Solo le cae mal Chandler"),
    ],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Por qué le da tanta importancia Rachel al origen de su mesa nueva?",
    options: [
      opt("Porque quiere aparentar tener mejor gusto encontrando \"gangas\" únicas", true),
      opt("Porque la mesa perteneció a su abuela"),
      opt("Porque se la compró un ex novio"),
      opt("Porque es una reliquia familiar de los Geller"),
    ],
  },

  // Episodio 12 — The One with the Joke
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Sobre qué discuten Chandler y Ross en este episodio?",
    options: [
      opt("Sobre quién fue el autor original de un chiste publicado en una revista", true),
      opt("Sobre quién debería quedarse con un coche"),
      opt("Sobre quién invitó primero a Rachel a salir"),
      opt("Sobre quién tiene mejor trabajo"),
    ],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿En qué revista se publica el chiste por el que compiten Chandler y Ross?",
    options: [
      opt("Playboy", true),
      opt("Time"),
      opt("The New Yorker"),
      opt("Reader's Digest"),
    ],
  },
  {
    episode: 12,
    difficulty: "easy",
    text: "¿De qué trabajo consigue y pierde Joey en este episodio?",
    options: [
      opt("Camarero en Central Perk", true),
      opt("Repartidor de pizzas"),
      opt("Guía turístico"),
      opt("Vendedor de una tienda de discos"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Quién despide a Joey de su trabajo como camarero?",
    options: [
      opt("Gunther", true),
      opt("Monica"),
      opt("El dueño de Central Perk"),
      opt("Rachel"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Por qué despiden a Joey de Central Perk?",
    options: [
      opt("Por faltar al trabajo", true),
      opt("Por robar propinas"),
      opt("Por discutir con un cliente"),
      opt("Por llegar siempre tarde"),
    ],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué opinión comparte Phoebe sobre Rachel frente a Monica en este episodio?",
    options: [
      opt("Que prefiere a Rachel porque Monica es muy exigente", true),
      opt("Que prefiere a Monica sin ninguna duda"),
      opt("Que las dos le resultan iguales de difíciles"),
      opt("Que no soporta a ninguna de las dos"),
    ],
  },

  // Episodio 13 — The One with Rachel's Sister
  {
    episode: 13,
    difficulty: "easy",
    text: "¿Qué actriz interpreta a la hermana de Rachel, Jill, en este episodio?",
    options: [
      opt("Reese Witherspoon", true),
      opt("Elle Macpherson"),
      opt("Christina Applegate"),
      opt("Winona Ryder"),
    ],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Por qué acude Jill a Nueva York a ver a Rachel?",
    options: [
      opt("Porque sus padres le han cortado la ayuda económica", true),
      opt("Porque se ha quedado sin casa"),
      opt("Porque busca trabajo en Nueva York"),
      opt("Porque quiere reconciliarse con ella tras una pelea"),
    ],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué hace Joey con las clientas atractivas en su nuevo trabajo en este episodio?",
    options: [
      opt("Les regala productos gratis", true),
      opt("Les da su número de teléfono"),
      opt("Les cobra de menos a propósito"),
      opt("Las invita a salir a todas"),
    ],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Quién amenaza a Joey con consecuencias por regalar productos a las clientas?",
    options: [
      opt("Gunther", true),
      opt("Su jefe en la tienda"),
      opt("Chandler"),
      opt("Monica"),
    ],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué niega Monica tener en este episodio, aunque es evidente que lo tiene?",
    options: [
      opt("Un resfriado", true),
      opt("Fiebre alta"),
      opt("Alergia"),
      opt("Migraña"),
    ],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Cómo se titula este episodio centrado en la visita de la hermana de Rachel?",
    options: [
      opt("The One with Rachel's Sister", true),
      opt("The One with Jill's Visit"),
      opt("The One Where Rachel's Sister Visits"),
      opt("The One with the Two Sisters"),
    ],
  },

  // Episodio 14 — The One Where Chandler Can't Cry
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué intentan sus amigos conseguir de Chandler durante todo este episodio?",
    options: [
      opt("Hacerle llorar", true),
      opt("Hacerle reír a carcajadas"),
      opt("Hacerle confesar un secreto"),
      opt("Hacerle bailar en público"),
    ],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Con quién confunden a Phoebe en este episodio?",
    options: [
      opt("Con una actriz de cine para adultos", true),
      opt("Con una cantante famosa"),
      opt("Con una modelo de revista"),
      opt("Con una presentadora de televisión"),
    ],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Quién es la responsable de que exista esa confusión sobre la identidad de Phoebe?",
    options: [
      opt("Su hermana gemela Ursula, que grabó con el nombre de Phoebe", true),
      opt("Una impostora desconocida"),
      opt("Un error de un estudio de cine"),
      opt("La propia Phoebe, de broma"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué hace Phoebe al enterarse de que le pagan cheques por error, destinados a Ursula?",
    options: [
      opt("Se queda el dinero para ella", true),
      opt("Se lo devuelve todo de inmediato"),
      opt("Se lo entrega a Ursula en persona"),
      opt("Lo dona a una asociación benéfica"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Con quién empieza a salir Ross en este episodio, en parte para molestar a Rachel?",
    options: [
      opt("Con Jill, la hermana de Rachel", true),
      opt("Con Janine"),
      opt("Con una compañera del museo"),
      opt("Con Elizabeth"),
    ],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Consiguen finalmente los amigos hacer llorar a Chandler en este episodio?",
    options: [
      opt("No, se resiste hasta el final", true),
      opt("Sí, con una película triste"),
      opt("Sí, al hablar de su padre"),
      opt("Sí, al recordar su infancia"),
    ],
  },

  // Episodio 15 — The One That Could Have Been (Part 1)
  {
    episode: 15,
    difficulty: "easy",
    text: "¿Qué tipo de episodio especial es este, sobre cómo serían sus vidas si algo hubiera cambiado?",
    options: [
      opt("Un episodio de realidad alternativa", true),
      opt("Un episodio de recopilación (clip show)"),
      opt("Un episodio ambientado en el pasado real"),
      opt("Un episodio crossover con otra serie"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "En esta realidad alternativa, ¿qué ocurre entre Ross y Carol?",
    options: [
      opt("Siguen casados", true),
      opt("Nunca llegaron a casarse"),
      opt("Ross se casa con Susan"),
      opt("Carol vive en otro país"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "En esta realidad alternativa, ¿qué diferencia física importante tiene Monica?",
    options: [
      opt("Nunca perdió el peso de su adolescencia", true),
      opt("Es mucho más alta"),
      opt("Tiene el pelo de otro color de forma permanente"),
      opt("Lleva gafas todo el tiempo"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "En esta realidad alternativa, ¿a qué se dedica Chandler?",
    options: [
      opt("Persigue su sueño de ser escritor", true),
      opt("Sigue en el mismo trabajo de procesamiento de datos"),
      opt("Es actor junto a Joey"),
      opt("Es profesor universitario"),
    ],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "En esta realidad alternativa, ¿con quién se casa Rachel en lugar de con Ross?",
    options: [
      opt("Con Barry", true),
      opt("Con Joey"),
      opt("Con Tag"),
      opt("Con Paolo"),
    ],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "En esta realidad alternativa, ¿a qué se dedica Phoebe en lugar de cantar en Central Perk?",
    options: [
      opt("Trabaja como corredora de bolsa", true),
      opt("Es abogada"),
      opt("Es médica"),
      opt("Es profesora de yoga"),
    ],
  },

  // Episodio 16 — The One That Could Have Been (Part 2)
  {
    episode: 16,
    difficulty: "medium",
    text: "En la realidad alternativa, ¿qué papel adopta Chandler para ayudar a Joey, que no consigue trabajo como actor?",
    options: [
      opt("Se convierte en su asistente/representante", true),
      opt("Se convierte en su compañero de reparto"),
      opt("Le paga el alquiler en secreto"),
      opt("Le consigue una audición falsa"),
    ],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "En la realidad alternativa, ¿con la ayuda de quién pierde Monica la virginidad con Roger?",
    options: [
      opt("Con la ayuda involuntaria de Chandler", true),
      opt("Con la ayuda de Rachel"),
      opt("Con la ayuda de Phoebe"),
      opt("Sin ayuda de nadie del grupo"),
    ],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "En la realidad alternativa, ¿qué se da cuenta Ross sobre Carol tras sugerirle un trío?",
    options: [
      opt("Que es lesbiana", true),
      opt("Que ya no lo quiere"),
      opt("Que le es infiel"),
      opt("Que se quiere divorciar"),
    ],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "En la realidad alternativa, ¿de quién se enamora Rachel en lugar de Ross?",
    options: [
      opt("De Joey", true),
      opt("De Chandler"),
      opt("De Gunther"),
      opt("De Tag"),
    ],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "En la realidad alternativa, ¿qué le empieza a pasar a Phoebe a causa del estrés de su trabajo?",
    options: [
      opt("Sufre ataques al corazón", true),
      opt("Pierde la voz"),
      opt("Sufre insomnio crónico"),
      opt("Empieza a fumar de nuevo"),
    ],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué formato tienen en común los episodios 15 y 16 de esta temporada?",
    options: [
      opt("Ambos forman parte de \"The One That Could Have Been\"", true),
      opt("Ambos son episodios ambientados en Londres"),
      opt("Ambos son especiales musicales"),
      opt("Ambos están narrados por Ross"),
    ],
  },

  // Episodio 17 — The One with Unagi
  {
    episode: 17,
    difficulty: "easy",
    text: "¿Qué clases empiezan a tomar Rachel y Phoebe en este episodio?",
    options: [
      opt("Clases de defensa personal", true),
      opt("Clases de cocina"),
      opt("Clases de baile"),
      opt("Clases de idiomas"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué concepto asegura Ross que Rachel y Phoebe no tienen, a pesar de sus clases?",
    options: [
      opt('"Unagi", un estado de total alerta', true),
      opt("Disciplina"),
      opt("Fuerza física"),
      opt("Confianza en sí mismas"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué hace Ross para demostrar su teoría sobre el \"unagi\"?",
    options: [
      opt("Les da sustos y ataques falsos por sorpresa", true),
      opt("Les hace un examen escrito"),
      opt("Las reta a una pelea real"),
      opt("Les enseña un vídeo educativo"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué celebran Chandler y Monica con retraso en este episodio?",
    options: [
      opt("San Valentín", true),
      opt("Su aniversario de pareja"),
      opt("El cumpleaños de Chandler"),
      opt("Su primera cita"),
    ],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué regalo poco convencional le da Monica a Chandler por San Valentín?",
    options: [
      opt('Unos "conejitos" hechos con calcetines', true),
      opt("Un álbum de fotos"),
      opt("Una corbata hecha a mano"),
      opt("Un poema escrito por ella"),
    ],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿A qué estudio se apunta Joey por una paga de 2.000 dólares en este episodio?",
    options: [
      opt("Un estudio sobre gemelos idénticos", true),
      opt("Un estudio sobre el sueño"),
      opt("Un ensayo de un nuevo medicamento"),
      opt("Un estudio sobre la memoria"),
    ],
  },

  // Episodio 18 — The One Where Ross Dates a Student
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Con quién empieza a salir Ross en este episodio, arriesgando su carrera?",
    options: [
      opt("Con una alumna suya de paleontología", true),
      opt("Con una compañera profesora"),
      opt("Con la decana de la universidad"),
      opt("Con una periodista que lo entrevista"),
    ],
  },
  {
    episode: 18,
    difficulty: "easy",
    text: "¿Qué provoca Rachel por accidente en el apartamento que comparte con Phoebe?",
    options: [
      opt("Un incendio", true),
      opt("Una inundación"),
      opt("Un apagón"),
      opt("Una fuga de gas"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿A dónde se mudan Rachel y Phoebe tras el incendio de su apartamento?",
    options: [
      opt("Al apartamento de Monica y Joey", true),
      opt("Al apartamento de Ross"),
      opt("A un hotel"),
      opt("A casa de los padres de Monica"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Qué intercambian Phoebe y Rachel al mudarse con Monica y Joey?",
    options: [
      opt("De habitación entre ellas", true),
      opt("De ropa"),
      opt("De trabajo"),
      opt("De compañero de piso definitivo"),
    ],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Para qué papel ayuda Chandler a Joey a preparar una audición en este episodio?",
    options: [
      opt("Una película con Al Pacino", true),
      opt("Un anuncio de televisión"),
      opt("Una obra de Broadway"),
      opt("Una serie de acción"),
    ],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué riesgo corre Ross concretamente al salir con su alumna?",
    options: [
      opt("Consecuencias en su carrera académica si se descubre", true),
      opt("Perder la custodia de su hijo"),
      opt("Ser expulsado del museo"),
      opt("Perder su licencia de profesor de por vida sin remedio"),
    ],
  },

  // Episodio 19 — The One with Joey's Fridge
  {
    episode: 19,
    difficulty: "easy",
    text: "¿Qué electrodoméstico se rompe en el apartamento de Joey en este episodio?",
    options: [
      opt("El frigorífico", true),
      opt("El horno"),
      opt("La lavadora"),
      opt("El televisor"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué hace Joey para conseguir que sus amigos le paguen el frigorífico nuevo?",
    options: [
      opt("Los manipula emocionalmente para que se sientan responsables", true),
      opt("Organiza una colecta oficial"),
      opt("Se lo pide directamente sin rodeos"),
      opt("Vende sus propias cosas para pagarlo él mismo"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿A dónde se va Elizabeth en este episodio, desatando la paranoia de Ross?",
    options: [
      opt("A Miami", true),
      opt("A Londres"),
      opt("A California"),
      opt("A Florida, pero a Orlando"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Para qué evento le pide Rachel ayuda a Phoebe, Chandler y Monica en este episodio?",
    options: [
      opt("Para encontrarle una cita para el baile de Ralph Lauren", true),
      opt("Para organizar su cumpleaños"),
      opt("Para mudarse de nuevo"),
      opt("Para preparar una entrevista de trabajo"),
    ],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué provoca la ayuda de sus amigos al buscarle cita a Rachel?",
    options: [
      opt("Que compiten entre ellos y terminan espantando al pretendiente", true),
      opt("Que consiguen una cita perfecta sin problemas"),
      opt("Que Rachel decide ir sola al final"),
      opt("Que Ross se ofrece como su cita"),
    ],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Por qué se pone tan paranoico Ross respecto al viaje de Elizabeth?",
    options: [
      opt("Por inseguridad y celos sobre la relación a distancia", true),
      opt("Porque ella no le avisó del viaje"),
      opt("Porque viaja con un examante"),
      opt("Porque teme que no vuelva nunca"),
    ],
  },

  // Episodio 20 — The One with Mac and C.H.E.E.S.E.
  {
    episode: 20,
    difficulty: "easy",
    text: "¿A qué personaje intenta interpretar Joey en la audición de este episodio?",
    options: [
      opt('A "Mac" Machiavelli', true),
      opt("A un robot"),
      opt("A un detective de policía"),
      opt("A un astronauta"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Cómo se llama el robot compañero del personaje de Joey en la serie a la que se presenta?",
    options: [
      opt("C.H.E.E.S.E.", true),
      opt("R.O.B.O.T."),
      opt("MAC-9000"),
      opt("BUDDY"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Qué tipo de episodio es este, con muchos flashbacks de temporadas anteriores?",
    options: [
      opt("Un episodio de recopilación (clip show)", true),
      opt("Un episodio de realidad alternativa"),
      opt("Un episodio ambientado enteramente en un sueño"),
      opt("Un episodio musical"),
    ],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué hace Chandler que provoca que Joey se pierda una segunda audición?",
    options: [
      opt("Lo interrumpe mientras escribe para darle una noticia", true),
      opt("Le esconde el guion"),
      opt("Le da la hora equivocada"),
      opt("Le pide que lo acompañe a una cita"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Sobre qué reflexiona el grupo mientras recuerdan viejos momentos en este episodio?",
    options: [
      opt("Sobre errores que han cometido en el pasado", true),
      opt("Sobre sus mejores vacaciones juntos"),
      opt("Sobre sus primeros trabajos"),
      opt("Sobre sus primeras citas"),
    ],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué tipo de producción es \"Mac and C.H.E.E.S.E.\", la serie a la que aspira Joey?",
    options: [
      opt("Una serie de televisión por cable de bajo presupuesto", true),
      opt("Una gran producción de cine"),
      opt("Un musical de Broadway"),
      opt("Un anuncio publicitario"),
    ],
  },

  // Episodio 21 — The One Where Ross Meets Elizabeth's Dad
  {
    episode: 21,
    difficulty: "easy",
    text: "¿A quién conoce Ross en este episodio, con cierto nerviosismo?",
    options: [
      opt("Al padre de Elizabeth", true),
      opt("Al padre de Rachel"),
      opt("A un antiguo profesor suyo"),
      opt("Al decano de la universidad"),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué actor interpreta al padre de Elizabeth, Paul?",
    options: [
      opt("Bruce Willis", true),
      opt("Tom Selleck"),
      opt("Jean-Claude Van Damme"),
      opt("Danny DeVito"),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Cómo reacciona Paul al conocer a Ross como novio de su hija?",
    options: [
      opt("Le cae mal desde el principio", true),
      opt("Le encanta al instante"),
      opt("Se muestra indiferente"),
      opt("Lo confunde con otra persona"),
    ],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿A quién le resulta interesante Paul, para sorpresa del grupo?",
    options: [
      opt("A Rachel", true),
      opt("A Monica"),
      opt("A Phoebe"),
      opt("A Janine"),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué opina Joey del robot C.H.E.E.S.E. mientras trabaja en la serie?",
    options: [
      opt("Lo critica abiertamente", true),
      opt("Le encanta trabajar con él"),
      opt("No tiene ninguna opinión"),
      opt("Pide que lo sustituyan por un actor humano"),
    ],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Qué amenaza recibe Joey por criticar al robot de su serie?",
    options: [
      opt("Que el operador del robot amenaza con hacer que lo despidan", true),
      opt("Que le bajan el sueldo"),
      opt("Que le quitan las líneas de diálogo"),
      opt("Que cancelan la serie por su culpa"),
    ],
  },

  // Episodio 22 — The One Where Paul's the Man
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué le prohíbe Paul a Ross en este episodio?",
    options: [
      opt("Que siga saliendo con su hija Elizabeth", true),
      opt("Que trabaje en el mismo museo que él"),
      opt("Que hable con Rachel"),
      opt("Que se acerque a su casa"),
    ],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Con qué amenaza Paul a Ross si sigue viendo a Elizabeth?",
    options: [
      opt("Con perjudicar su puesto de trabajo", true),
      opt("Con denunciarlo legalmente"),
      opt("Con contárselo a toda la universidad"),
      opt("Con echarlo de la ciudad"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué hacen Ross y Elizabeth a pesar de la prohibición de Paul?",
    options: [
      opt("Se ven a escondidas en la cabaña familiar", true),
      opt("Se van a vivir juntos de inmediato"),
      opt("Rompen la relación"),
      opt("Se lo cuentan todo a los padres de Ross"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Con quién empieza a salir Paul mientras tanto?",
    options: [
      opt("Con Rachel", true),
      opt("Con Monica"),
      opt("Con Phoebe"),
      opt("Con Janine"),
    ],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿A qué lista se apuntan las chicas del grupo en este episodio, relacionada con una boda futura?",
    options: [
      opt("La lista de espera de un salón de bodas", true),
      opt("La lista de invitados de una boda ajena"),
      opt("Una lista de posibles vestidos de novia"),
      opt("La lista de regalos de una boda"),
    ],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Qué descubre Chandler que le genera pánico sobre esa lista de espera del salón?",
    options: [
      opt("Que se ha abierto un hueco disponible antes de lo esperado", true),
      opt("Que han cancelado la lista por completo"),
      opt("Que el precio se ha triplicado"),
      opt("Que Monica ya reservó fecha sin decírselo"),
    ],
  },

  // Episodio 23 — The One with the Ring
  {
    episode: 23,
    difficulty: "easy",
    text: "¿En qué busca ayuda Chandler por parte de Phoebe en este episodio?",
    options: [
      opt("En encontrar el anillo de compromiso perfecto", true),
      opt("En planear una fiesta sorpresa"),
      opt("En elegir restaurante para pedir matrimonio"),
      opt("En escribir un discurso"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué error comete Chandler tras encontrar el anillo perfecto?",
    options: [
      opt("Deja a Phoebe sola con el anillo y ella pierde la venta", true),
      opt("Se olvida de pagarlo"),
      opt("Elige la talla equivocada"),
      opt("Se lo enseña a Monica sin querer"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué hace Chandler para recuperar el anillo tras el error de la joyería?",
    options: [
      opt("Localiza al comprador que se llevó el anillo", true),
      opt("Compra uno idéntico en otra tienda"),
      opt("Renuncia a ese anillo y elige otro"),
      opt("Le pide ayuda a la policía"),
    ],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿A quién anima Rachel a sincerarse emocionalmente en este episodio?",
    options: [
      opt("A Paul", true),
      opt("A Ross"),
      opt("A Chandler"),
      opt("A su padre"),
    ],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Por qué termina Rachel su relación con Paul en este episodio?",
    options: [
      opt("Porque él no deja de abrirse emocionalmente sin parar, agobiándola", true),
      opt("Porque lo descubre siéndole infiel"),
      opt("Porque decide que sigue queriendo a Ross"),
      opt("Porque Paul se muda a otra ciudad"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué busca exactamente Chandler durante todo este episodio?",
    options: [
      opt("El anillo de compromiso perfecto para Monica", true),
      opt("Un local para una fiesta"),
      opt("Un regalo de cumpleaños para Monica"),
      opt("Las llaves perdidas de su apartamento"),
    ],
  },

  // Episodios 24-25 — The One with the Proposal
  {
    episode: 24,
    difficulty: "easy",
    text: "¿Qué planea Chandler para Monica en este episodio doble que cierra la temporada?",
    options: [
      opt("Pedirle matrimonio", true),
      opt("Una fiesta sorpresa de cumpleaños"),
      opt("Un viaje sorpresa"),
      opt("Mudarse a otra ciudad juntos"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Quién interrumpe inesperadamente los planes de Chandler en el restaurante?",
    options: [
      opt("Richard, el ex de Monica, con una cita", true),
      opt("Los padres de Monica"),
      opt("Rachel y Ross"),
      opt("Un examante de Chandler"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Por qué rompe Ross con Elizabeth en este episodio?",
    options: [
      opt("Después de que ella le lance globos de agua", true),
      opt("Porque ella se muda a otra ciudad"),
      opt("Porque Paul los obliga a separarse definitivamente"),
      opt("Porque ella conoce a otra persona"),
    ],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Qué compra Joey por error en una subasta silenciosa en este episodio?",
    options: [
      opt("Un velero", true),
      opt("Un coche de lujo"),
      opt("Una casa"),
      opt("Un caballo de carreras"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué planea Chandler llevar a cabo esa misma noche en el restaurante, antes de que Richard lo interrumpa?",
    options: [
      opt("La pedida de matrimonio a Monica", true),
      opt("Una cena de aniversario sin más"),
      opt("La presentación de Monica a unos socios"),
      opt("Una fiesta sorpresa para Joey"),
    ],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Cómo reacciona Chandler al ver a Richard aparecer justo cuando iba a proponer matrimonio?",
    options: [
      opt("Se descoloca y no logra completar la pedida esa noche", true),
      opt("Lo ignora y sigue adelante sin problema"),
      opt("Cancela la pedida para siempre"),
      opt("Le pide a Richard que se vaya del restaurante"),
    ],
  },
  {
    episode: 25,
    difficulty: "hard",
    text: "¿Qué hace Richard al reencontrarse con Monica en el restaurante?",
    options: [
      opt("Le propone matrimonio a ella", true),
      opt("Le pide que vuelvan a salir"),
      opt("Le presenta a su nueva pareja e ignora a Monica"),
      opt("Le confiesa que nunca la olvidó, sin más"),
    ],
  },
  {
    episode: 25,
    difficulty: "medium",
    text: "¿Quién termina proponiendo matrimonio a quién al final de la temporada?",
    options: [
      opt("Monica se lo propone a Chandler, y él termina pidiéndoselo a ella también", true),
      opt("Solo Chandler se lo propone a Monica, de forma tradicional"),
      opt("Solo Monica se lo propone a Chandler"),
      opt("Ninguno llega a proponérselo, queda pendiente"),
    ],
  },
  {
    episode: 25,
    difficulty: "easy",
    text: "¿Qué canción suena mientras el grupo baila al final del episodio, celebrando el compromiso?",
    options: [
      opt('"Wonderful Tonight", de Eric Clapton', true),
      opt('"I Will Always Love You"'),
      opt('"At Last"'),
      opt('"Just the Way You Are"'),
    ],
  },
  {
    episode: 25,
    difficulty: "medium",
    text: "¿Qué actor hace su última aparición en la serie como Richard en este episodio?",
    options: [
      opt("Tom Selleck", true),
      opt("Bruce Willis"),
      opt("Ron Leibman"),
      opt("Jean-Claude Van Damme"),
    ],
  },
  {
    episode: 25,
    difficulty: "hard",
    text: "¿Cómo se titula este episodio doble que cierra la temporada 6?",
    options: [
      opt("The One with the Proposal", true),
      opt("The One with the Engagement"),
      opt("The One with the Wedding Plans"),
      opt("The One with Richard's Return"),
    ],
  },
  {
    episode: 25,
    difficulty: "medium",
    text: "¿Cómo responde Monica a la propuesta improvisada que le hace Chandler al final?",
    options: [
      opt("Dice que sí, emocionada", true),
      opt("Le pide tiempo para pensarlo"),
      opt("No le da tiempo a responder antes de que acabe el episodio"),
      opt("Bromea diciendo que no antes de aceptar"),
    ],
  },
];
