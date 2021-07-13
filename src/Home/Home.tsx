import React from 'react';
import Footer from '../Footer';
import asheville from './Liza-Asheville.jpg';
import title from './liza-morrison-art.png';

const Home: React.FC = () => {
  return (
    <>
      <div className="home-screen">
        <img src={asheville} className="asheville-photo" alt="asheville" />
        <img src={title} className="title" alt="Liza Morrison Art" />
      </div>
      <Footer isHome={true} />
    </>
  );
};

export default Home;
