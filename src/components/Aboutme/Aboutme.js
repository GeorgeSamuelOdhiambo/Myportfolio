import React from "react";

const textcolor = { color: "#e73131" };
function Aboutme() {
  let age = new Date().getFullYear() - 1998;
  return (
    <div
      className="container-xxl bg-white bg-opacity-75"
      style={{ borderRadius: "30px" }}
      data-aos="fade-up"
    >
      <h2 className="text-uppercase pt-2 fw-bold">ABOUT <span style={textcolor}>ME</span></h2>
      <div style={{ border: "2px solid #e73131", width: "100%" }}></div>
      <div className="section-title">
        <p className="" style={{fontWeight:"revert"}}>
          My name is Odhiambo George Samuel<br></br>
          Experienced software developer building mordern products with the latest technology. Experienced in client scripting language and server-side scripting language like 
          HTML5,Javascript,TypeScript,JSON,Bootstrap,React,Redux,Express,Node.js.
        </p>
      </div>

      <div className="row">
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>APIs <span style={textcolor}>&amp;</span> UI/UX Designer</h3>
          <p className="fst-italic">
          My name is Odhiambo George Samuel, 
          a delighted computer scientist with alot of skills in technology both software and hardware.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul style={{ listStyleType: "none" }}>
                <li key="1">
                  <strong>Birthday:</strong> 7 June 1998
                </li>
                <li key="2">
                  <strong>Website:</strong> coming soon
                </li>
                <li key="3">
                  <strong>Phone:</strong> +254796699782
                </li>
                <li key="4">
                  <strong>City:</strong> Kisumu, Kenya
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul style={{ listStyleType: "none" }}>
                <li key="5">
                  <strong>Age:</strong> {age}
                </li>
                <li key="6">
                  <strong>Degree:</strong> Master
                </li>
                <li key="7">
                  <strong>Email:</strong> georgeodhi98@gmail.com
                </li>
                <li key="8">
                  <strong>Freelance:</strong> Available
                </li>
              </ul>
            </div>
          </div>
          <p>
          Professional and diligent computer scientist with ability to oversee effective system operations of various activities and ensure accuracy and clarity of system operations. With years of study, I have developed interest programming in JavaScript and ability to communicate technical information clearly and effectively to both technical and non-technical colleagues and other stakeholders.
          </p>
        </div>
        <div className="col-lg-4 text-center">
          <img
            className="img-fluid pt-3"
            src="https://lh3.googleusercontent.com/PMcJSs5GrYuf5LzyMTKnjXcJtpCl8ZxHxZWn5GTFCIAukJo8shz_PDAQnM0H_51FhA4W-8ndrhgI854Zcr1_UzFGnoJAf7pXuWr6TzOtvH3-Wcst0msdVJHueWBRUrK7Q1eQb8jOu5g-GiJB41-TXh33vJiBr7T6nxNfvyJD3BZ7w4UlZnCvsdh4UgmELYulf1T494iEZeXrgyAaxBCZjc06nJRPF-iormutN7LWU2l9LOXVIuWAHX604trSExi9YW3pTKP8N3RyEB0b36JXzQ2L1rlJoo37UmCKFc_lD4-oU_DwgqvOCVzuWAz6EDDZlbRrLT5vBLXWiHgOEDq8V_hIiuB78cXpgK__a5OND7YSX3Pz9dMW83gGPxiXgFgDww49C42dHmiwb4xWTxW7vr6jXTBuoIR6rauAkLGmWKZdTC_wn1q6eufzpEIPD_rDbbotgxK98EGFEsllfxQ9JurwP6YGAPegXcrQaQVQojgWOSN3HI78Q7hgcHfvmajlZqo37GDLj1SVvRYrXaMjS-h_NYDqjgKVztSyBEfXBjhnQ4wayZeA-mGiytgDW6GdP_LqmXxk7pYTXy900Epj6U1lZVTHt9zBdQhToXEjb1rWRtFTmmSjbwdhBX37mWlKE20PEKEJMQRaXg-ralZ8ILC1IxSen4VSz1iywpgtxOF9uhbbD4u5Uh1TOEDrNWfGhdNjj4ew2GL7oMe3HKWQ-g_azNZTQ1LppOY2Suqf60nxCQCmTUPhr0ahjkM=w853-h568-no?authuser=0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
