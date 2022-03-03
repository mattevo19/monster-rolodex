import "./search-bar.styles.css";

const SearchBar = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBar;

// import { Component } from "react";

// class SearchBar extends Component {
//   render() {
//     const { placeholder, handleChange } = this.props;
//     return (
//       <input
//         className="search"
//         type="search"
//         placeholder={placeholder}
//         onChange={handleChange}
//       />
//     );
//   }
// }

// export default SearchBar;
