const assert = require( 'assert' );
const calculateNumber = require( './0-calcul' );

describe( 'calculateNumber', () => {
  it( 'it round the first argument', () => {
    assert.strictEqual( calculateNumber( 1, 3 ), 4 );
    assert.strictEqual( calculateNumber( 1.4, 4.5 ), 6 );
    assert.strictEqual( calculateNumber( 1.5, 3.7 ), 6 );
    assert.strictEqual( calculateNumber( 1.2, 3.7 ), 5 );
    assert.strictEqual( calculateNumber( 0, 0 ), 0 );
    assert.strictEqual( calculateNumber( 1.0, 0 ), 1 );
    assert.strictEqual( calculateNumber( 1.3, 0 ), 1 );
    assert.strictEqual( calculateNumber( 1.7, 0 ), 2 );
  } );
  it( 'it round the second argument', () => {
    assert.strictEqual( calculateNumber( 3, 1 ), 4 );
    assert.strictEqual( calculateNumber( 4.5, 1.4 ),
      6 );
    assert.strictEqual( calculateNumber( 3.7, 1.5 ),
      6 );
    assert.strictEqual( calculateNumber( 3.7, 1.2 ),
      5 );
    assert.strictEqual( calculateNumber( 0, 0 ), 0 );
    assert.strictEqual( calculateNumber( 0, 1.0 ), 1 );
    assert.strictEqual( calculateNumber( 0, 1.3 ), 1 );
    assert.strictEqual( calculateNumber( 0, 1.7 ), 2 );
  } );
  it( 'checks for correct output', () => {
    assert.strictEqual( calculateNumber( 1.3, 0 ), 1 );
    assert.strictEqual( calculateNumber( 0, 1.2 ), 1 );
    assert.strictEqual( calculateNumber( 1.3, 1.3 ), 2 );
    assert.strictEqual( calculateNumber( 1.7, 1.2 ), 3 );
    assert.strictEqual( calculateNumber( 1.3, 1.8 ), 3 );
    assert.strictEqual( calculateNumber( 1.6, 1.8 ), 4 );
    assert.strictEqual( calculateNumber( -1, -3.7 ), -5 );
    assert.strictEqual( calculateNumber( -1.2, -3.7 ), -5 );
    assert.strictEqual( calculateNumber( -1.5, -3.7 ), -5 );
    assert.strictEqual( calculateNumber( -1.2, -3.07 ), -4 );
    assert.strictEqual( calculateNumber( -1, -3 ), -4 );
    assert.strictEqual( calculateNumber( -1.2, 3.7 ), 3 );
    assert.strictEqual( calculateNumber( 1, -1 ), 0 );
    assert.strictEqual( calculateNumber( 1.5, -3.7 ), -2 );
    assert.strictEqual( calculateNumber( 1.2, -3.7 ), -3 );
    assert.strictEqual( calculateNumber( 3.5, -3.7 ), 0 );
    assert.strictEqual( calculateNumber( 0, 3.7 ), 4 );
    assert.strictEqual( calculateNumber( 0, 3.2 ), 3 );
    assert.strictEqual( calculateNumber( 0, 3.5 ), 4 );
    assert.strictEqual( calculateNumber( 0, 9.7 ), 10 );
    assert.strictEqual( calculateNumber( 0, 9.2 ), 9 );
    assert.strictEqual( calculateNumber( 0, 2.5 ), 3 );
  } );
} );
