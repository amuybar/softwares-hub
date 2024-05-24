
import React from 'react';
import '../styles/Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Talk is cheap. Show me the code.</h1>
        <p>I design and code beautifully simple things, and I love what I do.</p>
        <a href="#contact" className="cta-button">Let's Chat!</a>
      </div>
    </section>
  );
};

export default Hero;
