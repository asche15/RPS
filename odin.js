  
  alert('Welcome! to this game ');
  let humanScore = 0;
  let computercScore = 0;
  function getComputerChioice(){
  let result = Math.floor(Math.random() * 3);
  let  choiceOne = 'rock';
  let  choiceTwo ='paper';
  let  choiceThree = 'scissors';
  let choiceFour;

  if (result === 0){
    choiceFour = choiceOne;
     console.log(`computer choose: ${choiceOne}`);
  } else if (result === 1) {
    choiceFour = choiceTwo;
    console.log(`computer choose: ${choiceTwo}`);
  } else {
    choiceFour = choiceThree;
    console.log(`computer choose: ${choiceThree}`);
  }
 return choiceFour; 
}

function getHumanChoice(){
  let input = prompt('Please choose : rock , paper or scissors').toLocaleLowerCase().trim();
  if (input !== 'rock' && input !== 'paper' && input !== 'scissors') {
   alert('Incorrect value! Please choose either "rock", "paper", or "scissors".');
} else {
    console.log(`You choose: ${input}`);
}
return input;
}


function playRound(humanChoice, computerChoice){

if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log(`You win! rock beats scissors.`)
    humanScore++ ;
} else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You win! scissors beats paper.') 
    humanScore++;
} else if (humanChoice === 'paper' && computerChoice === 'rock') {
   console.log('You win! Paper beats rock.')  
   humanScore++;
} else if (humanChoice === 'scissors' && computerChoice == 'rock') {
   console.log('You lose! rock beats scissors') 
   computercScore++;
} else if (humanChoice == 'paper' && computerChoice == 'scissors') { 
   console.log('You lose! scissors beats paper')
   computercScore++ ;
} else if (humanChoice == 'rock' && computerChoice == 'paper')  {
   console.log('You lose! paper beats rock')
   computercScore++  ;
}
else{
   console.log('It\'s a tie');
}


}

function playGame(){

  for (let i = 0; i<=5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChioice();
    playRound(humanSelection, computerSelection);
    console.log(`human score: ${humanScore}, computer score: ${computercScore}`)
    
    console.log('......................................');
     
}
if(humanScore > computercScore ){
  alert("🫡 Bravo you beat the computer");
}
else if(humanScore < computercScore){
  alert("😭Loser! Computer beats you");
 }
 else {
  alert("you are equal");
 }
 }
playGame();



  
