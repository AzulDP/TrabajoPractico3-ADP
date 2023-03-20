/*
Dificultad:  🟢🟡
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:




Input:
lado A = 24
lado B = 5

Output: 58

*/ 

let largo = parseInt(prompt('Ingrese el valor de un lado de un rectángulo'));
let ancho = parseInt(prompt('Ingrese el valor de un lado de un rectángulo'));
const perimetro = function area (largo, ancho) {
    return largo * ancho
    }
document.write(`El perimetro del rectángulo es ${perimetro}`)