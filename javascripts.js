function getComputerChoice() {
    let n = Math.floor(Math.random() * 3)
    if (n == 0) {
        return 'ROCK';
    } else if (n == 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

let playerSelection = prompt("Play rock, paper or scissor: ").toUpperCase();
const computerSelection = getComputerChoice();
console.log(playerSelection)

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a TIE!';
      }

    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }

}
console.log(playRound(playerSelection, computerSelection));

