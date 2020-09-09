import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class CustomerDelete extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  deleteCustomer(id) {
    const url = "/api/customers/" + id;
    fetch(url, {
      method: "DELETE",
    });
    this.props.stateRefresh();
  }
  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          삭제
        </Button>
        <Dialog>
          <DialogTitle open={this.state.open} onClose={this.handleClose}>
            삭제 경고
          </DialogTitle>
        </Dialog>
      </div>
      // <button
      //   onClick={(e) => {
      //     this.deleteCustomer(this.props.id);
      //   }}
      // >
      //   삭제
      // </button>
    );
  }
}

export default CustomerDelete;
