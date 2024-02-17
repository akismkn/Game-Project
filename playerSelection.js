// PLAYER CHOICE 
let playerSelection = (buttonNumber) => {
    switch (buttonNumber) {
        case 1: return 'Fire';
        case 2: return 'Water';
        case 3: return 'Grass';
        default:
            console.error('Invalid buttonNumber');
            return null;
    }
}
