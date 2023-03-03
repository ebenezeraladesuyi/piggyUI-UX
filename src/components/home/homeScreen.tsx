import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/header';
import Access from './Access';
import Hero from './Hero';
import Savings from './Savings';
import Security from './security';

const HomeScreen = () => {
  return (
    <div style={{overflow:"hidden"}}>

      <Header />
      <Hero />
      <Security />
      <Savings />
      <Access />
      <Footer />

    </div>
  )
}

export default HomeScreen