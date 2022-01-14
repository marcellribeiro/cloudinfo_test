import React, { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/marvel_logo.png";

import Comics from "./components/comics";
import Search from "./components/search";
import Characters from "./components/chars";
import api from "./handlers/chars";

function App() {
  const [characters, setCharacters] = useState("");
  const [characterSearch, setCharacterSearch] = useState(characters);
  const [searchRows, setSearchRows] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCharacterSearch(characters);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [characters]);

  useEffect(() => {
    const search = () => {
      api(characterSearch)
        .get()
        .then((response) => {
          setSearchRows(response.data.data.results);
        })
        .catch((err) => console.log(err));
    };
    if (characterSearch) {
      search();
    }
  }, [characterSearch]);

  const filteredComics = !!characterSearch
    ? searchRows.filter((result) => {
        return result.name
          .toLowerCase()
          .includes(characterSearch.toLowerCase());
      })
    : searchRows;

  const handleOnChange = (e) => {
    setCharacters(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="marvel-logo" alt="logo" />
        <Search characters={characters} handleOnChange={handleOnChange} />{" "}
      </header>
      {filteredComics.length > 0 && (
        <Characters comics={filteredComics[0].comics.items} />
      )}
      {filteredComics.length === 0 && <Comics className="Comics" />}
    </div>
  );
}

export default App;
