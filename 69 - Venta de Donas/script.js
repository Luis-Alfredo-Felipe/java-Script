function crearTiendas(contenedorID,min,crearTiendas){
    /* Encontrar Contenedor por su ID */
    let elementoContender = document.getElementById(contenedorID);

    /* Loop para crear tantas tiendas como se pidan */
    for(let conteoTiendas = 1; conteoTiendas<=crearTiendas; conteoTiendas++){
        /* Crear texto del label para poder llamar a la funcion */
        let textoEtiqueta = "Tienda" + conteoTiendas;
        /* Crear teindas con crearParrafoTienda */
        let parrafoTienda = crearParrafoTienda(textoEtiqueta,min);
        debugger;
        elementoContender.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel, valorMin){
    /* Crear las etiquetas <p> */
    let elementoParrafo = document.createElement("p");    
    let elementoEtiqueta = document.createElement("label")elementoEtiqueta.innerText = textoLabel + ": ";
}