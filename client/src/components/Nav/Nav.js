import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  handleLoginRoute() {
    window.location = "/login";
  }
  handleHomeRoute() {
    window.location = "/";
  }
  handleBookingRoute() {
    window.location = "/bookings";
  }
  render() {
    return (
      <Router>
        <Navbar dark expand="md" fixed="top" scrolling>
          <NavbarBrand href="/">
            <strong>SHAREMAGIC</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav>
              <NavItem>
                <NavLink to="/" onClick={() => this.handleHomeRoute()}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/login" onClick={() => this.handleLoginRoute()}>
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/bookings"
                  onClick={() => this.handleBookingRoute()}>
                  Bookings
                </NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </Router>
    );
  }
}

export default Nav;
