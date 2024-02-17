// PLAYER CHOICE 
let playerSelection = (buttonNumber) => {
    switch (buttonNumber) {
        case 1: return 'fire';
        case 2: return 'water';
        case 3: return 'grass';
        default:
            console.error('Invalid buttonNumber');
            return null;
    }
}
