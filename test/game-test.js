const { assert, it, describe } = require('chai');
require('../lib/game.js');
const { startPrompt, startNewGameAfterDeath, saveHighScore, drawHighScore, createObstacle, drawObstacles, drawGround, drawUfo, checkForCollision, gameLoop } = require('../lib/game.js');
const updateScore = require('../lib/game.js').updateScore;

describe('updateScore', () => {
  it('should be a function', () => {
    assert.isFunction(updateScore);
  });
});

describe('startPrompt', () => {
  it('should be a function', () => {
    assert.isFunction(startPrompt);
  });
});

describe('startNewGameAfterDeath', () => {
  it('should be a function', () => {
    assert.isFunction(startNewGameAfterDeath);
  });
});

describe('saveHighScore', () => {
  it('should be a function', () => {
    assert.isFunction(saveHighScore);
  });
});

describe('drawHighScore', () => {
  it('should be a function', () => {
    assert.isFunction(drawHighScore);
  });
});

describe('updateScore', () => {
  it('should be a function', () => {
    assert.isFunction(updateScore);
  });
});

describe('createObstacle', () => {
  it('should be a function', () => {
    assert.isFunction(createObstacle);
  });
});

describe('drawObstacles', () => {
  it('should be a function', () => {
    assert.isFunction(drawObstacles);
  });
});

describe('drawGround', () => {
  it('should be a function', () => {
    assert.isFunction(drawGround);
  });
});

describe('drawUfo', () => {
  it('should be a function', () => {
    assert.isFunction(drawUfo);
  });
});

describe('checkForCollision', () => {
  it('should be a function', () => {
    assert.isFunction(checkForCollision);
  });
});

describe('gameLoop', () => {
  it('should be a function', () => {
    assert.isFunction(gameLoop);
  });
});
