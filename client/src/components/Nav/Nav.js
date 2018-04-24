import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container, Mask, View } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Nav.css';


class Nav extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        collapse: false,
        isWideEnough: false,
      };
  this.onClick = this.onClick.bind(this);
}

onClick(){
  this.setState({
    collapse: !this.state.collapse,
  });
}
render() {
  return (
            <Router>
              <Navbar dark expand="md" fixed="top" scrolling>
                <NavbarBrand href="/">
                <img src= 'sharehouse-color.png'/>
                </NavbarBrand>
                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                  <NavbarNav center>
                    <NavItem active>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/Login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/Bookings">Bookings</NavLink>
                    </NavItem>
                  </NavbarNav>
                </Collapse>
              </Navbar>
            </Router>
    );
  }
}

export default Nav;