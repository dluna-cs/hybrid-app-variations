var exec = require('cordova/exec');

function ContentsquarePlugin () {}

function injectTag() {
    const alreadyInjected = !!document.querySelector('#cs_config');

    if (alreadyInjected) {
        console.log('already injected')
        return;
    }

    const names = ['cs_config', 'cs_tag'];
    names.forEach((name) => {
        const node = document.createElement('script');
        node.id = name;
        node.src = 'js/' + name + '.js';
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
