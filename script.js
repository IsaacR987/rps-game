// Rock Paper Scissors Outline
// Get random choice RPS from computer.
// Convert computer choice to rps.
// Prompt player to make a choice.
// Check if player choice is valid. 
// Convert player choice to rps.
// Check if players choice beats computer.
// Tell player if they win or lose.
// Track wins and losses.
// Repeat Game

let playerWins = 0;
let computerWins = 0;
let computerChoice = 0;
let playerChoice = "";

// Gets random number from 0, 1, 2.
function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
}

// Converts random number 0, 1 ,2 into r, p, s.
function convertComputerChoice() {
    getComputerChoice();
    if (computerChoice === 0) {
        computerChoice = "r";
    }
    else if (computerChoice === 1) {
        computerChoice = "p";
    }
    else computerChoice = "s";
}

// Converts player choice into r, p, s.
function convertPlayerChoice() {
    playerChoice = playerChoice.charAt(0).toLowerCase();
}

function evaluateMatch() {
    convertComputerChoice();
    convertPlayerChoice();

    if (computerChoice === "r" && playerChoice === "s") {
        computerWins++;
        console.log("You Lose! Rock beats Scissors")
    }
    else if (computerChoice === "p" && playerChoice === "r") {
        computerWins++;
        console.log("You Lose! Paper beats Rock")
    }
    else if (computerChoice === "s" && playerChoice === "p") {
        computerWins++;
        console.log("You Lose! Scissors beats Paper")
    }
    else if (playerChoice === "r" && computerChoice === "s") {
        playerWins++;
        console.log("You Win! Rock beats Scissors")
    }
    else if (playerChoice === "p" && computerChoice === "r") {
        playerWins++;
        console.log("You Win! Paper beats Rock")   
    }
    else if (playerChoice === "s" && computerChoice === "p") {
        playerWins++;
        console.log("You Win! Scissors beats Paper")
    }
    else console.log("Tie!");
}

// Starts round prompts user to choose.
function playRound() {
    convertComputerChoice();
    playerChoice = prompt("Rock, Paper, Scissors?");
    convertPlayerChoice();
        if (playerChoice === "r" || //Checks if player input is valid.
            playerChoice === "p" ||
            playerChoice === "s") {
            evaluateMatch();
            console.log("Player Wins: " + playerWins);
            console.log("Computer Wins: " + computerWins);
            }
        else {
            alert("Please choose: Rock, Paper, Scissors.");
            playRound();
        }
}

// Plays 5 rounds of RPS. 
function game() {
    for (let i = 0; i < 5; i++) {
    playRound();
    }
    playerWins = 0;
    computerWins = 0;
}

