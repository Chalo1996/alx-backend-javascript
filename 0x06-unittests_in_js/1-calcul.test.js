const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe( 'calculateNumber', () => {
    it( 'checks for sum', () => {
        assert.equal( calculateNumber( 'SUM', 1, 3 ), 4 );
        assert.equal( calculateNumber( 'SUM', 1, 3.7 ), 5 );
        assert.equal( calculateNumber( 'SUM', 3.7, 1 ), 5 );
        assert.equal( calculateNumber( 'SUM', 1.4, 4.5 ), 6 );
    } );

    it( 'checks for subtract', () => {
        assert.equal( calculateNumber( 'SUBTRACT', 1, 3 ), -2 );
        assert.equal( calculateNumber( 'SUBTRACT', 1, 3.7 ), -3 );
        assert.equal( calculateNumber( 'SUBTRACT', 3.7, 1 ), 3 );
        assert.equal( calculateNumber( 'SUBTRACT', 1.4, 4.5 ), -4 );
    } );

    it( 'checks for divide', () => {
        assert.equal( calculateNumber( 'DIVIDE', 1.4, 4.5 ), 0.2 );
        assert.equal( calculateNumber( 'DIVIDE', 1.4, 0 ), 'Error' );
        assert.equal( calculateNumber( 'DIVIDE', 1.4, 'hello' ), NaN );
     } );
});
