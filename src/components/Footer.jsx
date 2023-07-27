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
        <img
          src="https://www.media.forma-stock.com/wp-content/uploads/2023/07/facebook.png"
          alt="facebook"
        />
        <img
          src="https://www.media.forma-stock.com/wp-content/uploads/2023/07/instagram.png"
          alt="instagram"
        />
        <img
          src="https://www.media.forma-stock.com/wp-content/uploads/2023/07/twitter.png"
          alt="twitter"
        />
      </div>
    </footer>
  );
};

export default Footer;
