import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from './CartContex.jsx';
  import'./Header.css';
  import logo from '../assets/images/images.jpg';

const Header = () => {
  const { cartItems } = useCart();  // Access cart state

  return (
    <Navbar expand="lg" className="header-navbar">
       <Navbar.Brand href="/" className="d-flex align-items-center text-white font-bold">
        <img
          src={logo}
          alt="3 IDOLS DRIP STORE Logo"
          className="header-logo"
        />
        3 IDOLS DRIP STORE 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
          {/* <Nav.Link as={Link} to="/shop" className="text-white">Shop</Nav.Link> */}
          <Nav.Link as={Link} to="/AboutUs" className="text-white">AboutUs</Nav.Link>
          <Nav.Link as={Link} to="/cart" className="text-white">
            🛒
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>  // Show item count
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
