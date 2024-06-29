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

console.log(getComputerChoice())