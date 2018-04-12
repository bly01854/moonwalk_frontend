import React, { Component } from "react";

import { Grid, Row, Col } from "react-bootstrap";

import Bar from "./Bar";

class Landing extends Component {
  render() {
    return (
      <Grid className="remove-margin">
        <Row className="show-grid">
          <Col xsHidden smHidden md={3} lg={3} className="landing-side-pane">
            <Col md={4}  className="pull-left">
              <Row>
                  <h5 className='graph'>Walking</h5>
                  <Bar width = '10%' />
              </Row>
              <Row>
                  <h5 className='graph'>Running</h5>
                  <Bar width = '10%' />
              </Row>
              <Row>
                  <h5 className='graph'>Cycling</h5>
                  <Bar width = '10%' />
              </Row>
            </Col>
          </Col>
          <Col md={6} lg={6} className="text-center transparent">
            <Row>
            <img className="logo" src={require("../assets/mission-white-text.png")} alt="Mission to the Moon" />
            </Row>
            <Row>
                <h1 className="get-moving">LET'S GET MOVING!</h1>
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
