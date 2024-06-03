// src/components/Footer.tsx
import React from 'react';
import '../styles/Footer.scss';
import { useNavigate } from 'react-router-dom';

interface FooterProps {
  onSelect: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSelect }) => {
  const navigate =useNavigate();
  return (
    <footer className="links">
      <ul className="nav-link">
        <li onClick={() => onSelect('home')}>Home</li>
        <li onClick={() => onSelect('about')}>About</li>
        <li onClick={() => onSelect('photos')}>Photos</li>
        <li onClick={() => navigate('/blog')}>Blog</li>
        <li onClick={() => onSelect('projects')}>Projects</li>
        <li onClick={() => navigate('/learn')}>Learn</li> 
      </ul>
    </footer>
  );
};

export default Footer;
