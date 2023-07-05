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

function evaluateMatch(playerChoice) {
    convertComputerChoice();

    if (computerChoice === "r" && playerChoice === "s") {
        computerWins++;
        results.textContent = "You Lose! Rock beats Scissors";
    }
    else if (computerChoice === "p" && playerChoice === "r") {
        computerWins++;
  
        results.textContent = "You Lose! Paper beats Rock";
    }
    else if (computerChoice === "s" && playerChoice === "p") {
        computerWins++;
        results.textContent = "You Lose! Scissors beats Paper";
    }
    else if (playerChoice === "r" && computerChoice === "s") {
        playerWins++;
        results.textContent = "You Win! Rock beats Scissors";
    }
    else if (playerChoice === "p" && computerChoice === "r") {
        playerWins++;
        results.textContent = "You Win! Paper beats Rock";   
    }
    else if (playerChoice === "s" && computerChoice === "p") {
        playerWins++;
        results.textContent = "You Win! Scissors beats Paper";
    }
    else results.textContent = "Tie!";
};

// Starts round prompts user to choose.
function playRound() {
    convertComputerChoice();
            evaluateMatch(playerChoice);
            console.log(playerWins);
            console.log(computerWins);
}

function endGame() {
    if (playerWins === 5) {
        scoreboard.textContent = "You are the Winner!";
        playerWins = 0;
        computerWins = 0;
    } else if (computerWins === 5) {
        scoreboard.textContent = "Sorry the Computer is the Winner.";
        playerWins = 0;
        computerWins = 0;
    } else { 
        scoreboard.textContent = "Player Wins: " + playerWins +
        " Computer Wins: " + computerWins; };
};

const container = document.querySelector('#container');

const content = document.createElement('div');

const rock = document.createElement('button');
rock.textContent = "ROCK";

const scissors = document.createElement('button');
scissors.textContent = "SCISSORS";

const paper = document.createElement('button');
paper.textContent = "PAPER";

const reset = document.createElement('button');
reset.textContent = "RESET";

container.appendChild(content);
content.style.cssText = "background-color: lightblue; height: 100vh";

content.appendChild(rock);
content.appendChild(scissors);
content.appendChild(paper);
content.appendChild(reset);

rock.addEventListener("click", () => {
    playerChoice = 'r';
    playRound();
    endGame();
});

scissors.addEventListener("click", () => {
    playerChoice = 's';
    playRound();
    endGame();
});

paper.addEventListener("click", () => {
    playerChoice = 'p';
    playRound();
    endGame();
});

reset.addEventListener("click", () => {
    playerWins = 0;
    computerWins = 0;
    scoreboard.textContent = "Player Wins: " + playerWins + " Computer Wins: " + computerWins;
    results.textContent = "";
})

const scoreboard = document.createElement('div');
content.appendChild(scoreboard);
scoreboard.textContent = "Player Wins: " + playerWins + " Computer Wins: " + computerWins;

const results = document.createElement('div');
content.appendChild(results);

