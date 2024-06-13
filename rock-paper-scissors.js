// Rock, paper, scissors game with the computer

function getTextChoice(number){

    switch( number ){
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
        default:
            choice = 'scissors';
            break;
    }

    return choice;
}

// Returns a random choice between "rock", "paper" and "scissors"
function getComputerChoice(){
    
    let randomNumber = Math.floor((Math.random() * 100)) % 3 + 1;
    let computerChoice = getTextChoice(randomNumber);

    return computerChoice;
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





function playGame(){

    let humanScore = 0;
    let ComputerScore = 0;

    function playRound(humanChoice, computerChoice){

        let humanWin = false;
    
        if( humanChoice === computerChoice ){
            console.log('It\'s a tie! You both chose ' + humanChoice + '!');
            humanScore++;
            ComputerScore++;
        }
        else{
            switch( humanChoice ){
                case 'rock':
                    if( computerChoice == 'scissors') humanWin = true;
                    break;
                case 'paper':
                    if( computerChoice == 'rock') humanWin = true;
                    break;
                case 'scissors':
                    if( computerChoice == 'paper') humanWin = true;
                    break;
            }
    
            if( humanWin ){
                console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
                humanScore++;
            }
            else{
                console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
                ComputerScore++;
            }
        }
    }

    for(i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log(' You: ' + humanScore + ', Computer: ' + ComputerScore);
    }

    if( humanScore > ComputerScore ) console.log(' You won the game!');
    else if( humanScore < ComputerScore ) console.log(' You lost the game!');
    else console.log('Tied game!');
}

playGame();