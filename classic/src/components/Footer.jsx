import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
       
      <a>CONTACT US @</a>
      </div>

      <div className="social-media">
      
        <a href="https://x.com/mozorand"><FaFacebook /></a>
        <a href="https://x.com/mozorand"><FaTwitter /></a>
        <a href="https://wa.me/27606080227"><FaInstagram /></a>
        <a href="https://wa.me/27606080227"><FaWhatsapp /></a>
      
      </div>
      <p>&copy; 2024 3IDOLS (VGF). All rights reserved. </p>
      <p>contact me for your websites <details><a href="https://github.com/Atmozo"><FaGithub size={30} /><a href="https://wa.me/27606080227"><FaWhatsapp  size={30}/></a></a><a href="https://www.linkedin.com/in/ashely-mozorand-3858622b9/"><FaLinkedin size={30} /></a><a href="https://x.com/mozorand"><FaTwitter size={30} /></a></details></p>
      
      
    </footer>
  );
};

export default Footer;
