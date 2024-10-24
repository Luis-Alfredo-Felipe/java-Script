function mostrarResultado(resultado){
    event.preventDefault;
    document.getElementById("resultado").value = resultado;
}

function suma(){
    event.preventDefault();
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1+numero2);
}

function resta(){
    event.preventDefault();
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1-numero2);
}

function multiplicacion(){
    event.preventDefault();
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1*numero2);
}

function division(){
    event.preventDefault();
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1/numero2);
}

function raiz(){
    event.preventDefault();
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.sqrt(numero));
}

function absoluto(){
    event.preventDefault();
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.abs(numero));
}

function potencia(){
    event.preventDefault();
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(numero1,numero2));
}

function aleatorio(){
    event.preventDefault();
    let minimo = +document.getElementById("campo1").value;
    let maximo = +document.getElementById("campo2").value;
    maximo = maximo + 1;
    mostrarResultado(Math.floor(Math.random()*(maximo-minimo)+minimo));
}

function redondeo(){
    event.preventDefault();
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.round(resultado));
}

function techo(){
    event.preventDefault();
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.ceil(resultado));
}

function piso(){
    event.preventDefault();
    let resultado = +document.getElementById("resultado").value;
    mostrarResultado(Math.floor(resultado));
}