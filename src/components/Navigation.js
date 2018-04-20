import React, { Component } from "react";

// Bootstrap
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal } from "react-bootstrap";

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);

    this.loginShow = this.loginShow.bind(this);
    this.loginClose = this.loginClose.bind(this);

    this.registerShow = this.registerShow.bind(this);
    this.registerClose = this.registerClose.bind(this);

    this.state = {
      logShow: false,
      regShow: false,
    };
  }

  loginShow() {
    this.setState({ logShow: true});
  }

  loginClose() {
    this.setState({ logShow: false});
  }

  registerShow() {
    this.setState({ regShow: true});
  }

  registerClose() {
    this.setState({ regShow: false});
  }

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
            <NavItem eventKey={1} onSelect={this.loginShow}>
              Login
            </NavItem>
            <Modal show={this.state.logShow} onHide={this.loginClose}>
              <Modal.Header closeButton>
                <Modal.Title>LOGIN</Modal.Title>
              </Modal.Header>
              <Modal.Body>

              </Modal.Body>
            </Modal>
            <NavItem eventKey={2} onSelect={this.registerShow}>
              Register
            </NavItem>
            <Modal show={this.state.regShow} onHide={this.registerClose}>
              <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
              </Modal.Header>
              <Modal.Body>

              </Modal.Body>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
