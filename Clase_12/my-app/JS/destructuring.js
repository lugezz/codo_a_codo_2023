// Desestructuración de arreglos
let seleccion = ["Messi", "Di Maria", "De Paul", "Simeone"]

// Extraer los datos sin destructuración
// let jugador1 = seleccion[0]
// let jugador2 = seleccion[1]

// console.log(jugador1)

// Extraer los datos con destructuración
let [jugador1, jugador2, jugador3, jugador4] = seleccion
console.log(jugador1)

// Desestructuración de objetos
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
}

// Extraer los datos sin destructuración
// let nombre = persona.nombre
// let apellido = persona.apellido
// let edad = persona.edad

// console.log(nombre)

// Extraer los datos con destructuración
let {nombre, apellido, edad} = persona
console.log(nombre)
let {nombre:nombre2, edad:edad2} = persona
console.log(nombre2, edad2)

// Spread operator
let frutas = ["Manzana", "Pera", "Uva"]
let verduras = ["Lechuga", "Tomate", "Zanahoria"]

// Concatenar arreglos
// let alimentos = frutas.concat(verduras)
let alimentos = [...frutas, ...verduras]
console.log(alimentos)

// Puedo agregar "Pera"
let alimentos2 = ["Pera", ...frutas, ...verduras]
console.log(alimentos2)
