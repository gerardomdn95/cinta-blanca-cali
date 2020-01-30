// Imprimir números del 1 al 100 ✅
// Si el número es múltiplo de 3 -> Fizz ✅
// Si el número es múltiplo de 5 -> Buzz ✅
// Si es múltiplo de 3 y 5 -> FizzBuzz ✅
// Si no se cumple ninguna condición, imprimir el números ✅

// for (i = 1; i <= 100; i++) {
//     if(i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if(i % 3 == 0) {
//         console.log("Fizz");
//     } else if(i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// Numérico
var edad = 24;
// String
var nombre = "Gerardo";
// Booleana
var llueve = false;
// Arreglos/Array
//                  0       1       2
var habilidades = ["JS", "HTML", "CSS"];

var objeto = {
    // Atributos
    nombre: "Cuchara",
    material: "Plástico",
    color: "Blanco",
    ciclo: 3,
    reciclabe: false,
    usos: ["Comer", "Revolver", "Medir", "Morder", "Arma"],
    
    // Métodos
    usar: function() {
        return "Utilizaste la cuchara";
    }
}

console.log(habilidades);
console.log(habilidades[1]);

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.usos[2]);
console.log(objeto.usar());

alumno = {
    nombre: "",
    
}

function cambia() {
    var h1 = document.getElementById("nombre");
    h1.innerHTML = "🚀🚀🚀🚀🚀🚀🚀🚀";

    var nombre = document.getElementById("");
    h1.innerHTML = alumno.nombre;

    var apellidos = document.getElementById("");
    h1.innerHTML = "🚀🚀🚀🚀🚀🚀🚀🚀";
}