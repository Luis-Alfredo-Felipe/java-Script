function calcularTotal(){
    let cantidad = document.getElementById("donas").value;
    let precioPorDona=parseFloat(document.getElementById("precio").textContent);
    let total = cantidad * precioPorDona;
    document.getElementById("total").textContent = "total a pagar: $"+total.toFixed(2);
}