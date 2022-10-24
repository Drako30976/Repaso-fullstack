// strings
let nombre="mauro"
let apellido="soto"
let frase ="             hola que tal tu como estaaas♪                 "
console.log("mi nombre es:" + nombre +" "+ apellido)

// template string
console.log(`mi nombre es: ${nombre} ${apellido}`)

// metodo strings
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String pagina con todos los metodos
console.log(nombre.toUpperCase) //cambia a mayuscula el contenido de la variable
console.log(nombre.toLowerCase) //cambia a minuscula el contenido de la variable
console.log(nombre.length) //nos devolvera la cantidad de caracteres que tiene la variable
console.log(nombre.charAt(3)) //nos dara el caracter que se encuentra en la posicion indicada, en este caso la 3
console.log(nombre.substr(2,3)) //nos permite substraer la cantidad de caracteres desde la posicion indicada, en este caso desde la posicion 2, 3 caracteres
console.log(nombre.trim()) //quita los espacios en blanco de un string
console.log(nombre.charAt(nombre.length-1)) //obtiene el ultimo caracter del string
console.log(nombre.includes("a")) //nos devuelve true o false, indicando si el valor indicado esta o no en el string, distingue mayusculas y minusculas
console.log(frase.replace("hola","buenas")) //nos permite reemplazar un segmento del string por otro valor indicado
console.log(nombre.slice(1,4)) //similar a substr, pero el resultado es un nuevo string
let letras=apellido.split("") // nos devolvera un arreglo con los elementos separados 
let palabras=["hola","como","estas"]
console.log(palabras.join("-")) // se usa para unir los elementos de un arreglo segun el contenido de join

//---------------------------------------------------------------------------------------------------------------------

// math
let numero=25.65
let numeros=[25,38,852,65419,8416]
let num="25.566"
console.log(Math.floor(numero)) //nos redondea el numero hacia el menor.
console.log(Math.round(numero)) //nos redondea el numero segun el valor decimal
console.log(Math.ceil(numero)) //nos redondea el numero hacia el mayor
console.log(Math.max(25,38,852,65419,8416)) //nos da el numero maximo de la lista
console.log(Math.min(25,38,852,65419,8416)) //nos da el numero minimo de la lista
console.log(parseInt(num)) //convierto el string a entero
console.log(parseFloat(num)) //convierte el string a flotante
let base=numero
let expon=2
console.log(Math.pow(base,expon)) //nos devuelve la base, elevado a la potencia
console.log(Math.sqrt(64)) //nos da la raiz cuadrada del numero indicado
console.log(Math.random()) //nos devuelve un valor aleatorio entre 0 y 1
console.log(Math.round(Math.random()*20)) //nos devolvera valores aleatorios redondeados del 1 al 20
num=parseFloat(num)
console.log(Math.round((num*100)/100)) //nos devolvera un numero con solo 2 digitos decimales
let decimal=parseFloat(num).toFixed(2) //el mismo resultado que el paso anterior pero en forma de string
console.log(parseFloat(decimal)) //con esto pasamos el valor de string del paso an terior a un numero
console.log(numeros.indexOf(38)) //nos devolera el valor de la posicion que se en cuentra el valor que estamos buscando, en caso de no encontrarla devolvera un -1

