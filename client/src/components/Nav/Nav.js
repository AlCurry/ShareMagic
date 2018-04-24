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

const navStyle = {
  width: "48px",
  height: "48px"
};
class Nav extends React.Component {
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
            <img style={navStyle} src="sharehouse-color.png" />
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
