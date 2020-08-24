import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell><img src={this.props.image} alt="profile" title={`${this.props.name}(${this.props.id})}`} /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>{this.props.department}</TableCell>
                <TableCell>{this.props.rank}</TableCell>
            </TableRow>
        );
    }
}

export default Customer;