import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import React, { useState } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Footer from '../Footer';
import ImageGallery from 'react-image-gallery';
import { imageGroups } from './GalleryImages';

const Gallery = ({ scrollPosition }: any) => {
  const [imgGroups, setImageGroups] = useState(imageGroups);
  const [isScrollBtnDisplayed, setIsScrollBtnDisplayed] = useState(false);
  const [isDrawingSelected, setIsDrawingSelected] = useState(false);
  const [isPaintingSelected, setIsPaintingSelected] = useState(false);
  const [isDigitalSelected, setIsDigitalSelected] = useState(false);
  const [isMiscSelected, setIsMiscSelected] = useState(false);
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);
  const [isImgGalleryLoaded, setIsImgGalleryLoaded] = useState(false);

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
      <div style={{ display: 'block' }}>
        <div className="gallery-images">
          {imgGroups.map((imgGroup, index) => {
            return imgGroup.length === 1 ? (
              <div className="photo-item" key={index}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  effect="blur"
                  src={imgGroup[0].original}
                  alt={imgGroup[0].originalAlt}
                  id={imgGroup[0].id}
                  style={{
                    maxWidth: imgGroup[0].originalWidth,
                    width: '100%',
                    height: 'auto',
                    margin: '15px',
                  }}
                  afterLoad={() => setIsPhotoLoaded(true)}
                />
                {isPhotoLoaded && (
                  <p
                    style={{ maxWidth: imgGroup[0].originalWidth }}
                    className="photo-desc"
                  >
                    {imgGroup[0].desc}
                  </p>
                )}
              </div>
            ) : (
              <div>
                <ImageGallery
                  items={imgGroup}
                  showThumbnails={isImgGalleryLoaded}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showBullets={isImgGalleryLoaded}
                  showNav={isImgGalleryLoaded}
                  additionalClass="img-carousel"
                  key={index}
                  lazyLoad={true}
                  onImageLoad={() => setIsImgGalleryLoaded(true)}
                />
                {isImgGalleryLoaded && (
                  <p className="photo-desc">{imgGroup[0].desc}</p>
                )}
              </div>
            );
          })}
        </div>
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
          <ArrowUpwardIcon />
        </div>
      )}
      <div className="gallery-grid">
        <div className="gallery-type">
          <div className={isDrawingSelected ? 'gallery-type--selected' : ''}>
            <span
              onClick={() => {
                setImageGroups(
                  imageGroups.filter((imgGroup) =>
                    imgGroup.find((img) => img.id.includes('drawing'))
                  )
                );
                setIsDrawingSelected(true);
                setIsPaintingSelected(false);
                setIsMiscSelected(false);
                setIsDigitalSelected(false);
              }}
            >
              Drawings
            </span>
          </div>
          <div className={isPaintingSelected ? 'gallery-type--selected' : ''}>
            <span
              onClick={() => {
                setImageGroups(
                  imageGroups.filter((imgGroup) =>
                    imgGroup.find((img) => img.id.includes('painting'))
                  )
                );
                setIsDrawingSelected(false);
                setIsPaintingSelected(true);
                setIsMiscSelected(false);
                setIsDigitalSelected(false);
              }}
            >
              Paintings
            </span>
          </div>
          <div className={isDigitalSelected ? 'gallery-type--selected' : ''}>
            <span
              onClick={() => {
                setImageGroups(
                  imageGroups.filter((imgGroup) =>
                    imgGroup.find((img) => img.id.includes('digital'))
                  )
                );
                setIsDrawingSelected(false);
                setIsPaintingSelected(false);
                setIsMiscSelected(false);
                setIsDigitalSelected(true);
              }}
            >
              Digital
            </span>
          </div>
          <div className={isMiscSelected ? 'gallery-type--selected' : ''}>
            <span
              onClick={() => {
                setImageGroups(
                  imageGroups.filter((imgGroup) =>
                    imgGroup.find((img) => img.id.includes('misc'))
                  )
                );
                setIsDrawingSelected(false);
                setIsPaintingSelected(false);
                setIsMiscSelected(true);
                setIsDigitalSelected(false);
              }}
            >
              Misc
            </span>
          </div>
        </div>
        {renderImages()}
      </div>
      <Footer />
    </>
  );
};

export default trackWindowScroll(Gallery);
