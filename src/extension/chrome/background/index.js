
const extensionListener = function (port) {

    return (message, sender, sendResponse) => {

        if(message.tabId) {

            console.log('message to tab content script');

            if(message.inject) return chrome.tabs.executeScript(message.tabId, {file: message.inject});
            if(message.elementID) return chrome.tabs.sendMessage(message.tabId, message);

        } else {

            port.postMessage(message);

        }

        sendResponse(message);
    }

};

chrome.runtime.onConnect.addListener(port => chrome.runtime.onMessage.addListener(extensionListener(port)));

//chrome.runtime.onMessage.addListener((request, sender, sendResponse) => true);