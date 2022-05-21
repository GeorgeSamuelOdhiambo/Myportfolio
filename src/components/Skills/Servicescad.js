import React from 'react'

function servicescad(props) {
  return (
        <div
          className="col-lg-4 col-md-6 d-flex align-items-stretch"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="icon-box iconbox-blue">
            <div className="icon">
              <img
                className="img-fluid"
                src={props.imageUrl}
                alt="Loading..."
              ></img>
            </div>
            <h4 className='fw-bold'>
              <a href={props.link} target="_blank" style={{ textDecoration: "none"}} rel="noreferrer">{props.header}</a>
            </h4>
            <p>{props.text}</p>
          </div>
        </div>
  )
}

export default servicescad