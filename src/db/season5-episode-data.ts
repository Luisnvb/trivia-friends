import type { EpisodeInput } from "@/lib/dal/episodes";

/**
 * Datos de referencia (sinopsis, personajes, momentos y frases memorables)
 * de los 24 episodios de la temporada 5 de Friends, para preparar trivia.
 * Fuentes: Wikipedia ("Friends (season 5)"), Wikiquote ("Friends (season 5)")
 * y búsquedas dirigidas por episodio (IMDb Quotes, TV Quotes, TV Tropes,
 * Friends Central Fandom) para las citas.
 */
export const season5EpisodeData: EpisodeInput[] = [
  {
    season: 5,
    episode: 1,
    titleEn: "The One After Ross Says Rachel",
    titleEs: "El de después de que Ross dijera Rachel",
    synopsis:
      "Tras el desastre en el altar, Rachel huye del banquete. Ross consigue convencerla de acompañarle en su vuelo de luna de miel a Grecia, pero Emily aparece en el aeropuerto en el último momento y Ross corre tras ella, dejando a Rachel embarcar sola.",
    characters: ["Ross", "Rachel", "Emily", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel huye del banquete de bodas tras el error de Ross en el altar.",
      "Ross convence a Rachel de acompañarle a Grecia en el vuelo de luna de miel.",
      "Emily aparece en el aeropuerto y Ross corre tras ella, dejando a Rachel volar sola.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Podría haber sido peor; podría haberle disparado.",
      },
      { character: "Ross", quote: "Es lo mismo." },
    ],
  },
  {
    season: 5,
    episode: 2,
    titleEn: "The One with All the Kissing",
    titleEs: "El de todos los besos",
    synopsis:
      "Rachel vuelve de Grecia furiosa por haber sido abandonada en el avión. La relación secreta de Monica y Chandler está a punto de descubrirse cuando el resto del grupo los pilla besándose. Phoebe se pone de parto, así que todos corren al hospital en vez de ir de viaje a Atlantic City.",
    characters: ["Rachel", "Ross", "Monica", "Chandler", "Phoebe", "Joey", "Frank Jr."],
    memorableMoments: [
      "Rachel regresa de Grecia enfadada por haber volado sola.",
      "El grupo sorprende a Monica y Chandler besándose.",
      "Phoebe se pone de parto y todos corren al hospital en vez de ir a Atlantic City.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "Nunca debí haber ido a Londres." },
      { character: "Ross", quote: "¡No puedo tener un respiro!" },
    ],
  },
  {
    season: 5,
    episode: 3,
    titleEn: "The One Hundredth",
    titleEs: "El del episodio cien",
    synopsis:
      "Phoebe da a luz a los trillizos de Frank y Alice mientras Joey ingresa por unos cálculos renales. Rachel intenta olvidar a Ross organizando citas con enfermeros del hospital, lo que genera tensión con Monica y Chandler, que intentan mantener su relación en secreto en medio del caos.",
    characters: ["Phoebe", "Frank Jr.", "Alice", "Joey", "Rachel", "Monica", "Chandler", "Ross"],
    memorableMoments: [
      "Phoebe da a luz a los trillizos de su hermano Frank Jr. y su mujer Alice.",
      "Joey es ingresado en el hospital por unos cálculos renales el mismo día.",
      "Rachel organiza citas con enfermeros del hospital para intentar olvidar a Ross.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "Es un nombre bastante masculino, ¿no crees?" },
      { character: "Phoebe", quote: "A ti te funciona." },
    ],
  },
  {
    season: 5,
    episode: 4,
    titleEn: "The One Where Phoebe Hates PBS",
    titleEs: "El de cuando Phoebe odia la televisión pública",
    synopsis:
      "Chandler se vuelve insoportablemente arrogante después de que Monica le diga que es un amante excepcional. Ross llama a Emily, que le exige que deje de ver a Rachel. Phoebe se enfada porque Joey participa en una teletón benéfica para la televisión pública, a la que ella tiene manía.",
    characters: ["Chandler", "Monica", "Ross", "Emily", "Phoebe", "Joey", "Rachel"],
    memorableMoments: [
      "Chandler se vuelve arrogante tras enterarse de que Monica lo considera un amante excepcional.",
      "Emily exige por teléfono a Ross que deje de ver a Rachel.",
      "Phoebe se enfada con Joey por participar en la teletón de la televisión pública.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "La abeja queda genial delante de sus amigas abejas." },
      { character: "Joey", quote: "¿Sabes que la abeja probablemente murió al picarte?" },
    ],
  },
  {
    season: 5,
    episode: 5,
    titleEn: "The One with the Kips",
    titleEs: "El de los Kip",
    synopsis:
      "Ross le comunica a Rachel que Emily le ha prohibido verla, y Rachel teme quedar poco a poco excluida del grupo de amigos. Monica y Chandler se escapan en secreto un fin de semana juntos, hasta que Joey descubre su relación.",
    characters: ["Ross", "Rachel", "Emily", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross le dice a Rachel que Emily le ha prohibido seguir viéndola.",
      "Rachel teme que el grupo la vaya dejando de lado poco a poco.",
      "Joey descubre por accidente la relación secreta de Monica y Chandler.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "¡Sabía que había algo raro entre vosotros dos!",
      },
    ],
  },
  {
    season: 5,
    episode: 6,
    titleEn: "The One with the Yeti",
    titleEs: "El del yeti",
    synopsis:
      "Las cada vez más desmesuradas exigencias de Emily hacen que Ross empiece a plantearse su matrimonio. Mientras tanto, Monica y Rachel confunden a Danny, el nuevo vecino, con una especie de yeti en el trastero y lo rocían entero con espray antiinsectos.",
    characters: ["Emily", "Ross", "Monica", "Rachel", "Danny", "Joey", "Chandler", "Phoebe"],
    memorableMoments: [
      "Ross empieza a dudar de su matrimonio por las crecientes exigencias de Emily.",
      "Monica y Rachel confunden a Danny con un yeti en el trastero y lo rocían con espray.",
      "Danny tiene que cortarse el pelo para quitarse el olor del espray.",
    ],
    memorableQuotes: [
      {
        character: "Rachel",
        quote: "¡Sí, sí, tiré de la anilla y rocié entero a su yeti!",
      },
      {
        character: "Danny",
        quote: "Tuve que cortarme el pelo para quitarme el olor del espray.",
      },
    ],
  },
  {
    season: 5,
    episode: 7,
    titleEn: "The One Where Ross Moves In",
    titleEs: "El de cuando Ross se muda",
    synopsis:
      "Rachel intenta hacerse la interesante con Danny aunque en realidad le gusta. Cuando le echan a Ross de su subarriendo, se muda temporalmente con Joey y Chandler, y sus manías vuelven loco al resto. Phoebe sale con Larry, un inspector sanitario cuyo trabajo pone en apuros a sus restaurantes favoritos.",
    characters: ["Rachel", "Danny", "Ross", "Joey", "Chandler", "Phoebe", "Larry"],
    memorableMoments: [
      "Ross se muda temporalmente con Joey y Chandler tras ser desahuciado del subarriendo.",
      "Las manías de Ross (el purificador de aire, el contestador) los vuelven locos.",
      "Phoebe sale con Larry, un inspector sanitario que complica la vida de sus restaurantes favoritos.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "Tú también te estás riendo falso, ¿verdad?" },
      { character: "Chandler", quote: "Solo las lágrimas son reales." },
    ],
  },
  {
    season: 5,
    episode: 8,
    titleEn: "The One with All the Thanksgivings",
    titleEs: "El de todos los Días de Acción de Gracias",
    synopsis:
      "El grupo recuerda sus peores Días de Acción de Gracias del pasado, incluido el momento en que Chandler se enteró del divorcio de sus padres durante la cena, y la vez que Monica le cortó accidentalmente parte de un dedo del pie.",
    characters: ["Chandler", "Monica", "Ross", "Rachel", "Joey", "Phoebe"],
    memorableMoments: [
      "El grupo cuenta en flashback sus peores Días de Acción de Gracias.",
      "Chandler recuerda cómo se enteró del divorcio de sus padres durante una cena de Acción de Gracias.",
      "Monica recuerda la vez que le cortó a Chandler parte de un dedo del pie sin querer.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "También estoy agradecido por los tangas." },
      {
        character: "Chandler",
        quote: "Lo siento no le devuelve la vida al cerdito que lloró todo el camino a casa.",
      },
    ],
  },
  {
    season: 5,
    episode: 9,
    titleEn: "The One with Ross' Sandwich",
    titleEs: "El del sándwich de Ross",
    synopsis:
      "Ross se pone furioso al descubrir que alguien se ha comido el sándwich que se había preparado para el trabajo, y termina de baja por estrés. Mientras tanto, cada vez es más difícil para Monica y Chandler ocultar su relación, hasta el punto de que Joey llega a afirmar falsamente que se acostó con Monica en Londres para despistar.",
    characters: ["Ross", "Monica", "Chandler", "Joey", "Rachel", "Phoebe"],
    memorableMoments: [
      "Ross descubre que alguien se ha comido su sándwich del trabajo y monta en cólera.",
      "Ross se coge unos días libres para gestionar su enfado por el sándwich.",
      "Joey miente diciendo que se acostó con Monica en Londres para tapar su relación con Chandler.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "¡Ese sándwich era lo único bueno que tenía en mi vida!",
      },
    ],
  },
  {
    season: 5,
    episode: 10,
    titleEn: "The One with the Inappropriate Sister",
    titleEs: "El de la hermana inapropiada",
    synopsis:
      "Aprovechando su año sabático, Ross anima a Joey a escribir su propio guion, lo que genera fricciones con Chandler. Monica le organiza una cita a Rachel con Danny, pero a Rachel se le quitan las ganas al ver lo empalagosos que son él y su hermana.",
    characters: ["Ross", "Joey", "Chandler", "Monica", "Rachel", "Danny"],
    memorableMoments: [
      "Ross ayuda a Joey a escribir su propio guion durante su año sabático.",
      "Chandler se siente desplazado al ver a Ross y Joey pasar tanto tiempo juntos.",
      "Rachel pierde el interés en Danny al ver lo cariñoso que es con su hermana.",
    ],
    memorableQuotes: [
      { character: "Danny", quote: "¡Claro! ¿Te va bien el viernes?" },
      { character: "Danny", quote: "Estás muerta, ¡me las vas a pagar!" },
    ],
  },
  {
    season: 5,
    episode: 11,
    titleEn: "The One with All the Resolutions",
    titleEs: "El de todos los propósitos",
    synopsis:
      "El grupo hace propósitos de Año Nuevo: Rachel deja de cotillear, Monica hace más fotos, Phoebe quiere pilotar aviones, Joey aprende guitarra, Chandler deja de hacer bromas y Ross intenta algo nuevo cada día. Rachel escucha por casualidad parte de la conversación telefónica secreta de Monica y Chandler.",
    characters: ["Rachel", "Monica", "Phoebe", "Joey", "Chandler", "Ross"],
    memorableMoments: [
      "Cada amigo anuncia su propósito de Año Nuevo al grupo.",
      "Chandler apuesta con Ross que no volverá a burlarse de nadie durante una semana.",
      "Rachel oye por casualidad parte de la llamada secreta entre Monica y Chandler.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "¿Nadie más ve que Ross lleva pantalones de cuero? ¡Que alguien comente los pantalones!",
      },
      {
        character: "Chandler",
        quote: "Ross, te ha llamado Tom Jones. Quiere que le devuelvas los pantalones.",
      },
    ],
  },
  {
    season: 5,
    episode: 12,
    titleEn: "The One with Chandler's Work Laugh",
    titleEs: "El de la risa de trabajo de Chandler",
    synopsis:
      "A Monica le molesta la risa falsa que pone Chandler para reírle las gracias a su jefe. Rachel presiona a Monica para que confiese lo de Chandler. Ross se entera de que Emily va a volver a casarse y, dolido, se acuesta con Janice, tras lo cual le pide perdón a Chandler.",
    characters: ["Monica", "Chandler", "Rachel", "Ross", "Emily", "Janice"],
    memorableMoments: [
      "Monica odia la risa falsa que usa Chandler para agradar a su jefe.",
      "Ross descubre que Emily se va a volver a casar.",
      "Ross se acuesta con Janice, dolido por la noticia, y después le pide perdón a Chandler.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Esa es mi risa de trabajo, no puedo evitarlo.",
      },
    ],
  },
  {
    season: 5,
    episode: 13,
    titleEn: "The One with Joey's Bag",
    titleEs: "El del bolso de Joey",
    synopsis:
      "Muere la abuela de Phoebe y su padre Frank acude al funeral. Rachel ayuda a Joey a modernizar su imagen con un bolso de hombre para una audición, aunque el resto del grupo insiste en que es un bolso de mujer. Monica se queja de que los masajes de Chandler le resultan dolorosos.",
    characters: ["Phoebe", "Frank", "Rachel", "Joey", "Monica", "Chandler"],
    memorableMoments: [
      "Muere la abuela de Phoebe y su padre Frank aparece en el funeral.",
      "Rachel le compra a Joey un bolso de hombre ('unisex') para una audición.",
      "Todo el grupo se burla de Joey insistiendo en que es un bolso de mujer.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "Es raro que un bolso de mujer me quede tan bien a mí, que soy un hombre.",
      },
      {
        character: "Joey",
        quote: "Si estáis pensando que es un bolso de mujer, no lo es. ¡Es un bolso de hombre!",
      },
    ],
  },
  {
    season: 5,
    episode: 14,
    titleEn: "The One Where Everybody Finds Out",
    titleEs: "El de cuando todos se enteran",
    synopsis:
      "Rachel y Phoebe descubren por casualidad, a través de una ventana, la relación de Monica y Chandler. Mientras Ross compite por hacerse con el apartamento del Vecino Desnudo Feo, Monica y Chandler por fin se confiesan su amor, pero quieren mantenerlo en secreto ante Ross, que termina enterándose en el trabajo.",
    characters: ["Rachel", "Phoebe", "Monica", "Chandler", "Ross", "Joey"],
    memorableMoments: [
      "Phoebe ve por la ventana a Monica y Chandler juntos y grita '¡Mis ojos! ¡Mis ojos!'.",
      "Monica y Chandler se confiesan su amor, pero quieren ocultárselo a Ross.",
      "Ross se entera de lo de Monica y Chandler estando en el trabajo.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¡Porque estoy enamorado de Monica!" },
      { character: "Phoebe", quote: "¡Mis ojos! ¡Mis ojos!" },
    ],
  },
  {
    season: 5,
    episode: 15,
    titleEn: "The One with the Girl Who Hits Joey",
    titleEs: "El de la chica que pega a Joey",
    synopsis:
      "Ross acepta con sorprendente rapidez la relación de Monica y Chandler al saber que va en serio. Joey sale con una chica que le da puñetazos en broma. Los nervios de Chandler por el compromiso le llevan a proponerle matrimonio a Monica de forma precipitada; ella dice que no, aunque le pide que siga abierto a la idea más adelante.",
    characters: ["Ross", "Monica", "Chandler", "Joey", "Katie"],
    memorableMoments: [
      "Ross acepta rápidamente la relación de Monica y Chandler.",
      "Joey sale con Katie, que le da puñetazos en broma como forma de cariño.",
      "Chandler le propone matrimonio a Monica de forma precipitada tras una discusión; ella dice que no por ahora.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Monica Geller, ¿quieres casarte conmigo?",
      },
      {
        character: "Monica",
        quote: "No... pero algún día, sí.",
      },
    ],
  },
  {
    season: 5,
    episode: 16,
    titleEn: "The One with the Cop",
    titleEs: "El del policía",
    synopsis:
      "Phoebe encuentra una placa de policía y se hace pasar por agente hasta que se la enseña sin saberlo al verdadero dueño, Gary, quien después le pide una cita. Ross intenta subir su nuevo sofá por las escaleras sin pagar el recargo del transportista, gritando '¡Pivot!' sin éxito.",
    characters: ["Phoebe", "Gary", "Ross", "Chandler", "Joey"],
    memorableMoments: [
      "Phoebe se hace pasar por policía con una placa que ha encontrado en la calle.",
      "Gary, el verdadero dueño de la placa, le pide una cita a Phoebe en vez de detenerla.",
      "Ross grita '¡Pivot! ¡Pivot!' intentando subir el sofá por las escaleras sin éxito.",
    ],
    memorableQuotes: [
      {
        character: "Phoebe",
        quote: "A menos que quieras pasar la noche en el calabozo, te sugiero que le pidas perdón al árbol.",
      },
      { character: "Ross", quote: "¡Pivot! ¡Pivot! ¡PIVOT!" },
    ],
  },
  {
    season: 5,
    episode: 17,
    titleEn: "The One with Rachel's Inadvertent Kiss",
    titleEs: "El del beso involuntario de Rachel",
    synopsis:
      "Rachel besa sin querer a su entrevistador durante una entrevista de trabajo para Ralph Lauren, y en la segunda entrevista termina acusándolo por error de tener malas intenciones con ella. Monica quiere demostrar que ella y Chandler son más 'sexys' que Phoebe y Gary.",
    characters: ["Rachel", "Mr. Zelner", "Monica", "Chandler", "Phoebe", "Gary"],
    memorableMoments: [
      "Rachel besa por accidente al entrevistador de Ralph Lauren al despedirse.",
      "En la segunda entrevista, Rachel malinterpreta un gesto y acaba montándole una escena.",
      "Monica intenta demostrar que ella y Chandler son la pareja más atractiva del grupo.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "Dios mío, ¿cómo he podido ser tan tonta?" },
      {
        character: "Rachel",
        quote: "¿Y si piensa que soy de esas chicas que se acostarían con él sin más?",
      },
    ],
  },
  {
    season: 5,
    episode: 18,
    titleEn: "The One Where Rachel Smokes",
    titleEs: "El de cuando Rachel fuma",
    synopsis:
      "Rachel empieza a fumar para sentirse incluida en las decisiones importantes que su jefe y su compañera toman durante los descansos para fumar. Joey audiciona para un anuncio de sopa y termina compitiendo con el hijo de un amigo. Monica y Phoebe organizan el cumpleaños de Rachel con resultados desiguales.",
    characters: ["Rachel", "Joey", "Ross", "Ben", "Monica", "Phoebe", "Chandler"],
    memorableMoments: [
      "Rachel empieza a fumar para no quedarse fuera de las conversaciones importantes del trabajo.",
      "Joey audiciona para un anuncio de sopa contra el hijo pequeño de Ross, Ben.",
      "Monica y Phoebe discuten sobre cómo organizar la fiesta sorpresa de cumpleaños de Rachel.",
    ],
    memorableQuotes: [
      {
        character: "Phoebe",
        quote: "Hablemos del cumpleaños de Rachel. Propongo que le hagamos una fiesta sorpresa este fin de semana.",
      },
      { character: "Joey", quote: "¿No sería genial que me dieran el papel del padre de Ben?" },
    ],
  },
  {
    season: 5,
    episode: 19,
    titleEn: "The One Where Ross Can't Flirt",
    titleEs: "El de cuando Ross no sabe ligar",
    synopsis:
      "Rachel ayuda en secreto a Ross después de que este intente ligar con la chica que reparte las pizzas con resultados desastrosos. El papel de Joey en una serie de televisión termina cortado en el montaje final, así que se inventa su propia escena. Monica busca unos pendientes que le prestó a Phoebe, quien a su vez se los había pasado a Rachel.",
    characters: ["Ross", "Rachel", "Caitlin", "Joey", "Monica", "Phoebe"],
    memorableMoments: [
      "Ross intenta ligar con Caitlin, la repartidora de pizza, con comentarios muy torpes.",
      "Rachel ayuda a Ross en secreto a mejorar su forma de ligar.",
      "Joey, indignado porque han cortado su escena de la serie, se inventa su propia aparición.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "Dijiste que tu pelo parecía el de un niño de ocho años, y solo digo que me gusta... el pelo.",
      },
      {
        character: "Phoebe",
        quote: "Parece que alguien quiere ser el señor Repartidora de Pizza.",
      },
    ],
  },
  {
    season: 5,
    episode: 20,
    titleEn: "The One with the Ride-Along",
    titleEs: "El de la patrulla",
    synopsis:
      "El grupo acompaña a Gary en una patrulla policial. El instinto protector de Joey le lleva a lanzarse sobre Ross al confundir el petardeo de un coche con disparos. Rachel escucha por casualidad un mensaje de Emily expresando dudas sobre su boda, pero lo borra sin querer antes de que Ross pueda oírlo.",
    characters: ["Gary", "Phoebe", "Joey", "Ross", "Rachel", "Monica", "Emily"],
    memorableMoments: [
      "El grupo acompaña a Gary durante su turno de patrulla policial.",
      "Joey se lanza a proteger a Ross al confundir un petardeo con un disparo.",
      "Rachel borra por accidente un mensaje de Emily en el que esta dudaba de su próxima boda.",
    ],
    memorableQuotes: [
      {
        character: "Emily",
        quote: "No dejo de pensar en si cometimos un error al dejarlo...",
      },
    ],
  },
  {
    season: 5,
    episode: 21,
    titleEn: "The One with the Ball",
    titleEs: "El de la pelota",
    synopsis:
      "Phoebe accede a regañadientes a mudarse con Gary, pero rompe con él después de que este dispare a un pájaro desde la ventana. Rachel se compra un gato sin pelo carísimo que no para de atacarla. Ross y Joey se pasan una pelota el uno al otro compitiendo por ver cuánto tiempo consiguen mantener la racha sin que se caiga.",
    characters: ["Phoebe", "Gary", "Rachel", "Ross", "Joey"],
    memorableMoments: [
      "Phoebe acepta mudarse con Gary, pero rompe con él tras verle disparar a un pájaro.",
      "Rachel compra un gato esfinge carísimo que la ataca constantemente.",
      "Ross y Joey mantienen una larga racha lanzándose una pelota sin dejarla caer.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "¿Por qué está del revés?" },
    ],
  },
  {
    season: 5,
    episode: 22,
    titleEn: "The One with Joey's Big Break",
    titleEs: "El de la gran oportunidad de Joey",
    synopsis:
      "Joey consigue un papel en una película independiente, pero deja a Chandler tirado en el puente George Washington tras discutir sobre las posibilidades de que el proyecto salga adelante. La producción se cancela por falta de fondos, y Joey termina trabajando de gladiador en el Caesars Palace de Las Vegas.",
    characters: ["Joey", "Chandler"],
    memorableMoments: [
      "Joey consigue lo que cree que es su gran oportunidad en una película independiente.",
      "Joey abandona a Chandler en pleno puente George Washington tras una discusión.",
      "La película se cancela y Joey acaba trabajando de gladiador en Las Vegas.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "¡Voy a ser actor de verdad, en una película de verdad!",
      },
    ],
  },
  {
    season: 5,
    episode: 23,
    titleEn: "The One in Vegas (Part 1)",
    titleEs: "El de Las Vegas (1ª parte)",
    synopsis:
      "Una comida de Monica con su ex, Richard, provoca tensión con Chandler justo en su aniversario. El grupo viaja a Las Vegas para visitar a Joey, que trabaja de gladiador en el Caesars Palace, y Chandler decide compensar a Monica organizando una escapada especial para los dos.",
    characters: ["Monica", "Chandler", "Richard", "Joey", "Ross", "Rachel", "Phoebe"],
    memorableMoments: [
      "Monica queda a comer con Richard, su ex, justo el día de su aniversario con Chandler.",
      "Todo el grupo viaja a Las Vegas para visitar a Joey en su trabajo de gladiador.",
      "Chandler intenta compensar a Monica organizando una escapada especial en Las Vegas.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "¡Bienvenidos al Caesars Palace, mortales!",
      },
    ],
  },
  {
    season: 5,
    episode: 24,
    titleEn: "The One in Vegas (Part 2)",
    titleEs: "El de Las Vegas (2ª parte)",
    synopsis:
      "Ross y Rachel, muy borrachos, terminan casándose en una capilla de Las Vegas justo cuando Monica y Chandler estaban a punto de hacer lo mismo en otra capilla; al verlos salir tambaleándose, Monica y Chandler cambian de idea. Joey intenta sin éxito convencer a su 'gemelo de mano' del crupier de hacer carrera juntos.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross y Rachel se casan borrachos en una capilla de Las Vegas sin apenas darse cuenta.",
      "Monica y Chandler, a punto de casarse ellos también, cambian de idea al ver a Ross y Rachel.",
      "Joey intenta convencer al crupier, su 'gemelo de mano', de hacer carrera juntos como pareja de manos.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Hola, ¡señora Ross!" },
      { character: "Rachel", quote: "Bueno, hola, ¡señor Rachel!" },
    ],
  },
];
