function playGame(userChoice) {
  let computerChoice = generateComputerChoice();
  let resultMsg;

  if (computerChoice === userChoice) {
    resultMsg = `It's a tie!`;
  } else if (
    (computerChoice === 'Bat' && userChoice === 'Stump') ||
    (computerChoice === 'Ball' && userChoice === 'Bat') ||
    (computerChoice === 'Stump' && userChoice === 'Ball')
  ) {
    resultMsg = 'You won!';
  } else {
    resultMsg = 'Computer has won!';
  }

  alert(`You have chosen ${userChoice}, Computer choice is ${computerChoice} and ${resultMsg}`);
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball';
  } else {
    return 'Stump';
  }
}
