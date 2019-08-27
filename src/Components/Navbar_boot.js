import React, { Component } from "react";
import { Link, withRouter, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./Navbar.css";

class Navbar_boot extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
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
          <Link to="/register" className="nav-link">
            <button className="btn btn-outline-success my-2 my-sm-0">
              Register
            </button>
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
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
        <li className="navbar-nav">
          {/* <a href="" onClick={this.logOut.bind(this)} className="nav-link"> */}
          <button
            className="btn btn-outline-success my-2 my-sm-0 nav-link"
            onClick={this.logOut.bind(this)}
          >
            Logout
          </button>
          {/* </a> */}
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
      <Router>
        {" "}
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
            {localStorage.usertoken ? userLink : loginRegLink}
          </div>
        </nav>
        <Route path="/login" exact render={() => <Login />} />
        <Route path="/register/" exact component={Registerfunc} />
        <Route path="/" exact component={home} />
      </Router>
    );
  }
}

export default Navbar_boot;