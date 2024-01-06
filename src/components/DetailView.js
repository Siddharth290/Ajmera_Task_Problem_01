// components/DetailView.js
import React from 'react';
import Rating from './Rating';

const DetailView = ({ selectedProduct, onDrop }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const productData = event.dataTransfer.getData('text/plain');
    const product = JSON.parse(productData);
    onDrop(product);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver}>
      <h2>{selectedProduct ? selectedProduct.title : 'Product Details'}</h2>
      {selectedProduct ? (
        <div>
          <h3>{selectedProduct.title}</h3>
          <p>{selectedProduct.description}</p>
          <Rating rate={selectedProduct.rating.rate} />
          <p>Price: ${selectedProduct.price}</p>
          <p>Category: {selectedProduct.category}</p>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            style={{
              maxWidth: '20%', // Adjust the percentage based on your design
              height: 'auto',
              borderRadius: '8px',
              marginTop: '15px',
            }}
          />
        </div>
      ) : (
        <p>Select an item to display.</p>
      )}
    </div>
  );
};

export default DetailView;
