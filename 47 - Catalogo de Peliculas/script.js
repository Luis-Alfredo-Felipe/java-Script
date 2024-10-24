function agregarPelicula() {
    let edad = document.getElementById("pelicula").Value;
    let genero = document.getElementById("genero").value;
    let mensaje = "";

    switch (genero) {
        case "comedia":
            if (edad < 13) {
                mensaje = "Si te Gusta la Comedia, te Recomedamos 'Back to the Future'";
            } else if (edad < 16) {
                mensaje = "Si te Gusta la Comedia, te Recomedamos 'The Thruman Show'";
            } else {
                mensaje = "Si te Gusta la Comedia, te Recomedamos 'The Wolf of Wall State'";
            }
            break;

        case "crimen":
            if (edad < 13) {
                mensaje = "No Hay Peliculas Para Crimen";
            } else if (edad < 16) {
                mensaje = "Si te Gusta el Crimen, te Recomedamos 'El Secreto de Tus Ojos'";
            } else {
                mensaje = "Si te Gusta el Crimen, te Recomedamos 'Scarface'";
            }
            break;

        case "drama":
            if (edad < 13) {
                mensaje = "Si te Gusta los dramas, te Recomedamos 'Casa Blanca'";
            } else if (edad < 16) {
                mensaje = "Si te Gusta los dramas, te Recomedamos 'The Shawshank Redemption'";
            } else {
                mensaje = "Si te Gusta los dramas, te Recomedamos 'Requiem for a Dream'";
            }
            break;

        case "musical":
            if (edad < 13) {
                mensaje = "Si te Gusta los musicales, te Recomedamos 'LA LA Land'";
            } else if (edad < 16) {
                mensaje = "Si te Gusta los musicales, te Recomedamos 'Les Miserables'";
            } else {
                mensaje = "Si te Gusta los musicales, te Recomedamos 'The Rocky Horror Picture Show'";
            }
            break;
        default:
            mensaje = "Seleccioa un Genero";
    }
    let catalogo = document.getElementById("catalogo");
    let nuevaPelicula = document.createElement("li");

        nuevaPelicula.textContent = `Para tu edad: ${edad} -Genero": ${genero}. ${mensaje}`;
        catalogo.appendChild(nuevaPelicula);

        document.getElementById("pelicula").value = "";
    
}
