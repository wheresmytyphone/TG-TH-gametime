require('./game.css')
// require('./index.js')
var Bird = require('./Bird.js')
var Obstacle = require('./Obstacle.js')
var Gameover = require('./gameover.js')

const canvas = document.getElementById('game')
const context = canvas.getContext('2d')
const score = document.querySelector('.score')
const easyButton = document.querySelector('.easy')
const hardButton = document.querySelector('.hard')
var currentScore = 0;
const bird = new Bird(101, 200, 20, 20, 'green')
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

let hardDirection = {
  x: -5,
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
  if (parseInt(score.innerHTML) > parseInt(localStorage.getItem('highScore')) || localStorage.getItem('highScore') === null) {
  localStorage.setItem('highScore', score.innerHTML)
  }
  return
}

function drawHighScore() {
  context.fillStyle = 'white';
  context.fillText((("High Score: " + localStorage.getItem('highScore'))), 10, 47, 300)
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
  var obstacle1Top = new Obstacle(700, 0, 100, (Math.round(Math.random() * (350 - 100) + 100)), 'orange')
  var obstacle1Bottom = new Obstacle(700, (obstacle1Top.height + 150), 100, 600, 'orange')
  obstacles.push(obstacle1Top)
  obstacles.push(obstacle1Bottom)
}

function drawObstacles () {
  obstacles.forEach(function(obstacle) {
    if(isEasy === true) {
      obstacle.draw(context)
      obstacle.move(obDirection)
      return
    }
      obstacle.draw(context)
      obstacle.move(hardDirection)
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

function drawGameover() {
  gameover.draw(context)
}


function checkForCollision ()  {
  let hasLost =  obstacles.forEach(function(obstacle) {
    if (bird.x < obstacle.x + obstacle.width &&
      bird.x + bird.width > obstacle.x &&
      bird.y < obstacle.y + obstacle.height &&
      bird.height + bird.y > obstacle.y)  {
        saveHighScore()
        bird.lose = true
      }
    })
  }

  function createObstacle () {
    var obstacle1Top = new Obstacle(1000, 0, 100, (Math.round(Math.random() * (450 - 100) + 100)), 'orange')
    var obstacle1Bottom = new Obstacle(1000, (obstacle1Top.height + 150), 100, 600, 'orange')
    obstacles.push(obstacle1Top)
    obstacles.push(obstacle1Bottom)
    console.log('create')
  }

  function endGame () {
    var overScreen = new Gameover(500,500,100,100, 'white')
    context.fillStyle = "purple"
    context.fillText("REPLAY?", 200, 300, 200)
    requestAnimationFrame(endGame)
  }

function gameLoop () {
  if (bird.lose === true) {
    requestAnimationFrame(endGame)
    return;
  } else {
      context.clearRect(0, 0, canvas.width, canvas.height)
      drawBird(direction);
      drawObstacles();
      drawGround();
      checkForCollision()
      updateScore();
      drawHighScore();
      requestAnimationFrame(gameLoop)
    }
}

easyButton.addEventListener('click', function (event) {
  console.log('be easy')
  isEasy = true
})

hardButton.addEventListener('click', function (event) {
  console.log('we hard mode now')
  isEasy = false
})

window.addEventListener('keydown', function (event) {
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
