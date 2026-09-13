import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-content">
          <h2>
            About <span style={{ color: "#6366f1" }}>SmartAttendanceTech</span>
          </h2>
          <p>
            Hum ek technology company hain jo businesses ke liye smart
            automation solutions banati hai. Hamara mission hai — har company ko
            affordable aur reliable software dena jo unke daily operations ko
            easy banaye.
          </p>
          <p>
            Digital ID cards se lekar textile industry ke specialized software
            tak, hum end-to-end solutions provide karte hain with 24/7 support.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <h4>10+ Years Experience</h4>
              <p>Industry mein trusted partner</p>
            </div>
            <div className="about-feature">
              <h4>500+ Clients</h4>
              <p>India bhar mein satisfied customers</p>
            </div>
            <div className="about-feature">
              <h4>Custom Development</h4>
              <p>Aapke business ke hisaab se</p>
            </div>
            <div className="about-feature">
              <h4>24/7 Support</h4>
              <p>Kabhi bhi help ke liye available</p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            borderRadius: 20,
            padding: 40,
            color: "white",
            minHeight: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h3 style={{ fontSize: "1.8rem", marginBottom: 20 }}>
            Why Choose Us?
          </h3>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
              ✓ Affordable pricing for all business sizes
            </li>
            <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
              ✓ Easy to use interface — no training needed
            </li>
            <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
              ✓ Cloud-based — access from anywhere
            </li>
            <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
              ✓ Regular updates & new features
            </li>
            <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
              ✓ Dedicated account manager
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
