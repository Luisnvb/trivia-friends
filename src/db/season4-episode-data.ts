import type { EpisodeInput } from "@/lib/dal/episodes";

/**
 * Datos de referencia (sinopsis, personajes, momentos y frases memorables)
 * de los 24 episodios de la temporada 4 de Friends, para preparar trivia.
 * Fuentes: Wikipedia ("Friends (season 4)"), Wikiquote ("Friends (season 4)")
 * y búsquedas dirigidas por episodio (IMDb Quotes, TV Quotes, TV Tropes)
 * para las citas.
 */
export const season4EpisodeData: EpisodeInput[] = [
  {
    season: 4,
    episode: 1,
    titleEn: "The One with the Jellyfish",
    titleEs: "El de la medusa",
    synopsis:
      "Ross y Rachel se reconcilian tras la ruptura de Ross con Bonnie, pero enseguida chocan al discutir de quién fue la culpa de su propia ruptura anterior. La discusión se alarga durante todo el episodio sin resolverse del todo.",
    characters: ["Ross", "Rachel", "Bonnie", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross y Rachel se reconcilian tras la ruptura de Ross con Bonnie.",
      "La pareja discute sin parar sobre de quién fue la culpa de su ruptura anterior.",
      "Chandler recuerda con humor negro una anécdota incómoda sobre una medusa.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "A veces, por la noche, todavía puedo oír los gritos." },
      {
        character: "Rachel",
        quote: "¡No es tan normal, no le pasa a todo el mundo, y sí que es importante!",
      },
    ],
  },
  {
    season: 4,
    episode: 2,
    titleEn: "The One with the Cat",
    titleEs: "El del gato",
    synopsis:
      "Monica empieza a salir con Chip, su antigua cita del baile de graduación, y descubre que ya no es el chico popular que recordaba. Joey intenta vender su mueble de entretenimiento sin éxito, mientras un gato negro aparece en el apartamento y desata el pánico entre el grupo.",
    characters: ["Monica", "Chip", "Joey", "Ross", "Rachel", "Chandler", "Phoebe"],
    memorableMoments: [
      "Monica redescubre a Chip, su antigua cita de graduación, ya sin su encanto de instituto.",
      "Joey no consigue vender su mueble de entretenimiento a nadie.",
      "Un gato negro aparece en el apartamento y asusta a todo el grupo.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Estoy cansado de tener que ponerme una vacuna del tétanos cada vez que me visto.",
      },
      {
        character: "Joey",
        quote: "Vino un tío a ver el mueble y dijo que no era lo bastante grande para un hombre adulto.",
      },
    ],
  },
  {
    season: 4,
    episode: 3,
    titleEn: "The One with the 'Cuffs",
    titleEs: "El de las esposas",
    synopsis:
      "Joey compra una enciclopedia incompleta que solo cubre temas que empiezan por la letra V, así que solo puede hablar de esos temas. Chandler queda esposado por accidente en el despacho de su jefa durante un momento muy inoportuno.",
    characters: ["Joey", "Chandler", "Ross", "Monica", "Rachel", "Phoebe"],
    memorableMoments: [
      "Joey solo puede hablar de temas que empiecen por la letra V, por su enciclopedia incompleta.",
      "Chandler se queda esposado por accidente en el despacho de su jefa.",
      "El grupo se burla de Joey por sus datos absurdos sobre volcanes y vikingos.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Cuando salgo a la calle desnudo, la gente me tira basura.",
      },
    ],
  },
  {
    season: 4,
    episode: 4,
    titleEn: "The One with the Ballroom Dancing",
    titleEs: "El del baile de salón",
    synopsis:
      "Phoebe es despedida como masajista después de confesarle sus sentimientos a un cliente casado. Joey ayuda al encargado del edificio, el señor Treeger, a practicar baile de salón para reconquistar a su exmujer.",
    characters: ["Phoebe", "Joey", "Treeger", "Ross", "Monica", "Chandler", "Rachel"],
    memorableMoments: [
      "Phoebe pierde su trabajo de masajista tras confesar sus sentimientos a un cliente casado.",
      "Joey le enseña a bailar al señor Treeger para que reconquiste a su exmujer.",
      "El resto del grupo se sorprende al ver a Joey convertido en un buen profesor de baile.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "Yo soy el pollito y Chandler es el pato." },
    ],
  },
  {
    season: 4,
    episode: 5,
    titleEn: "The One with Joey's New Girlfriend",
    titleEs: "El de la nueva novia de Joey",
    synopsis:
      "Chandler empieza a desarrollar sentimientos por Kathy, la nueva novia actriz de Joey, lo que le genera una gran angustia por la lealtad que le debe a su amigo. Intenta disimularlo sin éxito.",
    characters: ["Chandler", "Joey", "Kathy", "Ross", "Monica", "Rachel", "Phoebe"],
    memorableMoments: [
      "Chandler se da cuenta de que le gusta Kathy, la novia de Joey.",
      "Chandler intenta disimular sus sentimientos por lealtad hacia Joey.",
      "El grupo nota que Chandler actúa de forma extraña cerca de Kathy.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Estoy tan increíblemente enamorado de ella que no puedo creer mi mala suerte por que la conocieras tú primero.",
      },
    ],
  },
  {
    season: 4,
    episode: 6,
    titleEn: "The One with the Dirty Girl",
    titleEs: "El de la chica guarra",
    synopsis:
      "Monica y Phoebe montan juntas un pequeño negocio de catering. Chandler, para disimular sus sentimientos, le da a Kathy un regalo caro que en realidad estaba pensado para Joey, complicando aún más la situación entre los tres.",
    characters: ["Monica", "Phoebe", "Chandler", "Kathy", "Joey", "Ross", "Rachel"],
    memorableMoments: [
      "Monica y Phoebe empiezan juntas un pequeño negocio de catering.",
      "Chandler le regala a Kathy algo caro que en realidad era para Joey.",
      "La tensión entre Chandler, Joey y Kathy sigue creciendo sin que nadie lo confiese.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "Es un montón de basura, en vez de una chaqueta sobre una silla.",
      },
    ],
  },
  {
    season: 4,
    episode: 7,
    titleEn: "The One Where Chandler Crosses the Line",
    titleEs: "El de cuando Chandler se pasa de la raya",
    synopsis:
      "Chandler y Kathy finalmente se besan, lo que destroza a Joey al descubrirlo y supone una traición grave a su amistad con Chandler. El resto del grupo se ve envuelto en las consecuencias de la traición.",
    characters: ["Chandler", "Kathy", "Joey", "Ross", "Monica", "Rachel", "Phoebe"],
    memorableMoments: [
      "Chandler y Kathy se besan finalmente, cediendo a la tensión acumulada.",
      "Joey descubre el beso y se siente profundamente traicionado por Chandler.",
      "El grupo se divide al intentar procesar la traición entre los tres amigos.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "¡Te has pasado tanto de la raya que la raya ya es solo un punto para ti!",
      },
    ],
  },
  {
    season: 4,
    episode: 8,
    titleEn: "The One with Chandler in a Box",
    titleEs: "El de Chandler en una caja",
    synopsis:
      "En el especial de Acción de Gracias, Joey se niega a perdonar a Chandler por besar a Kathy, y solo accede a hacerlo si Chandler pasa toda la cena metido dentro de una caja grande. Monica, mientras tanto, compara con humor los líos amorosos de todo el grupo.",
    characters: ["Joey", "Chandler", "Kathy", "Monica", "Ross", "Rachel", "Phoebe"],
    memorableMoments: [
      "Joey obliga a Chandler a pasar Acción de Gracias metido en una caja como castigo.",
      "Chandler explica el triple significado simbólico de la caja.",
      "Monica enumera con humor los líos sentimentales de cada uno de sus amigos.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "El significado de la caja es triple: primero, me da tiempo para pensar en lo que hice; segundo, demuestra cuánto me importa mi amistad con Joey; y tercero... ¡duele!",
      },
      {
        character: "Monica",
        quote: "Juzgad todo lo que queráis, pero: se casó con una lesbiana, dejó a un hombre en el altar, se enamoró de un patinador gay, tiró la pierna de madera de una chica al fuego... ¡y él vive en una caja!",
      },
    ],
  },
  {
    season: 4,
    episode: 9,
    titleEn: "The One Where They're Going to Party!",
    titleEs: "El de la fiesta",
    synopsis:
      "Rachel consigue un ascenso en su trabajo y Monica se convierte en jefa de cocina del restaurante Alessandro's, lo que la obliga a lidiar con un equipo de cocina que se resiste a aceptar sus órdenes.",
    characters: ["Rachel", "Monica", "Ross", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel consigue un ascenso importante en su trabajo.",
      "Monica se convierte en la nueva jefa de cocina de Alessandro's.",
      "El equipo de cocina de Monica se resiste a aceptar sus órdenes desde el primer día.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "No, yo ya tuve sexo en el instituto." },
    ],
  },
  {
    season: 4,
    episode: 10,
    titleEn: "The One with the Girl from Poughkeepsie",
    titleEs: "El de la chica de Poughkeepsie",
    synopsis:
      "Monica sigue lidiando con el resentimiento de su equipo de cocina en Alessandro's. Phoebe escribe una canción navideña, mientras Ross intenta mantener una relación a distancia con una chica que vive lejos de la ciudad.",
    characters: ["Monica", "Phoebe", "Ross", "Chandler", "Joey", "Rachel"],
    memorableMoments: [
      "El equipo de cocina de Monica sigue sin aceptarla como jefa.",
      "Phoebe compone una peculiar canción navideña para el grupo.",
      "Ross intenta llevar una relación a distancia con una chica de otra ciudad.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¿Y Ross qué era, un domador de leones?" },
    ],
  },
  {
    season: 4,
    episode: 11,
    titleEn: "The One with Phoebe's Uterus",
    titleEs: "El del útero de Phoebe",
    synopsis:
      "El hermano de Phoebe, Frank Jr., y su mujer Alice le piden que sea la madre de alquiler de su bebé, ya que ellos no pueden concebir. Tras dudarlo, Phoebe acepta llevar en su vientre al hijo biológico de ambos.",
    characters: ["Phoebe", "Frank Jr.", "Alice", "Ross", "Monica", "Chandler", "Joey", "Rachel"],
    memorableMoments: [
      "Frank Jr. y Alice le piden a Phoebe que sea la madre de alquiler de su bebé.",
      "Phoebe explica que será solo 'el horno', ya que el óvulo y el esperma son de ellos.",
      "Phoebe acepta finalmente llevar en su vientre al bebé de su hermano y su cuñada.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "¿Vas a llevar a su hijo en tu vientre y encima les vas a regalar una PlayStation?",
      },
      {
        character: "Phoebe",
        quote: "Es su óvulo y su esperma, yo solo soy el horno, el bollo es totalmente suyo.",
      },
    ],
  },
  {
    season: 4,
    episode: 12,
    titleEn: "The One with the Embryos",
    titleEs: "El de los embriones",
    synopsis:
      "Monica y Rachel se enfrentan a Joey y Chandler en un juego de preguntas sobre quién conoce mejor a quién, apostándose el piso de las chicas contra la mascota (el pollito y el pato) de los chicos. Mientras tanto, a Phoebe le implantan con éxito los embriones de su hermano y su cuñada.",
    characters: ["Monica", "Rachel", "Joey", "Chandler", "Phoebe", "Ross"],
    memorableMoments: [
      "Chandler y Joey retan a Monica y Rachel a un duelo de preguntas sobre quién conoce mejor a quién.",
      "La apuesta escala hasta jugarse el piso de las chicas contra el pollito y el pato de los chicos.",
      "A Phoebe le implantan con éxito los embriones de Frank Jr. y Alice.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "¡Es un... transpon... transponster!" },
      { character: "Monica", quote: "¡Esa ni siquiera es una palabra!" },
    ],
  },
  {
    season: 4,
    episode: 13,
    titleEn: "The One with Rachel's Crush",
    titleEs: "El del flechazo de Rachel",
    synopsis:
      "Rachel conoce a Joshua, un cliente atractivo de la tienda donde trabaja, y empieza a sentir un flechazo por él. Mientras tanto, Chandler descubre que Kathy le ha sido infiel, lo que acaba con su relación.",
    characters: ["Rachel", "Joshua", "Chandler", "Kathy", "Ross", "Monica", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel conoce a Joshua, un cliente de la tienda, y siente un flechazo inmediato.",
      "Chandler descubre que Kathy le ha sido infiel.",
      "La relación entre Chandler y Kathy termina definitivamente.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "¿Galletas y porno? Eres la mejor madre del mundo." },
    ],
  },
  {
    season: 4,
    episode: 14,
    titleEn: "The One with Joey's Dirty Day",
    titleEs: "El del día sucio de Joey",
    synopsis:
      "Ross conoce a Emily, la sobrina de una compañera de trabajo de Monica, y pasan juntos un fin de semana romántico en Vermont que marca el inicio de su relación.",
    characters: ["Ross", "Emily", "Monica", "Joey", "Chandler", "Rachel", "Phoebe"],
    memorableMoments: [
      "Ross conoce a Emily, la sobrina de una compañera de trabajo de Monica.",
      "Ross y Emily pasan juntos un fin de semana romántico en Vermont.",
      "El grupo comenta con curiosidad el nuevo romance de Ross.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¡Son las nueve y media de la mañana!" },
      { character: "Monica", quote: "Tienen bufé de desayuno." },
    ],
  },
  {
    season: 4,
    episode: 15,
    titleEn: "The One with All the Rugby",
    titleEs: "El del rugby",
    synopsis:
      "Ross intenta impresionar a Emily jugando un partido de rugby, a pesar de no saber nada del deporte y de acabar bastante malparado físicamente. Emily se muestra escéptica sobre la idea desde el principio.",
    characters: ["Ross", "Emily", "Joey", "Chandler", "Monica", "Rachel", "Phoebe"],
    memorableMoments: [
      "Ross decide jugar al rugby para impresionar a Emily, sin saber nada del deporte.",
      "Emily se muestra escéptica de que Ross, siendo estadounidense, pueda jugar bien.",
      "Ross acaba el partido bastante malparado, pero decidido a seguir jugando.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "Tío, ni siquiera eres lo bastante hombre para contratar el canal que emite ese deporte." },
      { character: "Ross", quote: "No, no, no voy a parar. Soy Ross el Rojo." },
    ],
  },
  {
    season: 4,
    episode: 16,
    titleEn: "The One with the Fake Party",
    titleEs: "El de la fiesta falsa",
    synopsis:
      "Rachel invita por error a Joshua a una fiesta de despedida de Emily que en realidad no existe, arruinando sin querer los planes románticos de Ross. Phoebe, embarazada, lucha contra sus antojos de carne pese a ser vegetariana.",
    characters: ["Rachel", "Joshua", "Ross", "Emily", "Phoebe", "Joey", "Chandler", "Monica"],
    memorableMoments: [
      "Rachel invita a Joshua a una fiesta de despedida de Emily que en realidad no existe.",
      "Los planes románticos de Ross con Emily se ven arruinados por el malentendido.",
      "Phoebe, embarazada, sucumbe finalmente a sus antojos de carne pese a ser vegetariana.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "Podría hacerme vegetariano. La cerveza no lleva carne, ¿verdad?" },
    ],
  },
  {
    season: 4,
    episode: 17,
    titleEn: "The One with the Free Porn",
    titleEs: "El del porno gratis",
    synopsis:
      "Phoebe descubre en el médico que va a tener trillizos, no un solo bebé. Ross, angustiado porque Emily debe volver a Londres, viaja hasta allí para confesarle que la quiere antes de que sea demasiado tarde.",
    characters: ["Phoebe", "Frank Jr.", "Alice", "Ross", "Emily", "Susan", "Monica", "Chandler", "Joey", "Rachel"],
    memorableMoments: [
      "Phoebe descubre que en realidad va a tener trillizos, no un solo bebé.",
      "Ross vuela a Londres para confesarle a Emily que la quiere antes de que se marche.",
      "Ross se pone nervioso al descubrir que Susan también está en Londres y se ha hecho muy amiga de Emily.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "¿Eso significa lo mismo en Inglaterra que en América?" },
    ],
  },
  {
    season: 4,
    episode: 18,
    titleEn: "The One with Rachel's New Dress",
    titleEs: "El del vestido nuevo de Rachel",
    synopsis:
      "Frank Jr. y Alice le piden a Phoebe que elija el nombre de uno de los trillizos. Rachel se pone un vestido muy atrevido con la esperanza de impresionar a Joshua en una cita.",
    characters: ["Phoebe", "Frank Jr.", "Alice", "Rachel", "Joshua", "Monica", "Chandler", "Joey", "Ross"],
    memorableMoments: [
      "Frank Jr. y Alice piden a Phoebe que elija el nombre de uno de los trillizos.",
      "Rachel se compra un vestido muy revelador para impresionar a Joshua.",
      "El grupo se sorprende por lo atrevido del vestido nuevo de Rachel.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Oh, te tiene haciendo recados, ya sabes, yendo a buscar vestidos de novia... ¡wah-pah!",
      },
    ],
  },
  {
    season: 4,
    episode: 19,
    titleEn: "The One with All the Haste",
    titleEs: "El de las prisas",
    synopsis:
      "Monica y Rachel se besan como parte de una estrategia para recuperar su antiguo apartamento, que habían perdido frente a Joey y Chandler en una apuesta anterior.",
    characters: ["Monica", "Rachel", "Joey", "Chandler", "Ross", "Phoebe"],
    memorableMoments: [
      "Monica y Rachel idean un plan para recuperar su antiguo apartamento.",
      "Monica y Rachel se besan como parte de la estrategia para convencer a los chicos.",
      "Joey y Chandler acaban cediendo el apartamento tras la encerrona.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Tengo leche en la nevera con la que he tenido una relación más larga.",
      },
    ],
  },
  {
    season: 4,
    episode: 20,
    titleEn: "The One with All the Wedding Dresses",
    titleEs: "El de los vestidos de novia",
    synopsis:
      "Monica y Phoebe se prueban vestidos de novia por diversión en una tienda. Cuando Joshua ve por sorpresa a Rachel vestida de novia, rompe con ella al no estar preparado para tanto compromiso.",
    characters: ["Monica", "Phoebe", "Rachel", "Joshua", "Chandler", "Ross", "Joey"],
    memorableMoments: [
      "Monica y Phoebe se prueban vestidos de novia por pura diversión.",
      "Rachel se pone un vestido de novia justo cuando llega Joshua de visita.",
      "Joshua, asustado, rompe con Rachel al verla vestida de novia.",
    ],
    memorableQuotes: [
      {
        character: "Joshua",
        quote: "Eres una mujer muy especial, pero mi divorcio no es definitivo todavía y... y solo llevamos cuatro días saliendo, así que creo que no, pero gracias.",
      },
      { character: "Rachel", quote: "Sí, bueno, con eso ya bastaba." },
    ],
  },
  {
    season: 4,
    episode: 21,
    titleEn: "The One with the Invitation",
    titleEs: "El de la invitación",
    synopsis:
      "Ross y Emily empiezan a enviar las invitaciones de boda, y Emily se sorprende de que Ross quiera invitar a Rachel. Rachel, por su parte, decide que sería demasiado doloroso asistir a la boda y prefiere quedarse en Nueva York acompañando a Phoebe, ya muy avanzada en su embarazo.",
    characters: ["Ross", "Emily", "Rachel", "Phoebe", "Chandler", "Monica", "Joey"],
    memorableMoments: [
      "Ross y Emily empiezan a enviar las invitaciones de boda.",
      "Rachel decide no ir a la boda de Ross en Londres por lo doloroso que sería para ella.",
      "Rachel decide quedarse en Nueva York para acompañar a Phoebe en su embarazo.",
    ],
    memorableQuotes: [
      {
        character: "Rachel",
        quote: "Además, alguien tiene que quedarse aquí con Phoebe. Va a estar bastante grande para entonces. Necesitará ayuda hasta para atarse los zapatos.",
      },
      {
        character: "Chandler",
        quote: "Ross se casa. Phoebe está fabricando gente. Todo el mundo hace cosas. Nosotros solo nos sentamos aquí.",
      },
    ],
  },
  {
    season: 4,
    episode: 22,
    titleEn: "The One with the Worst Best Man Ever",
    titleEs: "El del peor padrino de la historia",
    synopsis:
      "En la despedida de soltero de Ross en Londres, el pato de la familia se traga el anillo de compromiso y hay que llevarlo al veterinario. Joey se acuesta con la stripper contratada, que le roba el anillo ya recuperado; al final, Ross decide que tanto Joey como Chandler sean sus padrinos.",
    characters: ["Ross", "Joey", "Chandler", "Emily", "Monica", "Rachel", "Phoebe"],
    memorableMoments: [
      "El pato de la familia se traga el anillo de compromiso de Ross antes de la boda.",
      "Joey se acuesta con la stripper de la despedida de soltero, que le roba el anillo ya recuperado.",
      "Ross decide, pese a todo, que tanto Joey como Chandler sean sus padrinos.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "Digo que... ¡me nombraste tu padrino y te fallé por completo!",
      },
      { character: "Ross", quote: "Puedo elegir a mi padrino, y os quiero a los dos." },
    ],
  },
  {
    season: 4,
    episode: 23,
    titleEn: "The One with Ross's Wedding (Part 1)",
    titleEs: "El de la boda de Ross (1ª parte)",
    synopsis:
      "Todo el grupo viaja a Londres para la boda de Ross y Emily. En medio de los preparativos y el caos habitual, Rachel se da cuenta de que sigue enamorada de Ross y decide que tiene que confesárselo antes de la ceremonia.",
    characters: ["Ross", "Emily", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Todo el grupo, salvo Phoebe, viaja a Londres para la boda de Ross.",
      "Emily se agobia por una cadena de contratiempos de última hora con la boda.",
      "Rachel se da cuenta de que sigue enamorada de Ross y decide confesárselo.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "Tengo que decirle a Ross que lo quiero." },
      { character: "Joey", quote: "¡Londres, nene!" },
    ],
  },
  {
    season: 4,
    episode: 24,
    titleEn: "The One with Ross's Wedding (Part 2)",
    titleEs: "El de la boda de Ross (2ª parte)",
    synopsis:
      "Durante la ceremonia, Ross dice por error el nombre de Rachel en vez del de Emily en sus votos, dejando a la novia consternada delante de todos los invitados. Esa misma noche, Monica y Chandler acaban acostándose juntos tras la boda, sin que el resto del grupo lo sepa todavía.",
    characters: ["Ross", "Emily", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross dice 'Rachel' en vez de 'Emily' durante sus votos matrimoniales.",
      "Emily queda visiblemente afectada ante todos los invitados por el error de Ross.",
      "Monica y Chandler acaban juntos en la cama esa misma noche, en secreto.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Yo, Ross, te tomo a ti, Rachel..." },
    ],
  },
];
