import React from 'react';
import './aboutUs.css'; // Ensure the CSS file is correctly linked

function AboutUs() {
  return (
    <div className="about-us" id='about'>
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Founded by data scientists from ITBA—Juan Ignacio Scorza, Justo Soleno, and Nicolas Rodriguez Da Cruz—
          our company boasts over 10 years of experience in agro-related, data, and AI consulting. With expertise
          in deploying patented algorithms and advanced neural networks, we provide state-of-the-art solutions
          that enhance decision-making and efficiency for agricultural operations globally.
        </p>
        <p>
          We specialize in integrating cutting-edge technology with traditional farming practices to revolutionize
          productivity. Our tools and services include advanced agro machinery and seamless integration processes
          that help field owners maximize yield with minimal environmental impact. We work with hundreds of field
          owners globally, bringing cutting-edge technological insights to agriculture.
        </p>
        
      </div>
      <div className="about-us-image">
        <img src="/img/aboutUs/aboutUs.png" alt="About Us" />
      </div>
    </div>
  );
}

export default AboutUs;
