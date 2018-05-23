import React, { Component } from "react";

import { Grid, Row, Col } from "react-bootstrap";

import StatsBar from "./StatsBar";
import UserInput from "./UserInput";
import AuthService from "./AuthService";

const FontAwesome = require("react-fontawesome");

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMiles: []
    };

    this.Auth = new AuthService();
  }

  componentDidMount() {
    if (this.Auth.loggedIn()) {
      this.Auth.getUserExercise(this.Auth.getProfile().id).then(data => {
        this.setState({ userMiles: data.data.totalByCategory });
      });
    }
  }
  render() {
    return (
      <Grid className="remove-margin">
        <Row className="show-grid">
          <Col xsHidden smHidden md={3} lg={3} className="landing-side-pane">
            <Row className="no-margin">
              <span className="graph-title">General Stats:</span>
            </Row>
            <Row className="no-margin">
              <StatsBar milesData={this.props.milesData} />
            </Row>
            {this.props.loggedIn === true && (
              <div>
                <Row className="no-margin">
                  <span className="graph-title">Personal Stats:</span>
                </Row>
                <Row className="no-margin">
                  <StatsBar milesData={this.state.userMiles} />
                </Row>
              </div>
            )}
          </Col>
          <Col md={6} lg={6} className="text-center transparent">
            <Row className="center-column">
              <img
                className="logo"
                src={require("../assets/MTM-logo.png")}
                alt="Mission to the Moon"
              />
              
              {/*
              MAKE YOUR MODIFICATIONS TO ANYTHING THAT HAS THIS TEXT ABOVE IT
              ANY TAG (e.g. <p></p>) THAT STARTS WITH p, h1-5, li, and certain div
              CAN BE MODIFIED TO WHATEVER YOU WANT IT TO BE
              IF YOU DONT NEED ANYTHING IN A SECTION, JUST DELETE THE WORDS IN BETWEEN THE TAGS: <p>...</p>
              */}

              {/*LET'S GET MOVING, shows up in large white block font */}
              <h1 className="font-get-moving">LET'S GET MOVING!</h1>
              {/*SUBTEXT UNDERNEATH LET'S GET MOVING */}
              <h4 className="font-scroll-down">
                Scroll down and see how to get a FREE Mission to the Moon
                T-shirt!
              </h4>
              <Row className="media-row">
                <a href="https://www.facebook.com/christiancountyhd">
                  <FontAwesome
                    name="facebook"
                    inverse="true"
                    size="3x"
                    className="social-media-row"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCsvhA-y0CtaeP1Lma5tlGcA">
                  <FontAwesome
                    name="youtube"
                    inverse="true"
                    size="3x"
                    className="social-media-row"
                  />
                </a>
              </Row>
            </Row>
          </Col>
          <Col md={3} lg={3}>
            {this.props.loggedIn === true && <UserInput />}
          </Col>
        </Row>
        <Row className="show-grid">
          <Col className="text-center blue-bar">

          {/* BLUE BAR WITH WHITE TEXT WITHIN
          THE <i></i> TAG MEANS ITALICS, you can also use <b></b> to bold */}
            <Row>
              What is the <i>MISSION</i>?
            </Row>
          </Col>
        </Row>
        <Row className="show-grid bottom-border">
          <Col
            xsHidden
            sm={6}
            md={6}
            lg={6}
            className="text-center black-background mission-col flex-center content-right"
          >
            <Row>
              {/*PICTURE TO THE LEFT OF THE ABOUT TEXT
              TO CHANGE: PUT DESIRED PICTURE IN ASSETS FOLDER,
              THEN AFTER in src={require below,  CHANGE  earth-to-moon-milage.png TO THE PICTURES NAME */}
              <img
                className="mission-image image-right"
                src={require("../assets/earth-to-moon-mileage.png")}
                alt="Mission to the Moon"
              />
            </Row>
          </Col>
          <Col
            sm={6}
            md={6}
            lg={6}
            className="text-center grey-background mission-col flex-center content-left"
          >
            <Row>
              {/* BELOW IS THE ABOUT SECTION */}
              <div className="content-container">
              {/* SAYS ABOUT IN SMALL GREY TEXT */}
                <div className="sub-header">ABOUT</div>
                {/* MISSION THE MOON HEADING IN LARGER WHITE TEXT */}
                <div className="header title">MISSION TO THE MOON</div>
                {/* SMALL PARAGRAPH CONTENT */}
                <div className="content">
                  In 2017 Christian County residents signed up and walked a
                  total of 46,000 miles during our annual 100 Mile Challenge,
                  enough to circle the earth almost 2 times! The Christian
                  County Health Department wanted to raise the bar in 2018 and
                  challenge our community to band together and walk, run, or
                  ride our bikes 239,000 miles, enough to get from the Earth to
                  the Moon! Sign up today and help us complete our mission to
                  the moon!
                </div>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xsHidden sm={2} md={2} lg={3} className="" />
          <Col sm={8} md={8} lg={6} className="text-center transparent-dark">
            <Row>
              <div className="ease-title-container">
              {/*LARGE HEADING */}
                <div className="ease-title">WALK WITH EASE</div>
                {/* SUBHEADING */}
                <div className="ease-subtitle">ON YOUR MISSION</div>
              </div>
            </Row>
            <Row>
              <div className="ease-content-container">
                <p>
                  Download and complete a{" "}
                  <a href="../assets/walk-with-ease-survey.pdf" download>
                    Walk with Ease Preliminary Survey
                  </a>{" "}
                  and bring it to the Christian County Health Department for a{" "}
                  <strong>FREE MISSION TO THE MOON T-SHIRT!</strong>
                </p>
                <p>
                  <center>(Limited Supply -- First Come, First Served!)</center>
                </p>
                <div className="half-container">
                  <p>
                    No matter if you need relief from arthritis pain or just
                    want to be active, the Arthritis Foundation's six week,
                    SELF-STUDY Walk With Ease program can teach you how to
                    safely make physcal activity part of your everyday life.
                  </p>
                  <span>Walk With Ease is proven to:</span>
                  <ul>
                    <li>Reduce the pain and discomfort of arthritis.</li>
                    <li>Increase balance, strength, and walking pace.</li>
                    <li>
                      Build confidence in your ability to be physically active.
                    </li>
                    <li>Improve overall health.</li>
                  </ul>
                </div>
                <div className="half-container">
                  <img
                    className="shirt-img"
                    src={require("../assets/mttm-shirt.png")}
                    alt="Mission to the Moon T-Shirt"
                  />
                </div>
              </div>

              <a
                className="ease-button"
                href="https://www.youtube.com/watch?v=XYu7PFlZXYQ"
              >
                <img
                  className=""
                  src={require("../assets/walk-with-ease-logo-grayscale.png")}
                  alt="Mission to the Moon"
                />
              </a>
            </Row>
          </Col>
          <Col xsHidden sm={2} md={2} lg={3} className="" />
        </Row>
      </Grid>
    );
  }
}

export default Landing;
