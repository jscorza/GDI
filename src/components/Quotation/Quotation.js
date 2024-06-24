import React, { useState } from 'react';
import './quotation.css';

const workerRates = {
  junior: 50,
  mid: 150,
  senior: 500
};

function Quotation() {
  const [years, setYears] = useState(1);
  const [workers, setWorkers] = useState({ junior: 1, mid: 1, senior: 1 });
  const [serviceType, setServiceType] = useState('Essential Analytics Package');

  const calculateQuotation = () => {
    let baseMultiplier;

    switch (serviceType) {
      case 'Premium Consulting Pack':
        baseMultiplier = 2.0;
        break;
      case 'Advanced Analytics Suite':
        baseMultiplier = 1.5;
        break;
      case 'Essential Analytics Package':
      default:
        baseMultiplier = 1.0;
        break;
    }

    const totalCost = years * (workers.junior * workerRates.junior + workers.mid * workerRates.mid + workers.senior * workerRates.senior) * baseMultiplier;
    const range = [totalCost * 0.8, totalCost];
    return range;
  };

  const quotation = calculateQuotation();

  return (
    <div className="quotation-section" id='quotation'>
      <div className="quotation-content">
        <div className="quotation-form">
          <h3 className="quotation-title">Service Quotation</h3>
          <label  >
            Years of Project:
            <input type="number" value={years} onChange={(e) => setYears(e.target.value)} min="1" />
          </label>
          <label>
            Junior Workers:
            <input type="number" value={workers.junior} onChange={(e) => setWorkers({ ...workers, junior: e.target.value })} min="0" />
          </label>
          <label>
            Mid-level Workers:
            <input type="number" value={workers.mid} onChange={(e) => setWorkers({ ...workers, mid: e.target.value })} min="0" />
          </label>
          <label>
            Senior Workers:
            <input type="number" value={workers.senior} onChange={(e) => setWorkers({ ...workers, senior: e.target.value })} min="0" />
          </label>
          <label>
            Service Type:
            <select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
              <option value="Essential Analytics Package">Essential Analytics Package</option>
              <option value="Advanced Analytics Suite">Advanced Analytics Suite</option>
              <option value="Premium Consulting Pack">Premium Consulting Pack</option>
            </select>
          </label>
          <div className="quotation-result">
            <p>Estimated Price Range: ${quotation[0].toFixed(2)} - ${quotation[1].toFixed(2)}</p>
          </div>
        </div>
        <div className="quotation-image">
          <img src={'/img/services/price.png'} alt="Price Illustration" />
        </div>
      </div>
    </div>
  );
}

export default Quotation;
