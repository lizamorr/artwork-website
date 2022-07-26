import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu';
import React from 'react';
import initials from './initials-compressed.png';

const Header = () => {
  return (
    <header className="header__container">
      <div className="header__flex">
        <div className="header__initials">
          <Link to="/">
            <img
              src={initials}
              className="header__initials-img"
              aria-label="Navigate home"
            />
          </Link>
        </div>
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
