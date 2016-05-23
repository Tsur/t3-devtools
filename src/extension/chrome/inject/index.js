
import * as MESSAGES from '../config/messages';

function postMessage(type, msg={}, to=window.location.origin){

    msg.type = type || MESSAGES.VOID;

    window.postMessage(msg, to);

}

function startListener(app){

    app.on('error', event => postMessage(MESSAGES.ERROR, event));
    app.on('message', event => postMessage(MESSAGES.BROADCAST, event));

    const modules = Array.from(document.querySelectorAll("[data-module]"))
        .map(element => ({name:element.dataset.module, dom:element.id, status:'running'}));

    postMessage(MESSAGES.INIT, {modules});

}

(function(){

    const application = window.Box && window.Box.Application ? window.Box.Application : null;

    return application ? startListener(application) : postMessage(MESSAGES.NO_T3);

})();
