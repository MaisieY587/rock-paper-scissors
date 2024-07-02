function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3 + 1);
    switch(rand) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What is your choice (rock, paper, or scissors)?");
    return choice;
}

const roundResult = document.querySelector('.round');
const finalResult = document.querySelector('.finalresult');

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        let result = "";

        if (humanChoice === computerChoice) {
            result = "You tied!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            result = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}!`;
            humanScore++;
        } else {
            result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`;
            computerScore++;
        }

        roundResult.textContent = result;
        roundCount++;
        }
        if (roundCount >= 5) {
            if (humanScore > computerScore) {
                finalResult.textContent("You win! Your score was " + humanScore + " and the computer score was " + computerScore + ".");
            }
            
            if (humanScore < computerScore) {
                finalResult.textContent("You lose. Your score was " + humanScore + " and the computer score was " + computerScore + ".");
            }
            
            if (humanScore === computerScore) {
                finalResult.textContent("You tied. Your score was " + humanScore + " and the computer score was " + computerScore + ".");
            }

            humanScore = 0;
            computerScore = 0;
            roundCount = 0;
        }
    }

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});



playGame();

