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

let alumnos=[`Mauro`,`Daniel`,`Pedro`,`Lucas`,`Lucas`,`Lucas`]
let numeros=[50,22,35,48,281,51631]

let busqueda=alumnos.find(function (a){
    return a===`Lucas`              
})
//el metodo find nos devolvera un positivo si encuentra lo qe estamos buscando, en cambio si no lo encuentra nos devolvera un undefined
//-------------------------------------------------------------------------------------------------------

let alumno=alumnos.filter(function(a){
    return a===`Lucas`
})
// el metodo filter nos devolera un arreglo con todas las coincidencias que encuentre en el arreglo, es similar a find pero no nos traera solo 1 resultado, sino 
//-------------------------------------------------------------------------------------------------------

let alumno2=alumnos.filter(function(a){
    return a.includes(`a`)
})
//El metodo includes nos devolvera todos los elementos que contengan el valor que indicamos para buscar.
//-------------------------------------------------------------------------------------------------------

let cuadrados=numeros.map(function(a){
    return Math.pow(a,2)
}) //recorrera el arreglo y nos hara otro con los numeros al cuadrado

alumnos.map(function(a,index){
    console.log(`${index+1} - nombre:${a}`)
})// recorrea el arreglo y nos devolvera un mensaje por cada uno, lo que seria index se usa para identificar el indice de cada elemento, es una palabra reservada
// el metodo map nos sirve para escanear elemento por elemento y nos devuelve un arreglo nuevo
//-------------------------------------------------------------------------------------------------------
//-----------ejercicio-----------
// crear una "aplicacion" para realizar lo siguiente:
// 1- Agregar peliculas
// 2- Borrar Peliculas
// 3- Busque una pelicula
// 4- Listar peliculas
let peliculas=["El hombre de la mascara de hierro","El hombre de acero","Spider-man 2","Avengers end Game"]

//1 - agregar peliculas

function agregar(){
    let titulo=prompt("Ingrese el nombre de la pelicula que desee agregar")
    while (titulo) {
        peliculas.push(titulo.toUpperCase())
        titulo=prompt("Ingrese el nombre de la pelicula que desee agregar")
    }
    listar(peliculas)
}

//4 - listar peliculas

function listar(a){
    if (a.length>0) {
    console.log("-----Listado de peliculas-----")
    a.sort().map(function(item,index){
        console.log(`${index} - ${item}`) 
    })
    console.log("------------------------")
    } else{
        console.log("no hay peliculas para listar")
    }
}

//3 - Buscar peliculas

function filtrar(t=prompt(`Ingrese el termino a buscar`)){
    let filtro=peliculas.filter(function(a){
        return a.includes(t)
    })
    if(filtro.length>0){
        listar(filtro)
    }else{
        console.log("no se encontraron peliculas con este termino")
    }
}

//4 - borrar



