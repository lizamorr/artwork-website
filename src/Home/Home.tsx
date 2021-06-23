import React from 'react';
import asheville from './Liza-Asheville.jpg';

const Home: React.FC = () => {
  return (
    <div className="home-screen">
      <img src={asheville} className="asheville-photo" alt="asheville" />
      <div className="title">Liza Morrison Art</div>
    </div>
  );
};

export default Home;
