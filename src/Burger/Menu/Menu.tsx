import { Link } from 'react-router-dom';
import React from 'react';

const Menu = () => {
  return (
    <div
      className={
        window.location.href.includes('/gallery') ||
        window.location.href.includes('/about') ||
        window.location.href.includes('/contact')
          ? 'menu--white'
          : 'menu'
      }
    >
      {!window.location.href.endsWith('/') && (
        <div>
          <Link to="/">Home</Link>
        </div>
      )}
      {!window.location.href.includes('/gallery') && (
        <div>
          <Link to="/gallery">Gallery</Link>
        </div>
      )}
      {!window.location.href.includes('/contact') && (
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      )}
      {!window.location.href.includes('/about') && (
        <div>
          <Link to="/about">About</Link>
        </div>
      )}
    </div>
  );
};
export default Menu;
