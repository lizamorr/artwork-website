import React, { useState } from 'react';
import Menu from './Menu';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const NavMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="nav-menu"
      aria-label="Toggle menu"
    >
      {!isOpen ? (
        <MenuRoundedIcon
          className={
            window.location.href.includes('gallery') ||
            window.location.href.includes('contact') ||
            window.location.href.includes('about')
              ? 'menu-icon'
              : 'menu-icon--animated'
          }
          sx={{ fontSize: 40 }}
        />
      ) : (
        <CloseRoundedIcon className="close-icon" sx={{ fontSize: 40 }} />
      )}
      {isOpen && <Menu />}
    </div>
  );
};

export default NavMenu;
