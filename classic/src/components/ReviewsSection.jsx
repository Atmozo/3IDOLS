import React, { useState, useEffect } from 'react';

import one from "../assets/images/4er.png";
import two from "../assets/images/downloadg.png";
import four from "../assets/images/downloadm.png";
import three from "../assets/images/download (1).png";
import five from "../assets/images/downloadm2.png";
import six from "../assets/images/front.png";
import seven from "../assets/images/4er.png";
import eight from "../assets/images/download (2).png";


const reviews = [
  { id: 1, name: ' Spencer', rating: 5, review: 'Excellent fit, great quality!', image: one },
  { id: 2, name: 'Noel', rating: 4, review: 'Comfortable and stylish!', image: two },
  { id: 3, name: 'M.A', rating: 5, review: 'Perfect for every occasion.', image: three },
  { id: 4, name: 'Chris ', rating: 4, review: 'Good quality, but a bit tight.', image: four },
  { id: 5, name: 'Mozo', rating: 5, review: 'Amazing design and fit!', image: five },
  { id: 6, name: 'Ice', rating: 3, review: 'Could be more comfortable.', image: three },
  { id: 7, name: 'Michael ', rating: 4, review: 'Worth every penny!', image: six },
  { id: 8, name: ' Roms', rating: 5, review: 'Simply the best.', image: seven },
  { id: 9, name: ' Nancy', rating: 5, review: 'Top-notch craftsmanship.', image: eight },
  { id: 10, name: 'R.ooo', rating: 4, review: 'Would buy again.', image: two },
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % reviews.length);
    }, 20000); // Move every 20 seconds

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 4);

  return (
    <div className="reviews-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-grid">
        {visibleReviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} className="img-fluid1" />
            <h3>{review.name}</h3>
            <p>Rating: {'★'.repeat(review.rating)}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
