/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
import Register from "./Components/register";

import Login from "./Components/login";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* 
      <Login /> */}
      <Register />
    </div>
  );
}

export default App;
