'use strict';

const Alexa = require('alexa-sdk');
var Config = require('./config/config');

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = Config.APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'HelloWorldIntent': function () {
        //build response first using responseBuilder and then emit
        this.response.speak('Hello World!');
        this.emit(':responseReady');
    }
};
