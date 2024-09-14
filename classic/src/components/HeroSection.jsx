import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './HeroSection.css';

// Importing images
import image1 from '../assets/images/jeans/dd.jpg';
import image2 from '../assets/images/jeans/Denim br r.jpg';
import image3 from '../assets/images/jeans/supr denim.jpg';
import image4 from '../assets/images/jeans/offwhite Denim.jpg';
import image5 from '../assets/images/jeans/hatipere track.jpg';

import shoes1 from '../assets/images/shoes/j4.jpg';
import shoes2 from '../assets/images/shoes/jv8.jpg';
import shoes3 from '../assets/images/shoes/jorny d.jpg';
import shoes4 from '../assets/images/shoes/boots.jpg';
import shoes5 from '../assets/images/shoes/v8 army.jpg';

import belts1 from '../assets/images/belts/black.jpg';
import belts2 from '../assets/images/belts/gold.jpg';
import belts3 from '../assets/images/belts/silver.jpg';
import belts4 from '../assets/images/belts/purple.jpg';
import belts5 from '../assets/images/belts/LVF.jpg';

import teez1 from '../assets/images/latest/IMG-20240529-WA0007.jpg';
import teez2 from '../assets/images/latest/IMG-20240529-WA0012.jpg';
import teez3 from '../assets/images/garments/teez2.jpg';
import teez4 from '../assets/images/garments/teez1.jpg';
import teez5 from '../assets/images/garments/IMG-20240611-WA0056.jpg';

import garments1 from '../assets/images/latest/IMG-20240529-WA0009.jpg';
import garments2 from '../assets/images/latest/IMG-20240529-WA0011.jpg';
import garments3 from '../assets/images/latest/IMG-20240529-WA0018.jpg';
import garments4 from '../assets/images/latest/IMG-20240529-WA0023.jpg';
import garments5 from '../assets/images/latest/IMG-20240529-WA0012.jpg';

import jackets1 from '../assets/images/jackets/puffs.jpg';
import jackets2 from '../assets/images/jackets/com.jpg';
import jackets3 from '../assets/images/jackets/trap.jpg';
import jackets4 from '../assets/images/jackets/trapnh.jpg';
import jackets5 from '../assets/images/jackets/denim.jpg';

// import latest1 from '../assets/images/latest1.jpg';
// import latest2 from '../assets/images/latest2.jpg';
// import latest3 from '../assets/images/latest3.jpg';
// import latest4 from '../assets/images/latest4.jpg';
// import latest5 from '../assets/images/latest5.jpg';

const categories = [
  {
    
    images: [image1, image2, image3, image4, image5],
  },
  {
    
    images: [shoes1, shoes2, shoes3, shoes4, shoes5],
  },
  {
    
    images: [belts1, belts2, belts3, belts4, belts5],
  },
  {
    
    images: [teez1, teez2, teez3, teez4, teez5],
  },
  {
    
    images: [garments1, garments2, garments3, garments4, garments5],
  },
  {
    
    images: [jackets1, jackets2, jackets3, jackets4, jackets5],
  },
  // {
  //   title: "Latest",
  //   description: "Discover the latest trends in our store.",
  //   images: [latest1, latest2, latest3, latest4, latest5],
  // }
];

const HeroSection = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 10000); // Change category every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const { title, description, images } = categories[currentCategoryIndex];

  return (
    <div className="hero-container">
      <h1>Welcome to 3IDOLS (VGF) DRIPSTORE</h1>
      <p>Discover the best products here. Look Good, Feel Good. It's our duty to dress you.</p>
      <Button variant="primary" className="cta-btn">SHOP NOW</Button>
      

      <div className="category-slide">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="category-images">
          {images.map((image, i) => (
            <img key={i} src={image} alt={`${title} ${i + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
