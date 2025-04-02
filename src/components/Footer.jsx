import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info-section">
        <h3>How it works</h3>
        <p>
          Each transistor represents a bit (0 or 1). When a transistor is ON, it
          represents 1, and when OFF, it represents 0.
        </p>
        <p>
          The binary number is read from left to right, with each position
          representing a power of 2.
        </p>
        <p>Add more transistors to represent larger numbers!</p>
      </div>
      <div className="footer-glow"></div>
    </footer>
  );
};

export default Footer;
