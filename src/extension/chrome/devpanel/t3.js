import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Modules from './modules';

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
                    <div>
                        <p>Messages</p>
                    </div>
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