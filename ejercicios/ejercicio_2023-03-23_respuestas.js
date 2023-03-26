
let obtenerMayor = (x, y) => Math.max(x, y)
console.log(`El mayor de 10, 20 es ${obtenerMayor(10, 20)}`)

let mayoriaDeEdad = edad => edad >= 18 ? "Allowed" : "Not Allowed";
//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"

console.log(`Juan tiene 10 y está ${mayoriaDeEdad(10)}`)
console.log(`María tiene 18 y está ${mayoriaDeEdad(18)}`)


let conection = status => {
  if (status == 1){
    return "Online"
  } else if (status == 2) {
    return "Away"
  } else {
    return "Offline"
  }
}
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
  
console.log(`Status 1 da como resultado ${conection(1)}`)
console.log(`Status 2 da como resultado ${conection(2)}`)
console.log(`Status 33 da como resultado ${conection(33)}`)

let saludo = idioma => {
  let resp
  switch (idioma.toLowerCase()) {
    case "aleman":
      resp = "Guten Tag!";
      break;
    case "mandarin":
      resp = "Ni Hao!";
      break;
    case "ingles":
      resp = "Hello!";
      break;
    default:
      resp = "Hola!";
      break;
  }
  return resp
}
console.log(`El saludo alemán es ${saludo('aleman')}`)
console.log(`El saludo mandarín es ${saludo('mandarin')}`)
console.log(`El saludo inglés es ${saludo('ingles')}`)
console.log(`El saludo quechua es ${saludo('quechua')}`)

    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:

let colors = color => {
  let resp
  switch (color.toLowerCase()) {
    case "blue":
      resp = "This is blue";
      break;
    case "red":
      resp = "This is red";
      break;
    case "green":
      resp = "This is green";
      break;
    case "orange":
      resp = "This is orange";
      break;
    default:
      resp = "Color not found";
      break;
  }
  return resp
}
console.log(`La respuesta al blue es ${colors('blue')}`)
console.log(`La respuesta al red es ${colors('red')}`)
console.log(`La respuesta al green es ${colors('green')}`)
console.log(`La respuesta al orange es ${colors('orange')}`)
console.log(`La respuesta al violet es ${colors('violet')}`)
  
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.

let colors2 = color => {
  if (['blue', 'red', 'green', 'orange'].includes(color.toLowerCase())) {
    return `This is ${color}`;
  } else {
    return "Color not found";
  }}

console.log(`La respuesta al blue es ${colors2('blue')}`)
console.log(`La respuesta al red es ${colors2('red')}`)
console.log(`La respuesta al green es ${colors2('green')}`)
console.log(`La respuesta al orange es ${colors2('orange')}`)
console.log(`La respuesta al violet es ${colors2('violet')}`)

let esDiezOCinco = numero => [5, 10].includes(numero)
console.log(`El 5 es 10 o 5?: ${esDiezOCinco(5)}`)
console.log(`El 5.0 es 10 o 5?: ${esDiezOCinco(5.0)}`)
console.log(`El 3 es 10 o 5?: ${esDiezOCinco(3)}`)

    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
  

let estaEnRango = numero => numero < 50 && numero > 20
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
console.log(`El 5 está entre 20 y 50?: ${estaEnRango(5)}`)
console.log(`El 35 está entre 20 y 50?: ${estaEnRango(35)}`)
console.log(`El 55 está entre 20 y 50?: ${estaEnRango(55)}`)

let esEntero = numero => numero === Math.floor(numero)
    
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:

console.log(`El 0.8 es entero?: ${esEntero(0.8)}`)
console.log(`El 1 es entero?: ${esEntero(1)}`)
console.log(`El -10 es entero?: ${esEntero(-10)}`)

let divisibleEn = (num, numEn) => num % numEn === 0

let fizzBuzz = numero => {
  let resp = ''
  if (!divisibleEn(numero, 3) && !divisibleEn(numero, 5)) {
    resp = numero
  } else {
    if (divisibleEn(numero, 3)) {
      resp = "fizz"
    }
    if (divisibleEn(numero, 5)) {
      resp += "buzz"
    }
  }

  return resp
}
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero

console.log(`El 3 da en la función fizzBuzz: ${fizzBuzz(3)}`)
console.log(`El 4 da en la función fizzBuzz: ${fizzBuzz(4)}`)
console.log(`El 5 da en la función fizzBuzz: ${fizzBuzz(5)}`)
console.log(`El 345 da en la función fizzBuzz: ${fizzBuzz(345)}`)
console.log(`El 7 da en la función fizzBuzz: ${fizzBuzz(7)}`)
console.log(`El 15 da en la función fizzBuzz: ${fizzBuzz(15)}`)
  
let operadoresLogicos = (num1, num2, num3) => {
  if (Math.max(num1, num2, num3) === num1 && num1 > 0) {
    return "Número 1 es mayor y positivo"
  }
  if (Math.min(num1, num2, num3) < 0) {
    return "Hay negativos"
  }
  if (Math.max(num1, num2, num3) === num3) {
    return num3 + 1
  }
  if ([num1, num2, num3].includes(0)) {
    return "Error"
  }
  return false
}

    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 

console.log(`La funcion operadoresLogicos de 1, 2 y 3 es: ${operadoresLogicos(1, 2, 3)}`)
console.log(`La funcion operadoresLogicos de 10, 2 y 3 es: ${operadoresLogicos(10, 2, 3)}`)
console.log(`La funcion operadoresLogicos de -1, -2 y -3 es: ${operadoresLogicos(-1, -2, -3)}`)
console.log(`La funcion operadoresLogicos de 1, 0 y 3 es: ${operadoresLogicos(1, 0, 3)}`)

let esPrimo = numero => {
  if (numero === 0, numero === 1) {
    return false
  }
  for (let index = 2; index < numero; index++) {
    if (numero % index == 0) {
      return true
    }
  }
  return false
}

for (let index = 0; index < 50; index++) {
  console.log(`El número ${index} es primo?: ${esPrimo(index)}`)
}
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
  
let esVerdadero = valor => valor ? "Soy verdadero" : "Soy falso";
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí

console.log(`Para true el resultado: ${esVerdadero(true)}`)
console.log(`Para false el resultado: ${esVerdadero(false)}`)
    

let tablaDelSeis = () => {
  for (let index = 0; index <= 60; index++) {
    console.log(`6 x ${index} = ${index * 6}`)
  }
}
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
  tablaDelSeis()  
  
let tieneTresDigitos = numero => Math.abs(numero).toString().length === 3
    //Leer un número entero y determinar si tiene 3 dígitos.
    //Escribe tu código aquí,
    // negativos?

console.log(`El número 3 tiene 3 dígitos?: ${tieneTresDigitos(3)}`)
console.log(`El número 13 tiene 3 dígitos?: ${tieneTresDigitos(13)}`)
console.log(`El número 133 tiene 3 dígitos?: ${tieneTresDigitos(133)}`)
console.log(`El número -13 tiene 3 dígitos?: ${tieneTresDigitos(-13)}`)
console.log(`El número -133 tiene 3 dígitos?: ${tieneTresDigitos(-133)}`)

  
let doWhile = numero => (numero + 5) * 8
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.

console.log(`El número 3 aumentado en 5, 8 veces da como resultado: ${doWhile(3)}`)
console.log(`El número 13 aumentado en 5, 8 veces da como resultado: ${doWhile(13)}`)
console.log(`El número 23 aumentado en 5, 8 veces da como resultado: ${doWhile(23)}`)