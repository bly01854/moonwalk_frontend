import React, { Component } from "react";

import $ from "jquery";

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

  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  loginUser(e) {
    const url = "https://moonwalk-dev.herokuapp.com/auth/";
    let userId;
    e.preventDefault();

    $.post(url + "login", {email: this.state.email, password: this.state.password}, function(data, textStatus) {
      userId = data.user.id;
    }, "json");

    this.props.handleLogin(true, userId);
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
