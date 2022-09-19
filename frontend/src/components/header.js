import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Metromindz
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse1"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse1">
            <div className="navbar-nav">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a href="/about" className="nav-item nav-link">
                About
              </a>
              <a href="/contact" className="nav-item nav-link">
                Contact
              </a>
              <a href="/login" className="nav-item nav-link">
                Login
              </a>
              <a href="/sign_up" className="nav-item nav-link">
                Sign Up
              </a>
            </div>
           <form className="d-flex ms-auto">
              <input
                type="text"
                className="form-control me-sm-2"
                placeholder="Search"
              />
              <button type="submit" className="btn btn-outline-light">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
