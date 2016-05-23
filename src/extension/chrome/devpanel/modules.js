import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Modules extends React.Component {

    constructor(props) {

        super(props);

        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    onMouseEnterHandler(event){

        chrome.runtime.sendMessage({
            tabId: chrome.devtools.inspectedWindow.tabId,
            highlight: true,
            elementID: event.target.textContent
        });
    }

    onMouseLeaveHandler(event){

        chrome.runtime.sendMessage({
            tabId: chrome.devtools.inspectedWindow.tabId,
            highlight: false,
            elementID: event.target.textContent
        });
    }

    render() {

        return (
            <Table multiSelectable={true}>
                <TableHeader enableSelectAll={true}>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>DOM</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.modules.map( (module, index) => (
                        <TableRow key={index} selected={module.selected}>
                            <TableRowColumn>{module.name}</TableRowColumn>
                            <TableRowColumn><div onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>{module.dom}</div></TableRowColumn>
                            <TableRowColumn>{module.status}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default Modules;