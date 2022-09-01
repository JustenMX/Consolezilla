/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

function SearchInputHome({ gameCards, setgameCards, title, setTitle }) {
  const handleChange = (event) => {
    setTitle(event.target.value);
    console.log(gameCards);
  };

  const handleSearch = () => {
    const searchURL = `https://api.rawg.io/api/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=1&page_size=12&search=${title}`;

    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => setgameCards(data));
  };
  return (
    <>
      {/* searchInput start */}
      <form onSubmit={handleSearch} className="m-6">
        <fieldset className="w-full space-y-1 dark:text-gray-100">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                onClick={handleSearch}
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-100"
                >
                  <FontAwesomeIcon icon={faSearchengin} />
                </svg>
              </button>
            </span>
            <input
              onChange={handleChange}
              type="search"
              name="Search"
              placeholder="Search..."
              className="py-2 pl-10 text-sm rounded-md sm:w-full first-letter:focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
            />
          </div>
        </fieldset>
      </form>
      {/* search input ends */}
    </>
  );
}

export default SearchInputHome;
