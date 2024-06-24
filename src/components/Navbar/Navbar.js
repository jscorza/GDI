import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => scrollToSection('#top')}>
        <img src="/img/logos/option1/GDI_logo_128x128-removebg-preview.png" alt="GDI Logo" className="navbar-logo" />
        <h1>Green Data Insights</h1>
      </div>
      <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)} aria-label="toggle navigation">
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>
      <ul className={`nav-links ${isNavExpanded ? "expanded" : ""}`}>
        <li onClick={() => scrollToSection('#services')}>Services</li>
        <li onClick={() => scrollToSection('#about')}>About Us</li>
        <li onClick={() => scrollToSection('#quotation')}>Quotation</li>
        <li onClick={() => scrollToSection('#contact')}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
