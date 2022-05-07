import React from "react";
import { Link } from "react-router-dom";
import Cardhero from "../components/Cardhero";
import Corasol from "../components/Corasol"

let data = {
  header: "header",
  title: "samuel odhiambo",
  body: "Samuel odhkshh sjwwj sjiwiw sjsidn djjks kjjd",
  button: "Lern more",
};
let data2 = {
  header: "My Header",
  title: "Daniel musu",
  body: "Samuel odhkshh sjwwj sjiwiw sjsidn djjks kjjd",
  button: "button 2",
};
const Home = () => {
  return (
    <div
      className="container-xxl p-5 text-center bg-image justify-content-center align-items-center"
      style={{
        "background-image":
          "url('https://live.staticflickr.com/65535/52055736498_2235802ec1.jpg')",
        height: "auto",
        "margin-top": "58px",
        "background-position": "center center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      }}
    >
      <Corasol></Corasol>
      {/* <div className="mask">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Odhiambo George Samuel</h1>
            <h4 className="mb-3">Full Stack Web Developer</h4>
            <h5 className="mb-3">Vision Making the world a better place</h5>
            <Link
              className="btn btn-outline-light btn-lg m-2"
              to="/contacts"
              role="button"
              rel="nofollow"
            >
              Contact Me
            </Link>
            <a
              className="btn btn-outline-light btn-lg m-2"
              href="https://www.linkedin.com/in/george-samuel-44807b20b/"
              role="button"
              target="_blank"
              rel="noreferrer"
            >
              My LinkIn Profile
            </a>
          </div>
        </div>
      </div> */}
      <div className="row p-3">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Cardhero data={data} />{" "}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Cardhero data={data2} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
