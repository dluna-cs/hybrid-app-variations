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

// TODO: for TAG fetch the latests one based on ETag header
// store Etag + script source in LocalStorage
injectTag();
