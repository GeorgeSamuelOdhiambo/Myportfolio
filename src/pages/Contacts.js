import React from "react";
import ContactmeForm from "../components/contactme/ContactmeForm";
import Socialmedia from "../components/contactme/Socialmedia"
import Contacttop from "../components/contactme/Contacttop"

const Contacts = () => {
  return (
    <>
      <div className="row p-4 mt-5 bg-secondary bg-opacity-75">
      <Contacttop/>
        <ContactmeForm />
        <Socialmedia/>
      </div>
    </>
  );
};

export default Contacts;
