

function init(){


    var application = window.Box && window.Box.Application ? window.Box.Application : null;

    if(!application){

        console.log('lets send it');
        return postMessage({"error":"no t3 in page"});
    }


    console.log('t3 in on page');

    return window.postMessage({"error":"t3 is in page"}, '*');

}

init();
