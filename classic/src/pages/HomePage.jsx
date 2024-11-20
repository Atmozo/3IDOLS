import React, { Suspense, useEffect, useState } from 'react';

// Lazy-loaded components
const HeroSection = React.lazy(() => import('../components/HeroSection'));
const FeaturedProducts = React.lazy(() => import('../components/FeaturedProducts'));
const BlogSection = React.lazy(() => import('../components/BlogSection'));
const NewsletterSignup = React.lazy(() => import('../components/NewsletterSignup'));
const ReviewsSection = React.lazy(() => import('../components/ReviewsSection'));

// Lazy-loaded wrapper with animation
const LazyLoadWrapper = ({ children, fallback, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`.${className}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [className]);

  return (
    <div
      className={`${className} transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </div>
  );
};

// Homepage component
const Homepage = () => {
  return (
    <div>
      <LazyLoadWrapper className="lazy-hero" fallback={<div>Loading HeroSection...</div>}>
        <HeroSection />
      </LazyLoadWrapper>

      <LazyLoadWrapper className="lazy-featured" fallback={<div>Loading Featured Products...</div>}>
        <FeaturedProducts />
      </LazyLoadWrapper>

      <LazyLoadWrapper className="lazy-blog" fallback={<div>Loading Blog Section...</div>}>
        <BlogSection />
      </LazyLoadWrapper>

      <LazyLoadWrapper className="lazy-reviews" fallback={<div>Loading Review Section...</div>}>
        <ReviewsSection />
      </LazyLoadWrapper>

      <LazyLoadWrapper className="lazy-newsletter" fallback={<div>Loading Newsletter Signup...</div>}>
        <NewsletterSignup />
      </LazyLoadWrapper>
    </div>
  );
};

export default Homepage;
