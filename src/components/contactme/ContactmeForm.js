import { React } from "react";
import Myform from "./Myform";
import Info from "./Info";

const Contactme = () => {
  const textcolor = { color: "#e73131" };

  return (
    <section
      className="container-xxl mt-2 contact bg-white bg-opacity-75"
      style={{ borderRadius: "20px" }}
    >
      <div className="container-md text-center ">
        <div className="section-title">
          <h1 className="fw-bold" style={{ textAlign: "center" }}>
            CONTACT <span style={textcolor}>ME</span>
          </h1>
          <div style={{ border: "2px solid #e73131", width: "100%" }}></div>
          <p className="p-2 fw-bold">
            If you have any questions or queries, all always be happy to help. Feel free to contact me by telephone 
            or email amd i will be sure to get back to you as soon as possible.
            </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <Info />
          </div>
          <div className="col-md-8 mt-5 mt-md-0">
            <Myform />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
