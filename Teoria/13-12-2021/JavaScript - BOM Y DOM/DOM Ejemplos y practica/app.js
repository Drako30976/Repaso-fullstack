let contenedor=document.querySelector("#root") //en este paso seleccionamos el contenedor donde vamos a trabajar

let titulo=document.createElement("h1") //en este paso crearmos una variable la cual guardara un elemento que es el que estamos creando, en este caso un h1
titulo.innerText="Ejercicios de DOM" // en este paso le damos contenido a ese elemento creado, usando innertext

// contenedor.appendChild(titulo) // por ulitmo agregamos el elemento creado con su contenido al contenedor, como un hijo, ACLARACION, ESTO ES SOLO PARA 1 HIJO, SI SE NECESITA RENDERIZAR MAS DE 1 SE USA LA PROPIEDAD "append"

//------------------------agregamos una imagen---------------------------

let imagen=document.createElement("img")
imagen.src=`bot-chat-decir-hola-robots-programados-hablar-clientes-linea_68708-622.webp` // con la propiedad src, podemos llamar imagenes, videos o archivos desde una direccion desde un servidor o localmente.
imagen.width="200" // podemos aplicar las paropiedades de las imagenes en js para cambiarlas

//--------------------creando una tabla solamente en js---------------------------

let tabla=document.createElement("table")
tabla.classList="table" //con la propiedad classlist podemos agregar clases de bootstrap a cualquier elemento
tabla.innerHTML=` 
<thead>
<tr>
<th>nombre</th>
<th>Apellido</th>
</tr>
</thead>
<tbody>
<tr>
<td>Pablo</td>
<td>Marino</td>
</tr>
<tr>
<td>Fabrizio</td>
<td>Tonin</td>
</tr>
<tr>
<td>Pablo</td>
<td>Frias</td>
</tr>
</tbody>` // la propiedad innerHTML nos permite agregar codigo de html a JS

contenedor.append(titulo,imagen,tabla) // esta parte de codigo, donde se renderiza todo, siempre debe estar al final, por regla de la cascada
const usuarios = [
    {
      id: 0,
      email: "elmasca_pitos@hotmail.com",
      first_name: "Micho",
      last_name: "Talarga",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 1,
      email: "elmasca_pitos@hotmail.com",
      first_name: "Micho",
      last_name: "Talarga",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 2,
      email: "elmasca_pitos@hotmail.com",
      first_name: "Micho",
      last_name: "Talarga",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 3,
      email: "elmasca_pitos@hotmail.com",
      first_name: "Micho",
      last_name: "Talarga",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 4,
      email: "elmasca_pitos@hotmail.com",
      first_name: "Micho",
      last_name: "Talarga",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 5,
      email: "elmasca_pitos@hotmail.com",
      first_name: "Micho",
      last_name: "Talarga",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 6,
      email: "elmasca_pitos@hotmail.com",
      first_name: "Micho",
      last_name: "Talarga",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 7,
      email: "elmasca_pitos@hotmail.com",
      first_name: "Micho",
      last_name: "Talarga",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 8,
      email: "elmasca_pitos@hotmail.com",
      first_name: "Micho",
      last_name: "Talarga",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
  ];