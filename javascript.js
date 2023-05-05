let playerScore = 0;
let computerScore = 0;


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
let playerSelection = prompt("Please Enter Rock, Paper or Scissors")




function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert(`It's a draw! ${computerSelection} can't beat ${playerSelection}!`)
    updateScore()
  }
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    playerScore++
    alert(`You won! ${playerSelection} beats ${computerSelection}`)
    updateScore()
  }
  if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    computerScore++
    alert(`You lost! ${computerSelection} beats ${playerSelection}!`)
    updateScore()
  }
}

function updateScore(playerScore, computerScore) {
  if (playerScore == 5) {
    alert("You Won!")
  } else if (computerScore == 5) {
    alert("You Lose")
  } else {
    calert("Play More")
  }
}


console.log(playRound(playerSelection, computerSelection))
console.log(playerScore)
