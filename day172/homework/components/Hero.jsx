import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{greeting}, I'm George</h1>
        <p className="hero-description">Hello, my name is Giorgi, I live in georgia, I am a web developer, I have been studying at Goal Oriented Academy for over a year now and I am studying well, I have made many websites. If you are interested, follow me well and you will definitely see</p>
        <a href="#projects" className="cta-button">See My Work</a>
      </div>
    </section>
  );
};

export default Hero;
