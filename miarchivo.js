/*  let usuario = prompt("Ingrese su usuario Athena");

while(usuario !=  "jonathan.athena"){
    alert("usuario incorrecto")
    
 usuario = prompt("ingrese su usuario athena")   
}*/

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
    
}


alert("Bienvenido a Athena.Deco, para realizar una compra debes loguearte")

do{
    loguearte()
    if(confirm("¿Desea realizar una compra?"))
    compra()
 }
 while(confirm(`presione ACEPTAR para loguear un usuario o CANCELAR para salir`))

 

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
 
 */

/* class Mate{
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
     */




    alert("Bienvenido a Athena.Deco, para realizar una compra debes loguearte") 

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

    console.log(carrito);