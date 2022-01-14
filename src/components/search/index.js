import React from "react";

const Search = ({ characters, handleOnChange }) => {
  return (
    <input
      type="text"
      id="search-field"
      placeholder="search"
      value={characters}
      onChange={handleOnChange}
    />
  );
};
export default Search;
