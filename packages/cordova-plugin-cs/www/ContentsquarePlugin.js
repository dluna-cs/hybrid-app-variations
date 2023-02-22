var exec = require('cordova/exec');

function ContentsquarePlugin () {}

function injectTag() {
    const urls = ['js/cs_config.js', 'js/cs_tag.js'];
    const alreadyInjected = !!document.querySelector('script[src='+ urls[0] +']');

    if (alreadyInjected) {
        console.log('already injected')
        return;
    }

    urls.forEach((url) => {
        const node = document.createElement('script');
        node.src = url;
        document.head.appendChild(node);
    });
}

/**
 * Sends a command to the SDK
 *
 * @param {Object} name name of the command
 * @param {Object} payload the data associated with the command or null
 */
ContentsquarePlugin.prototype.sendCommand = function (name, payload) {
    injectTag();
    return new Promise(function(resolve, reject) {
        exec(resolve, reject, 'ContentsquarePlugin', 'sendCommand', [name, payload]);
    });
};

module.exports = new ContentsquarePlugin();
