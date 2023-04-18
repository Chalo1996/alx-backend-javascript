const assert = require( 'assert' );
const mocha = require( 'mocha' );
const calculateNumber = require( './0-calcul' );

describe( 'calculateNumber', () => {
  it( 'checks the output', () => {
    assert.strictEqual( calculateNumber( 1, 3 ), 4 );
    assert.strictEqual( calculateNumber( 1.4, 4.5 ), 6 );
    assert.strictEqual( calculateNumber( 1.5, 3.7 ), 6 );
    assert.strictEqual( calculateNumber( 1.2, 3.7 ), 5 );
    assert.strictEqual( calculateNumber( 1.7, 0 ), 2 );
  } );
  it( 'checks for the first number', () => {
    assert.strictEqual( calculateNumber( 3, 1 ), 4 );
    assert.strictEqual( calculateNumber( 4.5, 1.4 ),
      6 );
    assert.strictEqual( calculateNumber( 3.7, 1.5 ),
      6 );
    assert.strictEqual( calculateNumber( 3.7, 1.2 ),
      5 );
  } );
  it( 'checks for the second number', () => {
    assert.strictEqual( calculateNumber( 1.3, 0 ), 1 );
    assert.strictEqual( calculateNumber( 0, 1.2 ), 1 );
    assert.strictEqual( calculateNumber( 1.3, 1.3 ), 2 );
    assert.strictEqual( calculateNumber( 1.6, 1.8 ), 4 );
    assert.strictEqual( calculateNumber( -1, -3.7 ), -5 );
  } );
  it('checks for NaN', () => {
  try {
    calculateNumber(NaN, 3.7);
  } catch (error) {
    assert.strictEqual(error.message, 'Invalid number');
  }
});

} );
