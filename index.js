
//Botones
let letras = document.querySelectorAll('.letter');
let roscoContainer = document.getElementById('rosco_container');
let welcome = document.getElementById('welcome');
let scoresArea = document.getElementById('scores');
let startButton = document.getElementById('start_button');
let userInputs = document.getElementById('userInputs');
let initButton = document.getElementById('init');
let responder = document.getElementById('responder');
let pasapalabra = document.getElementById('pasapalabra');
let stop = document.getElementById('stop');
let currentQuestion = document.getElementById('currentQuestion');
let viewRanking = document.getElementById('viewRanking');
let rankingJugadores = document.getElementById('rankingJugadores');
let numAciertos = document.getElementById('numAciertos');
let tiempoRestante = document.getElementById('time_left');
let resultadoJugada = document.getElementById('resultadoJugada');
let answerArea = document.getElementById('answerArea')
let playAgain = document.getElementById('playAgain');

//LETRAS

let letterA = document.getElementById('A');
let letterB = document.getElementById('B');
let letterC = document.getElementById('C');
let letterD = document.getElementById('D');
let letterE = document.getElementById('E');
let letterF = document.getElementById('F');
let letterG = document.getElementById('G');
let letterH = document.getElementById('H');
let letterI = document.getElementById('I');
let letterJ = document.getElementById('J');
let letterK = document.getElementById('K');
let letterL = document.getElementById('L');
let letterM = document.getElementById('M');
let letterN = document.getElementById('N');
let letterÑ = document.getElementById('Ñ');
let letterO = document.getElementById('O');
let letterP = document.getElementById('P');
let letterQ = document.getElementById('Q');
let letterR = document.getElementById('R');
let letterS = document.getElementById('S');
let letterT = document.getElementById('T');
let letterU = document.getElementById('U');
let letterV = document.getElementById('V');
let letterW = document.getElementById('W');
let letterX = document.getElementById('X');
let letterY = document.getElementById('Y');
let letterZ = document.getElementById('Z');

//LOGIN
let user = document.getElementById('user');

//SONIDOS
let aciertoSound = document.getElementById('aciertoSound');
let errorSound = document.getElementById('errorSound');
let pasapalabraSound = document.getElementById('pasapalabraSound');
let boteSound = document.getElementById('bote');
let finSound = document.getElementById('finSound');

function playSound(elem) {
    elem.play();
}

multiplesQuestions = [
    [
        { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
        { letter: "a", answer: "aparecer", status: 0, question: "CON LA A. Manifestarse, dejarse ver, por lo común, causando sorpresa, admiración u otro movimiento del ánimo" },
        { letter: "a", answer: "anglosajon", status: 0, question: "CON LA A. Dicho de una persona: De procedencia y lengua inglesas" },
        { letter: "a", answer: "aroma", status: 0, question: "CON LA A. Perfume, olor muy agradable" },
        { letter: "a", answer: "acera", status: 0, question: "CON LA A. Orilla de la calle o de otra vía pública" },
    ],
    [
        { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
        { letter: "b", answer: "bar", status: 0, question: "CON LA B. Lugar donde pasan horas los universitarios" },
        { letter: "b", answer: "baraja", status: 0, question: "CON LA B. Conjunto completo de cartas empleado para juegos de azar" },
        { letter: "b", answer: "beato", status: 0, question: "CON LA B. Dicho de una persona: Beatificada por el papa" },
        { letter: "b", answer: "buhardilla", status: 0, question: "CON LA B. Parte de un edificio situada inmediatamente debajo del tejado, con techo en pendiente y destinada a vivienda" },
    ],
    [
        { letter: 'c', answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé" },
        { letter: 'c', answer: "cartabon", status: 0, question: "CON LA C. Plantilla de madera, plástico u otro material, en forma de triángulo rectángulo escaleno, que se utiliza en dibujo" },
        { letter: 'c', answer: "ceja", status: 0, question: "CON LA C. Parte de la cara, prominente, curvilínea y cubierta de pelo, situada sobre la cuenca del ojo" },
        { letter: 'c', answer: "cian", status: 0, question: "CON LA C. Dicho de un color: Azul verdoso, complementario del rojo" },
        { letter: 'c', answer: "corona", status: 0, question: "CON LA C. Aro, hecho de flores, de ramas o de metal, que ciñe la cabeza y se usa como adorno, insignia honorífica o símbolo de dignidad o realeza" },
    ],
    [
        { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
        { letter: "d", answer: "dragon", status: 0, question: "CON LA D. Criatura fantástica sobre la que volaba Daenerys Targaryen" },
        { letter: "d", answer: "dibujo", status: 0, question: "CON LA D.  Delineación o imagen dibujada" },
        { letter: "d", answer: "dedal", status: 0, question: "CON LA D. Utensilio pequeño, ligeramente cónico y hueco, con la superficie llena de hoyuelos y cerrado a veces por un casquete esférico para proteger el dedo al coser" },
        { letter: "d", answer: "duda", status: 0, question: "CON LA D. Suspensión o indeterminación del ánimo entre dos juicios o dos decisiones, o bien acerca de un hecho o una noticia" },
    ],
    [
        { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
        { letter: "e", answer: "estornudar", status: 0, question: "CON LA E. Despedir o arrojar con violencia el aire de los pulmones, por la espiración involuntaria y repentina promovida por un estímulo que actúa sobre la membrana pituitaria" },
        { letter: "e", answer: "entrada", status: 0, question: "CON LA E. Espacio por donde se entra a alguna parte" },
        { letter: "e", answer: "emanacion", status: 0, question: "CON LA E. Acción y efecto de emanar" },
        { letter: "e", answer: "embalsamador", status: 0, question: "CON LA E. adj. Que embalsama" },
    ],
    [
        { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
        { letter: "f", answer: "fosil", status: 0, question: "CON LA F. Dicho de una sustancia de origen orgánico o de un resto de organismo: Que está más o menos petrificado" },
        { letter: "f", answer: "fiebre", status: 0, question: "CON LA F. Fenómeno patológico que se manifiesta por elevación de la temperatura normal del cuerpo y mayor frecuencia del pulso y la respiración" },
        { letter: "f", answer: "faba", status: 0, question: "CON LA F. Fruto y semilla de la judía" },
        { letter: "f", answer: "fobia", status: 0, question: "CON LA F. Aversión exagerada a alguien o a algo" },
    ],
    [
        { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
        { letter: "g", answer: "gota", status: 0, question: "CON LA G. Pequeña porción de un líquido, con forma esferoidal" },
        { letter: "g", answer: "gato", status: 0, question: "CON LA G. Mamífero carnívoro de la familia de los félidos, digitígrado, doméstico, de unos 50 cm de largo desde la cabeza hasta el arranque de la cola" },
        { letter: "g", answer: "gobernador", status: 0, question: "CON LA G. Que gobierna" },
        { letter: "g", answer: "genoma", status: 0, question: "CON LA G. Secuencia de nucleótidos que constituye el ADN de un individuo o de una especie" },
    ],
    [
        { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },
        { letter: "h", answer: "hoguera", status: 0, question: "CON LA H. Fuego hecho al aire libre con materias combustibles que levantan mucha llama" },
        { letter: "h", answer: "higo", status: 0, question: "CON LA H. Segundo fruto, o el más tardío, de la higuera, blando, de gusto dulce" },
        { letter: "h", answer: "hobbit", status: 0, question: "CON LA H. Habitantes de la Comarca, raza del protagonista de la famosa trilogía de J.R.R. Tolkien" },
        { letter: "h", answer: "habitacion", status: 0, question: "CON LA H. En una vivienda, cada uno de los espacios entre tabiques destinados a dormir, comer, etc" },
    ],
    [
        { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano" },
        { letter: "i", answer: "Internet", status: 0, question: "CON LA I. Red informática mundial, descentralizada" },
        { letter: "i", answer: "invadir", status: 0, question: "CON LA I. Irrumpir, entrar por la fuerza" },
        { letter: "i", answer: "intencion", status: 0, question: "CON LA I. Determinación de la voluntad en orden a un fin" },
        { letter: "i", answer: "impulsar", status: 0, question: "CON LA I. Dar empuje para producir movimiento" },
    ],
    [
        { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
        { letter: "j", answer: "jauria", status: 0, question: "CON LA J. Conjunto de perros mandados por el mismo perrero que levantan la caza en una montería" },
        { letter: "j", answer: "jamon", status: 0, question: "CON LA J. Pierna trasera del cerdo, curada o cocida entera" },
        { letter: "j", answer: "juramento", status: 0, question: "CON LA J. Afirmación o negación de algo, poniendo por testigo a Dios, o en sí mismo o en sus criaturas" },
        { letter: "j", answer: "jabalina", status: 0, question: "CON LA J. Arma, a manera de pica o venablo, que se usaba más comúnmente en la caza mayor, y actualmente en una modalidad deportiva" },
    ],
    [
        { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
        { letter: "k", answer: "kebab", status: 0, question: "CON LA K. Masa de carne picada que, ensartada en una varilla, se asa haciéndose girar ante una fuente de calor" },
        { letter: "k", answer: "koala", status: 0, question: "CON LA K. Mamífero marsupial arborícola parecido a un oso pequeño, propio de los eucaliptales australianos" },
        { letter: "k", answer: "kosobar", status: 0, question: "CON LA K. Natural de Kosovo, provincia autónoma de Serbia" },
        { letter: "k", answer: "kilobyte", status: 0, question: "CON LA K. Unidad equivalente a 1024 (210) bytes" },

    ],
    [
        { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo" },
        { letter: "l", answer: "lengua", status: 0, question: "CON LA L. Órgano muscular situado en la cavidad de la boca de los vertebrados y que sirve para gustar y deglutir" },
        { letter: "l", answer: "lealtad", status: 0, question: "CON LA L. Cumplimiento de lo que exigen las leyes de la fidelidad y las del honor y hombría de bien" },
        { letter: "l", answer: "loro", status: 0, question: "CON LA L. Papagayo, ave, y más particularmente el que tiene el plumaje con fondo rojo" },
        { letter: "l", answer: "liar", status: 0, question: "CON LA L. Formar un cigarrillo envolviendo la picadura en el papel de fumar" },
    ],
    [
        { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
        { letter: "m", answer: "meteorito", status: 0, question: "CON LA M. Fragmento de un cuerpo celeste que cae sobre la Tierra, o sobre un astro cualquiera" },
        { letter: "m", answer: "musculo", status: 0, question: "CON LA M. Órgano compuesto principalmente de fibras contráctiles" },
        { letter: "m", answer: "monte", status: 0, question: "CON LA M. Gran elevación natural del terreno" },
        { letter: "m", answer: "mundana", status: 0, question: "CON LA M. Dicho de una persona: Inclinada a los placeres y frivolidades de la vida social" },
    ],
    [
        { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia" },
        { letter: "n", answer: "nariz", status: 0, question: "CON LA N. Órgano prominente del rostro humano, entre la frente y la boca, con dos orificios" },
        { letter: "n", answer: "neandertal", status: 0, question: "CON LA N. Dicho de un individuo: De un grupo extinto de homínidos que vivió en gran parte de Europa y parte de Asia durante el Paleolítico medio" },
        { letter: "n", answer: "necio", status: 0, question: "CON LA N. Ignorante y que no sabe lo que podía o debía saber" },
        { letter: "n", answer: "no", status: 0, question: "CON LA N. Expresa negación" },
    ],
    [
        { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
        { letter: "ñ", answer: "diseñar", status: 0, question: "CONTIENE LA Ñ. hacer un diseño" },
        { letter: "ñ", answer: "antaño", status: 0, question: "CONTIENE LA Ñ. En un tiempo pasado" },
        { letter: "ñ", answer: "añorar", status: 0, question: "CONTIENE LA Ñ. Recordar con pena la ausencia, privación o pérdida de alguien o algo muy querido" },
        { letter: "ñ", answer: "ñu", status: 0, question: "CONTIENE LA Ñ. Mamífero rumiante africano de la familia de los antílopes, de color pardo grisáceo, cuya cabeza recuerda la de un toro" },
    ],
    [
        { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
        { letter: "o", answer: "orquesta", status: 0, question: "CON LA O. Conjunto de músicos que interpretan obras musicales con diversos instrumentos y bajo la guía de un director" },
        { letter: "o", answer: "orar", status: 0, question: "CON LA O. Hablar en público para persuadir y convencer a los oyentes o mover su ánimo" },
        { letter: "o", answer: "once", status: 0, question: "CON LA O. Diez más uno" },
        { letter: "o", answer: "oso", status: 0, question: "CON LA O. Mamífero carnívoro plantígrado, de gran tamaño, de pelaje pardo, largo y espeso, cabeza grande, ojos pequeños, extremidades fuertes y gruesas, con garras, y cola muy corta, que vive en los montes boscosos" },
    ],
    [
        { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
        { letter: "p", answer: "piña", status: 0, question: "CON LA P. Edificio en el que reside Bob Esponja" },
        { letter: "p", answer: "presa", status: 0, question: "CON LA P. Muro grueso de piedra u otro material que se construye a través de un río, arroyo o canal, para almacenar el agua a fin de derivarla o regular su curso fuera del cauce" },
        { letter: "p", answer: "peaje", status: 0, question: "CON LA P. Derecho de tránsito" },
        { letter: "p", answer: "poliglota", status: 0, question: "CON LA P. Dicho de una persona: Que habla varias lenguas" },
    ],
    [
        { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },
        { letter: "q", answer: "quad", status: 0, question: "CON LA Q. Vehículo todoterreno de cuatro ruedas similar a una motocicleta" },
        { letter: "q", answer: "quiste", status: 0, question: "CON LA Q. Vejiga membranosa que se desarrolla anormalmente en diferentes regiones del cuerpo y que contiene líquido o materias alteradas" },
        { letter: "q", answer: "empaquetar", status: 0, question: "CON LA Q. Hacer paquetes" },
        { letter: "q", answer: "adquirir", status: 0, question: "CON LA Q. Ganar, conseguir con el propio trabajo o industria" },
    ],
    [
        { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
        { letter: "r", answer: "remo", status: 0, question: "CON LA R. Instrumento en forma de pala larga y estrecha, que sirve para mover las embarcaciones haciendo palanca en el agua" },
        { letter: "r", answer: "robert", status: 0, question: "CON LA R. Cabeza de la casa Baratheon y Rey de los Siete Reinos hasta su muerte" },
        { letter: "r", answer: "robar", status: 0, question: "CON LA R. Quitar o tomar para sí con violencia o con fuerza lo ajeno" },
        { letter: "r", answer: "resina", status: 0, question: "CON LA R. Sustancia sólida o de consistencia pastosa, insoluble en el agua, soluble en el alcohol y en los aceites esenciales, y capaz de arder en contacto con el aire, obtenida naturalmente como producto que fluye de varias plantas" },
    ],
    [
        { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },
        { letter: "s", answer: "serpiente", status: 0, question: "CON LA S. Animal identificativo de la Casa Slytherin" },
        { letter: "s", answer: "sopa", status: 0, question: "CON LA S. Plato compuesto de un caldo y uno o más ingredientes sólidos cocidos en él" },
        { letter: "s", answer: "soplar", status: 0, question: "CON LA S. Despedir aire con violencia por la boca, alargando los labios un poco abiertos por su parte media" },
        { letter: "s", answer: "sentimiento", status: 0, question: "CON LA S. Hecho o efecto de sentir o sentirse" },
    ],
    [
        { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
        { letter: "t", answer: "tormenta", status: 0, question: "CON LA T. Perturbación atmosférica violenta acompañada de aparato eléctrico y viento fuerte, lluvia, nieve o granizo" },
        { letter: "t", answer: "tirano", status: 0, question: "CON LA T. Dicho de una persona: Que obtiene contra derecho el gobierno de un Estado, especialmente si lo rige sin justicia y a medida de su voluntad" },
        { letter: "t", answer: "tension", status: 0, question: "CON LA T. Estado de un cuerpo sometido a la acción de fuerzas opuestas que lo atraen" },
        { letter: "t", answer: "tubo", status: 0, question: "CON LA T. Pieza hueca, de forma por lo común cilíndrica y generalmente abierta por ambos extremos" },
    ],
    [
        { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
        { letter: "u", answer: "untar", status: 0, question: "CON LA U. Aplicar y extender superficialmente aceite u otra materia pingüe sobre algo" },
        { letter: "u", answer: "uralita", status: 0, question: "CON LA U. Material de construcción hecho a base de cemento y de fibras, generalmente de asbesto, usado sobre todo en cubiertas y tejados" },
        { letter: "u", answer: "urticaria", status: 0, question: "CON LA U. Enfermedad eruptiva de la piel, cuyo síntoma más notable es una comezón parecida a la que producen las picaduras de la ortiga" },
        { letter: "u", answer: "unir", status: 0, question: "CON LA U. Hacer que una cosa esté al lado de otra, o en contacto con ella formando un todo" },
    ],
    [
        { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
        { letter: "v", answer: "vertical", status: 0, question: "CON LA V. Dicho de una recta o de un plano: Que es perpendicular a un plano horizontal" },
        { letter: "v", answer: "vertebrado", status: 0, question: "CON LA V. Que tiene vértebras" },
        { letter: "v", answer: "vocal", status: 0, question: "CON LA V. Perteneciente o relativo a la voz" },
        { letter: "v", answer: "vertedero", status: 0, question: "CON LA V. Lugar adonde o por donde se vierte algo" },
    ],
    [
        { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
        { letter: "w", answer: "walkman", status: 0, question: "CONTIENE LA W. Reproductor portátil de casetes provisto de auriculares" },
        { letter: "w", answer: "wolframio", status: 0, question: "CONTIENE LA W. ambién conocido como tungsteno,​ es un elemento químico de número atómico 74 que se encuentra en el grupo 6 de la tabla periódica de los elementos. Su símbolo es W." },
        { letter: "w", answer: "wasabi", status: 0, question: "CONTIENE LA W.  Pasta de color verde y picante que se sirve para acompañar delicias como el sushi o el sashimi" },
        { letter: "w", answer: "weber", status: 0, question: "CONTIENE LA W. Unidad de flujo magnético del sistema internacional, equivalente al flujo magnético que, al atravesar un circuito de una sola espira, símboo wb" },
    ],
    [
        { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
        { letter: "x", answer: "xenofoba", status: 0, question: "CONTIENE LA X. Dicho de una persona: Que siente o manifiesta xenofobia" },
        { letter: "x", answer: "mexico", status: 0, question: "CONTIENE LA X. País de América ubicado en la parte meridional de América del Norte" },
        { letter: "x", answer: "xenon", status: 0, question: "CONTIENE LA X. Elemento químico o cuerpo simple, gaseoso, incoloro e inodoro, encontrado en el aire" },
        { letter: "x", answer: "silofono", status: 0, question: "CONTIENE LA X. Instrumento músico compuesto de láminas de madera, sostenidas por hilos de seda o cuerda de tripa, de espesor y longitud tales que, golpeados con un martillo dan notas diferentes" },
    ],
    [
        { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
        { letter: "y", answer: "yate", status: 0, question: "CONTIENE LA Y. Embarcación de gala o de recreo"},
        { letter: "y", answer: "ayahuasca", status: 0, question: "CONTIENE LA Y. Liana de la selva de cuyas hojas se prepara un brebaje de efectos alucinógenos, empleado por chamanes con fines curativos"},
        { letter: "y", answer: "yihad", status: 0, question: "CONTIENE LA Y. Guerra santa de los musulmanes"},
        { letter: "y", answer: "yacare", status: 0, question: "CONTIENE LA Y. Caimán"},
    ],
    [
        { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
        { letter: "z", answer: "zoo", status: 0, question: "CON LA Z. Parque zoológico"},
        { letter: "z", answer: "zapato", status: 0, question: "CON LA Z. Calzado que no pasa del tobillo, con la parte inferior de suela y lo demás de piel"},
        { letter: "z", answer: "zorro", status: 0, question: "CON LA Z. Mamífero cánido de menos de un metro de longitud, incluida la cola, de hocico alargado y orejas empinadas, pelaje de color pardo rojizo y muy espeso"},
        { letter: "z", answer: "zocatearse", status: 0, question: "CON LA Z. Dicho de un fruto: Ponerse zocato"},
    ] 
];
let questions = [];
let scores = [];
let answeredQuestions = 0;
let firstDomLetter;
let tiempoTotal = 120;
let timer;


        
//DISPLAY SI DE UN ELEMENTO DOM
function aparecer(elem) {
    if(elem.style.display = "none") {
        
        elem.style.display = "flex";
    }
}

//DISPLAY NO
function desaparecer(elem) {
    elem.style.display = "none";
}

//rellenar array questions con preguntas aleatorias
function asignarPreguntas() {
    multiplesQuestions.forEach(item => {
    let randomNumber = Math.floor(Math.random() * 5);
    questions.push(item[randomNumber]);
    })
}

//Factory para crear jugador:
function Player(name,questions) {
    return {
        name: name,
        questions: questions,
        aciertos: [],
        fallos: [],
        ronda: [],
        firstQuestion: '',
        firstLetter: '',
        firstDomLetter: {},
    
        get ronda() {
            return this.questions.filter(item => {
                return item.status === 0; /* || item.status === 'P'; */
            })
        },
        get firstQuestion() {
            return this.questions[0];
        },

        printFirstQuestion() {
            currentQuestion.textContent = this.firstQuestion.question;
        },
        
        get firstLetter() {
            return this.firstQuestion.letter;
        },

        pushFirstElement() {
            
                this.questions.push(this.firstQuestion);
                
        },
        spliceFirstElement() {
            this.questions.splice(0,1);
        },

        isFinished() {
            if(answeredQuestions === 27) {
                return true;
            }
            else {
                return false;
            }
        },
                
        get pendientes() {
            return this.questions.length - this.totalAciertos - this.totalFallos;
        },
        get totalAciertos() {
            return this.aciertos.reduce(function(a,b) {
                return a + b;
            }, 0);
        },
        get totalFallos() {
            return this.fallos.reduce(function(a,b) {
                return a + b;
            }, 0);
        },
        emptyStatus() {
            this.questions.forEach(item => {
                if(item.status === 'A' || item.status === 'F' || item.status === 'P') {
                    item.status = 0;
                }
            })
        },
        emptyAciertos() {
            this.aciertos = [];
        },
        emptyFallos() {
            this.fallos = [];
        }
    }
}

//DAR COLOR AL ROSCO
function styleRosco() {
    
    letras.forEach(item => {
        item.style.backgroundColor = "orange";
    })
    
}

//EMPEZAR EL JUEGO
initButton.addEventListener('click',function() {
    
    if(user.value !== '') {
        desaparecer(welcome);
        aparecer(scoresArea);
        aparecer(userInputs);
        aparecer(footer);
        asignarPreguntas();
        jugar();
    }    
    
        
})

function asignarNombre() {

}
//CONTADOR HACIA ATRÁS
function tiempo() {
    timer = setInterval(descontarTiempo, 1000);
    
}
function descontarTiempo() {
    time_left.textContent = tiempoTotal --;
    if(tiempoTotal < 0) {
        pararCrono();
        finPartida();
    }
}
    
function pararCrono() {
    clearInterval(timer);
}

//IDENTIFICAR LA LETRA DEL ROSCO SEGUN SEA LA CURRENTLETTER.
function getFirstDomLetter() {
    switch(player.firstLetter) {
        case 'a': firstDomLetter = letterA;
        break;
        case 'b': firstDomLetter = letterB;
        break;
        case 'c': firstDomLetter = letterC;
        break;
        case 'd': firstDomLetter = letterD;
        break;
        case 'e': firstDomLetter = letterE;
        break;
        case 'f': firstDomLetter = letterF;
        break;
        case 'g': firstDomLetter = letterG;
        break;
        case 'h': firstDomLetter = letterH;
        break;
        case 'i': firstDomLetter = letterI;
        break;
        case 'j': firstDomLetter = letterJ;
        break;
        case 'k': firstDomLetter = letterK;
        break;
        case 'l': firstDomLetter = letterL;
        break;
        case 'm': firstDomLetter = letterM;
        break;
        case 'n': firstDomLetter = letterN;
        break;
        case 'ñ': firstDomLetter = letterÑ;
        break;
        case 'o': firstDomLetter = letterO;
        break;
        case 'p': firstDomLetter = letterP;
        break;
        case 'q': firstDomLetter = letterQ;
        break;
        case 'r': firstDomLetter = letterR;
        break;
        case 's': firstDomLetter = letterS;
        break;
        case 't': firstDomLetter = letterT;
        break;
        case 'u': firstDomLetter = letterU;
        break;
        case 'v': firstDomLetter = letterV;
        break;
        case 'w': firstDomLetter = letterW;
        break;
        case 'x': firstDomLetter = letterX;
        break;
        case 'y': firstDomLetter = letterY;
        break;
        case 'z': firstDomLetter = letterZ;
        break;
    }
};


function pasaPalabra() {
    
    getFirstDomLetter();
    player.printFirstQuestion();
    firstDomLetter.style.backgroundColor = '';
    firstDomLetter.classList.remove('pausada');
    firstDomLetter.classList.add('currentLetter');
}

//ACCIONES SEGUN INPUTS
responder.addEventListener('click',checkAnswer);
pasapalabra.addEventListener('click', pausar);
stop.addEventListener('click', parar);
playAgain.addEventListener('click',function() {
    //elimina los divs creados anteriormente
    while (rankingJugadores.firstChild) {
        rankingJugadores.removeChild(rankingJugadores.firstChild);
      }
      
    reset();    
    asignarPreguntas();
    setGame();
    jugar();
    
        
})
        
function checkAnswer() {
    let givenAnswer = answerArea.value.toLowerCase();
    if(givenAnswer === player.firstQuestion.answer) {
                    
        resultadoJugada.textContent = 'Has acertado!';
        player.aciertos.push(1);
        playSound(aciertoSound);
        answeredQuestions ++;
        numAciertos.textContent = player.totalAciertos;
        firstDomLetter.classList.add('acertada'); 
        answerArea.value = '';                           
    }    
    else if(givenAnswer !== player.firstQuestion.answer) {
                    
        resultadoJugada.textContent = 'Has fallado!';
        player.fallos.push(1);
        playSound(errorSound);
        answeredQuestions ++;
        firstDomLetter.classList.add('fallada');
        answerArea.value = '';
    }
    
    player.spliceFirstElement();

    if(player.isFinished()) {
                    
        finPartida();
        
    } 
    else {
        pasaPalabra();
    }
}    

answerArea.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("responder").click();
  }
});


function pausar() {
                
    resultadoJugada.textContent = 'PASAPALABRA';
                                              
    firstDomLetter.classList.add('pausada');
    playSound(pasapalabraSound);
    player.pushFirstElement();
    player.spliceFirstElement();
    answerArea.value = '';
                
    pasaPalabra();
        
}
       
function parar() {
            
    //elimina los divs creados anteriormente
    while (rankingJugadores.firstChild) {
        rankingJugadores.removeChild(rankingJugadores.firstChild);
      }
    

    /* finPartida(); */
    reset();
    user.value = '';
    setGame();
    aparecer(welcome);
    desaparecer(scoresArea);
    desaparecer(userInputs);         
        
}

function activarBotones() {
    responder.addEventListener('click',checkAnswer);
    pasapalabra.addEventListener('click', pausar);
}
function desactivarBotones() {
    responder.removeEventListener('click',checkAnswer);
    pasapalabra.removeEventListener('click', pausar);

}
        
//EN CASO DE ACERTAR TODAS LAS PREGUNTAS
function bote() {
    return player.totalAciertos === 27; 
}

//crear puntuación (factory)
function Ranking(player,aciertos,fallos) {
    return {
        player: player,
        aciertos: aciertos,
        fallos: fallos,
        
    }

}

function finPartida() {
    pararCrono();
    desactivarBotones();

    if(player.isFinished()) {
        createRanking();
        
        if(bote()) {
            playSound(boteSound);
            resultadoJugada.textContent = (`${player.name}: has conseguido BOTEEEEEEEEE.`);
        }
        else {
            playSound(finSound);
            resultadoJugada.textContent = (`${player.name}: has conseguido ${player.totalAciertos} aciertos.`);
        }
    }
    else {
        resultadoJugada.textContent = (`${player.name}: has conseguido ${player.totalAciertos} aciertos.`);
    }
    
}



//VACIAR PARA LA SIGUIENTE PARTIDA      
function reset() {
    
    player.emptyStatus();
    player.emptyAciertos();
    player.emptyFallos();
    questions = [];
   
    answeredQuestions = 0;
    

}  
function setGame() {
    while (rankingJugadores.firstChild) {
        rankingJugadores.removeChild(rankingJugadores.firstChild);
      }
    styleRosco();
    letras.forEach(item => item.classList.remove('fallada','acertada','currentLetter','pausada'));
    resultadoJugada.textContent = '';
    numAciertos.textContent = '0';
    activarBotones();
    pararCrono();
    time_left.textContent = '';
    
    tiempoTotal = 120;
    
}
setGame();

function jugar() {
    
    player = new Player(user.value,questions);
    
    pasaPalabra();
    tiempo();  
    
    
}

//CREAR PUNTUACIÓN PARA EL CURRENT PLAYER.
function createRanking() {
    const newRanking = new Ranking(player.name,player.totalAciertos,player.totalFallos);
    
    
    //SI EL JUGADOR HA CONTESTADO A TODAS LAS PREGUNTAS, ENTRARÁ EN EL RANKING
    if(player.isFinished()) {
        scores.push(newRanking);
        
    }
    
}
//ORDENAR EL RANKING DE JUGADORES
function ordenarScores() {
        
    scores.sort(function(a,b) {
    if (a.aciertos < b.aciertos) {
        return 1;
    }
    if (a.aciertos > b.aciertos) {
        return -1;
    }

    // a must be equal to b
    return 0;
    })
}

function finalRanking() {
    
    
    ordenarScores();
    scores.forEach(item =>{
        let newDiv = document.createElement("div"); 
        let newContent = document.createTextNode(item.player + ': ' + item.aciertos + ' ACIERTOS');       
        newDiv.appendChild(newContent); //añade texto al div creado. 
        rankingJugadores.appendChild(newDiv);
    }) 
    
}

// Get the modal
let modalRanking = document.getElementById("modalRanking");
// Get the button that opens the modal
let buttonRanking = document.getElementById("buttonRanking");
// Get the <span> element that closes the modal
var closeRanking = document.getElementById("closeRanking");
// When the user clicks on the button, open the modal 
buttonRanking.onclick = function() {
    finalRanking();
    modalRanking.style.display = "block";
  
}

// When the user clicks on <span> (x), close the modal
closeRanking.onclick = function() {
  modalRanking.style.display = "none";
}

