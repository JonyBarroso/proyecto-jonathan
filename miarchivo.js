/*  let usuario = prompt("Ingrese su usuario Athena");

while(usuario !=  "jonathan.athena"){
    alert("usuario incorrecto")
    
 usuario = prompt("ingrese su usuario athena")   
}*/

 /* alert("Bienvenido a Athena.Deco, para realizar una compra debes loguearte") 

function loguearte(){

    let nombre;

    let nombreStorage = sessionStorage.getItem("nombre");

    if(nombreStorage){
        nombre = nombreStorage;
        let mensaje = `Bienvenido/a ${nombre}`;
        alert(mensaje)
    }else{
        nombre = prompt("ingrese su nombre");
        sessionStorage.setItem("nombre", nombre);

        let email = prompt("ingrese su mail");
        let contraseña = prompt("ingrese su contraseña");

        alert("Felicitaciones, haz creado tu cuenta con exito");
        alert(`Bienvenido/a ${nombre}`)
    
    }
    

const login = new Usuario(nombre, email, contraseña);

usuarios.push(login);

const mensaje = `Cuenta registrada con exito: \nNombre: ${login.nombre} \nEmail: ${login.email} \nContraseña: ${login.contraseña}`;
alert(mensaje);
}

loguearte()
 

 */

 



alert("Bienvenido a Athena.Deco, para realizar una compra debes loguearte")
function loguearte(){

    let usuario = {
    nombre: prompt("Ingrese su nombre"),
    email: prompt("Ingrese su email"),
    contrasenia: prompt("Ingrese su contrasenia"),
    }

    /* let nombre = usuario.nombre;
    let email = usuario.email;
    let contrasenia = usuario.contrasenia; */

    let {nombre, email, contrasenia} = usuarioNuevo;



    const usuarioNuevo = () => {

    usuario === ("nombre", "email", "contrasenia") ? console.log(alert("Felicitaciones! Haz creado con exito tu cuenta, Bienvenido")) : console.log(alert("ud ha ingresado una forma incorrecta alguno de los datos"));


    
}
}
    
loguearte()

const carrito = [];

let mates
let entrada = prompt("Ingrese el nombre del producto que sea comprar o escriba ESC para salir:\nMATE GEOMETRICO\nMATE PERITA FINO\nMATE PERITA COMUN\nCAZUELA GRANDE\nCAZUELA MEDIANA\nCAZUELA CHICA\nMATE LISO SIN PINTAR").toUpperCase()

  

function compra(){

    let compra = prompt("Que deseas comprar") 
    if(compra === "geometrico"){
        alert("ud eligio geometrico")
        alert("fue añadido a su carrito");
    }else if (compra === "perita"){
        alert("ud eligio perita")
        alert("fue añadido a su carrito");
    }else if( compra === "cazuela"){
        alert("ud eligio Cazuela")
        alert("fue añadido a su carrito");   
    }else {
        alert("fue añadido a su carrito")
        alert("su compra ha sido realizada con exito");
    }

    }

compra()    
 
/* function vender(){
 
    class Mate{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    
    vender(){
        this.vendido = true;
    }
}

let  productos = [];
    productos.push(new Mate("Mate Geometrico", 900))
    productos.push(new Mate("Mate Perita Fino", 850))
    productos.push(new Mate("Mate Perita", 850))
    productos.push(new Mate("Cazuela", 850))

        for (const item of productos){
        if(item.nombre === "Cazuela"){
            item.vender()
        }
}
        console.log(productos);
}
vender()
     

  */


   /*  alert("Bienvenido a Athena.Deco, para realizar una compra debes loguearte") 

        function loguearte(){

        let nombre = prompt("Ingrese su nombre");

        let email = prompt("Ingrese su mail");

        let contraseña = prompt("Ingrese su contraseña");

        if(nombre && email && contraseña){
        alert("Felicitaciones! Haz creado con exito tu cuenta, Bienvenido")
        }else if (!nombre || !email || !contraseña){
        alert("ud ha ingresado una forma incorrecta alguno de los datos")
        }
    
}  compra = prompt("¿Desea realizar una compra?")

    
        loguearte()
    

    const productos = [
        {id:1, nombre: "Mate Geometrico", precio: 1100},
        {id:2, nombre: "Mate Perita Fino", precio: 1000},
        {id:3, nombre: "Mate Perita Comun", precio: 1000},
        {id:4, nombre: "Cazuela Grande", precio: 1100},
        {id:5, nombre: "Cazuela Mediana", precio: 1000},
        {id:6, nombre: "Cazuela chica", precio: 900},
        {id:7, nombre : "Mate Liso sin pintar", precio: 600}
        

    ]
    const carrito = [];

        let mates
        let entrada = prompt("Ingrese el nombre del producto que sea comprar o escriba ESC para salir:\nMATE GEOMETRICO\nMATE PERITA FINO\nMATE PERITA COMUN\nCAZUELA GRANDE\nCAZUELA MEDIANA\nCAZUELA CHICA\nMATE LISO SIN PINTAR").toUpperCase()

    while (entrada != "ESC"){
        mates = mates.find(item => item.nombre = entrada);
        carrito.push(mates);
        entrada = prompt("Ingrese el nombre del producto que sea comprar o escriba ESC para salir:\nMATE GEOMETRICO\nMATE PERITA FINO\nMATE PERITA COMUN\nCAZUELA GRANDE\nCAZUELA MEDIANA\nCAZUELA CHICA\nMATE LISO SIN PINTAR").toUpperCase()
   
    }

    alert("El producto seleccionado ha sido añadido a su carrito")

    console.log(carrito);   */
/* 
    alert("Bienvenido a Athena.Deco, para realizar una compra debes loguearte") 

function loguearte(){

    let nombre;

    let nombreStorage = sessionStorage.getItem("nombre");

    if(nombreStorage){
        nombre = nombreStorage;
        let mensaje = `Bienvenido/a ${nombre}`;
        alert(mensaje)
    }else{
        nombre = prompt("ingrese su nombre");
        sessionStorage.setItem("nombre", nombre);

        let email = prompt("ingrese su mail");
        let contraseña = prompt("ingrese su contraseña");

        alert("Felicitaciones, haz creado tu cuenta con exito");
        alert(`Bienvenido/a ${nombre}`)
    
    }
    

const login = new Usuario(nombre, email, contraseña);

usuarios.push(login);

const mensaje = `Cuenta registrada con exito: \nNombre: ${login.nombre} \nEmail: ${login.email} \nContraseña: ${login.contraseña}`;
alert(mensaje);
}
 
loguearte()
 */

/*  alert("Bienvenido a Athena.Deco, para realizar una compra debes loguearte");
function loguearte(){

    let nombre;
    let nombreStorage = sessionStorage.getItem("nombre");

    if(nombreStorage){
    let nombre = nombreStorage;
    let mensaje = `Bienvenid@ ${nombre}`;
     alert(mensaje);
    }else{
        nombre = prompt("ingrese su nombre");
        sessionStorage.setItem("nombre", nombre);

        let email = prompt("ingrese su mail");
        let contraseña = prompt("ingrese su contraseña");

        alert("Felicitaciones, haz creado tu cuenta con exito");
        alert(`Bienvenido/a ${nombre}`)
    
   


 boton.addEventListener("click", () => console.log("click"));
setTimeout(() => {
   sessionStorage.clear(); 
}); 

}
}
loguearte();




    let contenedor = document.getElementById("proyecto");
    let mates = [
        {id: 1, nombre: "Mate Geometrico", precio: 1100},
        {id: 2, nombre: "Mate Perita Fino", precio: 1000},
        {id: 3, nombre: "Mate Perita Comun", precio: 1000},
        {id: 4, nombre: "Cazuela", precio: 1100},
    ];

    for(const producto of mates){
        let li = document.createElement("li");
        li.innerHTML = `<h2>ID: ${producto.id}</h2>
                        <p>Nombre: ${producto.nombre}</p>
                        <b>$ ${producto.precio}</p>
                        <img src= ${producto.img}>
                        `;
        contenedor.append(li);               
    }
  */
 
/* let boton = document.getElementById("btnPrincipal")
let saludo = document.getElementById("saludo")

boton.addEventListener("mousedown", () =>{
    saludo.className = "amarillo";
});
boton.addEventListener("mouseup", () =>{
    saludo.className = "azul";
});
boton.addEventListener("mouseout", () =>{
    saludo.className = "verde";
}); */

/* let saludo = document.getElementById("saludo")
let nombre = document.getElementById("nombre")

nombre.addEventListener("keydown", (e) => {
    if(e.key === "a"){
    saludo.className = "amarillo";
}else if (e.key === "e"){
    saludo.className = "azul";
}else{
    saludo.className = "verde";
}
});


 */

