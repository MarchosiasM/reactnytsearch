import React, { Component } from 'react';
import './App.css';
import Layout from './pages/Layout/';


/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    fetch('/articles')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    console.log(this.state.users);
    return (
      <div>        <h1>Articles</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>)}

        <Layout />
      </div>
    );
  }
}

export default App;
