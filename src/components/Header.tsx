import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Daniel Stephan</Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#works">Works</Link></li>
            <li><Link to="#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
