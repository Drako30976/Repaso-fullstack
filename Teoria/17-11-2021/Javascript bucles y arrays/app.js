//BUCLES

//-----------WHILE-------------
//realiza una accion mientras se cumpla una condicion

// while (condition) {
//     acciones
// }

let sumas = 10;
let totals = 0;

while (sumas > 0) {
  totals++;
  sumas--;
  console.log("se ha realizado un proceso");
}
console.log(`se realizaron ${totals} procesos`);

/*
Ejercicio:
ingrese 2 numeros y la operacion para realizar, realizar una estructura switch y realizar la operacion seleccionada
si no es un numero, enviar mensaje de error
si la operacion no esta en la lista mostrar mensaje de error
*/

let num1 = parseInt(prompt("ingrese el primer numero")),
  num2 = parseInt(prompt("ingrese el segundo numero")),
  op = prompt("ingrese la operacion seleccionada: +,-,*,/"),
  r;

if (!isNaN(num1 && num2)) {
  switch (op) {
    case "+":
      r = num1 + num2;
      console.log(`el resultado de la operacion seleccionada es una suma ${r}`);
      break;
    case "-":
      r = num1 - num2;
      console.log(
        `el resultado de la operacion seleccionada es una resta ${r}`
      );
      break;
    case "*":
      r = num1 * num2;
      console.log(
        `el resultado de la operacion seleccionada es una multiplicacion ${r}`
      );
      break;
    case "/":
      r = num1 / num2;
      console.log(
        `el resultado de la operacion seleccionada es una division ${r}`
      );
      break;
    default:
      console.log("la operacion indicada no esta en la lista");
      break;
  }
} else {
  console.log("solo puede ingresar numeros");
}

//---------------------------FOR-----------------------------

// for (let i = 0; i < 10; i++) {
//     acciones
// }

for (let i = 0; i < 10; i++) {
    console.log(`el valor de i es ${i}`)
}
// ---------------------------------------------------------------------
// esta es otra manera de estructurar un for
let i=0
for (; i < 10;) {
    console.log(`el valor de i es ${i}`)
    i++
}
// funciona de la misma manera pero esto es solo en caso de que declaremos la variable con anterioridad, y tambien muestra que podemos usar el incrementador fuera de la estructura

/*
Ejemplo:
ingresar la tabla que queremos calcular y mostrar en consola la tabla
*/

let t=parseInt(prompt("ingrese el valor de la tabla que desea mostrar"))

console.log(`----------TABLA DEL ${t}-----------`)
for (let i=1;i<=10;i++) {
    console.log(`${t} x ${i} = ${t *i}`)
}
console.log("---------------------------------")


//ARREGLOS

//Listas
let alumnos=["Mauro","Mario","Esteban","Lucas","Victor"]
let alumnas=["Daniela","Belen","Ana","Cecilia"]
let numeros=[2,52,45,652,15156,5,15,75510]
//propiedades de los arreglos
console.log(alumnos.length) //nos permite ver la cantidad de elementos del arreglo
console.log(alumnos[2]) //nos indicara el elemento que se encuentre en la posicion indicada
console.log(alumnos[alumnos.length-1]) //nos indicara el ultimo valor del ultimo elemento del arreglo
console.log(alumnos.join(",")) //nos devuelve un STRING de los elementos del arreglo, separados por el indicador
console.log(alumnos.push("Bruno")) //nos permite agregar un elemento al final del arreglo
console.log(alumnos.unshift("David")) //agregara un elemento al comienzo del arreglo
console.log(alumnos.pop()) //nos permitira eliminar el ultimo elemento del arreglo
console.log(alumnos.shift()) //nos permitira elmininar el primer elemento del arreglo
console.log(alumnos.splice(1,1)) //nos permitira eliminar un elemento del arreglo, indicando como primer valor, la posicion y como segundo valor, la cantidad de elementos que deseamos eliminar
console.log(alumnos.indexOf("Esteban")) //nos devolvera como valor la posicion en la que se en cuentra el elemento indicado, en caso de no enocntrarse nos devolvera un -1
console.log(alumnos.includes("Lucas")) //nos permite saber si existe o no un elemento en el arreglo, nos devolvera un booleano
console.log(alumnos.splice(3,1,"Nahuel")) //este manera de usar splice nos permitira modificar un elemento, indicando como primer valor, la posicion, segundo la cantidad que modificariamos y tercero el valor que vamos a colocar
const comision=alumnos.concat(alumnas) //nos permite concatenar varios arreglos, esto nos devolvera otro arreglo que debemos guardar
console.log(comision.sort()) //nos ordenara el arreglo alfabeticamente de A a Z
console.log(comision.reverse()) //invertira el arreglo que indiquemos, como comision ya estaba ordenado alfabeticamente, el resultado ees el orden inverso de Z a A
console.log(numeros.sort(function(a,b){
    return a - b     
})) //esto es algo adelantado ya que vemos funciones, pero es un metodo para comodar los numeros de menor a mayor en un arreglo

//-------INTERACION--------//
// EN ESTE MOMENTO HAREMOS UN PUNTO Y APARTE PARA MOSTRAR COMO ITERAR UN ARREGLO, OSEA RECORRERLO ELEMENTO POR ELEMENTO
//Usando FOR
for (let i = 0; i < alumnos.length; i++) {
    console.log(`Bienvenido ${alumnos[i]}`)
}
//Usando For-OF

for (const alumno of alumnos) {
    console.log(`Bienvenido ${alumno}`)
}

//For of es sintacticamente mas sensillo que un for, el primer elemento que ingresamos es la iteracion, en este caso alumno, que es como llamaremos a cada elemento del arreglo, la segunda, object, es en donde realizaremos la interacion, en este caso en el arreglo alumnos, y para mostrar el mensaje elemento por elemento solo llamamos a alumno, ya que en ese momento tendra el valor de la posicion donde se encuentre el ciclo
