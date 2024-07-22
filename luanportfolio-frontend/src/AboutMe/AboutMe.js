// src/AboutMe.js
import React, { useState, useEffect } from 'react';
import './AboutMe.css'; // Import the CSS file for styling

const AboutMe = () => {
  const textBlocks = [
    "Hi! My Name is Luan.",
    "I am a Junior RPA and .NET developer.",
    "I am also a 400m and 400m hurdles athlete.",
    "Follow me on LinkedIn, Github, or download my CV at the top right corner.",
    "Take a look around, stay for a while :)"
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
    }, 4000); // Change text every 3.5 seconds

    return () => clearInterval(intervalId);
  }, [textBlocks.length]);

  return (
    <div className="about-me-container">
      <h2 className="about-me-title">Introduction</h2>
      <hr></hr>
      <p className={`about-me-text ${fade ? 'fade-in' : 'fade-out'}`}>
        {textBlocks[currentTextIndex]}
      </p>
    </div>
  );
};

export default AboutMe;
