import React, { Component } from "react";

import AuthService from "./AuthService";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';

class AdminNavbar extends Component {
  constructor(props) {
    super(props);


    this.Auth = new AuthService();
    this.logout = this.logout.bind(this);
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand >
            <a href="/" target="_self">Mission to the Moon</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
              <Link to='/admin/usertable'>Users</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
            <Link to='/admin/exercisetable'>Exercises</Link>
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
            </NavItem>
            <NavItem eventKey={2} onSelect={this.logout} href="/">
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  logout() {
      this.Auth.logout();
      
  }
}

export default AdminNavbar;
