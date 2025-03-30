alert('Welcome! to this game ');
let humanScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  const result = Math.floor(Math.random() * 3);
  const choice = choices[result];
  console.log(`Computer chose: ${choice}`);
  return choice;
}

function getHumanChoice() {
  while (true) {
    let input = prompt('Please choose: rock, paper, or scissors').toLowerCase().trim();
    if (choices.includes(input)) {
      console.log(`You chose: ${input}`);
      return input;
    } else {
      alert('Incorrect value! Please choose either "rock", "paper", or "scissors".');
    }
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log('It\'s a tie');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
    console.log('......................................');
  }

  if (humanScore > computerScore) {
    alert("🫡 Bravo you beat the computer");
  } else if (humanScore < computerScore) {
    alert("😭 Loser! Computer beats you");
  } else {
    alert("It's a tie");
  }
}

playGame();
