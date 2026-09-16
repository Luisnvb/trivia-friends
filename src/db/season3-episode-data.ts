import type { EpisodeInput } from "@/lib/dal/episodes";

/**
 * Datos de referencia (sinopsis, personajes, momentos y frases memorables)
 * de los 25 episodios de la temporada 3 de Friends, para preparar trivia.
 * Fuentes: Wikipedia ("Friends (season 3)") para sinopsis; Wikiquote,
 * IMDb "Quotes" y TV Quotes por episodio para las citas.
 */
export const season3EpisodeData: EpisodeInput[] = [
  {
    season: 3,
    episode: 1,
    titleEn: "The One with the Princess Leia Fantasy",
    titleEs: "El de la fantasía de la princesa Leia",
    synopsis:
      "Ross le confiesa a Rachel una fantasía sexual con ella disfrazada de la princesa Leia, lo que la incomoda. Monica, tras su ruptura con Richard, tiene problemas de insomnio y empieza a salir de fiesta por las noches para poder dormir de día.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross le cuenta a Rachel su fantasía con el disfraz de la princesa Leia.",
      "Monica no puede dormir por las noches tras romper con Richard.",
      "Monica empieza a salir de fiesta de madrugada para agotarse y poder dormir.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "Cada vez que se ríe así, me dan ganas de arrancarme el brazo para tirárselo.",
      },
    ],
  },
  {
    season: 3,
    episode: 2,
    titleEn: "The One Where No One's Ready",
    titleEs: "El de cuando nadie está listo",
    synopsis:
      "Ross intenta que todos estén listos a tiempo para una importante gala benéfica en el museo, pero Joey y Chandler se enzarzan en una pelea por un sillón y una camisa, mientras el resto se distrae con otras cosas.",
    characters: ["Ross", "Joey", "Chandler", "Rachel", "Monica", "Phoebe"],
    memorableMoments: [
      "Joey se pone toda la ropa de Chandler para vengarse de él.",
      "Joey y Chandler discuten por quién se queda con el sillón, y luego por los cojines.",
      "Ross, desesperado, monta en cólera porque nadie está listo a tiempo.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "¿No dijiste que tenía que darte la silla? No dijiste nada de los cojines." },
      { character: "Chandler", quote: "Los cojines son la esencia de la silla." },
      {
        character: "Joey",
        quote: "Mírame, soy Chandler. ¿Podría llevar más ropa encima? Bueno, quizás si no fuera sin ropa interior.",
      },
    ],
  },
  {
    season: 3,
    episode: 3,
    titleEn: "The One with the Jam",
    titleEs: "El de la mermelada",
    synopsis:
      "Un hombre empieza a seguir a Phoebe por la calle, confundiéndola con su hermana gemela Ursula. Monica, todavía procesando su ruptura con Richard, se obsesiona con hacer mermelada casera y luego decide que en realidad quiere tener un bebé.",
    characters: ["Phoebe", "Ursula", "Malcolm", "Monica", "Rachel", "Ross", "Chandler", "Joey"],
    memorableMoments: [
      "Un hombre llamado Malcolm persigue a Phoebe por la calle pensando que es Ursula.",
      "Phoebe se da cuenta de que Malcolm la confunde con su hermana gemela.",
      "Monica pasa de una obsesión por la mermelada casera a querer tener un bebé.",
    ],
    memorableQuotes: [
      {
        character: "Malcolm",
        quote: "Estoy siguiendo a la mujer equivocada. ¡Soy un idiota integral!",
      },
    ],
  },
  {
    season: 3,
    episode: 4,
    titleEn: "The One with the Metaphorical Tunnel",
    titleEs: "El del túnel metafórico",
    synopsis:
      "Ross se preocupa al descubrir que a su hijo Ben le gusta jugar con una muñeca Barbie. Phoebe se hace pasar por la representante de Joey para conseguirle mejores condiciones en un papel.",
    characters: ["Ross", "Ben", "Monica", "Phoebe", "Joey", "Chandler", "Rachel"],
    memorableMoments: [
      "Ross descubre que su hijo Ben prefiere jugar con una Barbie antes que con camiones.",
      "Monica le echa en cara a Ross que él mismo se disfrazaba de mujer de pequeño.",
      "Phoebe se hace pasar por la agente de Joey para negociar en su nombre.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "¡Aquí está mi niño, aquí está mi niño! ¿Y qué hace mi niño con una Barbie?",
      },
      { character: "Monica", quote: "¿Por qué te pones tan pesado? Tiene una Barbie, ¿y qué? Tú te disfrazabas de mujer." },
    ],
  },
  {
    season: 3,
    episode: 5,
    titleEn: "The One with Frank Jr.",
    titleEs: "El del hermano de Phoebe",
    synopsis:
      "Frank Jr., el hermanastro de Phoebe, la visita por primera vez. Mientras tanto, Ross conoce a la actriz Isabella Rossellini en Central Perk e intenta ligar con ella, tras haberla incluido en su lista de famosas con las que Rachel le permitiría estar.",
    characters: ["Phoebe", "Frank Jr.", "Ross", "Isabella Rossellini", "Rachel", "Monica", "Chandler", "Joey"],
    memorableMoments: [
      "Phoebe conoce por fin a su hermanastro Frank Jr.",
      "Ross ve a Isabella Rossellini en Central Perk y se arma de valor para hablarle.",
      "Ross descubre, para su desgracia, que había quitado a Isabella Rossellini de su lista el día anterior.",
    ],
    memorableQuotes: [
      {
        character: "Isabella Rossellini",
        quote: "Es irónico, porque tengo una lista de cinco tipos graciosos de la cafetería, y ayer te quité a ti para meter a ese de ahí.",
      },
    ],
  },
  {
    season: 3,
    episode: 6,
    titleEn: "The One with the Flashback",
    titleEs: "El del flashback",
    synopsis:
      "El grupo recuerda cómo eran las cosas en 1993, cuando Central Perk todavía era un bar y Joey se mudó al apartamento de Chandler después de que el señor Heckles ahuyentara a su compañero de piso anterior. En los recuerdos se revela que Chandler tuvo un breve interés por Rachel.",
    characters: ["Chandler", "Joey", "Rachel", "Ross", "Monica", "Phoebe", "Heckles"],
    memorableMoments: [
      "El grupo recuerda 1993, cuando Central Perk era todavía un bar normal.",
      "Se revela que Joey se mudó con Chandler por culpa de las trastadas del señor Heckles.",
      "En el flashback se insinúa que Chandler estuvo interesado en Rachel en el pasado.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "Suena un poco tonto... ¿quién es ella?" },
    ],
  },
  {
    season: 3,
    episode: 7,
    titleEn: "The One with the Race Car Bed",
    titleEs: "El de la cama de coche de carreras",
    synopsis:
      "Rachel intenta que su padre y Ross se lleven mejor invitándolos a hacer una salida juntos. Joey, ahora actor de telenovela, sabotea sin querer la audición de un estudiante al que se supone que debe ayudar.",
    characters: ["Rachel", "Ross", "el padre de Rachel", "Joey", "Chandler", "Monica", "Phoebe"],
    memorableMoments: [
      "Rachel organiza un encuentro para que su padre y Ross se lleven mejor.",
      "El padre de Rachel compara el óxido del coche con un cáncer de barco.",
      "Joey arruina sin querer la audición del estudiante al que se suponía que debía ayudar.",
    ],
    memorableQuotes: [
      { character: "el padre de Rachel", quote: "El óxido es el cáncer de los barcos, Ross." },
      { character: "Phoebe", quote: "En Inglaterra, este coche estaría al otro lado de la tienda." },
    ],
  },
  {
    season: 3,
    episode: 8,
    titleEn: "The One with the Giant Poking Device",
    titleEs: "El del aparato gigante para hurgar",
    synopsis:
      "Chandler descubre que Janice ha besado a su exmarido y rompe definitivamente con ella tras darse cuenta de que no soporta la idea de compartirla. Mientras tanto, el grupo usa unos palillos improvisados para comprobar si su vecino, que lleva días sin moverse, sigue vivo.",
    characters: ["Chandler", "Janice", "Joey", "Ross", "Monica", "Rachel", "Phoebe"],
    memorableMoments: [
      "Chandler se entera de que Janice ha besado a su exmarido más de una vez.",
      "Chandler le exige a Janice una respuesta clara: él o su exmarido.",
      "El grupo usa un artilugio improvisado con palillos para comprobar si un vecino inmóvil sigue con vida.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Necesito una respuesta de verdad: ¿quién es, él o yo?",
      },
      { character: "Janice", quote: "No lo sé." },
    ],
  },
  {
    season: 3,
    episode: 9,
    titleEn: "The One with the Football",
    titleEs: "El del fútbol americano",
    synopsis:
      "En Acción de Gracias, Ross y Monica reviven su antigua rivalidad deportiva de la infancia y organizan un partido de fútbol americano por la Copa Geller, un viejo trofeo casero que desata una competición cada vez más intensa entre todo el grupo.",
    characters: ["Ross", "Monica", "Chandler", "Joey", "Rachel", "Phoebe"],
    memorableMoments: [
      "Se revela la existencia de la Copa Geller, un muñeco troll clavado a un tablón.",
      "Monica cuenta que rescató el trofeo del lago tras el enfado de su padre.",
      "El partido de fútbol americano se vuelve cada vez más competitivo entre los amigos.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¿Todos estamos viendo un muñeco troll clavado a un tablón de madera?" },
      { character: "Monica", quote: "Si la quieres, vas a tener que ganártela." },
    ],
  },
  {
    season: 3,
    episode: 10,
    titleEn: "The One Where Rachel Quits",
    titleEs: "El de cuando Rachel deja el trabajo",
    synopsis:
      "Cansada de que la traten como a una simple camarera, Rachel deja su trabajo en Central Perk para intentar labrarse una carrera en el mundo de la moda, animada por Chandler y Joey, que le hacen ver que necesita esa presión para atreverse a dar el paso.",
    characters: ["Rachel", "Chandler", "Joey", "Terry", "Monica", "Ross", "Phoebe"],
    memorableMoments: [
      "Rachel se harta de las normas de su jefe Terry en Central Perk.",
      "Chandler y Joey convencen a Rachel de que deje el trabajo para forzarse a buscar algo mejor.",
      "Rachel consigue una entrevista en Fortunata Fashions gracias a un contacto de Joey.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "Me estoy formando para hacer mejor un trabajo que odio." },
    ],
  },
  {
    season: 3,
    episode: 11,
    titleEn: "The One Where Chandler Can't Remember Which Sister",
    titleEs: "El de la hermana que Chandler no recuerda",
    synopsis:
      "Tras una noche de borrachera, Chandler se acuesta con una de las hermanas de Joey, pero no consigue recordar con cuál de ellas fue. Rachel, mientras tanto, consigue una entrevista de trabajo en Bloomingdale's.",
    characters: ["Chandler", "Joey", "Rachel", "Monica", "Ross", "Phoebe"],
    memorableMoments: [
      "Chandler confiesa que se enrolló con una hermana de Joey sin recordar cuál.",
      "Ross se escandaliza por el comportamiento de Chandler hacia las hermanas de Joey.",
      "Rachel consigue una entrevista de trabajo en los grandes almacenes Bloomingdale's.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "Me enrollé con una hermana de Joey... no recuerdo cuál." },
      { character: "Ross", quote: "¿Veis lo que hacen los hombres? No me digáis que los hombres son buena gente. Esto son los hombres." },
    ],
  },
  {
    season: 3,
    episode: 12,
    titleEn: "The One with All the Jealousy",
    titleEs: "El de todos los celos",
    synopsis:
      "Ross se pone muy celoso de la buena relación que Rachel tiene con Mark, su compañero de trabajo, y empieza a hacerle regalos cada vez más exagerados para competir con él. Joey, por su parte, tiene que enfrentarse a las consecuencias de haber inflado su currículum.",
    characters: ["Ross", "Rachel", "Mark", "Joey", "Monica", "Chandler", "Phoebe"],
    memorableMoments: [
      "Ross se presenta a Mark diciendo 'de Ross y Rachel', marcando territorio.",
      "Ross empieza a hacerle regalos cada vez más caros a Rachel por celos de Mark.",
      "El currículum exagerado de Joey le pasa factura en un nuevo trabajo.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote:
          "Estuve con Carol ocho años y la perdí. Y ahora, si cabe, creo que te quiero aún más. Por eso me cuesta creer que no vaya a perderte también.",
      },
    ],
  },
  {
    season: 3,
    episode: 13,
    titleEn: "The One Where Monica and Richard Are Just Friends",
    titleEs: "El de Monica y Richard, solo amigos",
    synopsis:
      "Monica y Richard deciden retomar el contacto, esta vez solo como amigos, aunque pronto queda claro que la tentación de volver a estar juntos sigue muy presente. Rachel y Joey, por su parte, intercambian libros de sus autores favoritos.",
    characters: ["Monica", "Richard", "Rachel", "Joey", "Ross", "Chandler", "Phoebe"],
    memorableMoments: [
      "Monica y Richard se reencuentran e intentan ser 'solo amigos'.",
      "Monica y Richard acaban acostándose a pesar de su acuerdo de amistad.",
      "Rachel y Joey intercambian libros que terminan revelando más de lo esperado sobre cada uno.",
    ],
    memorableQuotes: [
      { character: "Monica", quote: "¿Podemos seguir siendo amigos... y tener sexo?" },
      { character: "Richard", quote: "Claro, será solo algo que hacemos juntos, como el racquetball." },
      { character: "Monica", quote: "Es difícil, esto de la 'platonomía'." },
    ],
  },
  {
    season: 3,
    episode: 14,
    titleEn: "The One with Phoebe's Ex-Partner",
    titleEs: "El de la excompañera de Phoebe",
    synopsis:
      "Phoebe se reencuentra con Leslie, su antigua compañera musical, con la que actuaba antes de conocer al grupo. Cuando Leslie empieza a tener más éxito que ella en Central Perk, Phoebe tiene que lidiar con sus celos y con el recuerdo de por qué se separaron.",
    characters: ["Phoebe", "Leslie", "Chandler", "Monica", "Ross", "Rachel", "Joey"],
    memorableMoments: [
      "Phoebe se reencuentra con su antigua compañera musical, Leslie.",
      "Leslie le dedica una canción a Phoebe cargada de significado sobre su separación.",
      "Phoebe recuerda que tocar juntas fue de lo más divertido que ha vivido.",
    ],
    memorableQuotes: [
      {
        character: "Phoebe",
        quote: "¿Sabes qué es lo más triste? Cuando tocábamos juntas, fue de lo más divertido que he vivido en todas mis vidas.",
      },
      { character: "Phoebe", quote: "Gato oloroso, gato oloroso, ¿qué te están dando de comer?" },
    ],
  },
  {
    season: 3,
    episode: 15,
    titleEn: "The One Where Ross and Rachel Take a Break",
    titleEs: "El de cuando Ross y Rachel se dan un tiempo",
    synopsis:
      "Ross y Rachel discuten en su aniversario por la desconfianza y los celos de Ross, y ella le dice que necesitan 'darse un tiempo'. Esa misma noche, dolido, Ross se acuesta con Chloe, la chica de la copistería, en lo que él cree que es una ruptura definitiva.",
    characters: ["Ross", "Rachel", "Chloe", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross y Rachel discuten en su aniversario y ella pide 'un tiempo' de separación.",
      "Ross, deprimido, pasa la noche fuera y acaba con Chloe, una chica de la copistería.",
      "Nace la célebre frase '¡Estábamos en un tiempo muerto!' que definirá la disputa de la pareja.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "Creo que deberíamos darnos un tiempo." },
      { character: "Ross", quote: "¡Estábamos en un tiempo muerto! ('We were on a break!')" },
    ],
  },
  {
    season: 3,
    episode: 16,
    titleEn: "The One with the Morning After",
    titleEs: "El de la mañana siguiente",
    synopsis:
      "Rachel se entera por Gunther de que Ross se acostó con Chloe la misma noche que pidieron un tiempo, y se enfurece aún más al descubrir que Chloe sigue en el apartamento de Ross mientras ella intenta arreglar las cosas. La relación de Ross y Rachel termina entre gritos y reproches.",
    characters: ["Rachel", "Ross", "Gunther", "Chloe", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Gunther le cuenta a Rachel, sin querer, lo que pasó entre Ross y Chloe.",
      "Ross le suplica a Gunther que no le diga nada a Rachel, mientras ya es demasiado tarde.",
      "Rachel y Ross discuten durante toda la noche sobre si de verdad estaban 'en un tiempo' o no.",
    ],
    memorableQuotes: [
      { character: "Gunther", quote: "Lo siento... ¿Es que no tenía que decírselo?" },
    ],
  },
  {
    season: 3,
    episode: 17,
    titleEn: "The One Without the Ski Trip",
    titleEs: "El del viaje a esquiar que no fue",
    synopsis:
      "Tras la ruptura de Ross y Rachel, el ambiente entre el grupo se vuelve tenso durante lo que iba a ser un viaje para esquiar. Phoebe intenta hacer entrar en razón a Ross y a Rachel para que sean civilizados el uno con el otro.",
    characters: ["Ross", "Rachel", "Phoebe", "Monica", "Chandler", "Joey"],
    memorableMoments: [
      "El grupo cancela el viaje de esquí por la tensión entre Ross y Rachel.",
      "Phoebe intenta mediar para que Ross y Rachel se comporten con civismo.",
      "El coche del abuelo de Phoebe se queda tirado en la nieve en pleno enfado.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "Bien, vamos a meternos ya en el coche, que hace frío y tengo el pecho sin apoyo." },
    ],
  },
  {
    season: 3,
    episode: 18,
    titleEn: "The One with the Hypnosis Tape",
    titleEs: "El de la cinta de hipnosis",
    synopsis:
      "Rachel le regala a Chandler una cinta de hipnosis para dejar de fumar, y aunque funciona, el mensaje grabado ('eres una mujer fuerte y segura de ti misma') empieza a afectarle de formas inesperadas. Mientras tanto, un cliente rico llamado Pete Becker le deja a Monica una propina de 20.000 dólares.",
    characters: ["Chandler", "Rachel", "Monica", "Pete Becker", "Ross", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel le regala a Chandler una cinta de hipnosis para ayudarle a dejar de fumar.",
      "La cinta, grabada para una mujer, empieza a hacer que Chandler actúe de forma muy afeminada.",
      "El multimillonario Pete Becker deja una propina de 20.000 dólares en el restaurante de Monica.",
    ],
    memorableQuotes: [
      {
        character: "la cinta de hipnosis",
        quote: "Los cigarrillos no te controlan. Eres una mujer fuerte y segura de ti misma que no necesita fumar.",
      },
    ],
  },
  {
    season: 3,
    episode: 19,
    titleEn: "The One with the Tiny T-Shirt",
    titleEs: "El de la camiseta diminuta",
    synopsis:
      "Rachel empieza a salir con Mark, pero se siente insegura sobre si está preparada para una nueva relación. Joey empieza a desarrollar sentimientos por Kate, su compañera de reparto en la telenovela, justo cuando ella empieza a salir con el director.",
    characters: ["Rachel", "Mark", "Joey", "Kate", "Ross", "Chandler", "Phoebe", "Monica"],
    memorableMoments: [
      "Rachel duda si está preparada para salir en serio con Mark.",
      "Joey se da cuenta de que tiene sentimientos por Kate, su compañera de la telenovela.",
      "Joey descubre que Kate ha empezado a salir con el director de la serie.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Si no os importa, voy a coger el resto de mis cosas y a relajarme con mi camisa favorita." },
      { character: "Joey", quote: "Aquí dice en el guion que eres una zorra." },
    ],
  },
  {
    season: 3,
    episode: 20,
    titleEn: "The One with the Dollhouse",
    titleEs: "El de la casa de muñecas",
    synopsis:
      "A Monica le regalan una casa de muñecas antigua con la que nunca pudo jugar de pequeña, y ahora Phoebe y ella se pelean como niñas por disfrutarla. Joey, mientras tanto, sigue lidiando con su enamoramiento por Kate, ahora que ella sale con el director.",
    characters: ["Monica", "Phoebe", "Joey", "Kate", "Ross", "Chandler", "Rachel"],
    memorableMoments: [
      "A Monica le regalan la casa de muñecas con la que soñaba de pequeña.",
      "Monica y Phoebe se pelean como niñas por turnarse para jugar con la casa de muñecas.",
      "Joey sigue enamorándose más de Kate mientras la relación se complica.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote: "Puedes jugar con mi casa de muñecas cuando quieras. De pequeña solo quería jugar con ella. Pero no, era solo para mirarla.",
      },
      { character: "Monica", quote: "¡No uno que pueda hacer pis en el tejado!" },
    ],
  },
  {
    season: 3,
    episode: 21,
    titleEn: "The One with a Chick and a Duck",
    titleEs: "El del pollito y el patito",
    synopsis:
      "Joey y Chandler adoptan un pollito y, más tarde, también un pato, que se convierten en sus nuevas e inesperadas mascotas. Ross ayuda a Rachel, que se ha hecho daño, aunque eso signifique perderse un evento importante.",
    characters: ["Joey", "Chandler", "Ross", "Rachel", "Monica", "Phoebe"],
    memorableMoments: [
      "Joey y Chandler adoptan un pollito de forma impulsiva.",
      "Chandler termina adoptando también un pato para hacerle compañía al pollito.",
      "Ross prioriza ayudar a Rachel, que está herida, aunque tenga que perderse un evento importante.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¿Aves? No. ¿Mujeres? Tampoco." },
      { character: "Chandler", quote: "¡Eso es un pato malo!" },
      { character: "Chandler", quote: "Ahora te quedas aquí fuera, y piensas en lo que HICISTE." },
    ],
  },
  {
    season: 3,
    episode: 22,
    titleEn: "The One with the Screamer",
    titleEs: "El del gritón",
    synopsis:
      "Rachel empieza a salir con Tommy, un hombre encantador en la mayoría de situaciones pero que reacciona con una ira desproporcionada ante la más mínima contrariedad, para incomodidad de todo el grupo. Joey y Kate, por su parte, terminan su relación cuando a ella le sale un trabajo en Los Ángeles.",
    characters: ["Rachel", "Tommy", "Joey", "Kate", "Ross", "Chandler", "Monica", "Phoebe"],
    memorableMoments: [
      "Rachel empieza a salir con Tommy, que parece perfecto al principio.",
      "Tommy estalla en una ira desmedida ante pequeños contratiempos, asustando al grupo.",
      "Joey y Kate se separan cuando a ella le surge una oportunidad de trabajo en Los Ángeles.",
    ],
    memorableQuotes: [
      {
        character: "Tommy",
        quote: "¡Señor Peludo, ¿cómo estás?! ¡Puaj! ¡Qué asco! ¡IDIOTA! ¡ESTÚPIDA CRIATURA PELUDA Y AMARILLA!",
      },
    ],
  },
  {
    season: 3,
    episode: 23,
    titleEn: "The One with Ross' Thing",
    titleEs: "El del bulto de Ross",
    synopsis:
      "A Ross le sale un extraño bulto en la piel que le genera una gran ansiedad, y acude al gurú herbolario de Phoebe para intentar identificarlo. Phoebe, mientras tanto, intenta quedar con dos hombres distintos a la vez sin que se enteren el uno del otro.",
    characters: ["Ross", "Phoebe", "Guru Saj", "Rachel", "Monica", "Chandler", "Joey"],
    memorableMoments: [
      "A Ross le aparece un extraño bulto que le provoca mucha ansiedad.",
      "El gurú herbolario de Phoebe examina el bulto de Ross y le pone un nombre extraño.",
      "Phoebe intenta compaginar citas con dos hombres distintos sin que ninguno lo sepa.",
    ],
    memorableQuotes: [
      { character: "Guru Saj", quote: "Esto es un 'kundus'." },
      { character: "Phoebe", quote: "Ropa interior loca, subiéndose por mi trasero." },
    ],
  },
  {
    season: 3,
    episode: 24,
    titleEn: "The One with the Ultimate Fighting Champion",
    titleEs: "El del campeón de lucha libre",
    synopsis:
      "Pete Becker, el millonario que sale con Monica, se obsesiona con convertirse en campeón de artes marciales mixtas, algo que aterra a Monica al ver cómo sale malherido una y otra vez. Al final, Monica tiene que elegir entre apoyarle o dejarle.",
    characters: ["Pete Becker", "Monica", "Ross", "Chandler", "Joey", "Rachel", "Phoebe"],
    memorableMoments: [
      "Pete decide competir para convertirse en el campeón definitivo de lucha libre.",
      "Monica ve con horror cómo Pete vuelve cada vez más magullado de sus combates.",
      "Monica le pide a Pete que lo deje, y él se niega, lo que acaba con la relación.",
    ],
    memorableQuotes: [
      { character: "Monica", quote: "Eres pésimo en esto. Eres el peor luchador de artes marciales mixtas de la historia." },
      {
        character: "Monica",
        quote: "Te quiero demasiado como para verte hacerte daño así. Si tienes que hacer esto, tendrás que hacerlo sin mí.",
      },
    ],
  },
  {
    season: 3,
    episode: 25,
    titleEn: "The One at the Beach",
    titleEs: "El de la playa",
    synopsis:
      "El grupo pasa unos días en una casa de playa en Montauk. Allí, Phoebe se reencuentra por fin con su madre biológica, a la que había estado buscando. Ross, por su parte, tiene que decidir entre Rachel y Bonnie, su nueva novia.",
    characters: ["Phoebe", "la madre biológica de Phoebe", "Ross", "Rachel", "Bonnie", "Monica", "Chandler", "Joey"],
    memorableMoments: [
      "El grupo se va de vacaciones a una casa de playa en Montauk.",
      "Phoebe encuentra por fin a su madre biológica, que resulta vivir cerca de allí.",
      "Ross tiene que elegir entre retomar las cosas con Rachel o seguir con Bonnie.",
    ],
    memorableQuotes: [
      {
        character: "la madre de Phoebe",
        quote: "Tienes razón, una persona debería saber de dónde viene... Soy tu madre.",
      },
      { character: "la madre de Phoebe", quote: "Tiene tres habitaciones, pero no baño. ¡Pero el mar está ahí mismo!" },
    ],
  },
];
