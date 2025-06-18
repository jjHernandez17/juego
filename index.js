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
}