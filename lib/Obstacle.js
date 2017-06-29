class Obstacle {
  constructor (x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
  }

  draw (context) {
    context.fillStyle = this.color
    context.fillRect(this.x, this.y, this.width, this.height)
  }

  move (direction) {
    this.x += direction.x
  }
}

// class Ground extends Obstacle {
//   constructor() {
//     super();
//     this.x = 0;
//     this.y = 590;
//     this.width = 700;
//     this.height =20;
//     // this.color = 'purple';
//   }
//
//   draw(context) {
//     context.
//   }
// }

module.exports = Obstacle
