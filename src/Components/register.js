import React from "react";

import { Form, Button, Col } from "react-bootstrap";
import "./register";

class Register extends React.Component {
  render() {
    return (
      <div className="Base">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="enter your Name" />
          </Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Re enter email" />
                <Form.Text className="text-muted" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Label>Password</Form.Label>
          <Form.Row>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Re-Enter Password" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label>PhoneNumber</Form.Label>
            <Form.Control type="text" placeholder="enter your Phone Number" />
          </Form.Group>
          <Form.Group controlId="formBasicLicenseNumber">
            <Form.Label>LicenseNumber</Form.Label>
            <Form.Control type="text" placeholder="enter your License No" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
