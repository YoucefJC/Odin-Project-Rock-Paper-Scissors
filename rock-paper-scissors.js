
// This function returns a random choice between "rock", "paper" and "scissors"

function getComputerChoice(){
    
    let randomNumber = Math.floor((Math.random() * 100)) % 3;
    console.log(randomNumber);
    let gameChoice = '';
    
    switch( randomNumber ){
        case 0:
            gameChoice = 'rock';
            break;
        case 1:
            gameChoice = 'paper';
            break;
        case 2:
            gameChoice = 'scissors';
            break;
    }

    return gameChoice;
}

console.log(getComputerChoice());