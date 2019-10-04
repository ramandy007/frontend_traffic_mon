/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { useState } from "react";

import { Button, Form, Modal, Table, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import { Search, Search_licence, Search_route } from './../Components/userFunctions';

import "./user.css";
import "./user1.css";
class User extends React.Component {
  constructor() {
    super();
    this.state = {
      plate_no: null,
      License_no: null,
      source: "",
      destination: "",
      resulr: null,
      show: false


    }


    this.message = null;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this)
    this.getAltRoot = this.getAltRoot.bind(this);



  }

  getAltRoot(e) {
    e.preventDefault();
    console.log(e.target.name, this.state)
    Search_route(this.state.source, this.state.destination).then(res => {
      console.log(res.data)
      if (res.data.length !== 0) {
        this.setState({ altroute: res.data[0] })
        console.log(this.state)
      }
      else alert('no alternate routes found')

    })
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
          console.log(res.data);
          // var data = []
          // var res_join = { ...res.data[0], ...res.data[1] };
          // console.log(res_join)
          // data.push(res_join)
          var data = res.data;
          this.setState({ resulr: res.data })


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
  // renderTableData() {
  //   if (this.state.resulr == null) return
  //   else
  //     return this.state.resulr.map((tuple, index) => {
  //       var arr = []
  //       for (var x in tuple) {
  //         arr.push(<tr>
  //           <td>{x}</td> <td>{tuple[x]}</td></tr>)
  //       }
  //       arr.push(<tr><td>  </td><td></td></tr>)
  //       return arr
  //     })
  // }
  renderTableData() {
    if (this.state.resulr == null) return
    else
      console.log(this.state.resulr);
    return this.state.resulr.map((tuple, index) => {
      const { c_id, c_time, tp_name, tp_station, fine, tp_id } = tuple;


      return (
        <tr key={c_id} data-keys={c_id} >
          <td>{c_id}</td>
          <td>{c_time}</td>

          <td>{fine}</td>
          <td>{tp_id}</td>
          <td>{tp_name}</td>
          <td>{tp_station}</td>



        </tr >
      );
    });
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

    const alert = (function AlertDismissible() {
      const [show, setShow] = useState(true);

      return (
        <>
          <Alert show={show} variant="success">
            <Alert.Heading>Alternative Route</Alert.Heading>
            <p>
              {this.state.altroute}
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => { setShow(false); this.setState({ altroute: "" }) }} variant="outline-success">
                Close me ya'll!
              </Button>
            </div>
          </Alert>


        </>
      );
    })



    var modal = (
      <Modal show={this.state.show} onHide={this.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{this.state.License_no}</Modal.Title>
        </Modal.Header>
        <Modal.Body><div>
          <Table>
            <thead>
              <tr>
                <th>Complaint Id </th>
                <th>Date Of Complaint  </th>
                <th>Penalty </th>
                <th>Traffic Police ID </th>
                <th>Traffic Police Name </th>
                <th>Traffic Police Station </th>



              </tr>
            </thead>
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


    const form_style = { 'display': 'contents' }


    return (

      <div className="Base">
        <div className="Base_child">

          <Form style={form_style} name="altRoot" onSubmit={this.getAltRoot}>
            <Form.Group controlId="exampleForm.ControlSelect1" on>
              <Form.Label class="form label">Go from:</Form.Label>
              <Form.Control inline label='1' as="select" name="source" value={this.state.source} onChange={this.onChange} default='avinashi'>
                <option >select</option>
                {source.map((value, index) => {
                  return <option>{value}</option>
                })}

              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label class="form label">Go to:</Form.Label>
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
          </Form>


        </div>
        <div className="Base_child"> {this.state.altroute ? this.state.altroute.alternate_route : null}</div>
        <div className="Base_child">
          <Form name='licence' onSubmit={this.onSubmit}>
            <Form.Group ControlId="UserInfo" className="ltr_1">
              <div className="ltr-child">
                <Form.Label class="form label">Search for fine of user with license no:</Form.Label >
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


        {modal}

      </div >



    );
  }
}

export default User;
