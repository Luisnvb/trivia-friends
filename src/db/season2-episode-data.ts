import type { EpisodeInput } from "@/lib/dal/episodes";

/**
 * Datos de referencia (sinopsis, personajes, momentos y frases memorables)
 * de los 24 episodios de la temporada 2 de Friends, para preparar trivia.
 * Fuentes: Wikipedia ("Friends (season 2)") para sinopsis; Wikiquote
 * ("Friends (season 2)"), IMDb "Quotes" y TV Quotes por episodio para las
 * citas.
 */
export const season2EpisodeData: EpisodeInput[] = [
  {
    season: 2,
    episode: 1,
    titleEn: "The One with Ross' New Girlfriend",
    titleEs: "El de la nueva novia de Ross",
    synopsis:
      "Ross vuelve de China con Julie, su nueva novia, lo que destroza a Rachel justo cuando acababa de descubrir que estaba enamorada de él. El resto del grupo intenta lidiar con la tensión mientras Rachel finge estar bien con la noticia.",
    characters: ["Ross", "Rachel", "Julie", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross regresa de China con Julie, su nueva novia.",
      "Rachel se derrumba al enterarse justo cuando había decidido confesarle sus sentimientos a Ross.",
      "El grupo finge normalidad mientras la tensión entre Ross y Rachel es evidente.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Sí, en realidad son las 6 de la tarde de mañana, en nuestra hora." },
    ],
  },
  {
    season: 2,
    episode: 2,
    titleEn: "The One with the Breast Milk",
    titleEs: "El de la leche materna",
    synopsis:
      "Al grupo le incomoda ver a Carol amamantar a Ben delante de ellos, y discuten si es apropiado sentirse así. Joey compite con un compañero de trabajo por la atención de una mujer, mientras Ross intenta que sus amigos se acostumbren a la lactancia con normalidad.",
    characters: ["Carol", "Ross", "Joey", "Monica", "Rachel", "Chandler", "Phoebe"],
    memorableMoments: [
      "Al grupo le resulta incómodo ver a Carol amamantar a Ben en el sofá.",
      "Joey compite con un compañero de trabajo por la atención de una mujer.",
      "Ross defiende que la lactancia es algo natural y pide a sus amigos que se relajen.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "Sí, ya lo sé, pero es que hay un bebé chupando de ahí." },
    ],
  },
  {
    season: 2,
    episode: 3,
    titleEn: "The One Where Heckles Dies",
    titleEs: "El de cuando se muere Heckles",
    synopsis:
      "El señor Heckles, el vecino de abajo, muere y deja sus pertenencias al grupo, que se las reparte entre risas y objetos extraños. Chandler se obsesiona con la idea de que su futuro puede acabar pareciéndose al de Heckles: solo y amargado.",
    characters: ["Chandler", "Monica", "Ross", "Joey", "Rachel", "Phoebe", "Sr. Heckles"],
    memorableMoments: [
      "El grupo se entera de que el señor Heckles, su vecino de abajo, ha muerto.",
      "Se reparten las pertenencias de Heckles, incluyendo objetos muy extraños.",
      "Chandler teme convertirse en una versión futura de Heckles: solo y amargado.",
    ],
    memorableQuotes: [
      {
        character: "Phoebe",
        quote: "Tengo la sensación de que no me está empujando tanto la gravedad como que me está apretando.",
      },
    ],
  },
  {
    season: 2,
    episode: 4,
    titleEn: "The One with Phoebe's Husband",
    titleEs: "El del marido de Phoebe",
    synopsis:
      "Phoebe revela a sus amigos que está casada en secreto con Duncan, un patinador artístico canadiense homosexual al que ayudó a conseguir la residencia en Estados Unidos casándose con él por conveniencia. El grupo se sorprende al conocer este episodio oculto de su pasado.",
    characters: ["Phoebe", "Duncan", "Monica", "Ross", "Rachel", "Chandler", "Joey"],
    memorableMoments: [
      "Phoebe revela que está casada en secreto con Duncan, un patinador canadiense.",
      "Se descubre que el matrimonio fue por conveniencia, para que Duncan obtuviera la residencia.",
      "El grupo reacciona con sorpresa ante este secreto guardado durante años.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote: "No es nada grande. Para nada. Más bien como, no sé, ¡tener un tercer pezón!",
      },
    ],
  },
  {
    season: 2,
    episode: 5,
    titleEn: "The One with Five Steaks and an Eggplant",
    titleEs: "El de los cinco filetes y una berenjena",
    synopsis:
      "La diferencia de ingresos entre los amigos causa tensión cuando Monica, Rachel y Phoebe no pueden permitirse los mismos planes caros que Ross, Chandler y Joey, incluidas unas entradas a un concierto de Hootie & the Blowfish. Además, a Monica la despiden de su trabajo como chef.",
    characters: ["Monica", "Rachel", "Phoebe", "Ross", "Chandler", "Joey"],
    memorableMoments: [
      "La diferencia de ingresos entre el grupo provoca tensión sobre los planes que pueden compartir.",
      "Monica es despedida de su restaurante.",
      "Phoebe rechaza ir a un concierto de Hootie & the Blowfish por no poder pagarlo.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "Es que ahora mismo no estoy en un momento muy Hootie." },
    ],
  },
  {
    season: 2,
    episode: 6,
    titleEn: "The One with the Baby on the Bus",
    titleEs: "El del bebé en el autobús",
    synopsis:
      "Chandler y Joey usan al pequeño Ben para ligar con mujeres, y accidentalmente lo dejan olvidado en un autobús. En su búsqueda desesperada, confunden a Ben con otro bebé casi idéntico antes de recuperarlo sano y salvo.",
    characters: ["Chandler", "Joey", "Ross", "Ben", "Monica", "Rachel", "Phoebe"],
    memorableMoments: [
      "Chandler y Joey usan a Ben como reclamo para ligar con mujeres en el parque.",
      "Se dejan a Ben olvidado en un autobús por accidente.",
      "Confunden a Ben con otro bebé casi idéntico al intentar recuperarlo.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "No creo que hayamos traído suficientes cosas. ¿Se te olvidó meter el yunque del bebé?",
      },
      { character: "Monica", quote: "Siento haberte envenenado." },
    ],
  },
  {
    season: 2,
    episode: 7,
    titleEn: "The One Where Ross Finds Out",
    titleEs: "El de cuando Ross se entera",
    synopsis:
      "Rachel, borracha, deja un mensaje en el contestador de Ross confesándole sus sentimientos. Al día siguiente intenta borrarlo antes de que él lo escuche, pero Ross ya lo ha oído. El episodio termina con su primer beso.",
    characters: ["Rachel", "Ross", "Monica", "Chandler", "Joey", "Phoebe", "Julie"],
    memorableMoments: [
      "Rachel deja un mensaje borracha en el contestador de Ross confesando sus sentimientos.",
      "Rachel intenta desesperadamente borrar el mensaje antes de que Ross lo escuche.",
      "Ross y Rachel se besan por primera vez al final del episodio.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Llevo haciéndolo desde noveno curso, se me da bastante bien." },
    ],
  },
  {
    season: 2,
    episode: 8,
    titleEn: "The One with the List",
    titleEs: "El de la lista",
    synopsis:
      "Ross, indeciso entre Julie y Rachel, hace una lista de pros y contras de cada una a petición de Chandler. Rachel encuentra la lista, y le duele profundamente ver los defectos que Ross ha escrito sobre ella, aunque termina decidiéndose por ella igualmente.",
    characters: ["Ross", "Rachel", "Julie", "Chandler", "Monica", "Joey", "Phoebe"],
    memorableMoments: [
      "Chandler anima a Ross a hacer una lista de pros y contras de Rachel y Julie.",
      "Ross solo consigue escribir 'No es Rachel' como contra de Julie.",
      "Rachel encuentra la lista y se siente herida por los defectos que Ross escribió sobre ella.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Ya sé, debe de ser tan difícil. 'Dos mujeres me quieren, las dos son guapísimas'.",
      },
      { character: "Rachel", quote: "¿Qué demonios es una 'Rachem'? ¿Es un término de paleontología?" },
    ],
  },
  {
    season: 2,
    episode: 9,
    titleEn: "The One with Phoebe's Dad",
    titleEs: "El del padre de Phoebe",
    synopsis:
      "En Navidad, Phoebe decide buscar a su padre biológico. Descubre que la foto que su abuela siempre le dio como la de su padre es en realidad la de un hombre que solo posaba dentro de marcos de fotos de muestra, y que su abuela le ha mentido durante años.",
    characters: ["Phoebe", "Frances (abuela)", "Ross", "Monica", "Rachel", "Chandler", "Joey"],
    memorableMoments: [
      "Phoebe decide buscar a su padre biológico por Navidad.",
      "Descubre que la foto que creía de su padre es la de un modelo de marcos de fotos.",
      "Su abuela confiesa que le ha mentido sobre su padre durante años.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Eh, Phoebs, ese es el tipo que viene dentro del marco.",
      },
      { character: "Frances", quote: "Está bien, ese no es tu padre." },
    ],
  },
  {
    season: 2,
    episode: 10,
    titleEn: "The One with Russ",
    titleEs: "El de Russ",
    synopsis:
      "Rachel empieza a salir con Russ, un hombre que se parece asombrosamente a Ross, para incomodidad de todo el grupo. Mientras tanto, Monica retoma su relación con su ex Fun Bobby, y descubre que dejó de ser 'divertido' desde que ella le hizo dejar de beber.",
    characters: ["Rachel", "Russ", "Monica", "Fun Bobby", "Ross", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel empieza a salir con Russ, casi idéntico a Ross.",
      "El grupo comenta lo perturbador del parecido entre Russ y Ross.",
      "Monica se da cuenta de que Fun Bobby ha dejado de ser divertido desde que dejó de beber por ella.",
    ],
    memorableQuotes: [
      {
        character: "Fun Bobby",
        quote: "Bueno, los haría belgas, pero los gofres no caben bien en la petaca.",
      },
      {
        character: "Monica",
        quote: "No puedo dejarlo. Yo fui quien hizo que dejara de beber. Es aburrido por mi culpa.",
      },
    ],
  },
  {
    season: 2,
    episode: 11,
    titleEn: "The One with the Lesbian Wedding",
    titleEs: "El de la boda lésbica",
    synopsis:
      "Monica se encarga del catering de la boda de Carol y Susan, mientras Ross se debate entre acudir o no. Phoebe cree estar poseída por el espíritu de una clienta muerta a la que dio un masaje. Chandler, soltero, reflexiona en voz alta sobre su soledad durante la ceremonia.",
    characters: ["Monica", "Carol", "Susan", "Phoebe", "Ross", "Rachel", "Chandler", "Joey"],
    memorableMoments: [
      "Monica organiza el catering de la boda de Carol y Susan.",
      "Ross se debate entre asistir o no a la boda de su exmujer.",
      "Phoebe cree estar poseída por el espíritu de una clienta a la que dio un masaje.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "El mundo entero es mi boda lésbica." },
    ],
  },
  {
    season: 2,
    episode: 12,
    titleEn: "The One After the Super Bowl: Part 1",
    titleEs: "El de después de la Super Bowl (1ª parte)",
    synopsis:
      "Ross viaja al zoo de San Diego para visitar a Marcel y le dicen que el mono ha muerto. Un conserje le revela la verdad: hubo un robo y Marcel fue secuestrado para trabajar en el mundo del espectáculo. Ross viaja a Los Ángeles para intentar encontrarlo.",
    characters: ["Ross", "Marcel", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross visita el zoo de San Diego y le dicen que Marcel ha muerto.",
      "Un conserje le revela que en realidad Marcel fue robado del zoo.",
      "Ross descubre que Marcel ahora trabaja en el mundo del espectáculo.",
    ],
    memorableQuotes: [
      { character: "Administrador del zoo", quote: "Me temo que tengo malas noticias. Marcel ha fallecido." },
      { character: "Cuidador del zoo", quote: "Tu mono ha encontrado una nueva carrera en el mundo del espectáculo." },
    ],
  },
  {
    season: 2,
    episode: 13,
    titleEn: "The One After the Super Bowl: Part 2",
    titleEs: "El de después de la Super Bowl (2ª parte)",
    synopsis:
      "Ross se reencuentra con Marcel en el rodaje de una película protagonizada por Jean-Claude Van Damme, mientras Rachel y Monica compiten por la atención del actor. Por separado, Chandler queda con una antigua compañera de colegio que en realidad quiere vengarse de él por una humillación de la infancia.",
    characters: ["Ross", "Marcel", "Rachel", "Monica", "Jean-Claude Van Damme", "Chandler", "Susie", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross se reencuentra con Marcel en el rodaje de una película de Jean-Claude Van Damme.",
      "Rachel y Monica compiten por la atención de Van Damme.",
      "Chandler cae en la trampa de venganza de Susie, una antigua compañera de colegio.",
    ],
    memorableQuotes: [
      {
        character: "Rachel",
        quote: "Monica quiere hacer un trío contigo y con Drew Barrymore.",
      },
    ],
  },
  {
    season: 2,
    episode: 14,
    titleEn: "The One with the Prom Video",
    titleEs: "El del vídeo del baile de graduación",
    synopsis:
      "El grupo ve un vídeo casero del instituto en el que se revela que Ross llevó a Rachel a su baile de graduación después de que su cita original la dejara plantada, un gesto del que Rachel nunca se enteró hasta ahora. El descubrimiento acerca definitivamente a Ross y Rachel.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "El grupo ve un vídeo casero del baile de graduación del instituto.",
      "Se revela que Ross llevó a Rachel al baile cuando su cita la dejó plantada.",
      "Rachel se emociona al descubrir el gesto de Ross tantos años después.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¿Cuántas cámaras hay enfocándote exactamente?" },
    ],
  },
  {
    season: 2,
    episode: 15,
    titleEn: "The One Where Ross and Rachel...You Know",
    titleEs: "El de cuando Ross y Rachel... ya sabéis",
    synopsis:
      "Ross y Rachel pasan su primera noche juntos en una exhibición del museo donde trabaja Ross, y se quedan dormidos allí. Un grupo escolar los descubre a la mañana siguiente. Monica, por su parte, empieza a salir con el doctor Richard Burke, un amigo de sus padres.",
    characters: ["Ross", "Rachel", "Monica", "Richard Burke", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross y Rachel tienen su primera noche juntos en el museo.",
      "Un grupo de colegio los descubre dormidos en la exhibición a la mañana siguiente.",
      "Monica empieza a salir con el doctor Richard Burke, un viejo amigo de sus padres.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¡Ahora podemos ver Green Acres tal y como estaba pensada!" },
      { character: "Monica", quote: "Estoy saliendo con un hombre en cuya piscina hice pis una vez." },
    ],
  },
  {
    season: 2,
    episode: 16,
    titleEn: "The One Where Joey Moves Out",
    titleEs: "El de cuando Joey se muda",
    synopsis:
      "Joey, gracias a su sueldo de la telenovela, decide mudarse a su propio apartamento, lo que entristece a Chandler. Antes de irse, discuten sobre quién se queda con el futbolín, y acaban jugando una partida decisiva por él.",
    characters: ["Joey", "Chandler", "Ross", "Monica", "Rachel", "Phoebe"],
    memorableMoments: [
      "Joey anuncia que se muda a su propio apartamento gracias a su sueldo de actor.",
      "Chandler y Joey discuten por quién se queda con el futbolín.",
      "Juegan una partida decisiva de futbolín para decidir quién se lo lleva.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "¡A tus hombrecitos les van a meter más goles que a tu hermana!",
      },
    ],
  },
  {
    season: 2,
    episode: 17,
    titleEn: "The One Where Eddie Moves In",
    titleEs: "El de cuando se muda Eddie",
    synopsis:
      "Chandler acepta a Eddie como nuevo compañero de piso tras la marcha de Joey, aunque pronto empieza a resultarle extraño. Mientras tanto, Phoebe graba una versión profesional de 'Smelly Cat' para un anuncio, aunque acaban sustituyendo su voz por la de otra cantante.",
    characters: ["Chandler", "Eddie", "Phoebe", "Joey", "Monica", "Ross", "Rachel"],
    memorableMoments: [
      "Chandler acepta a Eddie como su nuevo compañero de piso.",
      "Phoebe graba una versión profesional de 'Smelly Cat' para un anuncio.",
      "Sustituyen la voz de Phoebe por la de otra cantante en la grabación final.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "Así que el gato apesta, pero vosotros lo queréis igual." },
    ],
  },
  {
    season: 2,
    episode: 18,
    titleEn: "The One Where Dr. Ramoray Dies",
    titleEs: "El de cuando muere el Dr. Ramoray",
    synopsis:
      "El personaje de Joey en la telenovela muere después de que él presuma en una entrevista de escribir sus propias frases, algo que molesta a los guionistas. Joey intenta encontrar la manera de que su personaje pueda volver a la serie a pesar de estar 'muerto'.",
    characters: ["Joey", "Chandler", "Phoebe", "Monica", "Ross", "Rachel"],
    memorableMoments: [
      "Joey presume en una entrevista de escribir él mismo sus frases en la telenovela.",
      "Los guionistas, molestos, deciden matar a su personaje, el Dr. Ramoray.",
      "Joey intenta idear una forma de que su personaje pueda regresar a pesar de estar muerto.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "Dijeron que cuando encontraron mi cuerpo, mi cerebro estaba tan destrozado que el único médico que podía haberme salvado era yo mismo.",
      },
    ],
  },
  {
    season: 2,
    episode: 19,
    titleEn: "The One Where Eddie Won't Go",
    titleEs: "El de cuando Eddie no se va",
    synopsis:
      "Chandler decide que Eddie, su extraño compañero de piso, tiene que irse, pero este se niega a marcharse y su comportamiento se vuelve cada vez más inquietante. Al final, Joey vuelve a mudarse con Chandler, para alivio de ambos.",
    characters: ["Chandler", "Eddie", "Joey", "Monica", "Ross", "Rachel", "Phoebe"],
    memorableMoments: [
      "Chandler le pide a Eddie que se mude, pero este se niega a marcharse.",
      "Eddie confiesa que le gusta quedarse mirando a Chandler mientras duerme.",
      "Joey vuelve a mudarse con Chandler al final del episodio.",
    ],
    memorableQuotes: [
      { character: "Eddie", quote: "Mirarte dormir. Me hace sentir en paz." },
      { character: "Chandler", quote: "Ding, dong, el psicópata se ha ido." },
    ],
  },
  {
    season: 2,
    episode: 20,
    titleEn: "The One Where Old Yeller Dies",
    titleEs: "El de cuando muere Old Yeller",
    synopsis:
      "Phoebe, que siempre creyó que la película 'Old Yeller' tenía un final feliz, descubre horrorizada el trágico desenlace real y cae en una profunda tristeza. El resto del grupo intenta animarla mientras descubre que otras películas de su infancia también tenían finales tristes que nunca entendió.",
    characters: ["Phoebe", "Monica", "Chandler", "Ross", "Rachel", "Joey"],
    memorableMoments: [
      "Phoebe descubre por primera vez el trágico final real de 'Old Yeller'.",
      "Phoebe cae en una profunda tristeza tras enterarse del desenlace.",
      "Descubre que tampoco entendió bien el final de otras películas de su infancia, como 'La telaraña de Charlotte'.",
    ],
    memorableQuotes: [
      {
        character: "Phoebe",
        quote: "¡No, no, no, Travis, baja el arma! ¡Es tu amigo, es tu Yeller!",
      },
      { character: "Phoebe", quote: "No tiene rabia, tiene cachorros." },
    ],
  },
  {
    season: 2,
    episode: 21,
    titleEn: "The One with the Bullies",
    titleEs: "El de los abusones",
    synopsis:
      "Ross y Chandler se enfrentan a un par de abusones que les quitan el sitio habitual en Central Perk. Al mismo tiempo, Phoebe conoce por fin a Frank Jr., su medio hermano, con quien descubre tener muy poco en común más allá del padre que comparten.",
    characters: ["Ross", "Chandler", "Phoebe", "Frank Jr.", "Monica", "Rachel", "Joey"],
    memorableMoments: [
      "Ross y Chandler se enfrentan a dos abusones que les quitan su sitio en Central Perk.",
      "Phoebe conoce por primera vez a su medio hermano Frank Jr.",
      "Phoebe y Frank Jr. descubren que apenas tienen nada en común.",
    ],
    memorableQuotes: [
      {
        character: "Phoebe",
        quote: "Bueno, en realidad no lo conozco. Solo genéticamente. Es como mi padre también.",
      },
      { character: "Frank Jr.", quote: "Le encantaban los zancos... Era más feliz subido a sus zancos." },
    ],
  },
  {
    season: 2,
    episode: 22,
    titleEn: "The One with the Two Parties",
    titleEs: "El de las dos fiestas",
    synopsis:
      "Los padres divorciados de Rachel se presentan sin avisar el mismo día de su fiesta de cumpleaños, así que el grupo improvisa dos fiestas simultáneas para mantenerlos separados y evitar una pelea. Ross también tiene un encuentro incómodo con el padre de Rachel, cirujano, sobre sus respectivas profesiones.",
    characters: ["Rachel", "Dr. Green (padre)", "Sandra Green (madre)", "Monica", "Ross", "Chandler", "Phoebe", "Joey"],
    memorableMoments: [
      "Los padres divorciados de Rachel aparecen sin avisar el día de su cumpleaños.",
      "El grupo organiza dos fiestas simultáneas para mantenerlos separados.",
      "Ross tiene un intercambio incómodo con el padre de Rachel sobre sus trabajos.",
    ],
    memorableQuotes: [
      {
        character: "Rachel",
        quote: "Lo único que tenían que hacer era sentarse en el mismo estadio y sonreír, pero se pelearon durante el discurso de graduación.",
      },
      {
        character: "Ross",
        quote: "Esa es la parte buena de mi trabajo. Todos los dinosaurios de mi mesa ya están muertos.",
      },
    ],
  },
  {
    season: 2,
    episode: 23,
    titleEn: "The One with the Chicken Pox",
    titleEs: "El de la varicela",
    synopsis:
      "Phoebe contrae la varicela de Ben justo cuando Ryan, su antiguo novio de la Marina, viene de permiso a visitarla. Aun sin haber pasado la varicela él tampoco, deciden pasar juntos ese tiempo de todos modos. Monica, por su parte, se lamenta de que Richard no tenga ninguna obsesión rara como ella.",
    characters: ["Phoebe", "Ryan", "Monica", "Richard Burke", "Ross", "Rachel", "Chandler", "Joey", "Ben"],
    memorableMoments: [
      "Phoebe contrae la varicela contagiada por el pequeño Ben.",
      "Ryan, su antiguo novio de la Marina, llega de permiso justo en ese momento.",
      "Monica se lamenta de que Richard no tenga ninguna manía u obsesión extraña.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "Nunca la había pasado, me siento tan excluida." },
      { character: "Monica", quote: "¡No puedo creer que mi novio no tenga ninguna manía rara!" },
    ],
  },
  {
    season: 2,
    episode: 24,
    titleEn: "The One with Barry and Mindy's Wedding",
    titleEs: "El de la boda de Barry y Mindy",
    synopsis:
      "Rachel actúa como dama de honor en la boda de su exprometido Barry con Mindy, a pesar de que Barry ha estado hablando mal de ella. Mientras tanto, Richard le confiesa a Monica que tendría hijos por ella si eso significa no perderla, pero su forma de decirlo la deja con dudas, y la pareja termina rompiendo.",
    characters: ["Rachel", "Barry", "Mindy", "Monica", "Richard Burke", "Ross", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel es dama de honor en la boda de Barry, a pesar de que él ha hablado mal de ella.",
      "Richard le dice a Monica que tendría hijos si eso significara no perderla.",
      "Monica y Richard terminan su relación por la forma en que él lo plantea.",
    ],
    memorableQuotes: [
      {
        character: "Richard",
        quote: "Si tener hijos es lo que hace falta para estar contigo, Monica, entonces lo haré.",
      },
      { character: "Richard", quote: "Supongo que seguiremos bailando." },
    ],
  },
];
