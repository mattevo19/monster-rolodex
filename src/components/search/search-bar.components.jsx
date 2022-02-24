import React from "react";

import "./search-bar.styles.css";

export function SearchBar({ placeholder, handleChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
