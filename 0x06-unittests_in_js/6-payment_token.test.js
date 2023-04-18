const { expect } = require( 'chai' );
const mocha = require( 'mocha' );
const getPaymentTokenFromAPI = require( './6-payment_token' );

describe( 'getPaymentTokenFromAPI', () => {
    it( 'should return a resolved promise with a success message', ( done ) => {
        getPaymentTokenFromAPI( true )
            .then( ( result ) => {
                expect( result ).to.deep.equal( { data: 'Successful response from the API' } );
                done();
            } )
            .catch( ( error ) => {
                done( error );
            } );
    } );
} );
