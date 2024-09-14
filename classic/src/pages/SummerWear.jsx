import React from 'react';
import ProductList from '../components/ProductList';
import { productsData } from '../data/Data';

const SummerWear = () => {
  const summerWearProducts = productsData.summerWear;

  return (
    <div className="summerwear-page">
      <h2>Summer Wear Collection</h2>
      <ProductList products={summerWearProducts} />
    </div>
  );
};

export default SummerWear;
