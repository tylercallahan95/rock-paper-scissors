// Function to get choice for computer
function getComputerChoice() {
  mathValue = Math.floor(Math.random() * 3);
  if (mathValue === 0) {
    choice = "rock";
  } else if (mathValue === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  console.log("Computer Choice:" + choice);
  return choice;
}

// Function to get choice for human which is entered in via prompt
function getHumanChoice() {
  let choice = prompt("Select: rock, paper or scissors").toLowerCase();
  console.log(choice);
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    console.log("Error: You entered an invalid value");
  } else {
    return choice;
  }
}

// Overall function for the game which includes a function for round and a for loop to run five times
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    console.log("Human Choice:" + humanChoice);
    if (humanChoice === computerChoice) {
      console.log("Draw: No Point Awarded");
    } else if (
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log("Human Wins Round! " + "Score: " + humanScore);
    } else {
      computerScore++;
      console.log("Computer Wins Round! " + "Score: " + computerScore);
    }
  }

  for (i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("Congrats! You won with a score of: " + humanScore);
  } else {
    console.log("You lost, Computer won with a score of: " + computerScore);
  }
}

playGame();
