import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import { input_vehicles } from "./userFunctions"

class InputVehicles extends React.Component {

    constructor() {
        super();
        this.state = {
            plate_no: '',
            vehicle_type: '',
            manufacture: '',
            user_id: '',
            error: false,
            success: null
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)


        this.myref = React.createRef()
        this.error = ''
    }


    onSubmit(e) {

        if (this.state.plate_no.length === 0 || this.state.vehicle_type.length === 0 || this.state.manufacture.length === 0 || this.state.user_id.length === 0)
            this.setState({ error: true })
        else {
            this.setState({ error: false })
            input_vehicles(this.state).then(res => {
                console.log(String(res.data));
                this.error = res.data
                // eslint-disable-next-line eqeqeq
                if (String(res.data) == 'vehicle insertion success')
                    this.setState({ success: true })
                else this.setState({ success: false })

            }).catch(err => {
                console.log(err)

            });
        }


        e.preventDefault();
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {
        const style = {
            color: '#D84315'
        }
        return (
            <div className='Base-3 login-Base' style={style}>
                <Form onSubmit={this.onSubmit} className="">
                    <Row>
                        <Col>
                            <Form.Control placeholder="Plate Number" name="plate_no" value={this.state.plate_no} onChange={this.onChange} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Vehicle Type" name="vehicle_type" value={this.state.vehicle_type} onChange={this.onChange} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="manufacture" name="manufacture" value={this.state.manufacture} onChange={this.onChange} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="user Id" name="user_id" value={this.state.user_id} onChange={this.onChange} />
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit" >
                                Submit
          </Button>
                        </Col>
                    </Row>

                    {(this.state.error) ?
                        <p>input fields are blank .</p> : null}
                    {(this.state.success) ?
                        <p>input Successfully entered .</p> : this.state.success === false ? <p>{this.error.code} <br /> {this.error.sqlMessage}</p> : null}

                </Form></div>

        );

    }

}



export default InputVehicles;