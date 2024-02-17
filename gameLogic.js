// Determine the winner based on choices
let determineWinner = (playerChoice, computerChoice) => (
    (playerChoice === computerChoice) ? 'Tie' :
    (playerChoice === 'fire' && computerChoice === 'grass') ||
    (playerChoice === 'water' && computerChoice === 'fire') ||
    (playerChoice === 'grass' && computerChoice === 'water') ? 'You Win!' : 'You Lose!'
);

// Display the result
let displayResult = (result, playerChoice, computerChoice) => {
    let resultDisplay = document.querySelector('.resultDisplay');

    switch (result) {
        case 'Tie':
            resultDisplay.textContent = 'Tie';
            break;
        case 'You Win!':
            resultDisplay.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
            break;
        case 'You Lose!':
            resultDisplay.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
            break;
        default:
            console.error('Invalid result');
    }
}

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Function to update the scores and display them
let updateScores = () => {
    let playerScoreDisplay = document.querySelector('.image-score .left h2');
    let computerScoreDisplay = document.querySelector('.image-score .right h2');

    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

// Function to restart the game
let restartGame = () => {
    // Reset scores
    playerScore = 0;
    computerScore = 0;

    // Enable all element buttons
    elementButtons.forEach(function(button) {
        button.disabled = false;
    });

    // Remove the dark overlay
    document.body.classList.remove('overlay');

    // Show the dropdown menu
    let menu = document.querySelector('.menu');
    menu.style.display = 'block';

    // Remove the popup
    let popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }

    // Update scores
    updateScores();
};
