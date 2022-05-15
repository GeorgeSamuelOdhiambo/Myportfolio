import { React, useRef } from "react";

const Contactme = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const subjectInput = useRef();
  const massegeInput = useRef();

  const contactme = (event) => {
    event.preventDefault();
    console.log(nameInput.current.value);
  };

  return (
    <section className=" mt-2 contact bg-white bg-opacity-50" style={{ "border-radius": "30px" }}>
      <div className="container-md">
        <div className="section-title">
          <h2 className="text-center">Contact Me</h2><hr/>
          <p>
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
            <div className="info">
              <div className="address">
                <i className="ri-map-pin-line"></i>
                <h4>Location</h4>
                <p>Nairobi, kenya</p>
              </div>

              <div className="email">
                <i className="ri-mail-line"></i>
                <h4>Email</h4>
                <p>georgeodhi98@gmail.com</p>
              </div>

              <div className="phone">
                <i className="ri-phone-line"></i>
                <h4>Call</h4>
                <p>+254 110494133</p>
              </div>
            </div>
          </div>

          <div className="col-md-8 mt-5 mt-md-0">
            <form className="" onSubmit={contactme}>
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
                ></textarea>
              </div>
              <div className="text-center mt-2 ">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
