function calcularPrecioConIVA() {

let precioDolares = parseFloat(prompt("Introduce el precio del producto en dólares:"));

const TIPO_CAMBIO = 1130;

const IVA = 0.21;

let precioPesos = precioDolares * TIPO_CAMBIO;

let valorIVA = precioPesos * IVA;


let precioFinal = precioPesos + valorIVA;

alert(
    `Precio en dólares: $${precioDolares.toFixed(2)}\n` +
    `Tipo de cambio: 1 dólar = $1130\n` +
    `Precio en pesos: $${precioPesos.toFixed(2)}\n` +
    `IVA (21%): $${valorIVA.toFixed(2)}\n` +
    `Precio final con IVA: $${precioFinal.toFixed(2)}`
    );}

calcularPrecioConIVA();