import React from 'react';
import Landing from '../components/landing';
import Approach from '../components/Approach';
import Work from '../components/Work';
import ReviewScroller from '../components/ReviewScroller';
import Footer from '../components/Footer';


function Hero() {
  return (
    <div className='bg-orange-100 h-full'>
      <Landing />
      <Approach />
      <Work />
      <ReviewScroller />
      <Footer />
      
    </div>
  );
}

export default Hero;

