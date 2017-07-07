var img = new Image()
img.src = 'lib/lava-texture.jpg'

class Obstacle {
  constructor (x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }

  draw (context) {
    context.drawImage(img, this.x, this.y, this.width, this.height)
  }

  move (direction) {
    this.x += direction.x
  }
}

module.exports = Obstacle
