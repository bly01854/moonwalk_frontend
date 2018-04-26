import React, { Component } from "react";
import logo from "./logo.svg";

import Navigation from "./components/Navigation";
import { Parallax, Background } from "react-parallax";

import Landing from './components/Landing';

  
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background"></div>
        <Navigation />
        <Landing/>
      </div>
    );
  }
}

export default App;
