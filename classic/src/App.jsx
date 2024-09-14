import React, { Suspense, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContex.jsx';
import Loading from '../src/Loading';

// Lazy load the components
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const CartPage = React.lazy(() => import('./pages/CartPage')); // Add CartPage

// Lazy load the pages
const Homepage = React.lazy(() => import('./pages/Homepage'));
const Jeans = React.lazy(() => import('./pages/Jeans'));
const Belts = React.lazy(() => import('./pages/Belts'));
const Caps = React.lazy(() => import('./pages/Caps'));
const Garments = React.lazy(() => import('./pages/Garments'));
const Jackets = React.lazy(() => import('./pages/Jackets'));
const Latest = React.lazy(() => import('./pages/Latest'));
const SummerWear = React.lazy(() => import('./pages/SummerWear'));

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart logic
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Remove from cart logic
  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== product.id)
    );
  };

  return (
    <CartProvider>
    <Router>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Header cartItems={cartItems} /> {/* Pass cartItems to Header */}
          <Routes>
            <Route
              path="/"
              element={<Homepage onAddToCart={handleAddToCart} />} // Pass handleAddToCart
            />
            <Route path="/jeans" element={<Jeans onAddToCart={handleAddToCart} />} />
            <Route path="/belts" element={<Belts onAddToCart={handleAddToCart} />} />
            <Route path="/caps" element={<Caps onAddToCart={handleAddToCart} />} />
            <Route path="/garments" element={<Garments onAddToCart={handleAddToCart} />} />
            <Route path="/jackets" element={<Jackets onAddToCart={handleAddToCart} />} />
            <Route path="/latest" element={<Latest onAddToCart={handleAddToCart} />} />
            <Route path="/summerwear" element={<SummerWear onAddToCart={handleAddToCart} />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  onRemoveFromCart={handleRemoveFromCart}
                />
              }
            />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
