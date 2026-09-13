import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1>
            Smart <span>Attendance</span> Technology for Modern Business
          </h1>
          <p>
            Digital ID Cards, Auto Attendance Systems, Client Management
            Software, aur Textile Industry ke liye customized solutions — sab ek
            hi jagah.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get Free Demo{" "}
              <FaArrowRight
                style={{ marginLeft: 8, verticalAlign: "middle" }}
              />
            </a>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>99.9%</h3>
              <p>Accuracy</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-header">
              <div className="hero-card-avatar">RK</div>
              <div>
                <h4 style={{ color: "#0f172a", fontSize: "1rem" }}>
                  Ajmat Ansari
                </h4>
                <p style={{ color: "#64748b", fontSize: "0.8rem" }}>
                  Employee ID: ST-2045
                </p>
              </div>
            </div>
            <div className="hero-card-body">
              <div className="hero-card-row">
                <span>Department</span>
                <span>Production</span>
              </div>
              <div className="hero-card-row">
                <span>Check-in Time</span>
                <span>09:02 AM</span>
              </div>
              <div className="hero-card-row">
                <span>Status</span>
                <span style={{ color: "#22c55e" }}>Present</span>
              </div>
              <div className="hero-card-row">
                <span>Working Hours</span>
                <span>8h 45m</span>
              </div>
            </div>
            <div className="status-badge">
              <span className="status-dot"></span>
              Auto Attendance Active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
