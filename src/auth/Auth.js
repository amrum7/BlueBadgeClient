import React from "react";
import { Container, Row, Col } from "reactstrap";
import Signup from "./Signup";
import Login from "./Login";
import "../App.css";

const Auth = (props) => {
  return (
    <Container className="auth-container">
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <Login updateToken={props.updateToken} />
        </Col>
      </Row>
      <h3 className="HeadSignup">Not a user? Create your account below!</h3>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <Signup updateToken={props.updateToken} />
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
