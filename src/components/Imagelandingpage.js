import React from 'react'

function Imagelandingpage() {
  return (
    <div id="carouselExampleInterval" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-mdb-interval="10000">
    <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                      alt="loading..."
                      className="img-fluid"
                      style={{ width: "400px", "border-radius": "100px" }}
                    ></img>
    </div>
    <div class="carousel-item" data-mdb-interval="2000">
    <img
                      src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                      alt="loading..."
                      className="img-fluid"
                      style={{ width: "400px", "border-radius": "100px" }}
                    ></img>
    </div>
    <div class="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100" alt="Exotic Fruits"/>
    </div>
  </div>
  <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Imagelandingpage