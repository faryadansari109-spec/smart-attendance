import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! Hum aapko jaldi contact karenge.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2>
            Get in <span style={{ color: "#6366f1" }}>Touch</span>
          </h2>
          <p>
            Free demo book karein ya apne business ke liye custom solution ke
            baare mein baat karein. Hamari team 24 hours mein reply karti hai.
          </p>

          <div className="contact-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div>
              <h5>Phone</h5>
              <p>+91 8623991530</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div>
              <h5>Email</h5>
              <p>info@smartattendancetech.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h5>Address</h5>
              <p>MithPada, Shelar, Bhiwandi</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Aapko kaunsa software chahiye?"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
