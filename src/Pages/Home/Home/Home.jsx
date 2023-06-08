import React from 'react';
import Banner from '../Banner/Banner';
import InstructorsSection from '../InstructorsSection/InstructorsSection';

const Home = () => {
  return (
    <div className='mt-5'>
      <Banner></Banner>
      <InstructorsSection></InstructorsSection>
    </div>
  );
};

export default Home;