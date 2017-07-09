const Obstacle = require('./Obstacle.js');

const img = new Image();
img.src = 'assets/lava-texture.jpg';

class Ceiling extends Obstacle {
  constructor() {
    super();
    this.x = -1;
    this.y = 0;
    this.width = 601;
    this.height = 10;
  }

  draw(context) {
    context.drawImage(img, this.x, this.y, this.width, this.height);
  }

  move(direction) {
    this.x += direction.x;
  }
}

module.exports = Ceiling;
