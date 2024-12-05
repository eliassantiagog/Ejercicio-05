function convertirMinutos() {

let minutos = parseFloat(prompt("Introduce un número de minutos:"));

let segundos = minutos * 60;

let horas = minutos / 60;

alert(
    `Conversión de ${minutos} minutos:\n` +
    `Segundos: ${segundos} segundos\n` +
    `Horas: ${horas} horas`
);}

convertirMinutos();