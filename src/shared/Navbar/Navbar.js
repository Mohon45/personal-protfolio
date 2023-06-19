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
            <span class="" role="button">
              <i
                className="fa fa-bars fa-2x my-3"
                aria-hidden="true"
                style={{ color: "#e6e6ff" }}
              ></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse nav-custom"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand navbar-brand-custom p-0" href="/">
              Mohon
            </a>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  My Projects
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link nav-blog"
                  href="https://devmohon.hashnode.dev/"
                  target="_blank"
                >
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link spacial-nav-link"
                  href="/MD_MOHON_MERN_STACK_DEVELOPER.pdf"
                  download
                >
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
