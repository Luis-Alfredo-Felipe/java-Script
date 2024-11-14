/* clase estudiantes con atributos y metodos */
class Estudiante {
  constructor(nombre, edad, curso) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
  }

  mostrarInfo() {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`;
  }

  actualizarCurso() {
    this.curso = nuevoCurso;
  }
}

/* Array para almacenar a los estudiantes */
let estudiante = [];

/* Funcion para agregar nuevo estudiantes */{klñ}
function agregarEstudiante() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const curso = document.getElementById("curso").value;

  if (nombre && edad && curso) {
    const estudiante = new Estudiante(nombre, edad, curso);
    estudiantes.push(estudiante);
    mostrarEstudiantes();

    /* limpair campos de entrada */
    document.getElementById("nombre").value = " ";
    document.getElementById("edad").value = " ";
    document.getElementById("curso").value = " ";
  }else{
    alert("Por favor, completa todos los campos");
  }
}

/* funcio pra mostrar la lista de estudiantes en el dom */
function mostrarEstudiantes(){
  const listaEstudiantesDiv = document.getElementById("listaEstudiantes");
  listaEstudiantesDiv.innerHTML = '';
  
  estudiantes.forEach((estudiante, index)=>{
    const estudianteDiv = document.createElement("div");
    estudianteDiv.className = "estudiante";
    estudianteDiv.innerHTML = `<p> ${estudiante.mostrarInfo()}</p>
    <button onclick = "acualizarCursoEstudiante(${index})">Actualizar Curso</button>`;

  listaEstudiantesDiv.appendChild(estudianteDiv);
});
}

function actualizarCursoEstudiante(index){
  const nuevoCurso = prompt("Ingrese el nuevo curso para el estudiante");
  if(nuevoCurso){
    estudiantes[index].actualizarCurso(nuevoCurso);
    mostrarEstudiantes();
  }
}






/* Funcion para actualizar el curso de un estudiante especifdifo */