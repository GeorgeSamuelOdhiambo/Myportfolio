import React from "react";
import Testimony from "../Testimony";

function Skills() {
  let data = [
    {
      imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
      name: "Felix Idalia",
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
      className="carousel bg-white slide text-center carousel-dark mt-4"
      style={{ borderRadius : "30px" }}
      data-mdb-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://lh3.googleusercontent.com/pw/AM-JKLUGMJizVZX_XSfn9dvm04dakPAw0mI3sOuguEnxvHP7sjAg7y9vazP7vDEqXj2OGfeKqW5WG1G9Wk7l1jtJup_LU9RUvZiDBnbC5EtyrRPAn7-2z-FRxhNpoZcExHPpiRrBjAQGLgNGUICuq4mOCN9x=s625-no?authuser=0"
            alt="avatar"
            style={{ width: "100px" }}
          />
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h5 className="mb-3 fw-bold">Judith Debora</h5>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2"></i>
                Veary commited and a good problem solver, timely delivery wich meets the customers need. Feel free to contact him am sure you wont be disaponted.   
                <i className="fas fa-quote-right pe-2"></i>
              </p>
            </div>
          </div>
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
