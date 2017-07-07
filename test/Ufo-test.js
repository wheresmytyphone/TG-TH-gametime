const { expect } = require('chai');
const Ufo = require('../lib/Ufo.js');

describe('Ufo', () => {
  let ufo;

  beforeEach(() => {
    ufo = new Ufo();
  });

  it('should have an x property that defaults to 101', () => {
    expect(ufo.x).to.equal(101);
  });

  it('should have a y property that defaults to 200', () => {
    expect(ufo.y).to.equal(200);
  });

  it('should have a width property that defaults to 30', () => {
    expect(ufo.width).to.equal(30);
  });

  it('should have a height property that defaults to 25', () => {
    expect(ufo.height).to.equal(25);
  });

  it('should be able to fly when passed an object as an argument', () => {
    ufo.fly({ x: 1, y: 5 });
    expect(ufo.x).to.equal(101);
    expect(ufo.y).to.equal(205);
  });

  it('should be able to boost', () => {
    ufo.boost();
    expect(ufo.y).to.equal(125);
  });
});

describe('Ufo arguments', () => {
  let ufo;

  beforeEach(() => {
    ufo = new Ufo(300, 400, 50, 5);
  });

  it('should accept arguments for x, y, width, and height properties', () => {
    expect(ufo.x).to.equal(300);
    expect(ufo.y).to.equal(400);
    expect(ufo.width).to.equal(50);
    expect(ufo.height).to.equal(5);
  });
});
