class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this._edad = edad
    }
    get edad(){
        return this._edad;
    }
    set edad(valor){
        if(valor > 0){
            this._edad= valor;
        }else{
            alert("La Edad Debe ser un Numero Positivo");
        }
    }
    detalles() {
        return `Nombre ${this.nombre} ${this.edad}`
        
    }
}

const persona = new Persona("Maria", 25);

function mostrarInfo(){
    document.getElementById("infoPersona").textContent = persona.detalles;
}