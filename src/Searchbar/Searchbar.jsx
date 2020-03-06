import React from 'react';

const Searchbar = () => {
  return (
    <form name="search">
      <label htmlFor="search">Search:</label>
      <input type="text" id="search" name="search" />
    </form>
  );
};

export default Searchbar;
