import React from "react";
import { Carousel as CarouselResponsive } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../styles/Carousel.css";
import accueil1 from "./accueil1.jpg";
import accueil2 from "./accueil1.jpg";
import accueil3 from "./accueil1.jpg";

const Carousel = () => {
  return (
    <CarouselResponsive>
      <div>
        <img src={accueil1} alt="Slide 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={accueil2} alt="Slide 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={accueil3} alt="Slide 3" />
        <p className="legend">Legend 3</p>
      </div>
      {/* <h1 className="carousel-title">Choco Pap</h1>
        <a href="/boutique" className="boutique-button">
          Voir la boutique
        </a> */}
    </CarouselResponsive>
  );
};
export default Carousel;
