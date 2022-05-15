import React from "react";

function Socialmedia() {
  return (
            <section className="text-center  p-4">
              <div>
                <a
                  href="https://www.facebook.com/odhiambo.george.775"
                  className="btn btn-primary btn-floating m-1"
                  style={{ "background-color": "#3b5998"}}
                  role="button"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#/"
                  className="btn btn-primary btn-floating m-1"
                  style={{ "background-color": "#55acee" }}
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#/"
                  className="btn btn-primary btn-floating m-1"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>
                <a
                  href="#/"
                  className="btn btn-primary btn-floating m-1"
                  style={{ "background-color": "#ac2bac" }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/george-samuel-44807b20b/"
                  target="_blank"
                  className="btn btn-primary btn-floating m-1"
                  role="button"
                  style={{ "background-color": "#0082ca" }}
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/GeorgeSamuelOdhiambo"
                  target="_blank"
                  className="btn btn-primary btn-floating m-1"
                  role="button"
                  style={{ "background-color": "#333333" }}
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </section>
  );
}

export default Socialmedia;
