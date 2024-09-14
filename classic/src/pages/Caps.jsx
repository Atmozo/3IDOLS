import React from 'react';
import ProductList from '../components/ProductList';
import { productsData } from '../data/Data';

const Caps = () => {
  const capsProducts = productsData.caps;

  return (
    <div className="caps-page">
      <h2>Caps Collection</h2>
      <ProductList products={capsProducts} />
    </div>
  );
};

export default Caps;
