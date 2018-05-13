import React, { Component } from "react";

import AuthService from './AuthService';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      distance: 0,
      method: "R"
    })

    this.handleDistanceChange = this.handleDistanceChange.bind(this)
    this.handleMethodChange = this.handleMethodChange.bind(this);
    this.logDistance = this.logDistance.bind(this);
    this.Auth = new AuthService();
  }

  handleDistanceChange(e) {
    this.setState({distance: e.target.value})
  }
  handleMethodChange(e) {
    this.setState({ method: e.target.value })
  }

  logDistance(e) {
    e.preventDefault();

    this.Auth.logDistance(this.Auth.getProfile().id, this.state.method, this.state.distance)
      .then(
        
      )
      .catch(err => {
        alert(err);
      })   
  }


  render() {
    return (
      <form className="user-input-form">
        <h2 className="user-input-header">Log Your Miles</h2>
        <p className="user-input-label" type="Distance:">
          <input type="number" onChange={this.handleDistanceChange}
            className="user-input-input" min="0" max="50"
            value={this.state.distance} required
          />
        </p>
        <p className="user-input-label" type="Method:">
          <select className="user-input-input" onChange={this.handleMethodChange} required>
              <option className="user-input-option" value="R">Run</option>
              <option className="user-input-option" value="W">Walk</option>
              <option className="user-input-option" value="C">Bike</option>
              <option className="user-input-option" value="O">Other</option>
          </select>
            
        </p>
        <button className="user-input-button" onClick={this.logDistance}>Submit</button>
      </form>
    );
  }
}

export default UserInput;
