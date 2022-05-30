import React, { useEffect, useState } from "react";
import "./Skills.css";
const { REACT_APP_ROUTE_URL } = process.env;
function Skills() {
  const [myTestimony, SetmyTestimony] = useState();
  const [dataIn, SetdataIn] = useState(false);

  useEffect(() => {
    fetch(`${REACT_APP_ROUTE_URL}testimony`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        SetmyTestimony(data.info);
        SetdataIn(true);
      });
  }, []);
  return (
    <div className="container-xxl my d-flex align-items-center py-5 mh-100">
      <a
        className="carousel-control-prev text-decoration-none "
        href="#mycarousel"
        role="button"
        data-bs-slide="prev"
      >
        <div className="d-flex flex-column justify-content-center me-2 ms-auto left">
          <span className="fas fa-arrow-left"></span>{" "}
        </div>{" "}
        <span className="sr-only">Previous</span>
      </a>
      <div className="container-xxl containe">
        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators" key="7">
            {dataIn &&
              myTestimony.map((info) => (
                <li
                  key={info._id}
                  data-bs-target="#mycarousel"
                  data-bs-slide-to={info.num}
                  className={info.status}
                ></li>
              ))}
          </ol>
          <div className="carouse-inner">
            {dataIn &&
              myTestimony.map((info) => (
                <div className={`carousel-item ${info.status}`}>
                  <div className="row">
                    <div className="col-lg-6 ">
                      <img
                        src={info.imageUrl}
                        className="img d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-6 ">
                      <div className=" d-flex flex-column justify-content-center my-5 px-3">
                        <p className="review text-center">"{info.text}"</p>
                        <div className="name d-flex align-items-center justify-content-center">
                          <span className="fas fa-minus pe-1"></span>
                          <p className="m-0">{info.name}</p>
                        </div>
                        <p className="job text-center">{info.jobposition}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <a
        className="carousel-control-next text-decoration-none "
        href="#mycarousel"
        role="button"
        data-bs-slide="next"
      >
        <div className="d-flex flex-column justify-content-center right ms-2 me-auto">
          <span className="fas fa-arrow-right"></span>{" "}
        </div>{" "}
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Skills;
