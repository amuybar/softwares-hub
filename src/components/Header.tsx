import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import '../styles/Header.scss';

const Header: React.FC = () => {
  const [hide ,setHide]=React.useState(false);
  
  const handleClick=()=>{
    setHide(!hide);
  }
  return (
    <header className="header">
      <div className="container">
        <div className="left-header">
          <div className='logo'>
            <h1>B</h1>
          </div>
          <div className="name">
          <Link to="/">Barrack Amuyunzu</Link>
          <div className="dev">
            Developer
          </div>
          </div>

        </div>
        <div className="right-header">
          <h3 className="btn-txt" onClick={handleClick}>
            + Contact  Barrack
          </h3>
        </div>
    
      </div>
    {
      hide &&(
        <div className="contact">
        <div className="line"></div>
        <div className="cont">
          <div className="email">
            <div className="email-icon">
              <FaMailBulk/> 
            </div>
            <a href="mailto:hello@daniel.io">barryreact@gmail.com</a>
          </div>
          <div className="phone">
            <div className="phone-icon">
              <FaPhone/> 
            </div>
            <a href="tel:+2348100000000">+254742812483</a>
          </div>
          <div className="whatsapp">
            <div className="whatsapp-icon">
              <FaWhatsapp/> 
            </div>
            <a href="tel:+2348100000000">+254742812483</a>
          </div>
        </div>
        <div className="line"></div>
        <div className="social">
          <FaGithub/>
          <FaTwitter/>
          <FaLinkedin/>
          <FaDiscord/>
        </div>
      </div>
      )
    }
    </header>
  );
};

export default Header;
