import React from 'react'

function Testimony(props) {
    
  return (
    <div className="carousel-item">
      <img className="rounded-circle shadow-1-strong mb-4"
        src={props.imageUrl} alt="avatar"
        style={{"width": "150px"}} />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <h5 className="mb-3">{props.name}</h5>
          <p className="text-muted">
            <i className="fas fa-quote-left pe-2"></i>
            {props.text}
          </p>
        </div>
      </div>
      <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="fas fa-star fa-sm"></i></li>
        <li><i className="far fa-star fa-sm"></i></li>
      </ul>
    </div>
  )
}

export default Testimony