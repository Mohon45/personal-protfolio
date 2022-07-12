import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-custom">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon icon-custom"></span>
          </button>
          <div
            className="collapse navbar-collapse nav-custom"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand navbar-brand-custom" href="/">
              Mohon
            </a>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Project
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link spacial-nav-link" href="#">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
