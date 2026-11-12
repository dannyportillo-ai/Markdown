let sum = '5' + 5; 
console.log(typeof sum, sum);  // Output: "string"  

let rest = '10' - 5;
console.log(typeof rest, rest);  // Output: "number" 5

let multiplication = '5' * 2;
console.log(typeof multiplication, multiplication);  // Output: "number" 10

let division = '10' / 2;
console.log(typeof division, division);  // Output: "number" 5

//convertion

let transformToNumber = Number(sum);
console.log(typeof transformToNumber, transformToNumber);  // Output: "number" 55

const trasnformToString = String(rest);
console.log(typeof trasnformToString, trasnformToString);  

const numberPi = 3.1415926535; 
const methodToFixed = numberPi.toFixed(2); // Output: "string" "3.14"
console.log(typeof methodToFixed, methodToFixed);

const methodParseInt = parseInt(numberPi); // Output: "number" 3
console.log(typeof methodParseInt, methodParseInt);

const methodParseFloat = parseFloat(numberPi); // Output: "number" 3.1415926535
console.log(typeof methodParseFloat, methodParseFloat);