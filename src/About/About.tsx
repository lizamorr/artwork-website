import React from 'react';
import parisPhoto from './me-paris.jpg';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <img src={parisPhoto} alt="Me in Paris" />
      <div className="about-text">
        <div className="about-title">Liza Morrison</div>
        <div className="about-subtitle">Artist & Software Engineer</div>
        <div className="about-paragraph">
          Born and raised in New Jersey, I swapped pre-school for art classes
          (thanks mom) and continued scribbling on paper. I received my BS in
          Chemistry from the University of Richmond and claimed Richmond as my
          second home. After my undergraduate studies, I worked as an associate
          analytical scientist, web developer, and software engineer. When not
          acting as Mr. Robot, I'm an artist. The majority of my work after high
          school has been commissions (thanks to all my awesome customers!). My
          specialities range across various mediums: graphite, charcoal, pen,
          oils, acrylic, watercolor, and colored pencils. I currently reside in
          Belgium with my partner and our three pets (2 dogs and 1 cat). Please
          contact me with more information about commissions. Thank you for
          checking out my work.
        </div>
        <div className="about-follow">
          Follow:{' '}
          <a href="https://www.instagram.com/lizamorrisonart/">
            @Lizamorrisonart
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
