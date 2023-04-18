'use strict';
const sinon = require( 'sinon' );
const sendPaymentRequestToApi = require( './3-payment' );
const { calculateNumber } = require( './utils' );
const Utils = require( './utils' );

describe( 'sendPaymentRequestToApi', () => {
    it( 'should call Utils.calculateNumber with SUM and the right arguments', () => {
        const spy = sinon.spy( Utils, 'calculateNumber' );

        sendPaymentRequestToApi( 100, 20 );
        sinon.assert.calledOnce( spy );
        sinon.assert.calledWithExactly( spy, 'SUM', 100, 20 );
        spy.restore();
    } );
} );
