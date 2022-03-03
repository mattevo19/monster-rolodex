import "./App.css";

import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.components";
import SearchBar from "./components/search/search-bar.components";

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value,setValue] = useState(initialValue)
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  // empty only when called for mounting, otherwise add vialble that changes to call useEffect

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField)
      )
    );
  }, [monsters, searchField]);
  // only fires when monsters array or searchField string changes

  const handleChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBar placeholder={"Search Monsters"} handleChange={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// import { Component } from "react";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     // not neeeded if arrow function used
//     // this.handleChange = this.handleChange.bind(this)
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state.monsters);
//           }
//         )
//       );
//   }

//   handleChange = (e) => {
//     const searchField = e.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { handleChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     );

//     return (
//       <div className="App">
//         <h1>Monsters Rolodex</h1>
//         <SearchBar
//           placeholder={"Search Monsters"}
//           handleChange={handleChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;

// const myAsync = async () => {
//   try {
//     const usersResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     const users = await usersResponse.json();
//     const firstUser = users[0];
//     console.log(firstUser);
//     const postResponse = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`
//     );
//     const posts = await postResponse.json();
//     console.log(posts);
//   } catch (err) {
//     console.log("There was an error");
//   }
// };

// handleChange = (e) => {
//   this.setState(
//     (state,props) => {
//       return {
//         searchField: e.target.value,
//       };
//     },
//     () => {
//       console.log(this.state);
//     }
//   );
// };
// setstate takes two
