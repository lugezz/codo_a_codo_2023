// Sentencia while


let number = prompt('Elije un número menor a 10')
let number1 = number

console.log("-- Números hasta 9 ----")

while (number1<10){
    console.log(number1)
    number1++
}

console.log("-- Números hasta 9 , aunque el primero imprime siempre ---")

// Sentencia do while

// si pongo 20 lo pone porque primero imprime y luego evalúa

let number2 = number
do {
    console.log(number2)
    number2++
}while (number2<10)

console.log("-- Número hasta 999 pero si llega a 500 corta -------")

// Condicion en while

let number3 = number
while (number3<1000) {
    console.log(number3)
    number3++
    if (number3 === 500) {
        break
    }
}


// let randomNum = Math.round(Math.random() * 10)
// let numberRan
// let oportunidades = 0

// console.log(randomNum)

// while (numberRan !== randomNum) {
//     numberRan = prompt('Adivina un número del 1 al 10')
//     oportunidades++
//     if (oportunidades > 2) {
//         break
//     }
//     if (numberRan !== randomNum) {
//         alert('Vaaaamos, le pegaste!')
//     }
// }


//bucle infinito

/* for (let i =0;i>=0;i++){
    console.log(i)
} */


// Arrays -  arreglo - matriz
// Arrays - arreglo - Matriz



// indice             0           1       2        3     4
let lenguajes = ["Javascript", "Java", "Python", "Php", "GO"]
// length             1           2       3        4      5

console.log(lenguajes[0]); // accedo a un elemento por su indice
console.log(lenguajes.length);
console.log(lenguajes[lenguajes.length-1]);// cantidad de elementos


/* Metodos de Array */
             //  0        1        2        3       4        5
let animales = ["Gato", "Perro", "Tigre", "Rata", "Conejo", "Gato"];
let numeros = [1, 2, 8, 7, 4, 6, 7, 3]
let stringPrueba = 'Talleres es el más grande'

// slice()
/* slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. */
/* let nuevoArray=animales.slice(2,5) */
/* console.log(nuevoArray); */
console.log(stringPrueba.slice(0, 9))

//unshift
//Agrega Inicio al final del array
/* animales.unshift("Dragon");
console.log(animales) */

//shift
// elimina elemento al inicio del array
/* animales.shift()
console.log(animales) */


/* .pop()
// elimina elemento al final del array
animales.pop() 
console.log(animales); */

//.push() 
//Agrega elemento/s al final del array
animales.push("Cocodrilo")
console.log(animales)


// find()
/* .find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
.find */
/* const nuevoArray = numeros.find(element=> element<3)
console.log(nuevoArray); */

//forEach
/* .forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
forEach */

animales.forEach((element,i)=>{
    console.log(`el ${element} está en la posicion ${i}`);
})

//filter()
/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */

// let nuevoArrayAn = animales.filter (elements=>elements==="Perro"||elements==="Gato")
let nuevoArrayAn = animales.filter (elements=> ["Perro", "Gato"].includes(elements))
console.log(nuevoArrayAn)

//.map()
/* .map() : Permite recorre el array y modificar los elements presentes en él, retornando un nuevo array con la misma longitud que el original.
.map */
let nuevoArray = numeros.map(elements =>elements *10)
console.log(nuevoArray);
