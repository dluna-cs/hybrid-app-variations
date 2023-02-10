var exec = require('cordova/exec');

function ContentsquarePlugin () {}

/**
 * Sends a command to the SDK
 *
 * @param {Object} name name of the command
 * @param {Object} payload the data associated with the command or null
 */
ContentsquarePlugin.prototype.sendCommand = function (name, payload) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, 'CDVContentsquarePlugin', 'sendCommand', [name, payload]);
    });
};

module.exports = new ContentsquarePlugin();
