// Variables for button, and displaying results of round
const button = document.querySelectorAll('button');
const computerChoiceShow = document.createElement('div');
const humanChoiceShow = document.createElement('div');
const div = document.createElement('div');
const roundResult = document.createElement('div');
const humanWinsGame = document.createElement('div');
const computerWinsGame = document.createElement('div');
let humanSelect = '';
let humanScore = 0;
let computerScore = 0;

// Button that runs when user selects Rock, Paper or Scissors
button.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    humanSelect = button.id;
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});

// Function to get choice for computer
function getComputerChoice() {
  mathValue = Math.floor(Math.random() * 3);
  if (mathValue === 0) {
    choice = 'rock';
  } else if (mathValue === 1) {
    choice = 'paper';
  } else {
    choice = 'scissors';
  }
  computerChoiceShow.textContent = 'Computer Choice: ' + choice;
  document.body.appendChild(computerChoiceShow);
  return choice;
}

// Function to get choice for human which is entered in via prompt
function getHumanChoice() {
  // let choice = prompt('Select: rock, paper or scissors').toLowerCase();
  let choice = humanSelect;
  if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
    console.log('Error: You entered an invalid value');
  } else {
    humanChoiceShow.textContent = 'You selected: ' + choice;
    document.body.appendChild(humanChoiceShow);
    return choice;
  }
}

// Round of game that compares humanChoice & computerChoice and determines winner
function playRound(humanChoice, computerChoice) {
  console.log('Human Choice:' + humanChoice);
  if (humanChoice === computerChoice) {
    console.log('Draw: No Point Awarded');
    roundResult.textContent = 'Draw: No Point Awarded';
    document.body.appendChild(roundResult);
  } else if (
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    roundResult.textContent = 'Human Wins Round! ' + 'Score: ' + humanScore;
    document.body.appendChild(roundResult);
  } else {
    computerScore++;
    roundResult.textContent =
      'Computer Wins Round! ' + 'Score: ' + computerScore;
    document.body.appendChild(roundResult);
  }
  if (humanScore === 5) {
    humanWinsGame.textContent =
      'Congrats! You won with a score of: ' + humanScore;
    document.body.appendChild(humanWinsGame);
  } else if (computerScore === 5) {
    computerWinsGame.textContent =
      'You lost, Computer won with a score of: ' + computerScore;
    document.body.appendChild(computerWinsGame);
  }
}
