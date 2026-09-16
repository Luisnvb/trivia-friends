/**
 * Preguntas de trivia de la Temporada 7 de Friends (24 episodios, 6 por
 * episodio = 144 preguntas). Generadas a partir de la sinopsis de Wikipedia
 * ("Friends (season 7)" y "The One with Monica and Chandler's Wedding"),
 * siguiendo el mismo patrón que `season1-trivia-data.ts` a
 * `season6-trivia-data.ts`. Insertadas por `seed-season7.ts`.
 */

export type Season7TriviaSeed = {
  episode: number;
  difficulty: "easy" | "medium" | "hard";
  text: string;
  options: { text: string; isCorrect: boolean }[];
};

function opt(text: string, isCorrect = false) {
  return { text, isCorrect };
}

export const season7TriviaData: Season7TriviaSeed[] = [
  // Episodio 1 — The One with Monica's Thunder
  {
    episode: 1,
    difficulty: "easy",
    text: "¿Por qué se enfada Monica con Ross y Rachel al principio de este episodio?",
    options: [
      opt("Porque se besan en su fiesta de compromiso, robándole protagonismo", true),
      opt("Porque llegan tarde a la fiesta"),
      opt("Porque olvidan el regalo de compromiso"),
      opt("Porque anuncian su propio compromiso ese día"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Qué tipo de fiesta está celebrando Monica cuando ocurre el incidente?",
    options: [
      opt("Su fiesta de compromiso", true),
      opt("Su despedida de soltera"),
      opt("Una cena de ensayo de la boda"),
      opt("Una fiesta sorpresa de cumpleaños"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Cómo se enteran los demás del beso entre Ross y Rachel?",
    options: [
      opt("Alguien los ve y lo cuenta", true),
      opt("Lo confiesan ellos mismos ante todos"),
      opt("Sale en una foto de la fiesta"),
      opt("Lo escuchan por accidente en el balcón"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Cómo reacciona el grupo ante la noticia del beso de Ross y Rachel?",
    options: [
      opt("Se emocionan mucho, eclipsando el compromiso de Monica", true),
      opt("Les resulta indiferente"),
      opt("Se enfadan con ellos dos"),
      opt("Deciden no hablar del tema en toda la noche"),
    ],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Qué le pide Monica a Ross y Rachel tras el incidente?",
    options: [
      opt("Que no vuelvan a mencionar el beso ni le quiten protagonismo", true),
      opt("Que se disculpen públicamente"),
      opt("Que no asistan a la boda"),
      opt("Que confirmen si están juntos de verdad"),
    ],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿En qué punto de su relación estaban Ross y Rachel cuando se besan en este episodio?",
    options: [
      opt("Sin estar juntos oficialmente, con la tensión sin resolver", true),
      opt("Recién casados de nuevo"),
      opt("En pleno proceso de divorcio firmado"),
      opt("Comprometidos en secreto"),
    ],
  },

  // Episodio 2 — The One with Rachel's Book
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Qué le pasa al fondo ahorrado para la boda de Monica y Chandler en este episodio?",
    options: [
      opt("Se agota por los gastos de Monica", true),
      opt("Lo pierden en una mala inversión"),
      opt("Se lo roban"),
      opt("Lo donan por error a una ONG"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué ofrece Chandler al descubrir que el dinero de la boda se ha acabado?",
    options: [
      opt("Sus propios ahorros", true),
      opt("Pedir un préstamo a sus padres"),
      opt("Cancelar la boda grande y fugarse"),
      opt("Vender su apartamento"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿A qué se dedica Phoebe temporalmente en el apartamento de Ross en este episodio?",
    options: [
      opt("A darle masajes como clienta habitual", true),
      opt("A ser su compañera de piso"),
      opt("A cuidar de Ben"),
      opt("A ayudarle a mudarse"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué libro ha estado leyendo Rachel durante años sin terminar, dando pie al título del episodio?",
    options: [
      opt("Historia de dos ciudades", true),
      opt("Orgullo y prejuicio"),
      opt("Matar a un ruiseñor"),
      opt("Cumbres Borrascosas"),
    ],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Qué error comete Rachel respecto a ese libro que también está leyendo Joey?",
    options: [
      opt("Le desvela el final sin querer", true),
      opt("Le presta un ejemplar con anotaciones ajenas"),
      opt("Le dice que el autor es otro"),
      opt("Confunde el libro con otro distinto"),
    ],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Cómo se siente Joey al enterarse del final del libro antes de tiempo?",
    options: [
      opt("Muy disgustado con Rachel", true),
      opt("Aliviado de no tener que terminarlo"),
      opt("Indiferente"),
      opt("Agradecido por ahorrarse tiempo"),
    ],
  },

  // Episodio 3 — The One with Phoebe's Cookies
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Qué intenta recrear Monica de forma obsesiva en este episodio?",
    options: [
      opt("La receta secreta de galletas de su abuela", true),
      opt("El menú de su primera cena con Chandler"),
      opt("Una tarta de su infancia"),
      opt("El pastel de bodas de sus padres"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué hace Rachel para ayudar a Joey en este episodio?",
    options: [
      opt("Enseñarle a navegar en barco", true),
      opt("Enseñarle a cocinar"),
      opt("Ayudarle a estudiar un guion"),
      opt("Enseñarle a bailar"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué descubre Rachel sobre sí misma mientras enseña a Joey?",
    options: [
      opt("Que se vuelve muy dura y grosera como instructora", true),
      opt("Que en realidad no sabe navegar"),
      opt("Que le da miedo el agua"),
      opt("Que prefiere que Ross se lo enseñe a él"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Por qué la receta de la abuela de Monica es tan difícil de recrear?",
    options: [
      opt("Porque falta un ingrediente secreto no especificado", true),
      opt("Porque está escrita en otro idioma"),
      opt("Porque falta la mitad de la receta"),
      opt("Porque usa medidas antiguas imposibles de traducir"),
    ],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿A quién recurre Monica buscando ayuda para descifrar la receta de las galletas?",
    options: [
      opt("A un experto/laboratorio para analizar los ingredientes", true),
      opt("A un familiar lejano"),
      opt("A un famoso chef"),
      opt("A una vecina anciana"),
    ],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Cómo termina reaccionando Joey a las lecciones de vela de Rachel?",
    options: [
      opt("Se harta de sus malos modos como profesora", true),
      opt("Le pide que sea su profesora permanente"),
      opt("Se enamora de la navegación"),
      opt("Abandona antes de la primera clase"),
    ],
  },

  // Episodio 4 — The One with Rachel's Assistant
  {
    episode: 4,
    difficulty: "easy",
    text: "¿Cómo se llama el nuevo ayudante que contrata Rachel en este episodio?",
    options: [opt("Tag", true), opt("Josh"), opt("Danny"), opt("Kyle")],
  },
  {
    episode: 4,
    difficulty: "easy",
    text: "¿Qué recupera Joey en este episodio, para su alegría?",
    options: [
      opt("Su antiguo papel en la telenovela", true),
      opt("Su apartamento anterior"),
      opt("Su antiguo agente"),
      opt("Su papel de butt double"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué rasgo de Tag hace que todo el grupo comente algo al conocerlo?",
    options: [
      opt("Que es muy atractivo físicamente", true),
      opt("Que es extremadamente torpe"),
      opt("Que habla varios idiomas"),
      opt("Que ya conoce a Ross de antes"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué personaje interpretaba Joey en la telenovela que recupera?",
    options: [
      opt("Al Dr. Drake Ramoray", true),
      opt("A un abogado corrupto"),
      opt("A un policía encubierto"),
      opt("A un gemelo malvado"),
    ],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Qué hace especial la contratación de Tag para Rachel a nivel profesional en ese momento?",
    options: [
      opt("Es su primer ayudante personal en el trabajo", true),
      opt("Es un ascenso a jefa de departamento"),
      opt("Es su primer empleado en una empresa propia"),
      opt("Sustituye a un ayudante despedido por ella"),
    ],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Qué actitud intenta mantener Rachel con Tag al principio, a pesar de la atracción que genera?",
    options: [
      opt("Una actitud estrictamente profesional", true),
      opt("Ignorarlo por completo"),
      opt("Ser su mejor amiga desde el primer día"),
      opt("Pedirle una cita de inmediato"),
    ],
  },

  // Episodio 5 — The One with the Engagement Picture
  {
    episode: 5,
    difficulty: "easy",
    text: "¿Qué problema tiene Chandler en este episodio con las fotos de compromiso?",
    options: [
      opt("No consigue sonreír de forma natural", true),
      opt("Siempre sale con los ojos cerrados"),
      opt("Se niega a hacerse fotos"),
      opt("Rompe la cámara accidentalmente"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué le enseña Joey a Tag en este episodio?",
    options: [
      opt("Trucos y consejos para ligar", true),
      opt("A actuar para telenovelas"),
      opt("A cocinar pasta"),
      opt("A jugar al póker"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Cómo describen los demás la sonrisa forzada de Chandler en las fotos?",
    options: [
      opt("Como rara o poco natural", true),
      opt("Como perfecta"),
      opt("Como demasiado seria"),
      opt("Como idéntica a la de Ross"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Quién insiste más en conseguir la foto de compromiso perfecta?",
    options: [
      opt("Monica", true),
      opt("Rachel"),
      opt("Phoebe"),
      opt("Chandler"),
    ],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué estrategia prueban para conseguir que Chandler sonría de forma natural?",
    options: [
      opt("Hacerle bromas o distraerlo justo antes de la foto", true),
      opt("Darle alcohol antes de la sesión"),
      opt("Hacer la foto mientras duerme"),
      opt("Usar una foto antigua y editarla"),
    ],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué tipo de consejos de ligoteo le da Joey a Tag principalmente?",
    options: [
      opt("Frases y trucos que a Joey le funcionan con mujeres", true),
      opt("Consejos sobre cómo vestir para trabajar"),
      opt("Cómo comportarse con Rachel en la oficina"),
      opt("Cómo pedir un aumento de sueldo"),
    ],
  },

  // Episodio 6 — The One with the Nap Partners
  {
    episode: 6,
    difficulty: "easy",
    text: "¿Qué descubren Joey y Ross que disfrutan haciendo juntos en este episodio?",
    options: [
      opt("Echarse la siesta juntos", true),
      opt("Ver telenovelas juntos"),
      opt("Cocinar juntos"),
      opt("Hacer ejercicio juntos"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Por qué compiten Phoebe y Rachel en este episodio?",
    options: [
      opt("Por ser la dama de honor de Monica", true),
      opt("Por un mismo puesto de trabajo"),
      opt("Por la atención de un chico"),
      opt("Por organizar la despedida de soltera"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Cómo reacciona el resto del grupo al ver a Joey y Ross durmiendo juntos la siesta?",
    options: [
      opt("Les parece raro y se burlan un poco", true),
      opt("Les parece completamente normal"),
      opt("Se unen también a la siesta"),
      opt("Se preocupan por su salud"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿A qué acuerdan llamarse Joey y Ross el uno al otro tras descubrir su afición compartida?",
    options: [
      opt('"Compañeros de siesta"', true),
      opt('"Hermanos de sofá"'),
      opt('"Socios del sueño"'),
      opt('"Reyes de la almohada"'),
    ],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Cómo intenta Monica resolver la competencia entre Phoebe y Rachel por ser su dama de honor?",
    options: [
      opt("Proponiendo que ambas compartan el papel", true),
      opt("Eligiendo a una y descartando a la otra sin más"),
      opt("Pidiendo a Ross que decida por ella"),
      opt("Cancelando la idea de tener dama de honor"),
    ],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué actividad concreta convierten Joey y Ross en un ritual además de dormir la siesta?",
    options: [
      opt("Ver la misma película antes de dormir", true),
      opt("Comer palomitas mientras duermen"),
      opt("Ponerse pijamas a juego"),
      opt("Turnarse para elegir el sofá"),
    ],
  },

  // Episodio 7 — The One with Ross' Library Book
  {
    episode: 7,
    difficulty: "easy",
    text: "¿Qué intenta proteger Ross en este episodio?",
    options: [
      opt("Su tesis doctoral, guardada en la biblioteca", true),
      opt("Su oficina en el museo"),
      opt("Su colección de cómics"),
      opt("Su relación con Rachel"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Para qué usan los estudiantes el pasillo donde se guarda la tesis de Ross?",
    options: [
      opt("Para enrollarse en privado", true),
      opt("Para estudiar en silencio"),
      opt("Para dormir la siesta"),
      opt("Para hacer fiestas nocturnas"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué acaba haciendo Ross para vigilar ese pasillo de la biblioteca?",
    options: [
      opt("Montar guardia él mismo en persona", true),
      opt("Contratar a un vigilante"),
      opt("Instalar una cámara"),
      opt("Pedir que cierren el pasillo"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Por qué le importa tanto a Ross el estado de su tesis en la biblioteca?",
    options: [
      opt("Le preocupa que se dañe o se pierda por el mal uso del pasillo", true),
      opt("Quiere venderla como libro"),
      opt("La necesita para dar una conferencia"),
      opt("Se la van a retirar de la biblioteca"),
    ],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Con quién tiene un encuentro Ross durante su vigilancia en la biblioteca?",
    options: [
      opt("Con una joven pareja de estudiantes a la que interrumpe", true),
      opt("Con su antiguo profesor de universidad"),
      opt("Con Carol y Susan"),
      opt("Con Emily"),
    ],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Cómo se toman los estudiantes que Ross intente impedirles usar el pasillo?",
    options: [
      opt("Se resisten y siguen encontrando la forma de usarlo", true),
      opt("Dejan de ir inmediatamente"),
      opt("Se disculpan y no vuelven"),
      opt("Reportan a Ross a la universidad"),
    ],
  },

  // Episodio 8 — The One Where Chandler Doesn't Like Dogs
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Qué esconde Phoebe en el apartamento en este episodio?",
    options: [
      opt("Un perro", true),
      opt("Un gato"),
      opt("Un conejo"),
      opt("Un pájaro"),
    ],
  },
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Qué revela Chandler sobre sí mismo en este episodio?",
    options: [
      opt("Que no le gustan los perros", true),
      opt("Que es alérgico a los gatos"),
      opt("Que tuvo un perro de pequeño"),
      opt("Que le teme a los animales en general"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Por qué está prohibido tener perros en el edificio de Monica y Chandler?",
    options: [
      opt("Por las normas del edificio", true),
      opt("Porque Chandler es alérgico"),
      opt("Porque ya tienen otra mascota"),
      opt("Porque el piso es demasiado pequeño"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué historia comparte Chandler para explicar su rechazo a los perros?",
    options: [
      opt("Una anécdota incómoda de su infancia", true),
      opt("Que le mordió un perro de adulto"),
      opt("Que un perro rompió algo valioso suyo"),
      opt("Que su ex novia prefería los perros a él"),
    ],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Cómo intenta Phoebe mantener oculto al perro del resto del grupo?",
    options: [
      opt("Escondiéndolo cada vez que alguien puede descubrirlo", true),
      opt("Dejándolo con Rachel todo el tiempo"),
      opt("Sacándolo solo de noche"),
      opt("Disfrazándolo de otro animal"),
    ],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Qué actitud termina teniendo Chandler hacia el perro de Phoebe al final del episodio?",
    options: [
      opt("Se suaviza un poco respecto a su rechazo inicial", true),
      opt("Lo odia todavía más que al principio"),
      opt("Le exige que lo devuelva de inmediato"),
      opt("Se ofrece a quedárselo él mismo"),
    ],
  },

  // Episodio 9 — The One with All the Candy
  {
    episode: 9,
    difficulty: "easy",
    text: "¿Qué prepara Monica en grandes cantidades para conocer a sus nuevos vecinos?",
    options: [
      opt("Dulces y caramelos caseros", true),
      opt("Galletas"),
      opt("Tartas"),
      opt("Bombones artesanales"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué le ocurre a Monica por el exceso de trabajo preparando dulces para los vecinos?",
    options: [
      opt("Se agota física y emocionalmente", true),
      opt("Se quema al cocinar"),
      opt("Se queda sin dinero"),
      opt("Discute con Chandler por el desorden"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué aprende a hacer Phoebe por primera vez en este episodio?",
    options: [
      opt("Montar en bicicleta", true),
      opt("Nadar"),
      opt("Conducir"),
      opt("Patinar"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Por qué nunca había aprendido Phoebe esa habilidad de pequeña?",
    options: [
      opt("Por las dificultades de su infancia", true),
      opt("Porque le daba miedo caerse"),
      opt("Porque vivía en una ciudad sin espacio para ello"),
      opt("Porque nadie se ofreció nunca a enseñarle hasta ahora"),
    ],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Con qué objetivo concreto reparte Monica los dulces por el vecindario?",
    options: [
      opt("Para hacerse popular y caer bien a los vecinos", true),
      opt("Para venderlos y ganar dinero"),
      opt("Para practicar antes de un concurso"),
      opt("Para agradecerles una ayuda previa"),
    ],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Quién ayuda a Phoebe a aprender a montar en bicicleta en este episodio?",
    options: [
      opt("Joey", true),
      opt("Ross"),
      opt("Chandler"),
      opt("Rachel"),
    ],
  },

  // Episodio 10 — The One with the Holiday Armadillo
  {
    episode: 10,
    difficulty: "easy",
    text: "¿De qué se disfraza Ross para enseñarle a Ben sobre Janucá?",
    options: [
      opt("De armadillo navideño", true),
      opt("De Santa Claus"),
      opt("De un rabino"),
      opt("De reno"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Por qué se disfraza de armadillo en vez de otra cosa?",
    options: [
      opt("Porque no consigue un disfraz de Santa Claus a tiempo", true),
      opt("Porque a Ben le gustan más los armadillos"),
      opt("Porque es lo único disponible en la tienda navideña"),
      opt("Porque Chandler se lo sugiere como broma"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿De qué se disfraza Chandler para unirse a la escena con Ben?",
    options: [
      opt("De Santa Claus", true),
      opt("De Superman"),
      opt("De un elfo"),
      opt("De Rudolph, el reno"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿De qué se disfraza Joey para unirse también a la celebración con Ben?",
    options: [
      opt("De Superman", true),
      opt("De Spiderman"),
      opt("De Batman"),
      opt("De un soldado"),
    ],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué festividad intenta explicarle Ross a Ben usando el disfraz de armadillo?",
    options: [
      opt("Janucá", true),
      opt("La Navidad"),
      opt("El Año Nuevo"),
      opt("Acción de Gracias"),
    ],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Por qué le cuesta tanto a Ross competir con la idea de Santa Claus que tiene Ben?",
    options: [
      opt("Porque Ben ya está fascinado con la Navidad de la familia de Susan y Carol", true),
      opt("Porque Ben no cree en fiestas religiosas"),
      opt("Porque Carol prohíbe mencionar Janucá"),
      opt("Porque Ben confunde a Ross con otro familiar"),
    ],
  },

  // Episodio 11 — The One with All the Cheesecakes
  {
    episode: 11,
    difficulty: "easy",
    text: "¿A qué se vuelven adictos Rachel y Chandler en este episodio?",
    options: [
      opt("A unas tartas de queso que reciben por error", true),
      opt("A un tipo de café nuevo"),
      opt("A un restaurante de comida rápida"),
      opt("A un programa de televisión"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Por qué empiezan a recibir esas tartas de queso Rachel y Chandler?",
    options: [
      opt("Por un error de reparto de un restaurante para otro vecino", true),
      opt("Porque las piden ellos mismos a diario"),
      opt("Porque son un regalo de un admirador"),
      opt("Porque las ganan en un concurso"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué hacen Rachel y Chandler cuando se les cae un trozo de tarta al suelo?",
    options: [
      opt("Lo recogen y se lo comen igualmente", true),
      opt("Lo tiran sin dudarlo"),
      opt("Se pelean por quién tiene la culpa"),
      opt("Piden que les traigan otra inmediatamente"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Quién visita brevemente a Phoebe en este episodio?",
    options: [
      opt("Su novio científico, David", true),
      opt("Su hermana Ursula"),
      opt("Su madre biológica"),
      opt("Su exmarido Duncan"),
    ],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Qué intentan hacer Rachel y Chandler cuando se dan cuenta de que las tartas no son para ellos?",
    options: [
      opt("Ocultarlo y seguir quedándoselas de todos modos", true),
      opt("Devolverlas de inmediato al vecino correcto"),
      opt("Pagarlas para quedárselas con la conciencia tranquila"),
      opt("Repartirlas entre todo el grupo"),
    ],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Cómo reacciona el vecino al que realmente iban destinadas las tartas?",
    options: [
      opt("Se da cuenta del error y reclama sus tartas", true),
      opt("Nunca llega a notar el error"),
      opt("Regala las tartas a Rachel y Chandler encantado"),
      opt("Se muda antes de poder reclamarlas"),
    ],
  },

  // Episodio 12 — The One Where They're Up All Night
  {
    episode: 12,
    difficulty: "easy",
    text: "¿Qué evento astronómico mantiene despierto al grupo toda la noche en este episodio?",
    options: [
      opt("El paso de un cometa", true),
      opt("Un eclipse lunar"),
      opt("Una lluvia de meteoritos"),
      opt("Un eclipse solar"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué intentan hacer Monica y Chandler esa misma noche, sin conseguirlo del todo?",
    options: [
      opt("Tener intimidad sin interrupciones", true),
      opt("Terminar de planear la boda"),
      opt("Dormir temprano, ignorando al grupo"),
      opt("Ver el cometa a solas, lejos de los demás"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué impide constantemente a Monica y Chandler estar a solas esa noche?",
    options: [
      opt("Las interrupciones constantes de sus amigos", true),
      opt("Un corte de luz en el edificio"),
      opt("Una llamada urgente de los padres de Monica"),
      opt("El propio cometa, que los distrae"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Dónde se reúne principalmente el grupo para pasar la noche despiertos?",
    options: [
      opt("En el apartamento de Monica y Chandler", true),
      opt("En la azotea del edificio"),
      opt("En Central Perk"),
      opt("En el apartamento de Joey y Rachel"),
    ],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Cómo termina la noche en cuanto al objetivo principal de ver el cometa?",
    options: [
      opt("Resulta decepcionante o casi no se ve nada especial", true),
      opt("Es un espectáculo inolvidable para todos"),
      opt("Se lo pierden por completo, dormidos"),
      opt("Solo lo ve uno de ellos, a solas"),
    ],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué actitud predomina en el grupo mientras esperan el cometa toda la noche?",
    options: [
      opt("Cansancio y ganas de dormir, pese a las ganas de verlo", true),
      opt("Euforia y energía sin parar"),
      opt("Indiferencia total por el evento"),
      opt("Discusiones serias sobre el futuro del grupo"),
    ],
  },

  // Episodio 13 — The One Where Rosita Dies
  {
    episode: 13,
    difficulty: "easy",
    text: "¿Qué es \"Rosita\", según el título de este episodio?",
    options: [
      opt("El sillón reclinable favorito de Joey", true),
      opt("Una mascota de Phoebe"),
      opt("Un coche antiguo"),
      opt("Una planta de Monica"),
    ],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Quién rompe el sillón reclinable de Joey en este episodio?",
    options: [
      opt("Rachel", true),
      opt("Chandler"),
      opt("Monica"),
      opt("Phoebe"),
    ],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué pertenencias de la infancia de Monica se ven afectadas en este episodio?",
    options: [
      opt("Se estropean por accidente", true),
      opt("Se pierden en una mudanza"),
      opt("Se las roban"),
      opt("Se las regala sin querer a otra persona"),
    ],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué le regala el padre de Monica, Jack, en este episodio?",
    options: [
      opt("Su coche Porsche", true),
      opt("Un anillo de familia"),
      opt("Dinero extra para la boda"),
      opt("Una casa de vacaciones"),
    ],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Cómo reacciona Joey al enterarse de que su sillón favorito está destrozado?",
    options: [
      opt("Se disgusta mucho, como si hubiera perdido a alguien querido", true),
      opt("Le resulta indiferente, ya no lo usaba"),
      opt("Se alegra de tener excusa para comprar uno nuevo"),
      opt("Culpa a Chandler en vez de a Rachel"),
    ],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Por qué le regala Jack su Porsche a Monica en este episodio?",
    options: [
      opt("Como gesto compensatorio tras lo ocurrido con sus recuerdos de infancia", true),
      opt("Como regalo de bodas adelantado sin motivo especial"),
      opt("Porque Jack ya no puede conducir"),
      opt("Porque perdió una apuesta con Monica"),
    ],
  },

  // Episodio 14 — The One Where They All Turn Thirty
  {
    episode: 14,
    difficulty: "easy",
    text: "¿Qué tienen en común los flashbacks que se muestran en este episodio?",
    options: [
      opt("Cómo vivió cada amigo el día que cumplió 30 años", true),
      opt("El primer día de universidad de cada uno"),
      opt("La primera vez que se conocieron todos"),
      opt("El día que cada uno se mudó a Nueva York"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué decide Rachel respecto a Tag en este episodio?",
    options: [
      opt("Romper su relación con él", true),
      opt("Pedirle que se mude con ella"),
      opt("Presentárselo formalmente a sus padres"),
      opt("Proponerle formalizar la relación"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Por qué termina Rachel su relación con Tag?",
    options: [
      opt("Porque siente que él es demasiado joven/inmaduro para ella", true),
      opt("Porque él le es infiel"),
      opt("Porque él se muda a otra ciudad"),
      opt("Porque a él no le gustan sus amigos"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Cómo reacciona alguno de los amigos al recordar cómo cumplió 30 años, sintiéndose mal por ello?",
    options: [
      opt("Con angustia por sentir que no ha logrado lo que esperaba a esa edad", true),
      opt("Con total indiferencia ante la edad"),
      opt("Con una gran fiesta que recuerda con cariño"),
      opt("Sin recordar nada de ese día"),
    ],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Qué formato narrativo usa este episodio para contar cómo cumplieron 30 años?",
    options: [
      opt("Flashbacks intercalados de cada personaje", true),
      opt("Un sueño compartido por todos"),
      opt("Una conversación lineal sin flashbacks"),
      opt("Cartas que se escriben entre ellos"),
    ],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Qué edad tiene Tag en comparación con Rachel, motivo central de la ruptura?",
    options: [
      opt("Es bastante más joven que ella", true),
      opt("Es mayor que ella"),
      opt("Tienen prácticamente la misma edad"),
      opt("Nunca se aclara su edad exacta"),
    ],
  },

  // Episodio 15 — The One with Joey's New Brain
  {
    episode: 15,
    difficulty: "easy",
    text: "¿Qué le ocurre al personaje de Joey en la telenovela en este episodio?",
    options: [
      opt("Recibe un trasplante de cerebro", true),
      opt("Pierde la memoria"),
      opt("Muere y resucita"),
      opt("Descubre que tiene un gemelo"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿A quién visita Joey relacionado con la trama de su personaje en la telenovela?",
    options: [
      opt("A la actriz que interpretaba al personaje fallecido cuyo cerebro recibe", true),
      opt("Al productor de la telenovela"),
      opt("A un guionista para pedir cambios"),
      opt("A un médico real para asesorarse"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué género televisivo parodia la trama del \"nuevo cerebro\" de Joey?",
    options: [
      opt("Las telenovelas/culebrones, con tramas absurdas", true),
      opt("Los documentales médicos"),
      opt("Las series de ciencia ficción"),
      opt("Los concursos de televisión"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué surge entre Joey y la actriz a la que visita en este episodio?",
    options: [
      opt("Empiezan a salir juntos", true),
      opt("Se hacen enemigos por el papel"),
      opt("Ella lo rechaza por completo"),
      opt("Se convierten solo en compañeros de trabajo"),
    ],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Por qué le cuesta a Joey aceptar del todo la nueva trama de su personaje?",
    options: [
      opt("Le parece absurda incluso para los estándares de una telenovela", true),
      opt("Cree que le van a despedir por ella"),
      opt("No entiende el guion"),
      opt("Piensa que le quita protagonismo"),
    ],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué papel jugaba antes en la trama la actriz que ahora visita Joey?",
    options: [
      opt("Interpretaba al personaje cuyo cerebro ahora \"tiene\" el de Joey", true),
      opt("Era la doctora que operaba a su personaje"),
      opt("Era su hermana en la ficción"),
      opt("Era una rival de su personaje"),
    ],
  },

  // Episodio 16 — The One with the Truth About London
  {
    episode: 16,
    difficulty: "easy",
    text: "¿Qué verdad del pasado descubre Chandler en este episodio, que le genera paranoia?",
    options: [
      opt("Que Monica y Joey estuvieron a punto de acostarse en Londres", true),
      opt("Que Monica salió con Ross antes que con él"),
      opt("Que Rachel y Chandler se besaron una vez"),
      opt("Que Monica sigue en contacto con Richard"),
    ],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Cómo se entera Chandler de esa verdad sobre Londres?",
    options: [
      opt("A través de un cuento que Rachel le cuenta a Ben, basado en hechos reales", true),
      opt("Se lo confiesa Monica directamente"),
      opt("Lo lee en el diario de Monica"),
      opt("Se lo cuenta Joey sin querer"),
    ],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿En qué viaje ocurrió el episodio de Londres que ahora incomoda a Chandler?",
    options: [
      opt("El viaje a la boda de Ross y Emily", true),
      opt("Un viaje de trabajo de Chandler"),
      opt("La luna de miel de otra pareja"),
      opt("Un viaje de chicas organizado por Rachel"),
    ],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Cómo reacciona Chandler emocionalmente al conocer esta verdad sobre Monica y Joey?",
    options: [
      opt("Se pone paranoico e inseguro", true),
      opt("Le da completamente igual"),
      opt("Rompe con Monica de inmediato"),
      opt("Se lo toma a broma sin más"),
    ],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Qué papel juega Ben (el hijo de Ross) en cómo Chandler se entera de esta verdad?",
    options: [
      opt("Escucha el cuento de Rachel y luego lo repite, delatando la historia", true),
      opt("Encuentra una carta antigua y se la enseña a Chandler"),
      opt("Le pregunta directamente a Chandler sobre ello"),
      opt("No tiene ningún papel en el descubrimiento"),
    ],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Cómo terminan calmando a Chandler respecto a este tema Monica y los demás?",
    options: [
      opt("Le aseguran que nunca llegó a pasar nada entre Monica y Joey", true),
      opt("Monica admite que sí pasó algo más de lo que él cree"),
      opt("Joey se muda para evitar más problemas"),
      opt("Deciden posponer la boda hasta aclararlo todo"),
    ],
  },

  // Episodio 17 — The One with the Cheap Wedding Dress
  {
    episode: 17,
    difficulty: "easy",
    text: "¿Cómo consigue Monica un vestido de novia muy rebajado en este episodio?",
    options: [
      opt("Ganándolo tras pelear con otra novia en una liquidación", true),
      opt("Como regalo de su madre"),
      opt("En una rifa benéfica"),
      opt("Comprándolo de segunda mano a una amiga"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Por qué termina teniendo que devolver el vestido barato que consiguió?",
    options: [
      opt("Porque la tienda la chantajea con pruebas de la pelea", true),
      opt("Porque no le queda bien la talla"),
      opt("Porque Chandler no lo aprueba"),
      opt("Porque descubre que está manchado"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Cómo consigue Monica el vestido rebajado en primer lugar?",
    options: [
      opt("Peleando físicamente por él con otra clienta en una venta especial", true),
      opt("Llegando la primera a la tienda al abrir"),
      opt("Sobornando a una dependienta"),
      opt("Ganando un sorteo de la tienda"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué tipo de evento de compras provoca la pelea por el vestido?",
    options: [
      opt("Una venta especial de muestrario a precio rebajado", true),
      opt("Una subasta benéfica"),
      opt("Las rebajas de temporada normales"),
      opt("Un mercadillo de segunda mano"),
    ],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Con qué prueba exactamente chantajea la tienda a Monica para que devuelva el vestido?",
    options: [
      opt("Con pruebas (como fotos o testigos) de la pelea que protagonizó", true),
      opt("Con un recibo falsificado"),
      opt("Con una grabación de una conversación privada"),
      opt("Con quejas firmadas de otras clientas"),
    ],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Cómo se siente Monica al tener que renunciar finalmente al vestido conseguido con tanto esfuerzo?",
    options: [
      opt("Muy frustrada, tras todo lo que hizo por conseguirlo", true),
      opt("Aliviada de librarse de él"),
      opt("Indiferente, ya tenía otro vestido de reserva"),
      opt("Contenta porque le devuelven el dinero con creces"),
    ],
  },

  // Episodio 18 — The One with Joey's Award
  {
    episode: 18,
    difficulty: "easy",
    text: "¿A qué tipo de premio se refiere el título de este episodio, relacionado con las telenovelas?",
    options: [
      opt('Un "Soapie", premio de telenovelas', true),
      opt("Un Emmy"),
      opt("Un Globo de Oro"),
      opt("Un premio de la crítica teatral"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Qué le ocurre a Joey respecto al premio en la ceremonia?",
    options: [
      opt("No gana el premio al que estaba nominado", true),
      opt("Gana el premio principal de la noche"),
      opt("Es descalificado de la nominación"),
      opt("Se niega a asistir a la ceremonia"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Cómo consigue Joey quedarse con un premio de todos modos?",
    options: [
      opt("Porque antes había aceptado uno en nombre de otra persona y no lo devuelve", true),
      opt("Porque gana un premio menor esa misma noche"),
      opt("Porque compra una réplica"),
      opt("Porque otro actor se lo regala"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Cómo se siente Joey al perder el premio al que aspiraba de verdad?",
    options: [
      opt("Decepcionado, aunque intenta disimularlo", true),
      opt("Completamente indiferente"),
      opt("Furioso con sus compañeros de reparto"),
      opt("Aliviado de no tener que dar un discurso"),
    ],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿En calidad de qué había aceptado Joey el premio que termina quedándose?",
    options: [
      opt("Como representante de un compañero ausente esa noche", true),
      opt("Como parte del equipo técnico del programa"),
      opt("Como presentador de la gala"),
      opt("Por error, al confundirlo con el suyo"),
    ],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué actitud adoptan los amigos de Joey respecto a que se quede con el premio ajeno?",
    options: [
      opt("Le siguen la broma o lo dejan pasar con humor", true),
      opt("Le exigen que lo devuelva de inmediato"),
      opt("Lo denuncian ante la organización"),
      opt("Ninguno se entera de lo ocurrido"),
    ],
  },

  // Episodio 19 — The One with Ross and Monica's Cousin
  {
    episode: 19,
    difficulty: "easy",
    text: "¿Quién visita a Ross y Monica en este episodio, generando cierta incomodidad?",
    options: [
      opt("Su prima Cassie, muy atractiva", true),
      opt("Su tía Sylvia"),
      opt("Su abuelo"),
      opt("Un primo lejano de su padre"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Por qué genera incomodidad la visita de su prima Cassie?",
    options: [
      opt("Porque Ross y Joey se sienten atraídos por ella pese al parentesco", true),
      opt("Porque no se lleva bien con Monica"),
      opt("Porque quiere quedarse a vivir con ellos"),
      opt("Porque revela un secreto familiar incómodo"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Para qué tipo de papel audiciona Joey en este episodio?",
    options: [
      opt("Un papel que requiere que el actor no esté circuncidado", true),
      opt("Un papel de villano en una película de acción"),
      opt("Un papel que requiere hablar francés"),
      opt("Un papel de doble de riesgo"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué problema tiene Joey respecto al requisito físico de esa audición?",
    options: [
      opt("Él no cumple ese requisito concreto", true),
      opt("Es alérgico al maquillaje que usarían"),
      opt("Le da vergüenza el casting"),
      opt("Llega demasiado tarde a probarse"),
    ],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Cómo intenta Joey resolver el problema para conseguir el papel de todos modos?",
    options: [
      opt("Buscando una solución poco convencional para \"parecer\" cumplir el requisito", true),
      opt("Rechazando el papel sin más"),
      opt("Pidiendo que cambien el requisito del guion"),
      opt("Enviando a otro actor a la prueba en su lugar"),
    ],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué actitud tiene Cassie hacia el interés que despierta en Ross y Joey?",
    options: [
      opt("Se muestra despreocupada, sin corresponder ese interés", true),
      opt("Corresponde el interés de ambos"),
      opt("Se ofende profundamente y se marcha"),
      opt("Solo le interesa Ross de los dos"),
    ],
  },

  // Episodio 20 — The One with Rachel's Big Kiss
  {
    episode: 20,
    difficulty: "easy",
    text: "¿Con quién se reencuentra Rachel en este episodio, del pasado universitario?",
    options: [
      opt("Con su amiga de la hermandad, Melissa", true),
      opt("Con su exprometido Barry"),
      opt("Con una antigua compañera de trabajo"),
      opt("Con su primera jefa"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Qué anécdota del pasado deciden recrear Rachel y Melissa ante el grupo?",
    options: [
      opt("Un beso apasionado que se dieron en la universidad", true),
      opt("Un baile que ensayaron juntas"),
      opt("Una broma que le gastaron a un profesor"),
      opt("Una canción que cantaban juntas"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿En qué contexto se dieron originalmente ese beso Rachel y Melissa en la universidad?",
    options: [
      opt("En una fiesta, más como anécdota divertida que como algo romántico", true),
      opt("En una cita formal entre ambas"),
      opt("Como parte de una obra de teatro"),
      opt("Por una apuesta con sus compañeras"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Cómo reacciona el grupo (especialmente los chicos) al enterarse de esa historia?",
    options: [
      opt("Se muestran muy interesados y quieren verlo repetido", true),
      opt("Les resulta indiferente"),
      opt("Se sienten incómodos y prefieren no hablar de ello"),
      opt("No creen que sea cierto"),
    ],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué diferencia surge quiere entre el beso recreado y el original, generando algo de tensión?",
    options: [
      opt("Que Melissa parece sentir algo real por Rachel esta vez", true),
      opt("Que Rachel se niega a repetirlo"),
      opt("Que Ross se pone celoso sin motivo"),
      opt("Que Melissa se arrepiente de inmediato"),
    ],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Cómo termina gestionando Rachel la situación con Melissa al final del episodio?",
    options: [
      opt("Deja claro que para ella fue solo una anécdota puntual, sin más", true),
      opt("Decide iniciar una relación con ella"),
      opt("Corta el contacto con Melissa por completo"),
      opt("Le pide consejo a Ross sobre qué hacer"),
    ],
  },

  // Episodio 21 — The One with the Vows
  {
    episode: 21,
    difficulty: "easy",
    text: "¿Qué deben escribir Monica y Chandler para la boda en este episodio?",
    options: [
      opt("Sus votos matrimoniales", true),
      opt("La lista de invitados"),
      opt("El menú del banquete"),
      opt("El discurso de agradecimiento"),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué formato usa este episodio para repasar la relación de Monica y Chandler?",
    options: [
      opt("Clips y flashbacks de episodios anteriores", true),
      opt("Una entrevista a cámara de cada uno"),
      opt("Un sueño compartido"),
      opt("Cartas que se leen en voz alta sin flashbacks"),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Por qué les cuesta tanto a ambos escribir sus votos?",
    options: [
      opt("Por la presión de expresar bien lo que sienten el uno por el otro", true),
      opt("Porque no se ponen de acuerdo en el tono"),
      opt("Porque no quieren repetir lo que dijo el otro"),
      opt("Porque tienen muy poco tiempo antes de la boda"),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué buscan Monica y Chandler al recordar su historia juntos en este episodio?",
    options: [
      opt("Inspiración para escribir votos sinceros", true),
      opt("Motivos para posponer la boda"),
      opt("Anécdotas graciosas para el banquete"),
      opt("Pruebas de que deberían cancelar la boda"),
    ],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Qué tipo de episodio es este en cuanto a su estructura, dentro del formato habitual de la serie?",
    options: [
      opt("Un episodio recopilatorio (clip show)", true),
      opt("Un episodio ambientado completamente en el pasado"),
      opt("Un episodio sin diálogo"),
      opt("Un episodio narrado en primera persona por un solo personaje"),
    ],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Qué consiguen finalmente Monica y Chandler respecto a sus votos al final del episodio?",
    options: [
      opt("Terminarlos, listos para la boda", true),
      opt("Decidir no escribirlos y improvisar"),
      opt("Pedirle a Ross que los escriba por ellos"),
      opt("Aplazar la tarea para el último momento sin resolverla"),
    ],
  },

  // Episodio 22 — The One with Chandler's Dad
  {
    episode: 22,
    difficulty: "easy",
    text: "¿A quién visita Chandler en este episodio para invitarlo a la boda?",
    options: [
      opt("A su padre, del que está distanciado", true),
      opt("A un antiguo mejor amigo"),
      opt("A su madre"),
      opt("A un tío al que no veía desde niño"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿A qué se dedica el padre de Chandler, y dónde vive?",
    options: [
      opt("Es artista de un espectáculo drag en Las Vegas", true),
      opt("Es empresario en Nueva York"),
      opt("Es profesor universitario en Boston"),
      opt("Es chef en un restaurante de Los Ángeles"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué conduce Rachel en este episodio sin tener el permiso adecuado?",
    options: [
      opt("El Porsche que el padre de Monica le regaló a ella", true),
      opt("El coche de Ross"),
      opt("Una moto de Joey"),
      opt("El coche de empresa de su trabajo"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Cómo es la relación inicial entre Chandler y su padre al reencontrarse?",
    options: [
      opt("Tensa, por el distanciamiento de años", true),
      opt("Cercana, como si nunca se hubieran separado"),
      opt("Fría pero cordial desde el principio"),
      opt("Chandler se niega directamente a hablarle"),
    ],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Cómo termina la relación entre Chandler y su padre al final del episodio?",
    options: [
      opt("Se reconcilian y su padre acepta ir a la boda", true),
      opt("Siguen distanciados, sin invitación a la boda"),
      opt("Chandler decide no volver a verlo nunca"),
      opt("Su padre rechaza la invitación pese a la reconciliación"),
    ],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Qué problema le acarrea a Rachel conducir el Porsche sin el permiso adecuado?",
    options: [
      opt("Se mete en problemas o riesgo de sanción por ello", true),
      opt("No le acarrea ningún problema"),
      opt("Pierde el coche de inmediato"),
      opt("La detienen y pasa la noche arrestada"),
    ],
  },

  // Episodio 23 — The One with Monica and Chandler's Wedding, Part 1
  {
    episode: 23,
    difficulty: "easy",
    text: "¿Qué le advierte Ross a Chandler al principio de este episodio?",
    options: [
      opt("Que no le haga daño a Monica, como haría un hermano mayor", true),
      opt("Que no llegue tarde a la boda"),
      opt("Que cuide el presupuesto de la boda"),
      opt("Que invite a más gente de la que planeaban"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué está rodando Joey mientras se prepara la boda, generando un conflicto de agenda?",
    options: [
      opt("Una película bélica ambientada en la Primera Guerra Mundial", true),
      opt("Un anuncio publicitario"),
      opt("Una nueva telenovela"),
      opt("Una serie de ciencia ficción"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué peculiaridad tiene el actor con el que trabaja Joey en ese rodaje?",
    options: [
      opt("Escupe constantemente al actuar", true),
      opt("Se olvida siempre del guion"),
      opt("Insiste en improvisar todas las escenas"),
      opt("Se niega a actuar con Joey"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué ocurre en el ensayo de la boda con los padres de Chandler?",
    options: [
      opt("Discuten y montan una escena incómoda", true),
      opt("Se llevan sorprendentemente bien"),
      opt("Ninguno de los dos aparece"),
      opt("Anuncian que quieren volver juntos"),
    ],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué descubre Phoebe entre la basura en este episodio, que resultará clave para la trama?",
    options: [
      opt("Un test de embarazo positivo", true),
      opt("Una carta de despedida de Chandler"),
      opt("El anillo de compromiso original"),
      opt("Una factura impagada de la boda"),
    ],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué hace Chandler al final de este primer episodio, dejando a todos preocupados?",
    options: [
      opt("Desaparece, dejando solo una nota de disculpa", true),
      opt("Anuncia públicamente que cancela la boda"),
      opt("Se pelea abiertamente con Monica"),
      opt("Decide adelantar la boda un día"),
    ],
  },

  // Episodio 24 — The One with Monica and Chandler's Wedding, Part 2
  {
    episode: 24,
    difficulty: "easy",
    text: "¿Qué miedo confiesa Chandler cuando lo encuentran tras desaparecer?",
    options: [
      opt("Miedo a repetir el matrimonio fallido de sus padres", true),
      opt("Miedo a no poder mantener económicamente a Monica"),
      opt("Miedo a mudarse de ciudad"),
      opt("Miedo a no caerle bien a la familia de Monica"),
    ],
  },
  {
    episode: 24,
    difficulty: "easy",
    text: "¿Quiénes encuentran a Chandler tras su desaparición?",
    options: [
      opt("Ross y Phoebe", true),
      opt("Joey y Rachel"),
      opt("Solo Monica"),
      opt("Los padres de Chandler"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué descubre Chandler que le hace huir por segunda vez?",
    options: [
      opt("Que se rumorea que Monica podría estar embarazada", true),
      opt("Que Monica sigue en contacto con Richard"),
      opt("Que la boda se ha cancelado sin avisarle"),
      opt("Que Joey no llegará a la ceremonia"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué hace que Chandler cambie de opinión y decida quedarse a casarse?",
    options: [
      opt("Ver ropa de bebé en la tienda de regalos del hotel", true),
      opt("Una conversación con Ross sobre el matrimonio"),
      opt("Que Monica le suplique por teléfono"),
      opt("Que Joey lo convenza con un discurso"),
    ],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Cómo consigue Joey llegar finalmente a oficiar la boda?",
    options: [
      opt("Llega tarde, todavía con el vestuario del rodaje de época", true),
      opt("Renuncia a la película para llegar a tiempo, sin problemas"),
      opt("Envía a otra persona a oficiar en su lugar"),
      opt("No llega a tiempo y otro amigo oficia en su lugar"),
    ],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Qué revela la reacción de Rachel cuando Chandler menciona el test de embarazo en la recepción?",
    options: [
      opt("Que en realidad es ella quien está embarazada, no Monica", true),
      opt("Que ella ya lo sabía todo desde el principio"),
      opt("Que el test pertenecía a Phoebe"),
      opt("Que Monica sí está embarazada, confirmando el rumor"),
    ],
  },
];
