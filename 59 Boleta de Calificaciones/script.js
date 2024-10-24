function crearInputs(){
    let numAlumnos = document.getElementById("numAsignaturas").value;
    let inputsContainer = document.getElementById("inputsContainer");
    inputsContainer.innerHTML="";
    // document.getElementById("inputsContainer");
    // document.getElementById("calculatBtn").style.display="block";  

    for(let i = 0; i < numAlumnos; i++){
    inputsContainer.innerHTML += `<label>Nota No. ${i+1}:</label><input type="number" class="calificaciones" min="0" max = "100"><br>`;
    }
    document.getElementById("calcularBtn").style.display="block";
}

function calcularPromedio(){
    let calificaciones = document.getElementsByClassName("calificaciones");
    let suma = 0;

    for(let input of calificaciones){
        suma += parseFloat(input.value)
    }
    let promedio = suma / calificaciones.length;
    let resultado = promedio >= 60 ? "Aprobado":"Reprobado";

    document.getElementById("resultado").textContent = `Proedio: ${promedio.toFixed(2)} -${resultado}`;
    }
