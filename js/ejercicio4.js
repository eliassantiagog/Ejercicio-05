function intercambiarValores() {

let a = prompt("Ingresa el valor de a:");

let b = prompt("Ingresa el valor de b:");

document.write(`Valores originales: a = ${a}, b = ${b}<br>`);

let temp = a;
a = b;
b = temp;

document.write(`Valores intercambiados: a = ${a}, b = ${b}`);}

intercambiarValores()