import React, { useState } from 'react';
import Footer from '../Footer';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import parisPhoto from './me-paris.jpg';

const About: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const imgLoaded = () => {
    setIsLoading(false);
  };
  return (
    <>
      <div style={{ display: isLoading ? 'block' : 'none' }}>
        <LoadingSpinner />
      </div>
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <div className="about-container">
          <div className="img-follow">
            <img src={parisPhoto} onLoad={imgLoaded} alt="Me in Paris" />
            <div className="about-follow">
              Follow:{' '}
              <a href="https://www.instagram.com/lizamorrisonart/">
                @Lizamorrisonart
              </a>
            </div>
          </div>
          <div className="about-text">
            <div className="about-title">Liza Morrison</div>
            <div className="about-subtitle">Artist & Software Engineer</div>
            <div className="about-paragraph">
              Born and raised in New Jersey, I swapped pre-school for art
              classes (thanks Mom). I received my Bachelor of Science in
              Chemistry from the University of Richmond and claimed Richmond as
              my second home. Aside from being a scientist, web developer, and
              software engineer, I'm an Artist. My specialities include:
              graphite, charcoal, pen, oil, acrylic, watercolor, and colored
              pencils. I currently reside in Belgium with my partner, Julie, and
              our three pets (Snickers, Tipper, and Pancake). Thank you for
              checking out my work.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
