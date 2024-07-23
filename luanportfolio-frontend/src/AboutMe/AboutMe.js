// src/AboutMe.js
import React, { useState, useEffect } from 'react';
import './AboutMe.css'; // Import the CSS file for styling
import profileImage from './img/CoverPhoto.JPG'; // Import the local image

const AboutMe = () => {
  const textBlocks = [
    "Hi! My Name is Luan.",
    "I am a Junior RPA and .NET developer.",
    "I am also a 400m and 400m hurdles athlete.",
    "This is a personal website where I host my GitHub projects, CV, and other notable things about me.",
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
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(intervalId);
  }, [textBlocks.length]);

  return (
    <div className="about-me-container">
      <img src={profileImage} alt="Profile" className="about-me-image" />
      <div className="about-me-content">
        <h2 className="about-me-title">Introduction</h2>
        <p className={`about-me-text ${fade ? 'fade-in' : 'fade-out'}`}>
          {textBlocks[currentTextIndex]}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
