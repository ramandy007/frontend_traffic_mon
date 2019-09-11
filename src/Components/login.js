import React from "react";

import { Button, Form } from "react-bootstrap";
// import { login } from "./userFunctions.js";
import AuthService from './authservice';

import "bootstrap/dist/css/bootstrap.css";
import "./login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.Auth = new AuthService();
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount() {
    if (this.Auth.loggedIn())
      this.props.history.replace('/')
  }

  // onSubmit(e) {
  //   e.preventDefault();
  //   const user = {
  //     user_name: this.state.user_name,
  //     password: this.state.password
  //   };

  //   login(user).then(res => {
  //     if (res) {
  //       console.log('this is response', res);
  //     }
  //   });
  // }
  onSubmit(e) {
    e.preventDefault();
    this.Auth.login(this.state.user_name, this.state.password).then((res) => {
      console.log(res);
      this.props.history.replace('/');
    }).catch(err => { console.error(err) })
  }


  render() {
    return (
      <div className="Base">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="user_name"
              value={this.state.user_name}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          {/* <Link to="/register">
            <Button variant="primary" type="submit" className="register">
              Register
            </Button>
          </Link> */}
        </Form>
      </div>
    );
  }
}

export default Login;
