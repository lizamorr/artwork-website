import React from 'react';
import Footer from '../Footer';
import title from './liza-morrison-art-compressed.png';
import antwerp from './antwerp-multi-compressed.png';

const Home: React.FC = () => {
  return (
    <>
      <div className="home-screen">
        <img src={antwerp} className="antwerp-photo" alt="Antwerp" />
        <img src={title} className="title fade-in" alt="Liza Morrison Art" />
      </div>
      <Footer isHome={true} />
    </>
  );
};

export default Home;
