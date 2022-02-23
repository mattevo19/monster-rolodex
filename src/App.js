import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.components";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }}
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
