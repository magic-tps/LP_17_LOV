document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    
    // Usamos clientX y clientY para que las coordenadas sean relativas a la ventana
    let x = e.clientX;
    let y = e.clientY;
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 50;
    heart.style.width = 5 + size + 'px';
    heart.style.height = 5 + size + 'px';
    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);
    setTimeout(function() {
        heart.remove();
    }, 1000);
});


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
