


let isPlaying = false;
const music = document.getElementById('romanticMusic');
const button = document.querySelector('.romantic-button');

function toggleMusic() {
    if (isPlaying) {
        music.pause();
        button.innerHTML = "💖 Reproducir Música";
    } else {
        music.play();
        button.innerHTML = "💖 Pausar Música";
    }
    isPlaying = !isPlaying;
}

// Mostrar la carta romántica
function showLetter() {
    document.getElementById('romanticLetter').style.display = 'flex';
}

// Cerrar la carta romántica
function closeLetter() {
    document.getElementById('romanticLetter').style.display = 'none';
}

// Escuchar el evento de clic en el botón de cierre
document.getElementById('closeButton').addEventListener('click', closeLetter);

// Escuchar la tecla 'Esc' para cerrar el modal
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") { // Verifica si se presionó la tecla 'Esc'
        closeLetter();
    }
});
