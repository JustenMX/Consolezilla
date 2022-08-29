import React from "react";
import { useState } from "react";

function SearchBar() {
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState(false);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSearch = () => {
    setSearch(true);
    console.log("search", title);
    const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=0Ej4vY7D1V5oZbE5j0odmNCpJubtyNQB&q=${title}`;

    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => setPic(data));
  };
  return (
    <div>
      <input type="submit" onClick={handleSearch} value="Search" />
    </div>
  );
}

export default SearchBar;
