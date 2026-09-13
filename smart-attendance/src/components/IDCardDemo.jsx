import React from "react";
import {
  FaQrcode,
  FaShieldAlt,
  FaMobileAlt,
  FaCloudUploadAlt,
  FaCheckCircle,
} from "react-icons/fa";

const qrPattern = [
  1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1,
  0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1,
];

const IDCardDemo = () => {
  return (
    <section className="idcard-section" id="idcard">
      <div className="container">
        <div className="section-title">
          <h2>
            Digital <span>ID Card</span> System
          </h2>
          <p>Smart, secure, aur paperless ID cards aapke employees ke liye.</p>
        </div>

        <div className="idcard-grid">
          <div className="idcard-info">
            <h3>Smart Digital ID Cards with QR Verification</h3>
            <p>
              Har employee ke liye ek unique digital ID card generate karein
              jisme QR code, photo, aur encrypted details ho. Ek scan mein pura
              verification ho jaata hai.
            </p>

            <ul className="idcard-features">
              <li>
                <FaQrcode /> QR Code based instant verification
              </li>
              <li>
                <FaShieldAlt /> Encrypted & tamper-proof data
              </li>
              <li>
                <FaMobileAlt /> Mobile app se access karein
              </li>
              <li>
                <FaCloudUploadAlt /> Cloud-based storage & management
              </li>
              <li>
                <FaCheckCircle /> Bulk ID card generation in minutes
              </li>
            </ul>

            <a href="#contact" className="btn btn-primary">
              Get ID Card Demo
            </a>
          </div>

          <div>
            <div className="id-card">
              <div className="id-card-header">
                <div className="id-card-logo">SMART ATTENDANCE TECH</div>
                <div className="id-card-chip"></div>
              </div>

              <div className="id-card-photo">AJ</div>
              <div className="id-card-name">Ajmat Ansari</div>
              <div className="id-card-role">Production Manager</div>

              <div className="id-card-details">
                <div className="id-card-detail">
                  <label>Employee ID</label>
                  <span>ST-2045</span>
                </div>
                <div className="id-card-detail">
                  <label>Department</label>
                  <span>Production</span>
                </div>
                <div className="id-card-detail">
                  <label>Blood Group</label>
                  <span>O+</span>
                </div>
                <div className="id-card-detail">
                  <label>Joining Date</label>
                  <span>12 Jan 2022</span>
                </div>
                <div className="id-card-detail">
                  <label>Contact</label>
                  <span>+91 98765 43210</span>
                </div>
                <div className="id-card-detail">
                  <label>Valid Till</label>
                  <span>31 Dec 2026</span>
                </div>
              </div>

              <div className="id-card-qr">
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#64748b" }}>
                    SCAN TO VERIFY
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    ID: ST-2045
                  </div>
                </div>
                <div className="qr-placeholder">
                  {qrPattern.map((cell, i) => (
                    <div
                      key={i}
                      style={{ background: cell ? "#0f172a" : "transparent" }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDCardDemo;
