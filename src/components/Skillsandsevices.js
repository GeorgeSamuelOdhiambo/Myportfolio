import React from "react";

function Skillsandsevices() {
  return (
    <section className="card bg-white bg-opacity-50" style={{ "border-radius": "30px" }}>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
          <hr></hr>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row skills-content mb-3">
          <div className="col-lg-6">

            <div className="progress-bar-wrap mt-2">
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
              <div className="progress" style={{height : "5px"}}>
                <div
                  className="progress-bar bg-success w-100"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            

            <div className="progress-bar-wrap mt-2">
              <span className="skill">
                CSS <i className="val">75%</i>
              </span>
              <div className="progress " style={{height : "5px"}}>
                <div
                  className="progress-bar bg-success w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress-bar-wrap mt-2">
              <span className="skill">
                JavaScript <i className="val">75%</i>
              </span>
              <div className="progress" style={{height : "5px"}}>
                <div
                  className="progress-bar bg-success w-50"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress-bar-wrap mt-2">
              <span className="skill">
                NodeJs <i className="val">75%</i>
              </span>
              <div className="progress " style={{height : "5px"}}>
                <div
                  className="progress-bar bg-success w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress-bar-wrap mt-2">
              <span className="skill">
                React Native <i className="val">50%</i>
              </span>
              <div className="progress " style={{height : "5px"}}>
                <div
                  className="progress-bar bg-success w-75"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress-bar-wrap mt-2">
              <span className="skill">
                ReactJS <i className="val">75%</i>
              </span>
              <div className="progress" style={{height : "5px"}}>
                <div
                  className="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress-bar-wrap mt-2">
              <span className="skill">
                MongoDB <i className="val">50%</i>
              </span>
              <div className="progress" style={{height : "5px"}}>
                <div
                  className="progress-bar w-50"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress-bar-wrap mt-2">
              <span className="skill">
                MySQL <i className="val">75%</i>
              </span>
              <div className="progress" style={{height : "5px"}}>
                <div
                  className="progress-bar w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress-bar-wrap mt-2">
              <span className="skill">
                DevOps <i className="val">75%</i>
              </span>
              <div className="progress " style={{height : "5px"}}>
                <div
                  className="progress-bar bg-success w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="progress-bar-wrap mt-2">
              <span className="skill">
                Django <i className="val">75%</i>
              </span>
              <div className="progress " style={{height : "5px"}}>
                <div
                  className="progress-bar bg-success w-75"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skillsandsevices;
