import { NavLink, HashRouter } from 'react-router-dom';
import React from 'react';

const Menu = () => {
  return (
    <HashRouter>
      <div
        className={
          window.location.href.includes('/gallery') ||
          window.location.href.includes('/about')
            ? 'menu-gallery'
            : 'menu'
        }
      >
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/gallery">Gallery</NavLink>
        </div>
        <div>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </HashRouter>
  );
};
export default Menu;
