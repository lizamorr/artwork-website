import React, { useState } from 'react';
import Menu from './Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="menu-icon"
      aria-label="Toggle menu"
    >
      {!isOpen ? (
        <MenuIcon sx={{ fontSize: 40 }} />
      ) : (
        <CloseIcon sx={{ fontSize: 40 }} />
      )}
      {isOpen && <Menu />}
    </div>
  );
};

export default Burger;
