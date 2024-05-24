// src/pages/Home
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <Header />
      <div className="home-container">
      <Hero />
      <Footer />
      </div>
    </div>
  );
};

export default Home;
