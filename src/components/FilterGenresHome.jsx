/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function FilterGenresHome({ gameCards, setgameCards, title, setTitle }) {
  const handleFilterGenre = (title) => {
    const searchURL = `https://api.rawg.io/api/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=1&page_size=40&genres=${title}`;

    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => setgameCards(data));
  };

  return (
    <>
      <div className="flex justify-center items-end gap-4 mb-6 flex-wrap">
        <button
          onClick={() => handleFilterGenre("action")}
          name="action"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          ACTION
        </button>
        <button
          onClick={() => handleFilterGenre("indie")}
          name="indie"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          INDIE
        </button>
        <button
          onClick={() => handleFilterGenre("racing")}
          name="rpg"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          RACING
        </button>
        <button
          onClick={() => handleFilterGenre("strategy")}
          name="action"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          STRATEGY
        </button>
        <button
          onClick={() => handleFilterGenre("shooter")}
          name="action"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          SHOOTER
        </button>
        <button
          onClick={() => handleFilterGenre("casual")}
          name="action"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          CASUAL
        </button>
        <button
          onClick={() => handleFilterGenre("simulation")}
          name="action"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          SIMULATION
        </button>
      </div>
    </>
  );
}

export default FilterGenresHome;
