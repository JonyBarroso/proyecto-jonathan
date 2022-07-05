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

    alert("Felicitaciones! haz creado con exito tu cuenta")
    alert("Bienvenidos")
}

loguearte()
 

function compra(){

    let compra = prompt("Que deseas comprar") 
    if(compra === "geometrico"){
        alert("ud eligio geometrico");
    }else if (compra === "perita"){
        alert("ud eligio perita");
    }else if( compra === "cazuela"){
        alert("ud eligio Cazuela");   
    }else {
        alert("fue añadido a su carrito");
    }

    }
    
