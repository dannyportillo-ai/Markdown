//Inicio las variables
let nombre = "   Danny Portillo   ";
let edad = 18;
let lenguaje = "JavaScript";
let nivel = "principiante";
let horasEstudio = 12;
let activo = true;

//Analizador de nombre
let nombreLimpio = nombre.trim();
let nombreMayuscula = nombreLimpio.toLocaleUpperCase();
let nombreMinuscula = nombreLimpio.toLowerCase();

//dividir unir e invertir
let partesNombre = nombreLimpio.split(" ");
let nombreInvertido = partesNombre.reverse().join(" ")

//con que inicia con que termina 
let empiezaCon = lenguaje.startsWith("Phython");
let terminaCon = lenguaje.endsWith("Script");
let cantidadLetras = lenguaje.length;

//operaciones
let edadFutura = edad + 5;
let horaSemanales = horasEstudio *7;
let estudiaMucho = horasEstudio >=10;

let perfil= `
==== PERFIL DE USUARIO ====
Nombre: ${nombreMayuscula}
Nombre Invertido: ${nombreInvertido}
Lenguaje: ${lenguaje}
Edad Futua : ${edadFutura}
Horas semanales: ${horaSemanales}
¿Empieza con java?: ${empiezaCon}
¿Termina con Script?: ${terminaCon}
Usuario activo: ${activo}
`;

console.log(perfil);

// Registro de videojuegos

// Variables
let jugador = "  Danny  ";
let juegoFavorito = "  GTA V  ";
let edad2 = 18;

// Videojuegos
let juegos = ["GTA V", "Minecraft", "FIFA 25"];
let horas = [20, 15, 10];
let puntuaciones = [9, 8, 7];

// Generos
let generos = "Accion - Aventura - Deportes";

// Limpiar informacion
let nombreJugador = jugador.trim();
let favorito = juegoFavorito.trim();
let jugadorMayuscula = nombreJugador.toUpperCase();
let listaJuegos = juegos.join(" | ");
let listaGeneros = generos.split(" - ");
let generosUnidos = listaGeneros.join(", ");

// Operaciones
let totalHoras = horas[0] + horas[1] + horas[2];
let promedio = (

    puntuaciones[0] +

    puntuaciones[1] +

    puntuaciones[2]

) / 3;

// Analizar juego favorito

let empiezaCon1 = favorito.startsWith("GTA");

let terminaCon2 = favorito.endsWith("V");

// Reporte

let reporte = `

===== GAME STATS =====

Jugador: ${jugadorMayuscula}
Edad: ${edad}
Mis videojuegos:
${listaJuegos}

Generos:
${generosUnidos}

Horas jugadas: ${totalHoras}
Promedio de puntuacion: ${promedio.toFixed(2)}
Juego favorito: ${favorito}
Empieza con GTA: ${empiezaCon1}
Termina con V: ${terminaCon2}

===== FIN DEL REPORTE =====

`;

console.log(reporte);