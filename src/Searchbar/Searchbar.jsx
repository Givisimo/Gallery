import React from 'react';
import T from 'prop-types';

const Searchbar = ({ handleInput, handleSubmit }) => {
  return (
    <form name="search" onSubmit={handleSubmit}>
      <label htmlFor="search">
        Search:
        <input type="text" id="search" name="search" onChange={handleInput} />
      </label>
    </form>
  );
};

Searchbar.propTypes = {
  handleInput: T.func.isRequired,
  handleSubmit: T.func.isRequired,
};
export default Searchbar;
