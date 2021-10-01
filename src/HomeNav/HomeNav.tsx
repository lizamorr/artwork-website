import React from 'react';
import initials from './initials-compressed.png';
import { Link } from 'react-router-dom';

const HomeNav: React.FC = () => {
  return (
    <Link to="/">
      <img src={initials} className="home-nav" aria-label="Navigate home" />
    </Link>
  );
};

export default HomeNav;
