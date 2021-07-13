import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import About from './About';
import Burger from './Burger';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import './index.scss';
import './favicon.ico';
import './web.config';

ReactDOM.render(
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="*" component={Home} />
    </Switch>
    <Burger />
  </HashRouter>,
  document.getElementById('root')
);
