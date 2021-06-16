import React, { useState } from 'react';
import { imageGroups } from './GalleryImages';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery: React.FC = () => {
  const [imgGroups, setImageGroups] = useState(imageGroups);
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
              setImageGroups(
                imageGroups.filter((imgGroup) =>
                  imgGroup.find((img) => img.id.includes('drawing'))
                )
              )
            }
          >
            Drawings
          </span>
          <span
            onClick={() =>
              setImageGroups(
                imageGroups.filter((imgGroup) =>
                  imgGroup.find((img) => img.id.includes('painting'))
                )
              )
            }
          >
            Paintings
          </span>
          <span
            onClick={() =>
              setImageGroups(
                imageGroups.filter((imgGroup) =>
                  imgGroup.find((img) => img.id.includes('print'))
                )
              )
            }
          >
            Prints
          </span>
          <span
            onClick={() =>
              setImageGroups(
                imageGroups.filter((imgGroup) =>
                  imgGroup.find((img) => img.id.includes('misc'))
                )
              )
            }
          >
            Misc
          </span>
        </div>
        <div className="gallery-images">
          {imgGroups.map((imgGroup, index) => {
            return imgGroup.length === 1 ? (
              <div className="photo-item" key={index}>
                <img
                  src={imgGroup[0].src}
                  alt={imgGroup[0].alt}
                  key={index}
                  id={imgGroup[0].id}
                  style={{
                    maxWidth: imgGroup[0].maxWidth,
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <div
                  style={{ width: imgGroup[0].maxWidth }}
                  className="photo-desc"
                >
                  {imgGroup[0].desc}
                </div>
              </div>
            ) : (
              <Carousel
                className="img-carousel"
                showStatus={false}
                showIndicators={false}
                showArrows={false}
                swipeable={true}
                axis="vertical"
              >
                {imgGroup.map((photo, index) => (
                  <div
                    className="photo-item"
                    style={{
                      maxWidth: photo.maxWidth,
                    }}
                    key={index}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      key={index}
                      id={photo.id}
                    />
                    <div
                      style={{ width: photo.maxWidth }}
                      className="photo-desc"
                    >
                      {photo.desc}
                    </div>
                  </div>
                ))}
              </Carousel>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
