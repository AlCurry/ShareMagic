import React, { Component } from "react";
import axios from "axios";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleRegisterRoute() {
    window.location = "/register";
  }
  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(function(data) {
        window.location = "/";
      })
      .catch(function(err) {
        console.log("we should handle an error here boys");
      });
  };
  componentWillMount() {
    // this.checkAuth();
  }
  render() {
    return (
      <div className="Login container">
        <br /> <br /> <br />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit">
            Login
          </Button>
          <Button
            block
            bsSize="large"
            onClick={() => this.handleRegisterRoute()}
            type="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }
}
export default Login;
