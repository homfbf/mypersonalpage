const keys = document.querySelectorAll('.key');

const sounds = {
    'A': 'sounds/piano.mp3',
    'S': 'sounds/drum.mp3',
    'D': 'sounds/guitar.mp3',
    'F': 'sounds/bass.mp3'
};

// Відтворення звуку
function playSound(key) {
    const audio = new Audio(sounds[key]);
    audio.play();
}

// Обробка натиснень на екран
function handleKeyClick(event) {
    const key = event.currentTarget.getAttribute('data-key');
    playSound(key);
    event.currentTarget.classList.add('playing');
    setTimeout(() => event.currentTarget.classList.remove('playing'), 100);
}

// Обробка натискання на клавіатуру
function handleKeyPress(event) {
    const key = event.key.toUpperCase();
    if (sounds[key]) {
        const keyDiv = document.querySelector(`.key[data-key="${key}"]`);
        playSound(key);
        keyDiv.classList.add('playing');
        setTimeout(() => keyDiv.classList.remove('playing'), 100);
    }
}

// Додавання обробників подій
keys.forEach(key => key.addEventListener('click', handleKeyClick));
window.addEventListener('keydown', handleKeyPress);
