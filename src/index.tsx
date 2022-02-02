import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import Header from './Header';
import './index.scss';
import './favicon.ico';
import './web.config';
import './Home/labrinth.mp4';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
