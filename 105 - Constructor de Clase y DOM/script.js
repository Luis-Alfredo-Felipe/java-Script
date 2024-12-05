class Mascota{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    detalles(){
        return `${this.nombre} es un ${this.tipo}`
    }
}
const mascotas = [];
         registrarMascota
function registrarMascota(){
    const nombre = document.getElementById("nombre").value;
    const  tipo = document.getElementById("tipo").value;

    if (nombre && tipo){
        const nuevaMascota = new Mascota(nombre, tipo);
        mascotas.push(nuevaMascota);
        mostrarMascotas();
    }else{
        alert("Favor llenar los campos");
    }
}

function mostrarMascotas(){
    const lista = document.getElementById("listaMascotas");
    lista.innerHTML = '';
    mascotas.forEach(mascota =>{
        const li = document.createElement("li");
        li.textContent = mascota.detalles();
        lista.appendChild(li);
    })
}