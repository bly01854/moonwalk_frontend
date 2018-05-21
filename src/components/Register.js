import React, { Component } from "react";
import {Alert} from "react-bootstrap";

import $ from "jquery";
var vex = require('vex-js')
vex.registerPlugin(require('vex-dialog'))
vex.defaultOptions.className = 'vex-theme-flat-attack';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      county: "Christian",
      birthDate: "",
      gender: "M",
      preferredMeasure: "MI",
      passwordMatch: true,
    });

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleCountyChange = this.handleCountyChange.bind(this);
    this.handleBirthDateChange = this.handleBirthDateChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);

    this.registerUser = this.registerUser.bind(this);
  }

  registerClose() {
    this.props.registerClose();
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleConfirmPasswordChange(e) {
    this.setState({confirmPassword: e.target.value});
  }
  handleCountyChange(e) {
    this.setState({county: e.target.value});
  }
  handleBirthDateChange(e) {
    this.setState({birthDate: e.target.value});
  }
  handleGenderChange(e) {
    this.setState({gender: e.target.value});
  }

  registerUser(e) {
    const url = "https://moonwalk-dev.herokuapp.com/auth/register";
    e.preventDefault();

    if(this.state.password !== this.state.confirmPassword){
      this.setState({passwordMatch: false})
    } else {

    const postData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      county: this.state.county,
      birthDate: this.state.birthDate,
      gender: this.state.gender,
      preferredMeasure: this.state.preferredMeasure
    }
    $.ajax(url, {
      context: this,
      type: "POST",
      data: postData,
      dataType: "json",
      success: function(data) {
        console.log("success");
        vex.dialog.alert({
          message: "Registered Successfully, now login and get moving!",
          
        });
        this.registerClose();
      },
      error: function() {
      },
      
    });
  } }

  render() {
    return (
      <form>
        {!this.state.passwordMatch && <Alert bsStyle="warning">Passwords do not match!</Alert>}
        <p className="user-input-label" type="Email:">
          <input type="text"
            className="user-input-input"
            value={this.state.email}
            onChange={this.handleEmailChange} required
          />
        </p>
        <p className="user-input-label" type="Password:">
        <input type="password"
            className="user-input-input"
            value={this.state.password}
            onChange={this.handlePasswordChange} required
          />
        </p>
        <p className="user-input-label" type="Confirm Password:">
        <input type="password"
            className="user-input-input"
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange} required
          />
        </p>
        <p className="user-input-label" type="Name:">
            <input type="text" className="user-input-input"
            value={this.state.name}
            onChange={this.handleNameChange} required />
        </p>
        <p className="user-input-label" type="Gender:">
            <select className="user-input-input" onChange={this.handleGenderChange} required>
                <option className="user-input-option" value="M">Male</option>
                <option className="user-input-option" value="F">Female</option>
                <option className="user-input-option" value="O">Other / Do not wish to specify</option>
            </select>
        </p>
        <p className="user-input-label" type="Date of Birth:">
            <input type="date" className="user-input-input"
            value={this.state.birthDate}
            onChange={this.handleBirthDateChange} required/>
        </p>
        <p className="user-input-label" type="County:">
            <select className="user-input-input" onChange={this.handleCountyChange} required>
            <option value="Adair">Adair County</option>
            <option value="Allen">Allen County</option>
            <option value="Anderson">Anderson County</option>
            <option value="Ballard">Ballard County</option>
            <option value="Barren">Barren County</option>
            <option value="Bath">Bath County</option>
            <option value="Bell">Bell County</option>
            <option value="Boone">Boone County</option>
            <option value="Bourbon">Bourbon County</option>
            <option value="Boyd">Boyd County</option>
            <option value="Boyle">Boyle County</option>
            <option value="Bracken">Bracken County</option>
            <option value="Breathitt">Breathitt County</option>
            <option value="Breckinridge">Breckinridge County</option>
            <option value="Bullitt">Bullitt County</option>
            <option value="Butler">Butler County</option>
            <option value="Caldwell">Caldwell County</option>
            <option value="Calloway">Calloway County</option>
            <option value="Campbell">Campbell County</option>
            <option value="Carlisle">Carlisle County</option>
            <option value="Carroll">Carroll County</option>
            <option value="Carter">Carter County</option>
            <option value="Casey">Casey County</option>
            <option value="Christian" selected="selected">Christian County</option>
            <option value="Clark">Clark County</option>
            <option value="Clay">Clay County</option>
            <option value="Clinton">Clinton County</option>
            <option value="Crittenden">Crittenden County</option>
            <option value="Cumberland">Cumberland County</option>
            <option value="Daviess">Daviess County</option>
            <option value="Edmonson">Edmonson County</option>
            <option value="Elliott">Elliott County</option>
            <option value="Estill">Estill County</option>
            <option value="Fayette">Fayette County</option>
            <option value="Fleming">Fleming County</option>
            <option value="Floyd">Floyd County</option>
            <option value="Franklin">Franklin County</option>
            <option value="Fulton">Fulton County</option>
            <option value="Gallatin">Gallatin County</option>
            <option value="Garrard">Garrard County</option>
            <option value="Grant">Grant County</option>
            <option value="Graves">Graves County</option>
            <option value="Grayson">Grayson County</option>
            <option value="Green">Green County</option>
            <option value="Greenup">Greenup County</option>
            <option value="Hancock">Hancock County</option>
            <option value="Hardin">Hardin County</option>
            <option value="Harlan">Harlan County</option>
            <option value="Harrison">Harrison County</option>
            <option value="Hart">Hart County</option>
            <option value="Henderson">Henderson County</option>
            <option value="Henry">Henry County</option>
            <option value="Hickman">Hickman County</option>
            <option value="Hopkins">Hopkins County</option>
            <option value="Jackson">Jackson County</option>
            <option value="Jefferson">Jefferson County</option>
            <option value="Jessamine">Jessamine County</option>
            <option value="Johnson">Johnson County</option>
            <option value="Kenton">Kenton County</option>
            <option value="Knott">Knott County</option>
            <option value="Knox">Knox County</option>
            <option value="Larue">Larue County</option>
            <option value="Laurel">Laurel County</option>
            <option value="Lawrence">Lawrence County</option>
            <option value="Lee">Lee County</option>
            <option value="Leslie">Leslie County</option>
            <option value="Letcher">Letcher County</option>
            <option value="Lewis">Lewis County</option>
            <option value="Lincoln">Lincoln County</option>
            <option value="Livingston">Livingston County</option>
            <option value="Logan">Logan County</option>
            <option value="Lyon">Lyon County</option>
            <option value="Madison">Madison County</option>
            <option value="Magoffin">Magoffin County</option>
            <option value="Marion">Marion County</option>
            <option value="Marshall">Marshall County</option>
            <option value="Martin">Martin County</option>
            <option value="Mason">Mason County</option>
            <option value="McCracken">McCracken County</option>
            <option value="McCreary">McCreary County</option>
            <option value="McLean">McLean County</option>
            <option value="Meade">Meade County</option>
            <option value="Menifee">Menifee County</option>
            <option value="Mercer">Mercer County</option>
            <option value="Metcalfe">Metcalfe County</option>
            <option value="Monroe">Monroe County</option>
            <option value="Montgomery">Montgomery County</option>
            <option value="Morgan">Morgan County</option>
            <option value="Muhlenberg">Muhlenberg County</option>
            <option value="Nelson">Nelson County</option>
            <option value="Nicholas">Nicholas County</option>
            <option value="Ohio">Ohio County</option>
            <option value="Oldham">Oldham County</option>
            <option value="Owen">Owen County</option>
            <option value="Owsley">Owsley County</option>
            <option value="Pendleton">Pendleton County</option>
            <option value="Perry">Perry County</option>
            <option value="Pike">Pike County</option>
            <option value="Powell">Powell County</option>
            <option value="Pulaski">Pulaski County</option>
            <option value="Robertson">Robertson County</option>
            <option value="Rockcastle">Rockcastle County</option>
            <option value="Rowan">Rowan County</option>
            <option value="Russell">Russell County</option>
            <option value="Scott">Scott County</option>
            <option value="Shelby">Shelby County</option>
            <option value="Simpson">Simpson County</option>
            <option value="Spencer">Spencer County</option>
            <option value="Taylor">Taylor County</option>
            <option value="Todd">Todd County</option>
            <option value="Trigg">Trigg County</option>
            <option value="Trimble">Trimble County</option>
            <option value="Union">Union County</option>
            <option value="Warren">Warren County</option>
            <option value="Washington">Washington County</option>
            <option value="Wayne">Wayne County</option>
            <option value="Webster">Webster County</option>
            <option value="Whitley">Whitley County</option>
            <option value="Wolfe">Wolfe County</option>
            <option value="Woodford">Woodford County</option>
            <option value="Other">Other / Out of State</option>
            </select>
        </p>
        
        <button className="user-input-button" onClick={this.registerUser}>Register</button>
      </form>
    );
  }
}

export default Register;
