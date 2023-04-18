const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('rounds the first argument', () => {
    assert.equal(calculateNumber(1.0, 1), 2);
    assert.equal(calculateNumber(1.3, 1), 2);
    assert.equal(calculateNumber(1.7, 1), 3);
  });

  it('rounds the second argument', () => {
    assert.equal(calculateNumber(1, 1.0), 2);
    assert.equal(calculateNumber(1, 1.3), 2);
    assert.equal(calculateNumber(1, 1.7), 3);
  });

  it('shoulds return the right number', () => {
    assert.equal(calculateNumber(1.2, 1), 2);
    assert.equal(calculateNumber(1, 1.2), 2);
    assert.equal(calculateNumber(1.2, 1.2), 2);
    assert.equal(calculateNumber(1.6, 1.1), 3);
    assert.equal(calculateNumber(1.2, 1.9), 3);
    assert.equal(calculateNumber(1.5, 1.9), 4);
  });
});
