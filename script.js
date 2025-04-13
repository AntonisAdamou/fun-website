const memes = [
    "https://i.imgflip.com/4/30b1gx.jpg",
    "https://i.imgflip.com/1bij.jpg",
    "https://i.imgflip.com/26am.jpg"
];

const quotes = [
    "The best way to get started is to quit talking and begin doing. - Walt Disney",
    "Don’t let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown"
];

function generateMeme() {
    const memeImg = document.getElementById('meme');
    const randomIndex = Math.floor(Math.random() * memes.length);
    memeImg.src = memes[randomIndex];
    memeImg.style.display = 'block';
}

function generateQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}