import React, { useState } from 'react';
import Menu from './Menu';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="nav-menu"
      aria-label="Toggle menu"
    >
      {!isOpen ? (
        <MenuRoundedIcon className="menu-icon" sx={{ fontSize: 40 }} />
      ) : (
        <CloseRoundedIcon className="close-icon" sx={{ fontSize: 40 }} />
      )}
      {isOpen && <Menu />}
    </div>
  );
};

export default NavMenu;
