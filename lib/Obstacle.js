const img = new Image();
img.src = 'assets/lava-texture.jpg';

class Obstacle {
  constructor(x, y, width, height) {
    this.x = x || 700;
    this.y = y || 0;
    this.width = width || 100;
    this.height = height || 225;
  }

  draw(context) {
    context.drawImage(img, this.x, this.y, this.width, this.height);
  }

  move(direction) {
    this.x += direction.x;
  }
}

module.exports = Obstacle;
