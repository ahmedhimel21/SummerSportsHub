import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;