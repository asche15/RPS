let choice = ['rock.png', 'paper.png', 'scissors.png'];
let humanScore = 0;
let computerScore = 0;
let roundCount = 0; 

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * choice.length);
  return choice[randomChoice];
}

let body = document.querySelector('body');
document.querySelector('#rock').addEventListener('click', () => game('rock.png'));
document.querySelector('#paper').addEventListener('click', () => game('paper.png'));
document.querySelector('#scissors').addEventListener('click', () => game('scissors.png'));

let scoreBoard = document.createElement('div');
scoreBoard.innerHTML = `
  <h3>Scores:</h3>
  <p id="humanScore">Human: 0</p>
  <p id="computerScore">Computer: 0</p>
  <p id="roundCount">Round: 0/5</p>
`;
body.appendChild(scoreBoard);

let resultMessage = document.createElement('h3');
body.appendChild(resultMessage);

scoreBoard.style.textAlign = 'center';
resultMessage.style.textAlign = 'center';

function game(imageChoice) {
  if (roundCount >= 5) {
    return; 
  }

  let computerChoice = getComputerChoice();

  document.querySelector('.Image').innerHTML = `<img src="${computerChoice}" alt="Computer's Choice" style="">`;
  document.querySelector('.image').innerHTML = `<img src="${imageChoice}" alt="Human Choice" style=";">`;

  playRound(imageChoice, computerChoice);

  roundCount++;
  document.getElementById('roundCount').textContent = `Round: ${roundCount}/5`;

  if (roundCount === 5) {
    displayFinalResult();
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock.png' && computerChoice === 'scissors.png') {
    resultMessage.textContent = 'You win! Rock beats Scissors.';
    humanScore++;
  } else if (humanChoice === 'scissors.png' && computerChoice === 'paper.png') {
    resultMessage.textContent = 'You win! Scissors beats Paper.';
    humanScore++;
  } else if (humanChoice === 'paper.png' && computerChoice === 'rock.png') {
    resultMessage.textContent = 'You win! Paper beats Rock.';
    humanScore++;
  } else if (humanChoice === 'scissors.png' && computerChoice === 'rock.png') {
    resultMessage.textContent = 'You lose! Rock beats Scissors.';
    computerScore++;
  } else if (humanChoice === 'paper.png' && computerChoice === 'scissors.png') {
    resultMessage.textContent = 'You lose! Scissors beats Paper.';
    computerScore++;
  } else if (humanChoice === 'rock.png' && computerChoice === 'paper.png') {
    resultMessage.textContent = 'You lose! Paper beats Rock.';
    computerScore++;
  } else {
    resultMessage.textContent = "It's a tie!";
  }

  document.getElementById('humanScore').textContent = `Human: ${humanScore}`;
  document.getElementById('computerScore').textContent = `Computer: ${computerScore}`;
}

function displayFinalResult() {
  if (humanScore > computerScore) {
    resultMessage.textContent = "Game Over! 🫡 Bravo, you beat the computer!";
  } else if (humanScore < computerScore) {
    resultMessage.textContent = "Game Over! 😭 Loser! The computer beats you!";
  } else {
    resultMessage.textContent = "Game Over! It's a tie!";
  }
}