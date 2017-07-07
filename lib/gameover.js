require('./game.js')

class Gameover {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw (context) {
    context.fillStyle = this.color;
    context.fillRect = this.x, this.y, this.width; this.height;
  }

}

module.exports = Gameover;
