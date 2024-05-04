import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Contact Us: GreenDataInsights@SuperExample.com<br />
         Phone: 123-456-7890</p>
      <p className="footer-credit">
        Made by <a href="https://github.com/jscorza/gdi" target="_blank" rel="noopener noreferrer">@jscorza</a>
      </p>
    </footer>
  );
}

export default Footer;