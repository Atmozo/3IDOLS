import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useCart } from './CartContex.jsx';  // Import useCart hook
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart } = useCart();  // Access cart actions
  const [addedToCart, setAddedToCart] = useState(false);

  const handleButtonClick = () => {
    if (addedToCart) {
      removeFromCart(product.id);  // Remove product if already added
    } else {
      addToCart(product);  // Add product to cart
    }
    setAddedToCart(!addedToCart);  // Toggle button state
  };

  return (
    <div className="product-card">
      <LazyLoadImage
        src={product.image}
        alt={product.name}
        className="product-image"
        effect="blur"
      />
      <div className="product-details">
        <h4>{product.name}</h4>
        <p className="product-price">{product.price}</p>
        <button
          className={`btn ${addedToCart ? 'btn-danger' : 'btn-primary'}`}
          onClick={handleButtonClick}
        >
          {addedToCart ? 'Remove' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
