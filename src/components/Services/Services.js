import React, { useState } from 'react';
import './services.css';

function ServiceSection({ title, shortDescription, fullDescription, imageSrc }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="service-section">
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{shortDescription}</p>
      <div className="service-images">
        <img src={imageSrc} alt="Service" className="service-image" />
      </div>
      <button className="see-more-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'See Less' : 'See More'}
      </button>
      <div className={`service-full-description ${showMore ? 'open' : 'closed'}`}>
        {fullDescription}
      </div>
    </div>
  );
}

function Services() {
  const servicesData = [
    {
      title: "Essential Analytics Package",
      shortDescription: "Gain actionable insights with custom dashboards for soil health and crop yields.",
      fullDescription: "This package offers detailed analytics on soil composition, nutrient levels, and crop yield predictions based on historical data and predictive modeling, helping farmers optimize their outputs.",
      imageSrc: "/img/services/tier1GDI.png"
    },
    {
      title: "Advanced Analytics Suite",
      shortDescription: "Advanced predictive analytics for optimal planting and harvesting.",
      fullDescription: "Leverage deep learning algorithms and advanced predictive models to determine the best planting and harvesting times, improving yields and reducing costs.",
      imageSrc: "/img/services/tier2GDI.png"
    },
    {
      title: "Premium Consulting Pack",
      shortDescription: "Top Tier Personalized consulting for enterprise-level solutions.",
      fullDescription: "Get bespoke consulting services tailored to large-scale agricultural operations, including integration of IoT devices for precision farming and customized ERP solutions.",
      imageSrc: "/img/services/tier3GDI.png"
    }
  ];

  return (
    <div className="services" id='services'>
      <h2>Our Services</h2>
      {servicesData.map(service => (
        <ServiceSection key={service.title} {...service} />
      ))}
    </div>
  );
}

export default Services;
