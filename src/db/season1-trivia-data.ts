/**
 * Datos de trivia de la Temporada 1 de Friends (24 episodios).
 *
 * Generado a partir de un resumen argumental episodio a episodio obtenido
 * de Wikipedia ("Friends (season 1)", en.wikipedia.org/wiki/Friends_season_1)
 * en septiembre de 2026, para evitar inventar detalles de trama de memoria.
 *
 * 6 preguntas por episodio (144 en total), todas en modo `multiple_choice`,
 * con mayoría de dificultad `medium`/`hard` y una minoría `easy` por
 * episodio (a petición del usuario). El orden de las opciones dentro de
 * cada pregunta se baraja en `seed-season1.ts` antes de insertar, para que
 * la respuesta correcta no quede siempre en la misma posición.
 */

export type Season1TriviaSeed = {
  episode: number;
  difficulty: "easy" | "medium" | "hard";
  text: string;
  options: { text: string; isCorrect: boolean }[];
};

function opt(text: string, isCorrect = false) {
  return { text, isCorrect };
}

export const season1TriviaData: Season1TriviaSeed[] = [
  // Episodio 1 — The Pilot / The One Where Monica Gets a Roommate
  {
    episode: 1,
    difficulty: "easy",
    text: "¿A quién deja plantado Rachel en el altar en el primer episodio?",
    options: [opt("Barry", true), opt("Ross"), opt("Paul"), opt("Chandler")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿En qué trabaja Rachel tras mudarse con Monica?",
    options: [
      opt("De camarera en Central Perk", true),
      opt("De diseñadora de moda"),
      opt("De chef"),
      opt("De secretaria"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Cómo se llama el hombre con el que sale Monica en este episodio, apodado \"el del vino\"?",
    options: [opt("Paul", true), opt("Alan"), opt("Roger"), opt("Bob")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Qué mentira le cuenta Paul a Monica para conseguir pasar la noche con ella?",
    options: [
      opt("Que no podía tener relaciones desde su divorcio", true),
      opt("Que era viudo"),
      opt("Que tenía una cita a ciegas esa misma noche"),
      opt("Que trabajaba para la ONU"),
    ],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Qué sentimiento oculta Ross hacia Rachel desde el principio de la serie?",
    options: [
      opt("Está enamorado de ella en secreto", true),
      opt("Le guarda rencor por dejarle plantado en su propia boda"),
      opt("Le resulta indiferente"),
      opt("Cree que es familia lejana suya"),
    ],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿De quién es hermano Ross, el personaje que reaparece con Rachel al inicio de la serie?",
    options: [opt("De Monica", true), opt("De Phoebe"), opt("De Joey"), opt("De Chandler")],
  },

  // Episodio 2 — The One with the Sonogram at the End
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Quién está embarazada del hijo de Ross en este episodio?",
    options: [opt("Carol", true), opt("Susan"), opt("Rachel"), opt("Monica")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿A quién le devuelve Rachel su anillo de compromiso?",
    options: [opt("A Barry", true), opt("A Ross"), opt("A Paul"), opt("A su padre")],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Qué descubre Rachel sobre el viaje de luna de miel que iba a hacer con Barry?",
    options: [
      opt("Que se fue con la dama de honor de Rachel", true),
      opt("Que lo canceló por completo"),
      opt("Que se fue solo"),
      opt("Que se fue con su madre"),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué quiere excluir Carol del nombre del bebé?",
    options: [
      opt("El apellido de Ross", true),
      opt("El apellido de Susan"),
      opt("Cualquier nombre bíblico"),
      opt("El nombre \"Ben\""),
    ],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué evento familiar pone nerviosa a Monica en este episodio?",
    options: [
      opt("La cena de aniversario de sus padres", true),
      opt("El cumpleaños de Ross"),
      opt("La boda de Carol y Susan"),
      opt("Una entrevista de trabajo"),
    ],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "Según teme Monica, ¿cómo suele comportarse su madre con ella frente a Ross?",
    options: [
      opt("La critica a ella mientras elogia a Ross", true),
      opt("La elogia mucho más que a Ross"),
      opt("Los trata exactamente igual"),
      opt("Apenas le dirige la palabra a ninguno de los dos"),
    ],
  },

  // Episodio 3 — The One with the Thumb
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Qué encuentra Phoebe dentro de una lata de refresco?",
    options: [opt("Un pulgar", true), opt("Una mosca"), opt("Un anillo"), opt("Un diente")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Cuánto dinero recibe Phoebe como compensación de la empresa de refrescos?",
    options: [
      opt("7.000 dólares", true),
      opt("700 dólares"),
      opt("70.000 dólares"),
      opt("17.000 dólares"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Con quién sale Monica en este episodio, aunque ya no le atraiga?",
    options: [opt("Alan", true), opt("Paul"), opt("Roger"), opt("Bobby")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Qué confiesa Alan que no le gusta, a pesar de caerle bien a todo el grupo?",
    options: [
      opt("Los amigos de Monica", true),
      opt("El trabajo de Monica"),
      opt("La comida de Monica"),
      opt("El apartamento de Monica"),
    ],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué mal hábito retoma Chandler en este episodio?",
    options: [opt("Fumar", true), opt("Beber en exceso"), opt("Apostar"), opt("Comer comida basura")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿En qué usa Phoebe el dinero de la demanda contra la empresa de refrescos?",
    options: [
      opt("En ayudar a Chandler a dejar de fumar", true),
      opt("En un viaje a Europa"),
      opt("En un regalo para Ross"),
      opt("En pagar el alquiler de Monica"),
    ],
  },

  // Episodio 4 — The One with George Stephanopoulos
  {
    episode: 4,
    difficulty: "easy",
    text: "¿A qué partido asiste Ross al principio de este episodio?",
    options: [
      opt("Un partido de hockey de los Rangers", true),
      opt("Un partido de béisbol"),
      opt("Un partido de baloncesto"),
      opt("Un partido de fútbol americano"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Con qué termina golpeado Ross en el partido?",
    options: [
      opt("Con un disco de hockey", true),
      opt("Con un bate"),
      opt("Con un balón"),
      opt("Con una pelota de béisbol"),
    ],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "En el hospital, ¿qué confesión hace Ross sobre su vida sexual?",
    options: [
      opt("Que Carol ha sido su única pareja sexual", true),
      opt("Que nunca ha tenido pareja"),
      opt("Que tiene varias parejas a la vez"),
      opt("Que Rachel fue su primera pareja"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué problema tiene Rachel al recibir su primer sueldo?",
    options: [
      opt("Los impuestos que le descuentan", true),
      opt("El banco pierde el cheque"),
      opt("Su jefe no le paga"),
      opt("Un error de cambio de moneda"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿A quién espían Monica y Phoebe con un telescopio desde el edificio de enfrente?",
    options: [
      opt("A George Stephanopoulos", true),
      opt("A Ugly Naked Guy"),
      opt("A Paolo"),
      opt("A un actor famoso"),
    ],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué tipo de fiesta organizan Monica y Phoebe esa noche?",
    options: [
      opt("Una pijamada", true),
      opt("Una fiesta de disfraces"),
      opt("Una cena formal"),
      opt("Una fiesta sorpresa"),
    ],
  },

  // Episodio 5 — The One with the East German Laundry Detergent
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Con qué actividad cotidiana consigue Ross pasar tiempo a solas con Rachel?",
    options: [
      opt("Haciendo la colada juntos", true),
      opt("Cocinando juntos"),
      opt("Haciendo la compra"),
      opt("Pintando el apartamento"),
    ],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿A quién anima Ross a que Rachel se enfrente en la lavandería?",
    options: [
      opt("A una mujer que quiere quitarle una lavadora", true),
      opt("A su casera"),
      opt("A Paul"),
      opt("A un empleado grosero"),
    ],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿A quién rompe Chandler su relación en este episodio?",
    options: [opt("A Janice", true), opt("A Aurora"), opt("A Nora"), opt("A Celia")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿A quién rompe Phoebe su relación en este mismo episodio?",
    options: [opt("A Tony", true), opt("A David"), opt("A Roger"), opt("A Duncan")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿A quién recluta Joey para hacerse pasar por su novia en una cita doble?",
    options: [opt("A Monica", true), opt("A Phoebe"), opt("A Rachel"), opt("A una vecina")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Cómo se llama la expareja de Joey que aparece en esa cita doble con su nuevo novio?",
    options: [opt("Angela", true), opt("Ursula"), opt("Aurora"), opt("Mindy")],
  },

  // Episodio 6 — The One with the Butt
  {
    episode: 6,
    difficulty: "easy",
    text: "¿Qué papel consigue Joey en una película gracias a su agente?",
    options: [
      opt("Doble de trasero de Al Pacino", true),
      opt("Protagonista"),
      opt("Extra sin diálogo"),
      opt("Doble de voz"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Por qué despiden a Joey de ese papel?",
    options: [
      opt("Por sobreactuar", true),
      opt("Por llegar tarde"),
      opt("Por pelearse con Al Pacino"),
      opt("Por lesionarse"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Cómo se llama la mujer con la que sale Chandler en este episodio?",
    options: [opt("Aurora", true), opt("Janice"), opt("Nora"), opt("Celia")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Qué descubre Chandler sobre la vida sentimental de Aurora?",
    options: [
      opt("Que está casada y tiene además otro novio", true),
      opt("Que es una actriz famosa"),
      opt("Que se muda a otro país"),
      opt("Que es la ex de Ross"),
    ],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué rasgo de personalidad de Monica se dispara cuando Rachel limpia el apartamento?",
    options: [
      opt("Su obsesión por el orden y la limpieza", true),
      opt("Sus celos"),
      opt("Su mal genio"),
      opt("Su torpeza"),
    ],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Cómo reacciona Chandler al principio ante la idea de compartir a Aurora con otros hombres?",
    options: [
      opt("Lo acepta, aunque después le cuesta", true),
      opt("Rompe con ella de inmediato"),
      opt("Se pone celoso y la denuncia"),
      opt("Se lo cuenta a todo el grupo furioso"),
    ],
  },

  // Episodio 7 — The One with the Blackout
  {
    episode: 7,
    difficulty: "easy",
    text: "¿Qué suceso deja a Nueva York a oscuras en este episodio?",
    options: [
      opt("Un apagón general", true),
      opt("Una tormenta de nieve"),
      opt("Un huracán"),
      opt("Un terremoto"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Dónde queda atrapado Chandler durante el apagón?",
    options: [
      opt("En la cabina de un cajero automático", true),
      opt("En un ascensor"),
      opt("En el metro"),
      opt("En la azotea"),
    ],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Con quién queda atrapado Chandler en ese lugar?",
    options: [
      opt("Con una modelo de Victoria's Secret", true),
      opt("Con Janice"),
      opt("Con un desconocido gruñón"),
      opt("Con Rachel"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿A quién intenta confesarle Ross sus sentimientos durante el apagón?",
    options: [opt("A Rachel", true), opt("A Carol"), opt("A Susan"), opt("A Monica")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Qué interrumpe a Ross justo cuando iba a confesar sus sentimientos?",
    options: [
      opt("Un gato callejero", true),
      opt("Una llamada de teléfono"),
      opt("Que vuelve la luz de golpe"),
      opt("La llegada de Joey"),
    ],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿A qué vecino nuevo conoce Rachel durante el apagón?",
    options: [opt("A Paolo", true), opt("A Roger"), opt("A Bobby"), opt("A David")],
  },

  // Episodio 8 — The One Where Nana Dies Twice
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Quién muere (dos veces) en este episodio?",
    options: [
      opt("La abuela (Nana) de Ross y Monica", true),
      opt("El padre de Chandler"),
      opt("La madre de Monica"),
      opt("El abuelo de Phoebe"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué le ocurre a Nana poco después de ser declarada muerta?",
    options: [
      opt("Revive brevemente antes de morir definitivamente", true),
      opt("Despierta completamente sana"),
      opt("Nunca llega a morir"),
      opt("Resulta que era su hermana gemela"),
    ],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Por qué está Ross atontado durante el funeral?",
    options: [
      opt("Por tomar relajantes musculares tras caerse en la tumba", true),
      opt("Por haber bebido demasiado"),
      opt("Por la medicación de un resfriado"),
      opt("Por no haber dormido en días"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué hace Ross durante el funeral, a pesar de la solemnidad del momento?",
    options: [
      opt("Ver un partido de los Giants", true),
      opt("Discutir con Susan"),
      opt("Proponerle matrimonio a Carol"),
      opt("Dormirse encima del ataúd"),
    ],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Qué le hace sospechar a Chandler que sus compañeros de trabajo creen que es gay?",
    options: [
      opt("Que un compañero intenta emparejarlo con otro hombre", true),
      opt("Que le regalan ropa de mujer"),
      opt("Que se lo preguntan directamente"),
      opt("Que lo ven besando a Ross"),
    ],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué relación familiar tienen Ross y Monica con la fallecida de este episodio?",
    options: [opt("Es su abuela", true), opt("Es su tía"), opt("Es su madrastra"), opt("Es su prima")],
  },

  // Episodio 9 — The One Where Underdog Gets Away
  {
    episode: 9,
    difficulty: "easy",
    text: "¿Qué festividad se celebra en este episodio?",
    options: [
      opt("Acción de Gracias", true),
      opt("Navidad"),
      opt("Año Nuevo"),
      opt("Halloween"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Para qué necesita Rachel dinero al principio del episodio?",
    options: [
      opt("Para un billete de avión y esquiar con su familia", true),
      opt("Para pagar el alquiler"),
      opt("Para un regalo de cumpleaños"),
      opt("Para una operación"),
    ],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Por qué evita Chandler celebrar Acción de Gracias desde hace años?",
    options: [
      opt("Porque sus padres anunciaron su divorcio ese día", true),
      opt("Porque odia el pavo"),
      opt("Porque tuvo un accidente ese día"),
      opt("Porque perdió su trabajo esa fecha"),
    ],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Por qué queda vetado Joey de la reunión familiar de Acción de Gracias?",
    options: [
      opt("Por aparecer en un cartel de salud pública sobre una ETS", true),
      opt("Por llegar borracho el año anterior"),
      opt("Por insultar a su tía"),
      opt("Por faltar el año pasado"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué globo se escapa durante el desfile y atrapa al grupo en la azotea?",
    options: [
      opt("El globo de Underdog", true),
      opt("El globo de Bugs Bunny"),
      opt("El globo de Snoopy"),
      opt("El globo de Mickey Mouse"),
    ],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Con qué comida terminan reconciliándose los amigos al final del episodio?",
    options: [
      opt("Sopa de tomate y sándwich de queso fundido", true),
      opt("Pavo y puré de patatas"),
      opt("Pizza"),
      opt("Lasaña"),
    ],
  },

  // Episodio 10 — The One with the Monkey
  {
    episode: 10,
    difficulty: "easy",
    text: "¿Qué mascota trae Ross a la fiesta de Nochevieja?",
    options: [
      opt("Un mono llamado Marcel", true),
      opt("Un perro"),
      opt("Un gato"),
      opt("Un loro"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué pacto hace el grupo para la Nochevieja, que casi todos acaban rompiendo?",
    options: [
      opt("No llevar pareja a la fiesta", true),
      opt("No beber alcohol"),
      opt("Irse todos juntos a medianoche"),
      opt("No hablar de sus ex"),
    ],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué dilema tiene que resolver David, el novio científico de Phoebe?",
    options: [
      opt("Elegir entre quedarse con ella o una beca de investigación en Minsk", true),
      opt("Elegir entre Phoebe y su ex"),
      opt("Elegir entre dos trabajos en Nueva York"),
      opt("Elegir entre la ciencia y la música"),
    ],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Cómo se llama el chico con el que Monica intenta quedar esa noche, que está de duelo por su abuelo?",
    options: [opt("Bobby (\"Fun Bobby\")", true), opt("Alan"), opt("Roger"), opt("Ethan")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿A quién invita Chandler impulsivamente a la fiesta, para acabar rompiendo con ella esa misma noche?",
    options: [opt("A Janice", true), opt("A Aurora"), opt("A Nora"), opt("A Celia")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "Como ninguno de los dos tiene pareja, ¿quién besa a Chandler a medianoche?",
    options: [opt("Joey", true), opt("Ross"), opt("Monica"), opt("Rachel")],
  },

  // Episodio 11 — The One with Mrs. Bing
  {
    episode: 11,
    difficulty: "easy",
    text: "¿Quién es la Sra. Bing que da título a este episodio?",
    options: [
      opt("La madre de Chandler", true),
      opt("La madre de Ross"),
      opt("La abuela de Monica"),
      opt("La tía de Phoebe"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿A qué se dedica la madre de Chandler?",
    options: [
      opt("Es escritora de novelas románticas", true),
      opt("Es médica"),
      opt("Es abogada"),
      opt("Es actriz"),
    ],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "Borracho por ver a Rachel con Paolo, ¿a quién besa Ross por error?",
    options: [
      opt("A la madre de Chandler", true),
      opt("A Phoebe"),
      opt("A una desconocida"),
      opt("A Susan"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Quién presencia ese beso y se lo cuenta después a Chandler?",
    options: [opt("Joey", true), opt("Monica"), opt("Rachel"), opt("Phoebe")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Por qué compiten Monica y Phoebe en este episodio?",
    options: [
      opt("Por cuidar a un hombre atractivo hospitalizado", true),
      opt("Por un puesto de trabajo"),
      opt("Por la atención de Ross"),
      opt("Por ganar un concurso de cocina"),
    ],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué intenta escribir Rachel en este episodio, con resultados torpes?",
    options: [
      opt("Una novela romántica", true),
      opt("Una carta de amor"),
      opt("Un guion de cine"),
      opt("Un diario"),
    ],
  },

  // Episodio 12 — The One with the Dozen Lasagnas
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Por qué rompe Rachel con Paolo en este episodio?",
    options: [
      opt("Porque él intenta ligar con Phoebe", true),
      opt("Porque se muda a Italia"),
      opt("Porque le es infiel con otra mujer"),
      opt("Porque no quiere formalizar la relación"),
    ],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué error comete Monica al preparar una docena de lasañas para su tía?",
    options: [
      opt("Las hace con carne cuando debían ser vegetarianas", true),
      opt("Se le queman todas"),
      opt("Olvida el queso"),
      opt("Las hace demasiado saladas"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué prefiere Ross respecto a conocer el sexo de su futuro bebé?",
    options: [
      opt("Prefiere esperar a que nazca para saberlo", true),
      opt("Quiere saberlo cuanto antes"),
      opt("Ya lo sabe desde el principio del embarazo"),
      opt("Le da igual saberlo o no"),
    ],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "Sin querer, ¿qué le revela Rachel a Ross sobre su bebé?",
    options: [
      opt("Que va a ser un niño", true),
      opt("Que va a ser una niña"),
      opt("Que serán mellizos"),
      opt("Que se llamará Ben"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "Tras la ruptura con Paolo, ¿qué decide Rachel sobre los hombres?",
    options: [
      opt("Jurar que no quiere saber nada de ellos por un tiempo", true),
      opt("Salir con Ross inmediatamente"),
      opt("Volver con Barry"),
      opt("Mudarse sola"),
    ],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Quién intenta consolar a Rachel tras su ruptura, con la esperanza de tener una oportunidad con ella?",
    options: [opt("Ross", true), opt("Chandler"), opt("Joey"), opt("Bobby")],
  },

  // Episodio 13 — The One with the Boobies
  {
    episode: 13,
    difficulty: "easy",
    text: "¿A quién ve Chandler sin querer, desencadenando una reacción en cadena de desnudos?",
    options: [opt("A Rachel", true), opt("A Monica"), opt("A Phoebe"), opt("A Janice")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Qué descubre Joey sobre su padre en este episodio?",
    options: [
      opt("Que tiene una aventura desde hace tiempo", true),
      opt("Que perdió su trabajo"),
      opt("Que está enfermo"),
      opt("Que tiene otra familia secreta"),
    ],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Cómo reacciona la madre de Joey al enterarse de que él sabe lo de la aventura de su padre?",
    options: [
      opt("Le pide que no diga nada y deje las cosas como están", true),
      opt("Se divorcia inmediatamente"),
      opt("Se lo cuenta a todo el barrio"),
      opt("Se muda de casa"),
    ],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Cómo se llama el psiquiatra con el que sale Phoebe, que incomoda al grupo con sus análisis?",
    options: [opt("Roger", true), opt("Alan"), opt("David"), opt("Bobby")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué resulta tan molesto del novio psiquiatra de Phoebe?",
    options: [
      opt("Hace diagnósticos psicológicos certeros e incómodos sobre el grupo", true),
      opt("Habla todo el rato de su ex"),
      opt("No para de fumar"),
      opt("Es demasiado tímido"),
    ],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "Además de Rachel, ¿quiénes más acaban viéndose desnudos por accidente en la reacción en cadena del episodio?",
    options: [
      opt("Joey, Monica y el padre de Joey", true),
      opt("Solo Ross"),
      opt("Solo Phoebe"),
      opt("Nadie más"),
    ],
  },

  // Episodio 14 — The One with the Candy Hearts
  {
    episode: 14,
    difficulty: "easy",
    text: "¿Qué festividad se celebra en este episodio?",
    options: [
      opt("San Valentín", true),
      opt("Acción de Gracias"),
      opt("Halloween"),
      opt("El día de la Independencia"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿A quién besa Ross en su cita de San Valentín, en lugar de a su acompañante?",
    options: [opt("A Carol, su ex mujer", true), opt("A Rachel"), opt("A Susan"), opt("A Nora")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Quién resulta ser la cita a ciegas que le organizan a Chandler ese día?",
    options: [opt("Janice", true), opt("Aurora"), opt("Celia"), opt("Nora")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué hacen Phoebe, Monica y Rachel con recuerdos de antiguos novios, provocando un pequeño incendio?",
    options: [opt("Los queman", true), opt("Los tiran a la basura"), opt("Los venden"), opt("Los donan")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Qué hace Chandler el mismo día de San Valentín, tras pasar la noche con Janice?",
    options: [
      opt("Rompe con ella", true),
      opt("Le pide matrimonio"),
      opt("La presenta a sus padres"),
      opt("Se muda con ella"),
    ],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Por qué termina Ross recordando por qué rompió con Carol?",
    options: [
      opt("Porque ella se lo recuerda tras el beso", true),
      opt("Porque Susan se lo explica"),
      opt("Porque la ve con otro hombre"),
      opt("Porque encuentra una carta antigua"),
    ],
  },

  // Episodio 15 — The One with the Stoned Guy
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Cómo se llama el restaurador para el que cocina Monica, que aparece drogado?",
    options: [opt("Steve", true), opt("Alan"), opt("Roger"), opt("Cranston")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué pide Steve, completamente colocado, durante la cena que le prepara Monica?",
    options: [
      opt("Todo lo que ve en la cocina", true),
      opt("Solo postre"),
      opt("Que le devuelvan el dinero"),
      opt("Comida para llevar"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿A qué puesto asciende a Chandler en su trabajo tras cinco años?",
    options: [opt("Supervisor", true), opt("Director"), opt("Vicepresidente"), opt("Becario senior")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "Tras el ascenso, ¿qué hace Chandler que sorprende a todos?",
    options: [
      opt("Dimite, aunque solo era su intención temporal", true),
      opt("Pide un aumento enorme"),
      opt("Despide a su jefe"),
      opt("Se muda de ciudad"),
    ],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Con quién sale Ross en este episodio, una compañera de trabajo?",
    options: [opt("Celia", true), opt("Julie"), opt("Carol"), opt("Emily")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "Tras conocer a Marcel, ¿qué le pide Celia a Ross como parte de los preliminares?",
    options: [
      opt("Que le hable sucio", true),
      opt("Que se disfrace de mono"),
      opt("Que le presente a sus amigos"),
      opt("Que le enseñe el museo"),
    ],
  },

  // Episodio 16 — The One with Two Parts: Part 1
  {
    episode: 16,
    difficulty: "medium",
    text: "¿A quién empieza a perseguir Joey en este episodio, para disgusto de Phoebe?",
    options: [
      opt("A Ursula, la hermana gemela de Phoebe", true),
      opt("A una compañera de trabajo de Joey"),
      opt("A la hermana de Ross"),
      opt("A Janice"),
    ],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Qué tarea incómoda tiene que hacer Chandler en el trabajo con una empleada que le atrae?",
    options: [opt("Despedirla", true), opt("Ascenderla"), opt("Contratarla"), opt("Evaluarla")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿A qué clases empieza a asistir Ross, dudando de si será un buen padre?",
    options: [
      opt("Clases de preparación al parto (Lamaze)", true),
      opt("Clases de cocina"),
      opt("Clases de yoga"),
      opt("Clases de defensa personal"),
    ],
  },
  {
    episode: 16,
    difficulty: "easy",
    text: "¿Qué problema tiene la televisión de Monica en este episodio?",
    options: [
      opt("Se queda encallada en el audio en español", true),
      opt("Se rompe la pantalla"),
      opt("Solo pone canales infantiles"),
      opt("Se apaga sola"),
    ],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Qué lleva semanas posponiendo Rachel, hasta que le causa un accidente?",
    options: [
      opt("Quitar las luces de Navidad del balcón", true),
      opt("Pagar el alquiler"),
      opt("Devolver un libro"),
      opt("Llamar a su madre"),
    ],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué le pasa a Rachel al caerse mientras hace esa tarea pendiente?",
    options: [
      opt("Se tuerce el tobillo", true),
      opt("Se rompe un brazo"),
      opt("Se golpea la cabeza"),
      opt("No le pasa nada"),
    ],
  },

  // Episodio 17 — The One with Two Parts: Part 2
  {
    episode: 17,
    difficulty: "hard",
    text: "Al no tener seguro médico, ¿de quién se hace pasar Rachel en el hospital para que la atiendan?",
    options: [opt("De Monica", true), opt("De Phoebe"), opt("De una desconocida"), opt("De su madre")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "Manteniendo el cambio de identidad, ¿con qué tipo de hombres consiguen citas Rachel y Monica en el hospital?",
    options: [
      opt("Con médicos atractivos", true),
      opt("Con enfermeros"),
      opt("Con pacientes"),
      opt("Con bomberos"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Cómo termina Ursula su relación con Joey?",
    options: [
      opt("Le deja sin decírselo, sin más explicación", true),
      opt("Se casa con otro delante de él"),
      opt("Se muda a otro país avisándole antes"),
      opt("Le propone matrimonio"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "Para darle un cierre a la ruptura, ¿qué hace Phoebe por Joey?",
    options: [
      opt("Se hace pasar por Ursula", true),
      opt("Le presenta a otra chica"),
      opt("Le escribe una carta como si fuera Ursula"),
      opt("Habla con Ursula en su nombre"),
    ],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué hace que Marcel, el mono de Ross, termine hospitalizado en este episodio?",
    options: [
      opt("Se traga fichas de un juego de Scrabble", true),
      opt("Se cae de la ventana"),
      opt("Le muerde un perro"),
      opt("Come chocolate"),
    ],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "Cuidando a Marcel en el hospital, ¿qué gana Ross respecto a su futura paternidad?",
    options: [
      opt("Confianza en que será un buen padre", true),
      opt("Más dudas todavía"),
      opt("Indiferencia total"),
      opt("El deseo de no tener más mascotas"),
    ],
  },

  // Episodio 18 — The One with All the Poker
  {
    episode: 18,
    difficulty: "medium",
    text: "¿En qué tienda hace Rachel una entrevista de trabajo como ayudante de compras?",
    options: [opt("Saks Fifth Avenue", true), opt("Bloomingdale's"), opt("Macy's"), opt("Central Perk")],
  },
  {
    episode: 18,
    difficulty: "easy",
    text: "¿A qué juego se enfrentan chicos contra chicas en este episodio?",
    options: [opt("Al póker", true), opt("Al Monopoly"), opt("A las cartas del Uno"), opt("Al ajedrez")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué cambio de carácter sorprendente muestra Ross durante la partida?",
    options: [
      opt("Pierde su habitual actitud tranquila y se vuelve muy competitivo", true),
      opt("Se queda dormido"),
      opt("Se niega a jugar"),
      opt("Se pone a llorar"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿A quién recurre Monica para intentar mejorar su juego de póker?",
    options: [
      opt("A su tía, experta en póker", true),
      opt("A su padre"),
      opt("A un compañero de trabajo"),
      opt("A un libro de estrategia"),
    ],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Consigue Rachel el puesto de trabajo por el que se entrevista en este episodio?",
    options: [
      opt("No, no la contratan", true),
      opt("Sí, empieza al día siguiente"),
      opt("Sí, pero lo rechaza"),
      opt("Queda en lista de espera"),
    ],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué está en juego, más allá del dinero, en la partida de póker entre chicos y chicas?",
    options: [
      opt("El orgullo de cada grupo", true),
      opt("La propiedad del apartamento"),
      opt("Un viaje"),
      opt("El puesto de camarera de Central Perk"),
    ],
  },

  // Episodio 19 — The One Where the Monkey Gets Away
  {
    episode: 19,
    difficulty: "easy",
    text: "¿Qué mascota se escapa del apartamento en este episodio?",
    options: [
      opt("Marcel, el mono de Ross", true),
      opt("El gato de Rachel"),
      opt("El perro de Phoebe"),
      opt("El pájaro de Chandler"),
    ],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Por qué se enfada tanto Ross cuando Rachel llama a la protectora de animales?",
    options: [
      opt("Porque tener un mono como mascota es ilegal y podrían quitárselo", true),
      opt("Porque odia a los empleados de la protectora"),
      opt("Porque Marcel les tiene miedo"),
      opt("Porque cuesta mucho dinero"),
    ],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué relación previa tiene la agente de la protectora con Rachel?",
    options: [
      opt("Fueron compañeras del instituto y la agente le guarda rencor", true),
      opt("Son primas"),
      opt("Fueron vecinas de pequeñas"),
      opt("No se conocen de nada"),
    ],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Con qué amenaza consigue Rachel que la agente les devuelva a Marcel?",
    options: [
      opt("Con denunciar que le disparó un dardo tranquilizante a Phoebe por accidente", true),
      opt("Con denunciarla por acoso"),
      opt("Con contárselo a su jefe"),
      opt("Con pagarle más dinero"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué noticia sobre Barry deja deprimida a Rachel al principio del episodio?",
    options: [
      opt("Que se ha comprometido con Mindy", true),
      opt("Que se ha mudado a otra ciudad"),
      opt("Que ha tenido un hijo"),
      opt("Que se ha hecho socio de la clínica"),
    ],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "Cuando Ross por fin se decide a pedirle una cita a Rachel, ¿quién le interrumpe?",
    options: [
      opt("Barry, que aparece diciendo que sigue enamorado de ella", true),
      opt("Susan"),
      opt("Chandler"),
      opt("El jefe de Rachel"),
    ],
  },

  // Episodio 20 — The One with the Evil Orthodontist
  {
    episode: 20,
    difficulty: "hard",
    text: "A pesar de estar comprometido con Mindy, ¿con quién sigue Barry teniendo una aventura en secreto?",
    options: [opt("Con Rachel", true), opt("Con Monica"), opt("Con Phoebe"), opt("Con una paciente")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Qué le pide Mindy a Rachel, sin saber lo que ocurre entre ella y Barry?",
    options: [
      opt("Que sea su dama de honor", true),
      opt("Que sea testigo en su boda"),
      opt("Que le preste su vestido"),
      opt("Que organice su despedida de soltera"),
    ],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué descubren Rachel y Mindy que tienen en común respecto a Barry?",
    options: [
      opt("Que ambas han tenido una aventura con él", true),
      opt("Que ambas rompieron con él el mismo día"),
      opt("Que ambas trabajan con él"),
      opt("Que ninguna quiere casarse con él"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "A pesar de todo, ¿qué decide finalmente Mindy?",
    options: [
      opt("Casarse con Barry de todos modos", true),
      opt("Cancelar la boda"),
      opt("Denunciar a Barry"),
      opt("Mudarse de ciudad"),
    ],
  },
  {
    episode: 20,
    difficulty: "easy",
    text: "¿Qué nuevo peinado de Rachel se estrena en este episodio y se hará muy famoso?",
    options: [
      opt("\"El corte Rachel\"", true),
      opt("Una melena rizada"),
      opt("El pelo rapado"),
      opt("Una coleta alta"),
    ],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Con qué se obsesiona Chandler en este episodio?",
    options: [
      opt("Con que una chica que le gusta no le devuelve las llamadas", true),
      opt("Con perder peso"),
      opt("Con aprender a cocinar"),
      opt("Con comprarse un coche"),
    ],
  },

  // Episodio 21 — The One with the Fake Monica
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué le roban a Monica al principio de este episodio?",
    options: [
      opt("Su identidad / tarjetas de crédito", true),
      opt("Su coche"),
      opt("Su apartamento"),
      opt("Su trabajo"),
    ],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Qué hace Monica con la mujer que ha estado suplantando su identidad, antes de que la detengan?",
    options: [
      opt("Se hace amiga de ella", true),
      opt("La denuncia sin hablarle"),
      opt("La ignora por completo"),
      opt("Le da las gracias por \"ser ella\""),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué busca Joey con ayuda de sus amigos en este episodio?",
    options: [
      opt("Un nombre artístico que suene menos italiano", true),
      opt("Un nuevo apartamento"),
      opt("Un agente nuevo"),
      opt("Un compañero de piso"),
    ],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Qué hace Chandler que acaba saboteando las audiciones de Joey?",
    options: [
      opt("Le sugiere en broma nombres artísticos que Joey usa en serio", true),
      opt("Se presenta él mismo a las audiciones"),
      opt("Llega tarde con Joey"),
      opt("Habla mal de Joey al director de casting"),
    ],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Por qué tiene que irse Marcel, el mono de Ross, a vivir a un zoo?",
    options: [
      opt("Porque ha alcanzado la madurez sexual y ya no puede quedarse en el apartamento", true),
      opt("Porque ha enfermado"),
      opt("Porque Ross se muda"),
      opt("Porque ataca a los vecinos"),
    ],
  },
  {
    episode: 21,
    difficulty: "easy",
    text: "¿A qué zoológico se traslada Marcel al final del episodio?",
    options: [
      opt("Al zoo de San Diego", true),
      opt("Al zoo del Bronx"),
      opt("Al zoo de Central Park"),
      opt("A un zoo de Florida"),
    ],
  },

  // Episodio 22 — The One with the Ick Factor
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Qué descubre Monica sobre Ethan, el chico con el que ha estado saliendo, tras acostarse con él?",
    options: [
      opt("Que en realidad es un estudiante de instituto, no de universidad", true),
      opt("Que está casado"),
      opt("Que es actor"),
      opt("Que es primo de Chandler"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Como qué empieza a trabajar Phoebe temporalmente, para Chandler?",
    options: [
      opt("Como su secretaria temporal", true),
      opt("Como su jefa"),
      opt("Como su cocinera"),
      opt("Como su chófer"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Cómo reaccionan los compañeros de oficina de Chandler ante él como jefe?",
    options: [
      opt("No les cae bien en ese papel", true),
      opt("Lo adoran"),
      opt("Les da igual"),
      opt("Piden que lo asciendan"),
    ],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Con quiénes sueña Rachel de forma erótica en este episodio, poniendo celoso a Ross?",
    options: [
      opt("Con Joey y Chandler", true),
      opt("Con Ross y Chandler"),
      opt("Con Paolo y Joey"),
      opt("Con dos desconocidos"),
    ],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "Cuando Rachel por fin sueña con Ross, ¿qué le impide a él escuchar la confesión al despertar?",
    options: [
      opt("Su busca avisa de que Carol se ha puesto de parto", true),
      opt("Se queda dormido de nuevo"),
      opt("Llega Susan"),
      opt("Suena el teléfono de casa"),
    ],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué noticia relacionada con el embarazo de Carol marca el final de este episodio?",
    options: [
      opt("Que se ha puesto de parto", true),
      opt("Que ha tenido gemelos"),
      opt("Que el bebé nacerá prematuro"),
      opt("Que Carol se muda de ciudad"),
    ],
  },

  // Episodio 23 — The One with the Birth
  {
    episode: 23,
    difficulty: "easy",
    text: "¿Qué evento importante ocurre en este episodio?",
    options: [
      opt("El nacimiento del hijo de Ross y Carol", true),
      opt("La boda de Ross"),
      opt("La mudanza de Rachel"),
      opt("El cumpleaños de Monica"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Por qué discuten Ross y Susan en el hospital?",
    options: [
      opt("Por quién debe ayudar más y por el nombre del bebé", true),
      opt("Por quién paga el hospital"),
      opt("Por la habitación"),
      opt("Por el nombre del pediatra"),
    ],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué hace Phoebe para intentar que Ross y Susan resuelvan su conflicto?",
    options: [
      opt("Los encierra juntos en un cuarto de limpieza", true),
      opt("Los manda a terapia"),
      opt("Llama a los padres de Ross"),
      opt("Se va del hospital enfadada"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Con quién coquetea Rachel en el hospital durante el parto?",
    options: [
      opt("Con un ginecólogo quemado de su trabajo", true),
      opt("Con un enfermero joven"),
      opt("Con el padre de otro bebé"),
      opt("Con un médico amigo de Ross"),
    ],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿A quién ayuda Joey en el hospital durante el episodio?",
    options: [
      opt("A una futura madre soltera", true),
      opt("A una anciana perdida"),
      opt("A un niño que llora"),
      opt("A una embarazada desconocida en el ascensor"),
    ],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿De dónde sale la inspiración para el nombre que le ponen al bebé, Ben?",
    options: [
      opt("Del uniforme de un conserje que encuentran en el cuarto donde quedan encerrados", true),
      opt("De un personaje de una novela"),
      opt("Del nombre del médico"),
      opt("De una canción que suena en la radio"),
    ],
  },

  // Episodio 24 — The One Where Rachel Finds Out
  {
    episode: 24,
    difficulty: "medium",
    text: "¿A qué país viaja Ross por trabajo antes del cumpleaños de Rachel?",
    options: [opt("A China", true), opt("A Francia"), opt("A Italia"), opt("A Inglaterra")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué consejo le da Chandler a Ross respecto a sus sentimientos por Rachel?",
    options: [
      opt("Que pase página y siga adelante", true),
      opt("Que se lo confiese cuanto antes"),
      opt("Que se mude con ella"),
      opt("Que hable primero con Carol"),
    ],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Qué estudio hace que Joey deba mantenerse célibe temporalmente, complicando su relación con Melanie?",
    options: [
      opt("Un estudio remunerado sobre fertilidad", true),
      opt("Un estudio sobre el sueño"),
      opt("Una dieta experimental"),
      opt("Un tratamiento dermatológico"),
    ],
  },
  {
    episode: 24,
    difficulty: "easy",
    text: "¿Qué celebración reúne a los amigos al final de la temporada?",
    options: [
      opt("El cumpleaños de Rachel", true),
      opt("La boda de Monica"),
      opt("El bautizo de Ben"),
      opt("El cumpleaños de Ross"),
    ],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Cómo se entera finalmente Rachel de que Ross está enamorado de ella?",
    options: [
      opt("Porque Chandler se lo revela sin querer", true),
      opt("Porque Ross se lo confiesa en persona"),
      opt("Porque lo lee en una carta"),
      opt("Porque Monica se lo cuenta a propósito"),
    ],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Cómo termina la temporada 1, según lo que descubre Rachel sobre Ross?",
    options: [
      opt("Con Rachel teniendo que decidir qué hacer con esa información", true),
      opt("Con la boda de Ross y Rachel"),
      opt("Con Rachel rechazando a Ross de inmediato"),
      opt("Con Rachel mudándose a otra ciudad"),
    ],
  },
];
