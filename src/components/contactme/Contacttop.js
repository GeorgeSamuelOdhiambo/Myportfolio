import React from "react";

function contacttop() {
  let myheight = { height: "300px" };
  let picheight = { height: "100%" };
  return (
    <div className="card bg-white bg-opacity-75 mt-2 p-3">
      <div
        style={myheight}
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={myheight}>
            <img
              src="https://iistd.in/wp-content/uploads/2021/04/Contact-us-1024x335.jpg"
              className="d-block w-100 "
              style={picheight}
              alt="..."
            />
          </div>
          <div className="carousel-item" style={myheight}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMbn4UcKkgs4c0v8LKgLjMRHwNeSqbnAu9YPkBcV0ObK2sOnuPBc0hU0zarmgpycHTTI&usqp=CAU"
              className="d-block w-100"
              style={picheight}
              alt="..."
            />
          </div>
          <div className="carousel-item text-center" style={myheight}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvNz1BQJ1qrg0Q--YKfvghpBKPceJ7dNmwopLlc0stgm-ehkQrgvlCQLYUpO6M5CvupM&usqp=CAU"
              className="d-block w-100"
              style={picheight}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default contacttop;
