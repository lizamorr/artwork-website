import React, { Component } from 'react';
import curry from './Images/curry.jpg';
import eagles from './Images/eagles.jpg';
import odellAndSaquon from './Images/odell-and-saquon.jpg';
import saquon from './Images/saquon.jpg';
import fatherDaughter from './Images/father-daughter.jpg';
import robinWilliams from './Images/robin.jpg';
import walterWhite from './Images/walter-white.jpg';
import tevlin from './Images/tevlin.jpg';
import titanic from './Images/titanic.jpg';
import titanicFrame from './Images/titanic-frame.jpg';

class Gallery extends Component {
  render() {
    return (
      <div className="gallery-grid">
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
    src: curry,
    width: 'auto',
    height: 400,
    alt: '',
  },
  {
    src: eagles,
    width: 'auto',
    height: 300,
  },
  {
    src: odellAndSaquon,
    width: 'auto',
    height: 500,
  },
  {
    src: saquon,
    width: 'auto',
    height: 300,
  },
  {
    src: fatherDaughter,
    width: 300,
    height: 'auto',
  },
  {
    src: robinWilliams,
    width: 400,
    height: 'auto',
  },
  {
    src: walterWhite,
    width: 470,
    height: 'auto',
  },
  {
    src: tevlin,
    width: 300,
    height: 'auto',
  },
  {
    src: titanic,
    width: 500,
    height: 'auto',
  },
  {
    src: titanicFrame,
    width: 500,
    height: 'auto',
  },
];

export default Gallery;
