import React, { Component } from "react";
import logo from "./logo.svg";

import Navigation from "./components/Navigation";
import { Parallax, Background } from "react-parallax";

import Landing from './components/Landing';

  
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Parallax bgImage={require('./assets/standing-on-the-moon-space-plain.jpg')} strength={500}>
          <Landing/>
        </Parallax>
      </div>
    );
  }
}

export default App;
