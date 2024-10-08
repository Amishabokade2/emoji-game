const emojis = ['🐟', '💕', '👑', '🍟', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃'];
let clickedEmojis = [];
let score = 0;
let gameContainer = document.getElementById('gameContainer');
let gameMessage = document.getElementById('gameMessage');
let scoreDisplay = document.getElementById('score');
let loseModal = document.getElementById('loseModal');
let finalScoreDisplay = document.getElementById('finalScore');

function shuffleEmojis() {
    return emojis.sort(() => 0.5 - Math.random());
}

function renderEmojis() {
    gameContainer.innerHTML = '';
    const shuffledEmojis = shuffleEmojis();
    shuffledEmojis.forEach((emoji, index) => {
        const emojiButton = document.createElement('button');
        emojiButton.classList.add('emoji');
        emojiButton.innerText = emoji;
        emojiButton.addEventListener('click', () => handleEmojiClick(emoji));
        gameContainer.appendChild(emojiButton);
    });
}

function handleEmojiClick(emoji) {
    if (clickedEmojis.includes(emoji)) {
        showLoseModal();
        return;
    }

    clickedEmojis.push(emoji);
    score++;
    scoreDisplay.textContent = score;
    renderEmojis();

    if (clickedEmojis.length === emojis.length) {
        gameMessage.textContent = 'Congratulations! You won! 🎉';
        disableGame();
    }
}

function disableGame() {
    const emojiButtons = document.querySelectorAll('.emoji');
    emojiButtons.forEach(button => button.disabled = true);
}

function resetGame() {
    clickedEmojis = [];
    score = 0;
    scoreDisplay.textContent = score;
    gameMessage.textContent = '';
    closeModal();
    renderEmojis();
}

function showLoseModal() {
    finalScoreDisplay.textContent = score;
    loseModal.style.display = 'flex';
    disableGame();
}

function closeModal() {
    loseModal.style.display = 'none';
}

// Initialize the game on page load
renderEmojis();

