const { expect } = require('chai');
const Ground = require('../lib/Ground.js');
const Obstacle = require('../lib/Obstacle.js');

describe('Ground', () => {
  let ground;

  beforeEach(() => {
    ground = new Ground();
  });

  it('should have an x property with a value of 700', () => {
    expect(ground.x).to.equal(-1);
  });

  it('should have a y property with a value of 0', () => {
    expect(ground.y).to.equal(590);
  });

  it('should have a width property with a value of 100', () => {
    expect(ground.width).to.equal(601);
  });

  it('should have a height property that defaults to 10', () => {
    expect(ground.height).to.equal(10);
  });

  it('should be able to move', () => {
    expect(ground.x).to.equal(-1);
    expect(ground.y).to.equal(590);
    ground.move({ x: 3, y: 0 });
    expect(ground.x).to.equal(2);
    expect(ground.y).to.equal(590);
  });
});
