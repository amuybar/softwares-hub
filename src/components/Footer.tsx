// src/components/Footer.tsx
import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="links">
      <ul className="nav-link">
        <li>About</li>
        <li>Photos</li>
        <li>Blog</li>
        <li>Projects</li>
        <li>Learn</li> 

      </ul>

    </footer>
  );
};

export default Footer;
