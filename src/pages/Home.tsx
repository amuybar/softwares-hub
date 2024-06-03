// src/pages/Home.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/About';
import Photos from '../components/Photos';
import Projects from '../components/Projects';

const Home: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>('home');

  const renderContent = () => {
    switch (selectedSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'photos':
        return <Photos />;
      case 'projects':
        return <Projects />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className='home'>
      <Header />
      <div className="home-container">
        <TransitionGroup>
          <CSSTransition
            key={selectedSection}
            timeout={500}
            classNames="fade"
          >
            <div className="content">
              {renderContent()}
            </div>
          </CSSTransition>
        </TransitionGroup>
        <Footer onSelect={setSelectedSection} />
      </div>
    </div>
  );
};

export default Home;
