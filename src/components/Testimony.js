import React from 'react'

function Testimony(props) {
    
  return (
    <div className="carousel-item">
      <img className="rounded-circle shadow-1-strong mb-4"
        src={props.imageUrl} alt="avatar"
        style={{ width : "100px"}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">{props.name}</h5>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            {props.text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimony