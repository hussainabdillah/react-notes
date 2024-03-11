import React from "react";

function SearchBar({ onSearch }) {
  const onSearchChangeEventHandler = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Find Notes ..."
      onChange={onSearchChangeEventHandler}
    />
  );
}

export default SearchBar;
