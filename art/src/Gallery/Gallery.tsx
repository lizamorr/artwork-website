import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div className="photos">
        {photos.map((photo, index) => (
          <img
            src={photo.src}
            alt={photo.alt}
            key={index}
            height={photo.height}
            width={photo.width}
          />
        ))}
      </div>
    );
  }
}

const photos = [
  {
    src: './Images/curry.jpg',
    width: 400,
    height: 300,
    alt: '',
  },
  // {
  //   src: 'http://example.com/example/img2.jpg',
  //   width: 1,
  //   height: 1,
  // },
];

export default Gallery;
