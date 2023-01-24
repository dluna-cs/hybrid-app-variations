var exec = require('cordova/exec');

function CsMobPlugin () {}

/**
 * Sends a command to the SDK
 *
 * @param {Object} name name of the command
 * @param {Object} payload the data associated with the command or null
 */
CsMobPlugin.prototype.sendCommand = function (name, payload) {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, 'CsMobPlugin', 'sendCommand', [name, payload]);
    });
};

module.exports = new CsMobPlugin();
