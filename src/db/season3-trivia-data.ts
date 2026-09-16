/**
 * Datos de trivia de la Temporada 3 de Friends (25 episodios).
 *
 * Generado a partir de un resumen argumental episodio a episodio obtenido
 * de Wikipedia ("Friends (season 3)", en.wikipedia.org/wiki/Friends_season_3)
 * en septiembre de 2026, para evitar inventar detalles de trama de memoria.
 *
 * 6 preguntas por episodio (150 en total), todas en modo `multiple_choice`,
 * con mayoría de dificultad `medium`/`hard` y una minoría `easy` por
 * episodio. El orden de las opciones se baraja en `seed-season3.ts` antes
 * de insertar, para que la respuesta correcta no quede siempre en la misma
 * posición.
 */

export type Season3TriviaSeed = {
  episode: number;
  difficulty: "easy" | "medium" | "hard";
  text: string;
  options: { text: string; isCorrect: boolean }[];
};

function opt(text: string, isCorrect = false) {
  return { text, isCorrect };
}

export const season3TriviaData: Season3TriviaSeed[] = [
  // Episodio 1 — The One with the Princess Leia Fantasy
  {
    episode: 1,
    difficulty: "easy",
    text: "¿Qué personaje de Star Wars protagoniza la fantasía que Ross le confiesa a Rachel?",
    options: [opt("La Princesa Leia", true), opt("Han Solo"), opt("La Reina Amidala"), opt("Luke Skywalker")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Con qué disfraz concreto de Leia fantasea Ross?",
    options: [
      opt("El bikini dorado de \"El Retorno del Jedi\"", true),
      opt("El vestido blanco de \"Una Nueva Esperanza\""),
      opt("La ropa de nieve de Hoth"),
      opt("El traje de Endor"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Por qué tiene Monica problemas para dormir en este episodio?",
    options: [
      opt("Por la ruptura con Richard", true),
      opt("Por el ruido del vecino"),
      opt("Por estrés en el trabajo"),
      opt("Por una mudanza"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Qué intenta conseguir Chandler entre Joey y Janice?",
    options: [
      opt("Que se lleven bien entre ellos", true),
      opt("Que rompan definitivamente"),
      opt("Que Janice deje de fumar"),
      opt("Que salgan juntos sin él"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Cómo es la relación entre Chandler y Janice al empezar la temporada 3?",
    options: [
      opt("Han vuelto, de forma intermitente", true),
      opt("Rota para siempre"),
      opt("Comprometidos para casarse"),
      opt("Nunca se han conocido"),
    ],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Cómo se siente Rachel al enterarse de la fantasía de Ross?",
    options: [
      opt("Incómoda y algo celosa", true),
      opt("Le hace muchísima gracia"),
      opt("Indiferente por completo"),
      opt("Halagada"),
    ],
  },

  // Episodio 2 — The One Where No One's Ready
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Para qué evento tiene que estar listo todo el mundo en este episodio?",
    options: [
      opt("Una gala en el museo donde trabaja Ross", true),
      opt("La boda de un amigo"),
      opt("Una cena familiar"),
      opt("Un concierto"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué le pasa al vestido de Phoebe mientras todos se preparan?",
    options: [
      opt("Le cae hummus encima", true),
      opt("Se le rompe una costura"),
      opt("Se moja con café"),
      opt("Se le queda pequeño"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Por qué se pelean Joey y Chandler durante el episodio?",
    options: [
      opt("Por una silla de Monica", true),
      opt("Por el mando de la tele"),
      opt("Por quién se ducha primero"),
      opt("Por un traje prestado"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué hace Ross que provoca que Rachel no quiera ir al evento?",
    options: [opt("Le grita", true), opt("Se olvida de invitarla"), opt("Cancela sus planes"), opt("Llega tarde a buscarla")],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Qué espera ansiosamente Monica durante todo el episodio?",
    options: [
      opt("Una llamada de Richard", true),
      opt("Una llamada de trabajo"),
      opt("Un mensaje de su hermano"),
      opt("Una entrega a domicilio"),
    ],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Qué tiene de particular el formato de este episodio?",
    options: [
      opt("Transcurre en tiempo real dentro del apartamento", true),
      opt("Se narra en flashback"),
      opt("No aparece Ross"),
      opt("Es un episodio musical"),
    ],
  },

  // Episodio 3 — The One with the Jam
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Con quién confunde Malcolm a Phoebe en este episodio?",
    options: [opt("Con Ursula, su hermana gemela", true), opt("Con Rachel"), opt("Con una actriz famosa"), opt("Con Monica")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué hace Monica para sobrellevar lo de Richard en este episodio?",
    options: [opt("Se pone a hacer mermelada", true), opt("Se apunta a clases de yoga"), opt("Se va de viaje"), opt("Empieza a salir con otro")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué le pasa a Joey en este episodio?",
    options: [
      opt("Se lesiona el hombro saltando en las camas", true),
      opt("Se rompe un dedo del pie"),
      opt("Se resfría"),
      opt("Se corta cocinando"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué le dan Ross y Rachel a Chandler en este episodio?",
    options: [opt("Consejos para ligar", true), opt("Dinero prestado"), opt("Un regalo de cumpleaños"), opt("Un trabajo")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Cómo le sale a Ross el consejo que le da a Chandler?",
    options: [opt("Le sale mal, se le vuelve en contra", true), opt("Le funciona de maravilla"), opt("No llega a probarlo"), opt("Lo usa Joey en su lugar")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Quién es Ursula, la persona con la que confunden a Phoebe?",
    options: [opt("Su hermana gemela idéntica", true), opt("Su prima"), opt("Su madre"), opt("Una compañera de trabajo")],
  },

  // Episodio 4 — The One with the Metaphorical Tunnel
  {
    episode: 4,
    difficulty: "easy",
    text: "¿De qué finge ser Phoebe en este episodio?",
    options: [opt("La agente de Joey", true), opt("La abogada de Ross"), opt("La representante de Monica"), opt("La manager de un grupo musical")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué tiene que explicarle Phoebe a Joey como su falsa agente?",
    options: [
      opt("Por qué le siguen rechazando en los castings", true),
      opt("Por qué no le pagan a tiempo"),
      opt("Por qué perdió un papel ya conseguido"),
      opt("Por qué no consigue ni una audición"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué elige Ben en lugar del muñeco de G.I. Joe?",
    options: [opt("Una muñeca Barbie", true), opt("Un peluche"), opt("Un videojuego"), opt("Un cuento")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Por qué se disgusta Ross con la elección de juguete de Ben?",
    options: [
      opt("Porque prefiere la Barbie al G.I. Joe", true),
      opt("Porque rompe el juguete"),
      opt("Porque se lo regala a otro niño"),
      opt("Porque no quiere jugar con nadie"),
    ],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Qué miedo empieza a aflorar en Chandler respecto a Janice en este episodio?",
    options: [opt("El miedo al compromiso", true), opt("El miedo a que le engañe"), opt("El miedo a conocer a su familia"), opt("El miedo a mudarse juntos")],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Qué busca Chandler a raíz de ese miedo?",
    options: [opt("Consejo sobre su relación con Janice", true), opt("Terapia de pareja"), opt("Una excusa para romper"), opt("La opinión de Janice")],
  },

  // Episodio 5 — The One with Frank Jr.
  {
    episode: 5,
    difficulty: "easy",
    text: "¿Quién es Frank Jr., que aparece en este episodio?",
    options: [opt("El medio hermano de Phoebe", true), opt("El primo de Ross"), opt("Un compañero de trabajo de Chandler"), opt("El hermano de Joey")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué construye Joey en este episodio?",
    options: [
      opt("Un mueble enorme para la tele", true),
      opt("Una estantería para libros"),
      opt("Una mesa de comedor"),
      opt("Un armario para Chandler"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Con quién intenta ligar Ross en Central Perk en este episodio?",
    options: [opt("Con Isabella Rossellini", true), opt("Con una desconocida"), opt("Con la nueva camarera"), opt("Con una compañera de trabajo")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué hace Ross para intentar ligar con ella?",
    options: [
      opt("Consulta una lista de famosas con las que \"tiene permiso\" de ligar", true),
      opt("Le pide el número directamente"),
      opt("Le pide ayuda a Joey para acercarse"),
      opt("Finge trabajar en el museo con ella"),
    ],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Cómo se comporta Frank Jr. durante su visita, generando malentendidos?",
    options: [opt("De forma peculiar y poco convencional", true), opt("Muy formal y tímido"), opt("Grosero y agresivo"), opt("Callado todo el tiempo")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué parentesco exacto tiene Frank Jr. con Phoebe?",
    options: [opt("Es su medio hermano", true), opt("Es su hermano gemelo"), opt("Es su sobrino"), opt("Es su primo")],
  },

  // Episodio 6 — The One with the Flashback
  {
    episode: 6,
    difficulty: "easy",
    text: "¿A qué año viajan los flashbacks de este episodio?",
    options: [opt("A 1993", true), opt("A 1989"), opt("A 1991"), opt("A 1995")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué estuvo a punto de pasar entre Ross y Phoebe en el pasado?",
    options: [opt("Estuvieron a punto de acostarse juntos", true), opt("Estuvieron a punto de vivir juntos"), opt("Estuvieron a punto de casarse"), opt("Estuvieron a punto de pelearse para siempre")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué gesto de Monica malinterpreta Joey en el pasado?",
    options: [opt("Una oferta de limonada", true), opt("Una invitación a cenar"), opt("Un abrazo de despedida"), opt("Un cumplido sobre su ropa")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué intenta hacer Chandler en un bar, según el flashback?",
    options: [opt("Ligar con Rachel", true), opt("Ligar con Monica"), opt("Evitar a Janice"), opt("Buscar trabajo")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Con quién estuvo a punto de acostarse Ross en el pasado, según se revela aquí?",
    options: [opt("Con Phoebe", true), opt("Con Rachel"), opt("Con Monica"), opt("Con Janice")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué recurso narrativo usa este episodio para contar estas historias?",
    options: [opt("Flashbacks al pasado del grupo", true), opt("Sueños de los personajes"), opt("Cartas que se leen en voz alta"), opt("Una grabación de vídeo casera")],
  },

  // Episodio 7 — The One with the Race Car Bed
  {
    episode: 7,
    difficulty: "easy",
    text: "¿Qué intenta lograr Rachel entre su padre y Ross en este episodio?",
    options: [opt("Que se lleven bien", true), opt("Que no se vean nunca"), opt("Que trabajen juntos"), opt("Que vivan juntos")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿En qué acaban coincidiendo el padre de Rachel y Ross, para disgusto de ella?",
    options: [opt("En criticarla a ella", true), opt("En criticar a Monica"), opt("En hablar de dinosaurios"), opt("En ignorarse mutuamente")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué hace Joey con un alumno al que da clases de interpretación?",
    options: [opt("Sabotea su audición", true), opt("Le consigue un papel"), opt("Le presenta a un director"), opt("Le da el papel que él quería")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué intenta devolver Monica en este episodio, que da título al capítulo?",
    options: [opt("Una cama con forma de coche de carreras", true), opt("Un sofá"), opt("Una televisión"), opt("Una nevera")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Qué descubre Monica mientras intenta devolver la cama?",
    options: [
      opt("A Janice besando a su exmarido", true),
      opt("Una rebaja en otra tienda"),
      opt("Que la tienda ha cerrado"),
      opt("A un antiguo compañero de instituto"),
    ],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Por qué acaban Joey y Ross confabulados con el padre de Rachel?",
    options: [
      opt("Porque comparten la costumbre de meterse con ella", true),
      opt("Porque quieren venderle algo"),
      opt("Porque buscan su aprobación de otra forma"),
      opt("Porque el padre les paga por ello"),
    ],
  },

  // Episodio 8 — The One with the Giant Poking Device
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Por qué rompe Chandler con Janice en este episodio?",
    options: [
      opt("Porque se entera de que besó a su exmarido", true),
      opt("Porque ella se muda a otra ciudad"),
      opt("Porque él conoce a otra persona"),
      opt("Porque discuten por dinero"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué le ocultan a Ross Monica y Rachel en este episodio?",
    options: [opt("Un golpe en la cabeza de Ben", true), opt("Que perdieron a Ben en el parque"), opt("Una mala nota de Ben"), opt("Que Ben rompió algo suyo")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué miedo supera Phoebe en este episodio?",
    options: [opt("El miedo al dentista", true), opt("El miedo a volar"), opt("El miedo a las alturas"), opt("El miedo a la oscuridad")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué construye el grupo, que da nombre al episodio?",
    options: [
      opt("Un artilugio con palillos chinos para pinchar a alguien a distancia", true),
      opt("Una cámara casera"),
      opt("Un intercomunicador"),
      opt("Un espejo gigante"),
    ],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿A quién usan como \"conejillo de indias\" con ese artilugio?",
    options: [opt("A Ugly Naked Guy", true), opt("A Gunther"), opt("A un repartidor"), opt("A Joey mientras duerme")],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Con qué material está hecho principalmente el artilugio?",
    options: [opt("Palillos chinos unidos entre sí", true), opt("Un palo de escoba"), opt("Percheros de alambre"), opt("Tubos de cartón")],
  },

  // Episodio 9 — The One with the Football
  {
    episode: 9,
    difficulty: "easy",
    text: "¿En qué festividad transcurre este episodio?",
    options: [opt("Acción de Gracias", true), opt("Navidad", false), opt("Año Nuevo", false), opt("Halloween", false)],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué juego saca a relucir el lado competitivo de Ross y Monica?",
    options: [opt("Un partido de fútbol americano improvisado", true), opt("Una partida de cartas"), opt("Un concurso de cocina"), opt("Un juego de mesa")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Por qué discuten Joey y Chandler en este episodio?",
    options: [
      opt("Por salir con la misma modelo holandesa", true),
      opt("Por el marcador del partido"),
      opt("Por quién invita a la comida"),
      opt("Por un regalo de Acción de Gracias"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Cómo se siente Rachel durante el partido?",
    options: [opt("Dejada de lado por los demás", true), opt("La más valorada del equipo"), opt("Encantada de jugar"), opt("Indiferente")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Qué rasgo de personalidad de Ross y Monica se dispara durante el partido?",
    options: [opt("Su espíritu competitivo", true), opt("Su generosidad"), opt("Su timidez"), opt("Su torpeza física")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿De qué nacionalidad es la modelo por la que compiten Joey y Chandler?",
    options: [opt("Holandesa", true), opt("Francesa"), opt("Sueca"), opt("Italiana")],
  },

  // Episodio 10 — The One Where Rachel Quits
  {
    episode: 10,
    difficulty: "easy",
    text: "¿Qué trabajo deja Rachel en este episodio?",
    options: [opt("Camarera en Central Perk", true), opt("Dependienta en unos grandes almacenes"), opt("Recepcionista"), opt("Ayudante de chef")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué carrera quiere perseguir Rachel al dejar su trabajo?",
    options: [opt("Una carrera en el mundo de la moda", true), opt("Ser actriz"), opt("Ser chef"), opt("Ser profesora")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué le exige Gunther a Rachel antes de dejarla marchar?",
    options: [opt("Que entrene a su sustituta", true), opt("Que devuelva su delantal"), opt("Que trabaje un mes más"), opt("Que pague una penalización")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué le angustia a Phoebe en este episodio?",
    options: [
      opt("Que se talen árboles de Navidad", true),
      opt("Que suban los precios del café"),
      opt("Que cierre Central Perk"),
      opt("Que Rachel se vaya para siempre"),
    ],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué le pasa a Ross con una niña en este episodio?",
    options: [opt("Le rompe una pierna por accidente", true), opt("Le pierde su mochila"), opt("La deja plantada en una cita de estudio"), opt("Le rompe un juguete")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Cómo intenta Ross compensar a la niña?",
    options: [
      opt("Llevándola a actividades tipo campamento espacial", true),
      opt("Regalándole un telescopio"),
      opt("Pagándole el hospital"),
      opt("Invitándola a ver dinosaurios en el museo"),
    ],
  },

  // Episodio 11 — The One Where Chandler Can't Remember Which Sister
  {
    episode: 11,
    difficulty: "easy",
    text: "¿Con quién empieza a salir el vecino de arriba de Monica y Rachel?",
    options: [opt("Con Phoebe", true), opt("Con Rachel"), opt("Con Monica"), opt("Con una amiga de Phoebe")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Cómo consigue Rachel el trabajo en Bloomingdale's?",
    options: [opt("Por una recomendación de Mark", true), opt("Respondiendo a un anuncio"), opt("Por una entrevista sin contactos"), opt("Por recomendación de su padre")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué le ocurre a Chandler estando borracho en este episodio?",
    options: [
      opt("Se lía con una de las hermanas de Joey", true),
      opt("Pierde la cartera"),
      opt("Se sube a un taxi equivocado"),
      opt("Llama a Janice sin querer"),
    ],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Qué problema tiene Chandler al día siguiente de esa noche?",
    options: [
      opt("No recuerda con cuál de las hermanas de Joey estuvo", true),
      opt("No recuerda dónde vive"),
      opt("No recuerda qué le dijo a Janice"),
      opt("No recuerda cómo volvió a casa"),
    ],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Cómo reacciona Joey al enterarse de lo ocurrido con su hermana?",
    options: [opt("Se enfada mucho con Chandler", true), opt("Le parece gracioso"), opt("No le da importancia"), opt("Se lo cuenta a toda la familia")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿En qué tienda consigue Rachel su nuevo empleo?",
    options: [opt("Bloomingdale's", true), opt("Central Perk"), opt("Un museo"), opt("Una revista de moda")],
  },

  // Episodio 12 — The One with All the Jealousy
  {
    episode: 12,
    difficulty: "easy",
    text: "¿Por quién siente celos Ross en el trabajo de Rachel?",
    options: [opt("Por Mark, un compañero de Rachel", true), opt("Por su jefe"), opt("Por un cliente"), opt("Por Gunther")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué hace Ross para \"competir\" con Mark?",
    options: [
      opt("Le manda regalos románticos a Rachel en el trabajo", true),
      opt("Se presenta sin avisar en su oficina"),
      opt("Le pide a Rachel que deje el trabajo"),
      opt("Habla directamente con Mark para intimidarlo"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué problema tiene Joey con su papel en Broadway?",
    options: [
      opt("Que mintió en su currículum y se nota", true),
      opt("Que pierde la voz"),
      opt("Que llega tarde a los ensayos"),
      opt("Que no le gusta el papel"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Con quién empieza a salir Monica en este episodio?",
    options: [opt("Con Julio, un poeta", true), opt("Con Pete Becker"), opt("Con Richard de nuevo"), opt("Con un compañero de cocina")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué descubre Monica que significa en realidad el poema que Julio le dedica?",
    options: [
      opt("Que la describe como alguien \"vacía\" por dentro", true),
      opt("Que la compara con una diosa"),
      opt("Que habla en realidad de su ex"),
      opt("Que es un poema plagiado"),
    ],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué exageró Joey en su currículum para conseguir el papel de Broadway?",
    options: [opt("Sus habilidades artísticas", true), opt("Su experiencia como director"), opt("Su nivel de inglés"), opt("Sus estudios universitarios")],
  },

  // Episodio 13 — The One Where Monica and Richard Are Just Friends
  {
    episode: 13,
    difficulty: "easy",
    text: "¿Qué intentan ser Monica y Richard en este episodio?",
    options: [opt("Solo amigos", true), opt("Socios de negocio"), opt("Compañeros de piso"), opt("Desconocidos")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿En qué acaban Monica y Richard a pesar de su intento de ser \"solo amigos\"?",
    options: [opt("Volviendo a intimar entre ellos", true), opt("Discutiendo para siempre"), opt("Haciéndose enemigos"), opt("Ignorándose completamente")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué libro lee Joey en este episodio?",
    options: [opt("\"Mujercitas\"", true), opt("\"El resplandor\""), opt("\"Orgullo y prejuicio\""), opt("\"Drácula\"")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué libro lee Rachel en este episodio?",
    options: [opt("\"El resplandor\"", true), opt("\"Mujercitas\""), opt("\"Frankenstein\""), opt("\"It\"")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Qué problema tiene el novio deportista de Phoebe en este episodio?",
    options: [
      opt("Se le asoma el pene por unos pantalones cortos muy holgados", true),
      opt("Se lesiona jugando delante de ella"),
      opt("Se olvida de sus citas"),
      opt("No para de hablar de deporte"),
    ],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Cómo reacciona Joey mientras lee su libro?",
    options: [opt("Se engancha mucho a la trama", true), opt("Lo abandona a las pocas páginas"), opt("No entiende nada"), opt("Se ríe sin parar")],
  },

  // Episodio 14 — The One with Phoebe's Ex-Partner
  {
    episode: 14,
    difficulty: "easy",
    text: "¿Cómo se llama la antigua compañera musical de Phoebe que reaparece en este episodio?",
    options: [opt("Leslie", true), opt("Ursula", false), opt("Denise", false), opt("Diane", false)],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Por qué se ofende Phoebe con Leslie en este episodio?",
    options: [
      opt("Porque usan \"Smelly Cat\" como jingle de comida para gatos", true),
      opt("Porque Leslie le roba una canción nueva"),
      opt("Porque Leslie no la invita a un concierto"),
      opt("Porque Leslie critica su forma de cantar"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué característica tiene la nueva novia de Chandler en este episodio?",
    options: [opt("Tiene una pierna ortopédica", true), opt("Es sordomuda"), opt("Es mucho mayor que él"), opt("Es su jefa")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿A qué acompaña Ross a Rachel en este episodio?",
    options: [opt("A un seminario de moda", true), opt("A una entrevista de trabajo"), opt("A una feria del libro"), opt("A una convención de ciencia")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Qué hace Ross durante el seminario que molesta a Rachel?",
    options: [opt("Se queda dormido", true), opt("Se pone a hablar con otra persona"), opt("Se marcha antes de tiempo"), opt("Se ríe en voz alta")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Qué canción de Phoebe termina convertida en un jingle publicitario?",
    options: [opt("\"Smelly Cat\"", true), opt("Una canción nueva sobre Nueva York"), opt("Una nana que canta a Ben"), opt("Una canción sobre Central Perk")],
  },

  // Episodio 15 — The One Where Ross and Rachel Take a Break
  {
    episode: 15,
    difficulty: "easy",
    text: "¿Por quién compiten Joey y Chandler en este episodio?",
    options: [opt("Por Chloe, del centro de copias", true), opt("Por una compañera de Joey"), opt("Por Janice"), opt("Por una vecina nueva")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué particularidad tiene el novio diplomático de Phoebe?",
    options: [
      opt("Necesita un intérprete para comunicarse", true),
      opt("Vive en otro país permanentemente"),
      opt("No puede salir de noche"),
      opt("Tiene guardaespaldas todo el tiempo"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué provoca la tensión entre Ross y Rachel en su aniversario?",
    options: [
      opt("Que ella prioriza el trabajo ese día", true),
      opt("Que él se olvida por completo de la fecha"),
      opt("Que discuten por dinero"),
      opt("Que ella cancela la cena sin avisar"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Dónde trabaja Chloe, la chica por la que compiten Joey y Chandler?",
    options: [opt("En el centro de copias/fotocopias", true), opt("En Central Perk"), opt("En Bloomingdale's"), opt("En el museo de Ross")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué hace Ross esa misma noche, tras la tensión con Rachel?",
    options: [opt("Se acuesta con Chloe", true), opt("Se va solo a un bar"), opt("Llama a Rachel para disculparse"), opt("Se queda en casa de Joey")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué le propone Rachel a Ross que da título a este episodio?",
    options: [opt("Tomarse un descanso en la relación", true), opt("Mudarse juntos"), opt("Prometerse"), opt("Dejar de verse a los demás amigos")],
  },

  // Episodio 16 — The One with the Morning After
  {
    episode: 16,
    difficulty: "easy",
    text: "¿Quién le revela a Rachel lo que pasó entre Ross y Chloe?",
    options: [opt("Gunther", true), opt("Phoebe"), opt("Chandler"), opt("El propio Ross")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Cómo reacciona Rachel al enterarse de lo ocurrido con Chloe?",
    options: [opt("Termina la relación con Ross", true), opt("Lo perdona de inmediato"), opt("No le da importancia"), opt("Se lo cuenta a Chloe")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Desde dónde escuchan los demás amigos la pelea entre Ross y Rachel?",
    options: [opt("Desde el dormitorio de Monica", true), opt("Desde la escalera del edificio"), opt("Desde Central Perk"), opt("Desde el apartamento de Chandler")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Qué argumento usa Ross para defenderse durante la pelea?",
    options: [
      opt("Que estaban \"en un descanso\" cuando ocurrió", true),
      opt("Que Chloe lo obligó"),
      opt("Que estaba borracho y no recuerda nada"),
      opt("Que Rachel también le había sido infiel antes"),
    ],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Qué frase, pronunciada por Ross en esta pelea, se hace muy famosa en la serie?",
    options: [opt("\"¡Estábamos en un descanso!\"", true), opt("\"¡Podría haberlo sido!\""), opt("\"No fue mi culpa\""), opt("\"Tú lo empezaste\"")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Cómo termina este episodio para Ross y Rachel como pareja?",
    options: [opt("Rotos y muy afectados ambos", true), opt("Reconciliados al final"), opt("Prometidos"), opt("Sin haber hablado del tema")],
  },

  // Episodio 17 — The One Without the Ski Trip
  {
    episode: 17,
    difficulty: "easy",
    text: "¿Qué plan hace el grupo sin avisar a Ross en este episodio?",
    options: [opt("Un viaje a esquiar", true), opt("Un viaje a la playa"), opt("Una fiesta sorpresa"), opt("Un crucero")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué le pasa al taxi de Phoebe camino al viaje?",
    options: [opt("Se avería", true), opt("Tiene un accidente leve"), opt("Se queda sin gasolina"), opt("Va al aeropuerto equivocado")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Cómo reacciona Rachel cuando Phoebe pide ayuda tras la avería?",
    options: [
      opt("Se niega a tener contacto con Ross para pedir ayuda", true),
      opt("Llama a Ross de inmediato"),
      opt("Va ella misma a rescatarla"),
      opt("Ignora por completo la llamada"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿A quién llama Phoebe en secreto para que la ayude?",
    options: [opt("A Ross", true), opt("A su hermana Ursula"), opt("A un taxi alternativo"), opt("A la policía")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué exige Phoebe a Ross y Rachel al final del episodio?",
    options: [
      opt("Que se comporten con civismo por el bien del grupo", true),
      opt("Que se reconcilien como pareja"),
      opt("Que dejen de hablarse directamente"),
      opt("Que se disculpen en público"),
    ],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Por qué es curioso el título de este episodio (\"Sin el viaje de esquí\")?",
    options: [
      opt("Porque el viaje transcurre entero fuera de cámara", true),
      opt("Porque en realidad nadie va a esquiar"),
      opt("Porque el viaje se cancela del todo"),
      opt("Porque Ross acaba yendo también"),
    ],
  },

  // Episodio 18 — The One with the Hypnosis Tape
  {
    episode: 18,
    difficulty: "easy",
    text: "¿Cuánto dinero de propina le deja Pete Becker a Monica?",
    options: [opt("20.000 dólares", true), opt("2.000 dólares"), opt("200 dólares"), opt("50.000 dólares")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Adónde lleva Pete a Monica en este episodio?",
    options: [opt("A Italia", true), opt("A Francia"), opt("A Grecia"), opt("A España")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Con quién se relaciona el hermano de 18 años de Phoebe en este episodio?",
    options: [
      opt("Con su antigua profesora, Alice", true),
      opt("Con una compañera de instituto"),
      opt("Con la hermana de un amigo"),
      opt("Con una vecina mayor que él"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Para qué usa Chandler la cinta de hipnosis que da título al episodio?",
    options: [opt("Para dejar de fumar", true), opt("Para superar el miedo a volar"), opt("Para dormir mejor"), opt("Para perder peso")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Para quién estaba pensada originalmente esa cinta de hipnosis?",
    options: [opt("Para mujeres", true), opt("Para niños"), opt("Para deportistas"), opt("Para ejecutivos")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Quién es Pete Becker?",
    options: [
      opt("Un cliente millonario del restaurante de Monica", true),
      opt("El nuevo jefe de Monica en la cocina"),
      opt("Un antiguo compañero de instituto de Monica"),
      opt("El casero del edificio"),
    ],
  },

  // Episodio 19 — The One with the Tiny T-Shirt
  {
    episode: 19,
    difficulty: "easy",
    text: "¿Con quién empieza a salir Rachel en este episodio?",
    options: [opt("Con Mark", true), opt("Con Pete"), opt("Con Julio"), opt("Con Tommy")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿De qué se da cuenta Rachel sobre sí misma en este episodio?",
    options: [
      opt("De que no está lista para una nueva relación", true),
      opt("De que sigue enamorada de Ross"),
      opt("De que quiere dejar su trabajo"),
      opt("De que quiere mudarse sola"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué planea Ross al principio del episodio?",
    options: [opt("Sabotear la nueva relación de Rachel", true), opt("Pedirle matrimonio a Rachel"), opt("Mudarse a otra ciudad"), opt("Presentarle a Mark a sus padres")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué acaba aceptando Ross al final del episodio?",
    options: [opt("Que Rachel ha pasado página", true), opt("Que él tiene la culpa de todo"), opt("Que debe disculparse con Mark"), opt("Que nunca la va a superar")],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿De quién se encapricha Joey en este episodio?",
    options: [opt("De Kate, su compañera de reparto", true), opt("De una vecina nueva"), opt("De la hermana de Chandler"), opt("De una camarera de Central Perk")],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Con quién sigue saliendo Monica sin sentir verdadera atracción?",
    options: [opt("Con Pete", true), opt("Con Julio"), opt("Con Richard"), opt("Con un compañero de cocina")],
  },

  // Episodio 20 — The One with the Dollhouse
  {
    episode: 20,
    difficulty: "easy",
    text: "¿Qué le hereda su tía a Monica en este episodio?",
    options: [opt("Una casa de muñecas antigua", true), opt("Un juego de vajilla"), opt("Un piano"), opt("Un coche antiguo")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Entre quiénes organiza Rachel una cita en este episodio?",
    options: [opt("Entre Chandler y su jefa Joanna", true), opt("Entre Ross y una compañera"), opt("Entre Phoebe y un cliente"), opt("Entre Joey y Kate")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Con quién se acuesta Joey en este episodio?",
    options: [opt("Con Kate", true), opt("Con Chloe"), opt("Con una fan"), opt("Con una compañera de clase")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿A quién complica esta relación de Joey?",
    options: [opt("Al director de la obra de teatro", true), opt("A su representante"), opt("A Chandler"), opt("A un productor de cine")],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué hace Phoebe con la casa de muñecas que disgusta a Monica?",
    options: [
      opt("Le añade sus propias ideas y decoración", true),
      opt("La vende sin permiso"),
      opt("La rompe sin querer"),
      opt("Se la regala a Ben"),
    ],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Cómo se llama la jefa de Rachel con la que Chandler tiene una cita?",
    options: [opt("Joanna", true), opt("Alice"), opt("Kate"), opt("Chloe")],
  },

  // Episodio 21 — The One with a Chick and a Duck
  {
    episode: 21,
    difficulty: "easy",
    text: "¿Qué dos animales adoptan Joey y Chandler en este episodio?",
    options: [opt("Un pollito y un pato", true), opt("Un gato y un perro"), opt("Dos conejos"), opt("Un hámster y un loro")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué le ofrece Pete a Monica en este episodio?",
    options: [opt("El puesto de chef principal", true), opt("Un anillo de compromiso"), opt("Un viaje alrededor del mundo"), opt("Un préstamo para abrir su propio restaurante")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿De qué se da cuenta Monica respecto a Pete en este episodio?",
    options: [
      opt("De que empieza a sentir algo real por él", true),
      opt("De que nunca podrá quererle"),
      opt("De que le está mintiendo"),
      opt("De que prefiere seguir soltera"),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué le pasa a Rachel en este episodio?",
    options: [opt("Se lesiona las costillas", true), opt("Se rompe un brazo"), opt("Se tuerce el tobillo"), opt("Se corta con cristal")],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Qué evento se pierde Ross por quedarse a cuidar de Rachel?",
    options: [
      opt("Un panel del Discovery Channel", true),
      opt("Una conferencia en el museo"),
      opt("Una cena con sus padres"),
      opt("La graduación de un alumno"),
    ],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Cómo reacciona Rachel al gesto de Ross de quedarse con ella?",
    options: [opt("Se emociona y lo valora mucho", true), opt("Le resulta indiferente"), opt("Se enfada porque no quería su ayuda"), opt("No se entera de lo que él sacrificó")],
  },

  // Episodio 22 — The One with the Screamer
  {
    episode: 22,
    difficulty: "easy",
    text: "¿Cómo se llama el nuevo novio de Rachel en este episodio?",
    options: [opt("Tommy", true), opt("Mark", false), opt("Pete", false), opt("Julio", false)],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Quién es el único que reconoce que Tommy tiene un problema de comportamiento?",
    options: [opt("Ross", true), opt("Chandler"), opt("Joey"), opt("Monica")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué pasa entre Joey y Kate en este episodio?",
    options: [opt("Rompen su relación", true), opt("Se hacen novios oficialmente"), opt("Se mudan juntos"), opt("Consiguen un papel juntos")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Cuánto tiempo pasa Phoebe al teléfono esperando en este episodio?",
    options: [opt("Varios días", true), opt("Unos minutos"), opt("Toda una noche"), opt("Una semana entera")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Por qué pasa Phoebe tanto tiempo al teléfono?",
    options: [
      opt("Intentando resolver un problema con una compañía", true),
      opt("Hablando con su hermana Ursula"),
      opt("Esperando noticias de un casting"),
      opt("Reservando un viaje"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué comportamiento de Tommy da título a este episodio (\"el gritón\")?",
    options: [opt("Sus explosiones de ira gritando", true), opt("Que canta muy alto"), opt("Que habla dormido"), opt("Que anima muy fuerte en el fútbol")],
  },

  // Episodio 23 — The One with Ross' Thing
  {
    episode: 23,
    difficulty: "easy",
    text: "¿Qué le preocupa a Ross sobre su propio cuerpo en este episodio?",
    options: [opt("Una misteriosa mancha en la piel", true), opt("Un dolor de espalda"), opt("Una pérdida de pelo repentina"), opt("Un problema en la garganta")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿A qué tipo de experto acude Ross por su problema?",
    options: [opt("A un herbolario", true), opt("A un cirujano"), opt("A un dermatólogo tradicional"), opt("A un nutricionista")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Con qué dos tipos de hombres sale Phoebe a la vez en este episodio?",
    options: [
      opt("Un bombero y un profesor de guardería", true),
      opt("Un médico y un abogado"),
      opt("Un músico y un actor"),
      opt("Un policía y un chef"),
    ],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué malinterpreta Monica sobre las intenciones de Pete en este episodio?",
    options: [
      opt("Que se está preparando para competir en artes marciales mixtas", true),
      opt("Que quiere pedirle matrimonio"),
      opt("Que va a vender el restaurante"),
      opt("Que se va a mudar a otro país"),
    ],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué encuentra Monica que le hace sospechar de Pete?",
    options: [
      opt("Un recibo relacionado con un cuadrilátero de lucha", true),
      opt("Una carta de otra mujer"),
      opt("Un billete de avión a otro país"),
      opt("Un anillo de compromiso escondido"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué decide investigar Monica sobre Pete a raíz de su sospecha?",
    options: [
      opt("Sus intenciones con las artes marciales mixtas", true),
      opt("Su situación económica real"),
      opt("Si tiene otra novia"),
      opt("Si de verdad es dueño del restaurante"),
    ],
  },

  // Episodio 24 — The One with the Ultimate Fighting Champion
  {
    episode: 24,
    difficulty: "easy",
    text: "¿En qué disciplina compite Pete, para preocupación de Monica?",
    options: [opt("Artes marciales mixtas / UFC", true), opt("Boxeo profesional"), opt("Halterofilia"), opt("Artes marciales tradicionales sin contacto")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Por qué termina Monica rompiendo con Pete en este episodio?",
    options: [
      opt("Por sus brutales derrotas en el octágono", true),
      opt("Porque descubre que le es infiel"),
      opt("Porque él le pide que deje su trabajo"),
      opt("Porque él se muda a otro país"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué hace el jefe de Chandler que resulta inapropiado?",
    options: [opt("Le da una palmada en el trasero", true), opt("Le grita delante de todos"), opt("Le hace trabajar en su cumpleaños"), opt("Le baja el sueldo sin avisar")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Con quién intenta emparejar Phoebe a Ross en este episodio?",
    options: [opt("Con Bonnie, una mujer rubia", true), opt("Con una compañera de trabajo"), opt("Con una amiga de Rachel"), opt("Con una antigua alumna")],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Qué dos actores famosos aparecen en la escena inicial de este episodio?",
    options: [
      opt("Billy Crystal y Robin Williams", true),
      opt("Tom Hanks y Bruce Willis"),
      opt("Al Pacino y Robert De Niro"),
      opt("Jim Carrey y Ben Stiller"),
    ],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Cómo es físicamente Bonnie, la chica con la que Phoebe empareja a Ross?",
    options: [opt("Rubia", true), opt("Pelirroja", false), opt("Morena", false), opt("Calva desde el principio", false)],
  },

  // Episodio 25 — The One at the Beach
  {
    episode: 25,
    difficulty: "easy",
    text: "¿Qué toman prestado los seis amigos en este episodio?",
    options: [opt("Una casa en la playa", true), opt("Un yate"), opt("Una cabaña en la montaña"), opt("Una autocaravana")],
  },
  {
    episode: 25,
    difficulty: "medium",
    text: "¿Qué descubre Phoebe en este episodio?",
    options: [opt("A su madre biológica", true), opt("Que tiene otro hermano"), opt("Que su padre sigue vivo"), opt("Un diario de su madre")],
  },
  {
    episode: 25,
    difficulty: "medium",
    text: "¿A qué juego juegan en la playa, con final subido de tono?",
    options: [
      opt("Una versión \"strip\" de Días Felices (Happy Days)", true),
      opt("Una versión \"strip\" del Monopoly"),
      opt("Un juego de preguntas y respuestas"),
      opt("Voleibol por parejas"),
    ],
  },
  {
    episode: 25,
    difficulty: "medium",
    text: "¿Qué convence Rachel a Bonnie de hacerse, por celos?",
    options: [opt("Raparse la cabeza otra vez", true), opt("Teñirse el pelo"), opt("Cortarse un flequillo"), opt("Cambiar de vestuario")],
  },
  {
    episode: 25,
    difficulty: "hard",
    text: "¿Entre quiénes debe elegir Ross al final de este episodio?",
    options: [opt("Entre Rachel y Bonnie", true), opt("Entre Rachel y Julie"), opt("Entre quedarse en Nueva York o mudarse"), opt("Entre su trabajo y sus amigos")],
  },
  {
    episode: 25,
    difficulty: "hard",
    text: "¿Qué descubre Ross sobre los sentimientos de Rachel en este episodio?",
    options: [opt("Que ella todavía le quiere", true), opt("Que ella ha pasado página del todo"), opt("Que ella sale con otra persona"), opt("Que ella se muda de ciudad")],
  },
];
