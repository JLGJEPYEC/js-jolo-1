

var usuarios = [];

function cargarTablas (){

    var usuario = {
        "nombre" : "juan lorenzo",
        "ap_paterno" : "gutierrez",
        "ap_materno" : "jorgechagua",
        "correo" : "juanlorenzo_800@hotmail.com",
        "tipo usuario" : "administrador"
    }

    usuarios.push(usuario);

    var usuario = {
        "nombre" : "usuario 1",
        "ap_paterno" : "apu1",
        "ap_materno" : "amu1",
        "correo" : "c1",
        "tipo usuario" : "t1"
    }
    
    usuarios.push(usuario);

    var usuario = {
        "nombre" : "usuario 2",
        "ap_paterno" : "apu2",
        "ap_materno" : "amu2",
        "correo" : "c2",
        "tipo usuario" : "t2"
    }
    
    usuarios.push(usuario);
    
    var usuario = {
        "nombre" : "usuario 3",
        "ap_paterno" : "apu3",
        "ap_materno" : "amu3",
        "correo" : "c3",
        "tipo usuario" : "t3"
    }
    
    usuarios.push(usuario);

    //console.log(usuarios.length);

}

function mostrarTablaDibujada(){
    usuarios.forEach(u => {
        console.log("tambien puede ser: "+u["nombre"]);
    })
}
var h =0;


function mostrarElementosClass(){


    usuarios.forEach(u => {
        var primero, adicionar, finalizar;
        //se abre el bloque
        primero = document.getElementsByClassName("establecer")[0];
        adicionar = document.createElement("p");//se insertan elementos dentro del bloque
        finalizar = document.createTextNode("nombre : "+u["nombre"]);
        adicionar.appendChild(finalizar);
        primero.appendChild(adicionar);//finaliza primer bloque
        adicionar = document.createElement("p");//comienza otro bloque a añadir
        finalizar = document.createTextNode("apellido paterno : "+u["ap_paterno"]);
        adicionar.appendChild(finalizar);
        primero.appendChild(adicionar);//finaliza segundo bloque
    } )
    h++;
    console.log(h);
}



function agregandoDivs(){
    let primero, adicionar, finalizar;
    primero=document.getElementsByClassName("establecer")[0];
    adicionar=document.createElement("div");
    adicionar.className = "dichoso";
    finalizar=document.createTextNode("estableciendose finalmente");
    adicionar.appendChild(finalizar);
    primero.appendChild(adicionar);
}

function restandoDivs(){
    let dr =document.getElementsByClassName("dichoso");
    let cantidades=dr.length;
    let primero,ubicacion;
    if (cantidades>0){
        primero= dr[cantidades-1];
        ubicacion=document.getElementsByClassName("establecer")[0];
        ubicacion.removeChild(primero);
    }else{
        console.log("no hay nada mas a eliminar");
    }
    
}

function restandoTablas(){
    let dr =document.getElementsByTagName("p");
    let cantidades=dr.length;
    console.log(cantidades);
    let primero,ubicacion;
    if (cantidades>0){
        primero= dr[cantidades-1];
        ubicacion=document.getElementsByClassName("establecer")[0];
        ubicacion.removeChild(primero);
    }else{
        console.log("no hay nada mas a eliminar");
        
    }
    usuarios = [];
}





//console.log(usuarios.length);



/* PRIMERA FORMA DE RECORRER UN ARREGLO: LA FUNCION SE CREA APARTE
function imprimirEstados (usuario){
    console.log("el nombre es:"+usuario["nombre"]);
}
usuarios.forEach(imprimirEstados);
*/


//SEGUNDA FORMA DE RECORRER UN ARREGLO: LA FUNCION SE CREA DURANTE

/*
usuarios.forEach(u => {
    console.log("tambien puede ser: "+u["nombre"]);
})

*/

var i =0;
function generarTablaHTML (){
    
    if (i==0){
        var am = document.getElementsByClassName("tabla")[0];
        var adicionar = document.createElement("p");
        var finalizar = document.createTextNode("la tabla ");
        adicionar.appendChild(finalizar);
        am.appendChild(adicionar);
    }
    else if (i==1){
        var am = document.getElementsByClassName("tabla")[0];
        var adicionar = document.createElement("p");
        var finalizar = document.createTextNode("ya ha invocado a la tabla ");
        adicionar.appendChild(finalizar);
        am.appendChild(adicionar);
    }

    i++;

    console.log("el valor de i es: "+i);
    
}

