import React from 'react';
import ProductList from '../components/ProductList';
import { productsData } from '../data/Data';

const Garments = () => {
  const garmentsProducts = productsData.garments;

  return (
    <div className="garments-page">
      <h2>Garments Collection</h2>
      <ProductList products={garmentsProducts} />
    </div>
  );
};

export default Garments;
