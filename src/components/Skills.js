import React from "react";
import Testimony from "./Testimony";

function Skills() {
  let data = [
    {
      imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.",
    },
    {
      imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.",
    },
    {
      imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti nesciunt sint eligendi reprehenderit reiciendis.",
    },
  ];
  
  return (
    <div
      id="carouselExampleControls"
      className="carousel bg-white bg-opacity-50 slide text-center carousel-dark mt-4"
      style={{ "border-radius": "30px" }}
      data-mdb-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
            alt="avatar"
            style={{ width: "150px" }}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h5 className="mb-3">Maria Kate</h5>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </div>
          </div>
          <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
            <li>
              <i className="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i className="fas fa-star fa-sm"></i>
            </li>
            <li>
              <i className="far fa-star fa-sm"></i>
            </li>
          </ul>
        </div>
        {data.map((user) => (
          <Testimony
            imageUrl={user.imageUrl}
            name={user.name}
            text={user.text}
          />
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Skills;
