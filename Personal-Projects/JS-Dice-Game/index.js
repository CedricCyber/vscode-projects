// ----------------------------//
// ELEMENT GRABBERS
// ----------------------------//

const player1ScoreEl = document.getElementById("player1score");
const player2ScoreEl = document.getElementById("player2score");
const startGameButton = document.getElementById("start-game");
const resetButton = document.getElementById("reset-button");
const rollButton = document.getElementById("roll-button");

// variables
let player1Turn = true;
let player1Score = 0;
let player2Score = 0;

// ----------------------------//
// FUNCTIONS
// ----------------------------//

// Render Game (Reset & StartGame buttons)
let startGame = () => {
  startGameButton.style.display = "none";
  rollButton.style.display = "block";
  resetButton.style.display = "block";
  player1ScoreEl.innerText = "0";
  player2ScoreEl.innerText = "0";
  player1Score = 0;
  player2Score = 0;
};

// Generate Random Numbers
RandomNumber = Math.floor(Math.random() * 7);

// Roll Dice Function

let rollDice = () => {
  if (player1Turn === true) {
    player1Score += RandomNumber;
    player1ScoreEl.innerText = player1Score;
    player1Turn = false;
  } else {
    player2Score += RandomNumber;
    player2ScoreEl.innerText = player2Score;
    player1Turn = true;
  }
};

// Player Turn Function

// ------------------------------//
// BUTTONS
// ------------------------------//

// StartButton
startGameButton.addEventListener("click", () => startGame());

// Roll Button
rollButton.addEventListener("click", () => rollDice());

// Reset Button
resetButton.addEventListener("click", () => {
  startGame();
});
