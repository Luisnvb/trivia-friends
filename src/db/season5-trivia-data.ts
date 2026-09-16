/**
 * Datos de trivia de la Temporada 5 de Friends (24 episodios).
 *
 * Generado a partir de un resumen argumental episodio a episodio obtenido
 * de Wikipedia ("Friends (season 5)", en.wikipedia.org/wiki/Friends_season_5)
 * en septiembre de 2026, para evitar inventar detalles de trama de memoria.
 * Los episodios 23 y 24 ("The One in Vegas") forman un dosier doble; se
 * reparten 6 preguntas para cada mitad según la fuente.
 *
 * 6 preguntas por episodio (144 en total), todas en modo `multiple_choice`,
 * con mayoría de dificultad `medium`/`hard` y una minoría `easy` por
 * episodio. El orden de las opciones se baraja en `seed-season5.ts` antes
 * de insertar, para que la respuesta correcta no quede siempre en la misma
 * posición.
 */

export type Season5TriviaSeed = {
  episode: number;
  difficulty: "easy" | "medium" | "hard";
  text: string;
  options: { text: string; isCorrect: boolean }[];
};

function opt(text: string, isCorrect = false) {
  return { text, isCorrect };
}

export const season5TriviaData: Season5TriviaSeed[] = [
  // Episodio 1 — The One After Ross Says Rachel
  {
    episode: 1,
    difficulty: "easy",
    text: "¿A qué país intenta Ross convencer a Rachel de viajar con él, usando los billetes de la luna de miel?",
    options: [opt("Grecia", true), opt("Italia"), opt("Francia"), opt("España")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Qué hace Rachel justo después de la ceremonia, para evitar a todos?",
    options: [opt("Se esconde", true), opt("Se va del país"), opt("Llama a su madre"), opt("Se muda de apartamento")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Quién aparece de repente en el aeropuerto, provocando el caos final del episodio?",
    options: [opt("Emily", true), opt("Susan"), opt("Carol"), opt("Janice")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Cómo termina viajando finalmente Rachel tras el caos en el aeropuerto?",
    options: [opt("Sola", true), opt("Con Ross"), opt("Con Emily"), opt("No llega a viajar")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Cómo se titula este primer episodio de la temporada 5?",
    options: [
      opt("The One After Ross Says Rachel", true),
      opt("The One with All the Kissing"),
      opt("The One Hundredth"),
      opt("The One with Ross' Wedding"),
    ],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Qué intenta salvar Ross al proponerle el viaje a Rachel?",
    options: [
      opt("Los billetes ya pagados de su luna de miel", true),
      opt("Su amistad con Emily"),
      opt("Su trabajo en el museo"),
      opt("Su relación con Susan y Carol"),
    ],
  },

  // Episodio 2 — The One with All the Kissing
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Cómo vuelve Rachel de su viaje, tras el caos del aeropuerto?",
    options: [opt("Enfadada por haber viajado sola", true), opt("Feliz y relajada"), opt("Acompañada de un nuevo novio"), opt("Sin haber llegado a viajar")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué hace Emily cuando Ross intenta reconciliarse con ella?",
    options: [opt("Se niega a tener contacto con él", true), opt("Acepta volver con él"), opt("Le pide que se mude a Londres"), opt("Le propone anular la boda amistosamente")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué hace Chandler para disimular su relación secreta con Monica?",
    options: [opt("Besa a varias personas distintas", true), opt("Finge tener novia en otra ciudad"), opt("Se muda temporalmente"), opt("Le dice a todos que es gay")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué le ocurre a Phoebe que desvía los planes del grupo?",
    options: [opt("Rompe aguas", true), opt("Se marea en el coche"), opt("Pierde las llaves del coche"), opt("Se le pincha una rueda")],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Adónde se dirigía originalmente el grupo cuando Phoebe rompe aguas?",
    options: [opt("A Atlantic City", true), opt("A Las Vegas"), opt("A la playa"), opt("A casa de los padres de Monica")],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿A qué lugar termina yendo el grupo en su lugar?",
    options: [opt("Al hospital", true), opt("A casa de Ross"), opt("A Central Perk"), opt("A la comisaría")],
  },

  // Episodio 3 — The One Hundredth
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Cuántos bebés da a luz Phoebe en este episodio?",
    options: [opt("Tres (trillizos)", true), opt("Uno"), opt("Dos (mellizos)", false), opt("Ninguno, es una falsa alarma")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Para quién son los trillizos que da a luz Phoebe?",
    options: [opt("Para su hermano Frank Jr. y su esposa", true), opt("Para ella misma"), opt("Para Ross y Emily"), opt("Para Monica y Chandler")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué problema de salud complica la visita de Joey al hospital?",
    options: [opt("Cálculos renales", true), opt("Una apendicitis"), opt("Un brazo roto"), opt("Una intoxicación alimentaria")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué hace Rachel para intentar superar a Ross en este episodio?",
    options: [opt("Intenta volver a salir con otras personas", true), opt("Se muda de ciudad"), opt("Empieza un nuevo trabajo"), opt("Deja de hablarle por completo")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Qué característica tiene el médico que atiende el parto de Phoebe?",
    options: [opt("Es un tanto excéntrico", true), opt("Es amigo de la infancia de Ross"), opt("Habla poco inglés"), opt("Es el exmarido de Phoebe")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Cómo se llaman dos de los tres bebés que nacen en este episodio?",
    options: [opt("Leslie y Chandler", true), opt("Emma y Ben"), opt("Jack y Judy"), opt("Ursula y Frank")],
  },

  // Episodio 4 — The One Where Phoebe Hates PBS
  {
    episode: 4,
    difficulty: "easy",
    text: "¿Por qué se vuelve arrogante Chandler en este episodio?",
    options: [opt("Porque Monica le dice que es su mejor amante", true), opt("Porque le suben el sueldo"), opt("Porque gana un concurso"), opt("Porque Joey lo elogia sin parar")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Qué exige Emily a Ross cuando él la llama por teléfono?",
    options: [opt("Que no vuelva a ver a Rachel nunca más", true), opt("Que se disculpe públicamente"), opt("Que le devuelva sus regalos"), opt("Que se mude a Londres")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿En qué tipo de evento trabaja Joey en este episodio?",
    options: [opt("Una teletón de la televisión pública (PBS)", true), opt("Una feria de empleo"), opt("Una boda"), opt("Un desfile de moda")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Sobre qué duda Phoebe a lo largo del episodio?",
    options: [opt("Si existe realmente una buena acción totalmente desinteresada", true), opt("Si debería adoptar un gato"), opt("Si debería volver a cantar en Central Perk"), opt("Si debería dejar su apartamento")],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Cómo cambia el comportamiento de Chandler hacia sus amigos tras el comentario de Monica?",
    options: [opt("Se vuelve engreído y presumido", true), opt("Se vuelve más generoso"), opt("Deja de hacer bromas"), opt("Se aleja del grupo")],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Qué da título a este episodio, relacionado con la cadena PBS?",
    options: [opt("Que Phoebe termina odiando PBS", true), opt("Que Joey es despedido de PBS"), opt("Que PBS cancela la teletón"), opt("Que Ross dona a PBS")],
  },

  // Episodio 5 — The One with the Kips
  {
    episode: 5,
    difficulty: "easy",
    text: "¿Quién descubre en este episodio la relación secreta de Monica y Chandler?",
    options: [opt("Joey", true), opt("Rachel"), opt("Phoebe"), opt("Ross")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué hace Joey al descubrir el secreto de Monica y Chandler?",
    options: [opt("Lo mantiene en confidencialidad", true), opt("Se lo cuenta enseguida a Ross"), opt("Se lo cuenta a Rachel"), opt("Lo publica en un anuncio")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué ponen en riesgo las restricciones que impone Emily?",
    options: [opt("El lugar de Rachel dentro del grupo de amigos", true), opt("El trabajo de Ross"), opt("La amistad entre Monica y Rachel"), opt("El apartamento de Ross")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Dónde discuten Monica y Chandler en este episodio?",
    options: [opt("En una escapada de fin de semana", true), opt("En el apartamento de Ross"), opt("En Central Perk"), opt("En el trabajo de Chandler")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Qué hace que Emily sea percibida como una amenaza para el grupo en este episodio?",
    options: [opt("Sus exigencias sobre con quién puede relacionarse Ross", true), opt("Que se muda a Nueva York"), opt("Que empieza a salir con Joey"), opt("Que abre un negocio rival al de Monica")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Cómo describirías la actitud de Joey respecto al secreto que descubre?",
    options: [opt("Discreto, no se lo cuenta a nadie", true), opt("Chismoso, se lo cuenta a todos"), opt("Indiferente, no le da importancia"), opt("Furioso con Chandler por ocultárselo")],
  },

  // Episodio 6 — The One with the Yeti
  {
    episode: 6,
    difficulty: "easy",
    text: "¿A quién confunden Rachel y Monica con un yeti en este episodio?",
    options: [opt("A su nuevo vecino Danny", true), opt("A un repartidor"), opt("A Gunther"), opt("A un familiar de Ross")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Con qué rocían Rachel y Monica a su nuevo vecino, al confundirlo?",
    options: [opt("Spray antiinsectos", true), opt("Agua"), opt("Perfume"), opt("Pintura")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué tipo de exigencias sigue imponiendo Emily a Ross en este episodio?",
    options: [opt("Exigencias poco razonables sobre su relación con Rachel", true), opt("Que deje su trabajo"), opt("Que se mude a Londres de inmediato"), opt("Que rompa con todo el grupo de amigos")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué regalo hace que Phoebe replantee sus valores?",
    options: [opt("Un abrigo de piel", true), opt("Un anillo de diamantes"), opt("Un coche"), opt("Un viaje de lujo")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Cómo se llama el nuevo vecino que Rachel y Monica confunden con un yeti?",
    options: [opt("Danny", true), opt("Gary"), opt("Larry"), opt("David")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Por qué duda Phoebe sobre aceptar o no el abrigo de piel?",
    options: [opt("Porque entra en conflicto con sus valores personales", true), opt("Porque no le queda de su talla"), opt("Porque se lo regaló un ex"), opt("Porque cree que es robado")],
  },

  // Episodio 7 — The One Where Ross Moves In
  {
    episode: 7,
    difficulty: "easy",
    text: "¿Por qué se muda Ross temporalmente con Joey y Chandler en este episodio?",
    options: [opt("Porque lo desahucian de su apartamento", true), opt("Porque se divorcia de Emily y vende su casa"), opt("Porque hay una inundación en su edificio"), opt("Porque quiere ahorrar dinero")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Cómo se comporta Rachel con Danny, a pesar de sentirse atraída por él?",
    options: [opt("Se hace la difícil", true), opt("Lo evita por completo"), opt("Le confiesa sus sentimientos de inmediato"), opt("Le pide salir ella primero")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿A qué se dedica Larry, el nuevo interés amoroso de Phoebe?",
    options: [opt("Es inspector de sanidad de restaurantes", true), opt("Es policía"), opt("Es médico"), opt("Es profesor de vuelo")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué consecuencia tiene el trabajo de Larry para los restaurantes que inspecciona?",
    options: [opt("Puede cerrarlos si no cumplen las normas", true), opt("Les da premios de calidad"), opt("Les sube los impuestos"), opt("Les da publicidad gratuita")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Quiénes acogen a Ross en su apartamento tras el desahucio?",
    options: [opt("Joey y Chandler", true), opt("Monica y Rachel"), opt("Solo Chandler"), opt("Solo Joey")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Qué da título a este episodio?",
    options: [opt("Que Ross se muda a vivir con Joey y Chandler", true), opt("Que Ross conoce a Danny"), opt("Que Ross empieza a salir con Phoebe"), opt("Que Ross recupera su apartamento")],
  },

  // Episodio 8 — The One with the Thanksgiving Flashbacks
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Qué tipo de recuerdos comparte el grupo en este episodio especial de Acción de Gracias?",
    options: [opt("Sus peores recuerdos de la festividad", true), opt("Sus mejores recuerdos de la festividad"), opt("Recetas familiares"), opt("Discursos de agradecimiento")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué mal recuerdo de Acción de Gracias tiene Chandler?",
    options: [opt("Que sus padres anunciaron su divorcio ese día", true), opt("Que se quemó la comida"), opt("Que perdió su trabajo ese día"), opt("Que su novia lo dejó plantado")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué le ocurre a Joey con un pavo crudo en uno de los flashbacks?",
    options: [opt("Se le queda la cabeza atascada dentro", true), opt("Se le cae encima"), opt("Lo confunde con un regalo"), opt("Lo usa como disfraz")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué le hace accidentalmente Monica a Chandler en uno de los flashbacks, tras llamarla él \"gorda\"?",
    options: [opt("Le corta un dedo del pie", true), opt("Le rompe la nariz"), opt("Le tira comida encima"), opt("Le rompe un plato en la cabeza")],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Qué formato narrativo usa este episodio para contar los recuerdos del grupo?",
    options: [opt("Flashbacks de Acción de Gracias de años anteriores", true), opt("Un sueño compartido"), opt("Cartas que se leen en voz alta"), opt("Un álbum de fotos")],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿En qué parte del cuerpo de Chandler queda la marca del incidente con Monica y el pavo/cuchillo?",
    options: [opt("En un dedo del pie", true), opt("En la mano"), opt("En la oreja"), opt("En la ceja")],
  },

  // Episodio 9 — The One with Ross' Sandwich
  {
    episode: 9,
    difficulty: "easy",
    text: "¿Por qué explota Ross de furia en el trabajo en este episodio?",
    options: [opt("Porque un compañero se come su sándwich", true), opt("Porque le roban el coche"), opt("Porque le cancelan unas vacaciones"), opt("Porque pierden un fósil importante")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué consecuencia laboral tiene el estallido de furia de Ross?",
    options: [opt("Se ve forzado a tomarse una baja", true), opt("Lo ascienden igualmente"), opt("Le suben el sueldo"), opt("Lo cambian de departamento")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué revela Joey por accidente en este episodio, avergonzando a Monica?",
    options: [opt("Que ella y Chandler se acostaron juntos en Londres", true), opt("Que Monica y Chandler están comprometidos"), opt("Que Monica tiene un exnovio famoso"), opt("Que Monica fue despedida de un trabajo")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Para qué sirve la mentira sobre \"lo de Londres\" que cuenta Joey?",
    options: [opt("Para tapar que Monica y Chandler siguen juntos en secreto", true), opt("Para presumir de sus propias conquistas"), opt("Para vengarse de Monica"), opt("Para ayudar a Ross con Emily")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Qué objeto da nombre al título de este episodio?",
    options: [opt("Un sándwich", true), opt("Una carta"), opt("Un fósil"), opt("Una llave")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Cómo se siente Monica cuando Joey menciona lo de Londres delante de todos?",
    options: [opt("Humillada", true), opt("Orgullosa"), opt("Indiferente"), opt("Aliviada")],
  },

  // Episodio 10 — The One with the Inappropriate Sister
  {
    episode: 10,
    difficulty: "easy",
    text: "¿Qué anima Ross a hacer a Joey en este episodio, al estar aburrido?",
    options: [opt("Escribir un guion de cine", true), opt("Apuntarse a clases de guitarra"), opt("Buscar un nuevo apartamento"), opt("Hacer una audición de teatro")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué provoca la implicación de Ross en el guion de Joey?",
    options: [opt("Tensión entre Joey y Chandler", true), opt("Que Joey consiga un papel en Hollywood"), opt("Que Chandler se una también al proyecto"), opt("Que Monica se enfade con Ross")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué actividad navideña realiza Phoebe de forma muy agresiva?",
    options: [opt("Recaudar donativos", true), opt("Cantar villancicos"), opt("Decorar el apartamento"), opt("Envolver regalos para desconocidos")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Por qué pierde Rachel el interés en Danny en este episodio?",
    options: [opt("Descubre un cariño inapropiado hacia su hermana", true), opt("Descubre que tiene otra novia"), opt("Descubre que se muda de ciudad"), opt("Descubre que le mintió sobre su trabajo")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿A quién hace referencia el título de este episodio (\"la hermana inapropiada\")?",
    options: [opt("A la hermana de Danny", true), opt("A la hermana de Ross"), opt("A la hermana de Rachel"), opt("A la hermana de Phoebe")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué tipo de proyecto empieza a escribir Joey, animado por Ross?",
    options: [opt("Un guion de cine", true), opt("Una novela"), opt("Una obra de teatro"), opt("Una serie de televisión")],
  },

  // Episodio 11 — The One with All the Resolutions
  {
    episode: 11,
    difficulty: "easy",
    text: "¿Qué propósito de Año Nuevo se marca Joey en este episodio?",
    options: [opt("Aprender a tocar la guitarra", true), opt("Dejar de comer comida basura"), opt("Aprender a volar aviones"), opt("Dejar de hacer bromas")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué propósito de Año Nuevo se marca Rachel?",
    options: [opt("Dejar de cotillear", true), opt("Hacer más fotos"), opt("Probar algo nuevo cada día"), opt("Pilotar un avión")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué propósito de Año Nuevo se marca Phoebe?",
    options: [opt("Aprender a pilotar un avión", true), opt("Dejar de fumar"), opt("Hacer más fotos"), opt("Aprender a tocar la guitarra")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué propósito de Año Nuevo se marca Ross?",
    options: [opt("Probar algo nuevo cada día", true), opt("Dejar de quejarse"), opt("Hacer más ejercicio"), opt("Leer un libro a la semana")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Qué escucha Rachel por accidente en este episodio, sobre Monica y Chandler?",
    options: [opt("Una conversación telefónica que revela su secreto", true), opt("Una discusión sobre romper"), opt("Una llamada sobre una boda sorpresa"), opt("Una llamada sobre mudarse juntos")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Qué propósito de Año Nuevo se marca Chandler?",
    options: [opt("Dejar de hacer bromas", true), opt("Ser más generoso"), opt("Dejar de fumar"), opt("Aprender a cocinar")],
  },

  // Episodio 12 — The One with Chandler's Work Laugh
  {
    episode: 12,
    difficulty: "easy",
    text: "¿Qué comportamiento de Chandler en el trabajo le molesta a Monica en este episodio?",
    options: [opt("Su forma de reír con los compañeros", true), opt("Que llegue siempre tarde"), opt("Que hable mal de ella"), opt("Que coquetee con una compañera")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué le pide Rachel a Monica en este episodio, sobre la relación con Chandler?",
    options: [opt("Detalles sobre cómo se descubrió el secreto", true), opt("Que rompa con él"), opt("Que le preste su apartamento"), opt("Que la ayude a organizar una fiesta")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué descubre Ross sobre Emily en este episodio?",
    options: [opt("Que está comprometida con otra persona", true), opt("Que se ha mudado a Nueva York"), opt("Que quiere volver con él"), opt("Que ha tenido un hijo")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Con quién se acuesta Ross tras enterarse de la noticia sobre Emily?",
    options: [opt("Con Janice", true), opt("Con Rachel"), opt("Con Kathy"), opt("Con una desconocida")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué hace Janice poco después de acostarse con Ross?",
    options: [opt("Lo deja/corta con él", true), opt("Le propone matrimonio"), opt("Se muda con él"), opt("Se lo cuenta a todo el grupo")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Cómo usa Chandler la información sobre la noche de Ross y Janice?",
    options: [opt("Como baza para negociar en el futuro", true), opt("La cuenta inmediatamente a todos"), opt("La usa para chantajear a Ross"), opt("La ignora por completo")],
  },

  // Episodio 13 — The One with Joey's Bag
  {
    episode: 13,
    difficulty: "easy",
    text: "¿Qué complemento empieza a llevar Joey a las audiciones en este episodio?",
    options: [opt("Un bolso de hombre", true), opt("Un sombrero"), opt("Unas gafas de sol caras"), opt("Un bastón")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Cómo reaccionan los demás ante el bolso de Joey?",
    options: [opt("Se burlan de él", true), opt("Lo felicitan por su estilo"), opt("Lo ignoran por completo"), opt("Quieren comprarse uno igual")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué familiar de Phoebe fallece en este episodio?",
    options: [opt("Su abuela", true), opt("Su madre"), opt("Su hermana Ursula"), opt("Su padre")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Quién acude también al funeral, generando dudas en Phoebe?",
    options: [opt("Frank (su padrastro)", true), opt("Su hermano Frank Jr."), opt("Un antiguo novio de su abuela"), opt("Ursula")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Qué le pide Monica a Phoebe en este episodio, relacionado con unos pendientes?",
    options: [opt("Le pregunta por unos pendientes que Rachel perdió", true), opt("Le pide que se los devuelva porque son suyos"), opt("Le pide consejo para comprar unos nuevos"), opt("Le pide que los venda")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Qué da nombre al título de este episodio?",
    options: [opt("El bolso de Joey", true), opt("Los pendientes de Rachel"), opt("La abuela de Phoebe"), opt("El funeral de la abuela")],
  },

  // Episodio 14 — The One Where Everybody Finds Out
  {
    episode: 14,
    difficulty: "easy",
    text: "¿Quiénes descubren finalmente, viendo por una ventana, la relación de Monica y Chandler?",
    options: [opt("Rachel y Phoebe", true), opt("Ross y Joey"), opt("Solo Ross"), opt("Solo Phoebe")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué hacen Rachel y Phoebe tras descubrir la relación secreta?",
    options: [opt("Presionan a Monica y Chandler para que lo confiesen", true), opt("Lo mantienen en secreto para siempre"), opt("Se lo cuentan a Ross de inmediato"), opt("Fingen no haber visto nada")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Por qué compite Ross en este episodio?",
    options: [opt("Por quedarse con el apartamento del Chico Feo Desnudo", true), opt("Por un ascenso en el museo"), opt("Por una beca de investigación"), opt("Por quedarse con el apartamento de Ross padre")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué piden Monica y Chandler tras declarar su amor mutuo ante el grupo?",
    options: [opt("Que se mantenga en secreto un tiempo más", true), opt("Que se anuncie una boda inmediata"), opt("Que Ross apruebe la relación primero"), opt("Que nadie se lo diga a sus padres")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Cómo se entera finalmente Ross de la relación de Monica y Chandler?",
    options: [opt("Durante un exabrupto en su trabajo", true), opt("Se lo cuenta Phoebe directamente"), opt("Los ve besándose en Central Perk"), opt("Lo lee en una carta")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Qué da título a este episodio?",
    options: [opt("Que todo el grupo se entera del secreto de Monica y Chandler", true), opt("Que Ross se muda de apartamento"), opt("Que Phoebe descubre un secreto de Rachel"), opt("Que Joey confiesa un secreto propio")],
  },

  // Episodio 15 — The One with the Girl Who Hits Joey
  {
    episode: 15,
    difficulty: "easy",
    text: "¿Cómo reacciona Ross finalmente ante la relación de Monica y Chandler en este episodio?",
    options: [opt("La acepta", true), opt("Corta la relación con su hermana"), opt("Deja de hablarle a Chandler para siempre"), opt("Exige que rompan")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué peculiaridad tiene la chica con la que sale Joey en este episodio?",
    options: [opt("Le pega en broma como forma de coqueteo", true), opt("Habla varios idiomas"), opt("Es su antigua profesora"), opt("Es famosa en televisión")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿A qué se niega Ross en este episodio, relacionado con el edificio?",
    options: [opt("A contribuir al fondo de jubilación del portero", true), opt("A pagar la reforma del portal"), opt("A cambiar de apartamento"), opt("A pagar más alquiler")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué hace Chandler de forma precipitada en este episodio?",
    options: [opt("Le propone matrimonio a Monica", true), opt("Deja su trabajo"), opt("Firma un contrato de alquiler"), opt("Anuncia la relación a sus padres")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Cómo responde Monica a la propuesta precipitada de Chandler?",
    options: [opt("Lo rechaza, pero le pide que esté abierto a casarse en el futuro", true), opt("Acepta inmediatamente"), opt("Rompe con él en el acto"), opt("Le pide tiempo indefinido sin dar una respuesta")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué es lo que en realidad quiere Monica de Chandler, en vez de una propuesta improvisada?",
    options: [opt("Que esté dispuesto a casarse algún día", true), opt("Que nunca vuelva a mencionar el matrimonio"), opt("Que se lo proponga delante de sus padres"), opt("Que primero se independice económicamente")],
  },

  // Episodio 16 — The One with the Cop
  {
    episode: 16,
    difficulty: "easy",
    text: "¿Qué objeto encuentra Phoebe y usa para hacerse pasar por policía?",
    options: [opt("Una placa policial", true), opt("Un uniforme completo"), opt("Una porra"), opt("Un coche patrulla")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué ocurre cuando Phoebe intenta usar la placa con un policía de verdad?",
    options: [opt("Termina saliendo con él", true), opt("La arrestan"), opt("Le confiscan la placa y ya está"), opt("La ignora por completo")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Cómo se llama el policía con el que empieza a salir Phoebe?",
    options: [opt("Gary", true), opt("Danny"), opt("Larry"), opt("Roger")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Qué intenta evitar pagar Ross en este episodio, relacionado con un sofá nuevo?",
    options: [opt("La tarifa de entrega/subida del sofá", true), opt("El impuesto de compra"), opt("El seguro del sofá"), opt("El montaje del sofá")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Qué empieza a experimentar Joey respecto a Monica en este episodio?",
    options: [opt("Sueños de tipo romántico", true), opt("Celos de su relación con Chandler"), opt("Deseos de mudarse con ella"), opt("Rivalidad profesional")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Cómo intenta Ross subir el sofá nuevo a su apartamento sin pagar?",
    options: [opt("Por su cuenta, con ayuda de sus amigos", true), opt("Contratando a un servicio más barato"), opt("Desmontándolo pieza a pieza"), opt("Pidiéndoselo prestado al portero")],
  },

  // Episodio 17 — The One with Rachel's Inadvertent Kiss
  {
    episode: 17,
    difficulty: "easy",
    text: "¿A quién besa Rachel por accidente en este episodio?",
    options: [opt("A su entrevistador de Ralph Lauren", true), opt("A Danny"), opt("A Gunther"), opt("A un compañero de trabajo cualquiera")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Por qué motivo se relaciona Rachel con esa persona antes del beso?",
    options: [opt("Es una entrevista de trabajo", true), opt("Es una cita a ciegas"), opt("Es un vecino nuevo"), opt("Es el jefe de Ross")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Qué compiten por demostrar Monica/Chandler y Phoebe/Gary en este episodio?",
    options: [opt("Quién es la mejor pareja", true), opt("Quién gana más dinero"), opt("Quién cocina mejor"), opt("Quién lleva más tiempo junto")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿A qué apartamento llega Joey por error varias veces en este episodio?",
    options: [opt("Al de Ross, en lugar del de una chica al otro lado de la calle", true), opt("Al de Monica, en lugar del de Rachel"), opt("Al de Phoebe, en lugar del de Gary"), opt("Al de Chandler, en lugar del de Joey mismo")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Para qué marca busca trabajo Rachel en este episodio?",
    options: [opt("Ralph Lauren", true), opt("Bloomingdale's"), opt("Gucci"), opt("Calvin Klein")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué da título a este episodio?",
    options: [opt("El beso accidental de Rachel", true), opt("La cita a ciegas de Rachel"), opt("El nuevo trabajo de Rachel"), opt("La competición entre las dos parejas")],
  },

  // Episodio 18 — The One Where Rachel Smokes
  {
    episode: 18,
    difficulty: "easy",
    text: "¿Qué hábito adopta Rachel en este episodio para encajar en el trabajo?",
    options: [opt("Fumar", true), opt("Beber café constantemente"), opt("Ir a fiestas cada noche"), opt("Vestir de forma distinta")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Por qué empieza Rachel a fumar?",
    options: [opt("Para sentirse incluida por sus compañeras de trabajo", true), opt("Por recomendación médica"), opt("Porque pierde una apuesta"), opt("Porque se lo pide Ross")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿A qué tipo de anuncio se presenta Joey en este episodio?",
    options: [opt("Un anuncio de sopa", true), opt("Un anuncio de coches"), opt("Un anuncio de ropa"), opt("Un anuncio de una aerolínea")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Qué complica la audición de Joey para el anuncio de sopa?",
    options: [opt("Problemas con los niños actores del anuncio", true), opt("Que se olvida del guion"), opt("Que llega tarde"), opt("Que Chandler lo sabotea sin querer")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué planean Monica y Phoebe en este episodio, con visiones opuestas?",
    options: [opt("La fiesta de cumpleaños de Rachel", true), opt("La boda de Ross"), opt("Una cena sorpresa para Chandler"), opt("Un viaje en grupo")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Cómo se llama este episodio, en relación con el nuevo hábito de Rachel?",
    options: [opt("The One Where Rachel Smokes", true), opt("The One Where Rachel Quits"), opt("The One with Rachel's Habit"), opt("The One with Rachel's New Job")],
  },

  // Episodio 19 — The One Where Ross Can't Flirt
  {
    episode: 19,
    difficulty: "easy",
    text: "¿Con quién intenta ligar Ross sin éxito en este episodio?",
    options: [opt("Con una repartidora de pizza", true), opt("Con una compañera de museo"), opt("Con una vecina nueva"), opt("Con una amiga de Rachel")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Quién ayuda a Ross en secreto a mejorar su intento de ligar?",
    options: [opt("Rachel", true), opt("Chandler"), opt("Monica"), opt("Phoebe")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿En qué serie de televisión consigue Joey un papel improvisado en este episodio?",
    options: [opt("Law & Order", true), opt("Days of Our Lives"), opt("ER"), opt("Baywatch")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué le ocurre al papel original de Joey en esa serie?",
    options: [opt("Se lo recortan/eliminan", true), opt("Se lo amplían inesperadamente"), opt("Lo cancelan del todo"), opt("Lo cambian por otro actor")],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué objeto genera confusión entre Monica, Phoebe y Rachel en este episodio?",
    options: [opt("Unos pendientes", true), opt("Un anillo"), opt("Un bolso"), opt("Unas llaves")],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué da título a este episodio?",
    options: [opt("Que Ross no sabe ligar", true), opt("Que Ross consigue una cita"), opt("Que Joey pierde un papel"), opt("Que Rachel ayuda a Joey")],
  },

  // Episodio 20 — The One with the Ride-Along
  {
    episode: 20,
    difficulty: "easy",
    text: "¿A qué actividad acompaña el grupo a Gary, el novio policía de Phoebe?",
    options: [opt("A una patrulla policial", true), opt("A un entrenamiento físico"), opt("A un juicio"), opt("A una rueda de prensa")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Qué protege Joey con celo durante la patrulla?",
    options: [opt("Un sándwich de albóndigas", true), opt("Su cartera"), opt("Una cámara de fotos"), opt("Un walkie-talkie")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Qué provoca celos entre Joey y Chandler durante la patrulla?",
    options: [opt("Un sándwich de albóndigas", true), opt("La atención de Gary"), opt("Quién se sienta delante en el coche"), opt("Quién lleva el arma de juguete")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Qué escucha Rachel por error en este episodio, relacionado con Emily?",
    options: [opt("Un mensaje de voz con dudas sobre su propia boda", true), opt("Una llamada pidiendo perdón a Ross"), opt("Un mensaje anunciando su compromiso"), opt("Una llamada invitando a Ross a Londres")],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué hace Rachel con el mensaje de voz de Emily, sin querer?",
    options: [opt("Lo borra por accidente", true), opt("Se lo reenvía a Ross de inmediato"), opt("Lo guarda como prueba"), opt("Se lo cuenta a todo el grupo")],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué provoca el ruido que sobresalta al grupo durante la patrulla, relacionado con el sándwich de Joey?",
    options: [opt("Un petardeo del coche patrulla", true), opt("Un disparo real"), opt("Una alarma antirrobo"), opt("Un neumático reventado")],
  },

  // Episodio 21 — The One with the Ball
  {
    episode: 21,
    difficulty: "easy",
    text: "¿Con qué actividad pasan el rato Ross, Joey, Monica y Chandler en este episodio?",
    options: [opt("Pasándose una pelota sin parar", true), opt("Jugando a las cartas"), opt("Viendo una maratón de películas"), opt("Montando un mueble")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿A qué accede Phoebe con reticencia en este episodio, respecto a Gary?",
    options: [opt("A irse a vivir con él", true), opt("A casarse con él"), opt("A dejar su trabajo por él"), opt("A adoptar una mascota juntos")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Por qué termina Phoebe su relación con Gary en este episodio?",
    options: [opt("Porque él dispara a un pájaro", true), opt("Porque descubre que le es infiel"), opt("Porque él no quiere convivir"), opt("Porque él deja el cuerpo de policía")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué compra Rachel en este episodio, de forma cara y algo impulsiva?",
    options: [opt("Un gato sin pelo", true), opt("Un abrigo de piel"), opt("Un anillo"), opt("Un cachorro de raza")],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿A quién termina regalando/vendiendo Rachel el gato, sacando provecho?",
    options: [opt("A Gunther", true), opt("A Phoebe"), opt("A un vecino desconocido"), opt("A Joey")],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Qué da título a este episodio?",
    options: [opt("La pelota que se pasan Ross, Joey, Monica y Chandler", true), opt("El gato sin pelo de Rachel"), opt("La ruptura de Phoebe y Gary"), opt("La mudanza de Phoebe")],
  },

  // Episodio 22 — The One with Joey's Big Break
  {
    episode: 22,
    difficulty: "easy",
    text: "¿Qué oportunidad profesional consigue Joey en este episodio?",
    options: [opt("Un papel en una película independiente en Las Vegas", true), opt("Un papel principal en una serie"), opt("Un anuncio nacional de televisión"), opt("Un papel en Broadway")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Dónde queda Joey varado tras la crítica de Chandler al proyecto?",
    options: [opt("En el puente George Washington", true), opt("En el aeropuerto"), opt("En una gasolinera"), opt("En Central Perk")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué acaba pasando con la producción de la película de Joey?",
    options: [opt("Se cancela", true), opt("Se traslada a Nueva York"), opt("Gana un premio"), opt("Se convierte en una serie")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué trabajo acepta Joey como alternativa, en Caesars Palace?",
    options: [opt("Hacer de gladiador", true), opt("Ser crupier"), opt("Cantar en un espectáculo"), opt("Ser camarero")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿A qué se resiste Rachel en este episodio, relacionado con su salud?",
    options: [opt("A usar unas gotas para los ojos recetadas", true), opt("A tomar un medicamento para dormir"), opt("A hacer reposo tras una operación"), opt("A dejar de fumar de golpe")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Quién critica el proyecto cinematográfico de Joey, provocando que este se marche enfadado?",
    options: [opt("Chandler", true), opt("Ross"), opt("Monica"), opt("Rachel")],
  },

  // Episodio 23 — The One in Vegas, Part 1
  {
    episode: 23,
    difficulty: "easy",
    text: "¿A qué ciudad viaja el grupo en este episodio doble?",
    options: [opt("Las Vegas", true), opt("Atlantic City"), opt("Los Ángeles"), opt("Miami")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Con quién se encuentra Monica en Las Vegas, generando un conflicto con Chandler?",
    options: [opt("Con Richard, su exnovio", true), opt("Con Pete, su antiguo jefe"), opt("Con Alan, un ex de ella"), opt("Con Ethan")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué oculta Monica a Chandler tras ese encuentro?",
    options: [opt("Que ha visto a Richard", true), opt("Que ha perdido dinero jugando"), opt("Que ha discutido con Rachel"), opt("Que ha llamado a sus padres")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué consecuencia tiene ese secreto sobre los planes de Monica y Chandler?",
    options: [opt("Arruina su aniversario", true), opt("Adelanta su boda"), opt("Cancela el viaje a Las Vegas"), opt("Provoca que rompan definitivamente")],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué ve Ross por la ventana en este episodio, sin querer?",
    options: [opt("A Rachel desnuda", true), opt("A Monica y Chandler discutiendo"), opt("A Joey ensayando su papel de gladiador"), opt("A Phoebe con Gary")],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué le hace Ross a Rachel mientras ella duerme, durante el vuelo a Las Vegas?",
    options: [opt("Le dibuja en la cara con un rotulador", true), opt("Le esconde el pasaporte"), opt("Le cambia el asiento"), opt("Le hace una foto vergonzosa")],
  },

  // Episodio 24 — The One in Vegas, Part 2
  {
    episode: 24,
    difficulty: "easy",
    text: "¿Qué acaban haciendo Ross y Rachel, estando muy borrachos, en Las Vegas?",
    options: [opt("Casarse en una capilla", true), opt("Perder todo su dinero apostando"), opt("Subirse a una noria durante horas"), opt("Cantar en un karaoke toda la noche")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Justo antes de qué evento importante para otra pareja ocurre la boda de Ross y Rachel?",
    options: [opt("La boda/pedida planeada de Monica y Chandler", true), opt("El cumpleaños de Joey"), opt("La graduación de Ben"), opt("La renovación de votos de los padres de Monica")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué descubre Joey sobre sí mismo en este episodio, de forma curiosa?",
    options: [opt("Que tiene un \"gemelo de mano\" (alguien con una mano idéntica a la suya)", true), opt("Que tiene un hermano gemelo"), opt("Que es primo lejano de un famoso"), opt("Que ganó una vez un concurso de dobles")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Cómo llegan Ross y Rachel al estado de ánimo que los lleva a casarse?",
    options: [opt("Muy borrachos", true), opt("Completamente sobrios, tras pensarlo mucho"), opt("Por una apuesta con Joey"), opt("Empujados por Phoebe como broma")],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿En qué tipo de local se casan Ross y Rachel en Las Vegas?",
    options: [opt("Una capilla de bodas", true), opt("Un casino"), opt("Un juzgado"), opt("Un hotel de lujo")],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Cómo se titula este episodio doble que cierra la temporada 5?",
    options: [opt("The One in Vegas", true), opt("The One with the Wedding"), opt("The One with the Ball"), opt("The One with Joey's Big Break")],
  },
];
