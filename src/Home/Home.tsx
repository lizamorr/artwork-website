import React from 'react';
import Footer from '../Footer';
import title from './liza-morrison-art-compressed.png';

const Home = () => {
  return (
    <>
      <div className="home-screen">
        <video
          src="./labrinth.mp4"
          playsInline
          autoPlay
          muted
          loop
          id="labrinth"
        />
        <img src={title} className="title" alt="Liza Morrison Art" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
