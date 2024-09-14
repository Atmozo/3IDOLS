import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/Data';


const summaries = {
  jeans: 'Our premium jeans offer the perfect blend of style, comfort, and durability. Made from high-quality denim, they feature a modern fit that flatters every body type. Whether dressing up or going casual, these jeans adapt effortlessly for any occasion.',
  belts: 'Our belts combine functionality and fashion, offering a sleek finish to any outfit. Crafted from high-quality leather, they withstand everyday wear and provide a comfortable fit. Ideal for casual and formal attire.',
  caps: 'Stylish and versatile, our caps are perfect for any season. Made from breathable fabrics, they provide comfort while adding a touch of personality to your look. Available in classic and trendy designs.',
  shorts: 'Our collection of shorts is designed for comfort and style. Whether lounging or hitting the beach, these shorts provide a modern fit, available in a range of colors and lengths for your perfect summer style.',
  jackets: 'Stay warm and stylish with our premium jackets. Crafted from durable materials, they offer both comfort and protection in any weather. Whether lightweight or insulated, these jackets are perfect for layering in style.',
  garments: 'Our range of garments combines everyday essentials with fashion-forward designs. From casual wear to special occasion pieces, these garments offer quality, comfort, and versatility to suit your unique style.',
  summerWear: 'Embrace the heat with our summer collection. Featuring lightweight and breathable fabrics, our summer wear keeps you comfortable and stylish for all your sunny adventures.'
};

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [text, setText] = useState('');
  const [isImageOnLeft, setIsImageOnLeft] = useState(true);

  const featuredCategories = [
    'jeans', 'belts', 'caps', 'shorts', 'jackets', 'garments', 'summerWear'
  ];

  const handleViewMore = (category) => {
    navigate(`/${category}`);
  };

  // Function to type the summary text with animation effect
  useEffect(() => {
    const category = featuredCategories[currentCategoryIndex];
    const fullText = summaries[category];
    let index = 0;

    const typeText = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    };

    setText(''); // Reset text for new category
    const interval = setInterval(typeText, 50); // Adjust typing speed to finish in 10 seconds

    return () => clearInterval(interval);
  }, [currentCategoryIndex]);

  // Function to change categories every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % featuredCategories.length);
      setIsImageOnLeft((prev) => !prev); // Alternate image position
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle category selection when clicked
  const handleCategoryClick = (index) => {
    setCurrentCategoryIndex(index);
    setIsImageOnLeft(index % 2 === 0);
  };

  return (
    <Container
      className="featured-products"
      style={{
       background : 'black',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '40px 0',
      }}
    >
      {/* Category navigation */}
      <Row className="category-navigation mb-3">
        {featuredCategories.map((category, index) => (
          <Col key={index} className="category-item">
            <Button
              variant={currentCategoryIndex === index ? "primary" : "outline-primary"}
              onClick={() => handleCategoryClick(index)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Featured product display */}
      <Row className="align-items-center mb-4">
        {featuredCategories.map((category, index) => {
          const isCurrent = currentCategoryIndex === index;
          return (
            isCurrent && (
              <Col key={index} xs={12} className={`featured-product ${isImageOnLeft ? 'left' : 'right'}`}>
                <div className="product-content d-flex">
                  <img
                    src={productsData[category][0].image}
                    alt={category}
                    className="img-fluid"
                    style={{ maxWidth: '200px', marginRight: isImageOnLeft ? '17px' : '0', marginLeft: isImageOnLeft ? '0' : '17px' }}
                  />
                  <div className="product-summary">
                    <p>{text}</p>
                    <Button
                      variant="primary"
                      onClick={() => handleViewMore(category)}
                      className="mt-2"
                    >
                      View More
                    </Button>
                  </div>
                </div>
              </Col>
            )
          );
        })}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
