import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact Us</a>
      </div>
      <div className="social-media">
        <a href=""><FaFacebook /></a>
        <a href="#twitter"><FaTwitter /></a>
        <a href="#instagram"><FaInstagram /></a>
        <a href="#instagram"><FaWhatsapp /></a>
      
      </div>
      <p>&copy; 2024 3IDOLS (VGF). All rights reserved. </p>
      <p>contact me for your websites <details><a href="#instagram"><FaGithub /><a href="#instagram"><FaWhatsapp /></a></a><a href="#instagram"><FaLinkedin /></a><a href="#twitter"><FaTwitter /></a></details> GROW YOUR BUSINESS BY AUTOMATING SOME SERVICES</p>
      
      
    </footer>
  );
};

export default Footer;
