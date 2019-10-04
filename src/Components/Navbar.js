/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { decode } from 'jsonwebtoken';
// import "./Navbar.css";



class Navbar extends Component {
  constructor(props) {
    super(props);

    this.token = localStorage.getItem("id_token") ? localStorage.getItem("id_token") : null;
    this.decoded = "";
    if (this.token !== null) {
      this.decoded = decode(this.token);

      this.forceUpdate();


    }


    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
    this.logOut = this.logOut.bind(this);
  }

  componentDidUpdate() {

    if (localStorage.getItem("id_token")) {
      this.token = localStorage.getItem("id_token") ? localStorage.getItem("id_token") : null;
      this.decoded = "";
      if (this.token !== null) {
        this.decoded = decode(this.token);


      }
    }

  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  logOut(e) {
    // e.preventDefault();
    localStorage.removeItem("id_token");
    this.props.history.push(`/login`);
    this.props.history.goBack();
    this.decoded = null

    // withRouter.refresh(true);
  }

  render() {

    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            
              Login
           
          </Link>
        </li>


      </ul>
    );

    // eslint-disable-next-line no-unused-vars
    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/users" className="nav-link">
            <button className="btn btn-outline-success my-2 my-sm-0">
              User
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/search" className="nav-link">
            <button className="btn btn-outline-success my-2 my-sm-0">
              Search
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            <button className="btn btn-outline-success my-2 my-sm-0">
              Register
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/list" className="nav-link">
            <button className="btn btn-outline-success my-2 my-sm-0">
              list
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/insert_fine" className="nav-link">
            <button className="btn btn-outline-success my-2 my-sm-0">
              InsertFine
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/insert_vehicles" className="nav-link">
            <button className="btn btn-outline-success my-2 my-sm-0">
              Insert Vehicles
            </button>
          </Link>
        </li>
        <li className="nav-item">
          <div className="nav-link"><button
            className="btn btn-outline-success my-2 my-sm-0 "
            onClick={this.logOut}
          >
            Logout
          </button></div>


        </li>
      </ul>
    );
    const normalLink = (<ul className="navbar-nav">

      <li className="nav-item">
        <Link to="/search" className="nav-link">
          <button className="btn btn-outline-success my-2 my-sm-0">
            Search
            </button>
        </Link>
      </li>
      <li className="nav-item">
        <div className="nav-link"><button
          className="btn btn-outline-success my-2 my-sm-0 "
          onClick={this.logOut}
        >
          Logout
    </button></div>


      </li>


    </ul>);

    const policeLink = (<ul className="navbar-nav">

      <li className="nav-item">
        <Link to="/search" className="nav-link">
          <button className="btn btn-outline-success my-2 my-sm-0">
            Search
      </button>
        </Link>
      </li>


      <li className="nav-item">
        <Link to="/insert_fine" className="nav-link">
          <button className="btn btn-outline-success my-2 my-sm-0">
            InsertFine
      </button>
        </Link>
      </li>

      <li className="nav-item">
        <div className="nav-link"><button
          className="btn btn-outline-success my-2 my-sm-0 "
          onClick={this.logOut}
        >
          Logout
    </button></div>


      </li>
    </ul>
    );

    const adminLink = (<ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/users" className="nav-link">
          <button className="btn btn-outline-success my-2 my-sm-0">
            User
        </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/search" className="nav-link">
          <button className="btn btn-outline-success my-2 my-sm-0">
            Search
        </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/register" className="nav-link">
          <button className="btn btn-outline-success my-2 my-sm-0">
            Register
        </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/list" className="nav-link">
          <button className="btn btn-outline-success my-2 my-sm-0">
            list
        </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/insert_fine" className="nav-link">
          <button className="btn btn-outline-success my-2 my-sm-0">
            InsertFine
        </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/insert_vehicles" className="nav-link">
          <button className="btn btn-outline-success my-2 my-sm-0">
            Insert Vehicles
        </button>
        </Link>
      </li>
      <li className="nav-item">
        <div className="nav-link"><button
          className="btn btn-outline-success my-2 my-sm-0 "
          onClick={this.logOut}
        >
          Logout
      </button></div>


      </li>
    </ul>
    );
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler collapsed"
      : "navbar-toggler navbar-toggler";

    const style = { 'margin-bottom': '20px' };
    function return_nav() {
      var token = localStorage.getItem("id_token");
      if (token) {
        var decoded = decode(token);
        if (decoded.user_permission === 'admin') {
          console.log(decoded.user_permission)
          return adminLink
        }
        else if (decoded.user_permission === 'normal') {
          console.log(decoded.user_permission)
          return normalLink
        }
        else if (decoded.user_permission === 'police') {
          console.log(decoded.user_permission)
          return policeLink
        }
        else return loginRegLink
      }
      else return loginRegLink
    }
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-primary  " style={style}>
        <button
          className={`${classTwo} `}
          onClick={this.toggleNavbar}
          type="button"
          data-toggle="collapse"
          data-target="navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`${classOne}`} id="navbarResponsive">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active ">
              <Link to="/" className="nav-link">
                <button className="btn btn-light">
                  Home
                  </button>
              </Link>
            </li>
          </ul>
          {/* {this.setState()}
          {localStorage.getItem("id_token") ? this.decoded.user_permission === 'admin' ? adminLink : this.decoded.user_permission === 'police' ? policeLink : this.decoded.user_permission === 'normal' ? normalLink : null : loginRegLink} */}

          {return_nav()}
        </div>
      </nav>


    );
  }
}

export default withRouter(Navbar);
