/* eslint-disable no-unused-vars */
import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./App.css";

import User from "./users/user";

function App() {
  return (
    <div className="App">
      <Navbar />

      <User />
    </div>
  );
}

export default App;
