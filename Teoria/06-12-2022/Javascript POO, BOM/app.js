// --- EJERCICIOS -  LISTAR USUARIOS------
const usuarios = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];
const listarUsers = function (array) {
  console.log("=============Usuarios===========");
  array.map(function (dato) {
    console.log(`Nombre: ${dato.name}`);
    console.log(`Username: ${dato.username}`);
    console.log(`Email: ${dato.email}`);
    console.log(`Nombre: ${dato.address.street}`);
    console.log("================================");
  });
  console.log(`registros: ${array.length}`)
};
listarUsers(usuarios);

//---- BUSCAR USUARIOS -----
const filtrarUsers = function (termino) {
  const encontrado = usuarios.filter(function (user) {
    return user.name.toUpperCase().includes(termino.toUpperCase());
  });
  if (encontrado.length > 0) {
    return listarUsers(encontrado);
  } else {
    return console.warn("Elemento no encontrado");
  }
};

// esta funcion depende tambien de la anterior "listarUsers" para mostrar los usuarios como una lista

//-------------------------------------------POO / OOP --------------------------------------


//es un paradigma de programacion que utiliza la abstraccion para crear MODELOS de objetos, basados en la realidad, con esto podemos conseguir un mejor desarollo de los mismos. sus beneficios son:
// - codigo reutilizable
// - facil de mantener
// - codigo facil de leer
// - desarrollo sensillo
// ejemplo: Pokemon - para poder pasar un poke,pm a la vida real, el elemento principal(refiriendonos a la clase o molde), es "pokemon" y tendria: 
//-propiedades, tambien conocido como atributos, los cuales se componen de un identificador (nombre de la propiedad) y un tipo(tipo de dato)
//-capacidades, hace referencia a los metodos que nos permiten modificar los atriburtos

// ejemplo: 
// Clase o molde: Nombre
// Propiedades: Name:  / Tipo:  / Evolucion: 
// Capacidades: Atacar:  / Evolucionar: 

// los objetos creados con este molde, se consideran "Instancias"

// usando el molde ya indicado creamos una instancia o pokemon
//Clase o molde: Charmander
//Propiedades: Name:Charmander  / Tipo:Fuego  / Evolucion: Charmeleon - Charizard
//Capacidades: Atacar:  / Evolucionar: 

//------------------------------------------------ejemplo practico de POOO-----------------------------------------------------

class Usuario{      //la palabra reservada class se usa para comenzar a armar nuestro molde
  constructor(nombre,username,password){    //constructor es una palabra reservada para crear los elementos del molde
    this.nombre=nombre
    this.username=username        // recordemos que la palabra this se usa para llamar a los elementos dentro del objeto.
    this.password=password
  }
  presentacion(){       //esto serian las capacidades o funciones
    console.log("=====Tarjeta de presentacion======")
    console.log(`Nombre: ${this.nombre}`)
    console.log(`Username: ${this.username}`)

  }
}
// ahora creamos la "instacncia"

const user1=new Usuario(`Mauro`,`Drako1702`,`12345678`) // la palabra reservada new se usa para crear una instancia, donde especificamos la clase que usaremos

const user2=new Usuario(`Paula `,`kuromi`,`1234685`)

// tambien podemos reutilizar el codigo que tenemos, para crear clases que tengan las mimas carecteristicas que una clase ya creada pero con caracteristicas nuevas
class Admin extends Usuario{ // para extraer las caracteristicas de otra clase para usarlas en una nueva, se usa la palabra extended
  constructor(nombre,username,password,puesto,activo=false){
    super(nombre,username,password) // al haber indicado que usaremos las propiedades de otra clase, debemos usar la palabra "super" con los datos que queremos exportar de la otra clase, con eso resumimos ese paso
    this.puesto=puesto
    this.activo=activo
  }
  cambiarActivo(){
    this.activo=!this.activo
  }
  saludarAdmin(){
    super.presentacion() //de esta manera podemos traer tambien los elementos de una funcion y agregarle algo mas
    console.log(`Puesto: ${this.puesto}`)
  }
}

const admin1=new Admin(`Mauro`,`Drako`,`123456`,`Gerente`)
  
//--------------------------ejercicio---------------------------

class Cuenta{
  constructor(titular,saldo=0,){
    this.titular=titular
    this.saldo=saldo
  }
  ingresar(){
    this.saldo=this.saldo+parseInt(prompt("Indique la cantidad a ingresar")) 
  }
  extraer(){
    this.saldo=this.saldo-parseInt(prompt("Indique la cantidad que desee retirar")) 
  }
  informar(){
    console.log("====ESTADO DE CUENTA====")
    console.log(`Titular: ${this.titular}`)
    console.log(`Titular: ${this.saldo}`)
  }
}

const cliente1=new Cuenta(`Mauro Soto`,1000000)