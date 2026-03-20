//  passwd() corregida: alert
function passwd(){
    alert("Did you really think I was going to tell you my password that easily?")
}

//  Array de juegos con rutas relativas correctas
const juegos = [
    { nombre: "🐍 Snake", ruta: "../games/snake/index.html" },
    { nombre: "Pacman", ruta: "../games/pacman/index.html" },
    { nombre: "🧱 Tetris", ruta: "../games/tetris/index.html" }
];

// Generación de tarjetas con DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("lista-juegos");
    
    juegos.forEach(juego => {
        const tarjeta = document.createElement("a");
        tarjeta.className = "game-card";
        tarjeta.href = juego.ruta;
        tarjeta.target = "_blank";
        tarjeta.innerHTML = `
            <h4>${juego.nombre}</h4>
            <p>Click to play</p>
        `;
        contenedor.appendChild(tarjeta);
    });
});
