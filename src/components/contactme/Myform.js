import React, { useRef, useState } from "react";
import axios from "axios";

const textcolor = { color: "#e73131" };
const Myform = () => {
  const [errorsms, seterrorsms] = useState(false);
  const [sentsms, setsentsms] = useState(false);
  const nameInput = useRef();
  const emailInput = useRef();
  const subjectInput = useRef();
  const massegeInput = useRef();

  const contactme = (event) => {
    event.preventDefault();
    axios("http://localhost:8080/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.current.value,
        subject: subjectInput.current.value,
        text: massegeInput.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          seterrorsms(true);
          setTimeout(() => seterrorsms(false), 2000);
        } else {
          setsentsms(true);
          setTimeout(() => setsentsms(false), 2000);
        }
      })
      .catch((error) => {
        console.log("Kuna erro" + error);
        seterrorsms(true);
          setTimeout(() => seterrorsms(false), 2000);
      });
  };

  return (
    <>
      <form onSubmit={contactme}>
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required
              ref={nameInput}
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              ref={emailInput}
            />
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
            ref={subjectInput}
          />
        </div>
        <div className="form-group mt-3">
          <textarea
            className="form-control"
            name="message"
            rows="5"
            placeholder="Message"
            required
            ref={massegeInput}
          />
        </div>
        <div className="text-center p-2 ">
          <button
            className="pt-2"
            type="submit"
            style={{ borderRadius : "10px" }}
          >
            <h4 style={textcolor}>SEND MESSAGE</h4>
          </button>
        </div>
      </form>
      {errorsms && (
        <div className="alert alert-danger d-flex align-items-center text-center" role="alert">
          <div>Sms not sent</div>
        </div>
      )}
      {sentsms && (
        <div className="alert alert-danger d-flex align-items-center text-center" role="alert">
          <div>Sms sent</div>
        </div>
      )}
    </>
  );
};

export default Myform;
