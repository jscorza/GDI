import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Quotation from './components/Quotation/Quotation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services /> 
      <AboutUs/>
      <Quotation /> 
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;