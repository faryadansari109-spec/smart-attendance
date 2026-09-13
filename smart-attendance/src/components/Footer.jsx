import React from "react";
import { FaFingerprint } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <div className="logo-icon">
                <FaFingerprint />
              </div>
              <span>SmartAttendanceTech</span>
            </a>
            <p>
              Smart digital solutions for modern businesses — ID cards,
              attendance, client management, aur textile software.
            </p>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Digital ID Card</li>
              <li>Auto Attendance</li>
              <li>Client Software</li>
              <li>Textile Software</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Documentation</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} SmartAttendanceTechnology. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
