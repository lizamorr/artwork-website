import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import About from './About';
import Burger from './Burger';
import Contact from './Contact';
import Gallery from './Gallery';
import Home from './Home';
import './index.scss';
import './favicon.ico';
import './web.config';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Redirect exact from="/reload" to="/" />
      <Redirect exact from="/gallery/reload" to="/gallery" />
      <Redirect exact from="/contact/reload" to="/contact" />
      <Redirect exact from="/about/reload" to="/about" />
    </Switch>
    <Burger />
  </BrowserRouter>,
  document.getElementById('root')
);
