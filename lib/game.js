require('./game.css')
var Bird = require('./Bird.js')
var Obstacle = require('./Obstacle.js')

const canvas = document.getElementById('game')
const context = canvas.getContext('2d')

var bird = new Bird(50, 50, 20, 20, 'blue')

var obstacle1 = new Obstacle(500, 0, 100, 200, 'orange')
var obstacle2 = new Obstacle(500, 450, 100, 150, 'orange')
var obstacle3 = new Obstacle(1000, 0, 100, 300, 'orange')
var obstacle4 = new Obstacle(1000, 450, 100, 160, 'orange')

var obstacles = [
  obstacle1,
  obstacle2,
  obstacle3,
  obstacle4
]

var direction = {
  x: 1,
  y: 4
}
var obDirection = {
  x: -3,
  y: 2
}

window.setInterval(createObstacle, 3000)

function createObstacle () {
  var obstacle1 = new Obstacle(1000, 0, 100, (Math.round(Math.random() * (450 - 1) + 1)), 'orange')
  var obstacle2 = new Obstacle(1000, (obstacle1.height + 150), 100, 600, 'orange')
  obstacles.push(obstacle1)
  obstacles.push(obstacle2)
  console.log('create')
}

function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height)
  bird.draw(context)
  bird.fly(direction)

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
requestAnimationFrame(gameLoop)

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 32) { bird.flap() }
})

window.addEventListener('click', function (event) {
  bird.flap()
})
