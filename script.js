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
let audio = new Audio("button.wav");
let winner = document.querySelector("#header");
let score = document.querySelector("#score");
let img = document.querySelector("#img");
function myfunction(inp, playerSelection) {

    let x1 = pscore;
    let x2 = cscore;
    inp.classList.add("clicked");
    audio.play();
    let result = (playRound(computerPlay(), playerSelection));
    if (pscore > x1) {
        img.src = "thumbsupemoji.png";
    }
    if (cscore > x2) {
        img.src = "sademoji.png";
    }
    if (pscore == x1 && cscore == x2) {
        img.src = "L.png";
    }
    winner.textContent = result;
    score.textContent = "Player: " + pscore + "            Computer: " + cscore;
    winner.classList.add("clicked2");

    setTimeout(() => {
        $(inp).removeClass("clicked");
        $(winner).removeClass("clicked2");
        $(score).removeClass("clicked2");


    }, 250);
    audio.currentTime = 0;
}

let rb = document.querySelector("#rock");
rb.addEventListener("click", function () { myfunction(rb, "rock"); });

let pb = document.querySelector("#paper");
pb.addEventListener("click", function () { myfunction(pb, "paper"); });
let sb = document.querySelector("#scissor");
sb.addEventListener("click", function () { myfunction(sb, "scissor"); });
