import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form>
        <p className="user-input-label" type="Email:">
          <input type="email"
            className="user-input-input"
          />
        </p>
        <p className="user-input-label" type="Password:">
        <input type="text"
            className="user-input-input"
          />
        </p>
        <button className="user-input-button">Login</button>
      </form>
    );
  }
}

export default Login;
