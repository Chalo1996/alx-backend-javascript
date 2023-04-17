const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the rounded sum of two positive numbers', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should return the rounded sum of two negative numbers', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return the rounded sum of a positive and a negative number', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return the rounded sum of a number and zero', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  } );
    it('it round the first argument', () => {
    assert.equal(calculateNumber(1.0, 0), 1);
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(1.7, 0), 2);
  });

  it('it round the second argument', () => {
    assert.equal(calculateNumber(0, 1.0), 1);
    assert.equal(calculateNumber(0, 1.3), 1);
    assert.equal(calculateNumber(0, 1.7), 2);
  });

  it('it should return the right number', () => {
    assert.equal(calculateNumber(1.3, 0), 1);
    assert.equal(calculateNumber(0, 1.2), 1);
    assert.equal(calculateNumber(1.3, 1.3), 2);
    assert.equal(calculateNumber(1.7, 1.2), 3);
    assert.equal(calculateNumber(1.3, 1.8), 3);
    assert.equal(calculateNumber(1.6, 1.8), 4);
  });
});
