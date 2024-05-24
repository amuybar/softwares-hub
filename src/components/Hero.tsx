
import React from 'react';
import '../styles/Hero.scss';
import { Fa500Px, FaAnchor, FaCreativeCommons, FaGitlab, FaNetworkWired } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="body">
      <div className="container">
          <h1>Hi   👋  👋, I'm Barrack</h1>
          <h2>I'm a  Developer Based In Kenya</h2>
          <div className="line"></div>
          <p>
            I'm a passionate developer who loves to create beautiful and
            functional web applications. I have a passion for designing and
            developing user-friendly web applications.
          </p>
          <div className="line"></div>
          <h3>
        Checkout my <Fa500Px/><a href='/'>Blog Page</a>
          </h3>
          <div className="line"></div>
          <h3>
            Join a community of beginners here <FaAnchor/> <a href='/'>Proxima Cinturi Community</a>
          </h3>
          <div className="line"></div>
          <h3>
           See my projects <FaGitlab/><a href='/'>Blackhole Labs</a>
          </h3>
        </div>
        <h1>
          <FaCreativeCommons/>
          Technology
        </h1>
        <ul className='tech-cards'>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Git</li>
          <li>Github</li>
          <li>Netlify</li>
          <li>Python</li>
          <li>Django</li>
        </ul>
        <h1>
          <FaNetworkWired/>
          Networking
        </h1>
        <ul className='net-cards'>
          <li>Network Technology</li>
          <li>Computer Networks</li>
          <li>Wireless Networks</li>
          <li>Network Security</li>
        </ul>
        <h1>Fun Times</h1>
        <ul className='fun-cards'>
          <div className="f-card">
          <li>Reading</li>
        
          </div>
          <div className="f-card">
          <li>Coding</li>
          </div>
          <div className="f-card">
          <li>Watching Movies</li>
          </div>
          <div className="f-card">
          <li>Listening to Music</li>
          </div>
          <div className="f-card">
          <li>Watching Series</li>
          </div>

        </ul>
    </section>
  );
};

export default Hero;
