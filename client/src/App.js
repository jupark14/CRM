import React, { Component } from "react";
import axios from "axios";
import Customer from "./components/Customer";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import CustomerAdd from "./components/CustomerAdd";

const styles = (theme) => ({
  root: {
    width: "100%",
    overflowX: "visible",
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: theme.spacing(2),
  },
});

// const styles = makeStyles({
//   root: {
//     width: "100%",
//     overflowX: "visible"
//     },

//   table: {
//     minWidth: 1080,
//   },
// });

class App extends Component {
  state = {
    customers: "",
    completed: 0,
  };

  stateRefresh = () => {
    this.setState({
      customers: "",
      completed: 0,
    });
    console.log("여기까지됨");
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then((res) => this.setState({ customers: res }))
      .catch((err) => console.log(err));
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({
      completed: this.state.completed >= 20 ? 0 : completed + 1,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>사진</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>사번</TableCell>
                <TableCell>부서</TableCell>
                <TableCell>직급</TableCell>
                <TableCell>e-mail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? (
                this.state.customers.map((c) => {
                  return (
                    <Customer
                      stateRefresh={this.stateRefresh}
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      department={c.department}
                      rank={c.rank}
                      email={c.email}
                    />
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress
                      className={classes.progress}
                      variant="determinate"
                      value={this.state.completed}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh} />
      </div>
    );
  }
}

export default withStyles(styles)(App);

// app을 함수형으로 바꾼 다음에 makestyle을 써도 작동함
// export default function App(){
//   const classes = styles();
//   return (
//     <Paper>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell>사진</TableCell>
//             <TableCell>이름</TableCell>
//             <TableCell>사번</TableCell>
//             <TableCell>부서</TableCell>
//             <TableCell>직급</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {customers.map(c => {
//             return <Customer key={c.id} id={c.id} image={c.image} name={c.name} department={c.department} rank={c.rank} />
//           })}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

//react hook을 이용한 구현 참고
// ...
// const [completed, setCompleted] = useState(0);
// ...
// useEffect(() => {
//     setTimeout(
//       progress , 20
//     );
//     callApi().then(res => setCustomers(res)).catch(err => console.log(err));
//   }, [completed]);
// ...
// const progress = () => {
//     setCompleted(completed >= 100 ? 0 : completed + 1);
//   }
// ...
