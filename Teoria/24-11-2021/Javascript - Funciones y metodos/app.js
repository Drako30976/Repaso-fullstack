//Funciones

//----declarativas----
// Se llaman declarativas ya que le damos un nombre a la funcion, en este caso "saludar"

function saludar(nombre) {
    //acciones
    console.log("Hola como estas",nombre)
}
let persona = "Mauro"
saludar(persona)

//----Anonimas----
// Estas funciones no tienen un nombre pero se declaran dentro de una constante la cual si tiene un nombre.

const saludar2=function () {
    //acciones
    let nombre="Mauro"
    console.log(`Bienvenido ${nombre}`)
}
saludar2()

//------------otra manera de declararlo es-------------
const saludar3=function (nombre) {
    //acciones
    // let nombre="Mauro"
    console.log(`Bienvenido ${nombre}`)
}
saludar3("Mauro")

//---------------------------------ejemplos-------------------------

let num1=45
let num2=26

function suma(){
    console.log(num1+num2)
}

//esta funcion usa las variables declaradas anteriormente para poder realizar su trabajo

//---------------------------------------------------------------

function suma2(a,b) {
    console.log(a+b)
}
suma2(72,27)

// esta funcion usa parametros, que son los que van entre parentecis, y esos parametros toman el valor que ingresa al final de la funcion, estos pueden variar por lo que hace nuestra funcion mas variable

// Scope

// ----Scope local-----

let numero1=50
let numero2=70

function sumar() {
    let numero1=32
    let numero2=20
    console.log(numero1+numero2)
}
sumar()
// como vemos el resultado de la funcion sumar es 52, que corresponde a los valores dentro de la funcion, es por que la proridad para la funcion, son los valores dentro de la misma, por ende toma primero las variables ya declaradas

// ---- Scope Global
function sumar2() {
    console.log(numero1+numero2)
}
sumar2()

// en este caso al no tener variables declaradas dentro de la funcion, buscara de manera global las variables declaradas.

// Return

// hace referencia al valor que deseamos retornar, similar al console.log, pero tambien le indica a la funcion que debe finalizar su trabajo en ese punto.

function obtenerPar(num) {
    if (num%2===0) {
    return `El numero es par`        
    } else {
        return `El numero es impar`
    }
}
obtenerPar()

//------ejercicio------
//or logico se hace con alt + 124

let valor1=parseInt(prompt("Ingrese el primer valor"))
let valor2=parseInt(prompt("Ingrese el segundo valor"))

function calculadora(num1,num2) {
    if (!num1 || !num2) {
        return "el valor ingresado no es correcto"
    } 
    let operacion=prompt("ingrese la operacion +,-,*,/")

    switch (operacion) {
        case "+":
        return num1+num2
        case "-":
            return num1-num2
            case "*":
                return num1*num2
                case "/":
                    return num1/num2
    
        default:
            return "operacion invalida"
    }
}
const resultado=calculadora(valor1,valor2)
console.log(resultado)

//-----------------ejercicio de while----



function calcularTabla() {
    let tabla = parseInt(prompt("ingrese la tabla a calcular"))
    while (!isNaN(tabla)) {
        console.log(`=======Tabla del ${tabla}=========`)
        for (let i = 0; i <=10; i++) {
            console.log(`${tabla} x ${i} = ${tabla*i}`)
        }
        console.log("==========================")
        tabla = parseInt(prompt("ingrese la tabla a calcular"))

    }
}
const result=calcularTabla()
console.log(result)