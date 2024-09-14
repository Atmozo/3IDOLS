import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="shopping-cart">
      <h3>Your Shopping Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ShoppingCart;
