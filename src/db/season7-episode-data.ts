import type { EpisodeInput } from "@/lib/dal/episodes";

/**
 * Datos de referencia (sinopsis, personajes, momentos y frases memorables)
 * de los 24 episodios de la temporada 7 de Friends, para preparar trivia.
 * Fuentes: Wikipedia ("Friends (season 7)"), Wikiquote ("Friends (season 7)")
 * y búsquedas dirigidas por episodio (IMDb Quotes, TV Quotes, TV Tropes,
 * Friends Central Fandom) para las citas.
 */
export const season7EpisodeData: EpisodeInput[] = [
  {
    season: 7,
    episode: 1,
    titleEn: "The One with Monica's Thunder",
    titleEs: "El del protagonismo robado de Monica",
    synopsis:
      "Ross y Rachel se besan delante de todos justo cuando Monica iba a anunciar su compromiso con Chandler, y ella siente que le han robado el protagonismo. El grupo empieza a organizar la boda mientras Chandler tiene problemas de rendimiento en la cama por los nervios, y Phoebe insiste en tocar una canción en la ceremonia pese a las reticencias de todos.",
    characters: ["Monica", "Ross", "Rachel", "Chandler", "Phoebe", "Joey"],
    memorableMoments: [
      "Ross y Rachel se besan justo cuando Monica iba a anunciar su compromiso.",
      "Monica acusa a Ross y Rachel de robarle el protagonismo el día de su compromiso.",
      "Phoebe insiste en tocar una canción en la boda pese a las reticencias del grupo.",
    ],
    memorableQuotes: [
      { character: "Monica", quote: "¡Me estáis robando el protagonismo!" },
    ],
  },
  {
    season: 7,
    episode: 2,
    titleEn: "The One with Rachel's Book",
    titleEs: "El del libro de Rachel",
    synopsis:
      "Monica descubre que sus padres se han gastado los ahorros para su boda en una casa de vacaciones en la playa, mientras Chandler tiene dinero de sobra pero se resiste a gastarlo todo. Joey encuentra la novela erótica que está leyendo Rachel y se obsesiona con leérsela en voz alta a todo el grupo. Phoebe provoca complicaciones al dar masajes en el apartamento de Ross.",
    characters: ["Monica", "Chandler", "Rachel", "Joey", "Phoebe", "Ross"],
    memorableMoments: [
      "Monica descubre que sus padres gastaron el dinero de su boda en una casa de playa.",
      "Joey encuentra la novela erótica de Rachel y la lee en voz alta ante todos.",
      "Phoebe complica la vida de Ross al dar masajes en su apartamento.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote:
          "Zelda miró al deshollinador. Su padre, el vicario... no estaría en casa hasta dentro de varias horas. Le ardían las entrañas de deseo...",
      },
    ],
  },
  {
    season: 7,
    episode: 3,
    titleEn: "The One with Phoebe's Cookies",
    titleEs: "El de las galletas de Phoebe",
    synopsis:
      "Monica está desesperada por conseguir la receta secreta de las galletas de la abuela de Phoebe, pero un incendio en casa de Phoebe destruye el papel donde estaba escrita. Al final resulta que la receta es, en realidad, la que viene impresa en cualquier paquete de pepitas de chocolate Nestlé Toll House. Rachel intenta enseñar a navegar a Joey en su nuevo barco.",
    characters: ["Monica", "Phoebe", "Chandler", "Rachel", "Joey"],
    memorableMoments: [
      "Un incendio destruye la única copia de la receta secreta de la abuela de Phoebe.",
      "Monica se obsesiona días enteros intentando recrear la receta de memoria.",
      "Se descubre que la receta secreta es la que viene impresa en el paquete de pepitas Nestlé Toll House.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote:
          "No puedo creer que me haya pasado dos días intentando averiguar la receta, ¡y la tenía en mi propia alacena todo este tiempo!",
      },
    ],
  },
  {
    season: 7,
    episode: 4,
    titleEn: "The One with Rachel's Assistant",
    titleEs: "El de la ayudante de Rachel",
    synopsis:
      "Rachel tiene que elegir entre dos candidatos para ser su ayudante: uno muy atractivo y otra mucho más cualificada. Joey vuelve a su papel en la telenovela tras su despido. Durante una noche de confesiones, el grupo revela secretos vergonzosos del pasado, incluido uno de Chandler.",
    characters: ["Rachel", "Chandler", "Ross", "Monica", "Joey"],
    memorableMoments: [
      "Rachel debate entre contratar al candidato atractivo o a la candidata más cualificada.",
      "Joey recupera su papel en la telenovela tras haber sido despedido.",
      "El grupo se confiesa secretos vergonzosos unos a otros durante la noche.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "En mi defensa diré que estaba oscuro, ¡y era un chico muy guapo!",
      },
    ],
  },
  {
    season: 7,
    episode: 5,
    titleEn: "The One with the Engagement Picture",
    titleEs: "El de la foto de compromiso",
    synopsis:
      "Chandler es incapaz de sonreír de forma natural para la foto de compromiso que Monica quiere publicar en el periódico, así que ella acaba posando con Joey en su lugar. Joey da a Tag consejos sobre citas. Ross y Phoebe se topan con una pareja que se está divorciando.",
    characters: ["Chandler", "Monica", "Joey", "Phoebe", "Ross"],
    memorableMoments: [
      "Chandler es incapaz de sonreír con naturalidad para la foto de compromiso.",
      "Monica acaba posando con Joey para la foto en lugar de con Chandler.",
      "Ross y Phoebe presencian la discusión de una pareja que se está divorciando.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote:
          "¿Qué le pasa a tu cara? Esta foto debería decir 'Geller y Bing van a casarse', no 'Vecina salva a idiota de morir ahogado'.",
      },
    ],
  },
  {
    season: 7,
    episode: 6,
    titleEn: "The One with the Nap Partners",
    titleEs: "El de los compañeros de siesta",
    synopsis:
      "Joey y Ross se quedan dormidos juntos en el sofá por accidente y descubren que duermen genial como 'compañeros de siesta', para su propia vergüenza. Phoebe y Rachel compiten por ser la dama de honor de Monica. Chandler se encuentra con una ex a la que dejó por su peso, y Monica se lo echa en cara.",
    characters: ["Joey", "Ross", "Phoebe", "Rachel", "Chandler", "Monica"],
    memorableMoments: [
      "Joey y Ross se quedan dormidos juntos en el sofá sin querer.",
      "Ambos descubren avergonzados que duermen mejor como pareja de siesta.",
      "Phoebe y Rachel compiten por el puesto de dama de honor de Monica.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "Ha sido la mejor siesta de mi vida." },
      { character: "Ross", quote: "Vale, sí... ¡ha sido la mejor siesta de la historia!" },
    ],
  },
  {
    season: 7,
    episode: 7,
    titleEn: "The One with Ross' Library Book",
    titleEs: "El del libro de Ross en la biblioteca",
    synopsis:
      "Ross descubre que nadie ha sacado jamás su tesis doctoral de la biblioteca, y que el rincón donde se guarda es el lugar favorito de las parejas de estudiantes para enrollarse. Intenta vigilar el libro para que se lo tomen en serio, pero acaba participando él también. Rachel y Phoebe intentan encontrarle pareja a Joey.",
    characters: ["Ross", "Chandler", "Rachel", "Phoebe", "Joey"],
    memorableMoments: [
      "Ross descubre que nadie ha consultado jamás su tesis doctoral en la biblioteca.",
      "El rincón donde se guarda su tesis resulta ser el lugar favorito para enrollarse de los estudiantes.",
      "Ross acaba dejándose llevar por el ambiente en vez de vigilar su libro.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote:
          "Estaba escribiendo nombres en el ordenador de la biblioteca por diversión, y escribí el mío... ¿y sabéis qué apareció? Mi tesis doctoral. Está aquí.",
      },
    ],
  },
  {
    season: 7,
    episode: 8,
    titleEn: "The One Where Chandler Doesn't Like Dogs",
    titleEs: "El de que a Chandler no le gustan los perros",
    synopsis:
      "Phoebe cuela un perro en el apartamento sin que Chandler lo sepa, y él revela que en realidad les tiene miedo a los perros. Ross se obsesiona con nombrar todos los estados de EE.UU. durante la cena de Acción de Gracias. Rachel invita a Tag, que no tiene dónde ir, a la celebración.",
    characters: ["Phoebe", "Chandler", "Ross", "Rachel", "Monica", "Joey"],
    memorableMoments: [
      "Phoebe cuela un perro en el apartamento y Chandler revela que les tiene miedo.",
      "Ross se obsesiona con nombrar los cincuenta estados de EE.UU. durante la cena.",
      "Rachel invita a Tag, que no tenía planes, a la cena de Acción de Gracias.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote:
          "Es un 'moo point'. Es como la opinión de una vaca. No importa. Es 'moo'.",
      },
    ],
  },
  {
    season: 7,
    episode: 9,
    titleEn: "The One with All the Candy",
    titleEs: "El de todos los caramelos",
    synopsis:
      "Monica empieza a hacer caramelos caseros para conocer mejor a sus vecinos, pero estos se vuelven adictos y empiezan a llamarla 'la señora de los caramelos', agotándola. Rachel y Tag intentan que nadie en la oficina descubra su relación. Ross le enseña a Phoebe a montar en bicicleta.",
    characters: ["Monica", "Chandler", "Ross", "Phoebe", "Rachel", "Tag"],
    memorableMoments: [
      "Monica empieza a hacer caramelos caseros para sus vecinos como gesto amable.",
      "Los vecinos se vuelven adictos a los caramelos y la agotan pidiéndole más.",
      "Ross le enseña por fin a Phoebe a montar en bicicleta, algo que nunca aprendió de niña.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote:
          "¡Eh! ¡Silencio! ¿Qué os pasa? Esta mujer solo intentaba ser amable con vosotros.",
      },
    ],
  },
  {
    season: 7,
    episode: 10,
    titleEn: "The One with the Holiday Armadillo",
    titleEs: "El del armadillo navideño",
    synopsis:
      "Ross intenta enseñarle a su hijo Ben lo que es Janucá disfrazado de armadillo navideño, ya que no consiguió ningún otro disfraz a tiempo. Chandler y Joey se apuntan también disfrazados de Santa Claus y Supermán respectivamente, liándolo todo aún más para el pobre Ben.",
    characters: ["Ross", "Chandler", "Joey", "Ben", "Monica"],
    memorableMoments: [
      "Ross se disfraza de armadillo navideño para explicarle a Ben qué es Janucá.",
      "Chandler se une disfrazado de Santa Claus y Joey de Supermán, liando aún más a Ben.",
      "El trío de disfraces intenta explicar entre risas la diferencia entre Janucá y Navidad.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote:
          "Mi parte favorita fue cuando Supermán sacó volando a todos los judíos de Egipto.",
      },
    ],
  },
  {
    season: 7,
    episode: 11,
    titleEn: "The One with All the Cheesecakes",
    titleEs: "El de todos los pasteles de queso",
    synopsis:
      "A Chandler y Rachel les llega por error un delicioso pastel de queso destinado a una vecina, y se vuelven adictos a comerlo directamente del pasillo. Joey se une a ellos con un tenedor siempre a mano. El novio científico de Phoebe la visita brevemente.",
    characters: ["Chandler", "Rachel", "Joey", "Phoebe", "Monica"],
    memorableMoments: [
      "Un pastel de queso destinado a una vecina llega por error a casa de Chandler y Rachel.",
      "Ambos se vuelven adictos y siguen pidiendo más pasteles con la misma excusa.",
      "Joey se une a ellos a comer del pastel directamente en el pasillo, tenedor en mano.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote:
          "No leí la caja antes de abrirla. Y ya no se puede devolver una caja una vez abierta. Porque está deliciosa.",
      },
    ],
  },
  {
    season: 7,
    episode: 12,
    titleEn: "The One Where They're Up All Night",
    titleEs: "El de la noche en vela",
    synopsis:
      "El grupo sube a la azotea a ver pasar un cometa, pero Joey deja a Ross encerrado fuera toda la noche por accidente. La alarma de incendios de Phoebe no para de sonar, Rachel y Tag discuten toda la noche por un contrato de trabajo perdido, y Chandler, sin poder dormir, no deja descansar a Monica.",
    characters: ["Ross", "Joey", "Phoebe", "Rachel", "Tag", "Chandler", "Monica"],
    memorableMoments: [
      "El grupo sube a la azotea para ver el cometa Bapstein-King.",
      "Joey deja a Ross atrapado en la azotea toda la noche por accidente.",
      "Chandler, incapaz de dormir, mantiene despierta a Monica toda la noche.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote:
          "Os traigo a ver el cometa Bapstein-King... uno de los fenómenos más espectaculares de la naturaleza... ¿y a vosotros solo os importan los bichos atrapados en ámbar y una mujer?",
      },
      { character: "Joey", quote: "En realidad son dos mujeres, tío." },
    ],
  },
  {
    season: 7,
    episode: 13,
    titleEn: "The One Where Rosita Dies",
    titleEs: "El de la muerte de Rosita",
    synopsis:
      "Rachel rompe sin querer el sillón reclinable favorito de Joey, apodado Rosita, y tiene que comprarle uno nuevo a escondidas. Chandler, creyendo que él es el culpable, sustituye el sillón por uno idéntico de su antiguo set. Ross y Monica visitan su casa de la infancia, donde una inundación arruinó las cosas de Monica.",
    characters: ["Rachel", "Joey", "Chandler", "Ross", "Monica"],
    memorableMoments: [
      "Rachel rompe por accidente el sillón reclinable favorito de Joey, Rosita.",
      "Chandler sustituye el sillón roto por uno idéntico sin que Joey se entere del cambio.",
      "Joey, al sentarse en el sillón nuevo creyendo que es el mismo, exclama que Rosita 'se ha curado'.",
    ],
    memorableQuotes: [
      { character: "Joey", quote: "¡Se ha curado!" },
    ],
  },
  {
    season: 7,
    episode: 14,
    titleEn: "The One Where They All Turn Thirty",
    titleEs: "El de cuando todos cumplen treinta",
    synopsis:
      "Rachel cumple treinta años y se hunde ante la idea de hacerse mayor, así que el grupo recuerda, mediante flashbacks, cómo vivió cada uno su propio trigésimo cumpleaños. Los cumpleaños de Joey y Chandler resultaron arruinados por la misma ansiedad ante la edad, y Phoebe descubre que en realidad es mayor de lo que creía.",
    characters: ["Rachel", "Monica", "Chandler", "Joey", "Phoebe", "Ross"],
    memorableMoments: [
      "Rachel se hunde el día de su treinta cumpleaños, obsesionada con hacerse mayor.",
      "Se muestran en flashback los treinta cumpleaños, todos desastrosos, del resto del grupo.",
      "Phoebe descubre que en realidad ya es mayor de lo que siempre había creído.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote:
          "Feliz cumpleaños, abuela. Es mejor estar de bajada que enterrada bajo la colina.",
      },
    ],
  },
  {
    season: 7,
    episode: 15,
    titleEn: "The One with Joey's New Brain",
    titleEs: "El del nuevo cerebro de Joey",
    synopsis:
      "El personaje de Joey en su telenovela despierta de un coma con un trasplante de cerebro de otro personaje legendario de la serie, así que Joey visita a la actriz que interpretaba ese papel para prepararse. Ross practica en secreto con la gaita para tocar en la boda de Monica y Chandler, para terror de todos. Rachel y Phoebe compiten por devolverle el móvil a un chico guapo.",
    characters: ["Joey", "Ross", "Rachel", "Phoebe", "Chandler", "Monica"],
    memorableMoments: [
      "El personaje de Joey en su telenovela recibe el cerebro trasplantado de otro personaje.",
      "Ross practica con la gaita para sorprender en la boda, tocando fatal sin que nadie se atreva a decírselo.",
      "Rachel y Phoebe compiten por ser quien devuelva el móvil olvidado de un chico guapo.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Suena como si estuviera intentando tocar 'Celebration' de Kool & the Gang.",
      },
    ],
  },
  {
    season: 7,
    episode: 16,
    titleEn: "The One with the Truth About London",
    titleEs: "El de la verdad sobre Londres",
    synopsis:
      "Chandler se entera de que, la primera noche que pasaron juntos en Londres, Monica en realidad había ido a su habitación buscando a Joey, no a él, y se lo toma muy mal. Joey le explica que eso solo demuestra que, aunque lo quiso a él durante quince minutos, a Chandler lo quiere para el resto de su vida. Joey además se ordena ministro por internet para poder oficiar la boda.",
    characters: ["Chandler", "Monica", "Joey", "Ross", "Rachel"],
    memorableMoments: [
      "Chandler descubre que Monica fue a su habitación en Londres buscando en realidad a Joey.",
      "Joey convence a Chandler de que eso demuestra lo mucho que Monica lo quiere a él de verdad.",
      "Joey se ordena ministro religioso por internet para poder oficiar la boda de sus amigos.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote:
          "¡Vamos a tener un miembro legítimo del clero! Y cuando digo legítimo, quiero decir gay y con control de su saliva.",
      },
    ],
  },
  {
    season: 7,
    episode: 17,
    titleEn: "The One with the Cheap Wedding Dress",
    titleEs: "El del vestido de novia barato",
    synopsis:
      "Monica consigue un vestido de novia rebajado en un almacén de saldos tras una pelea con otras novias, pero otra mujer, Megan, la chantajea con contratar a la orquesta que Chandler quería para la boda si no le cede el vestido. Joey y Ross compiten por la misma chica.",
    characters: ["Monica", "Rachel", "Phoebe", "Megan", "Joey", "Ross"],
    memorableMoments: [
      "Monica consigue un vestido de novia rebajado tras una pelea física con otras novias en el almacén.",
      "Megan chantajea a Monica con robarle la orquesta de la boda si no le cede el vestido.",
      "Joey y Ross compiten sin darse cuenta por conquistar a la misma mujer.",
    ],
    memorableQuotes: [
      { character: "Monica", quote: "¡Serás bicho!" },
      { character: "Monica", quote: "Puede que sí. Soy bastante peleona." },
    ],
  },
  {
    season: 7,
    episode: 18,
    titleEn: "The One with Joey's Award",
    titleEs: "El del premio de Joey",
    synopsis:
      "Joey está nominado a un Soapie, el premio de las telenovelas, y Rachel es su acompañante en la gala. Aunque no gana, Joey se lleva a casa el premio de otra persona sin darse cuenta de lo que está haciendo. Ross se enfrenta a una alumna que miente para conseguir mejores notas.",
    characters: ["Joey", "Rachel", "Monica", "Ross"],
    memorableMoments: [
      "Joey está nominado a un premio Soapie por su papel en la telenovela.",
      "Joey pierde el premio, pero se lleva a casa el de otra persona sin darse cuenta.",
      "Ross descubre que una alumna le ha estado mintiendo para conseguir mejores notas.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "No, no voy a por un Emmy. Voy a por un Soapie.",
      },
      {
        character: "Joey",
        quote: "Lo acepto en su nombre... como en 'yo lo acepto en su honor'.",
      },
    ],
  },
  {
    season: 7,
    episode: 19,
    titleEn: "The One with Ross and Monica's Cousin",
    titleEs: "El de la prima de Ross y Monica",
    synopsis:
      "Cassie, la atractiva prima de Ross y Monica, se queda unos días con ellos antes de la boda y atrae la atención de varios hombres del grupo. Ross lucha por controlar unos sentimientos inapropiados hacia ella pese a ser familia. Rachel y Phoebe organizan a última hora la despedida de soltera de Monica.",
    characters: ["Ross", "Cassie", "Monica", "Rachel", "Phoebe", "Joey"],
    memorableMoments: [
      "Cassie, la prima de Ross y Monica, llega convertida en una mujer muy atractiva.",
      "Ross lucha por controlar sus sentimientos inapropiados hacia su propia prima.",
      "Rachel y Phoebe improvisan a última hora la despedida de soltera de Monica.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote:
          "Es tu prima. Es tu prima. Si supiera lo que estás pensando, creería que estás enfermo.",
      },
    ],
  },
  {
    season: 7,
    episode: 20,
    titleEn: "The One with Rachel's Big Kiss",
    titleEs: "El del beso de Rachel",
    synopsis:
      "Rachel se reencuentra con una antigua compañera de la hermandad universitaria y recuerdan un beso que se dieron de jóvenes, así que deciden repetirlo con consecuencias inesperadas. Chandler y Ross se pelean por quién se queda el esmoquin de James Bond y quién el de Batman para la boda.",
    characters: ["Rachel", "Chandler", "Ross", "Monica"],
    memorableMoments: [
      "Rachel se reencuentra con una amiga de la universidad y recuerdan un beso de su época de estudiantes.",
      "Ambas deciden repetir el beso, con consecuencias que no esperaban.",
      "Chandler y Ross se pelean por quedarse el esmoquin de James Bond en vez del de Batman.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "No puedes ponerte el esmoquin de Batman. Yo tengo el de James Bond. Me vas a arruinar el momento especial.",
      },
      { character: "Ross", quote: "Te vas a casar con la mujer que amas. Ya es bastante especial." },
    ],
  },
  {
    season: 7,
    episode: 21,
    titleEn: "The One with the Vows",
    titleEs: "El de los votos",
    synopsis:
      "A cuatro semanas de la boda, Monica y Chandler intentan escribir sus votos matrimoniales: Chandler pide ayuda a los chicos y su voto acaba lleno de bromas, mientras que el de Monica resulta profundamente romántico, para disgusto de ella cuando lo descubre. El episodio incluye flashbacks de toda la historia de la pareja.",
    characters: ["Monica", "Chandler", "Ross", "Joey", "Rachel", "Phoebe"],
    memorableMoments: [
      "Chandler pide ayuda a los chicos para escribir sus votos, y el resultado es una sarta de bromas.",
      "Monica descubre horrorizada lo poco serio que es el borrador de voto de Chandler.",
      "Se repasan en flashback momentos clave de toda la relación de Monica y Chandler.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote:
          "Chandler, durante mucho tiempo me pregunté si alguna vez encontraría a mi príncipe, mi alma gemela. Y ahora aquí estamos, con nuestro futuro por delante, y solo quiero pasarlo contigo.",
      },
      {
        character: "Chandler",
        quote:
          "Monica, pensé que esto sería lo más difícil que tendría que hacer nunca. Pero cuando te vi caminar hacia el altar, entendí lo sencillo que era en realidad. Te quiero.",
      },
    ],
  },
  {
    season: 7,
    episode: 22,
    titleEn: "The One with Chandler's Dad",
    titleEs: "El del padre de Chandler",
    synopsis:
      "Monica convence a un Chandler reacio de viajar a Las Vegas para invitar a la boda a su padre, del que está distanciado y que actúa como drag queen en un espectáculo. Rachel, mientras tanto, está furiosa por ser la única amiga a la que Monica no deja conducir el deportivo que le regaló su padre.",
    characters: ["Chandler", "Monica", "Rachel", "Ross"],
    memorableMoments: [
      "Monica convence a Chandler de ir a Las Vegas a invitar a su padre a la boda.",
      "Chandler se reencuentra con su padre, distanciado de él desde hace años, en su espectáculo drag.",
      "Rachel se enfada por ser la única del grupo a quien Monica no deja conducir su deportivo.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote:
          "Vamos a Las Vegas a ver a tu padre. Es hora de que habléis. Y yo quiero conocer a mi suegro.",
      },
    ],
  },
  {
    season: 7,
    episode: 23,
    titleEn: "The One with Monica and Chandler's Wedding (Part 1)",
    titleEs: "El de la boda de Monica y Chandler (1ª parte)",
    synopsis:
      "Joey consigue un papel importante en una película, pero corre el riesgo de perderse la boda por el rodaje. Chandler, presa del pánico ante el compromiso, sale a escondidas a fumar y, sin querer, oye a Phoebe y Rachel hablar de que Monica podría estar embarazada, lo que le hace huir del hotel.",
    characters: ["Joey", "Chandler", "Monica", "Phoebe", "Rachel", "Ross"],
    memorableMoments: [
      "Joey consigue un papel importante en una película justo antes de la boda de sus amigos.",
      "Chandler oye por accidente que Monica podría estar embarazada mientras se esconde para fumar.",
      "Presa del pánico, Chandler desaparece del hotel la noche antes de la boda.",
    ],
    memorableQuotes: [
      {
        character: "Phoebe",
        quote: "¿Por qué jugarías al escondite con alguien que sabes que es un fugitivo?",
      },
    ],
  },
  {
    season: 7,
    episode: 24,
    titleEn: "The One with Monica and Chandler's Wedding (Part 2)",
    titleEs: "El de la boda de Monica y Chandler (2ª parte)",
    synopsis:
      "Ross y Phoebe encuentran a Chandler y evitan que siga huyendo; él confiesa que, al ver ropa de bebé en la tienda del hotel, empezó a hacerse a la idea de ser padre. La boda sigue adelante con Joey oficiando, todavía vestido con el traje de época de su rodaje, y termina con la confirmación de que en realidad es Rachel quien está embarazada, no Monica.",
    characters: ["Chandler", "Ross", "Phoebe", "Monica", "Joey", "Rachel"],
    memorableMoments: [
      "Ross y Phoebe encuentran a Chandler y lo convencen de que vuelva a la boda.",
      "Joey oficia la boda todavía con el vestuario de época de su rodaje, sin tiempo de cambiarse.",
      "Al final se revela que la embarazada es Rachel, no Monica, como todos habían asumido.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote:
          "Vi ropa de bebé en la tienda del hotel y... no sé, empecé a pensar que a lo mejor sí podía con esto.",
      },
    ],
  },
];
