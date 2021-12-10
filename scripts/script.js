var gamePaused = true;

function pauseGame() {
  gamePaused = true;
  document.getElementById("music").pause();
}

function startGame() {
  gamePaused = false;
  let music = document.getElementById("music");
  music.load();
  music.play();
  document.getElementById("arrow_a").style.top = "0px";
}

console.log("iniciando o jogo");

var score = 0;

// Objecto keyPoints
const keyPoints = {
  a: 10,
  s: 20,
  d: 10,
  w: 30,
};

let arrowA = document.getElementById("arrow_a");

let gameLoop = function () {
  if (gamePaused) return;

  document.getElementById("score").innerHTML = score;

  if (score >= 1000) {
    alert("you Won");
    score = 0;
  }

  // move image down
  arrowA.style.top = arrowA.getBoundingClientRect().top + 5 + "px";
};

let onKeyPress = (e) => {
  console.log("You pressed " + String.fromCharCode(e.keyCode));

  if (String.fromCharCode(e.keyCode) === "w") {
    score = score + 30;
  }
};

// 16 ms -> 60 fps
setInterval(gameLoop, 16);

window.addEventListener("keypress", onKeyPress);
