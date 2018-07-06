import React, { Component } from 'react';
import axios from 'axios';
import CardContainer from '../../components/Cards/Container';

class Saved extends Component {
  constructor() {
    super();
    this.state = {
      savedArticles: [],
      loading: false,
    };

    this.updateSaved = this.updateSaved.bind(this);
  }

  componentDidMount() {
    this.updateSaved();
  }

  updateSaved() {
    axios.get('/articles', {
      data: {},
    })
      .then((res) => {
        console.log('response from an axios get', res.data);
        this.setState({ savedArticles: res.data });
      });
  }

  clearSaved() {
    axios.delete('articles', {
      data: {},
    })
      .then(() => {
        this.setState({ savedArticles: [] });
      })
      .catch((error) => {
        console.log('Deletion error', error);
      });
  }

  /* eslint-disable no-nested-ternary */
  render() {
    console.log('Here are your saved articles', this.state.savedArticles);
    return (
      <div>
        <h1>Here are your saved articles:</h1>
        <button onClick={this.clearSaved}>Delete</button>
        <div className="card">
          <div className="card-body">
            {this.state.savedArticles.length
              ?

                <CardContainer articles={this.state.savedArticles} />


              :
              this.state.loading
              ?
              'Good things come to those who wait'
              :
              'Have you saved any articles?'}

          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
