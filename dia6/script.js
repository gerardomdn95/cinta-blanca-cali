alert("Funciona");

// Para
// índice; condición; aumento
//   i = 0; 0 < 5; i = 0 + 1    primera
//   i = 1; 1 < 5; i = 1 + 1    segunda
//   i = 2; 2 < 5; i = 2 + 1    tercera
//   i = 3; 3 < 5; i = 3 + 1    cuarta
//   i = 4; 4 < 5; i = 4 + 1    quinta
//   i = 5; 5 < 5; ❌
// for (i = 0; i < 5; i = i + 1) {
//     console.log("Interación número " + i);
// }

// 1 - 100
// for(i = 1; i <= 100; i = i + 1) {
//     if(i % 2 == 0) {
//         console.log(i);
//     }
// }

// Arreglos == Arrays
//                0           1           2         3        4          5
var paises = ["Colombia", "México", "Costa Rica", "Perú", "Ecuador", "Brasil", "Uruguay"];

//             0, 1, 2, 3, 4,  5,  6,     7,       8,       9
var numeros = [5, 6, 8, 9, 13, 14, 16, "siete", "veinte", true];

// console.log(paises[0]);
// console.log(paises[1]);
// console.log(paises[2]);
// console.log(paises[3]);
// console.log(paises[4]);

// console.log(paises.length);
// "i++"" === "i = i + 1"
for(i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}


for(i = 100; i >= 1; i--) {
    console.log(i);
}

var calificaciones = [5, 4, 3, 5, 4, 3, 2, 1];

// Acumuladora
var suma = 0;
// Sumar calificaciones
for(i = 0; i < calificaciones.length; i++) {
    suma = suma + calificaciones[i]
}
var promedio = suma / calificaciones.length;
console.log(promedio.toFixed(2));