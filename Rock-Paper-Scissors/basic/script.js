const choices = ['ROCK', 'PAPER', 'SCISSORS'];
let pScore = 0;
let cScore = 0;
let message = "";

function getComputerChoice(){
  randomN = Math.floor(Math.random() * 3); // Returns a number between 0 - 2
  return choices[randomN];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    message += "Player:" + playerSelection + " - Comp: " + computerSelection + " - ";
    if(playerSelection == computerSelection) { message += "It's a tie!"; }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER") { message += "You lose, paper beats rock"; cScore++;}
    else if(playerSelection == "ROCK" && computerSelection == "SCISSORS") { message += "You Win, rock beats scissors"; pScore++;}
    else if(playerSelection == "PAPER" && computerSelection == "SCISSORS") { message += "You Lose, Scissors beat paper"; cScore++;}
    else if(playerSelection == "PAPER" && computerSelection == "ROCK") { message += "You Win, paper beats rock"; pScore++;}
    else if(playerSelection == "SCISSORS" && computerSelection == "ROCK") { message += "You Lose, rock beats scissors"; cScore++;}
    else if(playerSelection == "SCISSORS" && computerSelection == "PAPER") { message += "You Win, Scissors beat paper"; pScore++;}
    return message;
  }

function game(){
  //const playerSelection = "rock";
  let playerSelection = prompt("Rock, Paper or Scissors?");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log("Player Score: " + pScore + " - Comp Score: " + cScore);
}

for (let i = 0; i < 5; i++) {
  game();
}