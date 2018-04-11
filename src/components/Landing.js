import React, { Component } from "react";

import { Grid, Row, Col } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <Grid className="remove-margin">
        <Row className="show-grid">
          <Col xsHidden md={2} lg={3}>
            <Row>
                <h5 className='graph'>Walking</h5>
            </Row>
            <Row>
                <h5 className='graph'>Running</h5>
            </Row>
            <Row>
                <h5 className='graph'>Cycling</h5>
            </Row>
          </Col>
          <Col md={8} lg={6} className="text-center transparent">
            <Row>
            <img className="logo" src={require("../assets/mission-white-text.png")} alt="Mission to the Moon" />
            </Row>
            <Row>
                <h1 className="get-moving">LET'S GET MOVING!</h1>
            </Row>
          </Col>
          <Col md={2} lg={3} className="text-center">
            <h1>Hello</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Landing;
