import React from 'react';

function Footer() {
  return (
    <div id="footer" className="footer">
      {`© Liza Morrison ${new Date().getFullYear()}`}
    </div>
  );
}

export default Footer;
