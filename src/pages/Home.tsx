// src/pages/Home
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LatestWorks from '../components/LatestWorks';
import Testimonials from '../components/Testimonials';
import Awards from '../components/Awards';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <LatestWorks />
      <Testimonials />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
