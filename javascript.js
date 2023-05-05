let playerScore = 0
let computerScore = 0

function playerSelection() {
  let selection = (prompt("Please Enter Rock, Paper or Scissors")).toLocaleLowerCase;
  return selection
}


function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissors'
  }
}

let computerSelection = getRandomChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = 'tie'
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++
    roundWinner = 'player'
  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerScore++
    roundWinner = 'computer'
  }
  // updateScoreMessage(roundWinner, playerSelection, computerSelection)
}



function isGameOver() {
  return playerScore === 5 || computerScore === 5
}


console.log(playRound(playerSelection(), computerSelection));
