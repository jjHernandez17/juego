const jugador = {
    vida : 5,
    miembros: 3,
    mochila: []

};

document.getElementById("vida").innerHTML = vida;



function elegir(decision) {
const animacion = document.getElementById("animacion");
const historia = document.getElementById("historia");
const opciones = document.getElementById("opciones");

if (decision === "supermercado") {
    animacion.src = "../gifs/entrar al supermercado.gif";
    historia.textContent = "Sales de la casa y encuentras un camino misterioso.";
    opciones.innerHTML = `
    <button onclick="elegir('caminar')">Caminar</button>
    <button onclick="elegir('regresar')">Regresar a casa</button>
    `;
}

if (decision === "robar") {
    animacion.src = "../gifs/robar mochila.gif";
    historia.textContent = "Sales de la casa y encuentras un camino misterioso.";
    opciones.innerHTML = `
    <button onclick="elegir('caminar')">Caminar</button>
    <button onclick="elegir('regresar')">Regresar a casa</button>
    `
    
}


}

