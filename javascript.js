
document.addEventListener('DOMContentLoaded', () => {
    function getComputerChoice() {
        let rand = Math.floor(Math.random() * 3);
        switch(rand) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    }

    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    const selection = document.querySelector('.choices');


    let roundResult = document.querySelector('.round');
    const finalResult = document.querySelector('.finalresult');

    const resetBtn = document.querySelector('.reset');
    let gameOver = false;
    let subtitle = document.querySelector('.subtitle');
    const originalSubtitle = subtitle.textContent;


    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;

    function getHumanChoice() {
        let choice = prompt("What is your choice (rock, paper, or scissors)?");
        return choice;
    }

    function playRound(humanChoice, computerChoice) {
        if (gameOver) {
            return;
        }

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

        if (roundCount >= 5) {
            if (humanScore > computerScore) {
                finalResult.textContent = "You win! Your score was " + humanScore + " and the computer score was " + computerScore + ".";
                finalResult.style.backgroundColor = 'green';
            }
            
            if (humanScore < computerScore) {
                finalResult.textContent = "You lose. Your score was " + humanScore + " and the computer score was " + computerScore + ".";
                finalResult.style.backgroundColor = 'red';
            }
            
            if (humanScore === computerScore) {
                finalResult.textContent = "You tied. Your score was " + humanScore + " and the computer score was " + computerScore + ".";
                finalResult.style.backgroundColor = 'grey';
            }
            roundResult.textContent = '';
            gameOver = true;
        }
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        roundCount = 0;

        roundResult.textContent = '';
        finalResult.textContent = '';
        finalResult.style.backgroundColor = 'white';
        
        subtitle.textContent = originalSubtitle;
        gameOver = false;
    }

    selection.addEventListener('click', (event) => {
        let target = event.target;
        subtitle.textContent = '';

        if (target.classList.contains('rock')) {
            playRound('rock', getComputerChoice());
        } else if (target.classList.contains('paper')) {
            playRound('paper', getComputerChoice());
        } else if (target.classList.contains('scissors')) {
            playRound('scissors', getComputerChoice());
        }
    });

    resetBtn.addEventListener('click', () => {
        resetGame();
    });
});