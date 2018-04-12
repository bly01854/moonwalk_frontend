import React, { Component } from "react";

// Bootstrap
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect className="navbar-custom" fixedTop >
        <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className="extra-pull">
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
