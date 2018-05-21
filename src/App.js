import React, { Component } from "react";
import logo from "./logo.svg";

import Navigation from "./components/Navigation";
import AuthService from "./components/AuthService";
import { Parallax, Background } from "react-parallax";
import $ from "jquery";

import Landing from './components/Landing';
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn : false,
      admin : false,
      userId: 0,
      milesData: [],
      userMilesData: [],
      totalMiles: 0,
    };

    this.update = this.update.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout= this.handleLogout.bind(this);
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if(this.Auth.loggedIn()){
      this.setState({ loggedIn: true})
      if(this.Auth.getProfile().admin) {
        this.setState({ admin: true })
      } else {
        this.setState({ admin: false})
      }
    } else {
      this.setState({ loggedIn: false})
    }

    console.log(this.Auth.getProfile());
    
  }

  componentDidMount() {
    this.gatherMiles();
  }

  gatherMiles() {
    $.getJSON('https://moonwalk-dev.herokuapp.com/api/exercise/totals')
    .then(({ data }) =>  this.setState({ totalMiles: data.total, milesData: data.totalByCategory }));
  }

  handleLogin(status, admin) {
    this.setState({ loggedIn: status, admin: admin})
  }
  handleLogout(status) {
    this.setState({ loggedIn: status })
  }

  render() {
    return (
      <div className="App">
        <div className="background"></div>
        <Navigation loggedIn={this.state.loggedIn} totalMiles={this.state.totalMiles} 
        onLoginChange={this.handleLogin} handleLogout={this.handleLogout} 
        update={this.update} admin={this.state.admin} />
        <Landing loggedIn={this.state.loggedIn} milesData={this.state.milesData}/>
      </div>
    );
  }

  update() {
    this.forceUpdate();
  }
}

export default App;
