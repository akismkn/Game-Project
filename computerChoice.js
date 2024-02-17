// CPU CHOICE 
let getComputerChoice = () => {
    let choices = ['Fire', 'Water', 'Grass'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
