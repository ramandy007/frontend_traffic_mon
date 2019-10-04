import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import { insertFine } from "./userFunctions"


class InsertFine extends React.Component {

    constructor() {
        super();
        this.state = {
            licenceNo: '',
            fine: '',
            policeId: '',
            error: false,
            success: null
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)


        this.myref = React.createRef()
        this.error = ''
    }
    onSubmit(e) {

        if (this.state.licenceNo.length === 0 || this.state.fine.length === 0 || this.state.policeId.length === 0)
            this.setState({ error: true })
        else {
            this.setState({ error: false })
            insertFine(this.state).then(res => {
                console.log(String(res.data));
                this.error = res.data
                // eslint-disable-next-line eqeqeq
                if (String(res.data) == 'fine insertion success')
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
            <div className='Base-3' style={style}>
                <Form onSubmit={this.onSubmit}>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Licence Number" name="licenceNo" value={this.state.licenceNo} onChange={this.onChange} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Fine" name="fine" value={this.state.fine} onChange={this.onChange} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Police_id" name="policeId" value={this.state.policeId} onChange={this.onChange} />
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

                </Form></div >

        );
    }
}

export default InsertFine