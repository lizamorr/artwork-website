import React from 'react';
import { setFooterMargin } from '../Footer/Footer-helper';
import asheville from './Liza-Asheville.jpg';

const Home: React.FC = () => {
  setFooterMargin(true);
  return (
    <div className="home-screen">
      <img src={asheville} className="asheville-photo" alt="asheville" />
      <div className="title">Liza Morrison Art</div>
    </div>
  );
};

export default Home;
