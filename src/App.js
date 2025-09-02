import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import User from "./components/auth/login/login";
import Dashboard from "./components/auth/dashboard";

class App extends Component {
  render() {
    return (
      <div>
         <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Dashboard
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/components/auth/login"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Dasboard/>} />
            <Route path="/components/auth/login" element={<Login/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;