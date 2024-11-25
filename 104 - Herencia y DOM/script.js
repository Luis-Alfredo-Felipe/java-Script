class Animal{
    constructor(nombre){
        this.nombre O nombre;
    }
    sonido(){
        return `${this.nombre} hace un sonido`
    }
}

class Perro extends Animal{
    ladrar(){
        return `${this.nombre} dice: Guau`;
    }
}
const miPerro = new Perro("Firulais");

const infoDiv = document.getElementById("infoAnimal");

infoDiv.innerHTML = `
<p>${miPerro.sonido()}</p>
<p>${miPerro.ladrar()}</p>
`;