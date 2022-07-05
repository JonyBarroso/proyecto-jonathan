/*  let usuario = prompt("Ingrese su usuario Athena");

while(usuario !=  "jonathan.athena"){
    alert("usuario incorrecto")
    
 usuario = prompt("ingrese su usuario athena")   
}*/

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
