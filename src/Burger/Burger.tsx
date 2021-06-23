import React, { useState } from 'react';
import Menu from './Menu';

const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={isOpen ? 'close' : 'burger'}
      aria-label="Toggle menu"
    >
      <span />
      <span />
      <span />
      {isOpen && <Menu />}
    </div>
  );
};

export default Burger;
