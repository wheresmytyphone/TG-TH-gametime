class Bird {
  constructor (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.isFlapping = false;
    this.isFalling = true;
    this.flySpeed = 0;
    this.fallSpeed = 0;
}



  draw (context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);  // x, y, width, height
  }

  fly ( direction ) {
    this.y += direction.y;
  }

  flap () {
      this.isFlapping = true;
      this.fallSpeed = 0;
      this.flapSpeed = 20;
    }

  checkFlap() {
    this.setPosition(this.x ,this.y - this.flapSpeed);
      this.flapSpeed--;
      if (this.flapSpeed === 0) {
        this.isFlapping = false;
        this.isFalling = true;
        this.fallSpeed = 1
      }
  }

  checkFall() {
    if (this.y < height - this.height) {
      this.setPosition(this.x, this.y + this.fallSpeed)
      this.fallSpeed++;
    }
      }
  }



module.exports = Bird;
