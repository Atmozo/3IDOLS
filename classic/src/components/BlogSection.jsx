import React, { useState, useEffect } from 'react';
import one from "../assets/images/casual.png";
import two from "../assets/images/weather.png";
import four from "../assets/images/bodytype.png";
import three from "../assets/images/allwear.png";
import five from "../assets/images/colourcomb.png";
import six from "../assets/images/trends.png";
import seven from "../assets/images/watch.png";
import eight from "../assets/images/syle.png";
const blogTips = [
  {
    id: 1,
    title: 'Occasion: Casual to Formal',
    summary: 'Casual: Choose comfortable, relaxed pieces like jeans, t-shirts, or casual dresses. Formal: Opt for tailored suits or dresses in darker colors like black or navy for formal events.',
    image: one,
  },
  {
    id: 2,
    title: 'Weather-Appropriate Clothing',
    summary: 'Cold Weather: Layer with wool, fleece, or thermal fabrics. Hot Weather: Stick to light fabrics like cotton or linen. Rainy Weather: Waterproof jackets and boots are key.',
    image: two,
  },
  {
    id: 3,
    title: 'Combining Clothes for Every Season',
    summary: 'Layering is key for versatility. Start with base layers, add middle layers like sweaters, and finish with outerwear like jackets. Seasonal choices will keep you comfortable.',
    image: three,
  },
  {
    id: 4,
    title: 'Dressing for Your Body Type',
    summary: 'Hourglass: Emphasize the waist with fitted clothes. Pear: Draw attention to the upper body with bright tops. Apple: Focus on structured pieces to define your shape.',
    image: four,
  },
  {
    id: 5,
    title: 'Using Colors to Elevate Your Style',
    summary: 'Monochromatic: Wearing one color creates a sleek look. Complementary: Pair colors like blue and orange for contrast. Neutral Base: Build around neutral colors and add a pop of color.',
    image: five,
  },
  {
    id: 6,
    title: 'Fashion Styles and Trends',
    summary: 'Minimalist: Simple designs and neutral colors. Boho: Flowy fabrics and floral prints. Streetwear: Oversized hoodies and graphic tees. Vintage: Styles inspired by past decades.',
    image: six,
  },
  {
    id: 7,
    title: 'Accessories to Complete Your Look',
    summary: 'Bold accessories like watches, hats, scarves, and jewelry can elevate a simple outfit. Choose large accessories for balance or match metals like gold and silver for a polished look.',
    image: seven,
  },
  {
    id: 8,
    title: 'How to Combine Fashion Styles',
    summary: 'Mix streetwear with formal pieces or combine vintage items with modern outfits. Play with textures and colors to create unique looks that stand out.',
    image:eight ,
  },
];

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % blogTips.length);
    }, 40000); // Change every40 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleTips = () => {
    const tips = [];
    for (let i = 0; i < 3; i++) {
      tips.push(blogTips[(currentIndex + i) % blogTips.length]);
    }
    return tips;
  };

  return (
    <div className="blog-section">
      <h2> Tips From Our Blog</h2>
      <div className="blog-grid">
        {getVisibleTips().map((tip) => (
          <div key={tip.id} className="blog-tip">
            <img src={tip.image} alt={tip.title} className=" large-img1" />
            <div className="tip-content">
              <h3>{tip.title}</h3>
              <p>{tip.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
