const request = require( 'request' );
const expect = require( 'chai' ).expect;

describe( 'Index page', () => {
    it( 'should return status code 200', ( done ) => {
        request.get( 'http://localhost:7865/', ( error, response ) => {
            expect( response.statusCode ).to.equal( 200 );
            done();
        } );
    } );

    it( 'should return the message "Welcome to the payment system"', ( done ) => {
        request.get( 'http://localhost:7865/', ( error, response, body ) => {
            expect( body ).to.equal( 'Welcome to the payment system' );
            done();
        } );
    } );
} );

describe( 'Cart page', () => {
    it( 'should return status code 200 when :id is a number', ( done ) => {
        request.get( 'http://localhost:7865/cart/12', ( error, response , body) => {
            expect( response.statusCode ).to.equal( 200 );
            expect( body ).to.equal( 'Payment methods for cart 12' );
            done();
        } );
    } );

    it( 'should return status code 404 when :id is NOT a number', ( done ) => {
        request.get( 'http://localhost:7865/cart/abc', ( error, response ) => {
            expect( response.statusCode ).to.equal( 404 );
            done();
        } );
    } );
} );
