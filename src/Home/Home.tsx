import React from 'react';
import Footer from '../Footer';
import title from './liza-morrison-art-compressed.png';

const Home = () => {
  return (
    <>
      <div className="home-screen">
        <video autoPlay muted loop id="labrinth">
          <source src="./labrinth.mp4" type="video/mp4" />
        </video>
        <img src={title} className="title" alt="Liza Morrison Art" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
