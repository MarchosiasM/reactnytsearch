import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Search from './pages/Search';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Router>
    <div>
      <App />
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/saved" component={Saved} />
      <Route path="/search" component={Search} />
    </div>
  </Router>,
  /* eslint-env browser */
  document.getElementById('root'),
);
registerServiceWorker();
