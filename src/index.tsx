import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import About from './About';
import Burger from './Burger';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import './index.scss';
import './favicon.ico';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </HashRouter>
    <Burger />
  </React.StrictMode>,
  document.getElementById('root')
);
