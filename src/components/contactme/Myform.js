import React, { useRef, useState } from "react";
const { REACT_APP_ROUTE_URL } = process.env;

const textcolor = { color: "#e73131" };
const Myform = () => {
  const [errorsms, seterrorsms] = useState(false);
  const [sentsms, setsentsms] = useState(false);
  const [sendbtn, setsendbtn] = useState(false);
  const nameInput = useRef();
  const emailInput = useRef();
  const subjectInput = useRef();
  const massegeInput = useRef();

  const contactme = (event) => {
    setsendbtn(true);
    event.preventDefault();
    fetch(`${REACT_APP_ROUTE_URL}mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.current.value,
        subject: subjectInput.current.value,
        text: massegeInput.current.value,
        name: nameInput.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setsendbtn(false);
          seterrorsms(true);
          setTimeout(() => seterrorsms(false), 2000);
        } else {
          setsentsms(true);
          setsendbtn(false);
          setTimeout(() => setsentsms(false), 2000);
          emailInput.current.value = "";
          subjectInput.current.value = "";
          massegeInput.current.value = "";
          nameInput.current.value = "";
        }
      })
      .catch((error) => {
        console.log("Kuna erro" + error);
        seterrorsms(true);
        setsendbtn(false);
        setTimeout(() => seterrorsms(false), 2000);
      });
  };

  return (
    <>
    {sentsms && (
        <div className="alert bg-success d-flex align-items-center" role="alert">
          <svg
            className="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
          >
            <i className="bi bi-check-circle-fill"></i>
          </svg>
          <div>Massage Successfully Received</div>
        </div>
      )}
      
      {errorsms && (
        <div className="alert bg-danger d-flex align-items-center" role="alert">
          <svg
            className="bi flex-shrink-0 me-2"
            width="24"
            height="24"
            role="img"
            aria-label="Success:"
          >
            <i className="bi bi-check-circle-fill"></i>
          </svg>
          <div>Massage Not Send try again</div>
        </div>
      )}
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
            disabled={sendbtn}
            className="pt-2"
            type="submit"
            style={{ borderRadius: "10px" }}
          >
            <h4 style={textcolor}>SEND MESSAGE</h4>
          </button>
        </div>
      </form>
      
    </>
  );
};

export default Myform;
