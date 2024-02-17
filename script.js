// CPU CHOICE 
let getComputerChoice = () => {
    let choices = ['fire', 'water', 'grass'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// PLAYER CHOICE 
let playerSelection = (buttonNumber) => {
    switch (buttonNumber) {
        case 1 : return 'fire'
        case 2 : return 'water'
        case 3 : return 'grass'
    }
}

// START ROUND 
let roundStart = (buttonNumber) => {
    let playerChoice = playerSelection(buttonNumber);
    let computerChoice = getComputerChoice();

    switch (playerChoice) {
        case 'fire':
            if (computerChoice==='fire'){
                alert('Tie!');
            } else if (computerChoice==='water') {
                alert('You Lose! Water beats Fire');
            } else {
                alert('You Win! Fire beats Grass');
            }
            break;
        case 'water':
            if (computerChoice==='fire'){
                alert('You Win! Water beats Fire');
            } else if (computerChoice==='water') {
                alert('Tie!');
            } else {
                alert('You Lose! Grass beats Water');
            }
            break;
        case 'grass':
            if (computerChoice==='fire'){
                alert('You Lose! Fire beats Grass');
            } else if (computerChoice==='water') {
                alert('You Win! Grass beats Water');
            } else {
                alert('Tie!');
            }
            break;
        default:
            console.error('Invalid player choice');
    }
}

//  Get all elements with the class "elementButton"
var elementButtons = document.querySelectorAll('.elementButton');

// Add an event listener to each button
elementButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        // Pass the button number (index + 1) to roundStart
        roundStart(index + 1);
    });
});