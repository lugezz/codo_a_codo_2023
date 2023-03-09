/* let nombre = 'Amilcar'

console.log(nombre) */

// Math
console.log('Power')
console.log(Math.pow(2, 2)) // 4 
console.log(Math.pow(3, 2)) // 9
console.log(Math.pow(3, 3)) // 27

console.log('Round')
console.log(Math.round(2.1)) // 2
console.log(Math.round(2.45)) // 2
console.log(Math.round(2.1 + 2.45)) // 5

console.log('Floor')
console.log(Math.floor(6.99)) // 6
console.log(Math.floor(2.45)) // 2
console.log(Math.floor(6.99 + 2.45)) // 9

console.log('Random')
console.log(Math.random()) // Número aleatorio entre 0 y 1
console.log(Math.random() * 45) // Número aleatorio entre 0 y 45 con decimales
console.log(Math.round(Math.random() * 45)) // Número aleatorio entre 0 y 45 con decimales Entero

// Métodos string
console.log('\nMétodos string')
let nombre = "Aristóteles"
console.log(`El largo del nombre ${nombre} es ${nombre.length}`)
console.log(`Hola ${nombre}! Tu nombre tiene ${nombre.length} letras`)


// Operadores lógicos o relacionales
console.log('\nOperadores lógicos o relacionales')
console.log(2 === 1+1) // true
console.log(2 === 3) // true

let num1 = 33
let num2 = "33"
let num3 = 40

console.log(num1 == num2) // true
console.log(num1 === num2) // false


console.log(num1 != num2) // false
console.log(num1 !== num2) // true

// AND
console.log(num1 >= num2) // true
console.log(num1 >= num2 && num1 === num2) // false
console.log(num1 >= num2 && num1 == num2) // true

// OR, con una que esté alcanza
console.log(num1 >= num2 || num1 === num2) // true
console.log(num1 >= num2 || num1 == num2) // true

// Condicionales
console.log('\Condicionales')
let edad = 18

if (edad >= 18){
    console.log('Sos mayor')
} else {
    console.log('Sos un niño')
}

// Ternario

let pelicula = "Matrix"
let respOk = 'Peliculón'
let respMal = 'No, quiero otra peli'

if (pelicula === "Matrix") {
    console.log(respOk)
} else {
    console.log(respMal)
}

// o
pelicula = "Otra"
pelicula=== "Matrix"? console.log(respOk): console.log(respMal);

// o
pelicula = "El Padrino"
switch (pelicula) {
    case 'Matrix':
      console.log(respOk);
      break;
    case 'El Padrino':
      console.log('No jodas con esa peli');
      break;
    default:
      console.log(respMal);
  }

let semaforo = prompt('Ingrese el color del semáforo:').toLowerCase()
    switch (semaforo) {
        case 'verde':
            console.log('Pasa cabeza');
            break;
        case 'amarillo':
            console.log('Por las dudas, para');
            break;
        case 'rojo':
            console.log('Espera');
            break;
        default:
            console.log(`El color ${semaforo} no está en el semáforo`);
    }

// Funciones
console.log('\nFunciones')

function saludar() {
    console.log('Hola Codo a Codo!')
}

function saludarName(my_name) {
    console.log(`Hola ${my_name}!, cómo estás`)
}

function sumar(num1, num2) {
    return num1 + num2
}

saludar()
saludarName('Artime')

console.log(sumar(10, 20))
