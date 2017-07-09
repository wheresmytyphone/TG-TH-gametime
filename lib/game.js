require('./game.css');
const Ufo = require('./Ufo.js');
const Obstacle = require('./Obstacle.js');
const Ground = require('./Ground.js');
const Ceiling = require('./Ceiling.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const score = document.querySelector('.score');
const ufo = new Ufo(101, 300, 30, 25);
const ground = new Ground();
const ceiling = new Ceiling();
const obstacles = [ground, ceiling];
const direction = { x: 1, y: 5 };
const easyButton = document.querySelector('.easy-button');
const hardButton = document.querySelector('.hard-button');
let collided = false;
let easyMode = true;

function startPrompt() {
  context.font = '40px Arial';
  context.fillStyle = 'white';
  context.fillText('Press ENTER to start flying', 100, 300, 400);
}

function showHighScoreMessage() {
  alert('Congratulations! You got a new high score!');
}

function displayCurrentDifficulty() {
  const currentDifficulty = document.querySelector('.current-difficulty');
  if (easyMode === true) {
    currentDifficulty.innerHTML = 'Easy';
  } else {
    currentDifficulty.innerHTML = 'Hard';
  }
}

function startNewGameAfterDeath() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText('Press R to reset the game', 100, 300, 400);
}

function saveHighScore() {
  if (parseInt(score.innerHTML, 10) > parseInt(localStorage.getItem('highScore'), 10) || localStorage.getItem('highScore') === null) {
    localStorage.setItem('highScore', score.innerHTML);
    showHighScoreMessage();
  }
}

function drawHighScore() {
  context.fillStyle = 'white';
  context.fillText((('High Score: ' + localStorage.getItem('highScore'))), 10, 47, 300);
}

function updateScore() {
  let currentScore = parseInt(score.innerHTML, 10);
  for (let i = 0; i < obstacles.length; i += 1) {
    if (obstacles[i].x === 1) {
      currentScore += 50;
      score.innerHTML = currentScore;
    }
  }
}

function createObstacle() {
  if (easyMode === false) {
    const obstacle1Top = new Obstacle(700, 0, 100, (Math.round((Math.random() * (350 - 100)) + 100)));
    const obstacle1Bottom = new Obstacle(700, (obstacle1Top.height + 150), 100, 600);
    obstacles.push(obstacle1Top);
    obstacles.push(obstacle1Bottom);
  } else {
    const obstacle1Top = new Obstacle(700, 0, 100, (Math.round((Math.random() * (350 - 100)) + 100)));
    const obstacle1Bottom = new Obstacle(700, (obstacle1Top.height + 150), 100, 600);
    obstacles.push(obstacle1Top);
    obstacles.push(obstacle1Bottom);
  }
}

function drawObstacles() {
  const obDirection = { x: -3, y: 2 };
  obstacles.forEach((obstacle) => {
    obstacle.draw(context);
    obstacle.move(obDirection);
  });
}

function drawGround() {
  const groundDirection = { x: 3, y: 0 };
  ground.draw(context);
  ground.move(groundDirection);
  ceiling.draw(context);
  ceiling.move(groundDirection);
}

function drawUfo() {
  ufo.draw(context);
  ufo.fly(direction);
}

function checkForCollision() {
  obstacles.forEach((obstacle) => {
    if (ufo.x < obstacle.x + obstacle.width &&
      ufo.x + ufo.width > obstacle.x &&
      ufo.y < obstacle.y + obstacle.height &&
      ufo.height + ufo.y > obstacle.y) {
      collided = true;
      context.fillText('Game over!', 200, 300);
      saveHighScore();
      setTimeout(location.reload(), 3000);
    }
  });
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawUfo(direction);
  drawObstacles();
  drawGround();
  checkForCollision();
  updateScore();
  drawHighScore();
  if (collided === false) {
    requestAnimationFrame(gameLoop);
  }
}

displayCurrentDifficulty();

startPrompt();

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 32) {
    ufo.boost();
  }
});

window.addEventListener('click', () => {
  easyMode = true;
  displayCurrentDifficulty();
});

window.addEventListener('click', () => {
  easyMode = false;
  displayCurrentDifficulty();
});

window.addEventListener('click', () => {
  ufo.boost();
});

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    if (easyMode === true) {
      window.setInterval(createObstacle, 2000);
      requestAnimationFrame(gameLoop);
    } else {
      window.setInterval(createObstacle, 1500);
      requestAnimationFrame(gameLoop);
    }
  }
});

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 82) {
    location.reload();
  }
});

module.exports = {
  startPrompt,
  startNewGameAfterDeath,
  saveHighScore,
  drawHighScore,
  updateScore,
  createObstacle,
  drawObstacles,
  drawGround,
  drawUfo,
  checkForCollision,
  gameLoop,
};
