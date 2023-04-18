'use strict';
const chai = require( 'chai' );
const calculateNumber = require( './2-calcul_chai.js' );

describe( 'calculateNumber type is SUM', () => {
    it( 'checks the output', () => {
        chai.expect( calculateNumber( 'SUM', 1, 3.2 ) ).to.equal( 4 );
        chai.expect( calculateNumber( 'SUM', 1.2, 3.7 ) ).to.equal( 5 );
        chai.expect( calculateNumber( 'SUM', 3.7, 1.2 ) ).to.equal( 5 );
        chai.expect( calculateNumber( 'SUM', 1.3, 4.5 ) ).to.equal( 6 );
        chai.expect( calculateNumber( 'SUM', 4.6, 1.2 ) ).to.equal( 6 );
        chai.expect( calculateNumber( 'SUM', 0.0, 0 ) ).to.equal( 0 );
        chai.expect( calculateNumber( 'SUM', -2, 2 ) ).to.equal( 0 );
        chai.expect( calculateNumber( 'SUM', 2, -2 ) ).to.equal( 0 );
        chai.expect( calculateNumber( 'SUM', -3, -3.2 ) ).to.equal( -6 );
    } );
} );
describe( 'calculateNumber type is SUBTRACT', () => {
    it( 'checks the output', () => {
        chai.expect( calculateNumber( 'SUBTRACT', 5.2, 3 ) ).to.equal( 2 );
        chai.expect( calculateNumber( 'SUBTRACT', 3.0, 2.5 ) ).to.equal( 0 );
        chai.expect( calculateNumber( 'SUBTRACT', 4.6, 2 ) ).to.equal( 3 );
        chai.expect( calculateNumber( 'SUBTRACT', 0.0, 5 ) ).to.equal( -5 );
        chai.expect( calculateNumber( 'SUBTRACT', 2, 4.8 ) ).to.equal( -3 );
        chai.expect( calculateNumber( 'SUBTRACT', -1, -1 ) ).to.equal( 0 );
        chai.expect( calculateNumber( 'SUBTRACT', -1.9, 0 ) ).to.equal( -2 );
    } );
} );
describe( 'calculateNumber type is DIVIDE', () => {
    it( 'check the output', () => {
        chai.expect( calculateNumber( 'DIVIDE', 16.2, 2 ) ).to.equal( 8 );
        chai.expect( calculateNumber( 'DIVIDE', 2, 2 ) ).to.equal( 1 );
        chai.expect( calculateNumber( 'DIVIDE', 8.5, 2 ) ).to.equal( 4.5 );
        chai.expect( calculateNumber( 'DIVIDE', 0, 40 ) ).to.equal( 0 );
        chai.expect( calculateNumber( 'DIVIDE', 1.44, 4.5 ) ).to.equal( 0.2 );
        chai.expect( calculateNumber( 'DIVIDE', -1.4, 1 ) ).to.equal( -1 );
        chai.expect( calculateNumber( 'DIVIDE', 1.006, 0 ) ).to.equal( 'Error' );
        chai.expect( calculateNumber( 'DIVIDE', 100.5, 0.2 ) ).to.equal( 'Error' );
    } );
} );
