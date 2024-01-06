// components/ProductItem.js
import React from 'react';

const ProductItem = ({ product, onItemSelect, onDragStart }) => {
  return (
    <li
      className="product-item"
      onClick={() => onItemSelect(product)}
      draggable
      onDragStart={onDragStart}
    >
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h4>{product.title}</h4>
        <p>{product.description.substring(0, 50)}...</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Price: ${product.price}</p>
          <p style={{ marginLeft: 'auto' }}>Rating: {product.rating.rate}</p>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
