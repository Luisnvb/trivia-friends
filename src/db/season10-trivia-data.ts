/**
 * Preguntas de trivia de la Temporada 10 de Friends (18 episodios, 6 por
 * episodio = 108 preguntas). Generadas a partir de la sinopsis de Wikipedia
 * ("Friends (season 10)"), siguiendo el mismo patrón que
 * `season1-trivia-data.ts` a `season9-trivia-data.ts`. Insertadas por
 * `seed-season10.ts`.
 */

export type Season10TriviaSeed = {
  episode: number;
  difficulty: "easy" | "medium" | "hard";
  text: string;
  options: { text: string; isCorrect: boolean }[];
};

function opt(text: string, isCorrect = false) {
  return { text, isCorrect };
}

export const season10TriviaData: Season10TriviaSeed[] = [
  // Episodio 1 — The One After Joey and Rachel Kiss
  {
    episode: 1,
    difficulty: "easy",
    text: "Justo después de ver a Ross besando a Charlie, ¿qué hace Joey a continuación?",
    options: [opt("Besa a Rachel", true), opt("Se lo cuenta a Chandler"), opt("Se va del apartamento enfadado"), opt("Llama a Charlie para reclamarle")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿A quién acuden Joey y Rachel para pedir su aprobación tras besarse?",
    options: [opt("A Ross", true), opt("A Monica"), opt("A Phoebe"), opt("A Chandler")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Qué le impide a Joey y Rachel completar su encuentro íntimo en este episodio?",
    options: [opt("Un golpe accidental en la rodilla", true), opt("Una llamada de Ross"), opt("Que Chandler entra en la habitación"), opt("Que se quedan sin batería en el móvil")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Qué deciden finalmente Joey y Rachel sobre su relación en este episodio?",
    options: [opt("Seguir siendo solo amigos", true), opt("Hacerlo oficial ante todos"), opt("Tomarse un tiempo para pensarlo"), opt("Mantenerlo en secreto")],
  },
  {
    episode: 1,
    difficulty: "easy",
    text: "¿Qué nuevo peinado luce Monica en este episodio?",
    options: [opt("Trenzas pegadas (cornrows)", true), opt("El pelo muy corto"), opt("Una permanente"), opt("Extensiones rubias")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿De la novia de quién tiene que ayudar a separarse Phoebe en este episodio?",
    options: [opt("De Mike, de su novia Precious", true), opt("De Joey, de una compañera de reparto"), opt("De Ross, de Charlie"), opt("De Chandler, de una excompañera de trabajo")],
  },

  // Episodio 2 — The One Where Ross Is Fine
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Qué secreto le revela Chandler sin querer a un niño adoptado, mientras buscan consejo sobre adopción?",
    options: [opt("Que Papá Noel no existe", true), opt("Que sus padres biológicos viven cerca"), opt("Que fue adoptado él también"), opt("Que los Reyes Magos no existen")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué insiste en decir Ross durante todo el episodio sobre la nueva pareja de Joey y Rachel?",
    options: [opt("Que está bien con ello, que está \"fine\"", true), opt("Que se opone totalmente"), opt("Que prefiere no saber nada"), opt("Que se alegra sin reservas")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué le pasa a Ross durante la cita doble con Joey y Rachel?",
    options: [opt("Se emborracha", true), opt("Se marcha antes de que empiece"), opt("Conoce a alguien nuevo"), opt("Se queda dormido en la mesa")],
  },
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Qué termina haciendo Ross al final del episodio respecto a Joey y Rachel?",
    options: [opt("Les da su bendición", true), opt("Les pide que dejen de verse"), opt("Se muda temporalmente"), opt("Les exige explicaciones por escrito")],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿A quiénes cuida Phoebe en este episodio?",
    options: [opt("A los trillizos que dio a luz como madre de alquiler", true), opt("A los hijos de una vecina"), opt("Al perro de Mike"), opt("A Emma, la hija de Ross y Rachel")],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Qué secreto de Phoebe revela Chandler sin querer en este episodio?",
    options: [opt("Que fue madre de alquiler de unos trillizos", true), opt("Que estuvo casada antes"), opt("Que tiene una hermana gemela"), opt("Que trabajó antes como stripper")],
  },

  // Episodio 3 — The One with Ross' Tan
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Qué se intenta hacer Ross en este episodio?",
    options: [opt("Un bronceado en spray", true), opt("Un tatuaje"), opt("Un tinte de pelo"), opt("Una depilación láser")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué error comete Ross con las instrucciones del bronceado?",
    options: [opt("Se equivoca al contar los pasos y los tiempos de giro", true), opt("Usa demasiada cantidad de producto"), opt("Se lo aplica sobre ropa"), opt("Se salta el paso de protección de ojos")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Cómo queda el bronceado fallido de Ross?",
    options: [opt("Oscuro por delante y pálido por detrás", true), opt("Con manchas irregulares por todo el cuerpo"), opt("Demasiado claro, casi imperceptible"), opt("De un tono anaranjado uniforme")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué siguen intentando sin éxito Joey y Rachel en este episodio?",
    options: [opt("Tener un encuentro íntimo", true), opt("Organizar una cita formal"), opt("Contárselo a Monica"), opt("Convencer a Ross de que lo acepte del todo")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Qué vuelve a interrumpir esta vez el encuentro entre Joey y Rachel?",
    options: [opt("Una bofetada accidental", true), opt("Una llamada de trabajo de Rachel"), opt("Que se quedan sin luz"), opt("Que Emma se despierta llorando")],
  },
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Con quién se reencuentran Monica y Phoebe en este episodio?",
    options: [opt("Con una amiga inglesa un poco pesada", true), opt("Con una antigua compañera de instituto"), opt("Con la madre de Rachel"), opt("Con una vecina del edificio")],
  },

  // Episodio 4 — The One with the Cake
  {
    episode: 4,
    difficulty: "easy",
    text: "¿De quién es el cumpleaños que se celebra en este episodio?",
    options: [opt("De Emma", true), opt("De Ben"), opt("De Monica"), opt("De Joey")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Por qué hay tanto caos de horarios entre los amigos en este episodio?",
    options: [opt("Porque todos tienen compromisos distintos ese mismo día", true), opt("Porque la fiesta se adelanta sin avisar"), opt("Porque nadie recuerda la fecha exacta"), opt("Porque Emma está enferma")],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿A qué compromiso no puede faltar Joey ese día?",
    options: [opt("Una audición", true), opt("Un partido de los Rangers"), opt("Una cita romántica"), opt("Una reunión con su agente")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué problema tiene la tarta de cumpleaños que encargan para Emma?",
    options: [opt("Lleva una imagen inapropiada en vez de un dibujo infantil", true), opt("Llega derretida"), opt("Tiene el nombre mal escrito"), opt("Es de un sabor que Emma no puede comer")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Quién se encarga de conseguir una tarta corregida a tiempo?",
    options: [opt("Rachel", true), opt("Monica"), opt("Chandler"), opt("Phoebe")],
  },
  {
    episode: 4,
    difficulty: "easy",
    text: "¿Consiguen finalmente todos reunirse para la fiesta de Emma?",
    options: [opt("Sí, todos vuelven a tiempo para celebrarlo juntos", true), opt("No, la fiesta se cancela"), opt("Solo asisten Ross y Rachel"), opt("Se celebra al día siguiente")],
  },

  // Episodio 5 — The One Where Rachel's Sister Babysits
  {
    episode: 5,
    difficulty: "easy",
    text: "¿Qué hermana de Rachel aparece en este episodio?",
    options: [opt("Amy", true), opt("Jill"), opt("Ginny"), opt("Emma")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué tipo de consejo busca Amy al visitar a Rachel?",
    options: [opt("Consejo sobre una relación con el padre de su exnovio", true), opt("Consejo sobre cómo pedir un aumento"), opt("Consejo sobre mudarse a Nueva York"), opt("Consejo sobre cuidar a un bebé")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué hace Amy sin permiso mientras cuida a Emma, que enfurece a Rachel?",
    options: [opt("Le perfora las orejas a Emma", true), opt("Le corta el pelo a Emma"), opt("Saca a Emma sola a la calle"), opt("Le da comida que no debía")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Cómo termina pidiéndole matrimonio Mike a Phoebe en este episodio?",
    options: [opt("De forma tradicional, con anillo, tras un primer intento fallido", true), opt("Por sorpresa durante la cena de Acción de Gracias"), opt("A través de una canción"), opt("Nunca llega a pedírselo en este episodio")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Cómo fue el primer intento, fallido, de pedida de Mike?",
    options: [opt("Con un mensaje en una pantalla grande, en público", true), opt("Escrito en la arena de una playa"), opt("A través de un amigo en común"), opt("Escondiendo el anillo en la comida")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué tiene de particular la carta de recomendación que escribe Joey?",
    options: [opt("Usa un vocabulario absurdamente rebuscado", true), opt("Está escrita a mano con muchos tachones"), opt("Es extremadamente breve"), opt("Está escrita en tercera persona sobre sí mismo")],
  },

  // Episodio 6 — The One with Ross's Grant
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Para qué se postula Ross en este episodio?",
    options: [opt("Una beca de investigación en paleontología", true), opt("Una plaza fija en la universidad"), opt("Un puesto en un museo de otra ciudad"), opt("Una beca para dar clases en el extranjero")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Quién sabotea la entrevista de Ross para la beca?",
    options: [opt("Benjamin Hobart, el ex de Charlie", true), opt("Un antiguo rival de la universidad"), opt("Charlie, sin que Ross lo sepa"), opt("Un compañero de departamento envidioso")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué le confiesa Benjamin a Charlie en este episodio?",
    options: [opt("Que todavía siente algo por ella", true), opt("Que se muda a otro país"), opt("Que sabotea a Ross a propósito"), opt("Que se va a casar")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Cómo reacciona Charlie ante la confesión de Benjamin?",
    options: [opt("Le corresponde y termina su relación con Ross", true), opt("Lo rechaza y se queda con Ross"), opt("Le pide tiempo para pensarlo"), opt("Se lo cuenta a Ross antes de decidir nada")],
  },
  {
    episode: 6,
    difficulty: "easy",
    text: "¿Qué le regala Phoebe a Monica en este episodio?",
    options: [opt("Un cuadro llamado \"Gladys\"", true), opt("Una planta"), opt("Un jarrón antiguo"), opt("Una escultura hecha por ella misma")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué opina en realidad Monica del regalo de Phoebe, en secreto?",
    options: [opt("Que le disgusta bastante", true), opt("Que le encanta de verdad"), opt("Que le da igual"), opt("Que le parece muy valioso económicamente")],
  },

  // Episodio 7 — The One with the Home Study
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué temen Monica y Chandler sobre la entrevistadora de la agencia de adopción?",
    options: [opt("Que los rechace como candidatos", true), opt("Que llegue tarde a la cita"), opt("Que pida más dinero del acordado"), opt("Que no hable bien inglés")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Quién resulta ser la entrevistadora de la agencia de adopción?",
    options: [opt("Una antigua cita de Joey", true), opt("Una examiga de Monica del colegio"), opt("La hermana de Chandler"), opt("Una compañera de trabajo de Ross")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Cómo consigue Joey arreglar la situación incómoda con ella?",
    options: [opt("Convenciéndola de que quedó destrozado por su silencio tras la cita", true), opt("Pidiéndole perdón formalmente por escrito"), opt("Invitándola a salir de nuevo delante de todos"), opt("Ignorando el tema por completo")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué están planeando Phoebe y Mike al principio de este episodio?",
    options: [opt("Casarse en el ayuntamiento, sin gran ceremonia", true), opt("Posponer la boda un año"), opt("Casarse en Las Vegas"), opt("Renovar votos de un matrimonio anterior")],
  },
  {
    episode: 7,
    difficulty: "easy",
    text: "¿Qué deciden finalmente Phoebe y Mike sobre esa boda rápida en el ayuntamiento?",
    options: [opt("Reconsiderarlo y no hacerlo así", true), opt("Seguir adelante esa misma semana"), opt("Cancelar la boda por completo"), opt("Casarse en secreto sin avisar a nadie")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿En qué ayuda Ross a Rachel en este episodio?",
    options: [opt("A superar su miedo a los columpios", true), opt("A perder el miedo a volar"), opt("A aprender a nadar"), opt("A superar su miedo a las arañas")],
  },

  // Episodio 8 — The One with the Late Thanksgiving
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Quién convence a Monica de organizar Acción de Gracias pese a su negativa inicial?",
    options: [opt("Phoebe, apelando a su lado competitivo", true), opt("Chandler, con un regalo"), opt("Ross, recordándole la tradición familiar"), opt("Rachel, ofreciéndose a ayudar con todo")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Por qué llegan todos tarde a la cena de Acción de Gracias?",
    options: [opt("Porque cada uno tiene un compromiso distinto ese día", true), opt("Porque hay una tormenta de nieve"), opt("Porque se equivocan de dirección"), opt("Porque el metro se avería")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué hacen Monica y Chandler cuando los demás no llegan a la hora acordada?",
    options: [opt("Cierran la puerta con llave, hartos de esperar", true), opt("Empiezan a cenar sin ellos"), opt("Se van a cenar fuera"), opt("Llaman a todos, enfadados, uno por uno")],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Qué le ocurre a Joey al quedar atrapado en la puerta de la entrada?",
    options: [opt("Sale disparado hacia la comida cuando la puerta cede", true), opt("Se queda encerrado toda la noche fuera"), opt("Rompe un cristal al forzarla"), opt("Se hace daño en la mano y hay que llevarlo al hospital")],
  },
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Qué buena noticia anima a todo el grupo durante esta cena?",
    options: [opt("Que se ha levantado el impedimento para la adopción de Monica y Chandler", true), opt("Que Phoebe y Mike ya tienen fecha de boda"), opt("Que Ross consigue la beca de paleontología"), opt("Que Joey consigue un papel importante")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Cómo cambia el ambiente de la cena tras conocerse esa noticia?",
    options: [opt("Se anima de inmediato y lo celebran todos juntos", true), opt("Sigue tenso por los retrasos previos"), opt("Deciden posponer la cena para otro día"), opt("Nadie reacciona demasiado, siguen cenando igual")],
  },

  // Episodio 9 — The One with the Birth Mother
  {
    episode: 9,
    difficulty: "easy",
    text: "¿A qué estado viajan Monica y Chandler para conocer a la madre biológica?",
    options: [opt("A Ohio", true), opt("A Florida"), opt("A California"), opt("A Texas")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Cómo se llama la madre biológica que Monica y Chandler conocen en este episodio?",
    options: [opt("Erica", true), opt("Emily"), opt("Amanda"), opt("Janice")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Qué malentendido hay sobre las profesiones de Monica y Chandler, según sus papeles confundidos?",
    options: [opt("Erica cree que Chandler es médico y Monica es pastora", true), opt("Erica cree que ambos son abogados"), opt("Erica cree que Monica es enfermera y Chandler profesor"), opt("Erica cree que ambos trabajan en el mismo hospital")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué hace Chandler cuando descubre ese malentendido?",
    options: [opt("Le confiesa la verdad a Erica", true), opt("Sigue la mentira para no arriesgar la adopción"), opt("Le pide a Monica que se lo cuente ella"), opt("Cancela la reunión y se va")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Cómo reacciona Erica finalmente tras la confesión de Chandler?",
    options: [opt("Se emociona y decide que sí son dignos de adoptar a su bebé", true), opt("Se enfada y corta el contacto"), opt("Pide más tiempo para decidir"), opt("Exige conocer a más familias antes de decidir")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué confusión de equipaje afecta a Ross en este episodio?",
    options: [opt("Se lleva por error la bolsa de Rachel y viste ropa de mujer en una cita", true), opt("Pierde su maleta en el aeropuerto"), opt("Se lleva la maleta de Chandler por error"), opt("Le roban la maleta en un taxi")],
  },

  // Episodio 10 — The One Where Chandler Gets Caught
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué sospechan Rachel y Phoebe al ver a Chandler entrar en una casa con una mujer?",
    options: [opt("Que le está siendo infiel a Monica", true), opt("Que está comprando una casa sin avisar a Monica"), opt("Que es una antigua novia suya"), opt("Que está ayudando a un amigo a mudarse")],
  },
  {
    episode: 10,
    difficulty: "easy",
    text: "¿Quién es en realidad la mujer a la que ven acompañando a Chandler?",
    options: [opt("Su agente inmobiliaria", true), opt("Una compañera de trabajo"), opt("Su prima"), opt("La entrevistadora de adopción")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué están haciendo en realidad Monica y Chandler con esa mujer?",
    options: [opt("Buscando una casa en las afueras", true), opt("Vendiendo su apartamento"), opt("Organizando la fiesta de bienvenida del bebé"), opt("Alquilando un local para un negocio")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué intenta hacer el resto del grupo al enterarse de sus planes de mudanza?",
    options: [opt("Convencerles de que se queden a vivir en la ciudad", true), opt("Ayudarles a elegir la mejor casa"), opt("Organizarles una fiesta de despedida enseguida"), opt("Ofrecerse a pagar parte de la hipoteca")],
  },
  {
    episode: 10,
    difficulty: "easy",
    text: "¿Qué deciden finalmente Monica y Chandler sobre la casa?",
    options: [opt("Comprarla y mudarse a las afueras", true), opt("Rechazarla y quedarse en la ciudad"), opt("Seguir buscando otras opciones"), opt("Alquilarla en vez de comprarla")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Cómo se comporta el grupo mientras intenta disuadir a Monica y Chandler de mudarse?",
    options: [opt("De forma exagerada y muy dramática", true), opt("Con indiferencia, sin insistir demasiado"), opt("Organizando una votación formal"), opt("Escribiéndoles una carta conjunta")],
  },

  // Episodio 11 — The One Where the Stripper Cries
  {
    episode: 11,
    difficulty: "medium",
    text: "¿A qué actor famoso contratan Monica y Rachel como stripper para la despedida de soltera de Phoebe?",
    options: [opt("A Danny DeVito", true), opt("A un doble de un actor famoso"), opt("A un amigo de Joey"), opt("A un actor desconocido")],
  },
  {
    episode: 11,
    difficulty: "easy",
    text: "¿Cómo trata Phoebe al stripper contratado para su despedida?",
    options: [opt("Lo insulta", true), opt("Lo ignora completamente"), opt("Se ríe de forma amable"), opt("Le pide que se vaya enseguida")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Cómo reacciona el stripper ante los insultos de Phoebe?",
    options: [opt("Se pone a llorar", true), opt("Se enfada y discute con ella"), opt("Se ríe sin darle importancia"), opt("Abandona la fiesta indignado")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿A qué evento asisten Ross y Chandler en este episodio?",
    options: [opt("A la reunión de antiguos alumnos de su universidad", true), opt("A la boda de un compañero de trabajo"), opt("A un concierto benéfico"), opt("A la graduación de un familiar")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Qué descubren Ross y Chandler que ambos rompieron esa misma noche, años atrás?",
    options: [opt("Un pacto de no besar a la misma chica", true), opt("Una promesa de no beber alcohol"), opt("Un pacto de no salir con la misma profesora"), opt("Una apuesta sobre quién se graduaría antes")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿En qué concurso de televisión participa Joey en este episodio, con mal resultado?",
    options: [opt("Pyramid", true), opt("Jeopardy"), opt("Wheel of Fortune"), opt("The Price Is Right")],
  },

  // Episodio 12 — The One with Phoebe's Wedding
  {
    episode: 12,
    difficulty: "easy",
    text: "¿Quién entrega a Phoebe en el altar en su boda?",
    options: [opt("Joey", true), opt("Ross"), opt("Chandler"), opt("Nadie, ella entra sola")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué hace Monica como organizadora de la boda que casi provoca que la despidan?",
    options: [opt("Se excede intentando controlarlo absolutamente todo", true), opt("Olvida contratar al catering"), opt("Pierde el vestido de novia"), opt("Confunde la fecha de la boda")],
  },
  {
    episode: 12,
    difficulty: "easy",
    text: "¿Qué pasa finalmente con Monica como organizadora de la boda, tras el conflicto?",
    options: [opt("La vuelven a contratar", true), opt("Queda despedida definitivamente"), opt("Renuncia ella misma"), opt("Comparte el puesto con otra persona")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué obliga a celebrar la boda de Phoebe al aire libre, pese al mal tiempo?",
    options: [opt("Una ventisca de nieve que afecta al local previsto", true), opt("Un apagón en el salón de bodas"), opt("Una reserva doble en el lugar previsto"), opt("Un incendio accidental en la cocina del local")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Quién termina ofíciando finalmente la boda de Phoebe y Mike?",
    options: [opt("Joey, ordenado como ministro para la ocasión", true), opt("El padre de Mike"), opt("Un sacerdote contratado a última hora"), opt("Ross, como amigo cercano")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué tarea acaba haciendo Chandler en vez de ejercer como padrino?",
    options: [opt("Pasear al perro de la familia de Mike", true), opt("Encargarse de la música"), opt("Repartir las mesas de los invitados"), opt("Cuidar a Emma durante la ceremonia")],
  },

  // Episodio 13 — The One Where Joey Speaks French
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Para qué le enseña Phoebe francés a Joey en este episodio?",
    options: [opt("Para un papel teatral que debe interpretar", true), opt("Para un viaje a París"), opt("Para impresionar a una chica"), opt("Para una entrevista de trabajo")],
  },
  {
    episode: 13,
    difficulty: "easy",
    text: "¿Qué le ocurre al padre de Rachel en este episodio?",
    options: [opt("Sufre un infarto", true), opt("Tiene un accidente de coche"), opt("Se rompe una pierna"), opt("Sufre una caída en casa")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Quién acompaña a Rachel a Long Island tras la noticia sobre su padre?",
    options: [opt("Ross", true), opt("Monica"), opt("Phoebe"), opt("Joey")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué le pide Rachel a Ross que él rechaza, calificándolo de algo que \"no toca\" en ese momento?",
    options: [opt("Sexo de consuelo", true), opt("Que se mude con ella a Long Island"), opt("Que le mienta a su padre sobre su relación"), opt("Que cuide de Emma esa noche")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Qué frase de Rachel confunde después a Ross sobre ese mismo tema?",
    options: [opt("Que dice que \"nunca está descartado\"", true), opt("Que le dice que ya lo ha olvidado"), opt("Que le pide perdón por haberlo mencionado"), opt("Que se lo cuenta después a todo el grupo")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Qué inquietante revelación hace Erica sobre el padre biológico del bebé?",
    options: [opt("Que podría haber matado a su propio padre", true), opt("Que está en la cárcel"), opt("Que no sabe quién es"), opt("Que ya tiene otra familia")],
  },

  // Episodio 14 — The One with Princess Consuela
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Para qué empresa entrevistan a Rachel en este episodio?",
    options: [opt("Gucci", true), opt("Chanel"), opt("Prada"), opt("Versace")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué complica la entrevista de Rachel con esa empresa?",
    options: [opt("Su jefa de Ralph Lauren la descubre allí", true), opt("Llega tarde por el tráfico"), opt("Se le olvida el currículum"), opt("Confunde el horario de la cita")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué consecuencia laboral inmediata sufre Rachel por ese incidente?",
    options: [opt("La despiden de Ralph Lauren y no consigue el puesto en Gucci", true), opt("La ascienden en Ralph Lauren igualmente"), opt("Consigue ambos empleos a la vez"), opt("Solo pierde el puesto en Gucci")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Qué oportunidad le consigue a Rachel un excompañero llamado Mark?",
    options: [opt("Un puesto en Louis Vuitton, en París", true), opt("Un puesto en una revista de moda"), opt("Su propio negocio de ropa"), opt("Un puesto en Ralph Lauren en Londres")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué hace Ross, sin saber lo de la oportunidad en París?",
    options: [opt("Le consigue a Rachel su antiguo puesto en Ralph Lauren, con un aumento", true), opt("Le propone matrimonio de nuevo"), opt("Le pide que no acepte ningún trabajo nuevo"), opt("Habla con la jefa de Rachel para que la readmitan sin decírselo")],
  },
  {
    episode: 14,
    difficulty: "easy",
    text: "¿A qué nombre legal cambia Phoebe el suyo en este episodio?",
    options: [opt("Princess Consuela Bananahammock", true), opt("Regina Phalange"), opt("Bailey Buffay-Hannigan"), opt("Valerie Von Trapp")],
  },

  // Episodio 15 — The One Where Estelle Dies
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Quién muere en este episodio, sin que Joey lo sepa al principio?",
    options: [opt("Estelle, la agente de Joey", true), opt("La abuela de Ross y Monica"), opt("Un vecino del edificio"), opt("El padre de Chandler")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué hace Phoebe para ayudar a ocultarle la noticia a Joey?",
    options: [opt("Imita la voz de Estelle por teléfono", true), opt("Contrata a una actriz para hacerse pasar por ella"), opt("Convence a la agencia de retrasar el aviso"), opt("Le dice a Joey que Estelle está de vacaciones")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Para qué usa Phoebe esa imitación de la voz de Estelle?",
    options: [opt("Para animar a Joey a que la despida él mismo", true), opt("Para pedirle a Joey un aumento de sueldo"), opt("Para cancelar una audición de Joey"), opt("Para convencer a Joey de mudarse")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Cómo se siente Joey al recibir esas llamadas de \"Estelle\"?",
    options: [opt("Aterrorizado", true), opt("Aliviado"), opt("Indiferente"), opt("Emocionado")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Quién podría comprar la casa vecina a la nueva de Monica y Chandler, según revela su agente inmobiliaria?",
    options: [opt("Janice", true), opt("Los padres de Ross y Monica"), opt("Un compañero de trabajo de Chandler"), opt("Gunther")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué sigue queriendo Rachel pese a que Ross le consiga su antiguo empleo en Ralph Lauren?",
    options: [opt("La oportunidad de trabajar en París", true), opt("Un puesto directivo en Nueva York"), opt("Dejar de trabajar una temporada"), opt("Montar su propia empresa")],
  },

  // Episodio 16 — The One with Rachel's Going Away Party
  {
    episode: 16,
    difficulty: "easy",
    text: "¿Qué celebra el grupo para Rachel en este episodio?",
    options: [opt("Su fiesta de despedida antes de mudarse a París", true), opt("Su cumpleaños"), opt("Su ascenso en el trabajo"), opt("El primer año de Emma")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Quién se pone de parto en este episodio?",
    options: [opt("Erica, la madre biológica", true), opt("Phoebe"), opt("Janice"), opt("Una vecina de Monica y Chandler")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿A quién no se despide emocionalmente Rachel durante la fiesta, hiriendo sus sentimientos?",
    options: [opt("A Ross", true), opt("A Monica"), opt("A Phoebe"), opt("A Joey")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué termina pasando entre Ross y Rachel esa misma noche, tras discutir por ese motivo?",
    options: [opt("Se acuestan juntos", true), opt("Rompen su amistad definitivamente"), opt("Deciden no volver a verse antes del viaje"), opt("Se piden perdón y no pasa nada más")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué hacen Monica y Chandler al enterarse de que Erica se ha puesto de parto?",
    options: [opt("La llevan corriendo al hospital", true), opt("Esperan a que termine la fiesta de Rachel"), opt("Llaman a una ambulancia y se quedan en casa"), opt("Avisan primero a la agencia de adopción")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Qué descubre Chandler por casualidad en su propio apartamento en este episodio?",
    options: [opt("Unas esposas", true), opt("Una carta antigua de Monica"), opt("Un anillo que no reconoce"), opt("Fotos de la boda que no había visto")],
  },

  // Episodio 17 — The Last One, Part 1
  {
    episode: 17,
    difficulty: "easy",
    text: "¿Cómo interpretan Ross y Rachel, al principio, lo que pasó entre ellos la noche anterior?",
    options: [opt("Como una forma de despedida", true), opt("Como el inicio de una nueva relación"), opt("Como un error que hay que olvidar"), opt("Como algo que hay que ocultar a todos")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿De qué se da cuenta Ross a lo largo de este episodio?",
    options: [opt("De que todavía quiere a Rachel", true), opt("De que prefiere que Rachel se vaya a París"), opt("De que quiere volver con Charlie"), opt("De que no está listo para otra relación")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿En qué ayudan Phoebe y Joey a Monica y Chandler en este episodio?",
    options: [opt("A empaquetar sus cosas para la mudanza", true), opt("A elegir los muebles de la casa nueva"), opt("A organizar la fiesta de despedida"), opt("A pintar el apartamento antes de entregarlo")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué da a luz finalmente Erica en este episodio?",
    options: [opt("Gemelos", true), opt("Un solo bebé"), opt("Trillizos"), opt("Un bebé prematuro que debe quedar en observación")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿A dónde corren Ross y Phoebe para intentar detener a Rachel?",
    options: [opt("Al aeropuerto JFK", true), opt("A la estación de tren"), opt("A la oficina de Rachel"), opt("Al apartamento de los padres de Rachel")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué ocurre cuando Ross y Phoebe llegan al aeropuerto?",
    options: [opt("Rachel ya ha embarcado en el avión", true), opt("Encuentran a Rachel esperando en la puerta"), opt("El vuelo de Rachel se ha retrasado"), opt("Rachel ha cancelado el vuelo por su cuenta")],
  },

  // Episodio 18 — The Last One, Part 2
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Qué recibe Ross de parte de Rachel tras no poder detenerla en el aeropuerto?",
    options: [opt("Un mensaje de voz en el que ella le confiesa que le quiere", true), opt("Una carta escrita a mano"), opt("Una llamada perdida sin mensaje"), opt("Un correo electrónico")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué le pasa a la llamada de Rachel antes de que termine su confesión?",
    options: [opt("Se corta", true), opt("Rachel cuelga arrepentida"), opt("Se interrumpe por otra llamada entrante"), opt("Se graba entera sin problema")],
  },
  {
    episode: 18,
    difficulty: "easy",
    text: "¿Qué hace finalmente Rachel, en el giro final del episodio?",
    options: [opt("Se baja del avión y vuelve con Ross", true), opt("Se queda en París definitivamente"), opt("Le pide a Ross que se mude con ella a París"), opt("Decide posponer el viaje unos meses")],
  },
  {
    episode: 18,
    difficulty: "easy",
    text: "¿Qué frase dice Rachel al llegar de vuelta al apartamento de Ross?",
    options: [opt("\"Me bajé del avión\"", true), opt("\"He vuelto a casa\""), opt("\"No podía irme sin decírtelo\""), opt("\"Perdóname por haberme ido\"")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Qué dejan los amigos al marcharse por última vez del apartamento de Monica?",
    options: [opt("Las llaves del apartamento", true), opt("Una caja con recuerdos"), opt("Una nota de despedida"), opt("Un álbum de fotos para el siguiente inquilino")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Dónde toman los amigos su último café juntos antes de separarse definitivamente?",
    options: [opt("En Central Perk", true), opt("En el apartamento vacío de Monica"), opt("En un restaurante nuevo"), opt("En el aeropuerto, antes del vuelo de Chandler y Monica")],
  },
];
