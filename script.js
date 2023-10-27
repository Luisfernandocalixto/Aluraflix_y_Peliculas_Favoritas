let listaPeliculas = [];
let nombrePelis = [];
function agregarPelicula() {
    let peliFavorita = document.getElementById("pelicula").value;
    let nombrePeli = document.getElementById("nombre").value;
    let peli = document.getElementById("listaPeliculas");
    let errorI = document.getElementById("errorI");

    let img = new Image();
    img.src = peliFavorita;

    img.onload = function () {
        listaPeliculas.push(peliFavorita)
        nombrePelis.push(nombrePeli)

        document.getElementById("pelicula").value = "";
        document.getElementById("nombre").value = "";
        errorI.textContent = ""

        muestraPeliculas();

    }

    img.onerror = function () {
        document.getElementById("pelicula").value = "";
        document.getElementById("nombre").value = "";
        errorI.style.color = "#FF416C"
        errorI.textContent = "Formato no válido"
        nombrePelis.pop();
    }
    errorI.textContent = ""




}

function muestraPeliculas() {
    let mostrar = "";
    for (let i = 0; i < listaPeliculas.length; i++) {
        mostrar += "<img src =" + listaPeliculas[i] + ">" + "<p>" + nombrePelis[i] + "</p>";
    }
    document.getElementById("peliculas").innerHTML = mostrar;

}


function eliminarPelicula() {

    listaPeliculas.pop();
    nombrePelis.pop();
    muestraPeliculas()


}