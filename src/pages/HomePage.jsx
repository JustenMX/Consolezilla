import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PaginationHome from "../components/PaginationHome";
import SearchInputHome from "../components/SearchInputHome";
import FilterPlatformsHome from "../components/FilterPlatformsHome";
import FilterGenresHome from "../components/FilterGenresHome";
import Img from "react-cool-img";

function HomePage() {
  const [gameCards, setgameCards] = useState([]);
  const [title, setTitle] = useState("");
  const getGameList = `https://api.rawg.io/api/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=1&page_size=16`;

  // Upon load to push into component

  useEffect(() => {
    fetch(getGameList)
      .then((response) => response.json())
      .then((data) => setgameCards(data));
  }, []);

  return (
    <>
      <NavBar />

      {/* div className wrapper */}
      <div className="bg-white dark:bg-slate-900 py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-end gap-4 mb-6"></div>

          <SearchInputHome
            gameCards={gameCards}
            setgameCards={setgameCards}
            title={title}
            setTitle={setTitle}
          />

          <FilterGenresHome
            gameCards={gameCards}
            setgameCards={setgameCards}
            title={title}
            setTitle={setTitle}
          />

          <FilterPlatformsHome
            gameCards={gameCards}
            setgameCards={setgameCards}
            title={title}
            setTitle={setTitle}
          />

          <PaginationHome gameCards={gameCards} setgameCards={setgameCards} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
            {/* .map() */}
            {gameCards?.results?.map((r) => {
              return (
                <div
                  key={r.id}
                  className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3 shadow-xl"
                >
                  {/* Link Starts Here */}
                  <Link to={`/games/${r.id}`}>
                    <Img
                      src={r?.background_image}
                      key={r.id}
                      loading="lazy"
                      alt="game-background-image"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                    ></Img>
                  </Link>
                  <span className="bg-indigo-700 text-white text-sm font-semibold tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                    {r?.name}
                  </span>
                </div>
              );
            })}
            {/* End of .map() */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
