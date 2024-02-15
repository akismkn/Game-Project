/* CPU CHOICE */
let getComputerChoice = () => {
    let choices = ['fire', 'water', 'grass'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

/* PLAYER CHOICE */
let playerSelection = () => {
    let choice;
    do {
        choice = prompt('Enter your choice (fire, water, or grass):');
        choice = choice.toLowerCase();
        if (choice === 'fire' || choice === 'water' || choice === 'grass') {
            return choice;
        } else {
            alert('Invalid choice. Please enter fire, water, or grass.');
        }
    } while (true);
}

/* START ROUND */
let roundStart = () => {
    let playerChoice = playerSelection();
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
