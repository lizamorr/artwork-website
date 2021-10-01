import { Link } from 'react-router-dom';
import React from 'react';

const Menu = () => {
  return (
    <div className="menu">
      {!window.location.href.includes('/gallery') && (
        <Link to="/gallery">Gallery</Link>
      )}
      {!window.location.href.includes('/contact') && (
        <Link to="/contact">Contact</Link>
      )}
      {!window.location.href.includes('/about') && (
        <Link to="/about">About</Link>
      )}
    </div>
  );
};
export default Menu;
