import React from 'react';
import Banner from '../Banner/Banner';
import InstructorsSection from '../InstructorsSection/InstructorsSection';
import PopularClasses from '../../../components/PopularClasses/PopularClasses';
import CampStaff from '../CampStuff/CampStuff';

const Home = () => {
  return (
    <div className='mt-5'>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <InstructorsSection></InstructorsSection>
      <CampStaff></CampStaff>
    </div>
  );
};

export default Home;