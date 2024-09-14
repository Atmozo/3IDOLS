import React from 'react';
import ProductList from '../components/ProductList';
import { productsData } from '../data/Data';

const Jeans = () => {
  const jeansProducts = productsData.jeans;

  return (
    <div className="jeans-page">
      <h2>Jeans Collection</h2>
      <ProductList products={jeansProducts} />
    </div>
  );
};

export default Jeans;
