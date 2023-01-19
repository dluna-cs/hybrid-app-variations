var exec = require('cordova/exec');

function Assets () {}

/**
 * Get assets list
 *
 * @param {Object} command the command to send to SDK
 * @param {String} command.type the command type
 * @param {Object} command.payload the data associated with the command
 */
CsMob.prototype.sendCommand = function () {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, 'CsMob', 'sendCommand', [payload]);
    });
};

module.exports = new CsMob();
