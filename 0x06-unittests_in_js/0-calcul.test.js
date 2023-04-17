const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the rounded sum of two positive numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return the rounded sum of two negative numbers', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return the rounded sum of a positive and a negative number', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return the rounded sum of a number and zero', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
