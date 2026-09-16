import type { EpisodeInput } from "@/lib/dal/episodes";

/**
 * Datos de referencia (sinopsis, personajes, momentos y frases memorables)
 * de los 24 episodios de la temporada 8 de Friends, para preparar trivia.
 * Fuentes: Wikipedia ("Friends (season 8)"), Wikiquote ("Friends (season 8)")
 * y búsquedas dirigidas (IMDb Quotes, TV Quotes) para los episodios sin
 * cobertura en Wikiquote.
 */
export const season8EpisodeData: EpisodeInput[] = [
  {
    season: 8,
    episode: 1,
    titleEn: "The One After 'I Do'",
    titleEs: "El de después del 'Sí, quiero'",
    synopsis:
      "Todos dan por hecho que Monica está embarazada tras la boda, pero pronto se revela que en realidad es Rachel quien lo está. En la recepción, Ross conoce a Mona, con quien empezará a salir esta temporada.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Mona", "Joey", "Phoebe"],
    memorableMoments: [
      "Todos asumen erróneamente que Monica está embarazada.",
      "Se confirma que la embarazada es Rachel, no Monica.",
      "Ross conoce a Mona en la recepción de la boda.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "¡Monica está embarazada!" },
      { character: "Chandler", quote: "Sí, por eso estoy aquí abajo, celebrándolo." },
    ],
  },
  {
    season: 8,
    episode: 2,
    titleEn: "The One with the Red Sweater",
    titleEs: "El del jersey rojo",
    synopsis:
      "Rachel no quiere revelar quién es el padre del bebé hasta habérselo dicho primero a él. Mientras tanto, el grupo intenta averiguar la identidad de un misterioso hombre que se dejó un jersey rojo olvidado.",
    characters: ["Rachel", "Ross", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel se niega a decir quién es el padre hasta contárselo a él primero.",
      "El grupo intenta descubrir de quién es el jersey rojo olvidado.",
      "Las sospechas sobre la identidad del padre del bebé se disparan.",
    ],
    memorableQuotes: [
      {
        character: "Phoebe",
        quote: "Soy algo más que una rubia guapa con un trasero que no se cansa.",
      },
    ],
  },
  {
    season: 8,
    episode: 3,
    titleEn: "The One Where Rachel Tells...",
    titleEs: "El de cuando Rachel se lo cuenta...",
    synopsis:
      "Rachel se prepara para contarle a Ross que es el padre del bebé, mientras Monica y Chandler planean su luna de miel. La revelación acaba llegando de una forma un tanto accidentada.",
    characters: ["Rachel", "Ross", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel se arma de valor para contarle a Ross la verdad sobre el bebé.",
      "Monica y Chandler ultiman los planes de su luna de miel.",
      "Joey y Phoebe casi arruinan el momento con una falsa alarma de gas.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "Phoebe y yo olimos gas saliendo de vuestro apartamento." },
      { character: "Chandler", quote: "¡Llegamos 10 segundos tarde!" },
    ],
  },
  {
    season: 8,
    episode: 4,
    titleEn: "The One with the Videotape",
    titleEs: "El de la cinta de vídeo",
    synopsis:
      "Ross y Rachel discuten sobre quién dio el primer paso la noche en que concibieron al bebé. Ross revela que, sin querer, grabó en vídeo aquel encuentro y podría zanjar la discusión.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross y Rachel discuten sobre quién sedujo a quién esa noche.",
      "Ross confiesa que grabó accidentalmente el encuentro en vídeo.",
      "El grupo debate si deberían ver la cinta para resolver la duda.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "Que disfrutéis de la luna de miel, Tigre." },
      {
        character: "Ross",
        quote: "Estoy aprendiendo a apreciar las pequeñas cosas, como el sonido de un pájaro.",
      },
    ],
  },
  {
    season: 8,
    episode: 5,
    titleEn: "The One with Rachel's Date",
    titleEs: "El de la cita de Rachel",
    synopsis:
      "Phoebe empieza a salir con un compañero de trabajo de Monica justo cuando tiene que despedirlo. Rachel, ya embarazada, decide tener una cita pese a todo, lo que molesta bastante a Ross.",
    characters: ["Phoebe", "Monica", "Rachel", "Ross", "Chandler", "Joey"],
    memorableMoments: [
      "Phoebe empieza a salir con el compañero de Monica al que debe despedir.",
      "Rachel sale con un chico estando ya embarazada.",
      "Ross se muestra visiblemente celoso e incómodo con la cita de Rachel.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "Chandler Muriel Bing... tus padres nunca te dieron ni una oportunidad.",
      },
    ],
  },
  {
    season: 8,
    episode: 6,
    titleEn: "The One with the Halloween Party",
    titleEs: "El de la fiesta de Halloween",
    synopsis:
      "En la fiesta de Halloween de Monica, Phoebe empieza a sentirse atraída por Eric, el prometido de su hermana gemela Ursula. Ross se lamenta de llevar el disfraz más ridículo de la fiesta.",
    characters: ["Phoebe", "Ursula", "Eric", "Monica", "Ross", "Chandler", "Joey"],
    memorableMoments: [
      "Phoebe se siente atraída por Eric, el prometido de su hermana Ursula.",
      "Ross se queja de lo ridículo que es su disfraz de Halloween.",
      "La fiesta de Monica se llena de disfraces y tensiones cruzadas.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¡Ningún conejito en absoluto! ¡SIEMPRE NINGÚN CONEJITO EN ABSOLUTO!" },
    ],
  },
  {
    season: 8,
    episode: 7,
    titleEn: "The One with the Stain",
    titleEs: "El de la mancha",
    synopsis:
      "Monica sospecha que su nueva asistenta le está robando ropa. Eric quiere salir con Phoebe, pero le cuesta no pensar constantemente en el parecido de esta con su hermana gemela.",
    characters: ["Monica", "Phoebe", "Eric", "Ross", "Rachel", "Chandler", "Joey"],
    memorableMoments: [
      "Monica sospecha que su asistenta le roba ropa.",
      "Eric no logra dejar de comparar a Phoebe con Ursula.",
      "Rachel bromea sobre las primeras palabras que no quiere que diga su bebé.",
    ],
    memorableQuotes: [
      {
        character: "Rachel",
        quote: "No quiero que las primeras palabras de mi hijo sean '¿Qué pasa, nena?'.",
      },
    ],
  },
  {
    season: 8,
    episode: 8,
    titleEn: "The One with the Stripper",
    titleEs: "El de la stripper",
    synopsis:
      "Rachel le cuenta a su padre que está embarazada, pero le miente diciendo que Ross la apoya plenamente, lo cual pone en riesgo la relación de Ross con Mona cuando la verdad sale a la luz.",
    characters: ["Rachel", "Ross", "Mona", "el padre de Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel le miente a su padre sobre el nivel de implicación de Ross.",
      "La mentira de Rachel pone en peligro la relación de Ross y Mona.",
      "El grupo organiza una fiesta con una stripper que se complica.",
    ],
    memorableQuotes: [{ character: "Phoebe", quote: "Es argot para 'embarazada'." }],
  },
  {
    season: 8,
    episode: 9,
    titleEn: "The One with the Rumor",
    titleEs: "El del rumor",
    synopsis:
      "Monica invita a su amigo del instituto Will a la cena de Acción de Gracias. Will, que de adolescente tenía sobrepeso, revela un rumor humillante sobre Rachel que circulaba por el instituto.",
    characters: ["Monica", "Will", "Rachel", "Ross", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Monica reencuentra a su amigo de instituto Will para Acción de Gracias.",
      "Will revela un rumor humillante sobre Rachel del instituto.",
      "Ross y Will confiesan que en el instituto se unieron por odiar a Rachel.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "Puede que no seamos grandes pensadores... ¡pero, maldita sea, sabemos comer!" },
    ],
  },
  {
    season: 8,
    episode: 10,
    titleEn: "The One with Monica's Boots",
    titleEs: "El de las botas de Monica",
    synopsis:
      "Monica se compra unas botas carísimas que le hacen mucho daño, pero le da vergüenza admitirlo. Phoebe se hace pasar por la madre de Ben para poder conocer a la mujer de Sting.",
    characters: ["Monica", "Chandler", "Phoebe", "Ross", "Rachel", "Joey"],
    memorableMoments: [
      "Monica oculta que sus botas nuevas y carísimas le hacen mucho daño.",
      "Phoebe se hace pasar por la madre de Ben para conocer a la mujer de Sting.",
      "Chandler intenta convencer a Monica de que devuelva las botas.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "¿Cómo puedes dejar que le hable así a tu entrepierna?" },
    ],
  },
  {
    season: 8,
    episode: 11,
    titleEn: "The One with Ross's Step Forward",
    titleEs: "El del paso adelante de Ross",
    synopsis:
      "Ross entra en pánico cuando Mona sugiere mandar juntos las felicitaciones navideñas, sintiendo que la relación avanza demasiado rápido. Mientras tanto, las hormonas del embarazo hacen que Rachel empiece a ligar con casi todos los hombres que conoce.",
    characters: ["Ross", "Mona", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross entra en pánico cuando Mona propone enviar felicitaciones navideñas juntos.",
      "Las hormonas del embarazo hacen que Rachel coquetee sin control.",
      "Ross finalmente le dice a Mona que la quiere.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "Ningún hombre que se respete le preguntaría a una mujer: '¿Y esto a dónde va?'.",
      },
    ],
  },
  {
    season: 8,
    episode: 12,
    titleEn: "The One Where Joey Dates Rachel",
    titleEs: "El de cuando Joey sale con Rachel",
    synopsis:
      "Joey saca a Rachel para animarla durante el embarazo y, sin esperarlo, empieza a sentir algo más que amistad por ella.",
    characters: ["Joey", "Rachel", "Ross", "Monica", "Chandler", "Phoebe"],
    memorableMoments: [
      "Joey saca a Rachel a pasar un buen rato durante su embarazo.",
      "Joey se da cuenta de que empieza a sentir algo romántico por Rachel.",
      "El resto del grupo se sorprende ante los nuevos sentimientos de Joey.",
    ],
    memorableQuotes: [{ character: "Rachel", quote: "¿Chandler? Sí, pero no sé por qué." }],
  },
  {
    season: 8,
    episode: 13,
    titleEn: "The One Where Chandler Takes a Bath",
    titleEs: "El del baño de burbujas de Chandler",
    synopsis:
      "Monica anima a Chandler a probar un baño de burbujas para relajarse, y él termina completamente enganchado. Ross y Rachel debaten sobre posibles nombres para el bebé.",
    characters: ["Chandler", "Monica", "Ross", "Rachel", "Joey", "Phoebe"],
    memorableMoments: [
      "Monica convence a Chandler de probar un baño de burbujas.",
      "Chandler se vuelve adicto a sus baños relajantes.",
      "Ross y Rachel no logran ponerse de acuerdo con el nombre del bebé.",
    ],
    memorableQuotes: [{ character: "Chandler", quote: "Voy a necesitar un barco más grande." }],
  },
  {
    season: 8,
    episode: 14,
    titleEn: "The One with the Secret Closet",
    titleEs: "El del armario secreto",
    synopsis:
      "Chandler se obsesiona con descubrir qué esconde Monica en un armario que mantiene siempre cerrado con llave. Mientras tanto, alguien confunde a Joey con el padre del bebé de Rachel.",
    characters: ["Chandler", "Monica", "Joey", "Rachel", "Ross", "Phoebe"],
    memorableMoments: [
      "Chandler se obsesiona con el armario secreto de Monica.",
      "Alguien confunde a Joey con el padre del bebé de Rachel.",
      "Chandler descubre finalmente el desorden que Monica escondía.",
    ],
    memorableQuotes: [{ character: "Rachel", quote: "Sin útero, no hay opinión." }],
  },
  {
    season: 8,
    episode: 15,
    titleEn: "The One with the Birthing Video",
    titleEs: "El del vídeo del parto",
    synopsis:
      "Phoebe le regala a Rachel un vídeo educativo sobre partos, que Chandler ve por error, arruinándole los planes de San Valentín con Monica. Joey, deprimido por no tener pareja, cuida temporalmente de un perro.",
    characters: ["Phoebe", "Rachel", "Chandler", "Monica", "Joey", "Ross"],
    memorableMoments: [
      "Chandler ve por accidente el vídeo del parto que Phoebe le regaló a Rachel.",
      "A Chandler se le arruinan los planes de San Valentín con Monica por el susto.",
      "Joey, deprimido, se encariña con un perro que cuida por el fin de semana.",
    ],
    memorableQuotes: [{ character: "Joey", quote: "He roto al perro, Pheebs. He roto al perro." }],
  },
  {
    season: 8,
    episode: 16,
    titleEn: "The One Where Joey Tells Rachel",
    titleEs: "El de cuando Joey se lo dice a Rachel",
    synopsis:
      "Joey por fin le confiesa a Rachel que se ha enamorado de ella; ella lo rechaza con delicadeza. Ross se disgusta al enterarse de los sentimientos de Joey.",
    characters: ["Joey", "Rachel", "Ross", "Monica", "Chandler", "Phoebe"],
    memorableMoments: [
      "Joey le confiesa a Rachel que se ha enamorado de ella.",
      "Rachel rechaza a Joey con delicadeza, sin romper su amistad.",
      "Ross se disgusta profundamente al descubrir los sentimientos de Joey.",
    ],
    memorableQuotes: [{ character: "Joey", quote: "Creo que me estoy enamorando de ti." }],
  },
  {
    season: 8,
    episode: 17,
    titleEn: "The One with the Tea Leaves",
    titleEs: "El de las hojas de té",
    synopsis:
      "Una lectura de hojas de té predice que Phoebe conocerá pronto a su alma gemela. Rachel evita a Joey tras su confesión de sentimientos.",
    characters: ["Phoebe", "Rachel", "Joey", "Ross", "Monica", "Chandler"],
    memorableMoments: [
      "Una lectura de hojas de té predice que Phoebe conocerá a su alma gemela.",
      "Rachel intenta evitar a Joey tras la incómoda confesión.",
      "Phoebe se obsesiona con encontrar al hombre que anuncia la predicción.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "Las estaban regalando en la tienda... a cambio de dinero." },
    ],
  },
  {
    season: 8,
    episode: 18,
    titleEn: "The One in Massapequa",
    titleEs: "El de Massapequa",
    synopsis:
      "Monica estropea el discurso que había preparado para el aniversario de sus padres. Ross y Rachel fingen estar casados delante de unos vecinos de los padres de Monica.",
    characters: ["Monica", "Ross", "Rachel", "los padres de Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Monica estropea su discurso en el aniversario de sus padres.",
      "Ross y Rachel se hacen pasar por un matrimonio delante de unos vecinos.",
      "La familia Geller se reúne al completo en Massapequa.",
    ],
    memorableQuotes: [{ character: "Phoebe", quote: "¡Esta fiesta es un rollo!" }],
  },
  {
    season: 8,
    episode: 19,
    titleEn: "The One with Joey's Interview",
    titleEs: "El de la entrevista de Joey",
    synopsis:
      "Joey se prepara, con ayuda de sus amigos, para una entrevista en una revista de televisión, temiendo decir algo que pueda perjudicar su carrera. El episodio incluye numerosos flashbacks a temporadas anteriores mientras Joey repasa su vida.",
    characters: ["Joey", "Chandler", "Monica", "Ross", "Rachel", "Phoebe"],
    memorableMoments: [
      "Joey se prepara nervioso para una entrevista de una revista de televisión.",
      "Los amigos le ayudan a ensayar posibles preguntas incómodas.",
      "El episodio repasa, en flashback, momentos de temporadas anteriores.",
    ],
    memorableQuotes: [{ character: "Ross", quote: "Nosotros también trabajamos, ¿sabes?" }],
  },
  {
    season: 8,
    episode: 20,
    titleEn: "The One with the Baby Shower",
    titleEs: "El de la fiesta prenatal",
    synopsis:
      "Monica y Phoebe organizan la fiesta prenatal de Rachel, pero olvidan invitar a Sandra, la madre de Rachel, lo que provoca un roce. Además, la madre de Rachel anuncia que se quedará ocho semanas para ayudar con el bebé.",
    characters: ["Monica", "Phoebe", "Rachel", "Sandra (madre de Rachel)", "Ross", "Chandler", "Joey"],
    memorableMoments: [
      "Monica y Phoebe olvidan invitar a la madre de Rachel a la fiesta prenatal.",
      "La madre de Rachel anuncia que se quedará ocho semanas para ayudar.",
      "Ross celebra eufórico haber ganado a un juego de mesa contra Chandler.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "¡Acabo de darle una paliza a Chandler! Y no, no es nada sexual." },
    ],
  },
  {
    season: 8,
    episode: 21,
    titleEn: "The One with the Cooking Class",
    titleEs: "El de la clase de cocina",
    synopsis:
      "Tras recibir una mala crítica de un restaurante, Monica se apunta a una clase de cocina para mejorar. Rachel se pone celosa al ver a Ross conocer a una mujer atractiva.",
    characters: ["Monica", "Rachel", "Ross", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Monica se apunta a una clase de cocina tras una mala crítica.",
      "Rachel se pone celosa al ver a Ross hablando con una mujer atractiva.",
      "Monica descubre que en la clase todos son mejores cocineros que ella.",
    ],
    memorableQuotes: [{ character: "Phoebe", quote: "La verdad, das un poco de yuyu." }],
  },
  {
    season: 8,
    episode: 22,
    titleEn: "The One Where Rachel Is Late",
    titleEs: "El de cuando Rachel se retrasa",
    synopsis:
      "Con ocho días de retraso sobre la fecha prevista, Rachel prueba todo tipo de remedios para inducir el parto, incluida la intimidad con Ross.",
    characters: ["Rachel", "Ross", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel, con ocho días de retraso, prueba remedios para inducir el parto.",
      "Ross y Rachel intentan la intimidad como último recurso.",
      "El grupo entero está pendiente de si el parto empieza de una vez.",
    ],
    memorableQuotes: [{ character: "Ross", quote: "¿Hacer el amor? ¿Qué eres, una chica?" }],
  },
  {
    season: 8,
    episode: 23,
    titleEn: "The One Where Rachel Has a Baby (Part 1)",
    titleEs: "El de cuando Rachel tiene el bebé (1ª parte)",
    synopsis:
      "Rachel por fin se pone de parto y toda la familia y amigos corren al hospital. El parto se complica y se alarga muchísimo más de lo esperado.",
    characters: ["Rachel", "Ross", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel se pone de parto y todos corren al hospital.",
      "El parto se complica y se alarga muchísimo.",
      "La familia Geller y los amigos esperan juntos noticias en el hospital.",
    ],
    memorableQuotes: [{ character: "Ross", quote: "¿Solo 3? ¡Yo estoy dilatado 3!" }],
  },
  {
    season: 8,
    episode: 24,
    titleEn: "The One Where Rachel Has a Baby (Part 2)",
    titleEs: "El de cuando Rachel tiene el bebé (2ª parte)",
    synopsis:
      "Tras 21 horas de parto, Rachel da a luz a Emma. Esa misma noche, Janice también da a luz en el mismo hospital. Monica y Chandler, contagiados por el ambiente, deciden que ellos también quieren tener hijos.",
    characters: ["Rachel", "Ross", "Janice", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Tras 21 horas de parto, nace Emma, la hija de Ross y Rachel.",
      "Janice da a luz esa misma noche en el mismo hospital.",
      "Monica y Chandler deciden que ellos también quieren tener hijos.",
    ],
    memorableQuotes: [
      {
        character: "Rachel",
        quote: "¿Sabes esa sensación de intentar expulsar un San Bernardo por el trasero?",
      },
    ],
  },
];
