import React, { useEffect, useState } from "react";

function Aboutme() {
  //   const [aboutme,setaboutme] = useState()
  //   const [imgurl,setImgurl] =useState()

  //   useEffect(() => {
  //       fetch("http://localhost:8080/aboutme")
  //       .then((response) => response.json())
  //       .then(data => {
  //           let data2 = data.info[0];
  //           setaboutme(data2.myText)
  //           setImgurl(data2.imageUrl)
  //       })
  //   },[])

  // return (
  //   <div classNameName="text-center ">
  //     <div classNameName="mb-5 mb-md-0">
  //       <div classNameName="card testimonial-card bg-white bg-opacity-50" style={{ "border-radius": "30px" }}>
  //         <div classNameName="row">
  //           <div classNameName="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-sm-12">
  //             <div classNameName="card-body">
  //               <h4 classNameName="mb-4 text-success text-uppercase">About Me</h4>
  //               <hr />
  //               <p classNameName="dark-grey-text mt-4">
  //                 {aboutme}
  //               </p>
  //             </div>
  //           </div>
  //           <div classNameName="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 justify-content-center align-items-center">
  //             <div classNameName="avatar mx-auto m-2">
  //               <img
  //                 src={imgurl}
  //                 alt="George"
  //                 classNameName="rounded-circle img-fluid"
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  let age = new Date().getFullYear()- 1998;
  return(
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2 className="text-uppercase">About Me</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Illustrator &amp; UI/UX Designer</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><strong>Birthday:</strong> 7 June 1998</li>
                  <li><strong>Website:</strong> www.example.com</li>
                  <li><strong>Phone:</strong> +254796699782</li>
                  <li><strong>City:</strong> City : Kisumu, Kenya</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><strong>Age:</strong> {age}</li>
                  <li><strong>Degree:</strong> Master</li>
                  <li><strong>PhEmailone:</strong> georgeodhi98@gmail.com</li>
                  <li><strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
          <div className="card bg-primary col-lg-4">
            <img src="https://db5pap001files.storage.live.com/y4mn4vg6FotKmcugs5jHcDWbkuN1CuQL1DMlkxt2nl2D8CY6F8klUBFbYmGdeKXpzjIIDZByl9EDgnNPLZ0t8JGPAPsrN_41pZ9C6yZEbRiSrZfwMgXJQejHW8IJD9sj2fOf0emzr5xVPeKkfeCTmlvtA8AuaQlEXzLzcc8Wi812pE5vygYJ8oeSzOkIgiSb2lgLE_G5Q2h_AtCrHELFLR0HQ?encodeFailures=1&width=540&height=540" className="img-fluid" alt="" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Aboutme;
