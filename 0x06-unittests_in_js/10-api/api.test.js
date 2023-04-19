const { url } = require( 'inspector' );
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

describe( 'Available payments page', () => {
    it( 'should return status code 200', ( done ) => {
        request.get( 'http://localhost:7865/available_payments', ( error, response ) => {
            expect( response.statusCode ).to.equal( 200 );
            done();
        } );
    } );

    it( 'should return the list of available payments', ( done ) => {
        request.get( 'http://localhost:7865/available_payments', ( error, response, body ) => {
            expect( body ).to.equal( '{"payment_methods":{"credit_cards":true,"paypal":false}}' );
            done();
        } );
    } );
} );

describe( 'Login page', () => {
    it( 'should return status code 200', ( done ) => {
        request.post( 'http://localhost:7865/login', ( error, response ) => {
            expect( response.statusCode ).to.equal( 200 );
            done();
        } );
    } );

    it( 'should return the message "Welcome Chalo"', ( done ) => {
        const apiCall = {
            url: 'http://localhost:7865/login',
            method: 'POST',
            json: {
                userName: 'Chalo',
            },
        };
        request( apiCall, ( error, response, body ) => {
            expect( body ).to.equal( 'Welcome Chalo' );
            done();
        });
    } );
});
