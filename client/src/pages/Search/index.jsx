import React from 'react';

const Search = (props) => {
  const { query } = props.location;
  return (
    <div>Search {query}</div>
  );
};

export default Search;
