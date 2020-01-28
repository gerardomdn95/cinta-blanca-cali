alert("Funciona");

// String
// piedra
var j1 = "piedra";
var j2 = "papel";

// Empates ✅
if (j1 == "piedra" && j2 == "piedra") {
    console.log("Empate");
} else if (j1 == "tijera" && j2 == "tijera") {
    console.log("Empate");
} else if (j1 == "papel" && j2 == "papel") {
    console.log("Empate");
}
// J1
if (j1 == "papel" && j2 == "piedra") {
    console.log("Gana J1");
} else if (j1 == "tijera" && j2 == "papel") {
    console.log("Gana J1");
} else if (j1 == "piedra" && j2 == "tijera") {
    console.log("Gana J1");
}
// J2
if (j2 == "papel" && j1 == "piedra") {
    console.log("Gana J2");
} else if (j2 == "tijera" && j1 == "papel") {
    console.log("Gana J2");
} else if (j2 == "piedra" && j1 == "tijera") {
    console.log("Gana J2");
}

// No recibe parámetros
function myFunction() {
    console.log("Mi función");
}

myFunction();

function sum(a, b) {
    var resultado = a + b;
    return resultado;
}

var res = sum(2, 2)
console.log(res);

function juego(j1, j2) {
    if (j1 == "piedra" && j2 == "piedra") {
        return "Empate";
    } else if (j1 == "tijera" && j2 == "tijera") {
        return "Empate";
    } else if (j1 == "papel" && j2 == "papel") {
        return "Empate";
    }
    // J1
    if (j1 == "papel" && j2 == "piedra") {
        return "Gana J1";
    } else if (j1 == "tijera" && j2 == "papel") {
        return "Gana J1";
    } else if (j1 == "piedra" && j2 == "tijera") {
        return "Gana J1";
    }
    // J2
    if (j2 == "papel" && j1 == "piedra") {
        return "Gana J2";
    } else if (j2 == "tijera" && j1 == "papel") {
        return "Gana J2";
    } else if (j2 == "piedra" && j1 == "tijera") {
        return "Gana J2";
    }
}