

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

function mostrarTablaConsola(){
    usuarios.forEach(u => {
        console.log("tambien puede ser: "+u["nombre"]);
    })
}

function mostrarElementosClass(){
    let xd = document.getElementsByClassName("ga");
    console.log(xd.length);
    var z =document.getElementsByClassName("establecer")[0];
    for (let j = 0; j < xd.length; j++) {
        var adicionar = document.createElement("p");
        var finalizar = document.createTextNode(xd[j]);
        adicionar.appendChild(finalizar);
        z.appendChild(adicionar);
        console.log(j);
    }
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

