const jugador = {
    vida : 5,
    miembros: 3,
    mochila: []

};



document.getElementById("numero-vida").innerText = jugador.vida;
document.getElementById("numero-miembros").innerText = jugador.miembros;
document.getElementById


function elegir(decision) {
const animacion = document.getElementById("animacion");
const historia = document.getElementById("historia");
const opciones = document.getElementById("opciones");

if (decision === "supermercado") {
    animacion.src = "../gifs/entrar al supermercado.gif";
    historia.textContent = "jaja";
    opciones.innerHTML = `
    <button onclick="elegir('caminar')">Caminar</button>
    <button onclick="elegir('regresar')">Regresar a casa</button>
    `;

    jugador.vida--;
    document.getElementById("numero-vida").innerText = jugador.vida;
}

if (decision === "robar") {
    animacion.src = "../gifs/robar mochila.gif";
    historia.textContent = "jaja";
    opciones.innerHTML = `
    <button onclick="elegir('jaja')">Caminar</button>
    <button onclick="elegir('jaja')">Regresar a casa</button>
    `;

    jugador.miembros--;
    document.getElementById("numero-miembros").innerText = jugador.miembros;
    

    
}


}

