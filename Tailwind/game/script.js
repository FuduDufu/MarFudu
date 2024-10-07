let playerScore = 0;


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 0; 
    }
    if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return 1; 
    }
    return -1; 
}


function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result');
    const handsDiv = document.getElementById('hands');
    const scoreDiv = document.getElementById('player-score');

    if (score === 1) {
        resultDiv.innerText = "You Win!";
        playerScore++;
    } else if (score === -1) {
        resultDiv.innerText = "You Lose!";
    } else {
        resultDiv.innerText = "It's a Draw!";
    }

    handsDiv.innerText = `palyer ${playerChoice} vs computer ${computerChoice}`;
    scoreDiv.innerText = `Player Score: ${playerScore}`;
}


function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice, computerChoice);
    showResult(score, playerChoice, computerChoice);
}

function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton');
    rpsButtons.forEach(button => {
        button.onclick = () => onClickRPS(button.value);
    });

    const endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => endGame();
}


function endGame() {
    playerScore = 0;
    document.getElementById('player-score').innerText = `Player Score: ${playerScore}`;
    document.getElementById('hands').innerText = "Player vs Computer";
    document.getElementById('result').innerText = "Result";
}   

playGame();
