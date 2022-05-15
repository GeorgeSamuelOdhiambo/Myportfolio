import React, { useEffect, useState } from "react";
import Servicescad from "./Servicescad";
function Services() {
  const [servicesdata, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/services")
      .then((response) => response.json())
      .then((info) => {
        // console.log(data.data);
        setData(info.data)
      });
  }, []);
console.log(servicesdata);
  return (
    <section
      className="card bg-white bg-opacity-50 mt-3"
      style={{ "border-radius": "30px" }}
    >
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <hr />
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
         {servicesdata.map((info) => (
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
