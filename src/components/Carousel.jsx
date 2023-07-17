import React from "react";
import Slider from "react-slick";

import "../styles/Carousel.css";

import accueil1 from "../images/accueil1.jpg";
import accueil2 from "../images/accueil2.jpg";
import accueil3 from "../images/accueil3.jpg";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {/* Slide 1 */}
      <div className="carousel">
        <img src={accueil1} alt="Slide 1" />
        <div className="contentSlider">
          <h1 className="carousel-title">Choco Pap</h1>
          <a href="/boutique" className="boutique-button">
            Voir la boutique
          </a>
        </div>
      </div>
      {/* Slide 2 */}
      <div className="carousel">
        <img src={accueil2} alt="Slide 2" />
        <div className="contentSlider">
          <h1 className="carousel-title">Choco Pap</h1>
          <a href="/boutique" className="boutique-button">
            Voir la boutique
          </a>
        </div>
      </div>
      {/* Slide 3 */}
      <div className="carousel">
        <img src={accueil3} alt="Slide 3" />
        <div className="contentSlider">
          <h1 className="carousel-title">Choco Pap</h1>
          <a href="/boutique" className="boutique-button">
            Voir la boutique
          </a>
        </div>
      </div>
    </Slider>
  );
};
export default Carousel;
