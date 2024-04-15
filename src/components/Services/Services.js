import React, { useState } from 'react';
import './services.css';

function ServiceSection({ title, shortDescription, fullDescription, serviceList, imageSrcs }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="service-section">
      <div className="service-text-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{shortDescription}</p>
        <button className="see-more-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'See Less' : 'See More'}
        </button>
        {showMore && (
          <>
            <p className="service-full-description">{fullDescription}</p>
            <ul className="service-list">
              {serviceList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className={`service-images ${showMore ? 'show-more' : ''}`}>
        {imageSrcs.map((src, index) => (
          <img key={index} src={src} alt={`Service ${index + 1}`} className="service-image" />
        ))}
      </div>
    </div>
  );
}

function Services() {
  const exampleImageSrcs = ['/img/services/excel.png','/img/services/powerbi.png']; // Replace with actual image paths

  return (
    <div className="services">
      <h2>Our Services</h2>
      <ServiceSection
        title="Essential Analytics Package"
        shortDescription="Gain actionable insights with custom dashboards for soil health and crop yields."
        fullDescription="Start making data-driven decisions with comprehensive analytics on soil nutrients, seasonal yields, and resource management. Our dashboards help you visualize and understand the data that matters most to your farm's performance."
        serviceList={[
          "Custom Agricultural Dashboards",
          "Soil Health Reports",
          "Seasonal Yield Analysis",
          "Resource Allocation Insights"
        ]}
        imageSrcs={exampleImageSrcs} // Replace with actual image paths
      />
      {/* Repeat ServiceSection for other services as needed */}
    </div>
  );
}

export default Services;
