let pscore = 0;
let cscore = 0;
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
            pscore++;
            return "Player wins! Rock beats Scissor";
        }
        else {
            cscore++;
            return "Computer wins! Paper beats Rock";
        }
    }
    else if (lowercaseinp == "paper") {
        if (computerPlay == "Rock") {
            pscore++;
            return "Player wins! Paper beats Rock";
        }
        else if (computerPlay == "Scissor") {
            cscore++;
            return "Computer wins! Scissor beats Paper";
        }
        else {
            return "Draw";
        }
    }
    else if (lowercaseinp == "scissor") {
        if (computerPlay == "Rock") {
            cscore++;
            return "Computer wins! Rock beats Scissor";
        }
        else if (computerPlay == "Scissor") {
            return "Draw";
        }
        else {
            pscore++;
            return "Player wins! Scissor beats Paper";
        }
    }
    else {
        return "Invalid input";
    }
}
let user = prompt("Enter username");
function game() {
    for (let i = 0; i < 5; i++) {
        let input = prompt("Enter Rock, Paper or Scissor");
        let input2 = computerPlay();
        alert(user + " chose: " + input.toUpperCase() + "\nComputer chose: " + input2.toUpperCase() + "\n" + playRound(input2, input));
        alert("          𝐒𝐂𝐎𝐑𝐄\n " + user + " = " + pscore + "\nComputer = " + cscore);
    }
}
game();