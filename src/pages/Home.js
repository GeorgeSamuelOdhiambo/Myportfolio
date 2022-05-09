import React from "react";
import Aboutme from "../components/Aboutme";
import Aftercorasol from "../components/Aftercorasol";
import Avataland from "../components/avata/Avataland";

const Home = () => {
  return (
    <div
      className="container-xxl p-5 text-center justify-content-center align-items-center"
      style={{
        "background-color": "#9d789b",
      }}
    >
      <Avataland />
      <Aboutme/>
      <Aftercorasol />
    </div>
  );
};

export default Home;
