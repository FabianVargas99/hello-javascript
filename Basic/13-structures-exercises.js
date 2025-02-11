/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let myArray = ["Perro", "Gato", "Pato", "Elefante", "Jirafa"]

// 2. Añade dos más. Uno al principio y otro al final
myArray.push("ganso")
myArray.unshift("libelula")

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2,1)

// 4. Crea un set que almacene cinco libros
let mySet = new Set(['libro 1','libro 2','libro 3','libro 4','libro 5'])

// 5. Añade dos más. Uno de ellos repetido
mySet.add('libro 6')
mySet.add('libro 1')

// 6. Elimina uno concreto a tu elección
mySet.delete('libro 3')
// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
  [1,'Enero'],
  [2,'Febrero'],
  [3,'Marzo'],
  [4,'Abril'],
  [5,'Mayo'],
  [6,'Junio'],
  [7,'Julio'],
  [8,'Agosto'],
  [9,'Septiembre'],
  [10,'Octubre'],
  [11,'Noviembre'],
  [12,'Diciembre']
])
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
myMap.has(5) ? console.log(myMap.get(5)) : ''

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
