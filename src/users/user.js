/* eslint-disable no-useless-constructor */
import React from "react";

import { Button, Form, Modal, Table, } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import { Search, Search_licence } from './../Components/userFunctions';

import "./user.css";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      plate_no: null,
      License_no: null,
      resulr: null,
      show: false


    }

    this.message = null;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this)



  }


  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.name)
    if (e.target.name === 'plate') {
      var plate_no = this.state.plate_no;
      Search(plate_no)
        .then(res => {
          console.log(res);
          this.setState({ resulr: res.data })

          var data = res.data;
          if (!data) alert('not found or invalid input');

          data ? this.setState({ show: true }) : this.setState({ show: false })




        });
    }
    else if (e.target.name === 'licence') {
      var licence_no = this.state.License_no;
      Search_licence(licence_no)
        .then(res => {
          console.log(res);
          this.setState({ resulr: res.data })

          var data = res.data;
          if (!data) alert('not found or invalid input');
          data ? this.setState({ show: true }) : this.setState({ show: false })




        });
    }



  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onClose() {
    this.setState({ resulr: null })
    this.show = !this.show;
  }
  // show = false


  handleClose() {
    console.log('close clicked' + this.state.show)
      ;
    this.setState({
      resulr: null,
      show: false
    })

  }
  renderTableData() {
    if (this.state.resulr == null) return
    else
      return this.state.resulr.map((tuple, index) => {
        var arr = []
        for (var x in tuple) {
          arr.push(<tr>
            <td>{x}</td> <td>{tuple[x]}</td></tr>)
        }
        return arr
      })
  }

  render() {



    var modal = (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>The Data</Modal.Title>
        </Modal.Header>
        <Modal.Body><div>
          <Table>
            <tbody>
              {this.state.show ? this.renderTableData() : null}
            </tbody>
          </Table>
        </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
        </Button>

        </Modal.Footer>
      </Modal>);




    return (
      <div>
        <div className="Base">
          <Form name='source_destination' onSubmit={this.onSubmit}>
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
            </Form.Group></Form>

          <Form name='licence' onSubmit={this.onSubmit}>
            <Form.Group ControlId="UserInfo" className="ltr_1">
              <div className="ltr-child">
                <Form.Label>License Number</Form.Label>
                <Form.Control type="text" placeholder="License Number" name='License_no' onChange={this.onChange} value={this.state.License_no} />
              </div>


              <div className="btn-user">
                <Button variant="primary" type="submit">
                  Search
              </Button>
              </div>
            </Form.Group>
          </Form>

          <Form name='plate' onSubmit={this.onSubmit}>
            <Form.Group ControlId="UserInfo" className="ltr_1">
              <div className="ltr-child">
                <Form.Label>Plate Number</Form.Label>
                <Form.Control type="text" placeholder="Plate Number" name='plate_no' onChange={this.onChange} value={this.state.plate_no}
                />
              </div>

              <div className="btn-user">
                <Button variant="primary" type="submit" name='search'>
                  Search
              </Button>
              </div>
            </Form.Group>
          </Form>

        </div>
        {modal}


      </div >
    );
  }
}

export default User;
