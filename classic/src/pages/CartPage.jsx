import React from 'react';
import { useCart } from '../components/CartContex.jsx';  // Import useCart hook

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();  // Access cart state and actions

  const handleSendToWhatsApp = () => {
    const productDetails = cartItems.map(item => ({
      name: item.name,
      price: item.price,
    }));
    const message = `Products: ${JSON.stringify(productDetails)}`;
    const whatsappURL = `https://wa.me/+27606080227?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleSendToWhatsApp}>Send to WhatsApp</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
