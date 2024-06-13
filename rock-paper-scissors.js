// Rock, paper, scissors game with the computer

function getTextChoice(number){

    switch( number ){
        case 1:
            Choice = 'rock';
            break;
        case 2:
            Choice = 'paper';
            break;
        case 3:
            Choice = 'scissors';
            break;
    }

    return Choice;
}

// Returns a random choice between "rock", "paper" and "scissors"
function getComputerChoice(){
    
    let randomNumber = Math.floor((Math.random() * 100)) % 3 + 1;
    let gameChoice = getTextChoice(randomNumber);

    return gameChoice;
}

//Returns the choice of the human player
function getHumanChoice(){

    //Suggest 3 possibles choices to the player
    //Ask the player to choose one choice by typing in a number between 1 and 3
    let humanNumber = parseInt(prompt('Your move! Type in "1" for "rock", "2" for "paper" or "3" for "scissors":'));

    //Check if the input is valid

    while( humanNumber < 1 || humanNumber > 3 ){
        
        humanNumber = parseInt(prompt('Invalid choice. Please try again. Type in "1" for "rock", "2" for "paper" or "3" for "scissors":'));
    }

    if( !humanNumber ){
        console.log('Empty input. The game generated a random choice for you.')
        humanNumber = Math.floor((Math.random() * 100)) % 3 + 1;
    }

    //Return the game choice related to the chosen number

    let humanChoice =  getTextChoice(humanNumber);
    return humanChoice;
}



console.log(getHumanChoice());