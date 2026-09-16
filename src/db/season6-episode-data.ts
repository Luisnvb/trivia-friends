import type { EpisodeInput } from "@/lib/dal/episodes";

/**
 * Datos de referencia (sinopsis, personajes, momentos y frases memorables)
 * de los 25 episodios de la temporada 6 de Friends, para preparar trivia.
 * Fuentes: Wikipedia ("Friends (season 6)") para sinopsis; tvquot.es,
 * IMDb "Quotes", Wikiquote y Friends Central (Fandom) para las citas.
 */
export const season6EpisodeData: EpisodeInput[] = [
  {
    season: 6,
    episode: 1,
    titleEn: "The One After Vegas",
    titleEs: "El de después de Las Vegas",
    synopsis:
      "Ross y Rachel intentan asimilar que se casaron borrachos en Las Vegas. Rachel quiere anular el matrimonio cuanto antes, mientras Ross, en secreto, no está tan seguro de querer hacerlo. Mientras tanto, Monica y Chandler deciden dar el paso de irse a vivir juntos.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Phoebe", "Joey"],
    memorableMoments: [
      "Ross y Rachel despiertan sin recordar del todo su boda en Las Vegas.",
      "Rachel insiste en que hay que anular el matrimonio de inmediato.",
      "Monica y Chandler deciden mudarse juntos.",
    ],
    memorableQuotes: [
      { character: "Rachel", quote: "Esto no es un matrimonio. ¡Es la peor resaca del mundo!" },
      { character: "Phoebe", quote: "Si te casas en Las Vegas, solo estás casado en Las Vegas." },
    ],
  },
  {
    season: 6,
    episode: 2,
    titleEn: "The One Where Ross Hugs Rachel",
    titleEs: "El del abrazo de Ross a Rachel",
    synopsis:
      "Ross confiesa que en realidad no ha podido anular el matrimonio como le había dicho a Rachel, lo que hace sospechar a Phoebe que en el fondo no quiere separarse de ella. Rachel, por su parte, tiene un mal día en el trabajo cuando su jefe la confunde continuamente con otra empleada.",
    characters: ["Ross", "Rachel", "Phoebe", "Monica", "Chandler"],
    memorableMoments: [
      "Ross admite que no ha tramitado la anulación del matrimonio.",
      "Phoebe sospecha que Ross en el fondo no quiere anular el matrimonio.",
      "Rachel se queja de que su jefe la llama 'Raquel' constantemente.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "No quiero que en mi lápida ponga 'Ross Geller: tres divorcios'.",
      },
      { character: "Rachel", quote: "Crees que por fin avanzas en el trabajo y tu jefe te llama Raquel." },
    ],
  },
  {
    season: 6,
    episode: 3,
    titleEn: "The One with Ross' Denial",
    titleEs: "El de la negación de Ross",
    synopsis:
      "Cuando Rachel necesita un sitio donde vivir, Ross le propone quedarse en su apartamento sin decirle que siguen legalmente casados, para no disgustarla más. Monica y Chandler discuten sobre cómo decorar el cuarto libre de su nuevo piso juntos, mientras Joey busca compañero de piso y solo quiere mujeres guapas.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Ross invita a Rachel a mudarse con él sin contarle que siguen casados.",
      "Monica y Chandler discuten por la decoración del cuarto libre.",
      "Joey solo quiere entrevistar a mujeres guapas como posibles compañeras de piso.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "No estoy enamorado de ella. Estaba muy disgustada por tener que mudarse, así que no le dije que seguíamos casados.",
      },
      {
        character: "Phoebe",
        quote: "El noventa por ciento de las feromonas de una mujer salen por la parte de arriba de la cabeza.",
      },
    ],
  },
  {
    season: 6,
    episode: 4,
    titleEn: "The One Where Joey Loses His Insurance",
    titleEs: "El de cuando Joey pierde el seguro médico",
    synopsis:
      "A Joey le da una hernia justo cuando se ha quedado sin seguro médico por no conseguir trabajo, así que intenta ocultar el dolor para no tener que pagar la consulta. Ross, nervioso por dar su primera clase en la universidad, se pone a hablar con un extraño acento inglés delante de sus alumnos.",
    characters: ["Joey", "Chandler", "Ross", "Monica"],
    memorableMoments: [
      "Joey sufre una hernia justo cuando se queda sin seguro médico.",
      "Ross, nervioso en su primera clase, empieza a hablar con acento inglés sin querer.",
      "Joey intenta disimular el dolor para no tener que pagar una consulta médica.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "Estaba muy nervioso y el acento simplemente... salió así.",
      },
    ],
  },
  {
    season: 6,
    episode: 5,
    titleEn: "The One with Joey's Porsche",
    titleEs: "El del Porsche de Joey",
    synopsis:
      "Joey encuentra las llaves de un Porsche en el cajón de objetos perdidos de Central Perk y empieza a hacerse pasar por su dueño para presumir ante la gente. Mientras tanto, Rachel se venga de que Ross falsificara antes los papeles de la anulación, y Phoebe hace de niñera de los trillizos de su hermano.",
    characters: ["Joey", "Monica", "Chandler", "Rachel", "Ross", "Phoebe"],
    memorableMoments: [
      "Joey encuentra unas llaves de Porsche y finge que el coche es suyo.",
      "Joey le pide a Monica un cubo y jabón para 'lavar su Porsche'.",
      "Rachel descubre que Ross falsificó antes los papeles de la anulación y se venga.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "Como la gente me sigue viendo ahí parado, van a empezar a pensar que no es mío. Así que voy a lavarlo.",
      },
    ],
  },
  {
    season: 6,
    episode: 6,
    titleEn: "The One on the Last Night",
    titleEs: "El de la última noche",
    synopsis:
      "En la última noche de Joey y Chandler como compañeros de piso antes de que Chandler se mude con Monica, Chandler intenta darle dinero a Joey a escondidas sin herir su orgullo. Monica y Rachel, por su parte, acaban discutiendo porque Rachel ha dejado todo el embalaje de la mudanza para el último momento.",
    characters: ["Chandler", "Joey", "Monica", "Rachel", "Ross", "Phoebe"],
    memorableMoments: [
      "Chandler y Joey se despiden como compañeros de piso con una última cena.",
      "Chandler intenta dejarle dinero a Joey a escondidas sin que se dé cuenta.",
      "Monica y Rachel discuten porque Rachel no ha hecho las maletas a tiempo.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote: "Bueno, esta es la última caja de tu ropa. Voy a etiquetarla como '¿En qué estabas pensando?'.",
      },
      {
        character: "Phoebe",
        quote: "En vez de pensar en cuánto os vais a echar de menos, pensad en algunas cosas que no vais a echar de menos.",
      },
    ],
  },
  {
    season: 6,
    episode: 7,
    titleEn: "The One Where Phoebe Runs",
    titleEs: "El de cuando Phoebe corre",
    synopsis:
      "Rachel se muda con Phoebe, pero le avergüenza salir a correr con ella por su forma de correr tan peculiar. Joey, mientras tanto, acoge en su casa a Janine, una bailarina que busca piso, y empieza a sentir algo por ella.",
    characters: ["Rachel", "Phoebe", "Joey", "Janine", "Ross", "Chandler"],
    memorableMoments: [
      "Rachel se avergüenza de la peculiar forma de correr de Phoebe.",
      "Joey acoge a Janine, una bailarina, como nueva compañera de piso.",
      "Ross especula sobre un futuro en el que se podrían descargar los recuerdos en un ordenador.",
    ],
    memorableQuotes: [
      {
        character: "Rachel",
        quote: "Cuando corre parece una mezcla entre la Rana Gustavo y el Hombre de los Seis Millones de Dólares.",
      },
      {
        character: "Joey",
        quote: "Tengo toda esta energía de ligar acumulada y no sé cómo deshacerme de ella.",
      },
    ],
  },
  {
    season: 6,
    episode: 8,
    titleEn: "The One with Ross's Teeth",
    titleEs: "El de los dientes de Ross",
    synopsis:
      "Ross se pasa blanqueándose los dientes antes de una cita y acaba con una sonrisa fluorescente que asusta a todo el mundo. Rachel, para justificar por qué su antiguo jefe Ralph Lauren la despidió, le cuenta a su nueva jefa una historia completamente inventada.",
    characters: ["Ross", "Phoebe", "Rachel", "Chandler"],
    memorableMoments: [
      "Ross se blanquea tanto los dientes que le brillan en la oscuridad.",
      "Phoebe se asusta al ver la sonrisa fluorescente de Ross y grita '¡Demonio!'.",
      "Rachel se inventa una historia elaborada sobre Ralph Lauren para su jefa.",
    ],
    memorableQuotes: [
      { character: "Phoebe", quote: "¡No! ¡Demonio! ¡Demonio!" },
      {
        character: "Ross",
        quote: "¿Qué me pasa a mí? Tú tienes una luz negra. ¡Estamos en 1999!",
      },
    ],
  },
  {
    season: 6,
    episode: 9,
    titleEn: "The One Where Ross Got High",
    titleEs: "El de cuando Ross se colocó",
    synopsis:
      "En una cena de Acción de Gracias, se descubre por fin por qué los padres de Ross y Monica nunca les han caído bien a los padres de Chandler: de joven, Ross fumó marihuana y culpó a Chandler para no meterse en problemas. Mientras tanto, Rachel prepara un extraño postre de Acción de Gracias que mezcla dulce y salado por error.",
    characters: ["Ross", "Monica", "Chandler", "Rachel", "Phoebe", "Joey"],
    memorableMoments: [
      "Se revela que Ross culpó a Chandler de fumar marihuana cuando eran adolescentes.",
      "Rachel prepara un postre con carne picada mezclada por error con nata y plátano.",
      "Monica confiesa a sus padres, en cadena, varios secretos familiares antiguos.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "En las vacaciones de primavera, de segundo año, me coloqué en mi cuarto y mis padres me pillaron por el olor, así que les dije que habías sido tú.",
      },
      { character: "Ross", quote: "Sabe a pies." },
    ],
  },
  {
    season: 6,
    episode: 10,
    titleEn: "The One with the Routine",
    titleEs: "El del número de baile",
    synopsis:
      "En Nochevieja, Monica y Ross deciden recuperar el número de baile que hacían juntos en el instituto para presentarlo en un programa de televisión, con resultados desastrosos. Joey, por su parte, intenta conquistar a Janine cuando el reloj marca la medianoche.",
    characters: ["Monica", "Ross", "Joey", "Janine", "Rachel", "Chandler"],
    memorableMoments: [
      "Monica y Ross ensayan su antiguo número de baile del instituto.",
      "Monica y Ross intentan colarse en un programa de baile en directo de Nochevieja.",
      "Joey intenta besar a Janine justo cuando llega la medianoche.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote: "Cuando aprendiste a bailar, ¿también se te olvidó cómo ponerte los pantalones?",
      },
    ],
  },
  {
    season: 6,
    episode: 11,
    titleEn: "The One with the Apothecary Table",
    titleEs: "El de la mesa de farmacia",
    synopsis:
      "Rachel compra una mesa de boticario en Pottery Barn pero le oculta a Phoebe, que odia los muebles en serie, que no es una antigüedad auténtica. Joey se ve en un aprieto cuando su nueva novia Janine confiesa que no le cae bien ni Monica ni Chandler.",
    characters: ["Rachel", "Phoebe", "Joey", "Janine", "Monica", "Chandler"],
    memorableMoments: [
      "Rachel le miente a Phoebe sobre el origen de su nueva mesa de boticario.",
      "Janine le confiesa a Joey que Monica y Chandler le resultan aburridos.",
      "Phoebe descubre por casualidad que la mesa es en realidad de Pottery Barn.",
    ],
    memorableQuotes: [
      {
        character: "Rachel",
        quote: "Es una mesa de boticario. ¿Alguien sabe siquiera qué es un boticario?",
      },
      {
        character: "Phoebe",
        quote: "Puaj, mira esto. Pottery Barn.",
      },
    ],
  },
  {
    season: 6,
    episode: 12,
    titleEn: "The One with the Joke",
    titleEs: "El del chiste",
    synopsis:
      "Chandler y Ross discuten sobre quién es el verdadero autor de un chiste que se publica en la revista Playboy con el nombre de Chandler. Monica, por su parte, se ofende al descubrir que Phoebe preferiría salir con Rachel antes que con ella.",
    characters: ["Chandler", "Ross", "Monica", "Phoebe", "Joey", "Rachel"],
    memorableMoments: [
      "Chandler y Ross se pelean por la autoría de un chiste publicado en Playboy.",
      "Monica se ofende al saber que Phoebe preferiría salir con Rachel.",
      "Joey intenta pagar su cuenta pendiente en Central Perk con favores.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote: "Los dos sois idiotas. El chiste no tiene gracia. Y es ofensivo para las mujeres, los médicos y los monos.",
      },
    ],
  },
  {
    season: 6,
    episode: 13,
    titleEn: "The One with Rachel's Sister",
    titleEs: "El de la hermana de Rachel",
    synopsis:
      "La hermana mimada de Rachel, Jill, aparece sin previo aviso después de que su padre le corte la paga, y Rachel intenta ayudarla a adaptarse a una vida sin dinero fácil. Joey se mete en un lío por repartir muffins gratis a los clientes de Central Perk, y Ross empieza a salir con Jill.",
    characters: ["Rachel", "Jill", "Ross", "Joey", "Monica", "Chandler"],
    memorableMoments: [
      "Jill, la hermana de Rachel, se queda sin la paga de su padre y pide ayuda.",
      "Ross empieza a salir con Jill, para incomodidad de Rachel.",
      "Joey se mete en problemas por regalar muffins gratis en la cafetería.",
    ],
    memorableQuotes: [
      { character: "Chandler", quote: "¡Vaya, con la hermana equivocada hicimos amistad!" },
      {
        character: "Rachel",
        quote: "Ya me incomoda que Ross salga con cualquiera, ¿pero con mi hermana? ¿Eso no es como un incesto o algo así?",
      },
    ],
  },
  {
    season: 6,
    episode: 14,
    titleEn: "The One Where Chandler Can't Cry",
    titleEs: "El de cuando Chandler no puede llorar",
    synopsis:
      "Chandler se da cuenta de que nunca llora, ni siquiera con películas tristes, y sus amigos intentan por todos los medios conseguir que se emocione. Mientras tanto, Rachel se siente incómoda al enterarse de que Ross ha empezado a salir con Ursula, la hermana gemela de Phoebe.",
    characters: ["Chandler", "Monica", "Joey", "Rachel", "Ross", "Ursula", "Phoebe"],
    memorableMoments: [
      "Los amigos intentan conseguir que Chandler llore viendo películas tristes.",
      "Se descubre que a Chandler ni siquiera le afecta la muerte de la madre de Bambi.",
      "Rachel se incomoda al saber que Ross sale con Ursula, la hermana de Phoebe.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Eso sí lo entendería, pero Bambi es un dibujo animado.",
      },
      {
        character: "Chandler",
        quote: "¿Llorar? ¡Si acabo de encontrar un cachorro que habla!",
      },
    ],
  },
  {
    season: 6,
    episode: 15,
    titleEn: "The One That Could Have Been (Part 1)",
    titleEs: "El de cómo podría haber sido (1ª parte)",
    synopsis:
      "El grupo imagina cómo serían sus vidas si hubieran tomado decisiones distintas: Ross sigue casado con Carol, Rachel nunca dejó a Barry en el altar, Monica sigue con sobrepeso y sin conocer a Chandler en pareja, y Joey es una estrella de éxito mientras Chandler quiere dejar su trabajo para escribir.",
    characters: ["Ross", "Rachel", "Monica", "Chandler", "Joey", "Phoebe"],
    memorableMoments: [
      "Se presenta una realidad alternativa donde Ross sigue casado con Carol.",
      "Rachel nunca dejó a Barry plantado en el altar en esta realidad alternativa.",
      "Joey es una gran estrella de cine en esta versión alternativa de sus vidas.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "Siento que tu marido te fuera infiel. Y yo siento que mi mujer sea lesbiana. Supongo que las mujeres tampoco son tan maravillosas.",
      },
    ],
  },
  {
    season: 6,
    episode: 16,
    titleEn: "The One That Could Have Been (Part 2)",
    titleEs: "El de cómo podría haber sido (2ª parte)",
    synopsis:
      "Continúa la realidad alternativa: Phoebe sigue siendo agente de bolsa, Joey trabaja de camarero mientras persigue su sueño de ser actor de verdad, y Chandler por fin se atreve a dejar su trabajo de oficina para dedicarse a la escritura, mientras el grupo sigue reuniéndose en Central Perk igualmente.",
    characters: ["Phoebe", "Joey", "Chandler", "Monica", "Ross", "Rachel"],
    memorableMoments: [
      "Phoebe sigue siendo una exitosa pero infeliz agente de bolsa en esta realidad.",
      "Chandler decide por fin dejar su trabajo de oficina para escribir.",
      "Joey insiste en que no es una 'estrella', solo un actor famoso normal.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "No soy una 'estrella'. Solo soy un actor famoso normal.",
      },
    ],
  },
  {
    season: 6,
    episode: 17,
    titleEn: "The One with Unagi",
    titleEs: "El del unagi",
    synopsis:
      "Rachel y Phoebe se apuntan a clases de defensa personal, y Ross intenta convencerlas de que él ya posee 'unagi', un estado de alerta total ante el peligro, aunque en realidad confunde el concepto con una simple anguila japonesa. Ross acaba organizando falsos ataques sorpresa para demostrar su teoría.",
    characters: ["Ross", "Rachel", "Phoebe", "Monica", "Chandler"],
    memorableMoments: [
      "Ross intenta explicar el concepto japonés de 'unagi' como alerta total.",
      "Se revela que 'unagi' en realidad significa anguila de agua dulce.",
      "Ross organiza ataques sorpresa para poner a prueba a Rachel y Phoebe.",
    ],
    memorableQuotes: [
      {
        character: "Ross",
        quote: "El unagi es un estado de total alerta. Solo alcanzando el verdadero unagi puedes estar preparado para cualquier peligro.",
      },
      {
        character: "Rachel",
        quote: "Vaya, si hubiéramos reservado, podríamos tener unagi en media hora.",
      },
    ],
  },
  {
    season: 6,
    episode: 18,
    titleEn: "The One Where Ross Dates a Student",
    titleEs: "El de cuando Ross sale con una alumna",
    synopsis:
      "Ross descubre en una evaluación anónima que una de sus alumnas de paleontología está enamorada de él, y con ayuda de Joey intenta averiguar de quién se trata, arriesgándose a que lo despidan por saltarse las normas de la universidad. Mientras tanto, un incendio obliga a Rachel y Phoebe a mudarse temporalmente.",
    characters: ["Ross", "Joey", "Rachel", "Phoebe", "Chandler", "Monica"],
    memorableMoments: [
      "Ross descubre que una alumna anónima está enamorada de él.",
      "Joey ayuda a Ross a investigar de qué alumna se trata, comparando letras.",
      "Un incendio en el edificio obliga a Rachel y Phoebe a mudarse una temporada.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Hay una chica guapa de por medio, y de repente se convierte en Rain Man.",
      },
    ],
  },
  {
    season: 6,
    episode: 19,
    titleEn: "The One with Joey's Fridge",
    titleEs: "El de la nevera de Joey",
    synopsis:
      "La nevera de Joey se estropea y él intenta por todos los medios que sus amigos le paguen una nueva, culpando incluso a Chandler de haberla roto. Rachel, por su parte, busca desesperadamente acompañante para el gran baile benéfico de Ralph Lauren.",
    characters: ["Joey", "Chandler", "Rachel", "Monica"],
    memorableMoments: [
      "Se rompe la nevera de Joey y él intenta que otros paguen una nueva.",
      "Joey usa argumentos absurdos para conseguir dinero de sus amigos.",
      "Rachel busca pareja para el baile benéfico organizado por Ralph Lauren.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "Se rompió la nevera, así que tuve que comerme todo. Fiambre, helado, limas.",
      },
    ],
  },
  {
    season: 6,
    episode: 20,
    titleEn: "The One with Mac and C.H.E.E.S.E.",
    titleEs: "El de Mac y C.H.E.E.S.E.",
    synopsis:
      "Joey hace una audición para protagonizar una serie de ciencia ficción de bajo presupuesto, 'Mac and C.H.E.E.S.E.', en la que interpreta a un detective con un compañero robot defectuoso. Joey se hace ilusiones desmedidas con el papel, aunque sus amigos dudan del proyecto desde el principio.",
    characters: ["Joey", "Rachel", "Chandler", "Phoebe"],
    memorableMoments: [
      "Joey hace una audición para la serie de ciencia ficción 'Mac and C.H.E.E.S.E.'.",
      "Joey se ilusiona pensando que la serie será su gran oportunidad.",
      "El robot C.H.E.E.S.E. falla constantemente durante los ensayos.",
    ],
    memorableQuotes: [
      {
        character: "Joey",
        quote: "Soy detective y resuelvo crímenes con la ayuda de mi compañero robot. Es un... C.H.E.E.S.E.",
      },
      {
        character: "Joey",
        quote: "Si no consigo este papel, no vuelvo a comer macarrones con queso en mi vida.",
      },
    ],
  },
  {
    season: 6,
    episode: 21,
    titleEn: "The One Where Ross Meets Elizabeth's Dad",
    titleEs: "El de cuando Ross conoce al padre de Elizabeth",
    synopsis:
      "Ross conoce al padre de su nueva novia Elizabeth, un hombre intimidante interpretado por Bruce Willis, que desconfía de él por la diferencia de edad con su hija. Rachel, por su parte, empieza a sentirse extrañamente atraída por el propio padre de Elizabeth.",
    characters: ["Ross", "Elizabeth", "Paul", "Rachel"],
    memorableMoments: [
      "Ross conoce al intimidante padre de Elizabeth, Paul.",
      "Paul deja claro que desaprueba la relación de Ross con su hija.",
      "Rachel empieza a sentirse atraída por Paul, el padre de Elizabeth.",
    ],
    memorableQuotes: [
      { character: "Paul", quote: "Entonces, Ross, ¿cuál es tu problema?" },
      { character: "Paul", quote: "Tienes un minuto." },
    ],
  },
  {
    season: 6,
    episode: 22,
    titleEn: "The One Where Paul's the Man",
    titleEs: "El de cuando Paul manda",
    synopsis:
      "Paul amenaza con conseguir que despidan a Ross de la universidad si no deja de salir con su hija Elizabeth. Mientras tanto, Chandler entra en pánico cuando Monica los apunta a una larguísima lista de espera para reservar un salón de bodas.",
    characters: ["Paul", "Ross", "Elizabeth", "Chandler", "Monica", "Joey"],
    memorableMoments: [
      "Paul amenaza con hacer que despidan a Ross si sigue viendo a Elizabeth.",
      "Chandler entra en pánico al ver la lista de espera para el salón de bodas.",
      "Joey se enfada al ver que su foto ha sido retirada de la pared de un bar.",
    ],
    memorableQuotes: [
      {
        character: "Paul",
        quote: "Llamaré a la universidad y les contaré lo vuestro, y haré que te despidan.",
      },
    ],
  },
  {
    season: 6,
    episode: 23,
    titleEn: "The One with the Ring",
    titleEs: "El del anillo",
    synopsis:
      "Chandler busca en secreto el anillo de compromiso perfecto para pedirle matrimonio a Monica, con la ayuda de Phoebe, hasta que pierde el rastro del anillo y tiene que localizar al vendedor para recuperarlo antes de que sea demasiado tarde.",
    characters: ["Chandler", "Phoebe", "Monica"],
    memorableMoments: [
      "Chandler busca en secreto el anillo perfecto para pedirle matrimonio a Monica.",
      "Chandler pierde la pista del anillo que había elegido.",
      "Phoebe ayuda a Chandler a localizar al vendedor del anillo.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "No se lo he contado a nadie más porque no quiero que Monica se entere... y porque confío en ti.",
      },
    ],
  },
  {
    season: 6,
    episode: 24,
    titleEn: "The One with the Proposal (Part 1)",
    titleEs: "El de la pedida (1ª parte)",
    synopsis:
      "Chandler lleva a Monica a un restaurante elegante para pedirle matrimonio, pero sus planes se tuercen cuando aparece Richard, el ex de Monica, cenando con una cita en el mismo local. Al verlo, Chandler pierde la confianza y no consigue llevar a cabo la pedida esa noche.",
    characters: ["Chandler", "Monica", "Richard", "Ross", "Rachel", "Phoebe", "Joey"],
    memorableMoments: [
      "Chandler lleva a Monica a un restaurante elegante con un anillo preparado.",
      "Richard aparece por sorpresa cenando en el mismo restaurante.",
      "Chandler, descolocado, no logra pedirle matrimonio a Monica esa noche.",
    ],
    memorableQuotes: [
      {
        character: "Chandler",
        quote: "Hola, soy Chandler, y hago bromas cuando estoy incómodo.",
      },
      {
        character: "Richard",
        quote: "Iba a proponerte matrimonio esta noche... sí, hasta tenía el anillo.",
      },
    ],
  },
  {
    season: 6,
    episode: 25,
    titleEn: "The One with the Proposal (Part 2)",
    titleEs: "El de la pedida (2ª parte)",
    synopsis:
      "Richard le confiesa a Monica que también pensaba pedirle matrimonio esa noche, pero ella lo rechaza porque él no quiere tener más hijos. De vuelta en casa, Monica decide proponerle matrimonio a Chandler ella misma, aunque los nervios le impiden terminar la frase, así que es finalmente Chandler quien completa la pedida.",
    characters: ["Monica", "Chandler", "Richard", "Ross", "Rachel", "Phoebe", "Joey"],
    memorableMoments: [
      "Richard le propone matrimonio a Monica, pero ella lo rechaza.",
      "Monica llena el apartamento de velas para proponerle matrimonio a Chandler.",
      "Chandler termina la pedida por Monica y ambos se prometen entre lágrimas.",
    ],
    memorableQuotes: [
      {
        character: "Monica",
        quote: "Chandler, en toda mi vida nunca pensé que tendría la suerte de enamorarme de mi mejor... mi mejor...",
      },
      {
        character: "Chandler",
        quote: "Tuviste tu oportunidad con ella y la dejaste escapar. Esta es la mía, y no pienso dejarla escapar.",
      },
    ],
  },
];
