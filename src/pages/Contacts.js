import React from "react";
import ContactmeForm from "../components/ContactmeForm";
import Corasol from "../components/Corasol";

const Contacts = () => {
  return (
    //<ContactmeForm/>
    <>
      <div className="row p-5"
      style={{"marginTop":"50px",
      "background-image":
            "url('https://thumbs.dreamstime.com/b/contact-us-concept-background-d-render-illustration-177414702.jpg')",
          height: "auto",
          "background-position": "center center",
          "background-repeat": "no-repeat",
          "background-size": "cover",
    }}
      >
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-5"
        style={{
          
        }}
        >
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 p-5 bg-info bg-gradient bg-opacity-50">
          <ContactmeForm />
        </div>
      </div>
    </>
  );
};

export default Contacts;
