import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Errors extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <Table multiSelectable={true}>
                <TableHeader enableSelectAll={true}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Time</TableHeaderColumn>
                        <TableHeaderColumn>Data</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.errors.map( (error, index) => (
                        <TableRow key={index} selected={error.selected}>
                            <TableRowColumn>{index}</TableRowColumn>
                            <TableRowColumn>{new Date().toLocaleTimeString()}</TableRowColumn>
                            <TableRowColumn>{JSON.stringify(error.exception)}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}

export default Errors;