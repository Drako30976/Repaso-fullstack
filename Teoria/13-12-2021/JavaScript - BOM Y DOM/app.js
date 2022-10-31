//--------------------------- DOM y BOM -----------------------------------

//DOM es el document objet model(modelo de objetos del documento), son objetos que tienen relacion con al pagina cargada.
//DOM es un standard, tiene varias vesiones o nveles, la mayoria de los navegadores implementan casi por completo DOM LVL1


//BOM es el browser objet model, hace referencia a las cosas que estan fuera de la pagina, como por ejemplo la ventana o la pantalla, seria todo lo que esta alrededor de el documento ya cargado y forman parte del objeto "window", este objeto tiene informacion sobre el entorno dle navegador(frame, inframe, popup etc...)
//BOM no es un standard, asi qeu algunos objetos estan soportados por la mayoria de los navegadores, aun que otros no

//------------------------practicando BOM---------------------------

console.log(navigator.vendor)   //nos indica el fabricante de la pagina

const success=function(pos){
    const {latitude,longitude}=pos.coords
    console.log({
        latitud:latitude,           //con esta funcion podemos determinar la latitud y long de la pc
        longitud:longitude
    })
}
navigator.geolocation.getCurrentPosition(success)

//---------------------location-------------------------

function redireccion(){
    // location.replace("https://google.com") //replase reemplaza la pagina actual por la que indica como argumento, perdiendo la pagina anterior
    location.assign("https://google.com") // assign nos reemplaza la pagina, igual que replace pero guarda el historial de la pagina anterior.
}

// ----------------------history-------------------

function Ira(){
    history.go(1)  // history nos permite entrar al historial y navegar, la funcion go, nos permite movernos entre las paginas guardadas en el arreglo del historial segun la posicion.
} 

//---------------funciones de tiempo---------------
// setInterval

let segundero=null
function iniciar(){
    segundero=setInterval(function(){
        let seg=new Date().getSeconds()         //al ser una funcion, setinterval nos pide que indiquemos las acciones que realizaremos y antes de cerrar la funcion le indicamos los milisegundos que se ira ejecutando, en este caso es cada segundo
        console.log(seg)
    },1000)
}

// clearInterval

function detener(){
    clearInterval(segundero)
}
// la funcion clearinterval nos pide indicar como parametro aquello que querramos detener, en este caso le enviamos "segundero" que es la variable que va almacenando el valor de los segundos.


// setTimeout

// setTimeout(() => {
//     alert("Se acabo el tiempo")
// },3000);

// la diferencia entre settimeout y setintervale es que timeout se ejecuta una vez segun el tiempo indicado, mientras que intervale se ejecuta cada tiempo indicado

//-----------------------------------------DOM---------------------------------

//para poder seleccionar elementos de nuestro document o html, usamos el metodo "queryselector"

document.querySelector(`h1`).innerText="Hola mundo" // al agregar la propiedad .innertext podemos cambiar el contenido del seleccionr

// en este ejemplo tomamos la etiqueta h1 y cambiamos si contenido, pero que pasa si tenemos mas de 1? en ese caso queryselector seleccionara la primera y aplicara los cambios. ahora debemos aclarar que para js, los elememntos del deocument se denominan nodos y se ordenan en un arreglo, pdoemos verlos usando la propiedad "querySelectorAll" y por lo tanto al ser un arreglo podemos ingresar de manera individual a cada uno de ellos y aplicarle cambios si asi lo deseamos.

//ejemplo

document.querySelectorAll(`p`)[2].innerText="The end is comming!!"

// con queryselecctor tambien podemos seleccionar por id 

document.querySelector("#parrafo").innerText="Seleccionando por id"

//tambien por clases

document.querySelector(".prim").innerText="seleccionando por clase"

//tambien tenemos un seleccionador por clase y por id que son los siguientes

document.getElementsByClassName
document.getElementById

