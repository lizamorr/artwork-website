import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import Header from './Header';
import './index.scss';
import './favicon.ico';
import './web.config';

ReactDOM.render(
  <HashRouter basename="/">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="*" component={Home} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
