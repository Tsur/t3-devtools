
// This callback function is called when the content script has been
// injected and returned its results
function onPageDetailsReceived(message)  {

    return document.querySelector('p').textContent = JSON.stringify(message);
}

// When the popup HTML has loaded
window.addEventListener('load', function() {

    // Create a connection to the background page
    const backgroundPageConnection = chrome.runtime.connect({
        name: 'panel'
    });

    // Send init message to background
    chrome.extension.sendMessage({
        name: 'init',
        tabId: chrome.devtools.inspectedWindow.tabId,
        content: 'content.bundle.js'
    });

    // Listen to messages coming from background
    backgroundPageConnection.onMessage.addListener(onPageDetailsReceived);

});