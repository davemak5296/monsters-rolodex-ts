import { ChangeEventHandler, Component } from "react";
import { emptyObj, appState } from "./types";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component<emptyObj, appState> {
  constructor(props: emptyObj) {
    super(props);
    this.state = {
      monsters: [],
      searchTexts: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchTexts: searchString };
    });
  };
  render() {
    const { monsters, searchTexts } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster["name"].toLocaleLowerCase().includes(searchTexts);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} />
        {/* <input
          className="search-box"
          type="text"
          placeholder="search monsters!"
          onChange={handleSearch}
        /> */}
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <div>{monster.name}</div>
            </div>
          );
        })} */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
