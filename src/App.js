import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const customers = [
  {
    'id': '111111',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBasAtPgN_RDTZ56mA8a2HBAqum7KXg6KeQ&usqp=CAU',
    'name': '박지우',
    'department': 'Digital Innovation Lab',
    'rank': 'Manager'
  },
  {
    'id': '222222',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBasAtPgN_RDTZ56mA8a2HBAqum7KXg6KeQ&usqp=CAU',
    'name': '김민석',
    'department': 'Digital Innovation Lab',
    'rank': 'Manager'
  },
  {
    'id': '333333',
    'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhBasAtPgN_RDTZ56mA8a2HBAqum7KXg6KeQ&usqp=CAU',
    'name': '윤새하',
    'department': 'Digital Innovation Lab',
    'rank': 'Manager'
  }]

class App extends Component {
  render() {
    const { classes } = this.props;//?
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>사번</TableCell>
              <TableCell>부서</TableCell>
              <TableCell>직급</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {
              return <Customer key={c.id} id={c.id} image={c.image} name={c.name} department={c.department} rank={c.rank} />
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
