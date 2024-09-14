import React from 'react';
import ProductList from '../components/ProductList';
import { productsData } from '../data/Data';

const Jackets = () => {
  const jacketsProducts = productsData.jackets;

  return (
    <div className="jackets-page">
      <h2>Jackets Collection</h2>
      <ProductList products={jacketsProducts} />
    </div>
  );
};

export default Jackets;
