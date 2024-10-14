import React, { Suspense, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContex.jsx';
import Loading from '../src/Loading.jsx';


const Header = React.lazy(() => import('./components/Header.jsx'));
const Footer = React.lazy(() => import('./components/Footer.jsx'));
const CartPage = React.lazy(() => import('./pages/CartPage.jsx')); 


const Homepage = React.lazy(() => import('./pages/HomePage.jsx'));
const Jeans = React.lazy(() => import('./pages/Jeans.jsx'));
const Belts = React.lazy(() => import('./pages/Belts.jsx'));
const Caps = React.lazy(() => import('./pages/Caps.jsx'));
const Garments = React.lazy(() => import('./pages/Garments.jsx'));
const Jackets = React.lazy(() => import('./pages/Jackets.jsx'));
const Latest = React.lazy(() => import('./pages/Latest.jsx'));
const SummerWear = React.lazy(() => import('./pages/SummerWear.jsx'));

function App() {
  const [cartItems, setCartItems] = useState([]);


  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  
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
