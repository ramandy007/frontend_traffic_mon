import React from "react";

import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import "./user.css";

class User extends React.Component {
  render() {
    return (
      <div className="Base">
        <Form>
          <Form.Group controlId="formUserDestination" className="ltr">
            <div className="ltr-child">
              <Form.Label>Destination</Form.Label>
              <Form.Control type="text" placeholder="destination" />
            </div>
            <div className="ltr-child">
              <Form.Label>Source</Form.Label>
              <Form.Control type="text" placeholder="source" />
            </div>
            <div>three</div>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default User;
