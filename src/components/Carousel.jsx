import React from "react";
import "../styles/Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src="accueil1.jpg" alt="Slide 1" />
      </div>
      <div className="carousel-slide">
        <img src="accueil2.jpg" alt="Slide 2" />
      </div>
      <div className="carousel-slide">
        <img src="accueil3.jpg" alt="Slide 3" />
      </div>
      <h1 className="carousel-title">Choco Pap</h1>
      <a href="/boutique" className="carousel-button">
        Voir la boutique
      </a>
    </div>
  );
};

export default Carousel;
