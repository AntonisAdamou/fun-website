// Dynamic Meme API
async function fetchMeme() {
    const memeImg = document.getElementById('meme');
    const response = await fetch('https://meme-api.com/gimme');
    const data = await response.json();
    memeImg.src = data.url;
    memeImg.style.display = 'block';
}

// Motivational Quotes API
async function fetchQuote() {
    const quoteElement = document.getElementById('quote');
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        quoteElement.textContent = `"${data[0].q}" - ${data[0].a}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteElement.textContent = "Failed to load quote. Please try again later.";
    }
}

// Rock, Paper, Scissors Game
function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    document.getElementById('game-result').textContent = `Computer chose ${computerChoice}. ${result}`;
}

// Add Sound Effects to Buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const audio = new Audio('click-sound.mp3');
        audio.play();
    });
});