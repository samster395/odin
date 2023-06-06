const choices = ['ROCK', 'PAPER', 'SCISSORS'];
let pScore = 0;
let cScore = 0;

function getComputerChoice(){
  randomN = Math.floor(Math.random() * 3); // Returns a number between 0 - 2
  return choices[randomN];
}

function playRound(playerSelection) {
    let message = "";
    const computerSelection = getComputerChoice();
    playerSelection = playerSelection.toUpperCase();
    message += "Player:" + playerSelection + " - Comp: " + computerSelection + " - ";
    if(playerSelection == computerSelection) { message = "It's a tie!"; }
    else if(playerSelection == "ROCK" && computerSelection == "PAPER") { message += "You lose, paper beats rock"; cScore++;}
    else if(playerSelection == "ROCK" && computerSelection == "SCISSORS") { message += "You Win, rock beats scissors"; pScore++;}
    else if(playerSelection == "PAPER" && computerSelection == "SCISSORS") { message += "You Lose, Scissors beat paper"; cScore++;}
    else if(playerSelection == "PAPER" && computerSelection == "ROCK") { message += "You Win, paper beats rock"; pScore++;}
    else if(playerSelection == "SCISSORS" && computerSelection == "ROCK") { message += "You Lose, rock beats scissors"; cScore++;}
    else if(playerSelection == "SCISSORS" && computerSelection == "PAPER") { message += "You Win, Scissors beat paper"; pScore++;}
    return message;
  }

function game(playerSelection = "ROCK"){
  //const playerSelection = "rock";
  //let playerSelection = prompt("Rock, Paper or Scissors?");
  let response = "";
  response += playRound(playerSelection);
  response += " - Player Score: " + pScore + " - Comp Score: " + cScore;
  console.log(response);
  document.getElementById("response").innerHTML = response;
}