import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Shared/NavigationBar/NavigationBar';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;