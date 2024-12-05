class Persona{
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    detalles(){
        return `Nombre: ${this.nombre}, ${this.edad})`
    }

}

const persona = new Persona ("Ana",28);

let infoDiv = document.getElementById("infoPersona");

infoDiv.textContent = persona.detalles();
