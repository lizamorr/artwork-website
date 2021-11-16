import React, { useState } from 'react';
import Menu from './Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="nav-menu"
      aria-label="Toggle menu"
    >
      {!isOpen ? (
        <MenuIcon className="menu-icon" sx={{ fontSize: 40 }} />
      ) : (
        <CloseIcon className="close-icon" sx={{ fontSize: 40 }} />
      )}
      {isOpen && <Menu />}
    </div>
  );
};

export default NavMenu;
