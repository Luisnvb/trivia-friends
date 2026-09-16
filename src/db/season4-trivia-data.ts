/**
 * Datos de trivia de la Temporada 4 de Friends (24 episodios).
 *
 * Generado a partir de un resumen argumental episodio a episodio obtenido
 * de Wikipedia ("Friends (season 4)", en.wikipedia.org/wiki/Friends_season_4)
 * en septiembre de 2026, para evitar inventar detalles de trama de memoria.
 * Los episodios 23 y 24 ("The One with Ross's Wedding") forman un
 * dosier doble; se reparten 6 preguntas para cada mitad según la fuente.
 *
 * 6 preguntas por episodio (144 en total), todas en modo `multiple_choice`,
 * con mayoría de dificultad `medium`/`hard` y una minoría `easy` por
 * episodio. El orden de las opciones se baraja en `seed-season4.ts` antes
 * de insertar, para que la respuesta correcta no quede siempre en la misma
 * posición.
 */

export type Season4TriviaSeed = {
  episode: number;
  difficulty: "easy" | "medium" | "hard";
  text: string;
  options: { text: string; isCorrect: boolean }[];
};

function opt(text: string, isCorrect = false) {
  return { text, isCorrect };
}

export const season4TriviaData: Season4TriviaSeed[] = [
  // Episodio 1 — The One with the Jellyfish
  {
    episode: 1,
    difficulty: "easy",
    text: "¿Qué le pica a Monica al principio del episodio?",
    options: [opt("Una medusa", true), opt("Una avispa"), opt("Un erizo de mar"), opt("Una araña")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "Según un documental, ¿qué remedio aplican a la picadura de Monica?",
    options: [
      opt("Orinar sobre la zona afectada", true),
      opt("Hielo directo"),
      opt("Vinagre y arena"),
      opt("Alcohol"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Con quién ha roto Ross justo antes de reconciliarse con Rachel?",
    options: [opt("Bonnie", true), opt("Julie"), opt("Emily"), opt("Kathy")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Quién termina orinando sobre la pierna de Monica para aliviarle el dolor?",
    options: [opt("Chandler", true), opt("Joey"), opt("Ross"), opt("Rachel")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Qué descubre Phoebe sobre su hermana Ursula en este episodio?",
    options: [
      opt("Que Ursula sabe cosas sobre su madre biológica que ella desconoce", true),
      opt("Que Ursula está embarazada"),
      opt("Que Ursula se ha casado en secreto"),
      opt("Que Ursula ya no trabaja de camarera"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Cómo terminan Ross y Rachel tras discutir sobre quién tuvo la culpa de su ruptura?",
    options: [
      opt("Deciden darse otra oportunidad como pareja", true),
      opt("Deciden no volver a hablarse"),
      opt("Deciden seguir solo como amigos"),
      opt("Deciden esperar un año"),
    ],
  },

  // Episodio 2 — The One with the Cat
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Cómo se llama el chico del instituto con el que empieza a salir Monica?",
    options: [opt("Chip Matthews", true), opt("Pete Becker"), opt("Richard Burke"), opt("Alan")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué era Chip para Monica cuando iban al instituto?",
    options: [
      opt("Su acompañante al baile de graduación", true),
      opt("Su profesor"),
      opt("Su vecino"),
      opt("Su primo"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué le roban a Joey en este episodio?",
    options: [
      opt("Un mueble de entretenimiento que hizo él mismo a mano", true),
      opt("Su televisor"),
      opt("Su guion de una audición"),
      opt("Su sillón reclinable"),
    ],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Qué encuentra y adopta Phoebe creyendo que contiene el espíritu de su madre adoptiva?",
    options: [opt("Un gato", true), opt("Un perro", false), opt("Un pájaro", false), opt("Una tortuga", false)],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Por qué sienten Ross y Rachel tensión con la nueva pareja de Monica?",
    options: [
      opt("Porque Chip los trataba mal cuando estaban en el instituto", true),
      opt("Porque Chip les debe dinero"),
      opt("Porque Chip salió antes con Rachel"),
      opt("Porque Chip vive con Monica"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué comportamiento nota Monica en Chip que le hace dudar de la relación?",
    options: [
      opt("Que sigue comportándose como en el instituto", true),
      opt("Que no tiene trabajo"),
      opt("Que no quiere conocer a sus amigos"),
      opt("Que vive con sus padres"),
    ],
  },

  // Episodio 3 — The One with the Cuffs
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Qué compra Joey para sentirse más culto?",
    options: [
      opt("Un tomo de una enciclopedia", true),
      opt("Una colección de clásicos de literatura"),
      opt("Un diccionario de latín"),
      opt("Un atlas mundial"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué letra de la enciclopedia compra Joey?",
    options: [opt("La V", true), opt("La A"), opt("La J"), opt("La M")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Para quién prepara Monica un catering en este episodio?",
    options: [opt("Para su madre", true), opt("Para su padre"), opt("Para Richard"), opt("Para Phoebe")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Cómo reacciona la madre de Monica al probar su comida?",
    options: [
      opt("Duda al principio, pero termina aprobándola", true),
      opt("La rechaza por completo"),
      opt("No dice nada en todo el episodio"),
      opt("La elogia desde el primer momento"),
    ],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Dónde se queda esposado Chandler en este episodio?",
    options: [
      opt("En la oficina de su novia Joanna", true),
      opt("En el apartamento de Monica"),
      opt("En Central Perk"),
      opt("En su propio apartamento"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Por qué se retrasa Joanna en liberar a Chandler de las esposas?",
    options: [
      opt("Se le alarga una reunión de trabajo", true),
      opt("Pierde la llave"),
      opt("Se olvida de que está allí"),
      opt("Tiene una emergencia familiar"),
    ],
  },

  // Episodio 4 — The One with the Ballroom Dancing
  {
    episode: 4,
    difficulty: "easy",
    text: "¿Qué le enseña Joey al señor Treeger en este episodio?",
    options: [opt("Baile de salón", true), opt("A tocar la guitarra"), opt("Actuación"), opt("A cocinar")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Quién es el señor Treeger?",
    options: [
      opt("El casero del edificio de Monica y Rachel", true),
      opt("El jefe de Chandler"),
      opt("El padre de Ross"),
      opt("Un cliente de Central Perk"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Por qué accede Joey a dar esas clases de baile a Treeger?",
    options: [
      opt("Para que no descubra que Monica subarrienda su piso de forma ilegal", true),
      opt("Porque Treeger le paga muy bien"),
      opt("Porque quiere aprender él mismo"),
      opt("Para conseguir un papel en una obra"),
    ],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Por qué despiden a Phoebe de su trabajo como masajista en este episodio?",
    options: [
      opt("Descubre que el cliente del que se ha enamorado está casado", true),
      opt("Llega tarde varias veces"),
      opt("Se pelea con una clienta"),
      opt("Cierra el negocio donde trabajaba"),
    ],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Qué intentan hacer Chandler y Ross en el gimnasio sin atreverse?",
    options: [
      opt("Cancelar su membresía", true),
      opt("Pedir un descuento"),
      opt("Apuntarse a una clase avanzada"),
      opt("Quejarse de un entrenador"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué relación tiene Phoebe con el cliente del que se enamora en este episodio?",
    options: [
      opt("Es uno de sus clientes de masajes", true),
      opt("Es su vecino"),
      opt("Es un amigo de Ross"),
      opt("Es el dueño de Central Perk"),
    ],
  },

  // Episodio 5 — The One with Joey's New Girlfriend
  {
    episode: 5,
    difficulty: "easy",
    text: "¿Cómo se llama la nueva novia de Joey en este episodio?",
    options: [opt("Kathy", true), opt("Kate"), opt("Cathy Chase"), opt("Casey")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué empieza a sentir Chandler por Kathy, la novia de Joey?",
    options: [opt("Atracción", true), opt("Indiferencia total"), opt("Desconfianza"), opt("Antipatía")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Con quién sale Ross para intentar poner celosa a Rachel?",
    options: [opt("Amanda", true), opt("Bonnie"), opt("Emily"), opt("Elizabeth")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué es lo que realmente busca Amanda de Ross, y no una relación romántica?",
    options: [
      opt("Que le haga de canguro para su hijo", true),
      opt("Que le preste dinero"),
      opt("Que le ayude a mudarse"),
      opt("Que le escriba una carta de recomendación"),
    ],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué intenta hacer Phoebe a propósito para conservar un cambio en su voz?",
    options: [
      opt("Resfriarse, porque le gusta cómo suena cantando con la voz tomada", true),
      opt("Dejar de dormir"),
      opt("Fumar en secreto"),
      opt("Hacer gárgaras con miel constantemente"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué cambio nota Phoebe en su voz al cantar resfriada?",
    options: [opt("Que suena más grave y le gusta más", true), opt("Que desafina"), opt("Que se queda afónica"), opt("Que suena más aguda")],
  },

  // Episodio 6 — The One with the Dirty Girl
  {
    episode: 6,
    difficulty: "easy",
    text: "¿Qué negocio montan juntas Phoebe y Monica en este episodio?",
    options: [
      opt("Un servicio de catering", true),
      opt("Una tienda de música"),
      opt("Una agencia de masajes"),
      opt("Una cafetería"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿A quién le cuesta especialmente cobrarle el catering a Phoebe y Monica?",
    options: [opt("A una viuda complicada", true), opt("A un restaurante"), opt("A Central Perk"), opt("A un banco")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Por qué rompe Ross con su nueva novia en este episodio?",
    options: [
      opt("Porque su apartamento está asqueroso", true),
      opt("Porque le engaña"),
      opt("Porque se muda de ciudad"),
      opt("Porque no le gustan sus amigos"),
    ],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué sacrifica Chandler para comprarle un regalo especial a Kathy, la novia de Joey?",
    options: [
      opt("Su propio regalo de esa fecha", true),
      opt("Un viaje que tenía planeado"),
      opt("Sus ahorros del mes"),
      opt("Su día libre"),
    ],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué regalo compra Chandler para Kathy?",
    options: [
      opt("Una edición limitada de un libro de su infancia", true),
      opt("Una joya"),
      opt("Entradas para un concierto"),
      opt("Un cachorro"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué es lo que más le desagrada a Ross de su nueva novia en este episodio?",
    options: [opt("Lo sucio que tiene su apartamento", true), opt("Su forma de vestir"), opt("Su trabajo"), opt("Sus amigos")],
  },

  // Episodio 7 — The One Where Chandler Crosses the Line
  {
    episode: 7,
    difficulty: "easy",
    text: "¿A qué instrumento vuelve Ross en este episodio, animado por Phoebe?",
    options: [opt("Al teclado", true), opt("A la guitarra"), opt("Al piano de cola"), opt("A la batería")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Cómo valora el grupo las composiciones de Ross al teclado?",
    options: [opt("Las consideran malas", true), opt("Las consideran geniales"), opt("No las escuchan"), opt("Las graban para venderlas")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué línea \"cruza\" Chandler con Kathy, la novia de Joey?",
    options: [opt("Se besan", true), opt("Se van de viaje juntos"), opt("Le confiesa que la ama"), opt("La invita a vivir con él")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿A quién le confiesa Chandler el beso con Kathy?",
    options: [opt("A Joey", true), opt("A Ross"), opt("A Monica"), opt("A Rachel")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Cómo reacciona Joey al enterarse del beso entre Chandler y Kathy?",
    options: [
      opt("Se enfada mucho, aunque él mismo sale con otra persona", true),
      opt("Le resta importancia"),
      opt("Se ríe y lo celebra"),
      opt("No se lo cree"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Quién anima a Ross a retomar el teclado en este episodio?",
    options: [opt("Phoebe", true), opt("Rachel"), opt("Joey"), opt("Su madre")],
  },

  // Episodio 8 — The One with Chandler in a Box
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Cómo castiga Joey a Chandler en Acción de Gracias?",
    options: [
      opt("Lo encierra en una caja", true),
      opt("Le prohíbe hablarle"),
      opt("Le hace dormir en la calle"),
      opt("Le quita la llave del apartamento"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Por qué decide Joey castigar así a Chandler?",
    options: [
      opt("Por el beso con Kathy, que provocó su ruptura", true),
      opt("Porque Chandler rompió su videoconsola"),
      opt("Porque Chandler le mintió sobre una audición"),
      opt("Porque Chandler invitó a Kathy sin avisarle"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿De quién se encapricha Monica en este episodio?",
    options: [opt("Del hijo de Richard, Timothy", true), opt("De un cliente del restaurante"), opt("De un amigo de Ross"), opt("De Chip")],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿A qué se dedica Timothy, el interés amoroso de Monica en este episodio?",
    options: [opt("Es oftalmólogo", true), opt("Es abogado"), opt("Es profesor"), opt("Es dentista")],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Qué le recuerda a Monica el beso con Timothy?",
    options: [
      opt("A besar a Richard, el padre de Timothy", true),
      opt("A su primer novio del instituto"),
      opt("A un actor de cine"),
      opt("A nada en especial"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿En qué fecha del calendario estadounidense transcurre este episodio?",
    options: [opt("Acción de Gracias", true), opt("Navidad"), opt("Halloween"), opt("San Valentín")],
  },

  // Episodio 9 — The One Where They're Going to Party!
  {
    episode: 9,
    difficulty: "easy",
    text: "¿En qué restaurante consigue Monica el puesto de chef principal?",
    options: [opt("En Alessandro's", true), opt("En Central Perk"), opt("En un restaurante sin nombre propio"), opt("En el restaurante de su padre")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué tiene de irónico que Monica acabe trabajando en Alessandro's?",
    options: [
      opt("Antes había criticado ese restaurante", true),
      opt("Es el restaurante de su ex Richard"),
      opt("Ya había trabajado allí y la despidieron"),
      opt("Es el restaurante rival del de su madre"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿A qué puesto asciende Rachel en este episodio?",
    options: [opt("A ayudante de compradora", true), opt("A directora de tienda"), opt("A diseñadora jefe"), opt("A relaciones públicas")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Qué le ocurre a Joanna, la jefa que intentaba perjudicar a Rachel, tras concederle el ascenso?",
    options: [
      opt("Muere antes de que el ascenso se haga efectivo", true),
      opt("La despiden"),
      opt("Se traslada a otra ciudad"),
      opt("Se jubila"),
    ],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Cómo se llama el amigo al que Ross y Chandler invitan a su fiesta, y que acaba cancelando?",
    options: [opt("Gandalf", true), opt("Duncan"), opt("Marcel"), opt("Gunther")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué planean organizar Ross y Chandler en este episodio?",
    options: [opt("Una fiesta", true), opt("Una cena de empresa"), opt("Un torneo de póker"), opt("Una despedida de soltero")],
  },

  // Episodio 10 — The One with the Girl from Poughkeepsie
  {
    episode: 10,
    difficulty: "easy",
    text: "¿Entre qué dos novias debe elegir Ross en este episodio?",
    options: [
      opt("Una chica seria de la ciudad y una chica divertida de Poughkeepsie", true),
      opt("Rachel y Emily"),
      opt("Bonnie y Julie"),
      opt("Dos compañeras de trabajo"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué intenta hacer Chandler por Rachel en este episodio, sin éxito?",
    options: [
      opt("Organizarle una cita a ciegas con un compañero de trabajo", true),
      opt("Conseguirle un ascenso"),
      opt("Presentarle a un amigo de la infancia"),
      opt("Ayudarla a mudarse"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué problema tiene Monica con su personal en el restaurante?",
    options: [opt("La acosan y se burlan de ella", true), opt("Se niegan a trabajar los fines de semana"), opt("Le roban comida"), opt("Amenazan con dejar el trabajo")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Cómo ayuda Joey a Monica a ganarse el respeto de su personal?",
    options: [
      opt("Deja que ella lo despida públicamente como ejemplo", true),
      opt("Se hace pasar por inspector de sanidad"),
      opt("Contrata a un nuevo cocinero"),
      opt("Habla en privado con cada empleado"),
    ],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿De qué localidad es la novia \"divertida\" con la que sale Ross?",
    options: [opt("De Poughkeepsie", true), opt("De Yonkers"), opt("De Albany"), opt("De Long Island")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué acepta hacer Joey para ayudar a Monica frente a sus empleados?",
    options: [opt("Dejarse despedir en público", true), opt("Fingir ser su jefe"), opt("Cocinar en su lugar"), opt("Amenazar a los empleados")],
  },

  // Episodio 11 — The One with Phoebe's Uterus
  {
    episode: 11,
    difficulty: "easy",
    text: "¿Qué acepta hacer Phoebe por su hermano Frank Jr. en este episodio?",
    options: [
      opt("Ser gestante de su bebé", true),
      opt("Prestarle dinero"),
      opt("Cuidar de su casa"),
      opt("Ser su representante"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Con quién está casado Frank Jr. cuando le pide esto a Phoebe?",
    options: [opt("Con Alice", true), opt("Con Ursula"), opt("Con Kathy"), opt("Con Amanda")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿En qué trabaja Joey temporalmente en este episodio?",
    options: [opt("Como guía turístico de un museo", true), opt("Como camarero"), opt("Como taxista"), opt("Como profesor de teatro")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Qué genera tensión entre Joey y Ross por el nuevo trabajo de Joey?",
    options: [
      opt("Diferencias de clase social al relacionarse con gente educada", true),
      opt("Que Joey gana más dinero que Ross"),
      opt("Que Joey no invita a Ross al museo"),
      opt("Que Joey se hace amigo del jefe de Ross"),
    ],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Qué problema tiene Chandler en este episodio que le da vergüenza?",
    options: [
      opt("Problemas de rendimiento sexual", true),
      opt("Roncar muy fuerte"),
      opt("Hablar dormido"),
      opt("Sonambulismo"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Quiénes le dan consejos a Chandler sobre su problema?",
    options: [opt("Monica y Rachel", true), opt("Ross y Joey"), opt("Phoebe sola"), opt("Su madre")],
  },

  // Episodio 12 — The One with the Embryos
  {
    episode: 12,
    difficulty: "easy",
    text: "¿A qué reto se enfrentan las chicas contra los chicos en este episodio?",
    options: [
      opt("Un concurso de preguntas sobre quién conoce mejor al otro grupo", true),
      opt("Una carrera de cocina"),
      opt("Un torneo de billar"),
      opt("Un concurso de karaoke"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué apuestan Monica y Rachel contra Chandler y Joey en el concurso?",
    options: [opt("Sus apartamentos", true), opt("Su dinero"), opt("Sus coches"), opt("Un mes de comidas gratis")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Quién gana el concurso de preguntas?",
    options: [opt("Chandler y Joey", true), opt("Monica y Rachel"), opt("Empatan"), opt("Ross, como árbitro, lo anula")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué deben hacer Monica y Rachel al perder la apuesta?",
    options: [
      opt("Cambiarse de apartamento con Chandler y Joey", true),
      opt("Pagarles una cena cara"),
      opt("Hacerles de sirvientas una semana"),
      opt("Cederles su sofá favorito"),
    ],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué procedimiento médico confirma el embarazo de Phoebe en este episodio?",
    options: [
      opt("La implantación de los embriones de Frank Jr. y Alice", true),
      opt("Un análisis de sangre rutinario"),
      opt("Una ecografía de control"),
      opt("Un test de embarazo casero"),
    ],
  },
  {
    episode: 12,
    difficulty: "easy",
    text: "¿De quién son los embriones que le implantan a Phoebe?",
    options: [opt("De Frank Jr. y Alice", true), opt("De Ross y Emily"), opt("De una pareja desconocida"), opt("De Monica y Richard")],
  },

  // Episodio 13 — The One with Rachel's Crush
  {
    episode: 13,
    difficulty: "easy",
    text: "¿Cómo se llama el cliente de la tienda por el que Rachel siente atracción?",
    options: [opt("Joshua", true), opt("Josh Bennett"), opt("Jason"), opt("Nick")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué intenta hacer Rachel con Joshua sin éxito en este episodio?",
    options: [opt("Pedirle una cita, y lo estropea", true), opt("Invitarlo a una fiesta"), opt("Presentárselo a sus amigos"), opt("Darle su número por escrito")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿De qué acusa Chandler a su novia Kathy en este episodio?",
    options: [opt("De estarle siendo infiel", true), opt("De mentirle sobre su trabajo"), opt("De gastar demasiado dinero"), opt("De no quererle presentar a su familia")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Con quién sospecha Chandler que Kathy le engaña, tras verla actuar con él en una obra?",
    options: [opt("Con un actor llamado Nick", true), opt("Con su antiguo jefe"), opt("Con un vecino"), opt("Con Joey")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Resulta cierta la sospecha de Chandler sobre Kathy?",
    options: [opt("Sí, termina descubriendo que es verdad", true), opt("No, era un malentendido"), opt("Nunca se aclara en la serie"), opt("Kathy lo niega y Chandler la cree")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Quién sigue ejerciendo de anfitriona del grupo pese al cambio de apartamentos del episodio anterior?",
    options: [opt("Monica", true), opt("Rachel"), opt("Joey"), opt("Chandler")],
  },

  // Episodio 14 — The One with Joey's Dirty Day
  {
    episode: 14,
    difficulty: "easy",
    text: "¿A quién intentan ayudar las chicas llevándolo a un club de striptease?",
    options: [opt("A Chandler, para superar su ruptura con Kathy", true), opt("A Ross"), opt("A Joey"), opt("A Gunther")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿A quién invita el jefe de Rachel a un concierto de ópera, además de a ella?",
    options: [opt("A su sobrina, Emily", true), opt("A su esposa"), opt("A otro empleado"), opt("A un cliente importante")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Dónde conectan Ross y Emily por primera vez?",
    options: [opt("En la ópera", true), opt("En Central Perk"), opt("En una boda"), opt("En el museo")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿A dónde se escapan Ross y Emily a pasar el fin de semana nada más conocerse?",
    options: [opt("A Vermont", true), opt("A Boston"), opt("A Londres"), opt("A las Cataratas del Niágara")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿En el camerino de qué actor famoso se cuela Joey para ducharse?",
    options: [opt("Charlton Heston", true), opt("Al Pacino"), opt("Jean-Claude Van Damme"), opt("Warren Beatty")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿De dónde viene Joey cuando decide colarse a ducharse en un camerino ajeno?",
    options: [opt("De un viaje de pesca", true), opt("Del gimnasio"), opt("De una audición"), opt("De la playa")],
  },

  // Episodio 15 — The One with All the Rugby
  {
    episode: 15,
    difficulty: "easy",
    text: "¿Qué deporte practica Ross para impresionar a Emily?",
    options: [opt("Rugby", true), opt("Críquet"), opt("Fútbol"), opt("Squash")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué riesgo corre Ross al jugar al rugby por primera vez?",
    options: [opt("Lesionarse", true), opt("Perder el trabajo"), opt("Perder la boda"), opt("Quedar en ridículo ante los padres de Emily")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Con qué objeto de la pared se obsesiona Monica en este episodio?",
    options: [opt("Un interruptor sin función aparente", true), opt("Una grieta"), opt("Un cuadro torcido"), opt("Una mancha de humedad")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué mentira le dice Chandler a Janice para evitar retomar su relación?",
    options: [
      opt("Que lo trasladan de trabajo a Yemen", true),
      opt("Que se va a casar con otra persona"),
      opt("Que se muda a otra ciudad"),
      opt("Que tiene una enfermedad grave"),
    ],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿A qué país dice Chandler que se traslada para alejarse de Janice?",
    options: [opt("A Yemen", true), opt("A Rusia"), opt("A Australia"), opt("A Japón")],
  },
  {
    episode: 15,
    difficulty: "easy",
    text: "¿Con quién intenta cortar Chandler mediante una mentira en este episodio?",
    options: [opt("Con Janice", true), opt("Con Kathy"), opt("Con una compañera de trabajo"), opt("Con Joanna")],
  },

  // Episodio 16 — The One with the Fake Party
  {
    episode: 16,
    difficulty: "easy",
    text: "¿Qué antojo tiene la embarazada Phoebe pese a ser vegetariana?",
    options: [opt("Carne", true), opt("Marisco"), opt("Pizza con anchoas"), opt("Hígado")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué hace Joey para \"equilibrar\" el antojo de carne de Phoebe?",
    options: [
      opt("Deja de comer carne él mismo", true),
      opt("Le cocina carne todos los días"),
      opt("La lleva a un restaurante vegetariano"),
      opt("Le prohíbe comer carne"),
    ],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué organiza Rachel en este episodio como excusa para invitar a Joshua?",
    options: [
      opt("Una fiesta sorpresa falsa para Emily", true),
      opt("Una cena de empresa"),
      opt("Una fiesta de disfraces"),
      opt("Una despedida de soltera"),
    ],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿A quién va realmente destinada la fiesta que organiza Rachel, aunque la disfrace de fiesta para Emily?",
    options: [opt("A Joshua", true), opt("A Ross"), opt("A su jefe"), opt("A nadie en particular")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Qué planes íntimos de Ross interrumpe la fiesta falsa de Rachel?",
    options: [
      opt("Una despedida romántica con Emily antes de que ella regrese a Londres", true),
      opt("Una cena para pedirle matrimonio a Emily"),
      opt("Una noche de películas con Ben"),
      opt("Una reunión familiar"),
    ],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Por qué tiene Phoebe antojos de carne pese a ser vegetariana?",
    options: [opt("Por el embarazo", true), opt("Porque ha dejado de serlo"), opt("Por una apuesta"), opt("Por prescripción médica")],
  },

  // Episodio 17 — The One with the Free Porn
  {
    episode: 17,
    difficulty: "easy",
    text: "¿Qué descubren Chandler y Joey en la televisión que les entusiasma?",
    options: [opt("Un canal de pornografía gratis", true), opt("Un maratón de su serie favorita"), opt("Un canal de deportes nuevo"), opt("Una película perdida de Joey")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué descubre Phoebe sobre su embarazo en este episodio?",
    options: [opt("Que espera trillizos", true), opt("Que espera gemelos"), opt("Que el bebé es una niña"), opt("Que se adelanta el parto")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué negocio monta Phoebe con Frank Jr. en este episodio?",
    options: [opt("Un negocio de masajes y taxi", true), opt("Una tienda de música"), opt("Un puesto de comida"), opt("Una guardería")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Quién anima a Ross a ir al aeropuerto a buscar a Emily?",
    options: [opt("Monica", true), opt("Joey"), opt("Phoebe"), opt("Chandler")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué le confiesa Emily a Ross en el aeropuerto?",
    options: [
      opt("Que lo quiere, pero que hay otra persona en su vida", true),
      opt("Que se muda a Nueva York"),
      opt("Que no quiere volver a verlo"),
      opt("Que está prometida con otro hombre"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué pareja del grupo empieza una relación secreta en este episodio?",
    options: [opt("Monica y Chandler", true), opt("Rachel y Joey"), opt("Phoebe y Ross"), opt("Monica y Joey")],
  },

  // Episodio 18 — The One with Rachel's New Dress
  {
    episode: 18,
    difficulty: "easy",
    text: "¿Qué deben decidir Joey y Chandler en este episodio, compitiendo entre ellos?",
    options: [
      opt("El nombre de uno de los trillizos de Phoebe", true),
      opt("Quién será el padrino de Ross"),
      opt("Quién se queda con el sofá nuevo"),
      opt("Quién invita a la próxima cena"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Quiénes piden a Phoebe que deje que otra persona elija el nombre de uno de los bebés?",
    options: [opt("Frank Jr. y Alice", true), opt("Sus amigos del grupo"), opt("Su hermana Ursula"), opt("Sus padres adoptivos")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Qué teme Ross que ocurra entre Emily y Susan durante su estancia en Londres?",
    options: [
      opt("Que se hagan muy íntimas y eso ponga en riesgo su relación", true),
      opt("Que Susan intente boicotear la boda"),
      opt("Que Emily se mude con Susan"),
      opt("Que discutan por Ben"),
    ],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué usa Rachel para intentar seducir a Joshua durante una cena?",
    options: [
      opt("Un vestido atrevido", true),
      opt("Perfume que le regaló su madre"),
      opt("Velas y música romántica"),
      opt("Una carta escrita a mano"),
    ],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué impide que la cena entre Rachel y Joshua acabe en intimidad?",
    options: [
      opt("La aparición inesperada de los padres de Joshua", true),
      opt("Una llamada de trabajo urgente"),
      opt("Que Ross los interrumpe"),
      opt("Que a Rachel se le rompe el vestido"),
    ],
  },
  {
    episode: 18,
    difficulty: "easy",
    text: "¿Con quién teme Ross que Emily se lleve demasiado bien en Londres?",
    options: [opt("Con Susan", true), opt("Con Carol"), opt("Con Rachel"), opt("Con su ex Julie")],
  },

  // Episodio 19 — The One with All the Haste
  {
    episode: 19,
    difficulty: "easy",
    text: "¿Qué intentan recuperar desesperadamente Monica y Rachel en este episodio?",
    options: [opt("Su antiguo apartamento", true), opt("Su restaurante"), opt("A sus antiguos novios"), opt("Su sofá favorito")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué hacen Monica y Rachel para intentar recuperar su apartamento?",
    options: [
      opt("Ofrecen sobornos y proponen juegos y retos", true),
      opt("Contratan a un abogado"),
      opt("Amenazan con denunciar a Chandler y Joey"),
      opt("Le piden ayuda al señor Treeger"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿A qué evento asisten los chicos mientras se resuelve el tema del apartamento?",
    options: [opt("A un partido de los Knicks", true), opt("A un concierto"), opt("A una convención de cómics"), opt("A una despedida de soltero")],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué hacen Monica y Rachel para evitar quejas de un vecino durante un juego en este episodio?",
    options: [
      opt("Besarse durante un minuto entero", true),
      opt("Bailar desnudas en la ventana"),
      opt("Cantar el himno nacional"),
      opt("Pedir perdón en persona"),
    ],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué deciden Ross y Emily de forma repentina en este episodio?",
    options: [opt("Casarse", true), opt("Mudarse juntos a Londres"), opt("Hacer un viaje largo"), opt("Adoptar una mascota")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Cómo termina finalmente el tema de los apartamentos en este episodio?",
    options: [
      opt("Monica y Rachel se quedan en el apartamento pequeño", true),
      opt("Chandler y Joey ceden el apartamento grande"),
      opt("Deciden compartir ambos apartamentos"),
      opt("Venden los dos apartamentos"),
    ],
  },

  // Episodio 20 — The One with All the Wedding Dresses
  {
    episode: 20,
    difficulty: "easy",
    text: "¿Qué prueba se pone Monica de forma obsesiva en este episodio?",
    options: [opt("El vestido de novia de Emily", true), opt("Un traje de dama de honor"), opt("Un disfraz de Halloween"), opt("Un vestido de fiesta de Rachel")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Con quién juega Monica a \"hacer de novias\" en este episodio?",
    options: [opt("Con Phoebe", true), opt("Con Rachel"), opt("Con Emily"), opt("Con su madre")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿A dónde lleva Chandler a Joey en este episodio?",
    options: [opt("A una clínica del sueño", true), opt("A un club de striptease"), opt("A una feria del empleo"), opt("A un casino")],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿A quién conoce Joey en la clínica del sueño?",
    options: [opt("A una mujer atractiva", true), opt("A un viejo amigo del colegio"), opt("A un productor de televisión"), opt("A su médico de cabecera")],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué hace Rachel que asusta a Joshua en este episodio?",
    options: [
      opt("Le sugiere el matrimonio, alterada por el compromiso de Ross", true),
      opt("Le presenta a sus padres sin avisar"),
      opt("Le pide que se mude con ella"),
      opt("Le confiesa que sigue enamorada de Ross"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Por qué rompe Joshua con Rachel al final de este episodio?",
    options: [
      opt("La encuentra probándose vestidos de novia", true),
      opt("Descubre que aún habla con Ross"),
      opt("Se muda a otra ciudad"),
      opt("Rachel cancela varias citas seguidas"),
    ],
  },

  // Episodio 21 — The One with the Invitation
  {
    episode: 21,
    difficulty: "easy",
    text: "¿Por qué no puede Phoebe viajar a la boda de Ross en Londres?",
    options: [opt("Está embarazada de trillizos", true), opt("No tiene dinero"), opt("Tiene que trabajar"), opt("No tiene pasaporte")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿A quién invita Ross a su boda, provocándole sentimientos encontrados?",
    options: [opt("A Rachel", true), opt("A Julie"), opt("A Bonnie"), opt("A Carol y Susan")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué le provoca a Rachel recibir la invitación a la boda de Ross?",
    options: [
      opt("Recuerdos de su relación pasada con él", true),
      opt("Indiferencia total"),
      opt("Alegría sincera por él"),
      opt("Enfado con Emily"),
    ],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Qué decide finalmente Rachel sobre asistir a la boda?",
    options: [
      opt("Quedarse con Phoebe en vez de ir a Londres", true),
      opt("Ir sola sin avisar a nadie"),
      opt("Pedirle a Ross que la cancele"),
      opt("Ir acompañada de Joshua"),
    ],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Por qué decide Rachel no ir finalmente a la boda?",
    options: [
      opt("Le parece menos doloroso quedarse que presenciarla", true),
      opt("Se lo prohíbe su jefe"),
      opt("Pierde el vuelo"),
      opt("Emily le pide que no vaya"),
    ],
  },
  {
    episode: 21,
    difficulty: "easy",
    text: "¿En qué ciudad se celebra la boda de Ross y Emily?",
    options: [opt("Londres", true), opt("Nueva York"), opt("París"), opt("Roma")],
  },

  // Episodio 22 — The One with the Worst Best Man Ever
  {
    episode: 22,
    difficulty: "easy",
    text: "¿Qué celebran Monica y Rachel para Phoebe en este episodio?",
    options: [opt("Una fiesta de bienvenida al bebé (baby shower)", true), opt("Su cumpleaños"), opt("Una fiesta de graduación"), opt("Una despedida de soltera")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué sentimientos encontrados vive Phoebe durante el baby shower?",
    options: [
      opt("Cambios de humor sobre tener que entregar a los bebés", true),
      opt("Miedo a no ser buena madre de alquiler"),
      opt("Celos porque nadie le hace caso a ella"),
      opt("Nostalgia por su propia infancia"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué papel asume Joey para la boda de Ross?",
    options: [opt("El de padrino (best man)", true), opt("El de fotógrafo"), opt("El de maestro de ceremonias"), opt("El de chófer")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Qué pierde Joey tras la despedida de soltero de Ross?",
    options: [opt("El anillo de boda", true), opt("Su traje"), opt("Las entradas de avión"), opt("El discurso que había preparado")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Qué se traga el anillo que pierde Joey?",
    options: [opt("Un pato", true), opt("Un perro"), opt("Una gaviota"), opt("Un gato")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿A quiénes termina nombrando Ross padrinos, tras el desastre con el anillo?",
    options: [
      opt("A Chandler y a Joey, a ambos", true),
      opt("Solo a Chandler"),
      opt("A su padre"),
      opt("A ninguno, decide no tener padrino"),
    ],
  },

  // Episodio 23 — The One with Ross's Wedding, Part 1
  {
    episode: 23,
    difficulty: "easy",
    text: "¿Quiénes son los únicos del grupo que no viajan a Londres para la boda?",
    options: [opt("Rachel y Phoebe", true), opt("Monica y Chandler"), opt("Joey y Ross"), opt("Phoebe y Joey")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué problema surge con el lugar de la boda en Londres?",
    options: [
      opt("Empieza una demolición antes de tiempo en el local", true),
      opt("Se cancela la reserva por error"),
      opt("Se inunda el salón"),
      opt("Doble reserva con otra boda"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué sugiere Monica ante el problema del local, enfadando a Ross?",
    options: [opt("Posponer la boda", true), opt("Cambiar de país"), opt("Casarse en la calle"), opt("Cancelar la boda")],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Quién convence a Rachel para que viaje a Londres a intentar detener la boda?",
    options: [opt("Phoebe", true), opt("Monica"), opt("Chandler"), opt("Joey")],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué le hace creer Phoebe a Rachel sobre sus propios sentimientos?",
    options: [
      opt("Que todavía quiere a Ross", true),
      opt("Que en realidad quiere a Joshua"),
      opt("Que debería quedarse soltera"),
      opt("Que Ross ya no la quiere a ella"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué decide hacer Rachel tras la conversación con Phoebe?",
    options: [
      opt("Viajar a Londres para intentar detener la boda", true),
      opt("Escribirle una carta a Ross"),
      opt("Llamar a Emily para hablar con ella"),
      opt("No hacer nada"),
    ],
  },

  // Episodio 24 — The One with Ross's Wedding, Part 2
  {
    episode: 24,
    difficulty: "easy",
    text: "¿Consigue Rachel confesarle sus sentimientos a Ross antes de la boda?",
    options: [
      opt("No, no consigue decírselo al verlo con Emily", true),
      opt("Sí, y Ross cancela la boda"),
      opt("Sí, pero Ross la rechaza"),
      opt("No llega a tiempo a Londres"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué pareja del grupo vuelve a acostarse en secreto durante este episodio?",
    options: [opt("Monica y Chandler", true), opt("Rachel y Joshua"), opt("Phoebe y un desconocido"), opt("Joey y Kathy")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué nombre dice Ross por error durante los votos en el altar?",
    options: [opt("Rachel", true), opt("Carol"), opt("Julie"), opt("Susan")],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿A quién debía nombrar realmente Ross en el altar, en vez del nombre que dice por error?",
    options: [opt("A Emily, su novia", true), opt("A su madre"), opt("A su hijo Ben"), opt("A su padrino")],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Qué consecuencia tiene el error de Ross en el altar?",
    options: [
      opt("Deja a Emily consternada y avergonzada delante de todos", true),
      opt("Nadie se da cuenta del error"),
      opt("Emily se ríe y sigue la ceremonia"),
      opt("El oficiante corrige a Ross antes de que nadie lo note"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Dónde se celebra finalmente la boda de Ross y Emily?",
    options: [opt("En Londres", true), opt("En Nueva York"), opt("En París"), opt("Se cancela definitivamente")],
  },
];
