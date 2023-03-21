/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// ejemplo de tablas


const rows = prompt('Ingrese el número de filas');
const columns = prompt('Ingrese el número de columnas');
let result = rows * columns

document.write('<table><tbody>')
// dibujar las filas
for(let indexRows = 0; indexRows < rows; indexRows++){
    document.write('<tr>')
    // dibujar las celdas
for(let indexColumns = 0; indexColumns < columns; indexColumns++){

    document.write(`<td>${result--}</td>`)
}
    document.write('</tr>')
}
document.write('</tbody></table>')
*/ 


let dado1 = []
let dado2 = []
let suma = [dado1 + dado2]
let apariciones = [suma]
// const rows = suma
// const columns = apariciones

for (tiradas= 0; tiradas < 51; tiradas++) {
let dado1 = Math.floor(Math.random() * 6) + 1;
console.log(dado1);

let dado2 = Math.floor(Math.random() * 6) + 1;
console.log(dado2);
suma = dado1 + dado2
document.write(`<p>Tu tirada suma ${suma} ( ${dado1} ${dado2}) <br></p>`);
}


// apariciones

// for (apariciones =2; apariciones < 13 ; apariciones++) {
// count = 0;
// if (suma = apariciones) {
//     count = count+1;
// }
// document.write(`La suma ${suma} aparece ${apariciones} veces.`)
// }

// for (tiradas2= 0; tiradas2 < 51; tiradas2++) {
// }


// document.write('<table><tbody>')
// // dibujar las filas
// for(let indexRows = 0; indexRows < rows; indexRows++){
//     document.write('<tr>')
//     // dibujar las celdas
// for(let indexColumns = 0; indexColumns < columns; indexColumns++){

//     document.write(`<td>${result--}</td>`)
// }
//     document.write('</tr>')
// }
// document.write('</tbody></table>')