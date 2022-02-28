import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.components";
import { SearchBar } from "./components/search/search-bar.components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // not neeeded if arrow function used
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBar
          placeholder={"Search Monsters"}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

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

// handleChange(e) => {
//             this.setState({ searchField: e.target.value }, () =>
//               console.log(this.state)
//             );}
// setstate takes two
