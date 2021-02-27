let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let winner = 'Winner';
// Write your code below:

// generateTarget function
const generateTarget = () => Math.floor(Math.random() * 10);
console.log(generateTarget());

//compareGuesses function
const compareGuesses = (humanGuess, computerGuess, target) => {
  humanGuess = Math.floor(Math.random() * 10);
  computerGuess = Math.floor(Math.random() * 10);      
  target = generateTarget();
  let humanAbsV = Math.abs(humanGuess - target);
  let computerAbsV = Math.abs(computerGuess - target);

  if (humanAbsV < computerAbsV) {
    humanGuess = winner;
    return true;
  }
 if (humanAbsV > computerAbsV) {
   computerGuess = winner;
    return false;
  }
  if (humanAbsV === computerAbsV) {
    humanGuess = winner;
    computerGuess = winner;
    return true;
  } 
}
console.log(compareGuesses());

//updateScore
const updateScore = winner => {
  if (humanGuess === winner) {
    return humanScore++;
  }
  else {
    return computerScore++;
  }  
}

// advanceRound function
const advanceRound = () => {
  currentRoundNumber++;
}
