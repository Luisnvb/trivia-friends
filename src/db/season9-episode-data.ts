import type { EpisodeInput } from "@/lib/dal/episodes";

/**
 * Datos de referencia (sinopsis, personajes, momentos y frases memorables)
 * de los 24 episodios de la temporada 9 de Friends, para preparar trivia.
 * Fuentes: Wikipedia ("Friends (season 9)") para las sinopsis y Wikiquote
 * ("Friends (season 9)") para las citas.
 */
export const season9EpisodeData: EpisodeInput[] = [
  {
    season: 9,
    episode: 1,
    titleEn: "The One Where No One Proposes",
    titleEs: "El de que nadie se declara",
    synopsis:
      "Rachel malinterpreta el gesto de Joey, que solo recogió del suelo el anillo de compromiso, como si él mismo le estuviera pidiendo matrimonio. Joey no sabe cómo aclarar el malentendido sin herirla. Mientras tanto, Ross se plantea pedirle a Rachel que retomen su relación, y Monica y Chandler siguen intentando quedarse embarazados.",
    characters: ["Rachel", "Joey", "Ross", "Monica", "Chandler", "Phoebe"],
    memorableMoments: [
      "Rachel cree que Joey se le ha declarado al recoger el anillo del suelo.",
      "Joey no encuentra el momento de aclarar el malentendido.",
      "Ross se plantea pedirle a Rachel que retomen su relación.",
      "Monica y Chandler continúan intentando quedarse embarazados.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "¡Tú no le diste ese anillo!" },
    ],
  },
  {
    season: 9,
    episode: 2,
    titleEn: "The One Where Emma Cries",
    titleEs: "El de cuando Emma llora",
    synopsis:
      "Rachel se agobia porque no consigue calmar el llanto constante de Emma y empieza a dudar de sí misma como madre primeriza. Chandler, sin darse cuenta, acepta un traslado laboral a Tulsa. Mientras tanto, Joey y Ross acaban en el hospital tras una pelea física entre ellos por un malentendido.",
    characters: ["Rachel", "Emma", "Chandler", "Monica", "Joey", "Ross"],
    memorableMoments: [
      "Rachel se agobia al no lograr calmar el llanto de Emma.",
      "Chandler acepta sin querer un traslado laboral a Tulsa.",
      "Joey y Ross se pelean físicamente y terminan en el hospital.",
    ],
    memorableQuotes: [
      { character: "Monica", quote: "Ella, Rachel. No 'eso'. Ella." },
    ],
  },
  {
    season: 9,
    episode: 3,
    titleEn: "The One with the Pediatrician",
    titleEs: "El del pediatra",
    synopsis:
      "A Monica le ofrecen un nuevo puesto de trabajo en Nueva York justo cuando Chandler empieza a viajar constantemente a Tulsa por el suyo. Joey le presenta a Phoebe a su amigo Mike, con quien conectan de inmediato. Rachel, por su parte, es rechazada por el pediatra al que quiere llevar a Emma tras una cita incómoda.",
    characters: ["Monica", "Chandler", "Joey", "Phoebe", "Mike", "Rachel"],
    memorableMoments: [
      "A Monica le ofrecen un nuevo trabajo en Nueva York.",
      "Chandler empieza a viajar regularmente a Tulsa por trabajo.",
      "Joey presenta a Phoebe a su amigo Mike por primera vez.",
      "El pediatra rechaza atender a Emma tras una cita incómoda con Rachel.",
    ],
    memorableQuotes: [{ character: "Monica", quote: "Que iba a comérmelo." }],
  },
  {
    season: 9,
    episode: 4,
    titleEn: "The One with the Sharks",
    titleEs: "El de los tiburones",
    synopsis:
      "Monica viaja a Tulsa para dar una sorpresa a Chandler, pero surge un malentendido entre ambos relacionado con un documental sobre tiburones que interpretan de forma muy distinta. Mientras tanto, Ross se inventa una relación de pareja falsa para presentar a Phoebe ante unos conocidos.",
    characters: ["Monica", "Chandler", "Ross", "Phoebe"],
    memorableMoments: [
      "Monica viaja a Tulsa para sorprender a Chandler.",
      "Un documental sobre tiburones provoca un malentendido entre ambos.",
      "Ross inventa una historia de pareja falsa para Phoebe.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Bueno, bueno, bueno. Deben ser las cinco en Tulsa, porque en Nueva York ya es la hora del sexo.",
      },
    ],
  },
  {
    season: 9,
    episode: 5,
    titleEn: "The One with Phoebe's Birthday Dinner",
    titleEs: "El de la cena de cumpleaños de Phoebe",
    synopsis:
      "El grupo intenta celebrar el cumpleaños de Phoebe en un restaurante elegante, pero una sucesión de contratiempos impide que todos puedan sentarse a cenar juntos a la vez, obligándolos a turnarse y complicando toda la noche.",
    characters: ["Phoebe", "Ross", "Monica", "Chandler", "Joey", "Rachel"],
    memorableMoments: [
      "El grupo organiza una cena de cumpleaños para Phoebe en un restaurante elegante.",
      "Una sucesión de contratiempos impide que todos cenen juntos a la vez.",
      "Ross cuenta una anécdota disparatada sobre un águila que se incendia.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "Una paloma... ¡un águila entró volando, se posó en la cocina y se prendió fuego!",
      },
    ],
  },
  {
    season: 9,
    episode: 6,
    titleEn: "The One with the Male Nanny",
    titleEs: "El de la niñera",
    synopsis:
      "Ross y Rachel contratan a Sandy, un niñero para Emma, lo cual incomoda profundamente a Ross por el simple hecho de que sea un hombre. Phoebe y Mike avanzan en su relación, mientras David, el antiguo novio científico de Phoebe, reaparece brevemente y complica la situación antes de volver a marcharse.",
    characters: ["Ross", "Rachel", "Sandy", "Phoebe", "Mike", "David"],
    memorableMoments: [
      "Ross y Rachel contratan a Sandy, un niñero, para cuidar de Emma.",
      "A Ross le incomoda profundamente que el niñero sea un hombre.",
      "David reaparece brevemente en la vida de Phoebe, complicando su relación con Mike.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Había una vez un hombre llamado Chandler, cuya mujer le hizo morir por dentro.",
      },
    ],
  },
  {
    season: 9,
    episode: 7,
    titleEn: "The One with Ross' Inappropriate Song",
    titleEs: "El de la canción inapropiada de Ross",
    synopsis:
      "Rachel siente celos al ver que Ross consigue hacer reír a Emma cantándole una canción, algo que ella misma no ha logrado. Phoebe conoce a los adinerados padres de Mike por primera vez, mientras Chandler y Joey encuentran una misteriosa cinta de vídeo en el apartamento.",
    characters: ["Rachel", "Ross", "Emma", "Phoebe", "Mike", "Chandler", "Joey"],
    memorableMoments: [
      "Rachel siente celos al ver que Ross hace reír a Emma con una canción.",
      "Phoebe conoce a los adinerados padres de Mike.",
      "Chandler y Joey encuentran una misteriosa cinta de vídeo.",
    ],
    memorableQuotes: [{ character: "Ross", quote: "¡Soy un padre terrible!" }],
  },
  {
    season: 9,
    episode: 8,
    titleEn: "The One with Rachel's Other Sister",
    titleEs: "El de la otra hermana de Rachel",
    synopsis:
      "Amy, otra de las hermanas de Rachel, se presenta sin avisar por Acción de Gracias y provoca preguntas incómodas sobre quién se haría cargo de Emma si algo les pasara a Ross y Rachel, además de ofender a varios miembros del grupo con sus comentarios.",
    characters: ["Rachel", "Amy", "Ross", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Amy, la hermana de Rachel, se presenta sin avisar por Acción de Gracias.",
      "Surgen preguntas incómodas sobre la tutela de Emma.",
      "Amy ofende a varios miembros del grupo con sus comentarios.",
    ],
    memorableQuotes: [{ character: "Rachel", quote: "¡Escondan mis anillos!" }],
  },
  {
    season: 9,
    episode: 9,
    titleEn: "The One with Rachel's Phone Number",
    titleEs: "El del teléfono de Rachel",
    synopsis:
      "Rachel se arrepiente de haberle dado su número de teléfono a un desconocido mientras sigue procesando sus sentimientos hacia Ross. La situación provoca varios malentendidos entre los miembros del grupo.",
    characters: ["Rachel", "Ross", "Phoebe", "Monica", "Chandler", "Joey"],
    memorableMoments: [
      "Rachel se arrepiente de haberle dado su número a un desconocido.",
      "Rachel sigue procesando sus sentimientos hacia Ross.",
      "La situación provoca malentendidos dentro del grupo.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "¿Contacto visual? Espero que usarais protección." },
    ],
  },
  {
    season: 9,
    episode: 10,
    titleEn: "The One with Christmas in Tulsa",
    titleEs: "El de la Navidad en Tulsa",
    synopsis:
      "Chandler deja su trabajo en Tulsa después de que una compañera le haga insinuaciones, y regresa a Nueva York a tiempo para pasar la Navidad con el grupo. El episodio funciona en parte como recopilatorio, con abundantes flashbacks de la etapa de Chandler en Tulsa.",
    characters: ["Chandler", "Monica", "Ross", "Rachel", "Joey", "Phoebe"],
    memorableMoments: [
      "Chandler deja su trabajo en Tulsa tras las insinuaciones de una compañera.",
      "Chandler regresa a Nueva York a tiempo para la Navidad.",
      "El episodio incluye numerosos flashbacks a modo de recopilatorio.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote:
          "Hablemos de la nieve. ¿Crees que está nevando en Tulsa, donde mi marido está teniendo sexo sobre una fotocopiadora?",
      },
    ],
  },
  {
    season: 9,
    episode: 11,
    titleEn: "The One Where Rachel Goes Back to Work",
    titleEs: "El de cuando Rachel vuelve al trabajo",
    synopsis:
      "Rachel adelanta su vuelta al trabajo tras la baja por maternidad, por miedo a perder su puesto. Joey ayuda a Phoebe a prepararse para una audición de la telenovela 'Days of Our Lives', que termina siendo un desastre cómico.",
    characters: ["Rachel", "Phoebe", "Joey", "Chandler", "Monica"],
    memorableMoments: [
      "Rachel adelanta su vuelta al trabajo por miedo a perder su empleo.",
      "Joey ayuda a Phoebe a prepararse para una audición de telenovela.",
      "La audición de Phoebe resulta un desastre cómico.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "El queso. Es leche que masticas." },
      { character: "Monica", quote: "Calcetines. Porque los pies de tu familia se merecen lo mejor." },
    ],
  },
  {
    season: 9,
    episode: 12,
    titleEn: "The One with Phoebe's Rats",
    titleEs: "El de las ratas de Phoebe",
    synopsis:
      "Phoebe adopta varias ratas huérfanas como mascotas. Ross se inquieta al ver a Joey coqueteando con Molly, la nueva niñera de Emma. Mientras tanto, Rachel besa a su compañero de trabajo Gavin en su propia fiesta de cumpleaños, y Ross los ve.",
    characters: ["Phoebe", "Ross", "Joey", "Molly", "Rachel", "Gavin"],
    memorableMoments: [
      "Phoebe adopta varias ratas huérfanas como mascotas.",
      "Ross se inquieta al ver a Joey coqueteando con la niñera Molly.",
      "Rachel besa a su compañero Gavin en su propia fiesta de cumpleaños.",
      "Ross presencia el beso entre Rachel y Gavin.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "La capital de Perú es Vtox." },
      { character: "Ross", quote: "A mí me gusta tener que esforzarme para encontrar atractiva a alguien." },
    ],
  },
  {
    season: 9,
    episode: 13,
    titleEn: "The One Where Monica Sings",
    titleEs: "El de cuando Monica canta",
    synopsis:
      "Monica se anima a cantar en el piano bar donde trabaja Mike. Ross, convencido de que Rachel ya está pasando página, se lleva a casa una cita de rebote. Rachel y Emma acaban mudándose temporalmente al apartamento de Joey.",
    characters: ["Monica", "Mike", "Ross", "Rachel", "Emma", "Joey"],
    memorableMoments: [
      "Monica canta en el piano bar donde trabaja Mike.",
      "Ross se lleva a casa una cita de rebote al creer que Rachel pasa página.",
      "Rachel y Emma se mudan temporalmente al apartamento de Joey.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Ninguna de las cuerdas volvió a casa conmigo." },
    ],
  },
  {
    season: 9,
    episode: 14,
    titleEn: "The One with the Blind Dates",
    titleEs: "El de las citas a ciegas",
    synopsis:
      "Phoebe y Joey organizan a propósito citas a ciegas desastrosas para Ross y Rachel, con la esperanza de que así se den cuenta de lo bien que encajan el uno con el otro. El plan sale mal de forma cómica.",
    characters: ["Phoebe", "Joey", "Ross", "Rachel", "Chandler"],
    memorableMoments: [
      "Phoebe y Joey preparan citas a ciegas deliberadamente terribles para Ross y Rachel.",
      "El plan busca que Ross y Rachel se den cuenta de que están hechos el uno para el otro.",
      "El plan fracasa de forma cómica.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¡Puede que también sirviera carne bastante sospechosa!" },
    ],
  },
  {
    season: 9,
    episode: 15,
    titleEn: "The One with the Mugging",
    titleEs: "El del atraco",
    synopsis:
      "Phoebe y Ross son atracados por un antiguo amigo de Phoebe de su época viviendo en la calle. Chandler empieza unas prácticas de publicidad sin sueldo, mientras Joey hace una audición para una obra de Broadway.",
    characters: ["Phoebe", "Ross", "Chandler", "Joey"],
    memorableMoments: [
      "Phoebe y Ross son atracados por un viejo conocido de Phoebe.",
      "Chandler comienza unas prácticas de publicidad sin sueldo.",
      "Joey hace una audición para una obra de Broadway.",
    ],
    memorableQuotes: [{ character: "Phoebe", quote: "¡Mi madre era traficante de drogas!" }],
  },
  {
    season: 9,
    episode: 16,
    titleEn: "The One with the Boob Job",
    titleEs: "El de la operación de pecho",
    synopsis:
      "Chandler y Monica le piden por separado un préstamo a Joey, sin saber cada uno lo que ha hecho el otro. Rachel intenta poner el apartamento a prueba de niños ella sola. Phoebe rompe con Mike por sus diferencias respecto al matrimonio.",
    characters: ["Chandler", "Monica", "Joey", "Rachel", "Phoebe", "Mike"],
    memorableMoments: [
      "Chandler y Monica le piden un préstamo a Joey por separado, sin saberlo el uno del otro.",
      "Rachel intenta hacer ella sola el apartamento a prueba de niños.",
      "Phoebe rompe con Mike por sus diferencias sobre el matrimonio.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "Así que me he gastado cuatro mil dólares y las tetas de nadie han crecido." },
    ],
  },
  {
    season: 9,
    episode: 17,
    titleEn: "The One with the Memorial Service",
    titleEs: "El del funeral",
    synopsis:
      "Ross y Chandler se dedican a publicar información falsa el uno sobre el otro en la revista de antiguos alumnos de su universidad. Joey compite con la bebé Emma por un juguete con forma de pingüino, mientras Phoebe recurre a Monica para intentar superar su ruptura con Mike.",
    characters: ["Ross", "Chandler", "Joey", "Emma", "Phoebe", "Monica"],
    memorableMoments: [
      "Ross y Chandler publican mentiras el uno sobre el otro en la revista de antiguos alumnos.",
      "Joey compite con la bebé Emma por un juguete de peluche.",
      "Phoebe recurre a Monica para intentar superar su ruptura con Mike.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "Porque le dije a todo el mundo que dormía con dinosaurios." },
    ],
  },
  {
    season: 9,
    episode: 18,
    titleEn: "The One with the Lottery",
    titleEs: "El de la lotería",
    synopsis:
      "El grupo compra boletos de lotería juntos, lo que genera conflicto sobre cómo se repartirían el premio si tocara. La primera palabra de Emma resulta ser 'Gleba'. Chandler espera con nervios una posible oferta de trabajo en publicidad.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Joey", "Phoebe", "Emma"],
    memorableMoments: [
      "El grupo compra boletos de lotería juntos y discute cómo repartirían el premio.",
      "La primera palabra de Emma resulta ser 'Gleba'.",
      "Chandler espera con nervios una posible oferta de trabajo.",
    ],
    memorableQuotes: [{ character: "Phoebe", quote: "¿Papá me va a dar unos azotes?" }],
  },
  {
    season: 9,
    episode: 19,
    titleEn: "The One with Rachel's Dream",
    titleEs: "El del sueño de Rachel",
    synopsis:
      "Rachel empieza a sentir algo por Joey después de verlo rodar una escena de su telenovela. Chandler planea una escapada romántica a Vermont con Monica, pero termina yendo con Ross en su lugar por un malentendido.",
    characters: ["Rachel", "Joey", "Chandler", "Monica", "Ross"],
    memorableMoments: [
      "Rachel empieza a sentir algo por Joey tras verlo actuar en su telenovela.",
      "Chandler planea una escapada romántica a Vermont con Monica.",
      "Chandler termina yendo a Vermont con Ross en vez de con Monica.",
    ],
    memorableQuotes: [{ character: "Ross", quote: "¡Un paseo en barco a la luz de la luna!" }],
  },
  {
    season: 9,
    episode: 20,
    titleEn: "The One with the Soap Opera Party",
    titleEs: "El de la fiesta de la telenovela",
    synopsis:
      "Rachel lucha con sus sentimientos no correspondidos hacia Joey, quien organiza una fiesta con el reparto de su telenovela 'Days of Our Lives'. Mientras tanto, Ross empieza a sentirse atraído por Charlie, una profesora universitaria.",
    characters: ["Rachel", "Joey", "Ross", "Charlie"],
    memorableMoments: [
      "Rachel lidia con sus sentimientos no correspondidos hacia Joey.",
      "Joey organiza una fiesta con el reparto de su telenovela.",
      "Ross empieza a sentirse atraído por la profesora Charlie.",
    ],
    memorableQuotes: [{ character: "Joey", quote: "Tú eres la peor." }],
  },
  {
    season: 9,
    episode: 21,
    titleEn: "The One with the Fertility Test",
    titleEs: "El de la prueba de fertilidad",
    synopsis:
      "Chandler y Monica descubren, tras hacerse pruebas médicas, que tienen un problema de incompatibilidad reproductiva. Rachel se encuentra por sorpresa a Phoebe trabajando en un centro de masajes haciéndose pasar por otra persona con acentos falsos, mientras Joey busca consejos amorosos.",
    characters: ["Chandler", "Monica", "Rachel", "Phoebe", "Joey"],
    memorableMoments: [
      "Chandler y Monica descubren que no pueden concebir de forma natural juntos.",
      "Rachel encuentra a Phoebe trabajando de masajista bajo una identidad falsa.",
      "Joey busca consejo sobre sus propios problemas amorosos.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "Un nombre sueco normal... Ikea." },
      { character: "Joey", quote: "¡Los Mets son malísimos!" },
    ],
  },
  {
    season: 9,
    episode: 22,
    titleEn: "The One with the Donor",
    titleEs: "El del donante",
    synopsis:
      "Tras confirmar que no pueden concebir de forma natural, Chandler y Monica entrevistan a un posible donante de esperma, pero finalmente deciden optar por la adopción. Phoebe, por su parte, se reencuentra con su antiguo novio David.",
    characters: ["Chandler", "Monica", "Phoebe", "David"],
    memorableMoments: [
      "Chandler y Monica entrevistan a un candidato a donante de esperma.",
      "La pareja decide finalmente optar por la adopción.",
      "Phoebe se reencuentra con su antiguo novio David.",
    ],
    memorableQuotes: [{ character: "Chandler", quote: "¡Pero tú vas primero!" }],
  },
  {
    season: 9,
    episode: 23,
    titleEn: "The One in Barbados: Part 1",
    titleEs: "El de Barbados (1ª parte)",
    synopsis:
      "El grupo viaja a Barbados con motivo de una conferencia académica de Ross. El pelo de Monica se encrespa por la humedad de la isla. David le propone matrimonio a Phoebe durante el viaje, mientras surge una conexión romántica entre Charlie y Ross.",
    characters: ["Ross", "Monica", "Phoebe", "David", "Charlie", "Chandler", "Joey", "Rachel", "Mike"],
    memorableMoments: [
      "El grupo viaja a Barbados por la conferencia académica de Ross.",
      "El pelo de Monica se encrespa mucho por la humedad.",
      "David le propone matrimonio a Phoebe.",
      "Surge una conexión romántica entre Charlie y Ross.",
    ],
    memorableQuotes: [{ character: "Chandler", quote: "Sí quiero. ¿Quieres una pista?" }],
  },
  {
    season: 9,
    episode: 24,
    titleEn: "The One in Barbados: Part 2",
    titleEs: "El de Barbados (2ª parte)",
    synopsis:
      "Mike también le propone matrimonio a Phoebe, y ella termina eligiéndolo a él frente a David. Monica y Mike protagonizan una reñida partida de ping-pong que Mike termina ganando, para sorpresa e indignación de Monica. Rachel le confiesa sus sentimientos a Joey, que la rechaza al principio por respeto a Ross, pero termina besándola tras ver a Ross acercarse a Charlie.",
    characters: ["Phoebe", "Mike", "David", "Monica", "Chandler", "Rachel", "Joey", "Ross", "Charlie"],
    memorableMoments: [
      "Mike le propone matrimonio a Phoebe, y ella lo elige a él frente a David.",
      "Monica y Mike disputan una partida de ping-pong extremadamente competitiva.",
      "Mike gana la partida de ping-pong, para disgusto de Monica.",
      "Rachel le confiesa sus sentimientos a Joey, que la rechaza al principio.",
      "Joey termina besando a Rachel tras ver a Ross acercarse a Charlie.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "Creo que también lo sé, pero ya me he equivocado antes con esto.",
      },
    ],
  },
];
