import React, { useState } from 'react';
import { photos } from './GalleryImages';

const Gallery: React.FC = () => {
  const [images, setImages] = useState(photos);

  return (
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
        <div className="photo-item">
          <img
            src={photo.src}
            alt={photo.alt}
            key={index}
            height={photo.height}
            width={photo.width}
            id={photo.id}
          />
          <div className="photo-desc">{photo.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
