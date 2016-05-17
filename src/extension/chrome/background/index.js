
const extensionListener = function (port) {

    return (message, sender, sendResponse) => {

        if(message.tabId && message.content) {

            chrome.tabs.executeScript(message.tabId, {file: message.content});

        } else {

            port.postMessage(message);

        }

        sendResponse(message);
    }

};

chrome.extension.onConnect.addListener(port => chrome.extension.onMessage.addListener(extensionListener(port)));

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => true);