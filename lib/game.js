require('./game.css')
var Bird = require('./Bird.js')
var Obstacle = require('./Obstacle.js')

const canvas = document.getElementById('game')
const context = canvas.getContext('2d')

var score = document.querySelector('.score');

var bird = new Bird(50, 50, 20, 20, 'blue')

var obstacle1Top = new Obstacle(500, 0, 100, 200, 'orange')
var obstacle1Bottom = new Obstacle(500, 450, 100, 150, 'orange')
var obstacle2Top = new Obstacle(1000, 0, 100, 300, 'orange')
var obstacle2Bottom = new Obstacle(1000, 450, 100, 160, 'orange')

// window.setInterval(createObstacle, 3000)

var ground = new Obstacle(0, 590, 600, 20, 'brown')

var obstacles = [
  obstacle1Top,
  obstacle1Bottom,
  obstacle2Top,
  obstacle2Bottom,
  ground
]

var direction = {
  x: 1,
  y: 4
}
var obDirection = {
  x: -3,
  y: 2
}

var groundDirection = {
  x: 3,
  y: 0
}



function updateScore() {
  var currentScore = parseInt(score.innerHTML, 10);
  currentScore++;
  score.innerHTML = currentScore;
}

function createObstacle () {
  var obstacle1Top = new Obstacle(1000, 0, 100, (Math.round(Math.random() * (450 - 1) + 1)), 'orange')
  var obstacle1Bottom = new Obstacle(1000, (obstacle1Top.height + 150), 100, 600, 'orange')
  obstacles.push(obstacle1Top)
  obstacles.push(obstacle1Bottom)
  console.log('create')
}


function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height)
  bird.draw(context)
  bird.fly(direction)

  ground.draw(context)
  ground.move(groundDirection)

  for (i = 0; i < obstacles.length; i++) {
    obstacles[i].draw(context)
    obstacles[i].move(obDirection)
  }

  for (i = 0; i<obstacles.length; i++) {
    if (bird.x < obstacles[i].x + obstacles[i].width &&
      bird.x + bird.width > obstacles[i].x &&
      bird.y < obstacles[i].y + obstacles[i].height &&
      bird.height + bird.y > obstacles[i].y) {
      // refresh page on collision
      location.reload()
    }
  }
  requestAnimationFrame(gameLoop)
}
// requestAnimationFrame(gameLoop)

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 32) { bird.flap() }
})

window.addEventListener('click', function (event) {
  bird.flap()
})

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 83) {
    window.setInterval(createObstacle, 3000)
    requestAnimationFrame(gameLoop)
  }
})
