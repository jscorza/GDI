/* import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/img/logos/option1/GDI_logo_128x128-removebg-preview.png" alt="GDI Logo" className="navbar-logo" />
        <h1>Green Data Insights</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
 */

import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <img src="/img/logos/option1/GDI_logo_128x128-removebg-preview.png" alt="GDI Logo" className="navbar-logo" />
        <h1>Green Data Insights</h1>
        <button className="hamburger" aria-label="toggle navigation">
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
      </div>
      <ul className={`nav-links ${isNavExpanded ? "expanded" : ""}`}>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
