/*
Dificultad:  🟢🟡
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]
Amsterdam
Budapest
Copenhagen
Dubai
Edinburgh
Frankfurt
Geneva
Hanoi
Indianapolis
Johannesburg
Paris
Barcelona


Output:

*/ 

let cities = [];


document.write ("<h2>Lista de Ciudades</h2>");
document.write("<ul>");

for (let index = 0; index < 11; index++) {
   let city = prompt('Ingrese una ciudad');
   cities.push(city);
   if (city === null) {break;}{
       document.write(`<li>${cities[index] + " "}</li><br>`);
    }
}
// for (let index = 0; index < city.length; index++);

document.write("</ul>");


