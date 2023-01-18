var exec = require('cordova/exec');

function Assets () {}

/**
 * Get assets list
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
CsMob.prototype.list = function () {
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, 'CsMob', 'list', []);
    });
};

module.exports = new CsMob();
