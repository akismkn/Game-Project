// CPU CHOICE 
let getComputerChoice = () => {
    let choices = ['fire', 'water', 'grass'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}
