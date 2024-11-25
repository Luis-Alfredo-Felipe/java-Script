function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

let Automovil1 = new Automovil("Ford","Focus","Rojo",2015,"Matias Perez")
let Automovil2 = new Automovil("Chevrolet","Camaro","Amarillo",2018,"Silvina Martinez")
let Automovil3 = new Automovil("Toyota","Corolla","Amarillo",2021,"Carlos Garcia")
let Automovil4 = new Automovil("Mazda","Protege","Negro",2002,"Carlos Fernando")
let Automovil5 = new Automovil("Dodge","Camaro","Gris",2024,"Marcelo Torres")

let automoviles = [Automovil1, Automovil2, Automovil3, Automovil4, Automovil5];

Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = new nuevoTitular;
}

Automovil.prototype.encender = function(){
    alert("El Automovil fue Encendido");
}

Automovil.prototype.verAutomovil = function(){
    return `${this.marca} ${this.modelo},${this.anio},${this.titular}`
}

function mostrarAumotoviles(){
    let lista = document.getElementById("listaAutomoviles");
    for(let automovil of automoviles){
        let item = document.createElement("li");
        item.innerText = automovil.verAutomovil();
        lista.appendChild(item);
    }
}


