import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import About from './About';
import Burger from './Burger';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import './index.scss';
import './favicon.ico';
import './web.config';

ReactDOM.render(
  <BrowserRouter basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="*" component={Home} />
      <Route component={Home} />
    </Switch>
    <Burger />
  </BrowserRouter>,
  document.getElementById('root')
);
