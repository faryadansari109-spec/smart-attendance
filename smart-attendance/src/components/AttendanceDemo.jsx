import React from "react";
import { FaClock, FaUserCheck, FaUserTimes, FaChartBar } from "react-icons/fa";

const attendanceData = [
  { name: "Rahul Kumar", id: "ST-2045", time: "09:02 AM", status: "present" },
  { name: "Priya Sharma", id: "ST-2046", time: "09:15 AM", status: "late" },
  { name: "Amit Patel", id: "ST-2047", time: "08:55 AM", status: "present" },
  { name: "Sneha Verma", id: "ST-2048", time: "09:30 AM", status: "late" },
  { name: "Vikram Singh", id: "ST-2049", time: "08:48 AM", status: "present" },
];

const AttendanceDemo = () => {
  return (
    <section
      className="attendance"
      id="attendance"
      style={{ background: "#ffffff" }}
    >
      <div className="container">
        <div className="section-title">
          <h2>
            Auto <span>Attendance</span> System
          </h2>
          <p>
            Biometric, Face Recognition aur RFID se automatic attendance
            tracking.
          </p>
        </div>

        <div className="attendance-grid">
          <div className="attendance-panel">
            <div className="attendance-header">
              <h4>Today's Attendance</h4>
              <div className="live-badge">
                <span className="live-dot"></span> LIVE
              </div>
            </div>

            <div className="attendance-list">
              {attendanceData.map((emp, i) => (
                <div className="attendance-item" key={i}>
                  <div className="attendance-avatar">
                    {emp.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="attendance-info">
                    <h5>{emp.name}</h5>
                    <p>{emp.id}</p>
                  </div>
                  <div
                    className={`attendance-time ${emp.status === "late" ? "late" : ""}`}
                  >
                    {emp.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="attendance-stats">
              <div className="att-stat">
                <h4>245</h4>
                <p>Present</p>
              </div>
              <div className="att-stat">
                <h4>12</h4>
                <p>Late</p>
              </div>
              <div className="att-stat">
                <h4>8</h4>
                <p>Absent</p>
              </div>
            </div>
          </div>

          <div className="idcard-info" style={{ color: "#334155" }}>
            <h3 style={{ color: "#0f172a" }}>Real-time Attendance Tracking</h3>
            <p style={{ color: "#64748b" }}>
              Aapke employees ki attendance automatically track ho — koi manual
              entry nahi, koi mistake nahi. Har scan instantly cloud mein save
              ho jaata hai.
            </p>

            <ul className="idcard-features">
              <li style={{ color: "#334155", borderColor: "#e2e8f0" }}>
                <FaClock style={{ color: "#6366f1" }} /> Real-time check-in /
                check-out
              </li>
              <li style={{ color: "#334155", borderColor: "#e2e8f0" }}>
                <FaUserCheck style={{ color: "#6366f1" }} /> Face recognition &
                biometric
              </li>
              <li style={{ color: "#334155", borderColor: "#e2e8f0" }}>
                <FaUserTimes style={{ color: "#6366f1" }} /> Auto leave &
                overtime calculation
              </li>
              <li style={{ color: "#334155", borderColor: "#e2e8f0" }}>
                <FaChartBar style={{ color: "#6366f1" }} /> Monthly reports &
                analytics
              </li>
            </ul>

            <a href="#contact" className="btn btn-primary">
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttendanceDemo;
