import React from "react";
import "./style.css";

function Socialmedia() {
  return (
    <section className="footer-down  bg-light ">
    <h2 className="pt-2 fw-bold">FOLLOW <span style={{color:"#e73131"}}>ME</span> ON</h2>
      <ul className="pb-2">
        <li className="facebook hvr-pulse">
          <a
            href="https://www.facebook.com/odhiambo.george.775"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook-f"></i>
          </a>
        </li>
        <li className="twitter hvr-pulse">
          <a
            href="https://twitter.com/Odhiamb08032450"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li className="linkedin hvr-pulse">
          <a
            href="https://www.linkedin.com/in/george-samuel-44807b20b/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li className="google-plus hvr-pulse">
          <a href="https://github.com/GeorgeSamuelOdhiambo" target="_blank" rel="noreferrer">
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li className="youtube hvr-pulse">
          <a href="#/">
            <i className="fa fa-youtube"></i>
          </a>
        </li>
        <li className="instagram hvr-pulse">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li className="behance hvr-pulse">
          <a href="https://gitlab.com/OdhiamboGeorge" target="_blank" rel="noreferrer">
            <i className="fa fa-gitlab"></i>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Socialmedia;
