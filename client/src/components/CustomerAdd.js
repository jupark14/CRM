import React from "react";
import { post } from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  hidden: {
    display: "none",
  },
});

class CustomerAdd extends React.Component {
  state = {
    id: "",
    file: null,
    name: "",
    department: "",
    rank: "",
    email: "",
    fileName: "",
  };

  handleValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.addCustomer()
      .then((res) => {
        console.log(res.data);
        this.props.stateRefresh();
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      id: "",
      file: null,
      name: "",
      department: "",
      rank: "",
      email: "",
      fileName: "",
    });
  };

  addCustomer = () => {
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", this.state.file);
    formData.append("id", this.state.id);
    formData.append("name", this.state.name);
    formData.append("department", this.state.department);
    formData.append("rank", this.state.rank);
    formData.append("email", this.state.email);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>고객 추가</h1>
        프로필 이미지:
        <input
          type="file"
          name="file"
          file={this.state.file}
          value={this.state.fileName}
          onChange={this.handleFileChange}
        />
        <br />
        이름:
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleValueChange}
        />
        <br />
        사번:
        <input
          type="text"
          name="id"
          value={this.state.id}
          onChange={this.handleValueChange}
        />
        <br />
        부서:
        <input
          type="text"
          name="department"
          value={this.state.department}
          onChange={this.handleValueChange}
        />
        <br />
        직급:
        <input
          type="text"
          name="rank"
          value={this.state.rank}
          onChange={this.handleValueChange}
        />
        <br />
        e-mail:
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleValueChange}
        />
        <br />
        <button type="submit">추가하기</button>
      </form>
    );
  }
}

export default CustomerAdd;
