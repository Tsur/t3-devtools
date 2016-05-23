
function postMessage(data){

    chrome.runtime.sendMessage(data, function(message){});

}

function injectScript(file, node) {

    Array.from(document.querySelectorAll(`script[src="${file}"]`)).forEach(e => e.remove());

    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);

}

function init(){

    window.addEventListener('message', event => {

        console.log('comming from', new Date().getTime(), event.origin || event.originalEvent.origin);
        postMessage(event.data)
    });

    injectScript(chrome.runtime.getURL('inject.bundle.js'), 'body');

}

(function(){

    //setTimeout(()=>init(), 1000);

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

        //console.log('here');
        //
        //
        //init();
        //
        //sendResponse({pong: true});

        console.log('here highlight');

        if(message.elementID && message.highlight)
            document.getElementById(message.elementID).style.border = '3px solid black';

        if(message.elementID && !message.highlight)
            document.getElementById(message.elementID).style.border = 'none';

    });

    init();

})();