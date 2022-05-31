import React, { useEffect, useState } from "react";
import Servicescad from "./Servicescad";
const { REACT_APP_ROUTE_URL} = process.env;

function Services() {
  const [servicesdata, setData] = useState();
  const [dataDisplay, setDatadisplay] = useState(false);

  const textcolor = { color: "#e73131" };
  useEffect(() => {
    fetch(`${REACT_APP_ROUTE_URL}services`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.info);
        setData(data.info);
        setDatadisplay(true);
      });
  }, []);

  return (
    <section
      className="bg-white mt-3"
      style={{ borderRadius: "30px", width: "100%" }}
    >
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2 className="fw-bold">
            SERVI<span style={textcolor}>CES</span>
          </h2>
          <div style={{ border: "2px solid #e73131", width: "100%" }}></div>
          <p>
            Experienced designing and developing software for business solutions,
            Software engineer with experience in multiple settings, I can design
            and develop programs using the latest and most appropriate
            technology.
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
