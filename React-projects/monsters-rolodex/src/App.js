import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/cardList/cardList.components";
import { Search } from "./components/searchBox/searchBox.component";
import { CardList2 } from "./components/cardList/cardList2.component";

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [], searchField: "" };
  }
  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState({ monsters: users });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(
      (monster) =>
        monster.name.toLowerCase().includes(searchField.toLowerCase()) ||
        monster.email.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="title">MONSTERS ROLODEX</h1>
        <Search
          placeholder="Search Monsters"
          handleChange={(e) => {
            this.setState({ searchField: e.target.value });
          }}
        ></Search>
        <h2>Cat Monsters</h2>
        <CardList monsters={filteredMonster}></CardList>

        <h2>Robot Monsters</h2>
        <CardList2 monsters={filteredMonster}></CardList2>
      </div>
    );
  }
}

export default App;
