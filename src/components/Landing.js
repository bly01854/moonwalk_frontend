import React, { Component } from "react";

import { Grid, Row, Col } from "react-bootstrap";

import StatsBar from "./StatsBar";
import UserInput from "./UserInput";

const FontAwesome = require("react-fontawesome");

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid className="remove-margin">
        <Row className="show-grid">
          <Col xsHidden smHidden md={3} lg={3} className="landing-side-pane">
            <StatsBar milesData={this.props.milesData} />
          </Col>
          <Col md={6} lg={6} className="text-center transparent">
            <Row>
              <img
                className="logo"
                src={require("../assets/MTM-logo.png")}
                alt="Mission to the Moon"
              />
              <h1 className="font-get-moving">LET'S GET MOVING!</h1>
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
            {this.props.loggedIn == true && <UserInput />}
          </Col>
        </Row>
        <Row className="show-grid">
          <Col className="text-center blue-bar">
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
              <div className="content-container">
                <div className="sub-header">ABOUT</div>
                <div className="header title">MISSION TO THE MOON</div>
                <div className="content">
                  In 2017 Christian County residents signed up and walked a
                  total of 46,000 miles during our annual 100 Mile Challenge,
                  enough to circle the earth almost 2 times! The Christian
                  County Health Department wanted to raise the bar in 2018 and
                  challenge our community to band together and walk, run, or
                  ride our bikes 239,000 miles, enough to get from the Earth to
                  the Moon! Sign up yoday and help us complete our mission to
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
                <div className="ease-title">WALK WITH EASE</div>
                <div className="ease-subtitle">ON YOUR MISSION</div>
              </div>
            </Row>
            <Row>
              <div className="ease-content-container">
                <p>
                  No matter if you need relief from arthritis pain or just want
                  to be active, the Arthritis Foundation's six week, SELF-STUDY
                  Walk With Ease program can teach you how to safely make
                  physcal activity part of your everyday life.
                </p>
                <span>
                  Request a <u>FREE</u> Walk With Ease Self-Study Guidebook and:
                </span>
                <ul>
                  <li>Develop awalking plan that will meet your needs.</li>
                  <li>Stay motivated.</li>
                  <li>Manage your plan.</li>
                  <li>Learn to exercise safety</li>
                </ul>
                <span>Walk With Ease is proven to:</span>
                <ul>
                  <li>Reduce the pain and discomfort of arthritis.</li>
                  <li>Increase balance, strength, and walking pace.</li>
                  <li>
                    Build confidence in your ability to be physically active.
                  </li>
                  <li>Improve overall health.</li>
                </ul>
                <p>
                  Request your self-study guide via email at{" "}
                  <a href="mailto:a.bassingthwaite@ky.gov" target="_top">
                    a.bassingthwaite@ky.gov
                  </a>{" "}
                  or stop by the Christian County Department for your free copy!
                </p>
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
