import React from 'react';
import Footer from '../Footer';
import parisPhoto from './me-paris.jpg';

const About: React.FC = () => {
  return (
    <>
      <div className="about-container">
        <div className="img-follow">
          <img src={parisPhoto} alt="Me in Paris" />
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
            Born and raised in New Jersey, I swapped pre-school for art classes
            (thanks mom). I received my BS in Chemistry from the University of
            Richmond and claimed Richmond as my second home. Besides being a
            scientist, web developer, and software engineer, I'm an Artist. My
            specialities include: graphite, charcoal, pen, oils, acrylic,
            watercolor, and colored pencils. I currently reside in Belgium with
            my partner, Julie, and our three pets (Snickers, Tipper, and
            Pancake). Please contact me with more information about commissions.
            Thank you for checking out my work.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
