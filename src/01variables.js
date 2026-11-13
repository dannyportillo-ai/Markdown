// METODOS DE STRING (TEXTO)

// .toUpperCase() - Mayusculas
// let texto = "danny";
// console.log(nombre.toUpperCase()); 
// Resultado: "DANNY"


// .toLoweCase() - Minusculas
// let nombre = "DANNY";
// console.log(nombre.toLowerCase()); 
// Resultado: "danny"


// .startsWith() - Con que empieza un texto
// let nombre = "Danny";
// console.log(nombre.startsWith("Dan")); 
// Resulatdo: true


// .endWith() - Con que termina un texto
// let nombre = "Danny";
// console.log(nombre.endWith("nn")); 
// Resultado: false


// .split() - Convierte un string en un array, separando el texto.
// let nombre = "Danny Portillo";
// console.log(nombre.split(" "));
// Resultado: ["Danny, Portillo"]


// .trim() - Elimina los espacios innecesarios al principio y al final de un texto
// let nombre = "   Danny   ";
// console.log(nombre.trim());
// Resultado: Danny


// .includes() - Comprueba si un texto contiene una palabra o letras específicas.
// let nombre = "Danny Portillo";
// console.log(nombre.includes("Danny"));
// Resultado: true


// .splice() - Sirve para agregar, eliminar o reemplazar elementos de un array.

// 1. Eliminar elementos
// let frutas = ["Manzana", "Pera", "Uva"];
// frutas.splice(1, 1);
// console.log(frutas);
// Resultado: ["Manzana", "Uva"]

// 2. Agregar elementos
// let frutas = ["Manzana", "Uva"];
// frutas.splice(1, 0, "Pera");
// console.log(frutas);
// Resultado: ["Manzana", "Pera", "Uva"]

// 3. Reemplazar elementos
// let frutas = ["Manzana", "Pera", "Uva"];
// frutas.splice(1, 1, "Mango");
// console.log(frutas);
// Resultado: ["Manzana", "Mango", "Uva"]

// Primer número 1: posición donde empieza.
// Segundo número 1: cantidad de elementos que elimina.


// .replaceAll() - Sirve para reemplazar todas las coincidencias de un texto por otro.
// let frase = "Me gusta JavaScript y JavaScript es genial";
// console.log(frase.replaceAll("JavaScript", "HTML"));
// Resultado: Me gusta HTML y HTML es genial



// METODOS DE ARRAY (ARREGLOS)

// .join() - Convierte un array en un string, uniendo sus elementos.
// let nombre = ["Danny, Portillo"];
// console.log(nombre.join(" ")); 
// Resultado: "Danny Portillo"


// .push() - Agrega un elemento al final del array
// let frutas = ["Manzana, "Pera]; 
// frutas.push("Uva");
// console.log(frutas);
// Resultado: ["Manzana", "Pera", "Uva"]


// .unshift() - Agregar un elemento al principio del array 
// let frutas = ["Manzana, "Pera]; 
// frutas.unshift("Uva");
// console.log(frutas); 
// Resultado: ["Uva","Manzana", "Pera"]


// .pop() - Elimina el ultimo elemento del array
// let frutas = ["Manzana, "Pera, "Uva"]; 
// frutas.pop("Uva");
// console.log(frutas); 
// Resultado: ["Manzana", "Pera"]


// .shift() - Elimina el primer elemento del arrya
// let frutas = ["Manzana, "Pera, "Uva"]; 
// frutas.shift("Uva");
// console.log(frutas); 
// Resultado: ["Pera", "Uva"]


// .splice() - Sirve para agregar, eliminar o reemplazar elementos de un array.

// 1. Eliminar elementos
// let frutas = ["Manzana", "Pera", "Uva"];
// frutas.splice(1, 1);
// console.log(frutas);
// Resultado: ["Manzana", "Uva"]

// 2. Agregar elementos
// let frutas = ["Manzana", "Uva"];
// frutas.splice(1, 0, "Pera");
// console.log(frutas);
// Resultado: ["Manzana", "Pera", "Uva"]

// 3. Reemplazar elementos
// let frutas = ["Manzana", "Pera", "Uva"];
// frutas.splice(1, 1, "Mango");
// console.log(frutas);
// Resultado: ["Manzana", "Mango", "Uva"]

// Primer número 1: posición donde empieza.
// Segundo número 1: cantidad de elementos que elimina.



// OTROS CONCEPTOS Insertar variables dentro de textos usando ${}.

// template literals (plantillas literales) - Permiten unir textos y variables fácilmente utilizando las comillas invertidas (`) y ${}.
// let nombre = "Danny";
// let edad = 17;
// console.log(`Hola, soy ${nombre} y tengo ${edad} años`);
// Resultado: Hola, soy Danny y tengo 17 años



// METODOS Y HERRAMIENTAS ADICIONALES

// .getElementById() - Busca un elemento HTML mediante su identificador (id).

// </> JavaScript
// let titulo = document.getElementById("titulo");
// console.log(titulo);

// Si en HTML tienes:

// </> HTML
// <h1 id="titulo">Hola Danny</h1>
// Resultado: JavaScript encuentra ese título.


// .querySelector() - Busca un elemento HTML utilizando selectores CSS.

// </> JavaScript 
// let titulo = document.querySelector(".titulo");

// Puedes buscar por:
// "#titulo" → ID.
// ".titulo" → Clase.
// "h1" → Etiqueta.


// .addEventListener() - Permite detectar cuando ocurre un evento, como un clic.

// </> JavaScript 
// let boton = document.getElementById("boton");
// boton.addEventListener("click", function() {
//     console.log("Hiciste clic");
// });
// Resultado: Cuando presionas el botón, aparece el mensaje.


// .createElement() - Permite crear elementos HTML desde JavaScript.

// </> JavaScript
// let parrafo = document.createElement("p");
// parrafo.textContent = "Hola Danny";
// Resultado: Crea un párrafo, pero todavía no lo muestra en la página.


// .appendChild() - Agrega un elemento dentro de otro.
// </> JavaScript
// document.body.appendChild(parrafo);
// Ahora el párrafo aparece en la página.

