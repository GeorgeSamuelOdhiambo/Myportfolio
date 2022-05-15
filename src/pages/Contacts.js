import React from "react";
import ContactmeForm from "../components/ContactmeForm";
import Socialmedia from "../components/Footer/Socialmedia";

const Contacts = () => {
  return (
    //<ContactmeForm/>
    <>
      <div
        className="row p-4 mt-5"
        style={{
          "background-color": "#9d789b",
        }}
      >
        <ContactmeForm />
      </div>
      <Socialmedia />
    </>
  );
};

export default Contacts;
