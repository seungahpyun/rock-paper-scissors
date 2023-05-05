// const userChoice = prompt("Rock-Paper-Scissors?");

function getComputerChoice() {
  let RockPaperScissors = ['Rock', 'Paper', 'Scissors'];
  let random = Math.floor(Math.random() * RockPaperScissors.length);
  return RockPaperScissors[random]
}

console.log(getComputerChoice())
