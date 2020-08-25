import React from "react";
import { Container, Row, Col } from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";

const Auth = (props) => {
  return (
    <Container>
      <Row>
        <Col md="6">
          <Signup />
        </Col>
        <Col md="6">
          <Login />
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
