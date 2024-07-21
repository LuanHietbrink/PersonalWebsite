import React, { useState, useEffect } from 'react';
import './Track.css';

const ScrollTrack = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div class="track-fg">
        <div class="content">
            <h1>Your Heading Here</h1>
            <p>Your description or content goes here.</p>
        </div>
    </div>
  );
};

export default ScrollTrack;
