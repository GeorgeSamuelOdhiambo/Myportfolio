import React from "react";
import { Link } from "react-router-dom";
import {FaLinkedin} from "react-icons/fa"
import {IoMdContact} from "react-icons/io"

function Avataland() {
  return (
    <section>
      <div className="pt-5 pb-3 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="container">
            <div className="card" style={{ "border-radius": "15px" }}>
              <div className="card-body p-4 ">
                <div className="d-flex text-black row">
                  <div className=" col-sm-12 col-xxl-6 col-xl-6">
                    <img
                      src="https://lh3.googleusercontent.com/8vh35OIiOlR3Gsnp05gVXdUGhwK_95O6A_uam7cLIl01guZMGY02trbBI-7cQcw0vbD9QH-8W0rQLGt-BFm1dKdbjZMqnh7tQtKOhHy7axWi0sRflP3u0I8O31Xk7HupMnxek4KZ0FhkOe4Wt0oMeScE8amQ6Sh5IrlNQ_EgU5b2Vj6jPBcqO_Ih7j3-RLsnD6GMFhntVLxMEAV-Q7R21I-T8aoubNckPVKzmFlXrFqhqDS7gMbgpRfpzIMfy60FY91MYwtoyEmkuLk0ZGtBZIH86rUNNLxmiP3Uo8HoAmAmUgoK9p7hppRfbqN-vTPhYhTbG4alPprD_vY4Ve_H6xwyjo1MH4VCsPe-xTzJTqvrJ9l49UrdG_h-ZpPHbC61rvoHWORW6-AU8b37P2_-Vt0Sami2X68h-eMBjF3ubjOvgGEeLsD0Lhh_OslMOR7ydwlqne2YO4uvaB6lP_VYZdotPApS5Zh5im_P0S5OIHOYtShfuTK59yJcxHnYggh2jUOZq6EI3-jk009upmOyVuvP7JjaoNJGC4Y619JHQIumSJGLfFAnHLIQhvbMuqPZJ8khCTNl-s8p183OVMu76cgjHJT1U24UNBvjzjkUrcFKjVVqBG0ylbI8l1qd7J9MbO9yMo8v0-s06Gd4UeaSdkE_6CYxoyLqzL-yz2cvAah3hBvY3ZEISJI_wf4a7ytabEj8wPLaAigNM7gs_eWZrvwCBwzu2NroWtdHxEkpOWWemdLXTNkuWYc2EGE=w627-h615-no?authuser=0"
                      alt="loading..."
                      className="img-fluid"
                      style={{ width: "400px", "border-radius": "100px" }}
                    ></img>
                  </div>

                  <div className="col-xxl-6 col-xl-6 col-sm-12 text-center">
                    <h1 className="mb-3 m-4 text-success text-uppercase">Odhiambo George Samuel</h1>
                    <h2 className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                      Full Stack Web Developer
                    </h2>
                    <div
                      className="justify-content-center rounded-3 p-2 mb-2"
                      style={{ "background-color": "#efefef" }}
                    >
                      <h5>MY SKILLS</h5>
                      <div
                        className=" d-flex justify-content-center rounded-3 p-2 mb-2"
                        style={{ "background-color": "#efefef" }}
                      >
                        <div className="container">
                          <div className="row">
                            <div className="col-xxl col-xl col-lg col-md col-sm-6">
                              <p className="small text-muted mb-1">ReactJs</p>
                              <p className="mb-0">41</p>
                            </div>
                            <div className="px-2 col-xxl col-xl col-lg col-md col-sm-6">
                              <p className="small text-muted mb-1">NodeJS</p>
                              <p className="mb-0">976</p>
                            </div>
                            <div className="px-2 col-xxl col-xl col-lg col-md col-sm-6">
                              <p className="small text-muted mb-1">MongoDB</p>
                              <p className="mb-0">8.5</p>
                            </div>
                            <div className="col-xxl col-xl col-lg col-md col-sm-6">
                              <p className="small text-muted mb-1">Bootstrap</p>
                              <p className="mb-0">41</p>
                            </div>
                            <div className="px-2 col-xxl col-xl col-lg col-md col-sm-6">
                              <p className="small text-muted mb-1">MySQL</p>
                              <p className="mb-0">976</p>
                            </div>
                            <div className="px-2 col-xxl col-xl col-lg col-md col-sm-6">
                              <p className="small text-muted mb-1">DevOps</p>
                              <p className="mb-0">8.5</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                        <Link to="/contacts" className="btn btn-outline-success me-1 flex-grow-1"style={{ textDecoration: "none", borderRadius:"30px" }} ><IoMdContact/>Contact Me</Link>
                        <a href="https://www.linkedin.com/in/george-samuel-44807b20b/" target="_blank" className="btn btn-success flex-grow-1 text-white"style={{ textDecoration: "none", borderRadius:"30px"}} rel="noreferrer"><FaLinkedin/>LinkIn Profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Avataland;
