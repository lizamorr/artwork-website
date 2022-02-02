import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import Header from './Header';
import './index.scss';
import './favicon.ico';
import './web.config';
import './Home/labrinth.mov';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
