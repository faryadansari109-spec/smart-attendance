import React, { useState } from "react";
import { FaFingerprint, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#home" className="logo">
          <div className="logo-icon">
            <FaFingerprint />
          </div>
          <span>
            SmartAttendance<span style={{ color: "#6366f1" }}>Tech</span>
          </span>
        </a>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#idcard" onClick={() => setOpen(false)}>
              Digital ID
            </a>
          </li>
          <li>
            <a href="#attendance" onClick={() => setOpen(false)}>
              Attendance
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
