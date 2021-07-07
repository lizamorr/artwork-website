import React from 'react';

function Footer(props: { isHome?: boolean }) {
  return (
    <div id="footer" className={props.isHome ? 'footer-home' : 'footer'}>
      © Liza Morrison 2021.
    </div>
  );
}

export default Footer;
