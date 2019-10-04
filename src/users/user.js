/* eslint-disable no-unused-vars */
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
      source: null,
      destination: null,
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
        arr.push(<tr><td>  </td><td></td></tr>)
        return arr
      })
  }

  render() {
    var source = ['avinashi',
      'singanalur',
      'Chennai',
      'Enmore',
      'Thiruvannamalai',
      'Neyveli',
      'Cuddalore',
      'Ooty',
      'Hosur',
      'Salem'];

    var destination = ['ukadam',
      'kg theatre',
      'Ennore',
      'Manali',
      'Harur',
      'Tanjavur',
      'Chinnaselam',
      'Erode',
      'Denkanikotai',
      'Vaniyambadi',
    ]



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

      <div className="Base">
        <div className="Base_child">
          {/* <Form name='source_destination' onSubmit={this.onSubmit}>
              <Form.Group controlId="formUserDestination" className="ltr">
                <div className="ltr-child">
                  <Form.Label class="form label">Destination</Form.Label >
                  <Form.Control type="text" placeholder="destination" />
                </div>
                <div className="ltr-child">
                  <Form.Label class="form label">Source</Form.Label >
                  <Form.Control type="text" placeholder="source" />
                </div>

                <div className="btn-user">
                  <Button variant="primary" type="submit">
                    Search
              </Button>
                </div>
              </Form.Group></Form> */}
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label class="form label">source</Form.Label>
            <Form.Control inline label='1' as="select" name="source" value={this.state.source} onChange={this.onChange} default='avinashi'>
              <option >select</option>
              {source.map((value, index) => {
                return <option>{value}</option>
              })}

            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label class="form label">destination</Form.Label>
            <Form.Control inline label='2' as="select" name="destination" default='ukadam' value={this.state.destination} onChange={this.onChange}>
              <option >select</option>

              {destination.map((value, index) => {
                return <option>{value}</option>
              })}

            </Form.Control>


          </Form.Group>
          <Form.Group> <div className="btn-user">
            <Button variant="primary" type="submit">
              Search
              </Button>
          </div></Form.Group>

        </div>
        <div className="Base_child">
          <Form name='licence' onSubmit={this.onSubmit}>
            <Form.Group ControlId="UserInfo" className="ltr_1">
              <div className="ltr-child">
                <Form.Label class="form label">License Number</Form.Label >
                <Form.Control type="text" placeholder="License Number" name='License_no' onChange={this.onChange} value={this.state.License_no} />
              </div>


              <div className="btn-user">
                <Button variant="primary" type="submit">
                  Search
              </Button>
              </div>
            </Form.Group>
          </Form>
        </div>

        <div className="Base_child">  <Form name='plate' onSubmit={this.onSubmit}>
          <Form.Group ControlId="UserInfo" className="ltr_1">
            <div className="ltr-child">
              <Form.Label class="form label">Plate Number</Form.Label >
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
