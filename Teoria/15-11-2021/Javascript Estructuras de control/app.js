//Estructuras de control

//-----------if...else-------------

// if (condition) {
//     Acciones para realizar
// } else{
//     Acciones en caso de que no se de la condicion
// }

//ejemplo

let num = 25;
if (num % 2 == 0) {
  console.log("El numero es par");
} else {
  console.log("El numero es impar");
}
if (num % 2 == 0) {
  console.log("El numero es par");
} else if (num % 5 == 0) {
  console.log("El numero es multiplo de 5");
} else {
  console.log("El numero es impar");
}

//ejercicio:
/*solo podran ingresar a la fiesta quienes cumplan las siguientes condiciones:1) mayor de edad (mayor o igual a 18), si es menor debe ir con un tutor mayor de edad*/

let edad = parseInt(prompt("ingrese su edad"));

if (edad >= 18) {
  alert("puedes ingresar a la fiesta");
} else {
  var tutor = confirm("vienes con un tutor?");
  if (tutor == true) {
    alert("puedes ingresar a la fiesta pero quedate cerca de tu tutor");
  } else {
    alert("no puedes ingresar siendo menor de edad y sin tutor");
  }
}

//-------------switch----------------

// switch (key) {
//     case (caso a evaluar):
//         accion a tomar
//         break;

//     case (segundo caso a evaluar):
//         accion a tomar
//         break;

//     default:
//         accion en caso de que no se cumplan las condiciones
//         break;
// }

//Ejemplo

let fruta = prompt(
  "indique la fruta que desee consultar: Manzana, Banana, Pera, Uva, Mango"
);

switch (fruta) {
  case "Manzana":
    console.log("El kilo cuesta $300");
    break;
  case "Banana":
    console.log("El kilo cuesta $250");
    break;
  case "Pera":
    console.log("El kilo cuesta $280");
    break;
  case "Uva":
  case "Mango":
    console.log("El kilo cuesta 350");
    break;
  default:
    console.log("No disponemos de esa fruta en Stock");
    break;
}

//--------------------------------------------------------------------------------------------------------

let dia = new Date().getDay();

switch (dia) {
  case 0:
    console.log("Hoy es Domingo");
    break;
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 2:
    console.log("Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miercoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;
  case 6:
    console.log("Hoy es Sabado");
    break;

  default:
    break;
}

//----------------------------------------------------------------------------------------------
// EN EL SIGUIENTE CASO USAMOS UN VALOR BOOLEANO EN LA CONDICION PARA QUE NOS PERMITA USAR EL SWITCH COMO UN IF

let numero=parseInt(prompt("ingrese un numero"))

switch (true) {
    case num>10&&num<50:
        console.log("el numero es menor que 50")        
        break;
    case num<0:
        console.log("tu numero es negativo")
    default:
        console.log("no me importa el numero")
        break;
}
