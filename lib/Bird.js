require('./game.js');

class Bird {
  constructor (x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.lose = false
  }

  draw (context) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height)
  }

  fly (direction) {
    this.y += direction.y
  }

  stop() {
    console.log(this)
    this.y = this.y
  }

  flap () {
    this.y -= 75
  }
}

module.exports = Bird
