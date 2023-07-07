import React from "react";
import "../styles/Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <h1 className="carousel-title">Choco Pap</h1>
      <div className="carousel-slides">
        <div className="slide">
          <img src="accueil1.jpg" alt="Slide 1" />
        </div>
        <div className="slide">
          <img src="accueil2.jpg" alt="Slide 2" />
        </div>
        <div className="slide">
          <img src="accueil3.jpg" alt="Slide 3" />
        </div>
      </div>
      <a href="/boutique" className="bouton-boutique">
        Voir la boutique
      </a>
    </div>
  );
};

export default Carousel;
