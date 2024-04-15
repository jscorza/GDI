// Inside your Hero component file
import React from 'react';
import HeroCarousel from '../HeroCarousel/HeroCarousel'; // adjust the import path as necessary

function Hero() {
  return (
    <div className="hero">
      <HeroCarousel />
      <h2>Welcome to Our Data & AI Consulting Firm</h2>
      <p>Specializing in the Agricultural Sector</p>
    </div>
  );
}

export default Hero;