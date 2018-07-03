import React, { Component } from 'react';
import SearchBars from '../../components/SearchBars/';
import axios from 'axios';
import CardContainer from '../../components/Cards/Container';

console.log();
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: 'e0519437ad4f4f709ae0c3336610c351',
      articles: [],
      value: '',
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      articles: '',
      loading: true,
    });
    console.log(event);
    const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    axios.get(url, {
      params: {
        'api-key': this.state.apiKey,
        q: this.state.value,
      },
    })
      .then((response) => {
        this.articles = response;
        console.log('Articles?', this.articles.data.response.docs);
        this.setState({ articles: this.articles.data.response.docs, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /* eslint-disable no-nested-ternary */
  render() {
    return (
      <div className="container">
        <SearchBars
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.value}
        />
        <div className="card">
          <div className="card-body">
            {console.log(this.state.articles)}
            {this.state.articles.length
              ?
                <CardContainer articles={this.state.articles} />
              :
              this.state.loading
              ?
              'Good things come to those who wait'
              :
              'Please search something!'}

          </div>
        </div>

      </div>
    );
  }
}

export default Layout;
