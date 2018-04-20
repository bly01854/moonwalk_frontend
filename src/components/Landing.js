import React, { Component } from "react";

import { Grid, Row, Col } from "react-bootstrap";

import Bar from "./Bar";

const FontAwesome = require('react-fontawesome');



class Landing extends Component {
  render() {
    return (
      <Grid className="remove-margin">
        <Row className="show-grid">
          <Col xsHidden smHidden md={3} lg={3} className="landing-side-pane">
            <Col md={12}>
            <div className="graph-container">
              <div className = "graph-column">
                  <div className = "graph-item">WALKING</div>
                  <div className = "graph-item">RUNNING</div>
                  <div className = "graph-item">CYCLING</div>
              </div>
            </div>
            <div className="graph-container">
              <div className="graph-column">
                  <Bar width = "100" />
                  <Bar width = "200" />
                  <Bar width = "300" />
              </div>
            </div>
            </Col>
          </Col>
          <Col md={6} lg={6} className="text-center transparent">
            <Row>
              <h1 className="font-mission">MISSION</h1>
              <h1 className="font-to-the">TO THE</h1>
              <img className="logo" src={require("../assets/logo.png")} alt="Mission to the Moon" />
              <h1 className="font-get-moving">LET'S GET MOVING!</h1>
              <Row >
              <FontAwesome name="facebook" inverse="true" size="3x" className="social-media-row" />
              <FontAwesome name="twitter" inverse="true" size="3x" className="social-media-row" />
              <FontAwesome name="instagram" inverse="true" size="3x" className="social-media-row" />
              </Row>
              
            </Row>
          </Col>
          <Col md={3} lg={3} className="text-center">
            
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Landing;
