import React from "react";
import { list_logins } from "./userFunctions";

import { Table } from "react-bootstrap";

class List extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
  }
  UNSAFE_componentWillMount() {
    list_logins().then(res => {
      this.setState({ data: res.data });
    });
  }

  renderTableData() {
    return this.state.data.map((tuple, index) => {
      const { login_username, pass_hash, user_id, user_password } = tuple;

      return (
        <tr key={user_id}>
          <td>{user_id}</td>
          <td>{login_username}</td>
          <td>{pass_hash}</td>
          <td>{user_password}</td>
        </tr>
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
                <th>login_username </th>
                <th>pass_hash </th>
                <th>user_password </th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </Table>
        </div>
      );
    } else return <div> </div>;


  }
}

export default List;
