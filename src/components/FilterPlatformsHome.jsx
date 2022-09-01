/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function FilterPlatformsHome({ gameCards, setgameCards, title, setTitle }) {
  const handleFilterPlatforms = (title) => {
    const searchURL = `https://api.rawg.io/api/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=1&page_size=12&platforms=${title}`;

    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => setgameCards(data));
  };

  return (
    <>
      <div className="flex justify-center items-end gap-6 mb-8 flex-wrap">
        <button
          onClick={() => handleFilterPlatforms("18")}
          name="action"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          PLAYSTATION 4
        </button>
        <button
          onClick={() => handleFilterPlatforms("187")}
          name="action"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          PLAYSTATION 5
        </button>
        <button
          onClick={() => handleFilterPlatforms("186")}
          name="action"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          XBOX SERIES S/X
        </button>
        <button
          onClick={() => handleFilterPlatforms("4")}
          name="action"
          className="inline-block bg-emerald-800 hover:bg-indigo-700 active:bg-indigo-900 focus-visible:ring ring-indigo-300 border text-slate-100 text-sm md:text-base font-normal text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3 shadow-xl"
        >
          GAMING PC
        </button>
      </div>
      {/* filter buttons ends here */}
    </>
  );
}

export default FilterPlatformsHome;
