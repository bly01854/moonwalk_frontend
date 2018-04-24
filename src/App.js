import React, { Component } from "react";
import logo from "./logo.svg";

import Navigation from "./components/Navigation";
import { Parallax, Background } from "react-parallax";

import Landing from './components/Landing';

  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : false,
      walkingMiles: 34000,
      runningMiles: 21000,
      cyclingMiles: 27000,
      totalMiles: 88000,
    };
  }
  render() {
    return (
      <div className="App">
        <Navigation loggedIn={this.state.loggedIn} totalMiles={this.state.totalMiles} />
        <Parallax bgImage={require('./assets/standing-on-the-moon-space-plain.jpg')} strength={500}>
          <Landing loggedIn={this.state.loggedIn} walkingMiles={this.state.walkingMiles} runningMiles={this.state.runningMiles} cyclingMiles={this.state.cyclingMiles}/>
        </Parallax>
      </div>
    );
  }
}

export default App;
