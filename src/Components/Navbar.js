/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Navbar.css";



class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
    this.logOut = this.logOut.bind(this);
  }


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("id_token");
    this.props.history.push(`/`);
  }

  render() {

    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <button className="btn btn-outline-success my-2 my-sm-0">
              Login
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
          <Link to="/list" className="nav-link">
            <button className="btn btn-outline-success my-2 my-sm-0">
              list
            </button>
          </Link>
        </li>
      </ul>
    );

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

    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler collapsed"
      : "navbar-toggler navbar-toggler";

    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <button
          className={`${classTwo}`}
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
                <button className="btn btn-outline-success my-2 my-sm-0">
                  Home
                  </button>
              </Link>
            </li>
          </ul>
          {localStorage.id_token ? userLink : loginRegLink}
        </div>
      </nav>


    );
  }
}

export default withRouter(Navbar);
