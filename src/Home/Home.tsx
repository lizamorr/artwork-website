import React from 'react';
import Footer from '../Footer';
import title from './liza-morrison-art.png';
import antwerp from './antwerp.jpg';

const Home: React.FC = () => {
  return (
    <>
      <div className="home-screen">
        <img src={antwerp} className="antwerp-photo" alt="Antwerp" />
        <img src={title} className="title" alt="Liza Morrison Art" />
      </div>
      <Footer isHome={true} />
    </>
  );
};

export default Home;
