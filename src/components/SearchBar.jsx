import React from "react";
import { useState } from "react";

function SearchBar() {
  const [title, setTitle] = useState("");
  // const [search, setSearch] = useState(false);
  const [gameSearch, setGameSearch] = useState();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSearch = () => {
    const searchURL = `https://api.rawg.io/api/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=1&page_size=100&search=${title}`;

    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => setGameSearch(data));
    console.log(gameSearch);
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <input type="submit" onClick={handleSearch} value="Search" />
      <img src={gameSearch?.results?.[0]?.background_image} />
    </div>
  );
}

export default SearchBar;
