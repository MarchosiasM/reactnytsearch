import React from 'react';

/* eslint-disable no-unused-vars */
const SearchBar = ({ onChange, onSubmit, value }) => (
  <form onSubmit={onSubmit}>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search the New York times for..."
        aria-label="Search"
        aria-describedby="basic-addon1"
        onChange={onChange}
        value={value}
      />
    </div>
  </form>
);

export default SearchBar;
