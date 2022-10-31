let contenedor=document.querySelector("#root") //en este paso seleccionamos el contenedor donde vamos a trabajar

let titulo=document.createElement("h1") //en este paso crearmos una variable la cual guardara un elemento que es el que estamos creando, en este caso un h1
titulo.innerText="Ejercicios de DOM" // en este paso le damos contenido a ese elemento creado, usando innertext

contenedor.appendChild(titulo) // por ulitmo agregamos el elemento creado con su contenido al contenedor, como un hijo

//continua en 1.12