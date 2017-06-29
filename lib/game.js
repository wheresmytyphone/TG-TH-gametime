require('./game.css');
var Bird = require('./Bird.js');
var Obstacle = require('./Obstacle.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

var bird = new Bird (50, 50, 20, 20, 'blue');



var obstacle1 = new Obstacle (500, 0, 100, 200, 'orange');
var obstacle2 = new Obstacle (500, 450, 100, 150, 'orange');
var obstacle3 = new Obstacle (1000, 0, 100, 300, 'orange');
var obstacle4 = new Obstacle (1000, 450, 100, 160, 'orange');
``
var obstacles = [
  obstacle1,
  obstacle2,
  obstacle3,
  obstacle4
]

var direction = {
  x: 1,
  y: 2
}
var obDirection = {
  x: -1,
  y: 2
}

function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height);
  bird.draw(context);
  bird.fly(direction);


  for (i = 0; i<obstacles.length; i++) {
    obstacles[i].draw(context)
    obstacles[i].move(obDirection);
  }

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);

window.addEventListener('click', function (event) {
  bird.flap()

})
