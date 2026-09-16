/**
 * Preguntas de trivia de la Temporada 8 de Friends (24 episodios, 6 por
 * episodio = 144 preguntas). Generadas a partir de la sinopsis de Wikipedia
 * ("Friends (season 8)"), siguiendo el mismo patrón que
 * `season1-trivia-data.ts` a `season7-trivia-data.ts`. Insertadas por
 * `seed-season8.ts`.
 */

export type Season8TriviaSeed = {
  episode: number;
  difficulty: "easy" | "medium" | "hard";
  text: string;
  options: { text: string; isCorrect: boolean }[];
};

function opt(text: string, isCorrect = false) {
  return { text, isCorrect };
}

export const season8TriviaData: Season8TriviaSeed[] = [
  // Episodio 1 — The One After 'I Do'
  {
    episode: 1,
    difficulty: "easy",
    text: "Al principio de este episodio, ¿de quién sospechan todos que está embarazada, antes de descubrir que es Rachel?",
    options: [opt("De Monica", true), opt("De Phoebe"), opt("De Rachel misma, desde el principio"), opt("De la madre de Chandler")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿Qué hace Chandler para sorprender a Monica en el banquete de bodas?",
    options: [opt("Tomar clases de baile", true), opt("Preparar un brindis sorpresa"), opt("Contratar a su cantante favorito"), opt("Aprender a hacer un pastel")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "Pese a las clases de baile, ¿qué le pasa a Chandler en la pista?",
    options: [opt("Se le nota torpe e inseguro", true), opt("Baila perfectamente"), opt("Se niega a bailar al final"), opt("Se hace daño en el pie")],
  },
  {
    episode: 1,
    difficulty: "medium",
    text: "¿A quién conoce Ross en la boda y con quien empieza una relación?",
    options: [opt("A Mona", true), opt("A Elizabeth"), opt("A Charlie"), opt("A Emily")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿Qué hace Ross para terminar bailando con esa mujer en la recepción?",
    options: [opt("Cambia las tarjetas de sitio en las mesas", true), opt("Le pide el número a un camarero"), opt("La invita directamente sin rodeos"), opt("Pide ayuda a Phoebe para presentarla")],
  },
  {
    episode: 1,
    difficulty: "hard",
    text: "¿A quién intenta impresionar Joey durante la recepción de la boda?",
    options: [opt("A un director de Broadway", true), opt("A un productor de cine"), opt("A un crítico de televisión"), opt("A una agente de casting")],
  },

  // Episodio 2 — The One with the Red Sweater
  {
    episode: 2,
    difficulty: "easy",
    text: "¿Qué prenda deja olvidada el misterioso hombre con el que Rachel se acostó?",
    options: [opt("Un jersey rojo", true), opt("Una chaqueta de cuero"), opt("Una bufanda"), opt("Una gorra")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Por qué no revela Rachel todavía quién es el padre del bebé?",
    options: [opt("Quiere decírselo primero a él", true), opt("No está seguro ella misma"), opt("Se lo prometió a Phoebe"), opt("Espera a que nazca el bebé")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿A quién sospecha Phoebe que podría ser el padre del bebé de Rachel?",
    options: [opt("A Tag Jones", true), opt("A Joshua"), opt("A un compañero de trabajo de Rachel"), opt("A un amigo de Ross")],
  },
  {
    episode: 2,
    difficulty: "medium",
    text: "¿Qué organiza Phoebe para intentar confirmar esa sospecha?",
    options: [opt("Un encuentro con Tag", true), opt("Una prueba de paternidad"), opt("Una cena con todo el grupo"), opt("Una llamada anónima")],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Qué resultado tiene finalmente esa investigación sobre Tag?",
    options: [opt("Queda descartado como padre", true), opt("Se confirma que es el padre"), opt("Se niega a hacerse la prueba"), opt("Desaparece sin dar explicaciones")],
  },
  {
    episode: 2,
    difficulty: "hard",
    text: "¿Quién recupera sin darse cuenta su propio jersey rojo, ajeno a la investigación del grupo?",
    options: [opt("Ross", true), opt("Joey"), opt("Chandler"), opt("Gunther")],
  },

  // Episodio 3 — The One Where Rachel Tells...
  {
    episode: 3,
    difficulty: "easy",
    text: "¿Qué decide hacer por fin Rachel a lo largo de este episodio?",
    options: [opt("Contarle a Ross que es el padre", true), opt("Mudarse de la ciudad"), opt("Dejar su trabajo"), opt("Contárselo a sus padres")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué mentira usan Phoebe y Joey para intentar entrar al apartamento de Monica?",
    options: [opt("Que hay un escape de gas", true), opt("Que hay un incendio"), opt("Que se ha inundado"), opt("Que han visto un ladrón entrar")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Qué ocurre porque tardan en encontrar la llave de repuesto del apartamento?",
    options: [opt("Los bomberos derriban la puerta", true), opt("Rompen una ventana"), opt("Esperan horas en el pasillo"), opt("Llaman a un cerrajero")],
  },
  {
    episode: 3,
    difficulty: "medium",
    text: "¿Quiénes intentan colarse en el apartamento de Monica con esa mentira sobre el gas?",
    options: [opt("Phoebe y Joey", true), opt("Ross y Chandler"), opt("Rachel y Phoebe"), opt("Joey y Chandler")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Qué están preparando Monica y Chandler durante este episodio?",
    options: [opt("Su luna de miel", true), opt("La mudanza a una casa nueva"), opt("Una fiesta sorpresa"), opt("La decoración del cuarto del bebé")],
  },
  {
    episode: 3,
    difficulty: "hard",
    text: "¿Qué intenta hacer Rachel durante casi todo el episodio sin conseguirlo hasta el final?",
    options: [opt("Decirle a Ross que él es el padre", true), opt("Encontrar un apartamento nuevo"), opt("Hablar con su jefe sobre una baja"), opt("Convencer a Ross de mudarse con ella")],
  },

  // Episodio 4 — The One with the Videotape
  {
    episode: 4,
    difficulty: "easy",
    text: "¿Sobre qué discuten Ross y Rachel al principio de este episodio?",
    options: [opt("Sobre quién inició el encuentro que la dejó embarazada", true), opt("Sobre el nombre del bebé"), opt("Sobre dónde vivirá el bebé"), opt("Sobre si deben volver a estar juntos")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Cómo descubren finalmente la verdad sobre esa noche?",
    options: [opt("Ross grabó un vídeo sin querer", true), opt("Un vecino los vio y lo cuenta"), opt("Joey lo recuerda con detalle"), opt("Encuentran mensajes de esa noche")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Por qué estaba grabando Ross esa noche, sin saber que aparecería en el vídeo lo ocurrido después?",
    options: [opt("Practicaba un discurso", true), opt("Grababa un vídeo para el bebé"), opt("Probaba una cámara nueva"), opt("Grababa un mensaje para Carol")],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Qué frase para ligar usa Rachel en el vídeo, tomada de una historia que solía contar Joey?",
    options: [opt("La de haber ido de mochilera por Europa", true), opt("La del actor famoso al que conoció"), opt("La de ser gemela de un famoso"), opt("La de trabajar en la NASA")],
  },
  {
    episode: 4,
    difficulty: "medium",
    text: "¿Con qué pareja de recién casados conectan Monica y Chandler en su luna de miel?",
    options: [opt("Con otra pareja de recién casados", true), opt("Con los padres de un amigo"), opt("Con la tripulación del barco"), opt("Con un matrimonio ya mayor")],
  },
  {
    episode: 4,
    difficulty: "hard",
    text: "¿Cómo se deshace esa pareja de Monica y Chandler, evitando quedar con ellos de vuelta en Nueva York?",
    options: [opt("Les dan un número de teléfono falso", true), opt("Les dicen que se mudan al extranjero"), opt("Dejan de contestar sus llamadas sin más"), opt("Fingen no recordarlos")],
  },

  // Episodio 5 — The One with Rachel's Date
  {
    episode: 5,
    difficulty: "easy",
    text: "¿Con quién sale Rachel en una cita en este episodio, para disgusto de Ross?",
    options: [opt("Con el compañero de reparto de Joey en su telenovela", true), opt("Con un compañero de trabajo"), opt("Con Tag Jones"), opt("Con un amigo de Chandler")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Con quién empieza a salir Phoebe en este episodio, complicando la situación de Monica?",
    options: [opt("Con un compañero de trabajo de Monica", true), opt("Con el vecino de Monica y Chandler"), opt("Con el jefe de Chandler"), opt("Con un antiguo novio de Rachel")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Qué planea hacer Monica con ese mismo hombre, sin saber que Phoebe sale con él?",
    options: [opt("Despedirlo", true), opt("Ascenderlo"), opt("Enviarlo a otra sucursal"), opt("Ponerlo a prueba un mes más")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Cómo llama por error un compañero de trabajo a Chandler durante todo el episodio, sin que nadie lo corrija a tiempo?",
    options: [opt("\"Toby\"", true), opt("\"Charlie\""), opt("\"Bing\" a secas"), opt("\"Chad\"")],
  },
  {
    episode: 5,
    difficulty: "medium",
    text: "¿Con quién se reencuentra Ross en Central Perk en este episodio, reavivando su relación?",
    options: [opt("Con Mona", true), opt("Con Julie"), opt("Con Elizabeth"), opt("Con Carol")],
  },
  {
    episode: 5,
    difficulty: "hard",
    text: "¿Por qué le molesta tanto a Ross que Rachel tenga una cita en este episodio?",
    options: [opt("Porque está embarazada de él y le incomoda la idea", true), opt("Porque ese hombre le cae mal de antes"), opt("Porque teme que se mude con él"), opt("Porque cree que es el padre real del bebé")],
  },

  // Episodio 6 — The One with the Halloween Party
  {
    episode: 6,
    difficulty: "easy",
    text: "¿Qué tipo de fiesta organizan Monica y Chandler en este episodio?",
    options: [opt("Una fiesta de Halloween", true), opt("Una fiesta de Nochevieja"), opt("Una fiesta de bienvenida al bebé"), opt("Una fiesta de aniversario")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿A quién conoce Phoebe en esa fiesta, sintiéndose atraída por él?",
    options: [opt("A Eric, el prometido de su hermana Ursula", true), opt("A un amigo de Chandler"), opt("A un compañero de Monica"), opt("A un primo de Joey")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Sobre qué tema conectan Phoebe y Eric durante la fiesta?",
    options: [opt("Los engaños y mentiras de Ursula", true), opt("Su gusto por la música"), opt("Sus trabajos parecidos"), opt("Sus disfraces de Halloween")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿En qué compiten Ross y Chandler durante la fiesta, sin mucho éxito ninguno de los dos?",
    options: [opt("En un pulso (arm wrestling)", true), opt("En comer disfraces de comida"), opt("En un concurso de baile"), opt("En un juego de preguntas")],
  },
  {
    episode: 6,
    difficulty: "medium",
    text: "¿Qué tarea de la fiesta hace que Rachel se dé cuenta de que no es tan maternal como pensaba?",
    options: [opt("Repartir caramelos a los niños que llaman a la puerta", true), opt("Decorar la casa para los niños"), opt("Cuidar al hijo de una vecina"), opt("Organizar juegos para los invitados")],
  },
  {
    episode: 6,
    difficulty: "hard",
    text: "¿Quién es Eric, el hombre por el que se siente atraída Phoebe en esta fiesta?",
    options: [opt("El prometido de Ursula, la hermana gemela de Phoebe", true), opt("Un antiguo compañero de instituto de Phoebe"), opt("Un cliente al que da masajes"), opt("El hermano de Chandler")],
  },

  // Episodio 7 — The One with the Stain
  {
    episode: 7,
    difficulty: "easy",
    text: "¿De qué sospecha Monica a la empleada de la limpieza en este episodio?",
    options: [opt("De robarle ropa", true), opt("De robarle dinero"), opt("De romper objetos de valor"), opt("De cotillear sobre ellos")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué hace Chandler que provoca un gran malentendido con la asistenta?",
    options: [opt("Examina de cerca unos vaqueros que cree que son de Monica", true), opt("Le pide que trabaje horas extra"), opt("La acusa directamente de robar"), opt("Revisa su bolso sin permiso")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Por qué acaba renunciando la asistenta al final del episodio?",
    options: [opt("Cree que Chandler se ha comportado de forma inapropiada con ella", true), opt("Le ofrecen un trabajo mejor pagado"), opt("Se muda de ciudad"), opt("Monica la despide por error")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Por qué no quiere Eric seguir saliendo con Phoebe en este episodio?",
    options: [opt("Le recuerda demasiado a Ursula", true), opt("Vive demasiado lejos"), opt("Está muy ocupado con la boda"), opt("Cree que ella sigue enamorada de otro")],
  },
  {
    episode: 7,
    difficulty: "medium",
    text: "¿Qué intenta conseguir Ross para Rachel en este episodio?",
    options: [opt("Un apartamento, el de una vecina holandesa muy enferma", true), opt("Un trabajo mejor"), opt("Una niñera de confianza"), opt("Un médico especialista")],
  },
  {
    episode: 7,
    difficulty: "hard",
    text: "¿Quién preferiría que Rachel se quedara viviendo con él, en vez de mudarse a un apartamento propio?",
    options: [opt("Joey", true), opt("Chandler"), opt("Phoebe"), opt("Gunther")],
  },

  // Episodio 8 — The One with the Stripper
  {
    episode: 8,
    difficulty: "easy",
    text: "¿Qué le organiza Monica a Chandler en este episodio?",
    options: [opt("Una despedida de soltero tardía con una stripper", true), opt("Una fiesta sorpresa de cumpleaños"), opt("Una cena con sus antiguos compañeros"), opt("Un viaje sorpresa de fin de semana")],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Qué resulta ser en realidad la mujer contratada como stripper?",
    options: [opt("Una trabajadora sexual", true), opt("Una policía encubierta"), opt("Una antigua compañera de instituto de Chandler"), opt("Una actriz contratada por error")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿A quién intenta anunciarle Rachel su embarazo durante una cena en este episodio?",
    options: [opt("A su padre", true), opt("A su madre"), opt("A su hermana"), opt("A su jefa")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué mentira cuenta Rachel sobre Ross durante esa cena, por los nervios?",
    options: [opt("Que no la apoya en el embarazo", true), opt("Que ya no habla con ella"), opt("Que se ha mudado de ciudad"), opt("Que tiene otra novia")],
  },
  {
    episode: 8,
    difficulty: "hard",
    text: "¿Cómo reacciona el padre de Rachel, el Dr. Green, tras escuchar esa mentira?",
    options: [opt("Amenaza a Ross", true), opt("Se pone a llorar de rabia"), opt("Se niega a hablar con Rachel"), opt("Llama inmediatamente a Ross para disculparse")],
  },
  {
    episode: 8,
    difficulty: "medium",
    text: "¿Qué está a punto de dañar esa amenaza del Dr. Green a Ross?",
    options: [opt("La relación de Ross con Mona", true), opt("La amistad entre Ross y Joey"), opt("El trabajo de Ross en la universidad"), opt("La relación de Ross con Rachel")],
  },

  // Episodio 9 — The One with the Rumor
  {
    episode: 9,
    difficulty: "easy",
    text: "¿A quién invita Monica a la cena de Acción de Gracias en este episodio?",
    options: [opt("A Will, un amigo del instituto", true), opt("A un vecino nuevo"), opt("A un compañero de trabajo de Chandler"), opt("A la familia de Phoebe")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Qué rumor descubre Rachel que Ross y Will inventaron sobre ella en el instituto?",
    options: [opt("Que tenía órganos sexuales masculinos y femeninos", true), opt("Que copiaba en los exámenes"), opt("Que salía con un profesor"), opt("Que era adoptada")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Cómo ha cambiado físicamente Will desde la época del instituto?",
    options: [opt("Ha adelgazado mucho y ahora está en forma", true), opt("Ha engordado bastante"), opt("Apenas ha cambiado"), opt("Se ha quedado calvo")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué reto se propone Joey con el pavo de Acción de Gracias?",
    options: [opt("Comérselo entero él solo", true), opt("Cocinarlo sin ayuda de nadie"), opt("Esconderlo de los demás"), opt("Ganarlo en una apuesta")],
  },
  {
    episode: 9,
    difficulty: "hard",
    text: "¿Por qué se propone Joey ese reto con el pavo?",
    options: [opt("Por una especie de honor o tradición familiar", true), opt("Por una apuesta con Chandler"), opt("Porque Monica lo reta a hacerlo"), opt("Porque tiene mucha hambre sin más")],
  },
  {
    episode: 9,
    difficulty: "medium",
    text: "¿Qué hacen Chandler y Phoebe para librarse de ayudar con la cena de Acción de Gracias?",
    options: [opt("Ver un partido en la televisión", true), opt("Fingir que están enfermos"), opt("Irse a comprar algo que falta"), opt("Encerrarse a jugar a las cartas")],
  },

  // Episodio 10 — The One with Monica's Boots
  {
    episode: 10,
    difficulty: "easy",
    text: "¿Qué compra Monica en este episodio que Chandler desaprueba por el precio?",
    options: [opt("Unas botas caras", true), opt("Un abrigo de diseño"), opt("Un bolso de lujo"), opt("Una joya cara")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Qué promete Monica sobre esas botas para justificar el gasto ante Chandler?",
    options: [opt("Que las llevará puestas constantemente", true), opt("Que las devolverá si no le gustan"), opt("Que se las regalará a su madre"), opt("Que las pagará ella sola con su sueldo")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué esconde Monica sobre esas botas a medida que avanza el episodio?",
    options: [opt("Que le hacen mucho daño", true), opt("Que las compró de segunda mano"), opt("Que son en realidad de otra persona"), opt("Que las ha perdido")],
  },
  {
    episode: 10,
    difficulty: "medium",
    text: "¿Quién busca el consejo de Rachel sobre el embarazo en este episodio?",
    options: [opt("Deena, la hermana pequeña de Joey", true), opt("Una compañera de trabajo de Rachel"), opt("La madre de Phoebe"), opt("Una vecina del edificio")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿De quién se hace pasar Phoebe para intentar conseguir entradas de un concierto?",
    options: [opt("De la madre de Ben", true), opt("De una periodista musical"), opt("De la manager de la banda"), opt("De una antigua compañera del cantante")],
  },
  {
    episode: 10,
    difficulty: "hard",
    text: "¿Qué conexión usa Phoebe para intentar conseguir esas entradas de Sting?",
    options: [opt("Que el hijo de Sting va a la misma clase que Ben", true), opt("Que conoce personalmente al mánager"), opt("Que trabajó una vez para él"), opt("Que es vecina de la familia de Sting")],
  },

  // Episodio 11 — The One with Ross's Step Forward
  {
    episode: 11,
    difficulty: "easy",
    text: "¿Qué quiere hacer Mona en este episodio que incomoda mucho a Ross?",
    options: [opt("Mandar tarjetas de Navidad juntos como pareja", true), opt("Presentarle a sus padres"), opt("Irse a vivir juntos"), opt("Hacer un viaje en pareja")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué otra conversación quiere tener Mona con Ross, que también lo incomoda?",
    options: [opt("Formalizar y hablar en serio sobre la relación", true), opt("Hablar de tener hijos juntos"), opt("Hablar de mudarse a otra ciudad"), opt("Hablar de conocer a Rachel")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿A quién evita pasar tiempo con Chandler durante este episodio?",
    options: [opt("A su jefe", true), opt("A su suegra"), opt("A un antiguo compañero de instituto"), opt("A un vecino molesto")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Qué efecto secundario del embarazo experimenta Rachel en este episodio?",
    options: [opt("Un notable aumento del deseo sexual por las hormonas", true), opt("Antojos de comida muy raros"), opt("Cambios de humor extremos"), opt("Insomnio constante")],
  },
  {
    episode: 11,
    difficulty: "hard",
    text: "¿Con quién compara Phoebe, en broma, la intensidad de Rachel en ese momento?",
    options: [opt("Con el boxeador Evander Holyfield", true), opt("Con una estrella del pop"), opt("Con un personaje de telenovela"), opt("Con Marcel, el mono de Ross")],
  },
  {
    episode: 11,
    difficulty: "medium",
    text: "¿Qué representa para Ross \"dar un paso adelante\" en su relación con Mona, que da título al episodio?",
    options: [opt("Comprometerse más formalmente con ella", true), opt("Pedirle que se mude con él"), opt("Presentarle oficialmente al bebé"), opt("Proponerle matrimonio")],
  },

  // Episodio 12 — The One Where Joey Dates Rachel
  {
    episode: 12,
    difficulty: "easy",
    text: "¿Por qué está deprimida Rachel al principio de este episodio?",
    options: [opt("Porque no puede salir con nadie estando embarazada", true), opt("Porque discute con Ross"), opt("Porque no encuentra apartamento"), opt("Porque tiene problemas en el trabajo")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Quién anima a Rachel invitándola a salir, sin que sea al principio una cita romántica?",
    options: [opt("Joey", true), opt("Chandler"), opt("Ross"), opt("Gunther")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué empieza a sentir Joey durante esa salida con Rachel, algo que le asusta a él mismo?",
    options: [opt("Sentimientos románticos por ella", true), opt("Muchos celos de Ross"), opt("Ganas de mudarse lejos"), opt("Rechazo hacia el embarazo de Rachel")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Qué regalo de bodas, entregado con retraso, le da Phoebe a Monica y Chandler?",
    options: [opt("Una máquina arcade de Ms. Pac-Man", true), opt("Un juego de vajilla"), opt("Un viaje de fin de semana"), opt("Un cuadro pintado por ella")],
  },
  {
    episode: 12,
    difficulty: "hard",
    text: "¿Qué hace Chandler con sus iniciales en esa máquina arcade, para preocupación de Monica?",
    options: [opt("Pone una palabrota", true), opt("Pone el nombre de un ex"), opt("Pone un insulto hacia Ross"), opt("No pone nada, deja el récord anónimo")],
  },
  {
    episode: 12,
    difficulty: "medium",
    text: "¿Con qué tiene problemas Ross en este episodio, relacionado con su nueva clase en la universidad?",
    options: [opt("Con llegar puntual", true), opt("Con recordar los nombres de los alumnos"), opt("Con el temario del curso"), opt("Con un alumno conflictivo")],
  },

  // Episodio 13 — The One Where Chandler Takes a Bath
  {
    episode: 13,
    difficulty: "easy",
    text: "¿A qué se vuelve adicto Chandler en este episodio, tras resistirse al principio?",
    options: [opt("A los baños de espuma", true), opt("A un videojuego"), opt("Al café con leche"), opt("A las telenovelas de Joey")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Quién convence a Chandler de probar esos baños de espuma?",
    options: [opt("Monica", true), opt("Joey"), opt("Phoebe"), opt("Ross")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Qué cree Phoebe erróneamente sobre los sentimientos de Joey en este episodio?",
    options: [opt("Que está enamorado de ella", true), opt("Que está enamorado de Monica"), opt("Que quiere dejar la actuación"), opt("Que quiere mudarse de la ciudad")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿De quién está en realidad enamorado Joey, como descubre después Phoebe?",
    options: [opt("De Rachel", true), opt("De Monica"), opt("De una compañera de reparto"), opt("De la propia Phoebe, al final")],
  },
  {
    episode: 13,
    difficulty: "medium",
    text: "¿Qué averiguan Ross y Rachel sobre el bebé en este episodio?",
    options: [opt("El sexo del bebé", true), opt("El peso aproximado"), opt("La fecha exacta del parto"), opt("Que serán mellizos")],
  },
  {
    episode: 13,
    difficulty: "hard",
    text: "¿Sobre qué más discuten Ross y Rachel en este episodio, relacionado con el bebé?",
    options: [opt("Posibles nombres para el bebé", true), opt("En qué hospital dar a luz"), opt("Quién pagará los gastos médicos"), opt("Si el bebé se apellidará Geller o Green")],
  },

  // Episodio 14 — The One with the Secret Closet
  {
    episode: 14,
    difficulty: "easy",
    text: "¿Qué le obsesiona descubrir a Chandler en este episodio?",
    options: [opt("Qué esconde Monica en un armario cerrado con llave", true), opt("El regalo de cumpleaños de Monica"), opt("Una carta antigua de Monica"), opt("El precio real de la casa que quieren comprar")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Por qué se siente traicionada Phoebe en este episodio?",
    options: [opt("Descubre que Monica usa a otra masajista", true), opt("Descubre que no la invitaron a una cena"), opt("Descubre que Monica le oculta su embarazo a ella"), opt("Descubre que Joey también da masajes ahora")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Por qué se siente excluido Ross en este episodio?",
    options: [opt("Se pierde la primera patada del bebé", true), opt("No lo invitan a una cita médica"), opt("Rachel no le cuenta el sexo del bebé"), opt("No lo dejan elegir el nombre")],
  },
  {
    episode: 14,
    difficulty: "hard",
    text: "¿Con quién confunden a alguien como si fuera el padre del bebé, incomodando a Ross?",
    options: [opt("Con Joey", true), opt("Con Chandler"), opt("Con un médico del hospital"), opt("Con Gunther")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Qué sugiere Joey, sintiéndose culpable, sobre dónde debería vivir Rachel?",
    options: [opt("Que se mude a vivir con Ross", true), opt("Que se mude con Monica y Chandler"), opt("Que busque su propio apartamento"), opt("Que se quede con Phoebe")],
  },
  {
    episode: 14,
    difficulty: "medium",
    text: "¿Por qué le cuesta tanto a Joey hacer esa sugerencia sobre Rachel?",
    options: [opt("Porque en el fondo prefiere que ella siga viviendo con él", true), opt("Porque no se lleva bien con Ross"), opt("Porque teme quedarse solo pagando el alquiler"), opt("Porque cree que Ross no cuidará bien de ella")],
  },

  // Episodio 15 — The One with the Birthing Video
  {
    episode: 15,
    difficulty: "easy",
    text: "¿Qué regalo le da Phoebe a Rachel en este episodio?",
    options: [opt("Un vídeo sobre el parto", true), opt("Un libro sobre crianza"), opt("Una cuna de segunda mano"), opt("Un álbum de fotos")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué cree Chandler al principio que es ese vídeo?",
    options: [opt("Una película para adultos", true), opt("Un documental sobre animales"), opt("Una película de terror"), opt("Un vídeo de una boda")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿Qué provoca ver ese vídeo por error en la noche de San Valentín de Monica y Chandler?",
    options: [opt("Les arruina por completo el ambiente romántico", true), opt("Les da ideas para el futuro"), opt("Les hace reír toda la noche"), opt("No afecta nada a su noche")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Por qué rompe Mona con Ross en este episodio?",
    options: [opt("Por no haberle contado que Rachel se mudó con él", true), opt("Porque conoce a otra persona"), opt("Porque se muda a otra ciudad"), opt("Porque Ross cancela una cita importante")],
  },
  {
    episode: 15,
    difficulty: "hard",
    text: "¿Qué le presta Phoebe a Joey para animarlo, con un efecto inesperado?",
    options: [opt("Un perro, que acaba contagiándose de su depresión", true), opt("Un gato muy exigente"), opt("Su propio apartamento por unos días"), opt("Dinero para salir de fiesta")],
  },
  {
    episode: 15,
    difficulty: "medium",
    text: "¿A quién le confiesa finalmente Joey sus sentimientos por Rachel en este episodio?",
    options: [opt("A Ross", true), opt("A Chandler"), opt("A Monica"), opt("A la propia Rachel")],
  },

  // Episodio 16 — The One Where Joey Tells Rachel
  {
    episode: 16,
    difficulty: "easy",
    text: "¿Qué le confiesa finalmente Joey a Rachel en este episodio?",
    options: [opt("Que está enamorado de ella", true), opt("Que se muda de la ciudad"), opt("Que ha aceptado un papel importante"), opt("Que Ross le cae mal")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Cómo reacciona Rachel ante esa confesión de Joey?",
    options: [opt("Lo rechaza con delicadeza", true), opt("Le dice que necesita pensarlo"), opt("Se enfada mucho con él"), opt("Le confiesa que siente lo mismo")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿Cómo reacciona Ross al principio, al enterarse de los sentimientos de Joey por Rachel?",
    options: [opt("Evita hablar con él", true), opt("Se alegra por su amigo"), opt("Se lo cuenta enseguida a Rachel"), opt("Se pelea físicamente con él")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿Quién termina convenciendo a Joey de que le confiese sus sentimientos a Rachel?",
    options: [opt("Ross", true), opt("Chandler"), opt("Monica"), opt("Phoebe")],
  },
  {
    episode: 16,
    difficulty: "hard",
    text: "¿De quién está convencida Phoebe en este episodio de que es el alma gemela de Monica?",
    options: [opt("De un hombre inglés llamado Don", true), opt("De un compañero de trabajo de Monica"), opt("De un antiguo novio de Monica"), opt("De Joey")],
  },
  {
    episode: 16,
    difficulty: "medium",
    text: "¿De qué nacionalidad es ese hombre que Phoebe cree destinado a estar con Monica?",
    options: [opt("Británico/inglés", true), opt("Francés"), opt("Italiano"), opt("Australiano")],
  },

  // Episodio 17 — The One with the Tea Leaves
  {
    episode: 17,
    difficulty: "easy",
    text: "¿Qué usa Phoebe para predecir que va a conocer a su pareja ideal?",
    options: [opt("Hojas de té", true), opt("Cartas del tarot"), opt("Un horóscopo"), opt("Una bola de cristal")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Cómo resulta ser la primera cita a la que la lleva esa predicción?",
    options: [opt("Desastrosa e incómoda", true), opt("Sorprendentemente perfecta"), opt("Aburrida pero agradable"), opt("Cancelada a última hora")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿Dónde tiene finalmente Phoebe un encuentro agradable relacionado con esa predicción?",
    options: [opt("En la tintorería", true), opt("En el supermercado"), opt("En Central Perk"), opt("En el ascensor de su edificio")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué inventa Rachel en este episodio para reducir la incomodidad con Joey tras su confesión?",
    options: [opt("Una crisis falsa en el trabajo", true), opt("Un viaje urgente"), opt("Una cita médica inventada"), opt("Una discusión falsa con Ross")],
  },
  {
    episode: 17,
    difficulty: "hard",
    text: "¿Qué prenda intenta recuperar Ross del apartamento de Mona en este episodio?",
    options: [opt("Una camisa de color salmón, ya descolorida", true), opt("Una chaqueta de su padre"), opt("Un jersey que le regaló Rachel"), opt("Una corbata de su boda")],
  },
  {
    episode: 17,
    difficulty: "medium",
    text: "¿En qué actividad doméstica pasan un buen rato juntos Monica y Chandler en este episodio?",
    options: [opt("Organizando sus discos (CDs)", true), opt("Pintando el apartamento"), opt("Cocinando para el grupo"), opt("Montando muebles nuevos")],
  },

  // Episodio 18 — The One in Massapequa
  {
    episode: 18,
    difficulty: "easy",
    text: "¿Qué celebran los padres de Monica en este episodio?",
    options: [opt("Su 35 aniversario de bodas", true), opt("Su jubilación"), opt("El cumpleaños de Jack Geller"), opt("La compra de una casa nueva")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Qué le sale mal a Monica durante esa fiesta de aniversario?",
    options: [opt("El discurso que había preparado", true), opt("La comida que cocina"), opt("La lista de invitados"), opt("El regalo que compra")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Cómo es Parker, el nuevo novio de Phoebe en este episodio?",
    options: [opt("Exageradamente entusiasta y positivo con todo", true), opt("Muy callado y tímido"), opt("Bastante grosero"), opt("Extremadamente celoso")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué efecto acaba teniendo Parker en el grupo, incluida la propia Phoebe?",
    options: [opt("Termina irritando a todos, incluida ella", true), opt("Se hace muy popular entre todos"), opt("Consigue caerle mal solo a Ross"), opt("Nadie nota nada extraño en él")],
  },
  {
    episode: 18,
    difficulty: "hard",
    text: "¿Qué fingen ser Ross y Rachel durante la fiesta de los padres de Monica?",
    options: [opt("Que están casados", true), opt("Que ya han elegido nombre para el bebé"), opt("Que van a vivir juntos"), opt("Que son solo amigos sin ninguna historia")],
  },
  {
    episode: 18,
    difficulty: "medium",
    text: "¿Qué hace que resurjan los sentimientos de Rachel hacia Ross durante esa fiesta?",
    options: [opt("El brindis o discurso que da Ross", true), opt("Un baile improvisado"), opt("Una foto antigua de los dos"), opt("Un comentario de la madre de Ross")],
  },

  // Episodio 19 — The One with Joey's Interview
  {
    episode: 19,
    difficulty: "easy",
    text: "¿Para qué se prepara Joey durante todo este episodio?",
    options: [opt("Una entrevista para una revista de telenovelas", true), opt("Una audición para una película"), opt("Un examen para renovar su carné"), opt("Una entrevista de trabajo como camarero")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué teme Joey que pueda pasar durante esa entrevista?",
    options: [opt("Decir algo que perjudique su carrera", true), opt("Que se rían de él en directo"), opt("Que le pregunten por su vida privada"), opt("Quedarse sin nada que decir")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Quiénes ayudan a Joey a prepararse para esa entrevista?",
    options: [opt("Sus amigos del grupo", true), opt("Su representante"), opt("Un coach de medios contratado"), opt("Nadie, se prepara solo")],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Qué tipo de episodio es este, con abundantes escenas retrospectivas de temporadas anteriores?",
    options: [opt("Un episodio recopilatorio (\"clip show\")", true), opt("Un episodio ambientado en el pasado"), opt("Un episodio musical"), opt("Un episodio sin diálogos")],
  },
  {
    episode: 19,
    difficulty: "hard",
    text: "¿Para qué publicación es la entrevista que va a hacerle a Joey?",
    options: [opt("Soap Opera Digest", true), opt("TV Guide"), opt("Entertainment Weekly"), opt("Rolling Stone")],
  },
  {
    episode: 19,
    difficulty: "medium",
    text: "¿Qué actitud muestra Joey mientras se prepara para la entrevista, por los nervios?",
    options: [opt("Ansiedad e inseguridad sobre sus respuestas", true), opt("Exceso de confianza"), opt("Indiferencia total"), opt("Enfado con sus amigos")],
  },

  // Episodio 20 — The One with the Baby Shower
  {
    episode: 20,
    difficulty: "easy",
    text: "¿Qué organizan Phoebe y Monica para Rachel en este episodio?",
    options: [opt("Una fiesta de bienvenida al bebé (baby shower)", true), opt("Una despedida de soltera"), opt("Una fiesta sorpresa de cumpleaños"), opt("Una fiesta de bienvenida al apartamento nuevo")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿A quién olvidan invitar a esa fiesta por error?",
    options: [opt("A Sandra, la madre de Rachel", true), opt("Al padre de Rachel"), opt("A Mona"), opt("A la madre de Ross")],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué intenta conseguir Monica de Sandra tras ese olvido, sin éxito?",
    options: [opt("Su perdón", true), opt("Que pague parte de la fiesta"), opt("Que vuelva a la fiesta esa misma tarde"), opt("Una disculpa de vuelta")],
  },
  {
    episode: 20,
    difficulty: "hard",
    text: "¿Qué insiste en hacer Sandra tras el nacimiento del bebé, disgustando a Rachel y Ross?",
    options: [opt("Quedarse ocho semanas ayudando en casa", true), opt("Elegir ella el nombre del bebé"), opt("Mudarse definitivamente cerca de ellos"), opt("Contratar una niñera sin consultarlo")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿A qué concurso de televisión se presenta Joey en este episodio?",
    options: [opt("Bamboozled", true), opt("Wheel of Fortune"), opt("Jeopardy!"), opt("The Price Is Right")],
  },
  {
    episode: 20,
    difficulty: "medium",
    text: "¿Quiénes ayudan a Joey a prepararse para ese concurso?",
    options: [opt("Chandler y Ross", true), opt("Monica y Phoebe"), opt("Rachel y Chandler"), opt("Solo Ross")],
  },

  // Episodio 21 — The One with the Cooking Class
  {
    episode: 21,
    difficulty: "easy",
    text: "¿Qué recibe Monica en este episodio que la deja devastada?",
    options: [opt("Una crítica muy negativa sobre su cocina", true), opt("Un rechazo de un restaurante importante"), opt("Una mala nota en un curso"), opt("Una queja formal de un cliente")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué hace Monica para intentar mejorar tras recibir esa crítica?",
    options: [opt("Apuntarse a una clase de cocina", true), opt("Contratar a un chef privado"), opt("Dejar de cocinar profesionalmente"), opt("Cambiar todo su menú")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Quién acompaña a Monica a esa clase de cocina?",
    options: [opt("Joey", true), opt("Chandler"), opt("Rachel"), opt("Phoebe")],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Por qué se pone celosa Rachel en este episodio?",
    options: [opt("Porque Ross conoce a una mujer coqueta en una tienda de bebés", true), opt("Porque Ross sale con Mona de nuevo"), opt("Porque Ross pasa más tiempo con Joey"), opt("Porque Ross elige él solo el nombre del bebé")],
  },
  {
    episode: 21,
    difficulty: "hard",
    text: "¿Para qué está ayudando Phoebe a prepararse a Chandler en este episodio?",
    options: [opt("Para entrevistas de trabajo", true), opt("Para su próximo aniversario"), opt("Para hablar en público en la boda de un amigo"), opt("Para una reunión con el casero")],
  },
  {
    episode: 21,
    difficulty: "medium",
    text: "¿Qué intenta contener Phoebe en Chandler durante esa preparación?",
    options: [opt("Sus bromas y comentarios inapropiados", true), opt("Su tendencia a llegar tarde"), opt("Sus nervios excesivos"), opt("Su falta de contacto visual")],
  },

  // Episodio 22 — The One Where Rachel Is Late
  {
    episode: 22,
    difficulty: "easy",
    text: "¿Por qué está tan frustrada Rachel en este episodio?",
    options: [opt("Lleva ocho días de retraso respecto a la fecha prevista del parto", true), opt("No encuentra ropa premamá que le guste"), opt("Discute constantemente con Ross"), opt("No consigue que Ross elija nombre")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué prueba Rachel para intentar inducir el parto en este episodio?",
    options: [opt("Varios métodos, incluido tener relaciones con Ross", true), opt("Comida muy picante"), opt("Largas caminatas por la ciudad"), opt("Remedios caseros de Phoebe")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué hacen Monica y Phoebe respecto a la fecha del parto en este episodio?",
    options: [opt("Hacer apuestas sobre cuándo nacerá el bebé", true), opt("Organizar turnos para acompañar a Rachel"), opt("Preparar la maleta del hospital"), opt("Llamar cada hora al médico")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿A qué evento invita Joey a Chandler en este episodio?",
    options: [opt("Al estreno de su película", true), opt("A la grabación de un anuncio"), opt("A una gala de premios"), opt("A una fiesta de otro actor")],
  },
  {
    episode: 22,
    difficulty: "hard",
    text: "¿Qué le pasa a Chandler durante ese estreno de la película de Joey?",
    options: [opt("Se queda dormido", true), opt("Se ríe en el momento equivocado"), opt("Llega demasiado tarde"), opt("Se marcha antes de que termine")],
  },
  {
    episode: 22,
    difficulty: "medium",
    text: "¿Qué ocurre justo al final de este episodio?",
    options: [opt("A Rachel se le rompe aguas y entra en trabajo de parto", true), opt("Rachel decide adelantar la cesárea"), opt("El médico anuncia que el parto se retrasará más"), opt("Rachel se desmaya del cansancio")],
  },

  // Episodio 23 — The One Where Rachel Has a Baby (Parte 1)
  {
    episode: 23,
    difficulty: "easy",
    text: "¿A dónde corren Ross y Rachel al principio de este episodio doble?",
    options: [opt("Al hospital", true), opt("A casa de los padres de Rachel"), opt("A la consulta de su médico habitual"), opt("Al apartamento de Monica")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Qué le da la madre de Ross a su hijo mientras esperan en el hospital?",
    options: [opt("Un anillo de compromiso de familia", true), opt("Una carta escrita para el bebé"), opt("Dinero para los gastos del hospital"), opt("Una foto antigua de Ross de bebé")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Para qué anima la madre de Ross a su hijo a usar ese anillo?",
    options: [opt("Para pedirle matrimonio a Rachel", true), opt("Para regalárselo al bebé de mayor"), opt("Para dárselo a Monica en su aniversario"), opt("Para venderlo y pagar el hospital")],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué hace Ross con el anillo en vez de usarlo enseguida?",
    options: [opt("Duda y lo deja olvidado en la habitación de Rachel", true), opt("Se lo entrega a Joey para que lo guarde"), opt("Lo esconde en su chaqueta y no lo saca en todo el episodio"), opt("Se lo devuelve a su madre de inmediato")],
  },
  {
    episode: 23,
    difficulty: "hard",
    text: "¿Qué deciden hacer Monica y Chandler en el hospital, contagiados por el ambiente?",
    options: [opt("Intentar tener hijos ellos también", true), opt("Adelantar la fecha de mudanza"), opt("Pedir ellos también cita con el mismo médico"), opt("Organizar una fiesta sorpresa para Ross y Rachel")],
  },
  {
    episode: 23,
    difficulty: "medium",
    text: "¿Dónde tienen Monica y Chandler un encuentro íntimo dentro del hospital?",
    options: [opt("En un armario o cuarto de la limpieza", true), opt("En la cafetería, tras cerrar"), opt("En el coche, en el aparcamiento"), opt("En una sala de espera vacía")],
  },

  // Episodio 24 — The One Where Rachel Has a Baby (Parte 2)
  {
    episode: 24,
    difficulty: "easy",
    text: "¿Cómo se llama la hija que tienen Ross y Rachel en este episodio?",
    options: [opt("Emma", true), opt("Ella"), opt("Emily"), opt("Erica")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Cuánto dura, según se menciona en el episodio, el parto de Rachel?",
    options: [opt("21 horas", true), opt("6 horas"), opt("2 días completos"), opt("45 minutos")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿A qué otro personaje conocido también le toca dar a luz esa misma noche en el hospital?",
    options: [opt("A Janice", true), opt("A Mona"), opt("A Phoebe"), opt("A una compañera de trabajo de Ross")],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Qué tipo de comentarios de Janice ponen nerviosa a Rachel sobre su relación con Ross?",
    options: [opt("Dudas sobre si Ross está realmente comprometido con ella", true), opt("Que Ross todavía quiere a Carol"), opt("Que Ross ha estado saliendo con otras mujeres"), opt("Que Ross no quiere en realidad tener el bebé")],
  },
  {
    episode: 24,
    difficulty: "hard",
    text: "¿Cómo acaba cayendo al suelo el anillo de compromiso de Ross, en una escena con Joey?",
    options: [opt("Se le cae del bolsillo o la chaqueta mientras consuela a Rachel", true), opt("Rachel lo tira sin querer al levantarse"), opt("Se le cae a la madre de Ross al dárselo de nuevo"), opt("Lo deja caer Chandler al llevarlo a otra habitación")],
  },
  {
    episode: 24,
    difficulty: "medium",
    text: "¿Qué malentendido provoca que Rachel acepte \"casarse\" con Joey al final del episodio?",
    options: [opt("Cree que Joey se le está declarando al recoger el anillo del suelo", true), opt("Joey le pide matrimonio en serio, sin malentendido"), opt("Rachel confunde a Joey con Ross en ese momento"), opt("Joey le hace la pregunta como una broma que ella no capta")],
  },
];
