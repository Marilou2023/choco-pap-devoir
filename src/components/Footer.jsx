import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h1 className="column-title">Choco Pap</h1>
        <p className="column-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
          dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="column">
        <h1 className="column-title">Contact</h1>
        <p className="column-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
          dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
      <div className="column">
        <img src="facebook.png" alt="Facebook" className="social-icon" />
        <img src="instagram.png" alt="Instagram" className="social-icon" />
        <img src="twitter.png" alt="Twitter" className="social-icon" />
      </div>
    </footer>
  );
};

export default Footer;
