import React from "react";
import { Link } from "react-router-dom";

function cardhero(props) {
    let data = {...props.data}
  return (
    <div
      className="card shadow-0 mb-3 justify-content-center bg-secondary bg-opacity-50 "
    //   style={{ "max-width": "auto" }}
    >
      <div className="card-header bg-transparent text-uppercase fw-bold mb-4">
        {data.header}
      </div>
      <div className="card-body  text-white">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.body}</p>
      </div>
      <div className="card-footer bg-transparent">
        <Link to={"/#"} className="btn btn-secondary bg-gradient">
          {data.button}
        </Link>
      </div>
    </div>
  );
}

export default cardhero;
