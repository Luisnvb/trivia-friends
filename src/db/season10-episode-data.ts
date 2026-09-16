import type { EpisodeInput } from "@/lib/dal/episodes";

/**
 * Datos de referencia (sinopsis, personajes, momentos y frases memorables)
 * de los 18 episodios de la temporada 10 (la última) de Friends, para
 * preparar trivia. Fuentes: Wikipedia ("Friends (season 10)") para las
 * sinopsis, y Wikiquote ("Friends (season 10)") más búsquedas dirigidas por
 * episodio (IMDb Quotes, TV Quotes) para las citas.
 */
export const season10EpisodeData: EpisodeInput[] = [
  {
    season: 10,
    episode: 1,
    titleEn: "The One After Joey and Rachel Kiss",
    titleEs: "El de después del beso de Joey y Rachel",
    synopsis:
      "Tras besarse en Barbados, Joey y Rachel intentan pedirle permiso a Ross antes de que él los descubra por su cuenta. Monica sufre un desastre con un peinado de trencitas africanas que se hizo de vacaciones, y Phoebe ayuda a Mike a romper con otra mujer con la que él seguía saliendo sin saber que estaba prometido.",
    characters: ["Joey", "Rachel", "Ross", "Monica", "Phoebe", "Mike"],
    memorableMoments: [
      "Joey y Rachel intentan pedirle permiso a Ross para estar juntos.",
      "Ross los descubre antes de que puedan contárselo.",
      "Monica se avergüenza de su peinado de trencitas de las vacaciones.",
      "Phoebe ayuda a Mike a romper con otra mujer.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "Está encendiendo la tele, ¡es Miss Simpatía!" },
      { character: "Phoebe", quote: "Mike es un poco imbécil." },
    ],
  },
  {
    season: 10,
    episode: 2,
    titleEn: "The One Where Ross Is Fine",
    titleEs: "El de que Ross está bien",
    synopsis:
      "Ross insiste en que no le molesta la relación entre Rachel y Joey, pero acaba emborrachándose en una cena incómoda a cuatro con ellos y Charlie. Monica y Chandler conocen a una pareja que dio a su hijo en adopción y meten la pata al revelarle al niño que fue adoptado y que Papá Noel no existe.",
    characters: ["Ross", "Rachel", "Joey", "Charlie", "Monica", "Chandler"],
    memorableMoments: [
      "Ross insiste en que está bien con lo de Rachel y Joey mientras se emborracha.",
      "La cena a cuatro se vuelve cada vez más incómoda.",
      "Monica y Chandler le revelan sin querer a un niño que es adoptado y que Papá Noel no existe.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "¡Estoy bien! Oye, ¡estoy genial!" },
      { character: "Rachel", quote: "Cero conciencia de la situación." },
    ],
  },
  {
    season: 10,
    episode: 3,
    titleEn: "The One with Ross' Tan",
    titleEs: "El del bronceado de Ross",
    synopsis:
      "Ross se hace un bronceado artificial en spray que sale fatal, con un color desigual y manchado. Rachel y Joey intentan dar el paso a la intimidad como pareja, pero tras varios contratiempos incómodos deciden que es mejor seguir siendo solo amigos.",
    characters: ["Ross", "Rachel", "Joey", "Chandler"],
    memorableMoments: [
      "Ross se hace un bronceado en spray que le queda espantoso y desigual.",
      "Rachel y Joey intentan tener intimidad por primera vez como pareja.",
      "Tras varios tropiezos, Rachel y Joey deciden que prefieren seguir siendo amigos.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¿Cómo será no vivir paralizado por el miedo?" },
      { character: "Ross", quote: "Dos... creo que fueron dos pasadas." },
    ],
  },
  {
    season: 10,
    episode: 4,
    titleEn: "The One with the Cake",
    titleEs: "El de la tarta",
    synopsis:
      "El grupo tiene problemas para reunirse en el cumpleaños de Emma por compromisos que se solapan. Rachel descubre que la tarta de cumpleaños tiene una imagen inapropiada y corre a cambiarla antes de que empiece la fiesta.",
    characters: ["Rachel", "Ross", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Varios amigos casi se pierden el cumpleaños de Emma por compromisos cruzados.",
      "Rachel descubre que la tarta tiene una imagen inapropiada.",
      "Rachel corre a última hora a conseguir una tarta nueva.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "¡Es para sus amigas buenorras!" },
      { character: "Chandler", quote: "Estamos en el año 2020. ¿Sigues disfrutando de tu siesta?" },
    ],
  },
  {
    season: 10,
    episode: 5,
    titleEn: "The One Where Rachel's Sister Babysits",
    titleEs: "El de cuando la hermana de Rachel cuida de Emma",
    synopsis:
      "Amy, la hermana de Rachel, se ofrece a cuidar de Emma y acaba haciéndole agujeros en las orejas sin permiso. Mike le propone matrimonio a Phoebe en un restaurante, y la carta de recomendación exageradamente florida que escribe Joey termina convenciendo a la agencia de adopción.",
    characters: ["Amy", "Rachel", "Monica", "Chandler", "Mike", "Phoebe", "Joey"],
    memorableMoments: [
      "Amy cuida de Emma y le perfora las orejas sin permiso de Rachel.",
      "Mike le propone matrimonio a Phoebe en un restaurante.",
      "La carta de recomendación de Joey, escrita de forma extravagante, convence a la agencia de adopción.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "Son húmedos y atractivos Homo sapiens con bombas aórticas de tamaño completo.",
      },
      { character: "Monica", quote: "Joey, no creo que podamos usar esto." },
    ],
  },
  {
    season: 10,
    episode: 6,
    titleEn: "The One with Ross's Grant",
    titleEs: "El de la beca de Ross",
    synopsis:
      "Ross se presenta a una beca de paleontología, pero la pierde porque el exnovio de Charlie sabotea su entrevista. Charlie termina volviendo con ese mismo exnovio, poniendo fin a su relación con Ross.",
    characters: ["Ross", "Charlie"],
    memorableMoments: [
      "Ross se presenta a una beca de paleontología muy importante para él.",
      "El exnovio de Charlie sabotea la entrevista de Ross.",
      "Charlie rompe con Ross para volver con su exnovio.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Tu nuevo novio está bien jodido." },
    ],
  },
  {
    season: 10,
    episode: 7,
    titleEn: "The One with the Home Study",
    titleEs: "El de la entrevista de adopción",
    synopsis:
      "Monica y Chandler temen que la persona de la agencia de adopción que hace la entrevista de evaluación (con quien Joey había salido antes) los rechace por algo del pasado. Phoebe y Mike deciden casarse en el ayuntamiento para poder donar el dinero de la boda a caridad.",
    characters: ["Monica", "Chandler", "Joey", "Phoebe", "Mike"],
    memorableMoments: [
      "La entrevistadora de la agencia de adopción resulta ser una antigua cita de Joey.",
      "Monica y Chandler temen que eso arruine su proceso de adopción.",
      "Phoebe y Mike deciden casarse en el ayuntamiento y donar el dinero de la boda.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "Queremos a los niños la cantidad adecuada... la que permite la ley." },
    ],
  },
  {
    season: 10,
    episode: 8,
    titleEn: "The One with the Late Thanksgiving",
    titleEs: "El del día de Acción de Gracias tarde",
    synopsis:
      "Monica y Chandler se niegan al principio a organizar la cena de Acción de Gracias, pero ceden cuando todos aparecen igualmente en su puerta con mucho retraso. Esa misma noche reciben la noticia de que una mujer de Ohio los ha elegido para adoptar a su bebé.",
    characters: ["Monica", "Chandler", "Ross", "Rachel", "Joey", "Phoebe"],
    memorableMoments: [
      "Monica y Chandler se niegan a organizar la cena, pero todos llegan tarde a su casa de todas formas.",
      "La cena de Acción de Gracias termina celebrándose igualmente en su apartamento.",
      "Monica y Chandler reciben la noticia de que van a poder adoptar a un bebé.",
    ],
    memorableQuotes: [
      { character: "Monica", quote: "¡Vamos a tener un bebé!" },
    ],
  },
  {
    season: 10,
    episode: 9,
    titleEn: "The One with the Birth Mother",
    titleEs: "El de la madre biológica",
    synopsis:
      "Monica y Chandler viajan a Ohio a conocer a Erica, la madre biológica que ha elegido darles a su bebé en adopción, y al principio le mienten sobre sus profesiones para parecer más presentables. Chandler acaba confesando la verdad, y Erica decide aceptarlos igualmente como padres adoptivos.",
    characters: ["Monica", "Chandler", "Erica"],
    memorableMoments: [
      "Monica y Chandler mienten a Erica sobre sus profesiones al conocerla.",
      "Chandler confiesa la verdad y le suplica a Erica que no les retire la adopción.",
      "Erica decide igualmente que Monica y Chandler sean los padres de su bebé.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote:
          "Mi mujer es una mujer increíble. Cariñosa, entregada... Me mata no poder darle un bebé. Ella ya es madre... sin un bebé. Por favor.",
      },
      { character: "Monica", quote: "¡Dios te bendiga, Chandler Bing!" },
    ],
  },
  {
    season: 10,
    episode: 10,
    titleEn: "The One Where Chandler Gets Caught",
    titleEs: "El de cuando pillan a Chandler",
    synopsis:
      "Rachel y Phoebe sospechan que Chandler les es infiel a Monica al verlo entrar en una casa de las afueras con otra mujer. En realidad se trata de su agente inmobiliaria: Monica y Chandler acaban de comprar una casa.",
    characters: ["Rachel", "Phoebe", "Chandler", "Monica"],
    memorableMoments: [
      "Rachel y Phoebe siguen a Chandler creyendo que les está siendo infiel a Monica.",
      "Descubren que la mujer misteriosa es en realidad su agente inmobiliaria.",
      "Se revela que Monica y Chandler han comprado una casa en las afueras.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "¡Yo quiero chicas sobre pan!" },
      { character: "Monica", quote: "¡Estoy devastada, obviamente!" },
    ],
  },
  {
    season: 10,
    episode: 11,
    titleEn: "The One Where the Stripper Cries",
    titleEs: "El del estríper que llora",
    synopsis:
      "Monica y Rachel contratan a un estríper para la despedida de soltera de Phoebe, pero este se echa a llorar cuando lo insultan. Ross y Chandler recuerdan su reencuentro universitario y descubren que ambos rompieron, cada uno por su lado, el pacto de no salir con la misma chica.",
    characters: ["Monica", "Rachel", "Phoebe", "Ross", "Chandler"],
    memorableMoments: [
      "El estríper contratado para la despedida de Phoebe rompe a llorar tras ser insultado.",
      "Ross y Chandler recuerdan un viejo pacto sobre no salir con la misma chica.",
      "Ambos descubren que los dos rompieron el pacto en su día, sin saberlo el otro.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Han pasado dieciséis años, pero las comillas con los dedos siguen doliendo." },
    ],
  },
  {
    season: 10,
    episode: 12,
    titleEn: "The One with Phoebe's Wedding",
    titleEs: "El de la boda de Phoebe",
    synopsis:
      "Phoebe despide a Monica como organizadora de su boda, pero la recontrata cuando una tormenta de nieve amenaza con arruinar el evento. La boda se celebra igualmente al aire libre, en plena nevada, con Joey de oficiante y Chandler entregando a la novia en el altar.",
    characters: ["Phoebe", "Monica", "Mike", "Joey", "Chandler"],
    memorableMoments: [
      "Phoebe despide a Monica como organizadora de la boda por el estrés de los preparativos.",
      "Una tormenta de nieve amenaza con arruinar la boda al aire libre.",
      "La boda se celebra en la nieve, con Joey oficiando y Chandler entregando a la novia.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "Es como aquello del equipo de patinaje artístico otra vez." },
    ],
  },
  {
    season: 10,
    episode: 13,
    titleEn: "The One Where Joey Speaks French",
    titleEs: "El de cuando Joey habla francés",
    synopsis:
      "Phoebe intenta enseñarle francés a Joey para un papel en una obra de teatro, sin mucho éxito. Al padre de Rachel le da un infarto y Ross la acompaña a Long Island, pero rechaza su ofrecimiento de 'sexo de consuelo', lo que termina generando tensión entre ambos.",
    characters: ["Phoebe", "Joey", "Rachel", "Ross"],
    memorableMoments: [
      "Phoebe intenta, sin mucho éxito, enseñarle francés a Joey para un papel.",
      "El padre de Rachel sufre un infarto y Ross la acompaña a verlo.",
      "Ross rechaza el ofrecimiento de 'sexo de consuelo' de Rachel, y luego ambos acaban discutiendo por ello igualmente.",
    ],
    memorableQuotes: [
      {
        character: "Rachel",
        quote: "En el futuro, cuando una chica te pida un sexo de consuelo poco recomendable... hazlo sin más.",
      },
      { character: "Ross", quote: "A partir de ahora, el sexo entre nosotros queda descartado." },
    ],
  },
  {
    season: 10,
    episode: 14,
    titleEn: "The One with Princess Consuela",
    titleEs: "El de la princesa Consuela",
    synopsis:
      "Rachel pierde su trabajo en Ralph Lauren cuando su jefe descubre que fue a una entrevista en Gucci, y recibe una oferta de Louis Vuitton en París, aunque al principio recupera su antiguo puesto. Phoebe cambia legalmente su nombre a 'Princess Consuela Bananahammock' antes de decidirse por Phoebe Buffay-Hannigan.",
    characters: ["Rachel", "Phoebe", "Mike"],
    memorableMoments: [
      "Rachel pierde su trabajo en Ralph Lauren por haber ido a una entrevista en la competencia.",
      "Rachel recibe una oferta de trabajo de Louis Vuitton en París.",
      "Phoebe cambia legalmente su nombre a 'Princess Consuela Bananahammock'.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "Mi nombre es Princess Consuela Bananahammock." },
    ],
  },
  {
    season: 10,
    episode: 15,
    titleEn: "The One Where Estelle Dies",
    titleEs: "El de cuando muere Estelle",
    synopsis:
      "Muere Estelle, la representante de Joey, y el grupo decide ocultárselo al principio para no disgustarlo en un momento ya complicado para él. Monica y Chandler descubren que Janice quiere comprar la casa de al lado de la suya. Ross convence a Rachel de que acepte la oportunidad de trabajo en París.",
    characters: ["Joey", "Phoebe", "Monica", "Chandler", "Janice", "Ross", "Rachel"],
    memorableMoments: [
      "Estelle, la representante de Joey, muere y el grupo se lo oculta al principio.",
      "Monica y Chandler descubren que Janice quiere ser su vecina.",
      "Ross anima a Rachel a aceptar el puesto de trabajo en París.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "Gracias por venir. Estamos aquí para rendir homenaje a una agente maravillosa, y a una mujer hermosa.",
      },
    ],
  },
  {
    season: 10,
    episode: 16,
    titleEn: "The One with Rachel's Going Away Party",
    titleEs: "El de la fiesta de despedida de Rachel",
    synopsis:
      "El grupo le organiza a Rachel una fiesta de despedida antes de su mudanza a París, pero ella evita despedirse de Ross durante la fiesta. Cuando él se lo reprocha, Rachel le confiesa que es precisamente porque significa más para ella que los demás, y ambos acaban besándose y pasando la noche juntos. Esa misma noche, Erica se pone de parto y Monica y Chandler corren al hospital.",
    characters: ["Rachel", "Ross", "Monica", "Chandler", "Erica", "Phoebe", "Joey"],
    memorableMoments: [
      "Rachel evita despedirse de Ross durante su propia fiesta de despedida.",
      "Rachel le confiesa a Ross que significa más para ella que el resto del grupo.",
      "Ross y Rachel se besan y acaban pasando la noche juntos.",
      "Erica se pone de parto esa misma noche.",
    ],
    memorableQuotes: [
      {
        character: "Rachel",
        quote: "No puedo ni empezar a explicarte cuánto te voy a echar de menos.",
      },
    ],
  },
  {
    season: 10,
    episode: 17,
    titleEn: "The Last One (Part 1)",
    titleEs: "El último (1ª parte)",
    synopsis:
      "Erica da a luz a gemelos, Jack y Erica, a quienes Monica y Chandler adoptan. Rachel, tras pasar la noche con Ross, se prepara igualmente para viajar a París, dejando a todos, y en especial a Ross, con el corazón roto por la despedida inminente.",
    characters: ["Erica", "Monica", "Chandler", "Rachel", "Ross", "Phoebe", "Joey"],
    memorableMoments: [
      "Erica da a luz a gemelos: Jack y Erica.",
      "Monica y Chandler se convierten por fin en padres.",
      "Rachel se prepara para viajar a París pese a lo ocurrido con Ross.",
    ],
    memorableQuotes: [
      { character: "Ross", quote: "Esto es todo. A menos que estemos en un descanso." },
    ],
  },
  {
    season: 10,
    episode: 18,
    titleEn: "The Last One (Part 2)",
    titleEs: "El último (2ª parte)",
    synopsis:
      "Rachel sube al avión hacia París, pero llama a Ross desde el propio vuelo para confesarle que lo quiere; la llamada se corta antes de que él pueda responder. Ross corre al aeropuerto y, finalmente, Rachel se baja del avión para quedarse con él. La serie termina con los seis amigos dejando las llaves del apartamento de Monica y tomando un último café juntos en Central Perk.",
    characters: ["Rachel", "Ross", "Monica", "Chandler", "Phoebe", "Joey"],
    memorableMoments: [
      "Rachel llama a Ross desde el avión para confesarle que lo quiere, y la llamada se corta.",
      "Ross corre a intentar detenerla, sin conseguirlo a tiempo.",
      "Rachel se baja del avión y vuelve con Ross.",
      "El grupo deja las llaves del apartamento de Monica por última vez.",
      "Los seis amigos toman un último café juntos en Central Perk.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "Me bajé del avión." },
    ],
  },
];
