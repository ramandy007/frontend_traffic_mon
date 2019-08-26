import React from "react";
import { register } from "./userFunctions";
import { Form, Button, Col } from "react-bootstrap";
import "./register";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };
    register(user).then(res => {
      this.props.history.push(`/login`);
    });
  }
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
              <Form.Group controlId="formBasicRe-Email">
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
              <Form.Group controlId="formBasicRe-Password">
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
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onSubmit={this.onSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
