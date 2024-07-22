// src/AboutMe.js
import React, { useState, useEffect } from 'react';
import './AboutMe.css'; // Import the CSS file for styling

const AboutMe = () => {
  const textBlocks = [
    "Hi! My Name is Luan.",
    "I am a Junior RPA and .NET developer",
    "I am also a 400m and 400m hurdles athlete.",
    "Take a tour with me :)"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textBlocks.length);
        setFade(true);
      }, 500); // Match this to the fade-out duration
    }, 3500); // Change text every 3.5 seconds

    return () => clearInterval(intervalId);
  }, [textBlocks.length]);

  return (
    <div className="about-me-container">
      <h2 className="about-me-title">About Me</h2>
      <p className={`about-me-text ${fade ? 'fade-in' : 'fade-out'}`}>
        {textBlocks[currentTextIndex]}
      </p>
    </div>
  );
};

export default AboutMe;
