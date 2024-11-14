let empleados = []

function Empleado(identificador, nombre, apellido, nacimiento, cargo){
this.identificador = identificador;
this.nombre = nombre;
this.apellido = apellido;
this.nacimiento = nacimiento;
this.cargo = cargo;
}

function agregarEmpleado(){
    let identificador = document.getElementById("txtIdentificador").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let nacimiento = document.getElementById("txtNacimiento").value;
    let cargo = document.getElementById("txtCargo").value;   

    let empleado = new Empleado(identificador, nombre, apellido, nacimiento, cargo);
    empleados.push(empleado);

    alert("Empleado Agreado Exitosamente");
    limpiarCampos();
}

    function mostrarEmpleado(){
        let listado = '';
        for(empleado of empleados){
            for(let prop in empleado){
                listado += prop.toUpperCase()+": "+ empleado[prop]+" ,"
            }
            listado += "\n";
        }
        alert(listado);
    }

    function limpiarCampos(){
        document.getElementById("txtIdentificador").value = "";
        document.getElementById("txtNombre").value = "";
        document.getElementById("txtApellido").value = "";
        document.getElementById("txtNacimiento").value = "";
        document.getElementById("txtCargo").value = "";   
    }
