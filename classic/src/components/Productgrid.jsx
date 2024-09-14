import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useHistory } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductGrid = ({ products, category }) => {
  const history = useHistory();
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 20));

  const loadMore = () => {
    setVisibleProducts(prev => [
      ...prev,
      ...products.slice(prev.length, prev.length + 20)
    ]);
  };

  const handleImageClick = (productId) => {
    history.push(`/product/${productId}`);
  };

  return (
    <div>
      <div className="product-grid">
        {visibleProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleImageClick(product.id)}
          />
        ))}
      </div>
      {visibleProducts.length < products.length && (
        <button className="view-more" onClick={loadMore}>
          View More
        </button>
      )}
    </div>
  );
};

export default ProductGrid;
