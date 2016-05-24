import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Messages extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <Table multiSelectable={true}>
                <TableHeader enableSelectAll={true}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Event</TableHeaderColumn>
                        <TableHeaderColumn>Time</TableHeaderColumn>
                        <TableHeaderColumn>Data</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.messages.map( (msg, index) => (
                        <TableRow key={index} selected={msg.selected}>
                            <TableRowColumn>{index}</TableRowColumn>
                            <TableRowColumn>{msg.message}</TableRowColumn>
                            <TableRowColumn>{new Date().toLocaleDateString()}</TableRowColumn>
                            <TableRowColumn>{JSON.stringify(msg.messageData)}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default Messages;