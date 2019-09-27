/* eslint-disable no-useless-constructor */
import React, { useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import { Search } from './../Components/userFunctions';

import "./user.css";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      plate_no: null,
      License_no: null,
      resulr: null,


    }
    this.show = false;
    this.message = null;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClose = this.onClose.bind(this);


  }


  onSubmit(e) {
    e.preventDefault();
    var plate_no = this.state.plate_no;
    Search(plate_no)
      .then(res => {
        console.log(res);
        this.setState({ resulr: res.data })


      });

    // if (this.state.resulr){
    //   var X;
    //   for (X of this.state.resulr){

    //     for(y in X){



    //     }
    //   }
    // }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onClose() {
    this.setState({ resulr: null })
    this.show = !this.show;
  }



  render() {



    var modal = (<Modal show={this.show} onHide={this.onClose} >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body> hello</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" >
          Close
</Button>
        <Button variant="primary" >
          Save Changes
</Button>
      </Modal.Footer>
    </Modal>);

    if (this.state.resulr) this.show = !this.show


    return (
      <div>
        <div className="Base">
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="formUserDestination" className="ltr">
              <div className="ltr-child">
                <Form.Label>Destination</Form.Label>
                <Form.Control type="text" placeholder="destination" />
              </div>
              <div className="ltr-child">
                <Form.Label>Source</Form.Label>
                <Form.Control type="text" placeholder="source" />
              </div>

              <div className="btn-user">
                <Button variant="primary" type="submit">
                  Search
              </Button>
              </div>
            </Form.Group>
            <Form.Group ControlId="UserInfo" className="ltr_1">
              <div className="ltr-child">
                <Form.Label>License Number</Form.Label>
                <Form.Control type="text" placeholder="License Number" name='licence_number' onChange={this.onChange} value={this.state.License_no} />
              </div>


              <div className="btn-user">
                <Button variant="primary" type="submit">
                  Search
              </Button>
              </div>
            </Form.Group>
            <Form.Group ControlId="UserInfo" className="ltr_1">
              <div className="ltr-child">
                <Form.Label>Plate Number</Form.Label>
                <Form.Control type="text" placeholder="Plate Number" name='plate_no' onChange={this.onChange} value={this.state.plate_no}
                />
              </div>

              <div className="btn-user">
                <Button variant="primary" type="submit">
                  Search
              </Button>
              </div>
            </Form.Group>
          </Form>

        </div>

        {modal}

      </div>
    );
  }
}

export default User;
