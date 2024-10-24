function multiplicar(){
    /*obtener numeros*/
    let elementoTextoTabla=document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number (textoNumeroTabla);

    /* obtener Lista Ul */
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    /*vaiar tablas antes de ajecutar */
    elementoTablaMultiplicar.innerText="";

    /* Producir Resultados */
    for (x=1; x<10; x++){
        /* Calcular los resultados */
        let numeroResultado = numeroTabla*x;
        /* aramr el String con los resultados */
        // let textoResultado = numeroTabla + " x "+" x "+" = " +numeroResultado;
        let textoResultado = numeroTabla + " x "+ x + " = " + numeroResultado;
        /* Crear un elemento lista */
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }

}