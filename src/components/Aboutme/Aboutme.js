import React from "react";

function Aboutme() {
  let age = new Date().getFullYear() - 1998;
  return (
    <div
      className="container-xxl bg-white bg-opacity-50"
      style={{ "border-radius": "30px" }}
      data-aos="fade-up"
    >
      <h2 className="text-uppercase pt-2">About Me</h2>
      <hr />
      <div className="section-title">
        <p>
          My name is Odhiambo George Samuel, a delighted computer sciantist with alot of skills in technology both software and hardware.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Illustrator &amp; UI/UX Designer</h3>
          <p className="fst-italic">
          My name is Odhiambo George Samuel, a delighted computer sciantist with alot of skills in technology both software and hardware.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul style={{ "list-style-type": "none" }}>
                <li>
                  <strong>Birthday:</strong> 7 June 1998
                </li>
                <li>
                  <strong>Website:</strong> comming soon
                </li>
                <li>
                  <strong>Phone:</strong> +254796699782
                </li>
                <li>
                  <strong>City:</strong> City : Kisumu, Kenya
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul style={{ "list-style-type": "none" }}>
                <li>
                  <strong>Age:</strong> {age}
                </li>
                <li>
                  <strong>Degree:</strong> Master
                </li>
                <li>
                  <strong>PhEmailone:</strong> georgeodhi98@gmail.com
                </li>
                <li>
                  <strong>Freelance:</strong> Available
                </li>
              </ul>
            </div>
          </div>
          <p>
          Professional and diligent computer scientist with ability to oversee effective system operations of various activities and ensure accuracy and clarity of system operations. With years of study, I have developed interest programming in JavaScript and ability to communicate technical information clearly and effectively to both technical and non-technical colleagues and other stakeholders.
          </p>
        </div>
        <div className="col-lg-4">
          <img
            className="img-fluid"
            src="https://db5pap001files.storage.live.com/y4mn4vg6FotKmcugs5jHcDWbkuN1CuQL1DMlkxt2nl2D8CY6F8klUBFbYmGdeKXpzjIIDZByl9EDgnNPLZ0t8JGPAPsrN_41pZ9C6yZEbRiSrZfwMgXJQejHW8IJD9sj2fOf0emzr5xVPeKkfeCTmlvtA8AuaQlEXzLzcc8Wi812pE5vygYJ8oeSzOkIgiSb2lgLE_G5Q2h_AtCrHELFLR0HQ?encodeFailures=1&width=540&height=540"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
