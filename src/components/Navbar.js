import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from 'react-icons/ai'

let logo = "https://lh3.googleusercontent.com/g-bNvvB1esm5QO2ozFplMlkdNQEVbldR16Yx-_XEzE8mvz8AfkWveKA3B4XBih4gYHSaPtrcE8QVdhlb9VN_42xxMJ6Nht7KDAS8mm8v8nlCKoqPfX6X8ZTFvrFtCHFWABthOL8GEtuC8_4L_5qRl2T0DLILy1V99SHsgoG5kVj7jhwDAlqTA3Wm1mdto_Hd5KRXOqZylLH05l--QnxukoqmhbFyIvfPRnkSb8XpNUxGk9-djiGsG1-3OlMp5jsTijDjnWcQ8wvazkKmSSpDeoIZWX6uDm5cIqHsX-GVj5qdR5GZBJ9HqK6ptOlJAHp-oRIClmkJ_AO1cKB1mFsf8B_TED_52rGmKTpMJyfdOco1wV8OiTKvk2vUZXSDb9MOmwIwylPNNfkfxpQqe5JD0EfQDDZQ5X3UoViM7Lijsj3hLBmJuCrnrnFbCrXEuvMafh1R_SrZidT_rSalf1FUAvxILBGcGqqAYrt2INAEHStJ8YZTIIUja8AVkQR-xGEpq7-P6g-YG8kMGzmsXMvNdZngAP2kGVrir-cpIOq8203z5IfWHWKoGsGJynK6AZjiD_RdsHrzN8pHtyXtgFOchMa8nPyIHG6JlYPnIKxrEH9TkgQTOXNJrwzZCQyL8hwo8wylAFc_y5y6u1s_7E6z9bfF8yfWQtNa-sDzWy6Alio0CDZ5n2S6Hr-RjPJ-uV2tdoCu7Cg39lelMzJxRif2_PKugs0HgfAjJQfcUTM8QCLzZsi3Za-KuX_OZyg=w100-h51-no?authuser=0";

const Navbar = (props) => {
  return (
    // the navigation bar contains all funtions of the nav bar
    <nav className="navbar navbar-expand-lg navbar-light p-3 mb-2 bg-dark bg-gradient container-xxl fixed-top">
      <div className="container-fluid">
        {/* shown when window get smaller */}
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
            <img src={logo} height="15" alt="LOGO" loading="lazy" />
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
            <li key="1" className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/">
                Home
              </Link>
            </li>
            <li key="2" className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/about">
                About
              </Link>
            </li>
            <li key="3" className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/contacts">
                Contact
              </Link>
            </li>
            <li key="4" className="nav-item text-white">
              <Link className="nav-link text-white fw-bold" to="/skills">
                Skills
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
            <Link
              className="d-flex align-items-center text-white"
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
