import React from 'react';
import './Loading.css';  // Custom CSS for animations

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-animation">
        {/* Option 1: Emoji */}
        <div className="emoji">😊</div>

        {/* Option 2: Circles */}
        <div className="circle-container">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </div>
      </div>

      <div className="loading-message">
        Loading
        <span className="dots">
          <span>.</span><span>.</span><span>.</span>
        </span>
      </div>
    </div>
  );
};

export default Loading;
