require('./game.css')
var Bird = require('./Bird.js')
var Obstacle = require('./Obstacle.js')

const canvas = document.getElementById('game')
const context = canvas.getContext('2d')
const score = document.querySelector('.score')
var currentScore = 0;
var highScore = 0;
const bird = new Bird(101, 100, 20, 20, 'green')
const ground = new Obstacle(0, 590, 600, 10, 'brown')
const ceiling = new Obstacle(0, 0, 600, 10, 'brown')

let obstacles = [
  ground,
  ceiling
]

let direction = {
  x: 1,
  y: 5
}

let obDirection = {
  x: -3,
  y: 2
}

let groundDirection = {
  x: 3,
  y: 0
}

context.font = "40px Arial";
context.fillStyle = "white";
context.fillText("Press ENTER to play", 175, 300, 300);

function saveHighScore() {
  highScore = parseInt(localStorage.getItem('highScore'), 10);
}

function updateScore() {
  var currentScore = parseInt(score.innerHTML, 10);
  for (i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x === 1) {
      currentScore += 50;
      score.innerHTML = currentScore;
    }
  }
}

function createObstacle () {
  var obstacle1Top = new Obstacle(1000, 0, 100, (Math.round(Math.random() * (450 - 100) + 100)), 'orange')
  var obstacle1Bottom = new Obstacle(1000, (obstacle1Top.height + 150), 100, 600, 'orange')
  obstacles.push(obstacle1Top)
  obstacles.push(obstacle1Bottom)
  console.log('create')
}

function drawObstacles () {
  obstacles.forEach(function(obstacle) {
    obstacle.draw(context);
    obstacle.move(obDirection);
  })
}

function drawGround () {
  ground.draw(context)
  ground.move(groundDirection)
  ceiling.draw(context)
  ceiling.move(groundDirection)
}

function drawBird (direction) {
  bird.draw(context)
  bird.fly(direction)
}

function checkForCollision () {
  obstacles.forEach(function(obstacle) {
    if (bird.x < obstacle.x + obstacle.width &&
      bird.x + bird.width > obstacle.x &&
      bird.y < obstacle.y + obstacle.height &&
      bird.height + bird.y > obstacle.y) {
      location.reload()

    }
  })
}

function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height)
  drawBird(direction);
  drawObstacles();
  drawGround();
  checkForCollision()
  updateScore();
  saveHighScore();
  requestAnimationFrame(gameLoop)
}

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 32) {
    bird.flap()
  }
})

window.addEventListener('click', function (event) {
  bird.flap()
})

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    window.setInterval(createObstacle, 2000)
    requestAnimationFrame(gameLoop)
  }
})
