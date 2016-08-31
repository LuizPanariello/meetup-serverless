'use strict';
var jenkinsapi = require('jenkins-api');

/**
 * Exporting commands
 */
module.exports = () => {
    let jenkins = jenkinsapi.init("ENDEREÇO DO JENKINS", {strictSSL: false});

    return {
        build : (job, callback) => {
            jenkins.build(job, callback);
        },
        help : (ignore, callback) => {
            let obj = {
                "response_type": "in_channel",
                "text": "I can help you with jenkins integration!",
                "attachments": [
                    { "text" : "I can't build yet but one day I swear that I will" },
                    { "text" : "Try: /jenkins last-build" }
                ]
            };

            callback(null, obj);
        },
        error : (ignore, callback) => {
            let obj = {
                "response_type": "in_channel",
                "text": "I can't find that command",
            };

            callback(null, obj);
        },
        "last-build": (ignore, callback) => {
            let obj = {
                "response_type": "in_channel",
                "text": "Success on Teste",
            };

            callback(null, obj);
        }
    };
};