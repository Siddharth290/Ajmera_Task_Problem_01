// App.js
import { Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import DetailView from './components/DetailView';
import MasterView from './components/MasterView';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products/');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setSelectedProduct(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const handleItemSelect = (product) => {
    fetchProductDetails(product.id);
  };

// App.js
const handleDrop = (droppedProduct) => {
  setSelectedProduct(droppedProduct);
};


  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} id="master-view">
            <MasterView products={products} onItemSelect={handleItemSelect} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} id="detail-view">
            <DetailView selectedProduct={selectedProduct} onDrop={handleDrop} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
