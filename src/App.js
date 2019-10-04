/* eslint-disable no-unused-vars */
import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import "./App.css";
import Login from "./Components/login";
import Register from "./Components/register";
import List from "./Components/list";
import List_user from "./Components/list_users";
import User from "./users/user";
import Police from "./users/police";
import Landing from "./Components/landing"
import InsertFine from "./Components/insert_fine"
import InsertVehicles from "./Components/insert_vehicle";


function Registerfunc(routeProps) {
  return <Register {...routeProps} />;
}
function Listfunc(routeProps) {
  return <List  {...routeProps} />;
}
function search(routeProps) {
  return <User {...routeProps} />;
}

function App() {
  return (
    <BrowserRouter> <div className="App">
      <Navbar />

      <Route path="/login" exact render={(routeProps) => <Login {...routeProps} />} />
      <Route path="/register/" exact component={Registerfunc} />

      <Route path="/list/" exact component={Listfunc} />


      { /* eslint-disable-next-line react/jsx-pascal-case*/}
      <Route path="/users/" exact render={(routeProps) => <List_user {...routeProps} />} />

      <Route path="/insert_fine" exact component={InsertFine} />

      <Route path="/insert_vehicles" exact component={InsertVehicles} />


      <Route path="/police_search/" exact component={Police} />


      <Route path="/search/" exact component={search} />
      <Route path="/" exact render={(routeProps) => <Landing {...routeProps} />} />

    </div>

    </BrowserRouter>




  );
}

export default App;
