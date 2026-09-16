import type { EpisodeInput } from "@/lib/dal/episodes";

/**
 * Datos de referencia (sinopsis, personajes, momentos y frases memorables)
 * de los 24 episodios de la temporada 1 de Friends, para preparar trivia.
 * Fuentes: Wikipedia ("Friends (season 1)") y búsquedas dirigidas (IMDb,
 * TV Tropes, AV Club, TV Fanatic) para los episodios con menos detalle en
 * la sinopsis general.
 */
export const season1EpisodeData: EpisodeInput[] = [
  {
    season: 1,
    episode: 1,
    titleEn: "The Pilot (The One Where Monica Gets a Roommate)",
    titleEs: "El del principio",
    synopsis:
      "Rachel huye de su boda con Barry y se reencuentra con su amiga del instituto Monica, con la que empieza a vivir. Se une al grupo de amigos que se reúne en la cafetería Central Perk y consigue trabajo como camarera allí. Mientras tanto, Ross, recién divorciado de Carol (que lo ha dejado por otra mujer), confiesa a sus amigos que sigue enamorado de Rachel desde el instituto.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Joey", "Phoebe", "Paul"],
    memorableMoments: [
      "Rachel llega a Central Perk todavía en vestido de novia.",
      "Joey cuenta la anécdota de 'cojín, cojín' sobre estar soltero.",
      "Ross confiesa a los amigos que sigue enamorado de Rachel.",
      "Monica tiene una cita con Paul, 'el del vino', que resulta ser un mentiroso.",
    ],
    memorableQuotes: [
      { character: "Monica", quote: "Bienvenida al mundo real. ¡Apesta! Te va a encantar." },
      { character: "Ross", quote: "Solo quiero estar casado otra vez." },
    ],
  },
  {
    season: 1,
    episode: 2,
    titleEn: "The One with the Sonogram at the End",
    titleEs: "El de la ecografía",
    synopsis:
      "Carol, la ex mujer de Ross, le anuncia que está embarazada de él, y Ross acude junto a ella y a su nueva pareja Susan a la primera ecografía. Rachel decide devolverle a Barry el anillo de compromiso. Los padres de Ross y Monica visitan para cenar y, entre vídeos caseros, sale a relucir que Monica tenía sobrepeso de adolescente ('Fat Monica').",
    characters: ["Ross", "Rachel", "Monica", "Carol", "Susan", "Jack Geller", "Judy Geller", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross, Carol y Susan ven juntos la primera ecografía del bebé.",
      "Rachel corta en pedazos su tarjeta de crédito de la familia.",
      "Los padres de Monica y Ross enseñan un vídeo casero de 'Fat Monica' bailando.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Es solo un embrión, pero ya es humano." },
    ],
  },
  {
    season: 1,
    episode: 3,
    titleEn: "The One with the Thumb",
    titleEs: "El del dedo",
    synopsis:
      "Phoebe encuentra un dedo pulgar humano dentro de una lata de refresco y la empresa embotelladora le paga una indemnización de 7.000 dólares para evitar el escándalo. Monica empieza a salir con Alan, un hombre que encanta a todo el grupo de amigos, lo que complica su decisión de romper con él.",
    characters: ["Phoebe", "Monica", "Alan", "Ross", "Rachel", "Chandler", "Joey"],
    memorableMoments: [
      "Phoebe encuentra un pulgar humano en su lata de refresco.",
      "Todo el grupo, incluidos Ross, Chandler, Joey y Rachel, adora a Alan, el novio de Monica.",
      "Monica anuncia que va a romper con Alan pese a que a todos les encanta.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "Hay... hay un dedo... en mi refresco." },
    ],
  },
  {
    season: 1,
    episode: 4,
    titleEn: "The One with George Stephanopoulos",
    titleEs: "El de George Stephanopoulos",
    synopsis:
      "Monica, Rachel y Phoebe descubren con un telescopio que su vecino de enfrente es George Stephanopoulos, el entonces secretario de prensa de la Casa Blanca, y se obsesionan espiándolo. Mientras tanto, Ross, Chandler y Joey organizan una noche de chicos con hockey por televisión y pizza, que se complica cuando Ross recibe un golpe viendo el partido en directo.",
    characters: ["Monica", "Rachel", "Phoebe", "Ross", "Chandler", "Joey"],
    memorableMoments: [
      "Las chicas descubren que su vecino de enfrente es George Stephanopoulos y lo espían con un telescopio.",
      "Ross recibe un disco de hockey en la cara en un partido en directo.",
      "La pizza de la noche de chicos se entrega por error en el apartamento equivocado.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "¿Quién es FICA? ¿Por qué se está quedando con todo mi dinero?" },
    ],
  },
  {
    season: 1,
    episode: 5,
    titleEn: "The One with the East German Laundry Detergent",
    titleEs: "El del detergente alemán",
    synopsis:
      "Ross aprovecha una excusa —hacer la colada— para pasar tiempo a solas con Rachel, compitiendo con otra clienta de la lavandería por una lavadora libre. Chandler y Phoebe rompen cada uno con sus parejas el mismo día, y Joey intenta, sin éxito, evitar que una pareja de amigos rompa su relación.",
    characters: ["Ross", "Rachel", "Chandler", "Phoebe", "Joey"],
    memorableMoments: [
      "Ross invita a Rachel a hacer la colada juntos como pretexto para una cita informal.",
      "Ross se enfrenta a otra clienta de la lavandería por una lavadora libre para enseñar a Rachel a ser más asertiva.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "¡Venga ya! Vosotros podéis mear de pie." },
      { character: "Joey", quote: "Las mujeres pueden ver pechos cuando quieran, no sé cómo consiguen hacer nada." },
    ],
  },
  {
    season: 1,
    episode: 6,
    titleEn: "The One with the Butt",
    titleEs: "El del trasero",
    synopsis:
      "Joey consigue lo que cree su gran oportunidad: ser el doble de trasero de un actor famoso (Al Pacino) en una película, aunque solo consiga ese papel tan reducido. Chandler, por su parte, empieza a salir con Aurora, una mujer que mantiene varias relaciones abiertas a la vez y se niega a tener una relación exclusiva con él.",
    characters: ["Joey", "Chandler", "Aurora", "Ross", "Monica"],
    memorableMoments: [
      "Joey celebra con orgullo haber sido contratado como doble de trasero de Al Pacino.",
      "Chandler descubre que Aurora, su nueva pareja, sale con varios hombres a la vez y no quiere exclusividad.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "Cuando estoy con una mujer, necesito saber que salgo con más gente que ella." },
    ],
  },
  {
    season: 1,
    episode: 7,
    titleEn: "The One with the Blackout",
    titleEs: "El del apagón",
    synopsis:
      "Un apagón general en Nueva York deja a los amigos reunidos en el apartamento de Monica y Rachel. Chandler queda atrapado en el vestíbulo de un cajero automático junto a una modelo (Jill Goodacre). Durante el apagón, Rachel conoce a Paolo, su nuevo vecino italiano, justo cuando Ross se disponía a confesarle sus sentimientos.",
    characters: ["Chandler", "Rachel", "Paolo", "Ross", "Monica", "Joey", "Phoebe"],
    memorableMoments: [
      "Chandler queda encerrado en un cajero automático con una modelo durante el apagón.",
      "Rachel conoce a Paolo, su nuevo vecino, justo cuando Ross iba a declararse.",
      "Phoebe canta canciones improvisadas durante el apagón.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "El sitio más raro tendría que ser... a los pies de la cama." },
      { character: "Chandler", quote: "Un chicle sería la perfección." },
    ],
  },
  {
    season: 1,
    episode: 8,
    titleEn: "The One Where Nana Dies Twice",
    titleEs: "El de cuando la abuela muere dos veces",
    synopsis:
      "Fallece la abuela ('Nana') de Ross y Monica, y la familia se reúne para el funeral y para vaciar su apartamento. Ross se lesiona en el cementerio durante el entierro. Chandler, afectado por el ambiente familiar, empieza a cuestionarse su propia orientación sexual tras recordar un episodio de su infancia.",
    characters: ["Ross", "Monica", "Chandler", "Jack Geller", "Judy Geller"],
    memorableMoments: [
      "La familia Geller vacía el apartamento de la abuela fallecida y encuentra objetos con recuerdos.",
      "Ross se lesiona la espalda durante el entierro de su abuela.",
      "Chandler recuerda un momento de su infancia que le hace dudar de su orientación sexual.",
    ],
    memorableQuotes: [
      { character: "Jack Geller", quote: "Puede que haya muerto." },
      { character: "Phoebe", quote: "Tienes pelo homosexual." },
    ],
  },
  {
    season: 1,
    episode: 9,
    titleEn: "The One Where Underdog Gets Away",
    titleEs: "El de cuando Underdog se escapa",
    synopsis:
      "En Acción de Gracias, Rachel pierde su vuelo para visitar a su familia y se queda con el grupo. Durante el desfile de Macy's, el globo gigante de Underdog se suelta y se escapa. Los amigos, reunidos para cenar juntos, terminan quemando la comida, pero acaban reconciliados y agradecidos los unos de los otros.",
    characters: ["Rachel", "Monica", "Ross", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "El globo de Underdog se escapa durante la retransmisión del desfile de Acción de Gracias.",
      "La cena de Acción de Gracias del grupo se quema por completo.",
      "Rachel se queda con sus amigos en Nueva York tras perder su vuelo.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Por una Navidad horrible." },
    ],
  },
  {
    season: 1,
    episode: 10,
    titleEn: "The One with the Monkey",
    titleEs: "El del mono",
    synopsis:
      "En Nochevieja, el grupo rompe su pacto de no llevar pareja a la fiesta de Fin de Año. Ross se presenta con un capuchino llamado Marcel, un mono que ha adoptado para hacer compañía tras su divorcio. Phoebe empieza a salir con David, un científico, mientras el resto navega los altibajos de encontrar pareja para la noche.",
    characters: ["Ross", "Phoebe", "David", "Monica", "Chandler", "Joey", "Rachel", "Janice"],
    memorableMoments: [
      "Ross presenta a Marcel, su nuevo mono capuchino, en la fiesta de Nochevieja.",
      "El grupo rompe su pacto de ir sin pareja a la fiesta.",
      "Chandler termina la noche con Janice, reiniciando su historia con ella.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¡Oye, ese mono tiene un Ross en el culo!" },
    ],
  },
  {
    season: 1,
    episode: 11,
    titleEn: "The One with Mrs. Bing",
    titleEs: "El de la señora Bing",
    synopsis:
      "Nora Bing, la madre de Chandler y una famosa autora de novelas románticas, visita a los amigos, y todos —especialmente Joey— quedan fascinados con ella, para vergüenza de Chandler. Ross, dolido al ver a Rachel con Paolo, se emborracha y termina besando accidentalmente a la señora Bing.",
    characters: ["Chandler", "Nora Bing", "Joey", "Ross", "Rachel", "Paolo"],
    memorableMoments: [
      "Todo el grupo, sobre todo Joey, queda deslumbrado por la madre de Chandler, la escritora Nora Bing.",
      "Ross se emborracha al ver a Rachel con Paolo y termina besando a la madre de Chandler.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "¿Llegaste a la parte de sus 'plumas enormes y palpitantes'?" },
      { character: "Chandler", quote: "Pasáis demasiado tiempo juntos." },
    ],
  },
  {
    season: 1,
    episode: 12,
    titleEn: "The One with the Dozen Lasagnas",
    titleEs: "El de la docena de lasañas",
    synopsis:
      "Monica prepara una docena de lasañas para su tía, pero comete el error de hacerlas con carne cuando debían ser vegetarianas, y pasa el episodio intentando deshacerse de ellas. Rachel rompe con Paolo después de que este intente ligar con Phoebe durante un masaje, y sin querer le revela a Ross el sexo del bebé que espera con Carol.",
    characters: ["Monica", "Rachel", "Paolo", "Phoebe", "Ross"],
    memorableMoments: [
      "Monica descubre que ha hecho las doce lasañas con carne por error, cuando debían ser vegetarianas.",
      "Paolo intenta ligar con Phoebe durante un masaje, lo que provoca que Rachel rompa con él.",
      "Rachel revela sin querer a Ross que el bebé que espera es un niño.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Podrías soltarme en medio del útero de cualquier mujer, sin brújula, y encontraría la salida." },
    ],
  },
  {
    season: 1,
    episode: 13,
    titleEn: "The One with the Boobies",
    titleEs: "El de los pechos al descubierto",
    synopsis:
      "Chandler ve por accidente a Rachel sin camiseta, lo que desencadena una cadena de momentos incómodos entre los amigos. Joey descubre que su padre lleva años teniendo una aventura y no sabe cómo afrontarlo. Phoebe, por su parte, empieza a salir con Roger, un psiquiatra cuyo estilo analítico incomoda a todo el grupo.",
    characters: ["Chandler", "Rachel", "Joey", "Phoebe", "Roger"],
    memorableMoments: [
      "Chandler ve accidentalmente a Rachel sin camiseta en el apartamento.",
      "Joey se entera de que su padre ha tenido una amante durante años.",
      "Phoebe presenta a Roger, un psiquiatra que incomoda al grupo con sus análisis constantes.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Oye, yo me casé con una lesbiana para hacerte quedar bien." },
      { character: "Rachel", quote: "Toma y daca." },
    ],
  },
  {
    season: 1,
    episode: 14,
    titleEn: "The One with the Candy Hearts",
    titleEs: "El de los corazones de caramelo",
    synopsis:
      "En San Valentín, Ross queda con una vecina pero pasa la noche pensando en Carol, mientras que Joey y Chandler rompen a la vez con Janice, la novia de Joey, en una cena conjunta que se complica. Monica sale con su ex 'Fun Bobby', que resulta ser mucho menos divertido cuando está sobrio.",
    characters: ["Ross", "Joey", "Chandler", "Janice", "Monica", "Fun Bobby"],
    memorableMoments: [
      "Joey y Chandler intentan romper con Janice a la vez en la misma cena de San Valentín.",
      "Monica descubre que su ex novio 'Fun Bobby' solo era divertido porque bebía mucho.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "No hay una forma fácil de decir esto. Al menos, no hay una forma nueva de decirlo." },
    ],
  },
  {
    season: 1,
    episode: 15,
    titleEn: "The One with the Stoned Guy",
    titleEs: "El del tipo colocado",
    synopsis:
      "A Monica le ofrecen ser la chef de un nuevo restaurante financiado por un inversor, Cranston, que está permanentemente colocado y resulta muy poco fiable como socio. Chandler recibe un ascenso en el trabajo, lo rechaza impulsivamente y después se arrepiente de haberlo hecho.",
    characters: ["Monica", "Cranston", "Chandler"],
    memorableMoments: [
      "Monica se reúne con Cranston, un inversor de restaurantes que siempre está drogado, para hablar de un puesto de chef.",
      "Chandler rechaza un ascenso en un impulso y después se arrepiente.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "¿Alguien sabe de un buen sitio si no estás saliendo con una puma?" },
    ],
  },
  {
    season: 1,
    episode: 16,
    titleEn: "The One with Two Parts (Part 1)",
    titleEs: "El de las dos partes (1ª parte)",
    synopsis:
      "Joey empieza a salir con Ursula, la hermana gemela de Phoebe, lo que disgusta profundamente a esta. Rachel se lesiona un tobillo y, al no tener seguro médico, tiene que hacerse pasar por Monica en el hospital, donde ambas conocen a dos atractivos médicos. Ross asiste a clases de preparación al parto con Carol y Susan, que terminan en desastre cuando tiene que hacer de 'Carol' en un ejercicio, y un vídeo sobre el parto hace que Carol se replantee todo el proceso. Chandler, mientras tanto, tiene que despedir a Nina, una compañera con la que acaba de empezar a salir.",
    characters: ["Joey", "Ursula", "Phoebe", "Rachel", "Monica", "Ross", "Carol", "Susan", "Chandler", "Nina"],
    memorableMoments: [
      "Joey empieza a salir con Ursula, la hermana gemela de Phoebe, para disgusto de esta.",
      "Rachel se lesiona un tobillo y se hace pasar por Monica en el hospital para que la atiendan sin seguro.",
      "Ross tiene que interpretar el papel de Carol en una clase de preparación al parto.",
      "Chandler tiene que despedir a Nina, la mujer con la que acaba de empezar a salir.",
    ],
    memorableQuotes: [
      { character: "Carol", quote: "¡Hola! ¿Es esa tu fosa nasal? ¿Te importa si metemos este asado por ahí?" },
      { character: "Phoebe", quote: "Todo el mundo siempre pensó que ella era la guapa." },
    ],
  },
  {
    season: 1,
    episode: 17,
    titleEn: "The One with Two Parts (Part 2)",
    titleEs: "El de las dos partes (2ª parte)",
    synopsis:
      "Joey deja plantada a Phoebe en su cumpleaños para celebrarlo con Ursula en un restaurante caro, así que el resto del grupo le organiza una fiesta sorpresa en la que Phoebe termina apenada por su ausencia. Ursula deja plantado a Joey sin ni siquiera avisarle, y Phoebe acaba haciéndose pasar por su hermana para romper formalmente con él por teléfono.",
    characters: ["Joey", "Phoebe", "Ursula", "Monica", "Ross", "Rachel", "Chandler"],
    memorableMoments: [
      "El grupo organiza una fiesta sorpresa de cumpleaños para Phoebe, sin Joey.",
      "Ursula deja plantado a Joey en su cita sin avisarle.",
      "Phoebe se hace pasar por Ursula para romper con Joey por teléfono.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote:
          "Soy una idiota. Verá, estaba rellenando el formulario de mi amiga y en vez de poner sus datos, puse los míos.",
      },
      { character: "Rachel", quote: "¡Mira, mira, el Tío Bueno Desnudo está haciendo hula-hoop!" },
    ],
  },
  {
    season: 1,
    episode: 18,
    titleEn: "The One with All the Poker",
    titleEs: "El del póker",
    synopsis:
      "Rachel envía solicitudes de trabajo en el mundo de la moda mientras el grupo se enfrasca en unas partidas de póker cada vez más competitivas entre chicos y chicas, que los chicos habían enseñado a jugar a las chicas. La rivalidad crece hasta un enfrentamiento final decisivo entre Ross y Rachel.",
    characters: ["Rachel", "Ross", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Las chicas piden a los chicos que les enseñen a jugar al póker.",
      "Las partidas de póker se vuelven cada vez más competitivas entre ambos grupos.",
      "Rachel gana una mano decisiva de póker contra Ross al final del episodio.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "¡Tienes la bragueta abierta, Geller!" },
    ],
  },
  {
    season: 1,
    episode: 19,
    titleEn: "The One Where the Monkey Gets Away",
    titleEs: "El de cuando el mono se escapa",
    synopsis:
      "Marcel, el mono de Ross, se escapa del apartamento y todo el grupo se divide para buscarlo por la ciudad, mientras Rachel llama al control de animales por accidente. En medio del caos, Ross finalmente reúne el valor para pedirle una cita a Rachel.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Marcel se escapa del apartamento y desata una búsqueda por toda la ciudad.",
      "Rachel llama sin querer al control de animales por el mono.",
      "Ross finalmente le pide una cita a Rachel.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "¡Tenemos que empezar a cerrar esa puerta con llave!" },
    ],
  },
  {
    season: 1,
    episode: 20,
    titleEn: "The One with the Evil Orthodontist",
    titleEs: "El del ortodoncista malvado",
    synopsis:
      "Rachel retoma en secreto su relación con su exprometido Barry, quien está a punto de casarse con Mindy. Cuando Mindy le pide a Rachel ser su dama de honor y le confiesa sus sospechas sobre una infidelidad de Barry, Rachel termina confesando que es ella la otra mujer; aun así, Mindy decide seguir adelante con la boda. Mientras tanto, el grupo descubre que una vecina los observa con un telescopio.",
    characters: ["Rachel", "Barry", "Mindy", "Ross", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Rachel retoma en secreto su relación con Barry, ya prometido con Mindy.",
      "Mindy le pide a Rachel que sea su dama de honor sin saber que es la otra mujer.",
      "Rachel confiesa a Mindy que ella es la mujer con la que Barry le es infiel, pero la boda sigue adelante.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "Acabamos teniendo sexo en su sillón de dentista." },
    ],
  },
  {
    season: 1,
    episode: 21,
    titleEn: "The One with the Fake Monica",
    titleEs: "El de la falsa Monica",
    synopsis:
      "Le roban la tarjeta de crédito a Monica, y ella, Phoebe y Rachel intentan atrapar a la ladrona; sin embargo, Monica termina haciéndose amiga de ella hasta que la arrestan. Ross descubre que Marcel ya es sexualmente maduro y necesita vivir con otros monos, así que intenta, con dificultad, conseguirle un hueco en un buen zoo. Joey decide que necesita un nombre artístico más masculino y elige, por error, el de Joseph Stalin.",
    characters: ["Monica", "Phoebe", "Rachel", "Ross", "Marcel", "Joey", "Chandler"],
    memorableMoments: [
      "Monica se hace amiga de la mujer que le robó la tarjeta de crédito, la 'falsa Monica'.",
      "Ross intenta conseguir que Marcel entre en un buen zoológico al alcanzar la madurez.",
      "Joey elige por error el nombre artístico de 'Joseph Stalin', sin saber quién fue.",
    ],
    memorableQuotes: [
      {
        character: "Falsa Monica",
        quote:
          "Monica, yo he empezado el día haciendo pis delante de otras 25 mujeres y tú estás preocupada por quién te va a llevar al circo Big Apple.",
      },
      { character: "Chandler", quote: "¿Joe... Joe... Joe Stalin?" },
    ],
  },
  {
    season: 1,
    episode: 22,
    titleEn: "The One with the Ick Factor",
    titleEs: "El del asco",
    synopsis:
      "Monica descubre, después de acostarse con él, que su nuevo novio Ethan todavía está en el instituto. Rachel tiene un sueño erótico con Chandler y Joey que incomoda mucho a Ross. Phoebe trabaja temporalmente como recepcionista para Chandler y le advierte de que, desde su ascenso, sus compañeros ya no lo aprecian. El episodio termina con Carol entrando en la fase final de su embarazo.",
    characters: ["Monica", "Ethan", "Rachel", "Ross", "Chandler", "Phoebe", "Joey", "Carol"],
    memorableMoments: [
      "Monica descubre que Ethan, con quien se ha acostado, todavía va al instituto.",
      "Rachel cuenta un sueño erótico con Chandler y Joey que incomoda a Ross.",
      "Phoebe trabaja de recepcionista temporal para Chandler y le da consejos incómodos.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "Estaba muy borracho, y era el subconsciente de otra persona." },
      { character: "Rachel", quote: "Hubo momentos en los que ni siquiera era yo." },
    ],
  },
  {
    season: 1,
    episode: 23,
    titleEn: "The One with the Birth",
    titleEs: "El del nacimiento",
    synopsis:
      "Carol se pone de parto y toda la familia y amigos se reúnen en el hospital para el nacimiento del bebé. Ross gana confianza en su papel como futuro padre a pesar de no estar en pareja con Carol. Finalmente nace Ben, el hijo de Ross y Carol.",
    characters: ["Carol", "Ross", "Susan", "Monica", "Rachel", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Toda la familia y los amigos esperan juntos en el hospital durante el parto de Carol.",
      "Ross gana seguridad sobre su papel como padre mientras espera el nacimiento.",
      "Nace Ben, el hijo de Ross y Carol.",
    ],
    memorableQuotes: [
      { character: "Monica", quote: "¡Quiero un bebé!" },
    ],
  },
  {
    season: 1,
    episode: 24,
    titleEn: "The One Where Rachel Finds Out",
    titleEs: "El de cuando Rachel se entera",
    synopsis:
      "Ross viaja a China por trabajo justo antes del cumpleaños de Rachel. Durante una fiesta, Chandler revela accidentalmente a Rachel que Ross está enamorado de ella desde hace tiempo. Rachel pasa el resto del episodio decidiendo si debe confesarle sus propios sentimientos a Ross cuando regrese.",
    characters: ["Ross", "Rachel", "Chandler", "Monica", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross viaja a China por trabajo antes del cumpleaños de Rachel.",
      "Chandler revela por accidente a Rachel que Ross está enamorado de ella.",
      "Rachel decide si debe confesarle a Ross sus propios sentimientos al volver.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "F-hah.... flennin.... (balbuceando tras la metedura de pata)" },
      { character: "Rachel", quote: "Oh... Dios mío." },
    ],
  },
];
