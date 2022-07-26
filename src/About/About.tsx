import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import Footer from '../Footer';
import React from 'react';
import aboutText from './about-text-min.jpg';
import parisPhoto from './me-paris-compressed.jpg';

const About = ({ scrollPosition }: any) => {
  return (
    <div style={{ display: 'block' }}>
      <div className="about-container">
        <div className="img-follow">
          <LazyLoadImage
            scrollPosition={scrollPosition}
            effect="blur"
            className="paris-photo"
            src={parisPhoto}
            alt="Me in Paris"
          />
          <div className="instagram-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/lizamorrisonart/"
            >
              <img
                alt="Instagram"
                src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_50,h_50,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
                className="instagram"
              />
            </a>
          </div>
        </div>
        <div className="about-paragraph">
          <LazyLoadImage
            scrollPosition={scrollPosition}
            effect="blur"
            src={aboutText}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default trackWindowScroll(About);
