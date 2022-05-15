import React from "react";
import Aboutme from "../components/Aboutme/Aboutme";
// import Aftercorasol from "../components/Aftercorasol";
import Avataland from "../components/Skills/Avataland";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div
      className="container-xxl pt-5 pb-2 text-center justify-content-center align-items-center"
      style={{
        "background-color": "#9d789b",
      }}
    >
      <Avataland />
      <Aboutme/>
      <Skills/>
    </div>
  );
};

export default Home;
