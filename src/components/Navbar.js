import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'

let logo = "https://db5pap001files.storage.live.com/y4mP2cq5x_lZKJx-0lfhFD0C07J0xUYW1YjqTGSp7Uy6DRmC1i8g-AfZDmmXnjXbcTaux5-8EAR9_OHf7BZ6WBTHJSgZ0ER5fHjU8Tx4UPHq3GEL1gLfhflwttOSkDmjTbMO_bxTJjDArc3lwlrtpVCZU1PKPl7b6SwL6AMTj3DnpeSUKdXBlVBVMpmlpmBwHWFDEPPnL8KT9Oj2jPRAFU_5bXTrlp97uzA8p4SGQa3H1w?encodeFailures=1&width=100&height=51";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-3 mb-2 bg-dark bg-gradient bg-opacity-50 container-xxl fixed-top">
      <div className="container-fluid">
        
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><AiOutlineMenu/>
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
