import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import {
  BsFillTelephoneInboundFill,
  BsTelephoneInboundFill,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Copyrightfooter from "./Copyrightfooter";

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
              <h6 className="text-uppercase fw-bold mb-4 text-center">
                Odhiambo George
              </h6>
              <p>{myText}</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
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

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-center">
              <h6 className="text-uppercase fw-bold mb-4">contacts</h6>
              <p>
                <GoLocation />
                <i className="me-3"></i> {location}
              </p>
              <p>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                  className=""
                  style={{ textDecoration: "none" }} rel="noreferrer"
                >
                  <SiGmail></SiGmail>{" "}
                </a>
                <i className="me-3"></i>
                {email}
              </p>
              <p>
                <BsFillTelephoneInboundFill />
                <i className="me-3"></i> {phonenumberOne}
              </p>
              <p>
                <BsTelephoneInboundFill />
                <i className="me-3"></i> {phonenumberTwo}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Copyrightfooter />
    </footer>
  );
}

export default Footer;
