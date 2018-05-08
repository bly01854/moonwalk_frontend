import React, { Component } from "react";

import $ from "jquery";
var vex = require('vex-js')
vex.defaultOptions.className = 'vex-theme-os'


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      email: "",
      password: "",
    });

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.sendLoginStateUp = this.sendLoginStateUp.bind(this);

  }

  sendLoginStateUp(status, userId){
    console.log("calling")
    this.props.handleLogin(status, userId);
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  loginUser(e) {
    const url = "https://moonwalk-dev.herokuapp.com/auth/login";
    let userId;
    let success;
    e.preventDefault();

    /*$.post(url + "login", {email: this.state.email, password: this.state.password}, function(data, textStatus) {
      userId = data.user.id;
    }, "json"); */


      $.ajax(url, {
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
      });
      

  }

  render() {

    return (
      <form>
        <p className="user-input-label" type="Email:">
          <input type="email"
            className="user-input-input"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </p>
        <p className="user-input-label" type="Password:">
        <input type="password"
            className="user-input-input"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            
          />
        </p>
        <button className="user-input-button" onClick={this.loginUser}>Login</button>
      </form>
    );
  }
}

export default Login;
