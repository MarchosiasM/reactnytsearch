import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../Card/';
import stockImg from '../../../assets/images/new-york-times-logo.png';

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
    return (headline, snippet, weburl, byline, img) => {
      toast(`${headline} added to your saved articles`);
      console.log(snippet);
    };
  }

  render() {
    return (
      <div>
        <ToastContainer />
        {this.state.articles.map((article) => {
          const individualClick = this.saveClick(article);
          const imgBucket = article.multimedia.filter(element => (
            element.subtype === 'wide'
          ));
          return (
            <Card
                /* eslint-disable no-underscore-dangle */
              key={article._id}
              headline={article.headline.main}
              snippet={article.snippet}
              weburl={article.web_url}
              byline={article.byline ? article.byline.original : ''}
              img={imgBucket[0] ? `http://nytimes.com/${imgBucket[0].url}` : stockImg}
              saveClick={individualClick}
            />
          );
        })}
      </div>);
  }
}

export default CardsContainer;
