import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Modules from './modules';
import Messages from './messages';

class T3 extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <Tabs>
                <Tab label="Modules">
                    <Modules modules={this.props.modules} />
                </Tab>
                <Tab label="Messages">
                    <Messages messages={this.props.messages} />
                </Tab>
                <Tab label="Errors">
                    <div>
                        <p>Errors</p>
                    </div>
                </Tab>
            </Tabs>
        );
    }
}

export default T3;