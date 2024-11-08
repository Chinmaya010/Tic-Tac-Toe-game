let boxes = document.querySelectorAll(".box");
let resBtn = document.querySelector("#res-btn");
let chinu = document.querySelector(".chinu");
let winner = document.querySelector("#winner");
let newGameBtn = document.querySelector("#button");
let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner();
        return;
      }
    }
  }
  if ([...boxes].every(box => box.innerText !== "")) {
    showDraw();
  }
};

const showDraw = () => {
  winner.innerText = "It is a DRAW.";
  chinu.classList.remove("hide");
};

const chin = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = () => {
  winner.innerText = `Congratulations, ${turn0 ? "player2 (X)": "player1 (O)"} WINS!`;
  chinu.classList.remove("hide");
  chin();
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const newGame = () => {
  turn0 = true;
  enableBox();
  chinu.classList.add("hide");
  winner.innerText = "";
};

newGameBtn.addEventListener("click", newGame);
resBtn.addEventListener("click", newGame);
