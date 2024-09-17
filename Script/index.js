
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
