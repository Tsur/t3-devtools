
(function(){

    const application = window.Box && window.Box.Application ? window.Box.Application : null;

    if(!application){

        return window.postMessage({"ko":"t3 not loaded in page"}, '*');
    }

    return window.postMessage({"ok":"t3 loaded in page"}, '*');

})();
