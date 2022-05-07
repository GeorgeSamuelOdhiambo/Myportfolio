import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Footer() {
  const [phonenumberOne, setPhoneOne] = useState();
  const [phonenumberTwo, setPhoneTwo] = useState();
  const [email, setEmail] = useState();
  const [location, setLocation] = useState();
  const [myText, setMytext] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((response) => response.json())
      .then((data) => {
        let data2 = data.info[0];
        setPhoneOne(data2.phonenumberOne);
        setPhoneTwo(data2.phonenumberTwo);
        setEmail(data2.email);
        setLocation(data2.location);
        setMytext(data2.myText);
      });
  }, []);

  return (
    <footer className="text-center text-lg-start bg-light text-muted container-xxl">
      <section className="p-4 border-bottom">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-6 col-lg-7 col-xl-6 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Odhiambo George
              </h6>
              <p>{myText}</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Core SKILLS</h6>
              <p>
                <Link
                  to=""
                  style={{ textDecoration: "none" }}
                  className="text-reset"
                >
                  ReactJS
                </Link>
              </p>
              <p>
                <Link
                  to=""
                  style={{ textDecoration: "none" }}
                  className="text-reset"
                >
                  NodeJS
                </Link>
              </p>
              <p>
                <Link
                  to=""
                  style={{ textDecoration: "none" }}
                  className="text-reset"
                >
                  MongoDB
                </Link>
              </p>
              <p>
                <Link
                  to=""
                  style={{ textDecoration: "none" }}
                  className="text-reset"
                >
                  DevOps
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">contacts</h6>
              <p>
                <i className="fas fa-home me-3"></i> {location}
              </p>
              <p>
                <Link to="/" className="fas fa-envelope me-3"></Link>
                {email}
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> {phonenumberOne}
              </p>
              <p>
                <i className="fas fa-print me-3"></i> {phonenumberTwo}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 bg-rgba(0, 0, 0, 0.05)">
        © {new Date().getFullYear()} Copyright:
        <Link
          to=""
          className="text-reset fw-bold"
          style={{ textDecoration: "none" }}
        >
          {" "}
          Odhiambo George
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
