// HeroCarousel.js
import React from 'react';
import Slider from 'react-slick';
import './heroCarousel.css';

function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        <div>
          <img src="/img/heroCarousel/campo4.jpg" alt="First slide" />
        </div>
        <div>
          <img src="/img/heroCarousel/campo2.jpg" alt="Second slide" />
        </div>
        <div>
          <img src="/img/heroCarousel/campo5.jpg" alt="Third slide" />
        </div>
      </Slider>
    </div>
  );
}

export default HeroCarousel;
