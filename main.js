const btns = document.querySelectorAll("[data-selection]");
const playerChoice = document.querySelector(".player-choice");
const compChoice = document.querySelector(".comp-choice");
const compScore = document.querySelector(".comp-score");
const playerScore = document.querySelector(".player-score");
const winner = document.querySelector(".winner");
const resetBtn = document.querySelector(".reset");

const options = ["rock", "paper", "scissors"];

btns.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    makeSelection(selectionName);
  });
});

const makeSelection = (selection) => {
  playerChoice.innerHTML = selection;
  compChoice.innerHTML = options[Math.floor(Math.random() * options.length)];

  if (
    (playerChoice.innerHTML === "rock" &&
      compChoice.innerHTML === "scissors") ||
    (playerChoice.innerHTML === "paper" && compChoice.innerHTML === "rock") ||
    (playerChoice.innerHTML === "scissors" && compChoice.innerHTML === "paper")
  ) {
    playerScore.innerHTML++;
    winner.innerHTML = "win!";
  } else if (playerChoice.innerHTML === compChoice.innerHTML) {
    winner.innerHTML = "draw!";
  } else {
    compScore.innerHTML++;
    winner.innerHTML = "lose!";
  }
};

resetBtn.addEventListener("click", () => {
  playerChoice.innerHTML = "";
  compChoice.innerHTML = "";
  playerScore.innerHTML = "0";
  compScore.innerHTML = "0";
  winner.innerHTML = "";
});
