import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";

function Corasol() {
  return (
    <div
      id="carouselMaterialStyle"
      className="carousel slide carousel-fade container-xxl"
      data-mdb-ride="carousel"
      style={{ borderRadius: "20%", height: "100hv" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide-to="0"
          className="active m-3"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide-to="1"
          className="m-3"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide-to="2"
          className="m-3"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner rounded-5 shadow-4-strong">
        <div
          className="carousel-item active container-xxl p-5 text-center bg-image justify-content-center align-items-center"
          style={{
            "background-image":
              "url('https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
            height: "auto",
            "background-position": "center center",
            "background-repeat": "no-repeat",
            "background-size": "cover",
          }}
        >
          <div className="mask">
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
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
            className="d-block w-100"
            alt="Canyon at Nigh"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
            className="d-block w-100"
            alt="Cliff Above a Stormy Sea"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Corasol;
