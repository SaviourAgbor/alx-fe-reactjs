import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div style={{ minHeight: "80vh"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    
    </BrowserRouter>
  );
}

export default App;
