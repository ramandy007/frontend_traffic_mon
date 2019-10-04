import React from "react";
import { register } from "./userFunctions";
import { Form, Button, Col } from "react-bootstrap";

import "./register.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      login_username: "",
      email1: "",
      email2: "",
      phonenumber: "",
      licensenumber: "",
      password1: "",
      password2: "",
      user_permission: "normal"
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  errors = {
    email: true,
    password: true
  };
  setError() {
    // var keys = Object.keys(this.errors);

    // for (var key of keys) {
    //   if (this.state[key].length > 0) {
    //     // console.log("true" + key );

    //     this.errors[key] = true;
    //     // console.log(this.state[key]);
    //   }
    // }
    if (this.state.email1.localeCompare(this.state.email2))
      this.errors.email = false;
    else this.errors.email = true;
    if (this.state.password1.localeCompare(this.state.password2))
      this.errors.password = false;
    else this.errors.password = true;
    // console.log(keys);
  }
  canBeSubmitted() {
    const {
      name,
      email1,
      email2,
      phonenumber,
      licensenumber,
      password1,
      password2
    } = this.state;
    return (
      name.length > 0 &&
      email1.length > 0 &&
      email2.length > 0 &&
      phonenumber.length > 0 &&
      licensenumber.length > 0 &&
      password1.length > 0 &&
      password2.length > 0
    );
  }
  onChange(e) {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    const user = {
      name: this.state.name,
      login_username: this.state.login_username,
      user_password: this.state.password1,
      user_address: this.state.email1,
      licence_no: this.state.licensenumber,
      user_permission: this.state.user_permission,
      phonenumber: this.state.phonenumber
    };

    console.log(user);

    register(user);
    e.preventDefault();
    this.props.history.replace('/');

  }
  render() {
    const isEnabled = this.canBeSubmitted();
    this.setError();
    console.log(this.errors);

    return (
      <div className="Base-1 login-Base">
        <Form onSubmit={this.onSubmit} className="">
          <Form.Group controlId="formBasicName">
            <Form.Label class="form label" >Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <Form.Label class="form label">UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your UserName"
              name="login_username"
              value={this.state.login_username}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Label class="form label">Email address</Form.Label>
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
                {!this.errors.email ? (
                  <Form.Text>email doesnt match</Form.Text>
                ) : null}
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Label class="form label">Password</Form.Label>
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
                {!this.errors.password ? (
                  <Form.Text>passwords doesnt match</Form.Text>
                ) : null}
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Group controlId="formBasicPhoneNumber">
            <Form.Label class="form label">PhoneNumber</Form.Label>
            <Form.Control
              type="tel"
              //               pattern="((\+*)((0[ -]+)*|(91 )*)(\d{12}+|\d{10}+))|\d{5}([- ]*)\d{6}
              // "
              pattern="[0-9]{10}"
              placeholder="enter your Phone Number"
              name="phonenumber"
              value={this.state.phonenumber}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicLicenseNumber">
            <Form.Label class="form label">LicenseNumber</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your License No"
              name="licensenumber"
              value={this.state.licensenumber}
              onChange={this.onChange}
            />
          </Form.Group>

          {/* <Form.Group controlId="formBasicuserPermission">
            <Form.Label  class="form label">UserPermission</Form.Label>
            <Form.Control
              type="text"
              placeholder="admin/police/norm"
              name="user_permission"
              value={this.state.user_permission}
              onChange={this.onChange}
            />
          </Form.Group> */}


          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label class="form label">UserPermission</Form.Label>
            <Form.Control as="select" name="user_permission" value={this.state.user_permission} onChange={this.onChange}>
              <option>normal</option>
              <option>police</option>

            </Form.Control>
          </Form.Group>


          <Button variant="primary" type="submit" disabled={!isEnabled}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Register;
