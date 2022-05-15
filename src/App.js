import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
