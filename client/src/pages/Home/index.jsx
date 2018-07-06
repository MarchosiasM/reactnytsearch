import React, { Component } from 'react';
import axios from 'axios';
import stockImg from '../../../src/assets/images/new-york-times-logo.png';
import SearchBars from '../../components/SearchBars/';
import CardContainer from '../../components/Cards/Container';

const processArticles = (articles) => {
  const processedArticles = articles.map((article) => {
    const imgBucket = article.multimedia.filter(element => (
      element.subtype === 'wide'
    ));
    const newArticle = {
      _id: article._id,
      headline: article.headline.main,
      snippet: article.snippet,
      weburl: article.web_url,
      byline: article.byline ? article.byline.original : '',
      img: imgBucket[0] ? `http://nytimes.com/${imgBucket[0].url}` : stockImg,
    };
    return newArticle;
  });
  return processedArticles;
};

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
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      articles: [],
      loading: true,
    });
    const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    axios.get(url, {
      params: {
        'api-key': this.state.apiKey,
        q: this.state.value,
      },
    })
      .then((response) => {
        this.articles = response;
        console.log('Articles received', this.articles.data.response.docs);
        const processedArticles = processArticles(this.articles.data.response.docs);
        console.log('Your processed articles look like', processedArticles);
        this.setState({ articles: processedArticles, loading: false });
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
