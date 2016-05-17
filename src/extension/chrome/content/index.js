
function postMessage(data){

    chrome.extension.sendMessage(data, function(message){});

}

function injectScript(file, node) {

    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);

}

function init(){

    window.addEventListener('message', event => postMessage(event.data));

    injectScript(chrome.extension.getURL('inject.bundle.js'), 'body');

}

(function(){

    setTimeout(()=>init(), 1000);

})();