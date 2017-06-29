class Bird {
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

  fly (direction) {
    this.y += direction.y
  }

  flap () {
    this.y -= 75
  }

  // flap () {
  //   this.flapCount = 0;
  //   this.flapCount++;
  //   console.log(this.flapCount);
  //   if (this.flapCount < 300) {
  //     this.y = this.y - 1;
  //     console.log(this);
  //     requestAnimationFrame(this.flap)
  //   }
  //       gameLoop();
  // }

// flap (new Bird) {
// this.flapCount = 20;
//   for (var i = 0; i < this.flapCount; i++) {
//     this.y++
//   }

}

module.exports = Bird
