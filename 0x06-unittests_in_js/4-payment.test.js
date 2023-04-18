'use strict';
const sinon = require( 'sinon' );
const sendPaymentRequestToApi = require( './4-payment' );
const Utils = require( './utils' );

describe( 'sendPaymentRequestToApi', () => {
    let stub;
    let spy;

    beforeEach( () => {
        stub = sinon.stub( Utils, 'calculateNumber' ).returns( 10 );
        spy = sinon.spy( console, 'log' );
    } );

    afterEach( () => {
        stub.restore();
        spy.restore();
    } );

    it( 'should call Utils.calculateNumber with SUM and the right arguments', () => {
        sendPaymentRequestToApi( 100, 20 );
        sinon.assert.calledOnce( stub );
        sinon.assert.calledWithExactly( stub, 'SUM', 100, 20 );
    } );

    it( 'should log the correct message with the total', () => {
        sendPaymentRequestToApi( 100, 20 );
        sinon.assert.calledOnce( spy );
        sinon.assert.calledWithExactly( spy, 'The total is: 10' );
    } );
} );
