/**
 * Datos de trivia de la Temporada 2 de Friends (24 episodios).
 *
 * Generado a partir de un resumen argumental episodio a episodio obtenido
 * de Wikipedia ("Friends (season 2)", en.wikipedia.org/wiki/Friends_season_2)
 * en septiembre de 2026, para evitar inventar detalles de trama de memoria.
 *
 * 6 preguntas por episodio (144 en total), todas en modo `multiple_choice`,
 * con mayoría de dificultad `medium`/`hard` y una minoría `easy` por
 * episodio (a petición del usuario). El orden de las opciones dentro de
 * cada pregunta se baraja en `seed-season2.ts` antes de insertar, para que
 * la respuesta correcta no quede siempre en la misma posición.
 *
 * Nota: "The One After the Super Bowl" es un episodio doble; sus preguntas
 * se reparten como episodio 12 (Parte 1) y episodio 13 (Parte 2).
 */

export type Season2TriviaSeed = {
  episode: number;
  difficulty: "easy" | "medium" | "hard";
  text: string;
  options: { text: string; isCorrect: boolean }[];
};

function opt(text: string, isCorrect = false) {
  return { text, isCorrect };
}

export const season2TriviaData: Season2TriviaSeed[] = [
  // Episodio 1 — The One with Ross' New Girlfriend
  {
    episode: 1,
    difficulty: "easy",
    text: "¿Quién le revela sin querer a Rachel que Ross está enamorado de ella?",
    options: [opt("Chandler", true), opt("Joey"), opt("Phoebe"), opt("Monica")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "Cuando Rachel corre al aeropuerto a confesarle sus sentimientos a Ross, ¿con quién lo encuentra?",
    options: [opt("Con Julie, su nueva novia", true), opt("Con Carol"), opt("Solo"), opt("Con Susan")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "Decepcionada en el aeropuerto, ¿con quién pasa la noche Rachel?",
    options: [opt("Con Paolo", true), opt("Con Joey"), opt("Con Chandler"), opt("Sola")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Quién le hace a Monica un corte de pelo desastroso en este episodio?",
    options: [opt("Phoebe", true), opt("Rachel"), opt("Un peluquero profesional"), opt("Chandler")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Al estilo de qué actor recuerda el corte de pelo que le hacen a Monica?",
    options: [opt("Dudley Moore", true), opt("Al Pacino"), opt("Tom Hanks"), opt("Jack Nicholson")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Qué le ocurre a Chandler con el sastre de Joey mientras le toma las medidas de un traje?",
    options: [
      opt("Que le toca de forma inapropiada", true),
      opt("Que le corta con las tijeras"),
      opt("Que le confunde con Joey"),
      opt("Que se niega a atenderle"),
    ],
  },

  // Episodio 2 — The One with the Breast Milk
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Cómo se llama el hijo de Ross y Carol?",
    options: [opt("Ben", true), opt("Ryan"), opt("Chip"), opt("Frank")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué hace que los chicos se sientan muy incómodos en este episodio?",
    options: [
      opt("Ver a Carol dándole el pecho a Ben", true),
      opt("Ver a Ross bañando a Ben"),
      opt("Ver a Susan cambiando a Ben"),
      opt("Ver el parto de Carol"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Quiénes deciden probar la leche materna por pura curiosidad?",
    options: [opt("Joey y Phoebe", true), opt("Chandler y Ross"), opt("Monica y Rachel"), opt("Joey y Chandler")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Por qué está resentida Rachel con Monica en este episodio?",
    options: [
      opt("Por la nueva amistad de Monica con Julie", true),
      opt("Por un chico"),
      opt("Por dinero del alquiler"),
      opt("Por un trabajo"),
    ],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿En qué sección trabaja Joey en los grandes almacenes durante este episodio?",
    options: [
      opt("Rociando colonia a los clientes", true),
      opt("En la caja registradora"),
      opt("Vendiendo zapatos"),
      opt("En el probador"),
    ],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Con quién compite Joey en su trabajo de los grandes almacenes?",
    options: [
      opt("Con otro vendedor de colonia", true),
      opt("Con su jefe"),
      opt("Con Chandler"),
      opt("Con un antiguo compañero de reparto"),
    ],
  },

  // Episodio 3 — The One Where Heckles Dies
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Qué le ocurre al Sr. Heckles, el vecino de abajo, en este episodio?",
    options: [opt("Muere", true), opt("Se muda"), opt("Les demanda de nuevo"), opt("Organiza una fiesta")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué heredan Monica y Rachel del Sr. Heckles?",
    options: [opt("Todas sus pertenencias y trastos viejos", true), opt("Su apartamento"), opt("Su gato"), opt("Dinero")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué empieza a temer Chandler tras ver similitudes con el Sr. Heckles?",
    options: [
      opt("Morir solo", true),
      opt("Quedarse sin trabajo"),
      opt("Perder a sus amigos"),
      opt("No poder tener hijos"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Sobre qué tema discuten acaloradamente Ross y Phoebe en este episodio?",
    options: [opt("La evolución", true), opt("La religión"), opt("La política"), opt("El matrimonio")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Cómo reaparece Janice en este episodio, para sorpresa de Chandler?",
    options: [
      opt("Casada y embarazada", true),
      opt("Divorciada y soltera"),
      opt("Como nueva vecina"),
      opt("Trabajando en Central Perk"),
    ],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Con qué relacionaba el Sr. Heckles muchos de los ruidos y problemas del edificio?",
    options: [
      opt("Con el piso de Monica y Rachel", true),
      opt("Con las obras del edificio de al lado"),
      opt("Con Central Perk"),
      opt("Con el ascensor"),
    ],
  },

  // Episodio 4 — The One with Phoebe's Husband
  {
    episode: 4,
    difficulty: "easy",
    text: "¿Qué revela Phoebe sobre su vida personal en este episodio?",
    options: [
      opt("Que está casada en secreto", true),
      opt("Que tiene un hijo"),
      opt("Que es adoptada"),
      opt("Que tiene una hermana gemela"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Cómo se llama el marido secreto de Phoebe?",
    options: [opt("Duncan", true), opt("David"), opt("Roger"), opt("Ryan")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Por qué se casó Phoebe con él en realidad?",
    options: [
      opt("Para conseguirle la tarjeta verde (residencia)", true),
      opt("Porque estaba enamorada"),
      opt("Por una apuesta"),
      opt("Por dinero"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿A qué se dedica el marido de Phoebe?",
    options: [
      opt("Es patinador artístico sobre hielo", true),
      opt("Es actor"),
      opt("Es músico"),
      opt("Es chef"),
    ],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Por qué quiere el divorcio el marido de Phoebe?",
    options: [
      opt("Porque descubre que no es gay", true),
      opt("Porque se ha enamorado de otra mujer"),
      opt("Porque vuelve a Canadá"),
      opt("Porque Phoebe se lo pide"),
    ],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Qué peculiaridad física reconoce tener Chandler en este episodio?",
    options: [
      opt("Que tiene un tercer pezón", true),
      opt("Que es daltónico"),
      opt("Que le falta una costilla"),
      opt("Que tiene seis dedos en un pie"),
    ],
  },

  // Episodio 5 — The One with Five Steaks and an Eggplant
  {
    episode: 5,
    difficulty: "easy",
    text: "¿Qué diferencia entre los amigos causa tensión en este episodio?",
    options: [
      opt("La diferencia de ingresos económicos", true),
      opt("Sus gustos musicales"),
      opt("Sus opiniones políticas"),
      opt("Sus horarios de trabajo"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Por qué despiden a Monica de su trabajo como chef en este episodio?",
    options: [
      opt("Por aceptar regalos de un proveedor de carne", true),
      opt("Por llegar tarde"),
      opt("Por discutir con un cliente"),
      opt("Por robar comida"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿A qué concierto van los tres amigos con más dinero para celebrar el cumpleaños de Ross?",
    options: [
      opt("Hootie & the Blowfish", true),
      opt("Bon Jovi"),
      opt("R.E.M."),
      opt("The Rolling Stones"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Cómo se llama la mujer del número equivocado a la que Chandler empieza a perseguir?",
    options: [opt("Jade", true), opt("Aurora"), opt("Janice"), opt("Kathy")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Cómo consigue Chandler el número de teléfono de Jade?",
    options: [
      opt("Ella le llama por error a su casa", true),
      opt("Se lo da un amigo en común"),
      opt("Lo encuentra en un anuncio"),
      opt("Se conocen en Central Perk"),
    ],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué provoca exactamente la tensión sobre el dinero en este episodio?",
    options: [
      opt("Que unos amigos no pueden permitirse los mismos planes caros que otros", true),
      opt("Que Monica pide prestado dinero a Ross"),
      opt("Que Joey no paga el alquiler"),
      opt("Que Rachel pierde su trabajo"),
    ],
  },

  // Episodio 6 — The One with the Baby on the Bus
  {
    episode: 6,
    difficulty: "easy",
    text: "¿A qué bebé pierden accidentalmente Chandler y Joey en este episodio?",
    options: [opt("A Ben", true), opt("A un bebé desconocido"), opt("A un cachorro"), opt("A Marcel")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Dónde dejan olvidado accidentalmente a Ben?",
    options: [opt("En un autobús", true), opt("En un taxi"), opt("En el parque"), opt("En Central Perk")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Por qué tienen que cuidar Chandler y Joey de Ben esa noche?",
    options: [
      opt("Porque Monica lleva a Ross a urgencias por una alergia al kiwi", true),
      opt("Porque Carol y Susan están de viaje"),
      opt("Porque Ross tiene una cita"),
      opt("Porque Monica trabaja hasta tarde"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Quién le quita a Phoebe su actuación habitual en Central Perk?",
    options: [opt("Chrissie Hynde", true), opt("Janice"), opt("Julie"), opt("Una desconocida")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Cómo intentan Chandler y Joey identificar a Ben en la oficina de objetos perdidos?",
    options: [
      opt("Con detalles poco fiables porque apenas se fijaron en él", true),
      opt("Con una foto que llevaban encima"),
      opt("Con su partida de nacimiento"),
      opt("Llamando a Ross"),
    ],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué objeto insólito va a buscar un desconocido al estuche de la guitarra de Phoebe?",
    options: [opt("Un condón", true), opt("Dinero"), opt("Una carta"), opt("Una joya")],
  },

  // Episodio 7 — The One Where Ross Finds Out
  {
    episode: 7,
    difficulty: "easy",
    text: "¿Qué descubre Ross en este episodio, que da título al capítulo?",
    options: [
      opt("Que Rachel tiene sentimientos por él", true),
      opt("Que Carol está embarazada otra vez"),
      opt("Que Chandler fuma"),
      opt("Que Monica y Richard salen juntos"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Cómo se entera Ross de los sentimientos de Rachel?",
    options: [
      opt("Por un mensaje que ella deja borracha diciendo que ya lo ha superado", true),
      opt("Porque Rachel se lo confiesa en persona"),
      opt("Porque Chandler se lo cuenta"),
      opt("Porque lee su diario"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿A qué tienda va Ross con Julie en este episodio?",
    options: [opt("A una tienda de mascotas, a elegir un gato", true), opt("A una joyería"), opt("A una mueblería"), opt("A un concesionario")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué papel adopta Monica con Chandler en este episodio?",
    options: [
      opt("El de su entrenadora personal", true),
      opt("El de su casamentera"),
      opt("El de su jefa"),
      opt("El de su psicóloga"),
    ],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Cómo termina exactamente el episodio entre Ross y Rachel?",
    options: [
      opt("Se besan apasionadamente en Central Perk", true),
      opt("Ross se va con Julie de todos modos"),
      opt("Rachel se retracta de sus sentimientos"),
      opt("No llegan a verse"),
    ],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Cómo describe Ross la experiencia de elegir gato con Julie?",
    options: [
      opt("Como algo agobiante y estresante", true),
      opt("Como el mejor momento de su relación"),
      opt("Como aburrido"),
      opt("Como gracioso"),
    ],
  },

  // Episodio 8 — The One with the List
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Qué tipo de lista hace Ross en este episodio, que da título al capítulo?",
    options: [
      opt("Una lista de pros y contras de Rachel y Julie", true),
      opt("Una lista de regalos"),
      opt("Una lista de tareas"),
      opt("Una lista de nombres para el bebé"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "Tras hacer la lista, ¿a quién elige finalmente Ross?",
    options: [opt("A Rachel", true), opt("A Julie"), opt("A ninguna"), opt("Se lo deja al azar")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Por qué rompe Rachel con Ross poco después, si él la había elegido a ella?",
    options: [
      opt("Porque encuentra la lista y lee cosas negativas sobre ella", true),
      opt("Porque Ross sigue viendo a Julie en secreto"),
      opt("Porque Rachel prefiere estar sola"),
      opt("Porque descubre que Ross mintió sobre su edad"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Para qué producto es contratada Monica como chef en este episodio?",
    options: [
      opt("Para crear recetas con \"Mockolate\", un chocolate sintético", true),
      opt("Para un libro de cocina"),
      opt("Para un restaurante de lujo"),
      opt("Para una marca de café"),
    ],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Qué tipo de comentarios sobre Rachel aparecen en la columna de \"contras\" de la lista?",
    options: [
      opt("Críticas sobre su personalidad y comportamiento", true),
      opt("Solo comentarios sobre su aspecto físico"),
      opt("Comentarios sobre su familia"),
      opt("Comentarios sobre su trabajo"),
    ],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Qué reacción tiene Ross al enterarse de que Rachel ha leído la lista?",
    options: [
      opt("Intenta arreglarlo pero ya es tarde", true),
      opt("Lo niega todo"),
      opt("Se enfada con Rachel por leerla"),
      opt("Le da igual"),
    ],
  },

  // Episodio 9 — The One with Phoebe's Dad
  {
    episode: 9,
    difficulty: "easy",
    text: "¿En qué época del año transcurre este episodio?",
    options: [opt("En Navidad", true), opt("En Año Nuevo"), opt("En verano"), opt("En Halloween")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué hace Monica esperando conseguir propinas de los vecinos?",
    options: [opt("Hornear galletas navideñas", true), opt("Cantar villancicos"), opt("Decorar el portal"), opt("Repartir tarjetas")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué descubre Phoebe sobre la foto que creía de su padre?",
    options: [
      opt("Que en realidad es la foto de un modelo de catálogo", true),
      opt("Que es una foto de su padrastro"),
      opt("Que está manipulada"),
      opt("Que es de un actor famoso"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "Al final, ¿qué decide Phoebe sobre buscar a su padre biológico?",
    options: [
      opt("Que no está preparada todavía para conocerlo", true),
      opt("Ir a buscarlo de inmediato"),
      opt("Escribirle una carta"),
      opt("Pedirle a Ross que lo busque por ella"),
    ],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿De dónde sacan Chandler y Joey los regalos de última hora para Navidad?",
    options: [
      opt("De una gasolinera", true),
      opt("De un mercadillo callejero"),
      opt("Los piden prestados"),
      opt("Los hacen ellos mismos"),
    ],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Qué le pide Ross a Rachel que haga en este episodio?",
    options: [
      opt("Que escriba una lista sobre él", true),
      opt("Que le acompañe a ver a Carol"),
      opt("Que cuide de Ben en Navidad"),
      opt("Que le ayude a elegir un regalo para Julie"),
    ],
  },

  // Episodio 10 — The One with Russ
  {
    episode: 10,
    difficulty: "easy",
    text: "¿Cómo se llama el hombre que es prácticamente idéntico a Ross en este episodio?",
    options: [opt("Russ", true), opt("Roger"), opt("Ryan"), opt("Rick")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Con qué antiguo novio se reencuentra Monica en este episodio?",
    options: [opt("Fun Bobby", true), opt("Alan"), opt("Richard"), opt("Chip")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué problema tiene Fun Bobby que Monica intenta ayudarle a solucionar?",
    options: [
      opt("Un problema con el alcohol", true),
      opt("Un problema de dinero"),
      opt("Un problema laboral"),
      opt("Miedo al compromiso"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué papel consigue Joey en \"Days of Our Lives\" en este episodio?",
    options: [opt("Un neurocirujano", true), opt("Un abogado"), opt("Un policía"), opt("Un villano")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué descubre Monica al dejar de beber a Fun Bobby?",
    options: [
      opt("Que sin alcohol resulta muy aburrido", true),
      opt("Que en realidad no la quiere"),
      opt("Que tiene otra novia"),
      opt("Que quiere mudarse a otra ciudad"),
    ],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué ocurre entre Russ y Julie al final del episodio?",
    options: [
      opt("Se sienten atraídos el uno por el otro", true),
      opt("Se pelean"),
      opt("No llegan a coincidir"),
      opt("Julie rechaza a Russ públicamente"),
    ],
  },

  // Episodio 11 — The One with the Lesbian Wedding
  {
    episode: 11,
    difficulty: "easy",
    text: "¿Qué evento organizan Carol y Susan en este episodio?",
    options: [opt("Su boda", true), opt("El bautizo de Ben"), opt("Una fiesta de cumpleaños"), opt("Una mudanza")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿A quién contratan Carol y Susan para el catering de la boda?",
    options: [opt("A Monica", true), opt("A un restaurante externo"), opt("A Rachel"), opt("A la madre de Carol")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué cree Phoebe que le ha pasado durante un masaje a una clienta de 82 años?",
    options: [
      opt("Que ha quedado poseída por su espíritu", true),
      opt("Que se ha hecho amiga suya"),
      opt("Que ha heredado su casa"),
      opt("Que ha aprendido sus recetas"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Quién visita a Rachel y le da una noticia inesperada sobre su matrimonio?",
    options: [opt("Su madre", true), opt("Su padre"), opt("Barry"), opt("Su hermana")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Qué anuncia la madre de Rachel durante su visita?",
    options: [
      opt("Que va a divorciarse del padre de Rachel", true),
      opt("Que se va a mudar a Nueva York"),
      opt("Que está enferma"),
      opt("Que va a casarse otra vez"),
    ],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Qué actitud tiene Phoebe mientras cree estar poseída por el espíritu de su clienta?",
    options: [
      opt("Empieza a comportarse como una señora mayor", true),
      opt("Se vuelve agresiva"),
      opt("Pierde la memoria"),
      opt("Habla en otro idioma"),
    ],
  },

  // Episodio 12 — The One After the Super Bowl, Part 1
  {
    episode: 12,
    difficulty: "easy",
    text: "¿Qué le hacen creer a Ross que le ha pasado a Marcel al principio de este episodio?",
    options: [opt("Que ha muerto en el zoo", true), opt("Que se ha escapado"), opt("Que está enfermo"), opt("Que lo han vendido")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué descubre Ross que Marcel está haciendo realmente, sano y salvo?",
    options: [
      opt("Trabajando como actor en anuncios", true),
      opt("Viviendo en otro zoo"),
      opt("De vuelta en la selva"),
      opt("Trabajando en un circo"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Quién le envía a Joey una carta de fan en este episodio?",
    options: [opt("Brooke Shields", true), opt("Julia Roberts"), opt("Jean-Claude Van Damme"), opt("Chrissie Hynde")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué cree erróneamente la fan que le escribe a Joey?",
    options: [
      opt("Que \"Days of Our Lives\" es una historia real", true),
      opt("Que Joey es en realidad médico"),
      opt("Que Joey está soltero"),
      opt("Que la serie se graba en directo"),
    ],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Dónde actúa Phoebe cantando canciones infantiles con letras macabras?",
    options: [opt("En una biblioteca", true), opt("En un colegio"), opt("En Central Perk"), opt("En un hospital")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Cómo reaccionan los padres presentes a las canciones de Phoebe, a diferencia de los niños?",
    options: [
      opt("Se horrorizan, mientras a los niños les encantan", true),
      opt("Les encantan a todos por igual"),
      opt("Se ríen todos"),
      opt("Piden que pare de inmediato"),
    ],
  },

  // Episodio 13 — The One After the Super Bowl, Part 2
  {
    episode: 13,
    difficulty: "easy",
    text: "¿Qué famoso actor de acción aparece en este episodio?",
    options: [opt("Jean-Claude Van Damme", true), opt("Al Pacino"), opt("Warren Beatty"), opt("Charlie Sheen")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Por qué compiten Rachel y Monica en el rodaje donde aparece Marcel?",
    options: [
      opt("Por llamar la atención de Jean-Claude Van Damme", true),
      opt("Por un papel en la película"),
      opt("Por cuidar de Marcel"),
      opt("Por un autógrafo"),
    ],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿A qué actriz famosa conoce Chandler en este episodio, interpretando a un personaje llamado Susie?",
    options: [opt("Julia Roberts", true), opt("Brooke Shields"), opt("Winona Ryder"), opt("Christina Applegate")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Por qué quiere Susie vengarse de Chandler?",
    options: [
      opt("Por una humillación que él le hizo pasar en cuarto de primaria", true),
      opt("Porque él canceló una cita con ella"),
      opt("Porque él salió con su hermana"),
      opt("Porque él se burló de ella en el instituto"),
    ],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Qué papel tiene Joey en el rodaje de la película en este episodio?",
    options: [
      opt("El de un extra que sobreactúa", true),
      opt("El protagonista"),
      opt("El doble de acción"),
      opt("El guionista"),
    ],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Dónde tiene lugar el rodaje en el que aparece Marcel?",
    options: [opt("En un set de rodaje de cine", true), opt("En el zoo"), opt("En un plató de televisión"), opt("En un parque")],
  },

  // Episodio 14 — The One with the Prom Video
  {
    episode: 14,
    difficulty: "easy",
    text: "¿Qué ven los amigos juntos en este episodio, que da título al capítulo?",
    options: [
      opt("Un vídeo casero del baile de graduación de Monica y Rachel", true),
      opt("Un vídeo de la boda de Ross y Carol"),
      opt("Un vídeo de la infancia de Chandler"),
      opt("Un vídeo del nacimiento de Ben"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué revela el vídeo sobre Monica y Rachel de jóvenes?",
    options: [
      opt("Que Monica tenía sobrepeso y Rachel una nariz grande", true),
      opt("Que ambas eran animadoras"),
      opt("Que se odiaban de adolescentes"),
      opt("Que Rachel llevaba aparato dental"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Por qué acaba Ross acompañando a Monica al baile de graduación en el vídeo?",
    options: [
      opt("Porque el chico con el que iba Monica la dejó plantada", true),
      opt("Porque Monica se lo pidió desde el principio"),
      opt("Porque a Ross tampoco le quedaba pareja"),
      opt("Porque sus padres lo organizaron"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué hace Rachel justo después de ver ese momento del vídeo?",
    options: [opt("Besa a Ross", true), opt("Se enfada con Ross"), opt("Llama a su madre"), opt("Se va del apartamento")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Cuánto dinero le devuelve Joey a Chandler en este episodio?",
    options: [opt("812 dólares", true), opt("500 dólares"), opt("1.000 dólares"), opt("250 dólares")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Qué regalo le da además Joey a Chandler, que a este le parece \"demasiado gay\"?",
    options: [
      opt("Una pulsera de oro grabada", true),
      opt("Un reloj"),
      opt("Un anillo"),
      opt("Una cadena con un colgante"),
    ],
  },

  // Episodio 15 — The One Where Ross and Rachel...You Know
  {
    episode: 15,
    difficulty: "easy",
    text: "¿Qué compra Joey en este episodio para convertirse en un \"teleadicto\"?",
    options: [
      opt("Una tele de pantalla grande y sillones reclinables de cuero", true),
      opt("Una videoconsola"),
      opt("Un sofá cama"),
      opt("Un equipo de música"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Para quién hace Monica un catering en este episodio, iniciando así una nueva relación?",
    options: [
      opt("Para el Dr. Richard Burke, un viejo amigo de la familia", true),
      opt("Para un antiguo profesor"),
      opt("Para el jefe de Chandler"),
      opt("Para un cliente anónimo"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿A qué se dedica Richard, el nuevo interés amoroso de Monica?",
    options: [opt("Es oftalmólogo", true), opt("Es abogado"), opt("Es chef"), opt("Es dentista")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué paso importante dan Ross y Rachel en este episodio?",
    options: [opt("Tienen su primera cita real", true), opt("Se prometen"), opt("Se mudan juntos"), opt("Rompen definitivamente")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Dónde pasan la noche Ross y Rachel tras su cita?",
    options: [
      opt("En una exhibición de un museo", true),
      opt("En un hotel"),
      opt("En el apartamento de Ross"),
      opt("En Central Perk"),
    ],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Cómo se despiertan Ross y Rachel a la mañana siguiente, para sorpresa de los visitantes del museo?",
    options: [
      opt("Desnudos bajo una piel de animal de la exhibición", true),
      opt("Vestidos pero abrazados en el suelo"),
      opt("Cada uno en una esquina distinta"),
      opt("Rodeados de guardias de seguridad"),
    ],
  },

  // Episodio 16 — The One Where Joey Moves Out
  {
    episode: 16,
    difficulty: "easy",
    text: "¿Qué decide hacer Joey en este episodio, gracias al dinero de la telenovela?",
    options: [
      opt("Mudarse a su propio apartamento", true),
      opt("Comprarse un coche"),
      opt("Irse de vacaciones"),
      opt("Contratar a un agente"),
    ],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Cómo se siente Chandler ante la mudanza de Joey?",
    options: [opt("Disgustado y afectado", true), opt("Aliviado"), opt("Indiferente"), opt("Feliz por él")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué le cuesta contarles Monica a sus padres en este episodio?",
    options: [
      opt("Que está saliendo con Richard", true),
      opt("Que ha dejado su trabajo"),
      opt("Que se muda"),
      opt("Que ha roto con Richard"),
    ],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué se hacen Rachel y Phoebe juntas en este episodio?",
    options: [opt("Un tatuaje", true), opt("Un piercing"), opt("Un corte de pelo a juego"), opt("Un tinte de pelo")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Dónde se hace Rachel su tatuaje y qué diseño elige?",
    options: [
      opt("Un corazón en el glúteo", true),
      opt("Una mariposa en el tobillo"),
      opt("Una estrella en la muñeca"),
      opt("Un símbolo en la espalda"),
    ],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Qué tatuaje se hace Phoebe, mucho más discreto que el de Rachel?",
    options: [opt("Un pequeño punto azul", true), opt("Una pluma diminuta"), opt("Sus iniciales"), opt("Una luna diminuta")],
  },

  // Episodio 17 — The One Where Eddie Moves In
  {
    episode: 17,
    difficulty: "easy",
    text: "¿Quién se muda con Chandler tras la marcha de Joey?",
    options: [opt("Eddie", true), opt("Un desconocido de un anuncio"), opt("Ross"), opt("Gunther")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué le ofrece un productor discográfico a Phoebe en este episodio?",
    options: [
      opt("Hacer un videoclip de una de sus canciones", true),
      opt("Grabar un disco completo"),
      opt("Una gira"),
      opt("Un contrato discográfico"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué truco le hace el productor a Phoebe con el videoclip?",
    options: [
      opt("Dobla su voz con la de otra cantante en secreto", true),
      opt("Usa una canción distinta a la suya"),
      opt("Le cambia el nombre en los créditos"),
      opt("Cancela el proyecto sin avisarle"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Por qué quiere Joey volver a vivir con Chandler poco después de mudarse?",
    options: [
      opt("Porque no le gusta vivir solo", true),
      opt("Porque no puede pagar el alquiler"),
      opt("Porque su apartamento está embrujado"),
      opt("Porque echa de menos a Ross"),
    ],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué actividades se niega a compartir Eddie con Joey y Chandler?",
    options: [
      opt("Jugar al futbolín y ver \"Baywatch\"", true),
      opt("Salir a tomar algo"),
      opt("Ver deportes"),
      opt("Cocinar juntos"),
    ],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué provoca fricción entre Ross y Monica en este episodio?",
    options: [
      opt("La relación de Ross con Rachel", true),
      opt("Un problema de dinero"),
      opt("Las nuevas normas del apartamento"),
      opt("La relación de Monica con Richard"),
    ],
  },

  // Episodio 18 — The One Where Dr. Ramoray Dies
  {
    episode: 18,
    difficulty: "easy",
    text: "¿A qué personaje interpreta Joey en su telenovela?",
    options: [opt("Al Dr. Drake Ramoray", true), opt("A un abogado"), opt("A un policía"), opt("A un villano")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Qué afirma Joey en una entrevista que enfurece al guionista de la serie?",
    options: [
      opt("Que él mismo escribe sus propios diálogos", true),
      opt("Que la serie es mala"),
      opt("Que quiere dejar el programa"),
      opt("Que odia a sus compañeros de reparto"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Cómo se venga el guionista de Joey?",
    options: [
      opt("Matando a su personaje en la trama", true),
      opt("Reduciéndole el sueldo"),
      opt("Quitándole todas sus líneas"),
      opt("Despidiéndolo directamente"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Qué tipo de conversación tienen tanto Monica con Richard como Ross con Rachel en este episodio?",
    options: [
      opt("Sobre su historial sexual pasado", true),
      opt("Sobre tener hijos"),
      opt("Sobre mudarse juntos"),
      opt("Sobre sus ex parejas actuales"),
    ],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué comportamiento extraño empieza a mostrar Eddie en este episodio?",
    options: [
      opt("Un comportamiento inquietante y poco fiable", true),
      opt("Deja de hablar por completo"),
      opt("Empieza a robar cosas"),
      opt("Se muda sin avisar"),
    ],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿De qué forma muere el Dr. Drake Ramoray en la telenovela?",
    options: [
      opt("Cayendo por un hueco de ascensor", true),
      opt("En un accidente de coche"),
      opt("Le disparan"),
      opt("Sufre un infarto"),
    ],
  },

  // Episodio 19 — The One Where Eddie Won't Go
  {
    episode: 19,
    difficulty: "easy",
    text: "¿Qué le pide Chandler a Eddie en este episodio?",
    options: [opt("Que se mude de su apartamento", true), opt("Que le preste dinero"), opt("Que deje de fumar"), opt("Que cambie de trabajo")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Cómo reacciona Eddie a la petición de Chandler de que se marche?",
    options: [
      opt("No recuerda esa conversación en absoluto", true),
      opt("Se enfada y se va esa misma noche"),
      opt("Acepta sin problema"),
      opt("Amenaza con demandarle"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué viaje imagina Eddie que hicieron juntos, que en realidad nunca ocurrió?",
    options: [opt("Un viaje a Las Vegas", true), opt("Un viaje a Atlantic City"), opt("Un viaje a Miami"), opt("Un viaje a Canadá")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué está a punto de perder Joey en este episodio?",
    options: [
      opt("Su estilo de vida al perder el trabajo en la telenovela", true),
      opt("Su apartamento"),
      opt("A sus amigos"),
      opt("Su carné de actor"),
    ],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué estrategia usan Chandler y Joey para conseguir que Eddie se vaya?",
    options: [
      opt("Hacerle creer que nunca vivió allí", true),
      opt("Llamar a la policía"),
      opt("Cambiar la cerradura mientras duerme"),
      opt("Pedirle ayuda a Ross"),
    ],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué tipo de reunión celebran las chicas en este episodio?",
    options: [
      opt("Una \"reunión de diosas\" donde sueltan verdades ocultas", true),
      opt("Una fiesta de disfraces"),
      opt("Una cena de despedida para Joey"),
      opt("Una reunión para planear la boda de Monica"),
    ],
  },

  // Episodio 20 — The One Where Old Yeller Dies
  {
    episode: 20,
    difficulty: "easy",
    text: "¿Qué película descubre Phoebe que tiene un final muy triste en este episodio?",
    options: [opt("Old Yeller", true), opt("Bambi"), opt("El Rey León"), opt("E.T.")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Cómo afecta a Phoebe descubrir el verdadero final de esa película?",
    options: [
      opt("La deja devastada y le cambia la visión positiva del mundo", true),
      opt("Le da igual"),
      opt("Se ríe de ello"),
      opt("Deja de ver películas para siempre"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Qué hace Phoebe a raíz de este descubrimiento?",
    options: [
      opt("Empieza a ver películas tristes que su madre le prohibía de niña", true),
      opt("Solo ve comedias"),
      opt("Deja de ver la televisión"),
      opt("Se apunta a clases de cine"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Por qué se pone celosa Monica en este episodio?",
    options: [
      opt("Porque Chandler y Joey invitan a Richard a un partido de los Knicks", true),
      opt("Porque Richard sale con otra mujer"),
      opt("Porque Richard cancela una cena"),
      opt("Porque Richard no la presenta a sus amigos"),
    ],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué quiere Ross en este episodio respecto a los \"primeros momentos\" de Ben?",
    options: [
      opt("Estar presente en todos ellos", true),
      opt("Grabarlos en vídeo para Carol"),
      opt("Que Rachel los viva con él"),
      opt("Documentarlos en un álbum"),
    ],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué descubre Rachel, sin querer, sobre los planes de Ross respecto a su futuro juntos?",
    options: [
      opt("Que ya ha planeado toda su vida en común, lo que la inquieta", true),
      opt("Que Ross quiere volver con Julie"),
      opt("Que Ross no quiere tener más hijos"),
      opt("Que Ross planea mudarse de ciudad"),
    ],
  },

  // Episodio 21 — The One with the Bullies
  {
    episode: 21,
    difficulty: "easy",
    text: "¿Por qué se pelean Ross y Chandler con dos matones en este episodio?",
    options: [
      opt("Por su sofá favorito en Central Perk", true),
      opt("Por un sitio de aparcamiento"),
      opt("Por una chica"),
      opt("Por una discusión de fútbol"),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué le roban los matones a Chandler durante el enfrentamiento?",
    options: [opt("Su gorro", true), opt("Su cartera"), opt("Su chaqueta"), opt("Su reloj")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Por qué se ve obligada Monica a trabajar en el Moondance Diner con un uniforme ridículo?",
    options: [
      opt("Porque pierde casi todo su dinero en la bolsa", true),
      opt("Porque la despiden de su trabajo de chef"),
      opt("Porque quiere ahorrar para un viaje"),
      opt("Porque pierde una apuesta"),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿A quién conoce Phoebe en este episodio tras atropellar accidentalmente a su perro?",
    options: [opt("A su medio hermano, Frank Jr.", true), opt("A su padre biológico"), opt("A su madre biológica"), opt("A una prima")],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Qué les ocurre a las pertenencias del grupo durante este episodio?",
    options: [
      opt("Se las roban unos ladrones callejeros", true),
      opt("Se las confisca la policía"),
      opt("Se pierden en una mudanza"),
      opt("Las venden por error"),
    ],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Cómo termina finalmente el conflicto con los matones?",
    options: [
      opt("Hacen las paces, aunque uno de ellos se queda con el gorro", true),
      opt("Llaman a la policía y los detienen"),
      opt("Los matones piden perdón formalmente"),
      opt("Nunca se reconcilian"),
    ],
  },

  // Episodio 22 — The One with the Two Parties
  {
    episode: 22,
    difficulty: "easy",
    text: "¿Qué celebración da título a este episodio, que acaba dividida en dos?",
    options: [
      opt("El cumpleaños de Rachel", true),
      opt("La boda de Monica"),
      opt("El cumpleaños de Ross"),
      opt("Nochevieja"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Por qué organiza el grupo dos fiestas separadas en este episodio?",
    options: [
      opt("Para mantener alejados a los padres de Rachel, que se están divorciando", true),
      opt("Porque el piso es demasiado pequeño"),
      opt("Porque Rachel quiere dos celebraciones distintas"),
      opt("Por un malentendido con las invitaciones"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Dónde se monta la segunda fiesta, aparte de en casa de Monica y Rachel?",
    options: [
      opt("En el apartamento de Chandler y Joey", true),
      opt("En Central Perk"),
      opt("En casa de Ross"),
      opt("En un restaurante"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Cómo se siente Rachel al tener que ir alternando entre ambas fiestas?",
    options: [opt("Deprimida", true), opt("Encantada"), opt("Indiferente"), opt("Furiosa")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Quién consuela a Rachel compartiendo su propia experiencia con el divorcio de sus padres?",
    options: [opt("Chandler", true), opt("Joey"), opt("Phoebe"), opt("Ross")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Qué hace Joey al despedirse de una invitada llamada Sandra?",
    options: [opt("La besa", true), opt("Le pide su número"), opt("La invita a salir"), opt("Le regala algo")],
  },

  // Episodio 23 — The One with the Chicken Pox
  {
    episode: 23,
    difficulty: "easy",
    text: "¿Qué enfermedad contagia Ben a Phoebe en este episodio?",
    options: [opt("La varicela", true), opt("La gripe"), opt("El sarampión"), opt("Las paperas")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Quién llega justo cuando Phoebe está enferma, complicando su encuentro?",
    options: [
      opt("Ryan, su novio de la Marina", true),
      opt("Su padre biológico"),
      opt("Su hermana Ursula"),
      opt("Un antiguo novio"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿A qué se dedica Ryan, el novio de Phoebe en este episodio?",
    options: [opt("Es militar de la Marina", true), opt("Es médico"), opt("Es piloto comercial"), opt("Es bombero")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué personaje interpreta Joey en la oficina de Chandler, causándole problemas?",
    options: [
      opt("A \"Joseph\", metiéndose demasiado en el papel", true),
      opt("A un cliente importante"),
      opt("A un jefe estricto"),
      opt("A un compañero de trabajo real"),
    ],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué está a punto de costarle a Chandler la actuación de Joey en su oficina?",
    options: [opt("Su trabajo", true), opt("Su amistad con Joey"), opt("Un ascenso"), opt("Su relación con Richard")],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué quiere Monica que tenga Richard, algo que ella considera que la hace especial?",
    options: [
      opt("Un \"algo\" inexplicable y único", true),
      opt("Un segundo trabajo"),
      opt("Un tatuaje"),
      opt("Un talento oculto"),
    ],
  },

  // Episodio 24 — The One with Barry and Mindy's Wedding
  {
    episode: 24,
    difficulty: "easy",
    text: "¿A la boda de quién asiste Rachel como dama de honor en este episodio?",
    options: [
      opt("A la de su exprometido Barry, con Mindy", true),
      opt("A la de Monica"),
      opt("A la de Ross"),
      opt("A la de su hermana"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué mentiras ha difundido Barry sobre Rachel antes de la boda?",
    options: [
      opt("Que tiene sífilis y problemas mentales", true),
      opt("Que le robó dinero"),
      opt("Que le fue infiel"),
      opt("Que es alcohólica"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué reto tiene que superar Rachel durante la boda?",
    options: [
      opt("Cantar la canción \"Copacabana\" en público pese a su miedo", true),
      opt("Dar un discurso"),
      opt("Bailar con Barry"),
      opt("Organizar todo el evento sola"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Para qué papel de cine practica Joey besar a otros hombres en este episodio?",
    options: [
      opt("Para una audición de una película de Warren Beatty", true),
      opt("Para un anuncio de televisión"),
      opt("Para una obra de teatro"),
      opt("Para un papel en su telenovela"),
    ],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Por qué rompen Monica y Richard en este episodio?",
    options: [
      opt("Porque no coinciden en si quieren tener hijos", true),
      opt("Porque él se muda a otra ciudad"),
      opt("Porque ella prefiere a otra persona"),
      opt("Por problemas económicos"),
    ],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Qué descubre Chandler sobre la misteriosa mujer con la que habla por internet?",
    options: [
      opt("Que es Janice, su exnovia", true),
      opt("Que es una compañera de trabajo"),
      opt("Que es Susie, de la temporada"),
      opt("Que en realidad es un hombre"),
    ],
  },
];
