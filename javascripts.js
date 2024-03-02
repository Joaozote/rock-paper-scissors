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
let playerScore = 0;
let computerScore = 0;


// let playerSelection = prompt("Play rock, paper or scissor: ").toUpperCase();
let computerSelection = getComputerChoice();
console.log(computerSelection)

const bntRock = document.querySelector("#btnRock");
const bntPaper = document.querySelector("#btnPaper");
const bntScissor = document.querySelector("#btnScissor");
const divResults = document.querySelector("#results")
const buttons = document.querySelectorAll("button")

const pResults = document.createElement("p");
const pWinner = document.createElement("p");
const pScore = document.createElement("p");


divResults.appendChild(pResults);
divResults.appendChild(pScore)
divResults.appendChild(pWinner);



bntRock.addEventListener("click", () => {
    let playerSelection = "ROCK";
    computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection));
})

bntPaper.addEventListener("click", () => {
    computerSelection = getComputerChoice()
    let playerSelection = "PAPER";
    console.log(playRound(playerSelection, computerSelection));
})

bntScissor.addEventListener("click", () => {
    computerSelection = getComputerChoice()
    let playerSelection = "SCISSORS";
    console.log(playRound(playerSelection, computerSelection));

})


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        pResults.textContent = 'It is a TIE!';
        pScore.textContent = "Your Score = " + playerScore + " Computer Score = " + computerScore
    }

    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++;
        pResults.textContent = "You Win! You choose: "+ playerSelection + " and computer choose: " + computerSelection;
        pScore.textContent = "Your Score = " + playerScore + " Computer Score = " + computerScore
    } if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++;
        pResults.textContent = "You Lose! You choose: " + playerSelection + " and computer choose: " + computerSelection;
        pScore.textContent = "Your Score = " + playerScore + " Computer Score = " + computerScore
    }
   
    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach((button) => {
            button.setAttribute('disabled', '');
            button.classList.add('disabled-button', 'opacity');
        });
        if (playerScore === 5) {
            pWinner.textContent = "YOU WIN THE GAME!"
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            pWinner.textContent = "YOU LOSE THE GAME!"
            playerScore = 0;
            computerScore = 0;
        }
    }

}