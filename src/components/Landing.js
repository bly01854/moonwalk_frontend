import React, { Component } from "react";

import { Grid, Row, Col } from "react-bootstrap";

import FontAwesome from 'react-fontawesome';

import Bar from "./Bar";

class Landing extends Component {
  render() {
    return (
      <Grid className="remove-margin">
        <Row className="show-grid">
          <Col xsHidden smHidden md={3} lg={3} className="landing-side-pane">
            <Col md={12}>
              <Row className="graph-row">
                  <p className='graph'>Walking</p>
                  <Bar width = '10%' />
              </Row>
              <Row className="graph-row">
                  <p className='graph'>Running</p>
                  <Bar width = '10%' />
              </Row>
              <Row className="graph-row">
                  <p className='graph'>Cycling</p>
                  <Bar width = '10%' />
              </Row>
            </Col>
          </Col>
          <Col md={6} lg={6} className="text-center transparent">
            <Row>
              <h1 className="font-mission">MISSION</h1>
              <h1 className="font-to-the">TO THE</h1>
              <img className="logo" src={require("../assets/logo.png")} alt="Mission to the Moon" />
              <h1 className="font-get-moving">LET'S GET MOVING!</h1>
              <FontAwesome name="rocket" />
            </Row>
          </Col>
          <Col md={3} lg={3} className="text-center">
            <h1>Hello</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Landing;
