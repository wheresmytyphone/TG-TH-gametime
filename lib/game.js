require('./game.css');
var Bird = require('./Bird.js');

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

var bird = new Bird (50, 50, 10, 10, 'red');

var direction = {
  x: 1,
  y: 2
}

function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height);

  bird.draw(context);
  bird.fly(direction);

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);

window.addEventListener('click', function (event) {
  direction = { y: -direction.y }

})
