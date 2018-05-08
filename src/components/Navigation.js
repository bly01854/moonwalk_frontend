import React, { Component } from "react";

// Bootstrap
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal } from "react-bootstrap";

import Login from "./Login";
import Register from "./Register";

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);

    this.loginShow = this.loginShow.bind(this);
    this.loginClose = this.loginClose.bind(this);

    this.registerShow = this.registerShow.bind(this);
    this.registerClose = this.registerClose.bind(this);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.state = {
      logShow: false,
      regShow: false,
    };
  }

  handleLogin(status, id) {
    this.props.onLoginChange(status, id);
  }

  handleLogout(status) {
    this.props.handleLogout(status);
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

    function progressCalculation(progress) {
      let percentProgress = ((progress / 238900) * 0.75) * 100;
      percentProgress = percentProgress + "vh";
      return percentProgress;
    }

    const progress = progressCalculation(this.props.totalMiles);

    return (
      <Navbar inverse collapseOnSelect className="navbar-custom" fixedTop >
        <Navbar.Header>
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <img className="navbar-earth" src={require("../assets/earth.png")} alt="Earth" />
            <div className="navbar-line-container">
              <div className="navbar-line"></div>
              <div className="navbar-circle" style={{marginLeft : progress }}></div>
            </div>
            <img className="navbar-moon" src={require("../assets/moon.png")} alt="Moon" />
            <div className="navbar-meter-text">({this.props.totalMiles} of 238900 miles)</div>
          </Nav>
          
            {this.props.loggedIn ? (
              <Nav pullRight className="extra-pull">
              <NavItem onSelect={this.handleLogout}>Logout</NavItem>
              </Nav>
            ) : (
              <Nav pullRight className="extra-pull">
              <NavItem eventKey={1} onSelect={this.loginShow}>
              Login
            </NavItem>
            <Modal show={this.state.logShow} onHide={this.loginClose} >
              <Modal.Header closeButton className="transparent">
                <Modal.Title className="login-header">LOGIN</Modal.Title>
              </Modal.Header>
              <Modal.Body className="login-background">
                <Login handleLogin={this.handleLogin} />
              </Modal.Body>
            </Modal>
            <NavItem eventKey={2} onSelect={this.registerShow}>
              Register
            </NavItem>
            <Modal show={this.state.regShow} onHide={this.registerClose}>
              <Modal.Header closeButton className="transparent">
                <Modal.Title className="login-header">Register</Modal.Title>
              </Modal.Header>
              <Modal.Body className="login-background">
                <Register registerClose={this.registerClose} />
              </Modal.Body>
            </Modal>
            </Nav>
            
            )}
            
          
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
