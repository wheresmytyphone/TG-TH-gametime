const { expect } = require('chai');
const Obstacle = require('../lib/Obstacle.js');

describe('Obstacle', () => {
  let obstacle;

  beforeEach(() => {
    obstacle = new Obstacle();
  });

  it('should have an x property that defaults to 700', () => {
    expect(obstacle.x).to.equal(700);
  });

  it('should have a y property that defaults to 0', () => {
    expect(obstacle.y).to.equal(0);
  });

  it('should have a width property that defaults to 100', () => {
    expect(obstacle.width).to.equal(100);
  });

  it('should have a height property that defaults to 225', () => {
    expect(obstacle.height).to.equal(225);
  });

  it('should be able to move when passed an object as an argument', () => {
    obstacle.move({ x: -3, y: 0 });
    expect(obstacle.x).to.equal(697);
    expect(obstacle.y).to.equal(0);
  });
});

describe('Obstacle arguments', () => {
  let obstacle;

  beforeEach(() => {
    obstacle = new Obstacle(10, 20, 50, 60);
  });

  it('should accept arguments for x, y, width, and height properties', () => {
    expect(obstacle.x).to.equal(10);
    expect(obstacle.y).to.equal(20);
    expect(obstacle.width).to.equal(50);
    expect(obstacle.height).to.equal(60);
  });
});
