// Función
//      _________
//      l        l
//  x=> l        l     =>    y
//      ----------
alert("Funciona");

// Números
var x = 5;
var y = 3;
// String
var nombre = "Gerardo";
// Booleanos
var casado = false;

console.log(nombre);
// Concatenación
console.log(nombre + " " + x);
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(4 / 2);
// Residuo
console.log(4 % 2);

console.log(17 % 2);

console.log(5 > 3);  // true
console.log(3 == 4); // false
console.log(6 < 0); // false
console.log(-3 <= 0); // true
console.log(3 != 5); // true

if(6 < 0) {
    console.log("Es cierto");
} else {
    console.log("No es cierto"); 
}


var j1 = "tijeras";
var j2 = "piedra";

if(j1 == "piedra" && j2 == "papel") {
    console.log("Gana Jugador 2");
}