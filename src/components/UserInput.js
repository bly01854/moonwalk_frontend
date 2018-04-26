import React, { Component } from "react";

class UserInput extends Component {
  render() {
    return (
      <form className="user-input-form">
        <h2 className="user-input-header">Log Your Distance</h2>
        <p className="user-input-label" type="Distance:">
          <input type="number"
            className="user-input-input"
          />
        </p>
        <p className="user-input-label" type="Method:">
          <select className="user-input-input">
              <option className="user-input-option" value="run">Run</option>
              <option className="user-input-option" value="walk">Walk</option>
              <option className="user-input-option" value="bike">Bike</option>
          </select>
            
        </p>
        <button className="user-input-button">Submit</button>
      </form>
    );
  }
}

export default UserInput;
