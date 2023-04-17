const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the rounded sum of two positive numbers', function() {
    assert.strictEqual(calculateNumber(2.4, 3.6), 6);
  });
  it('should return the rounded sum of two negative numbers', function() {
    assert.strictEqual(calculateNumber(-2.4, -3.6), -6);
  });
  it('should return the rounded sum of a positive and a negative number', function() {
    assert.strictEqual(calculateNumber(2.4, -3.6), -2);
  });
  it('should return the rounded sum of a number and zero', function() {
    assert.strictEqual(calculateNumber(2.4, 0), 2);
  });
});
