// Código js de mi primer sitio web
// nuestras primeras líneas de código en js
// let $a = 3;
// let $b = 5;
// let $c = $a + $b;
// alert(
//   "Bienvenido a tu sitio Jorge...! " +
//     "la suma de las variables a y b es: " +
//     $c
// );

// * Declaración de variables
// * la declaración de variables la hacemos con la palabra reservada let, hasta hace un tiempo se hacía con la palabra var, pero esto tenía un problema de por medio conocido como hoisting o elevación de las varaibles.

// let $nombre = "";
// $nombre = prompt("Cuál es tu nombre?");
// alert("Bienvenido " + $nombre);
// console.log("Bienvenido " + $nombre);

// * juego de piedra papel y tijera
// 1 es piedra, 2 es papel y tres tijera
// declaramos la función con nuestra expresión matemática par que la pc eija de forma aleatoria
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// ahora colocaremos todo nuestro código repetitivo dentro de una función
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra ✊🏻";
  } else if (jugada == 2) {
    resultado = "Papel ✋🏻";
  } else if (jugada == 3) {
    resultado = "Tijera ✌🏻";
  } else {
    resultado = "Mala elección";
  }
  return resultado;
}

let $jugador = 0;
let $pc = aleatorio(1, 3);
// solicitamos que el jugador 1 elija
$jugador = prompt("elige: 1 para piedra, 2 para papel, 3 para tijera");

alert("PC elige: " + eleccion($pc));
alert("Tu eliges: " + eleccion($jugador));
// alert("elegiste " + $jugador);
// creamos la condicional
// if ($jugador == 1) {
//   alert("Elegiste ✊🏻");
// } else if ($jugador == 2) {
//   alert("Elegiste ✋🏻");
// } else if ($jugador == 3) {
//   alert("Elegiste ✌🏻");
// } else {
//   alert("Elige entre 1, 2 o 3");
// }

// // ahora las elecciones de nuestro rival, la pc

// if ($pc == 1) {
//   alert("Pc eligió ✊🏻");
// } else if ($pc == 2) {
//   alert("Pc eligió ✋🏻");
// } else if ($pc == 3) {
//   alert("Pc eligió ✌🏻");
// }

// empieza el juego
if ($pc == $jugador) {
  alert("Empate...😮");
} else if ($jugador == 1 && $pc == 3) {
  alert("Ganaste...😂");
} else if ($jugador == 2 && $pc == 1) {
  alert("Ganaste...😂");
} else if ($jugador == 3 && $pc == 2) {
  alert("Ganaste...😂");
} else {
  alert("Perdiste...😣");
}

// ahora hagamos esto pero con una clase y una función.
