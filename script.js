function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
        return "Rock";
    }
    else if (rand == 1) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}
function playRound(computerPlay, playerSelection) {
    let lowercaseinp = playerSelection.toLowerCase();
    if (lowercaseinp == "rock") {
        if (computerPlay == "Rock") {
            return "Draw";
        }
        else if (computerPlay == "Scissor") {
            return "Player wins! Rock beats Scissor";
        }
        else {
            return "Computer wins! Paper beats Rock";
        }
    }
    else if (lowercaseinp == "paper") {
        if (computerPlay == "Rock") {
            return "Player wins! Paper beats Rock";
        }
        else if (computerPlay == "Scissor") {
            return "Computer wins! Scissor beats Paper";
        }
        else {
            return "Draw";
        }
    }
    else if (lowercaseinp == "scissor") {
        if (computerPlay == "Rock") {
            return "Computer wins! Rock beats Scissor";
        }
        else if (computerPlay == "Scissor") {
            return "Draw";
        }
        else {
            return "Player wins! Scissor beats Paper";
        }
    }
    else {
        return "Invalid input";
    }
}

for (let i = 0; i < 5; i++) {
    let input = prompt("Enter Rock, Paper or Scissor");
    let input2 = computerPlay();
    alert("Computer chose " + input2 + " , " + (playRound(input2, input)));
}