import React, { Component } from "react";

// Bootstrap
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="navbar-custom" fixedTop >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Login
            </NavItem>
            <NavItem eventKey={2} href="#">
              Register
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
