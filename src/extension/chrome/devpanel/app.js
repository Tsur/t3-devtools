
import React from 'react'
import T3 from './t3';
import Alert from './alert';
import * as MESSAGES from '../config/messages';

class App extends React.Component {

    constructor(props) {

        super(props);

        this.setBackgroundConnection = this.setBackgroundConnection.bind(this);
        this.messageHandler = this.messageHandler.bind(this);

        this.setBackgroundConnection();

        this.state = {t3:false, messages:[]};

    }

    messageHandler(message){

        switch(message.type){

            case MESSAGES.NO_T3:
                return this.setState({'t3': false});
            case MESSAGES.INIT:
                return this.setState({'t3': true, 'modules': message.modules});
            case MESSAGES.BROADCAST:
                return this.setState({'t3': true, 'messages': this.state.messages.concat(message.data)});
            case MESSAGES.ERROR:
                return console.log('error', message);
            default: return;

        }

    }

    setBackgroundConnection(){

        // Create a connection to the background page
        const backgroundPageConnection = chrome.runtime.connect({
            name: 'panel'
        });

        // Send init message to background
        chrome.runtime.sendMessage({
            tabId: chrome.devtools.inspectedWindow.tabId,
            inject: 'content.bundle.js'
        });

        // Listen to messages coming from background
        backgroundPageConnection.onMessage.addListener(this.messageHandler);
    }

    render() {

        return (this.state.t3 ? <T3 modules={this.state.modules} messages={this.state.messages}/> : <Alert />);
    }
}

export default App;