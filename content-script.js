console.log('loading content script');

window.addEventListener('message', function(event) {

    console.log('got message', event);

    // Only accept messages from same frame
    if (event.source !== window) {
        return;
    }

    var message = event.data;

    // Only accept messages that we know are ours
    if (typeof message !== 'object' || message === null || !message.t3) {
        return;
    }

    console.log('sending', message);

    chrome.runtime.sendMessage(message);
});