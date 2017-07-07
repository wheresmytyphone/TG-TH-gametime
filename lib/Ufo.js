const img = new Image();
img.src = 'assets/spaceship-2.png';

class Ufo {
  constructor(x, y, width, height) {
    this.x = x || 101;
    this.y = y || 200;
    this.width = width || 30;
    this.height = height || 25;
  }

  draw(context) {
    context.drawImage(img, this.x, this.y, this.width, this.height);
  }

  fly(direction) {
    this.y += direction.y;
  }

  boost() {
    this.y -= 75;
  }
}

module.exports = Ufo;
