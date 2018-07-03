import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const styling = {
  // margin: '10px',
  padding: '5px',
  display: 'inline-block',
};

const Card = ({
  headline, snippet, weburl, byline, img, saveClick,
}) => (
  <div className="card card-group col-sm-4" style={styling}>
    <img className="card-img-top" src={img} alt={snippet} style={{ padding: '3px' }} />
    <div className="card-body">
      <h5 className="card-title">{`${headline}`}</h5>
      <p className="card-subtitle mb-2 text-muted"><small>{byline}</small></p>
      <div className="card-text">{snippet}</div>
      <a href={weburl} target="_blank" className="btn btn-primary" style={{ margin: '5px' }}>Read more</a>
      <button
        className="btn btn-secondary"
        onClick={(e) => { saveClick(headline, snippet, weburl, byline, img); }}
      >Save
      </button>
    </div>
  </div>
);

export default Card;
