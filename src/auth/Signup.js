import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import APIURL from "../helpers/enviornment";
import "../App.css";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${APIURL}/user/create`, {
      method: "POST",
      body: JSON.stringify({
        user: { email: username, password: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div className="Signup">
      <h1>Create Account</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Enter Your Email</Label>
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            name="email"
            value={username}
            placeholder="Email Required"
            className="form"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Choose Your Password</Label>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            value={password}
            placeholder="Create Password"
            className="form"
            type="password"
          />
        </FormGroup>
        <Button type="submit" className="button">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
