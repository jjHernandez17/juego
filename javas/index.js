const jugador = {
    vida : 5,
    miembros: 3,
    mochila: []

};



document.getElementById("numero-vida").innerText = jugador.vida;
document.getElementById("numero-miembros").innerText = jugador.miembros;
document.getElementById("elementos-mochila").innerText = jugador.mochila;



setTimeout(() => {
    const contenedorHistoria = document.getElementById("historia")
    contenedorHistoria.textContent = "El hambre aprieta y la sed comienza a nublar el juicio del grupo. Es momento de actuar con rapidez, pero también con cautela. ¿Dónde buscar recursos vitales?"
}, 20000);

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
    setTimeout(() => {
        jugador.vida--;
    document.getElementById("numero-vida").innerText = jugador.vida;
    jugador.mochila.push("agua "," comida ")

    document.getElementById("elementos-mochila").innerText = jugador.mochila.join("\n");

    alert("has perdido una vida pero has encontrado comida y agua")
    },4000)
    
}

if (decision === "robar") {
    animacion.src = "../gifs/robar mochila.gif";
    historia.textContent = "jaja";
    opciones.innerHTML = `
    <button onclick="elegir('jaja')">Caminar</button>
    <button onclick="elegir('jaja')">Regresar a casa</button>
    `;
    setTimeout(() => {
        jugador.miembros--;
    document.getElementById("numero-miembros").innerText = jugador.miembros;
    jugador.mochila.push("Linterna")
    document.getElementById("elementos-mochila").innerText = jugador.mochila;
    alert("has perdido una miembro de tu equipo y conseguiste una linterna")
    },7000)

    
}


}

