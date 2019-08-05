/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";

function Navbar() {
  let node = React.createRef();

  const navSlide = e => {
    e.preventDefault();
    console.log("The link was clicked.");

    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("nav-active");

    // node.current.classList.toggle("nav-active");
    const navLinks = document.querySelectorAll(".nav-links li");
    navLinks.forEach((link, index) => {
      link.style.animation = `navlinkFade 0.5s ease forwards $ {(index / 7 + 0.5)}s`;
    });
  };

  return (
    <div className="Navbar">
      <nav>
        <div className="logo">
          <h4>the nav</h4>
        </div>

        <ul className="nav-links" ref={node}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          {/* <li><a href="#">  </a></li>     */}
        </ul>

        <div className="burger" onClick={navSlide}>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
