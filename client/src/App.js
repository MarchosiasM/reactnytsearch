import React, { Component } from 'react';
import './App.css';
import Layout from './pages/Layout/';


/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default App;
