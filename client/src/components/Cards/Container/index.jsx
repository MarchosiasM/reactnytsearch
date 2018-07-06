import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../Card/';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: this.props.articles,
    };
    this.saveClick = this.saveClick.bind(this);
  }

  componentDidMount() {
  }

  saveClick() {
    return (headline, snippet, weburl, byline, img, _id) => {
      const savedArticle = {
        _id,
        headline,
        snippet,
        weburl,
        byline,
        img,
      };
      console.log('Heres an item Im saving, ', savedArticle);
      axios({
        method: 'post',
        url: '/articles',
        data: savedArticle,
      })
        .then((response) => {
          console.log(response);
          toast(`${headline} added to your saved articles`);
          console.log(snippet);
        });
    };
  }

  render() {
    console.log(this.state.articles);
    return (
      <div>
        <ToastContainer />
        {this.state.articles.map((article) => {
          const individualClick = this.saveClick(article);
          return (
            <Card
                /* eslint-disable no-underscore-dangle */
              key={article._id}
              _id={article._id}
              headline={article.headline}
              snippet={article.snippet}
              weburl={article.web_url}
              byline={article.byline}
              img={article.img}
              saveClick={individualClick}
            />
          );
        })}
      </div>);
  }
}

export default CardsContainer;
