/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

Ejemplo de salida:

*/ 

let dado1 = []
let dado2 = []
let suma = [dado1 + dado2]

for (tiradas= 0; tiradas < 51; tiradas++) {
let dado1 = Math.floor(Math.random() * 6) + 1;
console.log(dado1);
// document.write(`<p>Tu número es ${dado1}<br></p>`);

let dado2 = Math.floor(Math.random() * 6) + 1;
console.log(dado2);
suma = dado1 + dado2
// document.write(`<p>Tu número es ${dado2}<br></p>`);
document.write(`<p>Tu tirada suma ${suma} ( ${dado1} ${dado2}) <br></p>`);

}

