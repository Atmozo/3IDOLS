import React, { Suspense } from 'react';

const HeroSection = React.lazy(() => import('../components/HeroSection'));
const FeaturedProducts = React.lazy(() => import('../components/FeaturedProducts'));
const BlogSection = React.lazy(() => import('../components/BlogSection'));
const NewsletterSignup = React.lazy(() => import('../components/NewsletterSignup'));
const ReviewsSection  = React.lazy(() => import('../components/ReviewsSection'));

const Homepage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading HeroSection...</div>}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div>Loading Featured Products...</div>}>
        <FeaturedProducts />
      </Suspense>

      <Suspense fallback={<div>Loading Blog Section...</div>}>
        <BlogSection />
      </Suspense>

      <Suspense fallback={<div>Loading Review Section...</div>}>
        <ReviewsSection />
      </Suspense>

      <Suspense fallback={<div>Loading Newsletter Signup...</div>}>
      
        <NewsletterSignup />
      </Suspense>
    </div>
  );
};

export default Homepage;
