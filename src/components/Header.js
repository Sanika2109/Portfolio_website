// src/components/Header.js
import React, { useEffect } from 'react';
import './Header.css';

function Header() {
  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  // Function to create random sparkles
  const createSparkles = () => {
    const sparkleContainer = document.querySelector('.sparkle');
    const numberOfSparkles = 50; // Number of sparkles to create

    for (let i = 0; i < numberOfSparkles; i++) {
      const sparkle = document.createElement('span');
      sparkle.style.top = `${Math.random() * 100}vh`; // Random position within the viewport height
      sparkle.style.left = `${Math.random() * 100}vw`; // Random position within the viewport width
      sparkle.style.animationDelay = `${Math.random() * 2}s`; // Random delay for sparkles
      sparkleContainer.appendChild(sparkle);
    }
  };

  useEffect(() => {
    createSparkles();
  }, []);

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Sanika Wagle</h1>
        <h2>Engineer</h2>
        <button className="resume-button" onClick={handleResumeClick}>
          View Resume
        </button>
      </div>
      <div className="sparkle"></div> {/* Sparkle container */}
    </header>
  );
}

export default Header;
