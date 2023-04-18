const expect = require( 'chai' ).expect;
const calculateNumber = require( "./1-calcul.js" );

describe( 'calculateNumber', () => {
    describe( 'When the type is SUM', () => {
        it( 'checks for sum', () => {
            expect( calculateNumber( 'SUM', 1, 3 ), 4 );
            expect( calculateNumber( 'SUM', 1, 3.7 ), 5 );
            expect( calculateNumber( 'SUM', 3.7, 1 ), 5 );
            expect( calculateNumber( 'SUM', 1.4, 4.5 ), 6 );
        } );
    } );

    describe( 'When the type is SUBTRACT', () => {
        it( 'checks for subtract', () => {
            expect( calculateNumber( 'SUBTRACT', 1, 3 ), -2 );
            expect( calculateNumber( 'SUBTRACT', 1, 3.7 ), -3 );
            expect( calculateNumber( 'SUBTRACT', 3.7, 1 ), 3 );
            expect( calculateNumber( 'SUBTRACT', 1.4, 4.5 ), -4 );
        } );
    } );

    describe( 'When the type is DIVIDE', () => {
        it( 'checks for divide', () => {
            expect( calculateNumber( 'DIVIDE', 1.4, 4.5 ), 0.2 );
            expect( calculateNumber( 'DIVIDE', 1.4, 0 ), 'Error' );
        } );
    } );
} );
