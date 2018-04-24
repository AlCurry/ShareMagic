import React, { Component } from "react";
import axios from "axios";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Col, Row, Container } from "../../components/Grid";
import "./login.css";
import LazyHero from "react-lazy-hero";
import LazyHeros4 from "../../components/LazyHero4";

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
      <Container fluid>
      <LazyHeros4/>
      <div className="Login">
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
        <br/>
        <footer className="page-footer font-small stylish-color-dark pt-4 mt-4">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                  Disclaimer
                </h5>
                <p>
                  We are not responsible for any incorrect bookings. Copyrigth
                  ShareMagic 2018
                </p>
              </div>
              <hr className="clearfix w-100 d-md-none" />
            </div>
          </div>
          <hr />
          <div className="text-center py-3">
            <ul className="list-unstyled list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="mb-1">Register for free</h5>
              </li>
              <li className="list-inline-item">
                <a href="/login" className="btn btn-danger btn-rounded">
                  Sign up!
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </footer>
      </div>
      </Container>
    );
  }
}
export default Login;
