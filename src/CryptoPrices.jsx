import React, { useState, useEffect } from 'react';
import './CryptoPrice.css'

const CryptoPrices = () => {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        setPrices(data.bpi);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="crypto-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="crypto-card">
            <h2>Bitcoin (USD)</h2>
            <p>{prices?.USD?.rate}</p>
          </div>
          <div className="crypto-card">
            <h2>Bitcoin (GBP)</h2>
            <p>{prices?.GBP?.rate}</p>
          </div>
          <div className="crypto-card">
            <h2>Bitcoin (Euro)</h2>
            <p>{prices?.EUR?.rate}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CryptoPrices;
