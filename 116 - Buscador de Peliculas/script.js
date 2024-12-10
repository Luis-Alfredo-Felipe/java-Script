/* Variables */
let selector = document.getElementById("miSelector");
let input = document.getElementById("miInput");
let boton = document.getElementById("miBoton");
let lista = document.getElementById("miListado");

let archivo = 'peliculas.json'

/* Escuchadores*/
selector.addEventListener("change", cambiarArchivo);
selector.addEventListener("cambioModo", mensajeModo);
input.addEventListener("keydown", verificarInput);
boton.addEventListener("click",buscar);



/* funciones */
function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('cambioModo');
    selector.dispatchEvent(evento);

}

function mensajeModo(){
    alert("El archivo de busqueda ahora es: "+selector.value);
}

function verificarInput(evento){
    if((evento.keyCode <65 || evento.keyCode >90) && evento.keyCode != 32 evento.keyCode != 8){
        evento.preventDetaul();
    }
}

function buscar(){
    lista.innerHTML = "";
    fetch(archivo).then(respuesta => respuesta.json).then(function(salida)){
        for (let item of salida.data){
            let p = document.createElement("p");
            p.id=item.nombre;
            p.innerHTML = item.sinopsis;
            p.style.display= "none";

            let li = document.createElement("li");
            li.innerHTML = item.nombre;
            li.addEventListener("mouseover", function(){
                let p = document.getElementById(item.nombre)
                p.style.display = 'block';
            });
        }
    }
}