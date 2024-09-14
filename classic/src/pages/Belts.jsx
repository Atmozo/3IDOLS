import React from 'react';
import ProductList from '../components/ProductList';
import { productsData } from '../data/Data';

const Belts = () => {
  const beltsProducts = productsData.belts;

  return (
    <div className="belts-page">
      <h2>Belts Collection</h2>
      <ProductList products={beltsProducts} />
    </div>
  );
};

export default Belts;
