/**
 * Preguntas de trivia de la Temporada 9 de Friends (24 episodios, 6 por
 * episodio = 144 preguntas). Generadas a partir de la sinopsis de Wikipedia
 * ("Friends (season 9)"), siguiendo el mismo patrón que
 * `season1-trivia-data.ts` a `season8-trivia-data.ts`. Insertadas por
 * `seed-season9.ts`.
 */

export type Season9TriviaSeed = {
  episode: number;
  difficulty: "easy" | "medium" | "hard";
  text: string;
  options: { text: string; isCorrect: boolean }[];
};

function opt(text: string, isCorrect = false) {
  return { text, isCorrect };
}

export const season9TriviaData: Season9TriviaSeed[] = [
  // Episodio 1 — The One Where No One Proposes
  {
    episode: 1,
    difficulty: "easy",
    text: "Al empezar la temporada, ¿qué sigue creyendo Rachel por error?",
    options: [opt("Que Joey le pidió matrimonio", true), opt("Que Ross quiere volver con ella"), opt("Que Monica está embarazada"), opt("Que Chandler se muda de ciudad")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Qué le cuesta hacer a Joey durante todo el episodio?",
    options: [opt("Aclararle a Rachel el malentendido", true), opt("Confesarle a Ross que quiere a Rachel"), opt("Pedirle perdón a Chandler"), opt("Buscar un papel en una película")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Qué planea hacer Ross respecto a Rachel en este episodio?",
    options: [opt("Preguntarle si quiere retomar su relación", true), opt("Pedirle que se mude con él"), opt("Presentarle a su nueva pareja"), opt("Proponerle ser solo amigos definitivamente")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿En qué siguen Monica y Chandler durante este episodio?",
    options: [opt("En sus intentos de quedarse embarazados", true), opt("En preparar su mudanza"), opt("En organizar su boda"), opt("En buscar una casa nueva")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este primer episodio de temporada?",
    options: [opt("The One Where No One Proposes", true), opt("The One After 'I Do'"), opt("The One with the Ring"), opt("The One Where Everybody Finds Out")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Qué originó el malentendido de Rachel, ocurrido al final de la temporada anterior?",
    options: [opt("Que Joey recogió el anillo de compromiso del suelo", true), opt("Que Joey le regaló un anillo de broma"), opt("Que Ross le pidió matrimonio por error a Rachel"), opt("Que Chandler bromeó diciendo que Joey se casaría con ella")],
  },

  // Episodio 2 — The One Where Emma Cries
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Qué problema tiene Rachel con Emma en este episodio?",
    options: [opt("No consigue que deje de llorar", true), opt("No consigue que coma"), opt("No consigue que duerma la siesta"), opt("No consigue vestirla")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué acepta Chandler sin darse mucha cuenta de lo que implica?",
    options: [opt("Mudarse a Tulsa por trabajo", true), opt("Un ascenso con más horas"), opt("Ser el padrino de una boda"), opt("Cambiar de departamento en su empresa")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Por qué terminan Ross y Joey en el hospital en este episodio?",
    options: [opt("Por una pelea relacionada con el malentendido de la propuesta", true), opt("Por un accidente jugando al fútbol"), opt("Por comida en mal estado"), opt("Por una broma que sale mal con Chandler")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué provoca que Rachel no consiga calmar a Emma?",
    options: [opt("La ha despertado sin querer", true), opt("Se le ha acabado la leche"), opt("Le están saliendo los dientes"), opt("Ha perdido su chupete favorito")],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿A qué ciudad se compromete Chandler a mudarse por trabajo, sin plena conciencia de ello?",
    options: [opt("Tulsa", true), opt("Chicago"), opt("Boston"), opt("Yonkers")],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One Where Emma Cries", true), opt("The One with the Male Nanny"), opt("The One with the Pediatrician"), opt("The One with the Sharks")],
  },

  // Episodio 3 — The One with the Pediatrician
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Qué le ofrecen a Monica en este episodio?",
    options: [opt("Un trabajo en un restaurante de Nueva York", true), opt("Un programa de televisión"), opt("Escribir un libro de cocina"), opt("Un puesto en Tulsa")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué complica la vida de Chandler tras aceptar el traslado a Tulsa?",
    options: [opt("Tener que viajar constantemente entre Tulsa y Nueva York", true), opt("Tener que aprender un nuevo idioma"), opt("Perder contacto con sus amigos"), opt("Tener que mudarse solo, sin Monica")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué hacen Phoebe y Joey el uno por el otro en este episodio?",
    options: [opt("Organizarse citas a ciegas mutuamente", true), opt("Ayudarse a mudarse de piso"), opt("Prestarse dinero"), opt("Cuidar juntos de Emma")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿A quién conoce Phoebe en una de las citas a ciegas de este episodio?",
    options: [opt("A Mike", true), opt("A David"), opt("A Gavin"), opt("A Leonard")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Qué actor interpreta a Mike, la nueva cita de Phoebe?",
    options: [opt("Paul Rudd", true), opt("Freddie Prinze Jr."), opt("Jeff Goldblum"), opt("Dermot Mulroney")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with the Pediatrician", true), opt("The One with the Sharks"), opt("The One with Rachel's Phone Number"), opt("The One with the Lottery")],
  },

  // Episodio 4 — The One with the Sharks
  {
    episode: 4,
    difficulty: "easy",
    text: "¿A quién visita Monica en este episodio?",
    options: [opt("A Chandler, en Tulsa", true), opt("A su madre"), opt("A Rachel en su trabajo"), opt("A Phoebe en su nuevo apartamento")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Sobre qué gira el malentendido central de la visita de Monica a Tulsa?",
    options: [opt("Un documental sobre tiburones", true), opt("Un compañero de trabajo de Chandler"), opt("Una cena de empresa"), opt("Un viaje que Chandler no le contó")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué inventa Ross sobre el pasado de Phoebe en este episodio?",
    options: [opt("Una historia falsa sobre una relación anterior de ella", true), opt("Que Phoebe fue cantante profesional"), opt("Que Phoebe vivió en Europa"), opt("Que Phoebe tiene un hermano gemelo")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Con qué objetivo inventa Ross esa historia sobre Phoebe?",
    options: [opt("Para que Mike no pierda interés en ella", true), opt("Para impresionar a Rachel"), opt("Para ayudar a Phoebe a conseguir trabajo"), opt("Para gastarle una broma a Joey")],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with the Sharks", true), opt("The One with the Pediatrician"), opt("The One with Rachel's Dream"), opt("The One with the Boob Job")],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿En qué ciudad reside Chandler durante esta etapa de la temporada?",
    options: [opt("Tulsa", true), opt("Yonkers"), opt("Boston"), opt("Chicago")],
  },

  // Episodio 5 — The One with Phoebe's Birthday Dinner
  {
    episode: 5,
    difficulty: "easy",
    text: "¿Qué celebran los amigos en este episodio?",
    options: [opt("El cumpleaños de Phoebe", true), opt("El cumpleaños de Monica"), opt("El aniversario de Ross y Rachel"), opt("El bautizo de Emma")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Dónde celebran esa cena de cumpleaños?",
    options: [opt("En un restaurante", true), opt("En casa de Monica y Chandler"), opt("En Central Perk"), opt("En casa de Phoebe")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué les ocurre a Ross y Rachel durante la cena?",
    options: [opt("Se quedan encerrados fuera del apartamento con Emma dentro", true), opt("Discuten y se van antes de tiempo"), opt("Pierden a Emma de vista un momento"), opt("Llegan tarde por culpa de Emma")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Quién se queda dentro del apartamento mientras Ross y Rachel están fuera, encerrados?",
    options: [opt("Emma", true), opt("Marcel"), opt("Nadie, el apartamento está vacío"), opt("El gato de Phoebe")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué ocurre entre Monica y Chandler durante este episodio?",
    options: [opt("Discuten y después tienen relaciones sexuales", true), opt("Deciden posponer sus planes de boda"), opt("Anuncian su mudanza al grupo"), opt("Se pelean y no se hablan en toda la cena")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with Phoebe's Birthday Dinner", true), opt("The One with Phoebe's Rats"), opt("The One Where Monica Sings"), opt("The One with the Blind Dates")],
  },

  // Episodio 6 — The One with the Male Nanny (episodio 200)
  {
    episode: 6,
    difficulty: "easy",
    text: "¿A quién contratan Ross y Rachel como niñero para Emma?",
    options: [opt("A Sandy", true), opt("A Molly"), opt("A David"), opt("A Gavin")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Por qué termina despidiendo Ross al niñero?",
    options: [opt("Por inseguridad ante su carácter sensible, poco 'masculino' para Ross", true), opt("Porque llega tarde varias veces"), opt("Porque Rachel no confía en él"), opt("Porque pide un sueldo demasiado alto")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué intercambian Phoebe y Mike en este episodio?",
    options: [opt("Las llaves de sus respectivas casas", true), opt("Anillos de compromiso"), opt("Regalos de cumpleaños"), opt("Números de teléfono de sus familias")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué personaje del pasado de Phoebe regresa en este episodio?",
    options: [opt("David, el científico", true), opt("Duncan, su exmarido"), opt("Roger, el psiquiatra"), opt("Gary, el policía")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué ocurre entre Phoebe y David antes de que ella aclare su situación sentimental?",
    options: [opt("Se besan", true), opt("Discuten fuertemente"), opt("Él le pide que vuelvan"), opt("Ella lo rechaza sin hablarle")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué actor interpreta al niñero de Emma en este episodio (el 200 de la serie)?",
    options: [opt("Freddie Prinze Jr.", true), opt("Paul Rudd"), opt("Jeff Goldblum"), opt("Dermot Mulroney")],
  },

  // Episodio 7 — The One with Ross' Inappropriate Song
  {
    episode: 7,
    difficulty: "easy",
    text: "¿Con qué canción hace reír Ross a Emma, para disgusto de Rachel?",
    options: [opt("\"Baby Got Back\"", true), opt("\"Smelly Cat\""), opt("Una canción de cuna clásica"), opt("El tema de una serie infantil")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿A quién conoce Phoebe en este episodio?",
    options: [opt("A los padres de Mike", true), opt("A la madre de Chandler"), opt("A un exnovio de Rachel"), opt("Al jefe de Mike")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Cómo se describe a los padres de Mike en este episodio?",
    options: [opt("Como una familia adinerada", true), opt("Como muy estrictos con Phoebe"), opt("Como distantes y fríos"), opt("Como extremadamente religiosos")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Por qué se pone celosa Rachel en este episodio?",
    options: [opt("Porque Ross consigue hacer reír a Emma con esa canción", true), opt("Porque Ross pasa más tiempo con Emma que ella"), opt("Porque Emma dice su primera palabra con Ross"), opt("Porque Ross le compra un juguete mejor")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Qué encuentran Chandler y Joey en este episodio?",
    options: [opt("Una cinta de vídeo con el nombre de Monica", true), opt("Una carta antigua de Ross"), opt("Un álbum de fotos de Phoebe"), opt("El diario de Rachel")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with Ross' Inappropriate Song", true), opt("The One with Rachel's Other Sister"), opt("The One with the Memorial Service"), opt("The One with the Lottery")],
  },

  // Episodio 8 — The One with Rachel's Other Sister
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Qué familiar de Rachel aparece de imprevisto en este episodio?",
    options: [opt("Su hermana Amy", true), opt("Su madre"), opt("Su padre"), opt("Su hermana Jill")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Con qué motivo llega Amy a la reunión familiar?",
    options: [opt("Para celebrar el Día de Acción de Gracias", true), opt("Para el cumpleaños de Emma"), opt("Para la boda de Monica y Chandler"), opt("Para ayudar a cuidar a Emma")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué tema incómodo surge relacionado con Amy y Emma en este episodio?",
    options: [opt("Quién se haría cargo de Emma si algo les pasara a Ross y Rachel", true), opt("Si Amy puede quedarse a vivir con ellos"), opt("Si Amy debería ser la madrina de Emma"), opt("Si Amy puede quedarse con la habitación de invitados")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué usa Monica por primera vez, con mucho nerviosismo, en este episodio?",
    options: [opt("Su vajilla nueva", true), opt("Su horno nuevo"), opt("Su primer delantal profesional"), opt("Sus cubiertos de plata heredados")],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Qué actriz interpreta a Amy, la hermana de Rachel?",
    options: [opt("Christina Applegate", true), opt("Selma Blair"), opt("Aisha Tyler"), opt("Melissa George")],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with Rachel's Other Sister", true), opt("The One with Rachel's Phone Number"), opt("The One with Christmas in Tulsa"), opt("The One Where Rachel Goes Back to Work")],
  },

  // Episodio 9 — The One with Rachel's Phone Number
  {
    episode: 9,
    difficulty: "easy",
    text: "¿Qué hace Rachel en una noche de chicas que después lamenta?",
    options: [opt("Dar su número de teléfono a un desconocido", true), opt("Besar a un desconocido"), opt("Perder su móvil"), opt("Emborracharse y perderse")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué sospecha Joey sobre Monica en este episodio?",
    options: [opt("Que tiene una aventura", true), opt("Que quiere volver a fumar"), opt("Que está buscando otro trabajo"), opt("Que le oculta un problema de salud")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué hace sospechar a Joey sobre Monica?",
    options: [opt("Que Chandler dice tener obligaciones de trabajo que en realidad ocultan otra cosa", true), opt("Que Monica llega tarde varias noches seguidas"), opt("Que Monica recibe llamadas misteriosas"), opt("Que encuentra un recibo extraño de Monica")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué dificultad tienen Ross y Mike en este episodio?",
    options: [opt("Encontrar temas de conversación entre ellos", true), opt("Ponerse de acuerdo sobre Phoebe"), opt("Coincidir en sus horarios"), opt("Llevarse bien con Emma")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿A quién le da Rachel su número de teléfono por error en este episodio?",
    options: [opt("A un desconocido en una noche de chicas", true), opt("A un compañero de trabajo indeseado"), opt("A un antiguo novio"), opt("A un cliente de Ralph Lauren")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with Rachel's Phone Number", true), opt("The One with Rachel's Dream"), opt("The One with the Fertility Test"), opt("The One with the Donor")],
  },

  // Episodio 10 — The One with Christmas in Tulsa (clip show)
  {
    episode: 10,
    difficulty: "easy",
    text: "¿Dónde pasa Chandler la Nochebuena en este episodio?",
    options: [opt("En Tulsa", true), opt("En Nueva York con Monica"), opt("En casa de sus padres"), opt("De viaje con Joey")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué hace Chandler con sus compañeros de la oficina de Tulsa esa noche?",
    options: [opt("Los manda a casa antes de tiempo", true), opt("Organiza una fiesta de empresa"), opt("Les hace trabajar hasta tarde"), opt("Los invita a su apartamento")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Quién intenta ligar con Chandler en la oficina de Tulsa?",
    options: [opt("Wendy, una compañera de trabajo", true), opt("Su jefa directa"), opt("Una clienta"), opt("La recepcionista de la oficina")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué tipo de episodio es este, con abundantes escenas retrospectivas de temporadas anteriores?",
    options: [opt("Un episodio recopilatorio (\"clip show\")", true), opt("Un episodio ambientado en el pasado"), opt("Un episodio musical"), opt("Un episodio narrado por un personaje")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué actriz interpreta a Wendy, la compañera de Chandler en Tulsa?",
    options: [opt("Selma Blair", true), opt("Christina Applegate"), opt("Aisha Tyler"), opt("Melissa George")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué decide hacer Chandler tras el acercamiento de Wendy?",
    options: [opt("Dejar su trabajo en Tulsa y volver a casa", true), opt("Pedir el traslado a otra oficina"), opt("Contárselo a Monica de inmediato y seguir en Tulsa"), opt("Evitarla sin tomar ninguna decisión mayor")],
  },

  // Episodio 11 — The One Where Rachel Goes Back to Work
  {
    episode: 11,
    difficulty: "easy",
    text: "¿Por qué vuelve Rachel antes de tiempo de su baja por maternidad?",
    options: [opt("Por miedo a que su sustituta se quede con el puesto", true), opt("Porque necesita el dinero con urgencia"), opt("Porque se aburre en casa"), opt("Porque Emma ya no la necesita tanto")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Dónde trabaja Rachel?",
    options: [opt("En Ralph Lauren", true), opt("En Bloomingdale's"), opt("En una revista de moda"), opt("En una tienda de bebés")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Con qué ayuda Joey a Phoebe en este episodio?",
    options: [opt("A conseguir un papel de extra en \"Days of Our Lives\"", true), opt("A encontrar representante artístico"), opt("A grabar una maqueta musical"), opt("A conseguir una audición para teatro")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué teme Rachel que le pase con su sustituta en el trabajo?",
    options: [opt("Que se quede con su puesto de forma permanente", true), opt("Que la despidan a ella al volver"), opt("Que le baje el sueldo"), opt("Que la cambien de departamento")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Cómo termina resultando la experiencia de Phoebe como extra?",
    options: [opt("Siendo un desastre", true), opt("Un gran éxito inesperado"), opt("Aburrida pero sin problemas"), opt("El inicio de una carrera como actriz")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One Where Rachel Goes Back to Work", true), opt("The One with Rachel's Dream"), opt("The One with the Soap Opera Party"), opt("The One with Phoebe's Rats")],
  },

  // Episodio 12 — The One with Phoebe's Rats
  {
    episode: 12,
    difficulty: "easy",
    text: "¿Qué adopta Phoebe en este episodio?",
    options: [opt("Una familia de ratas huérfanas", true), opt("Un perro abandonado"), opt("Varios gatos callejeros"), opt("Un pájaro herido")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Por qué se preocupa Ross respecto a la nueva niñera, Molly?",
    options: [opt("Porque Joey empieza a ligar con ella", true), opt("Porque no tiene experiencia"), opt("Porque llega siempre tarde"), opt("Porque Emma no se lleva bien con ella")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué descubre Ross que le tranquiliza sobre Molly y Joey?",
    options: [opt("Que Molly es lesbiana", true), opt("Que Molly ya tiene pareja"), opt("Que Molly rechaza a Joey de inmediato"), opt("Que Molly deja el trabajo")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué presencia Ross en la fiesta de cumpleaños de Rachel, en este episodio?",
    options: [opt("Un beso entre Rachel y Gavin", true), opt("Una pelea entre Rachel y Joey"), opt("A Rachel llorando a solas"), opt("A Rachel bailando con un desconocido")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Quién es Gavin, el chico con el que Rachel se besa en este episodio?",
    options: [opt("Un compañero de trabajo de Rachel", true), opt("Un amigo de Joey"), opt("Un vecino nuevo del edificio"), opt("Un excompañero de universidad")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with Phoebe's Rats", true), opt("The One with the Boob Job"), opt("The One with the Mugging"), opt("The One with the Blind Dates")],
  },

  // Episodio 13 — The One Where Monica Sings
  {
    episode: 13,
    difficulty: "easy",
    text: "¿Dónde convence Phoebe a Monica de cantar en este episodio?",
    options: [opt("En el bar de piano de Mike", true), opt("En Central Perk"), opt("En el restaurante de Monica"), opt("En una boda")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué distrae al público mientras Monica canta?",
    options: [opt("Su blusa transparente", true), opt("Un fallo en el sonido"), opt("Que desafina mucho"), opt("Una pelea en el bar")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué hace Ross, enfadado, durante este episodio?",
    options: [opt("Buscarse una cita", true), opt("Encerrarse en su apartamento"), opt("Discutir con sus padres"), opt("Pedir el traslado de su trabajo")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué ocurre entre Ross y Rachel hacia el final de este episodio?",
    options: [opt("Discuten fuertemente", true), opt("Se reconcilian del todo"), opt("Deciden irse de viaje juntos"), opt("Acuerdan compartir la custodia formalmente")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Qué decide hacer Rachel tras la discusión con Ross en este episodio?",
    options: [opt("Volver a mudarse con Joey", true), opt("Mudarse sola con Emma"), opt("Irse a vivir con Monica"), opt("Quedarse en el apartamento de Ross")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio (de duración extendida)?",
    options: [opt("The One Where Monica Sings", true), opt("The One with Phoebe's Birthday Dinner"), opt("The One with the Male Nanny"), opt("The One in Barbados")],
  },

  // Episodio 14 — The One with the Blind Dates
  {
    episode: 14,
    difficulty: "easy",
    text: "¿Qué traman Phoebe y Joey en este episodio?",
    options: [opt("Organizarles citas horribles a Ross y Rachel a propósito", true), opt("Organizar una fiesta sorpresa"), opt("Buscarle pareja a Chandler"), opt("Reconciliar a los padres de Ross")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Con qué objetivo organizan Phoebe y Joey esas citas horribles?",
    options: [opt("Para que Ross y Rachel se den cuenta de que son perfectos el uno para el otro", true), opt("Para vengarse de ambos por una broma anterior"), opt("Para que dejen de pelearse por Emma"), opt("Para ayudarles a superar su ruptura saliendo con otras personas")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Funciona finalmente el plan de Phoebe y Joey?",
    options: [opt("Sí", true), opt("No, sale completamente mal"), opt("Solo funciona a medias"), opt("Nunca se llega a poner en práctica")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿A quiénes les organizan las citas a ciegas horribles en este episodio?",
    options: [opt("A Ross y Rachel", true), opt("A Monica y Chandler"), opt("A Joey y Phoebe"), opt("A Ross y Phoebe")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Cómo termina el episodio, tras descubrir Ross y Rachel el plan de sus amigos?",
    options: [opt("Con Ross y Rachel persiguiendo a sus amigos", true), opt("Con Ross y Rachel ignorando a sus amigos"), opt("Con Ross y Rachel agradeciéndoles el plan"), opt("Con una gran pelea entre los seis")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with the Blind Dates", true), opt("The One with the Mugging"), opt("The One with the Lottery"), opt("The One with the Fertility Test")],
  },

  // Episodio 15 — The One with the Mugging
  {
    episode: 15,
    difficulty: "easy",
    text: "¿Qué les ocurre a Phoebe y Ross en este episodio?",
    options: [opt("Los atracan por la calle", true), opt("Se pierden en el metro"), opt("Se quedan sin dinero en un restaurante"), opt("Les roban el coche")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Quién resulta ser el atracador de Phoebe y Ross?",
    options: [opt("Un antiguo conocido de Phoebe de su época viviendo en la calle", true), opt("Un desconocido cualquiera"), opt("Un examante de Phoebe"), opt("Un antiguo compañero de trabajo de Ross")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué descubre Ross sobre su propio pasado con Phoebe, a raíz del atraco?",
    options: [opt("Que ella lo atracó cuando eran adolescentes", true), opt("Que se conocían de niños"), opt("Que Phoebe robó en su casa una vez"), opt("Que Phoebe fue vecina suya de joven")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué le robó Phoebe a Ross en aquel entonces, de adolescentes?",
    options: [opt("Su cómic de \"Science Boy\"", true), opt("Su bicicleta"), opt("Su reloj"), opt("Su mochila del colegio")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿A qué se presenta Joey en este episodio?",
    options: [opt("A una audición para una obra de Broadway", true), opt("A una audición para una película"), opt("A un casting de anuncios"), opt("A una prueba para un programa de citas")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué actor interpreta a Leonard Hayes, con quien audiciona Joey?",
    options: [opt("Jeff Goldblum", true), opt("Paul Rudd"), opt("Dermot Mulroney"), opt("Freddie Prinze Jr.")],
  },

  // Episodio 16 — The One with the Boob Job
  {
    episode: 16,
    difficulty: "easy",
    text: "¿A quién piden dinero prestado Chandler y Monica, cada uno por separado y sin saber que el otro también lo hace?",
    options: [opt("A Joey", true), opt("A Ross"), opt("A Phoebe"), opt("A los padres de Monica")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué malentendido provoca Joey en este episodio?",
    options: [opt("Decirle a Chandler que Monica quería el dinero para operarse el pecho", true), opt("Decirle a Monica que Chandler quería el dinero para apostar"), opt("Contarle a Ross que Chandler le pidió dinero"), opt("Decirle a Phoebe que Monica está en apuros económicos")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué le dice Mike a Phoebe en este episodio, que la lleva a terminar la relación?",
    options: [opt("Que no quiere volver a casarse nunca", true), opt("Que no quiere tener hijos"), opt("Que quiere mudarse a otra ciudad"), opt("Que todavía piensa en su exmujer")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Qué decide hacer Phoebe tras escuchar eso de labios de Mike?",
    options: [opt("Terminar la relación con él", true), opt("Ignorarlo y seguir con la relación"), opt("Pedirle tiempo para pensarlo"), opt("Proponerle matrimonio ella primero")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Para qué le pide dinero Monica a Joey, según el malentendido de este episodio?",
    options: [opt("Para operarse el pecho, según cree Chandler por error", true), opt("Para pagar la entrada de un apartamento"), opt("Para un tratamiento de fertilidad no cubierto"), opt("Para invertir en su restaurante")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with the Boob Job", true), opt("The One with the Donor"), opt("The One with the Memorial Service"), opt("The One with the Lottery")],
  },

  // Episodio 17 — The One with the Memorial Service
  {
    episode: 17,
    difficulty: "easy",
    text: "¿Qué publican Ross y Chandler el uno sobre el otro en este episodio?",
    options: [opt("Información falsa en la web de antiguos alumnos de su universidad", true), opt("Fotos vergonzosas en un tablón de la oficina"), opt("Anuncios falsos en el periódico"), opt("Mensajes falsos en el contestador del otro")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Por qué se pelean, de forma cómica, Joey y la pequeña Emma en este episodio?",
    options: [opt("Por Hugsy, el pingüino de peluche de Joey", true), opt("Por un chupete"), opt("Por un osito de peluche de Emma"), opt("Por quién se sienta en el sofá de Central Perk")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué es Hugsy, mencionado en este episodio?",
    options: [opt("El pingüino de peluche con el que Joey duerme", true), opt("El apodo cariñoso que Joey le pone a Emma"), opt("Una mascota real de Joey"), opt("Un personaje de la telenovela de Joey")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿En qué sitio publican Ross y Chandler la información falsa el uno sobre el otro?",
    options: [opt("En la web de antiguos alumnos de su universidad", true), opt("En un periódico local"), opt("En el tablón de anuncios de Central Perk"), opt("En una revista de la ciudad")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Con quién compite Joey por la atención/cariño de Emma en este episodio?",
    options: [opt("Con nadie en particular: discute con Emma misma por el peluche Hugsy", true), opt("Con Ross"), opt("Con Rachel"), opt("Con Phoebe")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with the Memorial Service", true), opt("The One with the Lottery"), opt("The One with Rachel's Dream"), opt("The One with the Soap Opera Party")],
  },

  // Episodio 18 — The One with the Lottery
  {
    episode: 18,
    difficulty: "easy",
    text: "¿Qué compra el grupo de amigos en este episodio?",
    options: [opt("Boletos de lotería", true), opt("Entradas para un concierto"), opt("Regalos de Navidad conjuntos"), opt("Acciones de una empresa")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Sobre qué discuten al comprar juntos los boletos de lotería?",
    options: [opt("Cómo repartirían el premio si ganaran", true), opt("Quién debe pagar los boletos"), opt("Qué números elegir"), opt("Si merece la pena jugar o no")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Cuál es la primera palabra que dice Emma en este episodio?",
    options: [opt("\"Gleba\"", true), opt("\"Mamá\""), opt("\"Papá\""), opt("\"Hola\"")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué espera recibir Chandler en este episodio?",
    options: [opt("Una oferta de trabajo de una agencia de publicidad", true), opt("Un ascenso en su empresa actual"), opt("Una herencia familiar"), opt("El resultado de una prueba médica")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué compran juntos como grupo, generando la disputa central de este episodio?",
    options: [opt("Boletos de lotería", true), opt("Un cuadro para el apartamento"), opt("Un regalo caro para Emma"), opt("Entradas para un espectáculo")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with the Lottery", true), opt("The One with the Boob Job"), opt("The One with the Mugging"), opt("The One with Rachel's Phone Number")],
  },

  // Episodio 19 — The One with Rachel's Dream
  {
    episode: 19,
    difficulty: "easy",
    text: "¿Qué empieza a sentir Rachel por Joey en este episodio?",
    options: [opt("Sentimientos románticos", true), opt("Rechazo repentino"), opt("Indiferencia total"), opt("Desconfianza como niñero")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué provoca esos nuevos sentimientos de Rachel hacia Joey?",
    options: [opt("Verlo rodar una escena de \"Days of Our Lives\"", true), opt("Verlo cuidar de Emma"), opt("Una conversación sincera en Central Perk"), opt("Un consejo de Phoebe")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué sueña Rachel en este episodio?",
    options: [opt("Que besa a Joey", true), opt("Que se casa con Ross de nuevo"), opt("Que pierde a Emma"), opt("Que vuelve a Londres")],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Dónde actúa Phoebe en este episodio, tocando música callejera?",
    options: [opt("En el restaurante de Monica", true), opt("En el metro"), opt("En Central Perk"), opt("En un parque")],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué hacen Ross y Chandler en un fin de semana en Vermont, animados por el azúcar?",
    options: [opt("Robar objetos de un hotel", true), opt("Apostar todo su dinero"), opt("Perderse en el bosque"), opt("Meterse en una pelea de bar")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with Rachel's Dream", true), opt("The One with the Soap Opera Party"), opt("The One Where Rachel Goes Back to Work"), opt("The One with the Donor")],
  },

  // Episodio 20 — The One with the Soap Opera Party
  {
    episode: 20,
    difficulty: "easy",
    text: "¿Qué organiza Joey en este episodio sin invitar a sus amigos?",
    options: [opt("Una fiesta con el reparto de \"Days of Our Lives\"", true), opt("Una fiesta de cumpleaños sorpresa"), opt("Una barbacoa en la azotea"), opt("Una cena con productores de cine")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿De quién se enamora Ross en este episodio?",
    options: [opt("De la profesora Charlie", true), opt("De la niñera Molly"), opt("De una compañera de Rachel"), opt("De una vecina nueva")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Qué peculiaridad tiene Charlie, según se menciona en este episodio?",
    options: [opt("Que solo sale con ganadores de un Premio Nobel", true), opt("Que nunca ha tenido pareja"), opt("Que vive permanentemente fuera del país"), opt("Que es alérgica a los animales")],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué descubren Ross y Rachel en la fiesta organizada por Joey?",
    options: [opt("A Charlie besándose con Joey", true), opt("Que Joey ha estado mintiendo sobre su papel"), opt("Que la fiesta es en realidad para otra persona"), opt("A Joey besándose con otra actriz de la serie")],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué actriz interpreta a Charlie en esta temporada?",
    options: [opt("Aisha Tyler", true), opt("Christina Applegate"), opt("Selma Blair"), opt("Melissa George")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with the Soap Opera Party", true), opt("The One with Rachel's Dream"), opt("The One with the Fertility Test"), opt("The One in Barbados")],
  },

  // Episodio 21 — The One with the Fertility Test
  {
    episode: 21,
    difficulty: "easy",
    text: "¿Qué se hacen Chandler y Monica en este episodio?",
    options: [opt("Pruebas de fertilidad", true), opt("Un chequeo médico rutinario"), opt("Pruebas para adoptar"), opt("Una consulta prematrimonial")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Con quién se encuentran Chandler y Monica en la clínica de fertilidad?",
    options: [opt("Con Janice", true), opt("Con Richard"), opt("Con los padres de Chandler"), opt("Con una antigua compañera de instituto de Monica")],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Qué descubren Chandler y Monica sobre su capacidad de tener hijos?",
    options: [opt("Que no pueden concebir juntos, por incompatibilidad", true), opt("Que tardarán más de lo normal, pero sí podrán"), opt("Que todo está perfectamente bien"), opt("Que necesitan repetir las pruebas más adelante")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Dónde trabaja Phoebe de incógnito en este episodio?",
    options: [opt("En un centro de masajes", true), opt("En una clínica veterinaria"), opt("En una cafetería nueva"), opt("En una tienda de disfraces")],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Quién descubre a Phoebe trabajando de incógnito en ese lugar?",
    options: [opt("Rachel", true), opt("Monica"), opt("Ross"), opt("Chandler")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with the Fertility Test", true), opt("The One with the Donor"), opt("The One with the Pediatrician"), opt("The One with the Sharks")],
  },

  // Episodio 22 — The One with the Donor
  {
    episode: 22,
    difficulty: "easy",
    text: "¿Qué buscan Chandler y Monica tras conocer su problema de fertilidad?",
    options: [opt("Un donante de esperma", true), opt("Una agencia de adopción, directamente"), opt("Una madre de alquiler"), opt("Un segundo diagnóstico médico")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué deciden hacer Chandler y Monica finalmente, en vez de buscar un donante?",
    options: [opt("Adoptar", true), opt("Dejarlo estar por el momento"), opt("Intentarlo de forma natural más tiempo"), opt("Recurrir a un vientre de alquiler")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Quién le propone matrimonio a Phoebe en este episodio?",
    options: [opt("David", true), opt("Mike, por primera vez"), opt("Un cliente del centro de masajes"), opt("Gary, el policía")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Quién más le propone matrimonio a Phoebe, casi al mismo tiempo que David?",
    options: [opt("Mike", true), opt("Duncan"), opt("Un desconocido"), opt("Roger")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿A quién elige finalmente Phoebe entre las dos propuestas de este episodio?",
    options: [opt("A Mike", true), opt("A David"), opt("A ninguno de los dos"), opt("Pide tiempo y no decide en este episodio")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Cuál es el título en inglés de este episodio?",
    options: [opt("The One with the Donor", true), opt("The One with the Fertility Test"), opt("The One in Barbados"), opt("The One with the Lottery")],
  },

  // Episodio 23 — The One in Barbados: Part 1
  {
    episode: 23,
    difficulty: "easy",
    text: "¿A dónde viaja el grupo en este episodio doble que cierra la temporada?",
    options: [opt("A Barbados", true), opt("A Londres"), opt("A Las Vegas"), opt("A Cancún")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Por qué motivo viaja el grupo a Barbados?",
    options: [opt("Por una conferencia académica de Ross", true), opt("Por la boda de un amigo"), opt("Por vacaciones sorpresa de Monica"), opt("Por un viaje de trabajo de Chandler")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué le pasa al pelo de Monica por la humedad de Barbados?",
    options: [opt("Se le encrespa mucho", true), opt("Se le empieza a caer"), opt("Cambia de color con el sol"), opt("Se le queda plano y sin volumen")],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué propuesta de matrimonio recibe Phoebe en Barbados, y termina rechazando?",
    options: [opt("La de David", true), opt("La de Mike"), opt("La de un desconocido en la playa"), opt("La de Duncan")],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Entre qué dos personajes surge una conexión romántica en Barbados?",
    options: [opt("Entre Charlie y Ross", true), opt("Entre Charlie y Joey"), opt("Entre Rachel y un desconocido"), opt("Entre Phoebe y Mike, reconciliándose")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Cuál es el título en inglés de este episodio (primera parte del doble final)?",
    options: [opt("The One in Barbados: Part 1", true), opt("The One in Barbados: Part 2"), opt("The One with the Donor"), opt("The One with the Soap Opera Party")],
  },

  // Episodio 24 — The One in Barbados: Part 2
  {
    episode: 24,
    difficulty: "easy",
    text: "¿Qué propuesta de matrimonio acepta finalmente Phoebe en este episodio?",
    options: [opt("La de Mike", true), opt("La de David"), opt("Ninguna de las dos"), opt("La de Duncan, su exmarido")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿En qué juego compiten Mike y Monica en este episodio?",
    options: [opt("Ping-pong", true), opt("Voleibol de playa"), opt("Ajedrez"), opt("Cartas")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Quién termina ganando esa partida de ping-pong entre Mike y Monica?",
    options: [opt("Mike", true), opt("Monica"), opt("Chandler"), opt("Ross")],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿A quién le confiesa Rachel sus sentimientos en este episodio?",
    options: [opt("A Joey", true), opt("A Ross"), opt("A Phoebe"), opt("A Gavin")],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Cómo reacciona Joey inicialmente ante la confesión de Rachel?",
    options: [opt("La rechaza, por respeto a Ross", true), opt("La acepta de inmediato"), opt("Se ríe, pensando que es broma"), opt("Se lo cuenta enseguida a Ross")],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Qué hace que Joey cambie de opinión al final de la temporada?",
    options: [opt("Ver a Charlie besando a Ross", true), opt("Un consejo directo de Phoebe"), opt("Que Ross le dé permiso explícitamente"), opt("Que Rachel insista una segunda vez")],
  },
];
