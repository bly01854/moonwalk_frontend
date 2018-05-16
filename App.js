import React, { Component } from "react";
import logo from "./logo.svg";

import Navigation from "./components/Navigation";
import { Parallax, Background } from "react-parallax";
import $ from "jquery";

import Landing from './components/Landing';
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : false,
      userId: 0,
      walkingMiles: 0,
      runningMiles: 0,
      cyclingMiles: 0,
      otherMiles: 0,
      totalMiles: 0,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }
  componentDidMount() {
    this.gatherMiles();
  }

  gatherMiles() {
    $.getJSON('https://moonwalk-dev.herokuapp.com/api/exercise/totals')
    .then(({ data }) => this.setState({ totalMiles: data.total, walkingMiles: data.totalByCategory[0].distance, 
      runningMiles: data.totalByCategory[1].distance, cyclingMiles: data.totalByCategory[2].distance }));
  }

  handleLogin(status, Id) {
    this.setState({ loggedIn: status, userId: Id})
  }

  render() {
    return (
      <div className="App">
        <div className="background"></div>
        <Navigation loggedIn={this.state.loggedIn} totalMiles={this.state.totalMiles} onLoginChange={this.handleLogin} />
        <Landing loggedIn={this.state.loggedIn} walkingMiles={this.state.walkingMiles} runningMiles={this.state.runningMiles} cyclingMiles={this.state.cyclingMiles}/>
      </div>
    );
  }
}

export default App;
