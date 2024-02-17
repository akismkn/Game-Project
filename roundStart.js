// START ROUND 
let roundStart = (buttonNumber) => {
    // Hide the dropdown menu after the first round
    let menu = document.querySelector('.menu');
    menu.style.display = 'none';

    // Get the selected points from the dropdown
    let selectedPoints = parseInt(document.getElementById('pointsDropdown').value);

    // Get player and computer choices
    let playerChoice = playerSelection(buttonNumber);
    let computerChoice = getComputerChoice();

    // Determine the winner and display the result
    let result = determineWinner(playerChoice, computerChoice);
    displayResult(result, playerChoice, computerChoice);

    // Update scores based on the result
    if (result === 'You Win!') {
        playerScore++;
    } else if (result === 'You Lose!') {
        computerScore++;
    }

    // Display the result and update scores
    displayResult(result, playerChoice, computerChoice);
    updateScores();

    // Disable all element buttons if the selected points are reached
    if (playerScore === selectedPoints || computerScore === selectedPoints) {
        elementButtons.forEach(function(button) {
            button.disabled = true;
        });

        // Add a dark overlay to the body
        document.body.classList.add('overlay');

        // Display the result in a popup box
        let popup = document.createElement('div');
        popup.classList.add('popup');
        popup.innerHTML = `<p>${result}</p><button onclick="restartGame()">Play Again</button>`;
        document.body.appendChild(popup);
    }
}
