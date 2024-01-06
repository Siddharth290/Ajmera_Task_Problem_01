// components/Rating.js
import React from 'react';

const Rating = ({ rate }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <span style={{ marginRight: '5px', fontSize: '18px' }}>{rate}</span>
      <span style={{ color: '#FFD700', fontSize: '24px' }}>★</span>
    </div>
  );
};

export default Rating;
