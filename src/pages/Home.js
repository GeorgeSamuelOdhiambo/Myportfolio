import React from "react";
import Aboutme from "../components/Aboutme/Aboutme";
import Avataland from "../components/landingp/Avataland";
import Skills from "../components/Skills/Skills";

const Home = () => {
  return (
    <div className="container-xxl pt-5 pb-2 text-center justify-content-center align-items-center bg-secondary bg-opacity-75">
      <Avataland />
      <Aboutme />
      <Skills />
    </div>
  );
};

export default Home;
