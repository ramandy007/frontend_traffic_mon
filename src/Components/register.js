import React from "react";
import { register } from "./userFunctions";
import { Form, Button, Col } from "react-bootstrap";
// import "./register";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email1: "",
      email2: "",
      phonenumber: "",
      licensenumber: "",
      password1: "",
      password2: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    const user = {
      name: this.state.name,
      email: this.state.email1,
      password: this.state.password1
    };
    console.log(user);

    register(user).then(res => {
      this.props.history.push(`/login`);
    });
    e.preventDefault();
  }
  render() {
    return (
      <div className="Base">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email1"
                  value={this.state.email1}
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicRe-Email">
                <Form.Control
                  type="email"
                  placeholder="Re enter email"
                  name="email2"
                  value={this.state.email2}
                  onChange={this.onChange}
                />
                <Form.Text className="text-muted" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Label>Password</Form.Label>
          <Form.Row>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password1"
                  value={this.state.password1}
                  onChange={this.onChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicRe-Password">
                <Form.Control
                  type="password"
                  placeholder="Re-Enter Password"
                  name="password2"
                  value={this.state.password2}
                  onChange={this.onChange}
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label>PhoneNumber</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your Phone Number"
              name="phonenumber"
              value={this.state.phonenumber}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicLicenseNumber">
            <Form.Label>LicenseNumber</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your License No"
              name="licensenumber"
              value={this.state.licensenumber}
              onChange={this.onChange}
            />
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
