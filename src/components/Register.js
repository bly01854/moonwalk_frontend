import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <form>
        <p className="user-input-label" type="Email:">
          <input type="text"
            className="user-input-input"
          />
        </p>
        <p className="user-input-label" type="Password:">
        <input type="text"
            className="user-input-input"
          />
        </p>
        <p className="user-input-label" type="Confirm Password:">
        <input type="text"
            className="user-input-input"
          />
        </p>
        <p className="user-input-label" type="Name:">
            <input type="text" className="user-input-input" />
        </p>
        <p className="user-input-label" type="Gender:">
            <select className="user-input-input">
                <option className="user-input-option" value="male">Male</option>
                <option className="user-input-option" value="female">Female</option>
                <option className="user-input-option" value="other">Other / Do not wish to specify</option>
            </select>
        </p>
        <p className="user-input-label" type="Date of Birth:">
            <input type="date" className="user-input-input" />
        </p>
        <p className="user-input-label" type="County:">
            <select className="user-input-input">
            <option value="1">Adair County</option>
            <option value="2">Allen County</option>
            <option value="3">Anderson County</option>
            <option value="4">Ballard County</option>
            <option value="5">Barren County</option>
            <option value="6">Bath County</option>
            <option value="7">Bell County</option>
            <option value="8">Boone County</option>
            <option value="9">Bourbon County</option>
            <option value="10">Boyd County</option>
            <option value="11">Boyle County</option>
            <option value="12">Bracken County</option>
            <option value="13">Breathitt County</option>
            <option value="14">Breckinridge County</option>
            <option value="15">Bullitt County</option>
            <option value="16">Butler County</option>
            <option value="17">Caldwell County</option>
            <option value="18">Calloway County</option>
            <option value="19">Campbell County</option>
            <option value="20">Carlisle County</option>
            <option value="21">Carroll County</option>
            <option value="22">Carter County</option>
            <option value="23">Casey County</option>
            <option value="24">Christian County</option>
            <option value="25">Clark County</option>
            <option value="26">Clay County</option>
            <option value="27">Clinton County</option>
            <option value="28">Crittenden County</option>
            <option value="29">Cumberland County</option>
            <option value="30">Daviess County</option>
            <option value="31">Edmonson County</option>
            <option value="32">Elliott County</option>
            <option value="33">Estill County</option>
            <option value="34">Fayette County</option>
            <option value="35">Fleming County</option>
            <option value="36">Floyd County</option>
            <option value="37">Franklin County</option>
            <option value="38">Fulton County</option>
            <option value="39">Gallatin County</option>
            <option value="40">Garrard County</option>
            <option value="41">Grant County</option>
            <option value="42">Graves County</option>
            <option value="43">Grayson County</option>
            <option value="44">Green County</option>
            <option value="45">Greenup County</option>
            <option value="46">Hancock County</option>
            <option value="47">Hardin County</option>
            <option value="48">Harlan County</option>
            <option value="49">Harrison County</option>
            <option value="50">Hart County</option>
            <option value="51">Henderson County</option>
            <option value="52">Henry County</option>
            <option value="53">Hickman County</option>
            <option value="54">Hopkins County</option>
            <option value="55">Jackson County</option>
            <option value="56">Jefferson County</option>
            <option value="57">Jessamine County</option>
            <option value="58">Johnson County</option>
            <option value="59">Kenton County</option>
            <option value="60">Knott County</option>
            <option value="61">Knox County</option>
            <option value="62">Larue County</option>
            <option value="63">Laurel County</option>
            <option value="64">Lawrence County</option>
            <option value="65">Lee County</option>
            <option value="66">Leslie County</option>
            <option value="67">Letcher County</option>
            <option value="68">Lewis County</option>
            <option value="69">Lincoln County</option>
            <option value="70">Livingston County</option>
            <option value="71">Logan County</option>
            <option value="72">Lyon County</option>
            <option value="73">Madison County</option>
            <option value="74">Magoffin County</option>
            <option value="75">Marion County</option>
            <option value="76">Marshall County</option>
            <option value="77">Martin County</option>
            <option value="78">Mason County</option>
            <option value="79">McCracken County</option>
            <option value="80">McCreary County</option>
            <option value="81">McLean County</option>
            <option value="82">Meade County</option>
            <option value="83">Menifee County</option>
            <option value="84">Mercer County</option>
            <option value="85">Metcalfe County</option>
            <option value="86">Monroe County</option>
            <option value="87">Montgomery County</option>
            <option value="88">Morgan County</option>
            <option value="89">Muhlenberg County</option>
            <option value="90">Nelson County</option>
            <option value="91">Nicholas County</option>
            <option value="92">Ohio County</option>
            <option value="93">Oldham County</option>
            <option value="94">Owen County</option>
            <option value="95">Owsley County</option>
            <option value="96">Pendleton County</option>
            <option value="97">Perry County</option>
            <option value="98">Pike County</option>
            <option value="99">Powell County</option>
            <option value="100">Pulaski County</option>
            <option value="101">Robertson County</option>
            <option value="102">Rockcastle County</option>
            <option value="103">Rowan County</option>
            <option value="104">Russell County</option>
            <option value="105">Scott County</option>
            <option value="106">Shelby County</option>
            <option value="107">Simpson County</option>
            <option value="108">Spencer County</option>
            <option value="109">Taylor County</option>
            <option value="110">Todd County</option>
            <option value="111">Trigg County</option>
            <option value="112">Trimble County</option>
            <option value="113">Union County</option>
            <option value="114">Warren County</option>
            <option value="115">Washington County</option>
            <option value="116">Wayne County</option>
            <option value="117">Webster County</option>
            <option value="118">Whitley County</option>
            <option value="119">Wolfe County</option>
            <option value="120">Woodford County</option>
            <option value="121">Other / Out of State</option>
            </select>
        </p>
        
        <button className="user-input-button">Register</button>
      </form>
    );
  }
}

export default Register;
