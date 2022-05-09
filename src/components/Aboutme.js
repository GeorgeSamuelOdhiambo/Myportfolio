import React, { useEffect, useState } from "react";

function Aboutme() {
    const [aboutme,setaboutme] = useState()
    const [imgurl,setImgurl] =useState()

    useEffect(() => {
        fetch("http://localhost:8080/aboutme")
        .then((response) => response.json())
        .then(data => {
            let data2 = data.info[0];
            setaboutme(data2.myText)
            setImgurl(data2.imageUrl)
        })
    },[])

  return (
    <div className="text-center ">
      <div className="mb-5 mb-md-0">
        <div className="card testimonial-card bg-white bg-opacity-50" style={{ "border-radius": "30px" }}>
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
              <div className="card-body">
                <h4 className="mb-4 text-success text-uppercase">About Me</h4>
                <hr />
                <p className="dark-grey-text mt-4">
                  {aboutme}
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 justify-content-center align-items-center">
              <div className="avatar mx-auto m-2">
                <img
                  src={imgurl}
                  alt="George"
                  className="rounded-circle img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
