import React from "react";
import {
  FaIdCard,
  FaFingerprint,
  FaUsers,
  FaIndustry,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    icon: <FaIdCard />,
    title: "Digital ID Card",
    desc: "Smart digital ID cards with QR code, employee photo, and real-time verification system.",
    features: [
      "QR Code Scanning",
      "Custom Design",
      "Bulk Generation",
      "Cloud Storage",
    ],
  },
  {
    icon: <FaFingerprint />,
    title: "Auto Attendance",
    desc: "Automatic attendance system using biometric, face recognition, or RFID technology.",
    features: [
      "Face Recognition",
      "Biometric Scan",
      "Real-time Tracking",
      "Auto Reports",
    ],
  },
  {
    icon: <FaUsers />,
    title: "Client Management",
    desc: "Complete client management software to handle your customers, leads, and projects.",
    features: [
      "Lead Tracking",
      "Invoice Generation",
      "Client Portal",
      "Analytics Dashboard",
    ],
  },
  {
    icon: <FaIndustry />,
    title: "Textile Software",
    desc: "Specialized software for textile industry — production, inventory, and order management.",
    features: [
      "Production Tracking",
      "Stock Management",
      "Order Processing",
      "Quality Control",
    ],
  },
  {
    icon: <FaRobot />,
    title: "AI Integration",
    desc: "AI-powered analytics and automation to streamline your business operations.",
    features: [
      "Smart Insights",
      "Predictive Analytics",
      "Auto Alerts",
      "Chatbot Support",
    ],
  },
  {
    icon: <FaChartLine />,
    title: "Custom Solutions",
    desc: "Tailor-made software solutions designed specifically for your business needs.",
    features: [
      "Custom Modules",
      "API Integration",
      "Scalable Design",
      "Free Consultation",
    ],
  },
];

const Services = () => {
  return (
    <section
      className="services"
      id="services"
      style={{ background: "#f8fafc" }}
    >
      <div className="container">
        <div className="section-title">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            Complete business solutions for modern companies — from attendance
            to client management.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="service-features">
                {service.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
