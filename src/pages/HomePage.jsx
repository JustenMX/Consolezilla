import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Img from "react-cool-img";
import SearchBar from "../components/SearchBar";

function HomePage() {
  const [gameCards, setgameCards] = useState([]);
  const getGameList = `https://api.rawg.io/api/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=1&page_size=100`;

  useEffect(() => {
    fetch(getGameList)
      .then((response) => response.json())
      .then((data) => setgameCards(data));
  }, []);

  return (
    <>
      <NavBar />
      <SearchBar />

      {/* start header */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <p className="text-indigo-500 lg:text-lg font-semibold text-center mb-2 md:mb-3">
            <Link to="/home">Home</Link>
          </p>

          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Revolutionary way to build the web
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
      </div>
      {/* end header */}

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-end gap-4 mb-6">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
              All Games
            </h2>
            <a
              href="#"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              Show more
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
            {/* Start of array map and render */}
            {gameCards?.results?.map((r) => {
              return (
                <div key={r.id}>
                  <a
                    href="#"
                    className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
                  >
                    <Img
                      src={r?.background_image}
                      key={r.id}
                      loading="lazy"
                      alt="game-background-image"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                    />

                    <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                      {r?.rating} / 5
                    </span>
                  </a>
                  <div>
                    <a
                      href="#"
                      className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1"
                    >
                      {r?.genres?.[0]?.name}
                    </a>
                    <div className="flex items-end gap-2">
                      <span className="text-gray-800 lg:text-lg font-bold">
                        {r?.name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* End of array map and render */}
            <div className="flex justify-items-end   items-end gap-4 mb-6">
              <a
                href="#"
                className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
              >
                Show more
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
