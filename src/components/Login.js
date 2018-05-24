import React, { Component } from "react";
import { Alert } from 'react-bootstrap';

import AuthService from './AuthService';

var vex = require('vex-js')
vex.defaultOptions.className = 'vex-theme-os'


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      email: "",
      password: "",
      loginError: false,
    });

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.sendLoginStateUp = this.sendLoginStateUp.bind(this);

    this.Auth = new AuthService();

  }

  sendLoginStateUp(status, admin){
    console.log("calling")
    this.props.handleLogin(status, admin);
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  loginUser(e) {
    e.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(() => {
        this.sendLoginStateUp(this.Auth.loggedIn(), this.Auth.getProfile().admin)
      }
      )
      .catch(err => {
        console.log(err);
        this.setState({loginError: true})
      })
      /*$.ajax(url, {
        context: this,
        type: "POST",
        data: {email: this.state.email, password: this.state.password},
        dataType: "json",
        success: function(data) {
          userId = data.user.id;
          success = true;
          console.log("success");
          this.sendLoginStateUp(true, userId);
          
        },
        error: function() {
          success = false;
        },
      }); */
  }

  render() {

    return (
      <form>
        {this.state.loginError && <Alert bsStyle="warning">Wrong Username or Password!</Alert>}
        <p className="user-input-label" type="Email:">
          <input type="email"
            className="user-input-input"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
        </p>
        <p className="user-input-label" type="Password:">
        <input type="password"
            className="user-input-input"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
        </p>
        <button className="user-input-button" onClick={this.loginUser}>Login</button>
      </form>
    );
  }
}

export default Login;
