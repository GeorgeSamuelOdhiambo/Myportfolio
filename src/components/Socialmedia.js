import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter, BsLinkedin,BsGithub } from "react-icons/bs";
import {
  FaInstagramSquare,
  FaWhatsappSquare,
  FaTiktok,
  FaTelegram,
  FaSnapchatGhost,
} from "react-icons/fa";
import { TiSocialSkype } from 'react-icons/ti'

function Socialmedia() {
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col text-center justify-content-center ">
          <div className="card d-flex pt-1">
            <ul>
            <a href="/#" className="p-3" target="_blank">
                <BsGithub/>
              </a>
              <a href="/#" className="p-3" target="_blank">
                <AiFillFacebook />
              </a>
              <a href="/#" className="p-3" target="_blank">
                <BsTwitter />
              </a>
              <a href="/#" className="p-3" target="_blank">
                <FaInstagramSquare />
              </a>
              <a href="/#" className="p-3" target="_blank">
                <BsLinkedin />
              </a>
              <a href="/#" className="p-3" target="_blank">
                <FaWhatsappSquare />
              </a>
              <a href="/#" className="p-3" target="_blank">
                <FaTiktok />
              </a>
              <a href="/#" className="p-3" target="_blank">
                <FaTelegram />
              </a>
              <a href="/#" className="p-3" target="_blank">
                <FaSnapchatGhost />
              </a>
              <a href="/#" className="p-3" target="_blank">
                <TiSocialSkype/>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socialmedia;
