// Callbacks
//son funciones que reciben como argumento otras funciones

// function primero() {
// //acciones
// }
// function segundo() {
// //acciones
// }

// primero(segundo(uno.dos))

// Metodos

// let alumnos = [`Mauro`, `Daniel`, `Pedro`, `Lucas`, `Lucas`, `Lucas`];
// let numeros = [50, 22, 35, 48, 281, 51631];

// let busqueda = alumnos.find(function (a) {
//   return a === `Lucas`;
// });
// //el metodo find nos devolvera un positivo si encuentra lo qe estamos buscando, en cambio si no lo encuentra nos devolvera un undefined
// //-------------------------------------------------------------------------------------------------------

// let alumno = alumnos.filter(function (a) {
//   return a === `Lucas`;
// });
// // el metodo filter nos devolera un arreglo con todas las coincidencias que encuentre en el arreglo, es similar a find pero no nos traera solo 1 resultado, sino
// //-------------------------------------------------------------------------------------------------------

// let alumno2 = alumnos.filter(function (a) {
//   return a.includes(`a`);
// });
// //El metodo includes nos devolvera todos los elementos que contengan el valor que indicamos para buscar.
// //-------------------------------------------------------------------------------------------------------

// let cuadrados = numeros.map(function (a) {
//   return Math.pow(a, 2);
// }); //recorrera el arreglo y nos hara otro con los numeros al cuadrado

// alumnos.map(function (a, index) {
//   console.log(`${index + 1} - nombre:${a}`);
// }); // recorrea el arreglo y nos devolvera un mensaje por cada uno, lo que seria index se usa para identificar el indice de cada elemento, es una palabra reservada
// // el metodo map nos sirve para escanear elemento por elemento y nos devuelve un arreglo nuevo
// //-------------------------------------------------------------------------------------------------------
// //-----------ejercicio-----------
// // crear una "aplicacion" para realizar lo siguiente:
// // 1- Agregar peliculas
// // 2- Borrar Peliculas
// // 3- Busque una pelicula
// // 4- Listar peliculas
// let peliculas = [
//   "EL HOMBRE DE LA MASCARA DE HIERRO",
//   "EL HOMBRE DE ACERO",
//   "SPIDERMAN 2",
//   "AVENGERS END GAME",
// ];

// //1 - agregar peliculas

// function agregar() {
//   let titulo = prompt("Ingrese el nombre de la pelicula que desee agregar");
//   while (titulo) {
//     if (buscarpeli(titulo)) {
//       alert("La pelicula ya existe");
//     } else {
//       peliculas.push(titulo.toUpperCase());
//     }
//     titulo = prompt("Ingrese el nombre de la pelicula que desee agregar");
//   }
//   listar(peliculas);
// }

// //4 - listar peliculas

// function listar(a) {
//   if (a.length > 0) {
//     console.log("-----Listado de peliculas-----");
//     a.sort().map(function (item, index) {
//       console.log(`${index} - ${item}`);
//     });
//     console.log("------------------------");
//   } else {
//     console.log("no hay peliculas para listar");
//   }
// }

// //3 - Buscar peliculas

// function filtrar(t = prompt(`Ingrese el termino a buscar`)) {
//   let filtro = peliculas.filter(function (a) {
//     return a.includes(t.toUpperCase());
//   });
//   if (filtro.length > 0) {
//     listar(filtro);
//   } else {
//     console.log("no se encontraron peliculas con este termino");
//   }
// }
// //evaluar si la pelicula ingresada existe - extra-
// const buscarpeli = function (titulo) {
//   let peli = peliculas.find(function (pelicula) {
//     return titulo.toUpperCase() === pelicula.toUpperCase();
//   });
//   if (peli) {
//     return true;
//   } else {
//     return false;
//   }
// };

// //borrar una pelicula

// const borrar = function () {
//   let titulo = prompt("ingrese la pelicula para borrar");
//   let indice = peliculas.indexOf(titulo.toUpperCase());
//   if (indice >= 0) {
//     validar = confirm("Seguro que desea eliminar la pelicula?");
//     if (validar) {
//       peliculas.splice(indice, 1);
//       alert("pelicula borrada");
//     }
//   } else {
//     alert("Pelicula no encontrada");
//   }
// };

//EJERCICIO - REALIZAR UNA FUNCION PARA JUGAR PIEDRA, PAPEL O TIJERAS

let opciones = [`TIJERA`, `PIEDRA`, `PAPEL`];
let jugador = null;
let bot = null;
function optionbot() {
  return Math.round(Math.random() * 2);
}
function tictoc() {
  bot = optionbot();
  jugador = parseInt(prompt("Ingrese: 1 (Piedra) - 2 (Papel) - 3 (Tijera)"));
  if (!jugador) {
    return console.log("Debe ingresar una opcion valida");
  }
  if (jugador >= 0 && jugador <= 2) {
    switch (true) {
      case jugador === 0 && bot === 2:
        alert("ganaste");
        break;
      case jugador === 1 && bot === 0:
        alert("ganaste");
        break;
      case jugador === 2 && bot === 1:
        alert("ganaste");
        break;
      case jugador === bot:
        alert("Empate");
        break;
      default:
        alert("perdiste");
        break;
    }
  } else {
    console.log("el valor ingresado no es valido");
  }
}

//----------------------------------------------------objetos--------------------------------------------
//°Un objeto esta compuesto por propiedades y metodos
//-propiedades: son los datos referidos al objeto
//-metodos: son referidos a las acciones o FUNCIONES que puede ejecutar el objeto

//ejemplo de un objeto

let persona = {
  nombre: "Mauro",
  apellido: "Soto",
  edad: 32,
  profecion: "programador",
  estudiar() {
    console.log(`Hola, soy ${this.nombre} Hoy debo estudiar POO`);
  },
};
// si deseamos acceder al objeto persona debemos hacerlo de la siguiente manera.

persona.nombre;
persona.edad;
persona.estudiar();
// para referrirnos a propiedades del objeto dentro de javascrip usamos la paralabra reservada .this, en cambio en la consola solo llamamos al objeto y su popiedad

// modificando un dato del objeto

persona.edad = 30;
persona.nombre = "Alejandro";

//llamamos a la propiedad y ponemos un nuevo valor, tambien podemos  agregar una propiedad nueva, llamandola por mas que no exista y darle valor

persona.direccion = "Patricias argentinas 123";

//borrar un elemento del objeto

delete persona.direccion;

//usamos la palabra reservada "delete" seguido del elemento que deseamos borrar.

// podemos interar un objeto, osea recorerlo elemento por elemento usando el for in de la siguiente manera

for (const key in persona) {
  console.log(`${key}: ${persona[key]}`);
}

// dentro del for in, tenemos la constante "key" esta hace referencia a cada elemento del objeto, si en el console.log solo pusieramos (`${key}`) solo enviaria el elemento sin su valor, en cambio al llamarlo con los corchetes, hace referencia al valor del elemento

//---------------------------------------------ARREGLOS DE OBJETOS-----------------------------------------
// el siguiente es un ejemplo de un arreglo que contiene varios objetos
let cursos = [
  { id: 1, titulo: "Javascrip para principiantes", precio: 2500 },
  { id: 2, titulo: "HTML introduccion", precio: 1500 },
  { id: 3, titulo: "CSS diseño responsive", precio: 2000 },
  { id: 4, titulo: "Bootstrap 5 grillas responsive", precio: 2100 },
];

//podemos mostrar cada propiedad de los elementos del arreglo de la siguiente manera

cursos.map(function(curso){
  console.log(curso.titulo)
}) //en este caso nos mostrara todos los titulos de cada elemento
