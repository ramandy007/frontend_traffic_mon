import React, { useState } from "react";
import { list_users, delete_user } from "./userFunctions";
import EditUser from "./EditUser";


import { Table, Button, Modal } from "react-bootstrap";

class List_users extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null,
            user_id: ""
        };

        this.rerender = this.rerender.bind.this;

    }
    UNSAFE_componentWillMount() {
        list_users().then(res => {
            this.setState({ data: res.data });
        });
    }

    rerender() {
        this.forceUpdate();
    }


    Example(props) {
        const [show, setShow] = useState(false);

        const handleClose = () => { setShow(false); };
        const handleShow = () => setShow(true);
        function deleteuser() { console.log('user deleted', props.user_id); delete_user(props.user_id).then(res => { console.log(res) }) }


        console.log(props)
        return (
            <>
                <Button variant="primary" onClick={handleShow}>
                    edit
                </Button>

                <Button variant="primary" onClick={deleteuser}>
                    delete
                </Button>

                <Modal show={show} onHide={handleClose} animation={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User Details  of {props.user_id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{<EditUser user_id={props.user_id} rerender={props.rerender} />}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    editUser(user_id) {
        console.log("user is edited", user_id);



    }


    renderTableData() {
        return this.state.data.map((tuple, index) => {
            const { user_name, user_address, user_id, licence_no, user_permission } = tuple;


            return (
                <tr key={user_id} data-keys={user_id} >
                    <td>{user_id}</td>
                    <td>{user_name}</td>
                    <td>{user_address}</td>
                    <td>{licence_no}</td>
                    <td>{user_permission}</td>
                    {/* <td><Button data-keys={user_id} hallo={user_id} variant="primary" onClick={(e) => {
                        // console.log(e.target.dataset.keys);
                        this.editUser(e.target.dataset.keys);


                    }} >
                        edit
      </Button></td> */}
                    <td>< this.Example user_id={user_id} rerender={this.rerender} /></td>

                </tr >
            );
        });
    }
    render() {
        const style = {

            'margin-bottom': '1rem',

            'width': '75%',
            'margin': 'auto',
            'padding': ' 10px'
        }
        console.log(this.state.data);
        if (this.state.data !== null) {
            return (
                <div>
                    <Table striped bordered hover className="table-striped table-dark" style={style}>
                        <thead>
                            <tr>
                                <th>user_id </th>
                                <th>user_name </th>
                                <th>email_address </th>
                                <th>licence_no </th>
                                <th>user_permission</th>

                            </tr>
                        </thead>
                        <tbody>{this.renderTableData()}</tbody>
                    </Table>

                </div>

            );
        } else return <div> </div>;




    }
}

export default List_users;
