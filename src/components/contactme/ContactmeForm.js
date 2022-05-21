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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
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
