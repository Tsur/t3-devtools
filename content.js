
function postMessage(data){

    chrome.extension.sendMessage(data, function(message){});
}


(function(){

    var application = window.Box && window.Box.Application ? window.Box.Application : null;

    if(!application){

        console.log('lets send it');
        return postMessage({"error":"no t3 in page"});
    }

    application.on('message', function(data){

       postMessage({type:"1", data:data});

    });

})();

