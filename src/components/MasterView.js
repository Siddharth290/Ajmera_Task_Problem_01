// MasterView.js
import React from 'react';
import './MasterView.css'; // Ensure correct path
import ProductItem from './ProductItem';

const MasterView = ({ products, onItemSelect }) => {
  const handleDragStart = (event, product) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(product));
  };

  return (
    <div style={{ maxHeight: '800px', overflowY: 'scroll' }}>
      <h2>Product List</h2>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        {products.map(product => (
          <ProductItem
            key={product.id}
            product={product}
            onItemSelect={onItemSelect}
            onDragStart={event => handleDragStart(event, product)}
          />
        ))}
      </ul>
    </div>
  );
};

export default MasterView;
