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

const infoDiv = document.getElementById("infoPersona");

infoDiv.textContent = "Hola"