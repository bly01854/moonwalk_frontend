import React, { Component } from "react";

// Bootstrap
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal } from "react-bootstrap";

class Navigation extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      logShow: false,
      regShow: false,
    };
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
              <div className="navbar-circle" style={{marginLeft : 0 }}></div>
            </div>
            <img className="navbar-moon" src={require("../assets/moon.png")} alt="Moon" />
            <div className="navbar-meter-text">(0 of 238900 miles)</div>
          </Nav>   
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
