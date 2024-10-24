let arreglo = [7,6,8,9,9];

function listarNotas(){
    let lista = document.getElementById("listaNota");
    for(let nota of arreglo){
        let items = document.createElement("li");
        items.innerText=nota;
        lista.appendChild(items)
    }
}

function calcularPromedio(){
    let suma = 0;
    for (i=0; i<5; i++){
        suma += arreglo[i];
    }
    let promedio = (suma/5);
    document.getElementById("promedio").textContent=promedio;
}

function notaMasAlta(){
    let notAlta = 0;
    let i = 0;
    while(i<5){
        if(arreglo[i]>notAlta){
            notAlta = arreglo[i];
        }
        i++;
    }
    document.getElementById("nota").textContent=notAlta;
}

function hayAplazo(){
    let aplazo = "No";
    let i = 0;
    do{
        if(arreglo[i]<6){
            aplazo = "Si";
            break;
        }
        i++;
    }while(i<5);
    document.getElementById("aplazo").textContent=aplazo;
}
