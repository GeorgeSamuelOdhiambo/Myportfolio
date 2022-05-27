import React, { useEffect, useState } from "react";
import Servicescad from "./Servicescad";
const { REACT_APP_ROUTE_URL } = process.env

function Services() {
  const [servicesdata, setData] = useState();
  const [dataDisplay, setDatadisplay] = useState(false);

  const textcolor = { color: "#e73131" };
  useEffect(() => {
    console.log(`${REACT_APP_ROUTE_URL}services`);
    fetch(`${REACT_APP_ROUTE_URL}services`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.info);
        setDatadisplay(true);
      });
  }, []);

  return (
    <section
      className="bg-white mt-3"
      style={{ borderRadius: "30px", width:"100%" }}
    >
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 className="fw-bold">SERVI<span style={textcolor}>CES</span></h2>
          <div style={{ border: "2px solid #e73131", width: "100%" }}></div>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          {dataDisplay &&
            servicesdata.map((info) => (
              <Servicescad
                header={info.header}
                imageUrl={info.imageUrl}
                text={info.text}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
