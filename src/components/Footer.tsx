// src/components/Footer.tsx
import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Let's make something amazing together.</p>
        <p>Start by <a href="#contact">saying hi</a></p>
      </div>
      <div className="footer-bottom">
        <p>Daniel Stephan © 2024. All rights reserved</p>
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
