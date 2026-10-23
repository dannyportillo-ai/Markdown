// var nombre1 = "Danny";
// let apellido = "Portillo";
// const apellido2 = "Valderrama";

// console.log(nombre1);

//array 10 elements

let cocina = ["nevera", "estufa", "licuadora", "microondas", "sarten", "olla", "cuchillo", "plato", "vaso", "taza"];

console.log(cocina[0]);

// Modificar un elemento

// Agregar al inicio
cocina.unshift("Tostadora");

// Agregar al final
cocina.push("Colador");

console.log(cocina);

// Eliminar el primero
cocina.shift();

// Eliminar el último
cocina.pop();

//permite eliminar un elemento de una posición específica
cocina.splice(2, 1); // Aquí, 2 es la posición y 1 es la cantidad de elementos que quieres eliminar.

console.log(cocina);

//mensaje con objeos y dentro de los objetos hay objetos y arrays

let cocina2 = {
    nombre: "Mi cocina",
    mensaje: "Bienvenidos a mi cocina",

    electrodomesticos: {nevera: "Samsung", licuadora: "Oster", microondas: "LG"},

    utensilios: ["Cuchillo", "Sartén", "Olla", "cuchara", "plato"]
};

// Imprimir mensajes y objetos
console.log(cocina2.nombre);
console.log(cocina2.mensaje);
console.log(cocina2.electrodomesticos.nevera);
console.log(cocina2.electrodomesticos.licuadora);
console.log(cocina2.electrodomesticos.microondas);
console.log(Object.keys(cocina2.electrodomesticos).length); // Imprime la cantidad de electrodomésticos (Object.keys() devuelve un array con las propiedades de un objeto, y .length devuelve la cantidad de elementos en ese array)
console.log(cocina2.utensilios[0]);
console.log(cocina2.utensilios[1]);
console.log(cocina2.utensilios[2]);
console.log(cocina2.utensilios[3]);
console.log(cocina2.utensilios[4]);
console.log(cocina2.utensilios.length); // Imprime la cantidad de utensilios (.length es una propiedad de los arrays que devuelve el número de elementos que contiene)