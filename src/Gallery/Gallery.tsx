import React, { useState } from 'react';
import { imageGroups } from './GalleryImages';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../Footer';

const Gallery: React.FC = () => {
  const [imgGroups, setImageGroups] = useState(imageGroups);
  const [isScrollBtnDisplayed, setIsScrollBtnDisplayed] = useState(false);
  const [isDrawingSelected, setIsDrawingSelected] = useState(false);
  const [isPaintingSelected, setIsPaintingSelected] = useState(false);
  const [isPrintsSelected, setIsPrintsSelected] = useState(false);
  const [isMiscSelected, setIsMiscSelected] = useState(false);

  const scrollToTop = (): void => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setIsScrollBtnDisplayed(false);
  };
  const showScrollToTop = (): void => {
    setIsScrollBtnDisplayed(true);
  };
  window.onscroll = (): void => {
    if (
      (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) &&
      !isScrollBtnDisplayed
    )
      showScrollToTop();
  };

  const renderImages = (): JSX.Element => {
    return (
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
                style={{ maxWidth: imgGroup[0].maxWidth }}
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
              swipeable={false}
              axis="horizontal"
              key={index}
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
                    style={{ maxWidth: photo.maxWidth }}
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
    );
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
            className={isDrawingSelected ? 'gallery-type--underlined' : ''}
            onClick={() => {
              setImageGroups(
                imageGroups.filter((imgGroup) =>
                  imgGroup.find((img) => img.id.includes('drawing'))
                )
              );
              setIsDrawingSelected(true);
              setIsPaintingSelected(false);
              setIsPrintsSelected(false);
              setIsMiscSelected(false);
            }}
          >
            Drawings
          </span>
          <span
            className={isPaintingSelected ? 'gallery-type--underlined' : ''}
            onClick={() => {
              setImageGroups(
                imageGroups.filter((imgGroup) =>
                  imgGroup.find((img) => img.id.includes('painting'))
                )
              );
              setIsDrawingSelected(false);
              setIsPaintingSelected(true);
              setIsPrintsSelected(false);
              setIsMiscSelected(false);
            }}
          >
            Paintings
          </span>
          <span
            className={isPrintsSelected ? 'gallery-type--underlined' : ''}
            onClick={() => {
              setImageGroups(
                imageGroups.filter((imgGroup) =>
                  imgGroup.find((img) => img.id.includes('print'))
                )
              );
              setIsDrawingSelected(false);
              setIsPaintingSelected(false);
              setIsPrintsSelected(true);
              setIsMiscSelected(false);
            }}
          >
            Prints
          </span>
          <span
            className={isMiscSelected ? 'gallery-type--underlined' : ''}
            onClick={() => {
              setImageGroups(
                imageGroups.filter((imgGroup) =>
                  imgGroup.find((img) => img.id.includes('misc'))
                )
              );
              setIsDrawingSelected(false);
              setIsPaintingSelected(false);
              setIsPrintsSelected(false);
              setIsMiscSelected(true);
            }}
          >
            Misc
          </span>
        </div>
        {renderImages()}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
