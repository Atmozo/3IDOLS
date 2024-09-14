import React from 'react';
import ProductList from '../components/ProductList';
import { productsData } from '../data/Data';

const Latest = () => {
  const latestProducts = [
    ...productsData.jeans,
    ...productsData.belts,
    ...productsData.caps,
    ...productsData.garments,
    ...productsData.jackets,
    ...productsData.shoes,
    ...productsData.summerWear,
  ];

  return (
    <div className="latest-page">
      <h2>Latest Arrivals</h2>
      <ProductList products={latestProducts} />
    </div>
  );
};

export default Latest;
