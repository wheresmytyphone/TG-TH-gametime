const { expect } = require('chai');
const Ceiling = require('../lib/Ceiling.js');
const Obstacle = require('../lib/Obstacle.js');

describe('Ceiling', () => {
  let ceiling;

  beforeEach(() => {
    ceiling = new Ceiling();
  });

  it('should have an x property with a value of 700', () => {
    expect(ceiling.x).to.equal(-1);
  });

  it('should have a y property with a value of 0', () => {
    expect(ceiling.y).to.equal(0);
  });

  it('should have a width property with a value of 100', () => {
    expect(ceiling.width).to.equal(601);
  });

  it('should have a height property that defaults to 10', () => {
    expect(ceiling.height).to.equal(10);
  });

  it('should be able to move', () => {
    expect(ceiling.x).to.equal(-1);
    expect(ceiling.y).to.equal(0);
    ceiling.move({ x: 3, y: 0 });
    expect(ceiling.x).to.equal(2);
    expect(ceiling.y).to.equal(0);
  });
});
