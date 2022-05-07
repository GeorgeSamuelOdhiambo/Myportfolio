import React from "react";
import { Link } from "react-router-dom";

let logo = "../images/logo.png";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3 mb-2 bg-dark bg-gradient bg-opacity-65 container-xxl fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand mt-2 mt-lg-0 text-white" to="/">
            <img src={logo} height="15" alt="GSO Logo" loading="lazy" />
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contacts">
                Contact
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link className="nav-link text-white" to="/skills">
                Skills
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown">
            <Link
              className="dropdown-toggle d-flex align-items-center hidden-arrow text-white"
              to="/"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXrOTdO0QAJgQi0Vkhjs6kLdtOJORbnSkRg&usqp=CAU"
                className="rounded-circle text-white"
                height="25"
                alt="George..."
                loading="lazy"
              />
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <Link className="dropdown-item" to="/about">
                  My profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/#">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/contacts">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
