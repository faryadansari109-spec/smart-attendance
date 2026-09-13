import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import IDCardDemo from "./components/IDCardDemo";
import AttendanceDemo from "./components/AttendanceDemo";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <IDCardDemo />
      <AttendanceDemo />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
