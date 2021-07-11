import { Link } from 'react-router-dom';
import React from 'react';

const Menu = () => {
  return (
    <div
      className={
        window.location.href.includes('/gallery') ||
        window.location.href.includes('/about') ||
        window.location.href.includes('/contact')
          ? 'menu-gallery'
          : 'menu'
      }
    >
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/gallery">Gallery</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
export default Menu;
