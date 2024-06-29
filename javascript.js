let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3 + 1)
    switch(rand) {
        case 1:
            return "rock"
            break
        case 2:
            return "paper"
            break
        default:
            return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("What is your choice (rock, paper, or scissors)?")
    return choice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("You tied!")
        }
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!")
            humanScore++
        }
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock!")
        }
    }
    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock!")
            humanScore++
        }
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper!")
            computerScore++
        }
        if (computerChoice === "paper") {
            console.log("You tie!")
        }
    }
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors!")
            computerScore++
        }
        if (computerChoice === "scissors") {
            console.log("You tie!")
        }
        if (computerChoice === "paper") {
            console.log("You win! Scissors beat paper!")
            humanScore++
        }
    }

}

console.log(getHumanChoice())
console.log(getComputerChoice())