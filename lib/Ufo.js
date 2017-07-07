require('./game.js');

var img = new Image()
img.src = 'lib/spaceship-2.png'

class Ufo {
  constructor (x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.lose = false
  }

  draw (context) {
    context.drawImage(img, this.x, this.y, this.width, this.height)
  }

  fly (direction) {
    this.y += direction.y
  }

  flap () {
    this.y -= 75
  }
}

module.exports = Ufo
