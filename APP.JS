const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    return computer === "scissor" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResults = (result) => {
  if (result === "player") {
    console.log("You Win!");
    playerScore++;
  } else if (result === "computer") {
    console.log("You Lose!");
    computerScore++;
  } else {
    console.log("It's a tie.");
  }

  console.log(`Your score:${playerScore}`);
  console.log(`computer score:${computerScore}`);
  console.log("________________________");
};
const play = () => {
  const playerChoise = prompt("Choose Rock,Paper,Scissor");
  if (choices.indexOf(playerChoise.toLocaleLowerCase()) !== -1) {
    console.log(`You choose  ${playerChoise}.`);
  } else {
    console.log("You cheated!");
    return;
  }
  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log(`Computer Chooses ${computerChoice}`);
  const gameResult = checkWinner(playerChoise, computerChoice);
  showResults(gameResult);
  play();
};
play();
