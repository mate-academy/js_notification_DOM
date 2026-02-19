import React, { useEffect, useState } from 'react';
import '../App.css';

const WelcomeScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Call onComplete after transition finishes (e.g., 0.5s)
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="welcome-content">
        <div className="welcome-image-container">
           <img 
             src="https://images.unsplash.com/photo-1499750310159-5b5f0969206b?auto=format&fit=crop&q=80&w=800" 
             alt="Welcome" 
             className="welcome-image" 
           />
        </div>
        <h1 className="welcome-text">Ласкаво просимо</h1>
        <div className="loader-line"></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
