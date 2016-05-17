
// This callback function is called when the content script has been
// injected and returned its results
function onPageDetailsReceived(message)  {

    var str = JSON.stringify(message);
    return document.querySelector('p').textContent = str;

    //if(message.type === "0"){
    //
    //    var str = JSON.stringify(message);
    //    return document.querySelector('p').textContent = str;
    //}
    //
    //if(message.type === "1"){
    //
    //
    //}
}

var injectDebugger = function() {

    return "inject.bundle.js";

    // load injected script
    //var xhr = new XMLHttpRequest();
    //xhr.open('GET', chrome.extension.getURL('/content.js'), false);
    //xhr.send();
    //return xhr.responseText;

    // inject into inspectedWindow
    //chrome.devtools.inspectedWindow.eval(script);
};

// When the popup HTML has loaded
window.addEventListener('load', function() {

    // Create a connection to the background page
    var backgroundPageConnection = chrome.runtime.connect({
        name: 'pane'
    });

    // Send init message to background
    chrome.extension.sendMessage({
        name: 'init',
        tabId: chrome.devtools.inspectedWindow.tabId,
        content: injectDebugger()
    });

    // Listen to messages coming from background
    backgroundPageConnection.onMessage.addListener(onPageDetailsReceived);

});