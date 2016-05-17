
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

    window.addEventListener('message', function(event) {

        console.log('got message', event);

        postMessage(event.data);

        /*// Only accept messages from same frame
        if (event.source !== window) {
            return;
        }

        var message = event.data;

        // Only accept messages that we know are ours
        if (typeof message !== 'object' || message === null || !message.t3) {
            return;
        }

        console.log('sending', message);
*/
        //chrome.runtime.sendMessage(message);
    });

    injectScript(chrome.extension.getURL('inject.bundle.js'), 'body');

}


(function(){


    setTimeout(function(){ init(); }, 1000);
    //application.on('message', function(data){
    //
    //   postMessage({type:"1", data:data});
    //
    //});

})();

