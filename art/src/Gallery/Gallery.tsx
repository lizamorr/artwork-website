import React, { useState } from 'react';
import { photos } from './GalleryImages';

const Gallery: React.FC = () => {
  const [images, setImages] = useState(photos);
  const [isScrollBtnDisplayed, setIsScrollBtnDisplayed] = useState(false);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setIsScrollBtnDisplayed(false);
  };
  const showScrollToTop = () => {
    setIsScrollBtnDisplayed(true);
  };
  window.onscroll = () => {
    if (
      (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) &&
      !isScrollBtnDisplayed
    )
      showScrollToTop();
  };

  return (
    <>
      {isScrollBtnDisplayed && (
        <div
          id="scroll-btn"
          className="scroll-btn"
          onClick={() => scrollToTop()}
        >
          Top
        </div>
      )}
      <div className="gallery-grid">
        <div className="gallery-type">
          <span
            onClick={() =>
              setImages(photos.filter((img) => img.id.includes('drawing')))
            }
          >
            Drawings
          </span>
          <span
            onClick={() =>
              setImages(photos.filter((img) => img.id.includes('painting')))
            }
          >
            Paintings
          </span>
          <span
            onClick={() =>
              setImages(photos.filter((img) => img.id.includes('print')))
            }
          >
            Prints
          </span>
          <span
            onClick={() =>
              setImages(photos.filter((img) => img.id.includes('misc')))
            }
          >
            Misc
          </span>
        </div>
        {images.map((photo, index) => (
          <div className="photo-item" key={index}>
            <img
              src={photo.src}
              alt={photo.alt}
              key={index}
              id={photo.id}
              style={{
                maxWidth: photo.maxWidth,
                width: '100%',
                height: 'auto',
              }}
            />
            <div style={{ width: photo.maxWidth }} className="photo-desc">
              {photo.desc}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
