import React from "react";

import { Button, Form } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import Register from "./register";

class Login extends React.Component {
  render() {
    return (
      <div className="Base">
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Link to="/register">
            <Button variant="primary" type="submit" className="register">
              Register
            </Button>
          </Link>
        </Form>

        <Route path="/register" exact render={() => <Register />} />
      </div>
    );
  }
}

export default Login;
