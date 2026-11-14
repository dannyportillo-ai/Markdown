// || OR (O) Basta con que una condición sea verdadera para que el resultado sea verdadero.

let or = '5' || 5;
console.log(typeof or, or); // Output: "string" "5"

// && AND (Y) Las dos condiciones deben ser verdaderas para que el resultado sea verdadero.

let and = '5' && 5;
console.log(typeof and, and); // Output: "number" 5

// ! NOT (NO) Sirve para negar o invertir una condición.

let valueTrue = !true;
console.log(typeof valueTrue, valueTrue); // Output: "boolean" false