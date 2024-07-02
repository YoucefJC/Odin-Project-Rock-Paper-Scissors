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
    let computerScore = 0;

    function displayRoundResult(result){
        let roundResult = document.querySelector('.round-result');
        roundResult.textContent = result;
    }

    function displayGameResult(result){
        let roundResult = document.querySelector('#winner-container');
        roundResult.textContent = result;
    }

    function displayScore(humanScore, computerScore){
        let humanScoreContainer = document.querySelector('#human-score');
        let computerScoreContainer = document.querySelector('#computer-score');
        humanScoreContainer.innerText = humanScore;
        computerScoreContainer.innerText = computerScore;
    }

    function playRound(humanChoice, computerChoice){

        let humanWin = false;

        displayRoundResult(humanChoice + ' vs ' + computerChoice);
    
        if( humanChoice === computerChoice ){
            
            //displayRoundResult('It\'s a tie!');
            humanScore++;
            computerScore++;
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
                //displayRoundResult('You win the round!');
                humanScore++;
            }
            else{
                //displayRoundResult('You lost the round!');
                computerScore++;
            }
        }
    }

    let rockButton = document.createElement('button');
    let paperButton = document.createElement('button');
    let scissorsButton = document.createElement('button');

    rockButton.value = 'rock';
    rockButton.innerText = 'Rock';

    paperButton.value = 'paper';
    paperButton.innerText = 'Paper';

    scissorsButton.value = 'scissors';
    scissorsButton.innerText = 'Scissors';

    let buttonContainer = document.querySelector('.buttons-container');
    buttonContainer.appendChild(rockButton);
    buttonContainer.appendChild(paperButton);
    buttonContainer.appendChild(scissorsButton);

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
    // and for each one we add a 'click' listener
        button.addEventListener("click", () => {
            playRound(button.value, getComputerChoice());
            displayScore(humanScore, computerScore);

            if( Math.max(humanScore, computerScore) >= 5 ){
                if( humanScore > computerScore ) displayGameResult('You won the game!');
                else if( humanScore < computerScore ) displayGameResult('You lost the game!');
                else displayGameResult('Tied game!');

                buttons.forEach((button) => { button.disabled = true;});
            }
        });
    });

    if( Math.max(humanScore, computerScore) >= 5 ) return 0;
}

playGame();