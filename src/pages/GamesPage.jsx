/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Img from "react-cool-img";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function GamePage({ favs, setFavs }) {
  const { id } = useParams();
  const [gameDetail, setGameDetail] = useState({});

  const getGameDetails = `https://api.rawg.io/api/games/${id}?key=9165d834ffc64009b09c43f0a1ed0f67`;

  useEffect(() => {
    fetch(getGameDetails)
      .then((response) => response.json())
      .then((data) => setGameDetail(data));
  }, []);

  const handleFavs = () => {
    const gamesNotInfavs =
      favs.findIndex((index) => index.id === gameDetail.id) === -1;
    gamesNotInfavs
      ? setFavs([...favs, gameDetail])
      : alert("Broooooo, you already have this game in your watchlist");
  };

  return (
    <>
      <NavBar />
      <div className="bg-white dark:bg-slate-900 py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden relative">
                <Img
                  src={gameDetail.background_image}
                  loading="lazy"
                  alt="RAWG Images"
                  className="w-full h-full object-cover object-center rounded-lg shadow-2xl hover:shadow-lg"
                />

                <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                  {gameDetail.rating} / 5
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Img
                  src={gameDetail.background_image}
                  loading="lazy"
                  alt="RAWG Images"
                  className="w-full h-full object-cover object-center rounded-lg shadow-2xl hover:shadow-lg"
                />
                <Img
                  src={gameDetail.background_image}
                  loading="lazy"
                  alt="RAWG Images"
                  className="w-full h-full object-cover object-center rounded-lg shadow-2xl hover:shadow-lg"
                />
                <Img
                  src={gameDetail.background_image}
                  loading="lazy"
                  alt="RAWG Images"
                  className="w-full h-full object-cover object-center rounded-lg shadow-2xl hover:shadow-lg"
                />
                <Img
                  src={gameDetail.background_image}
                  loading="lazy"
                  alt="RAWG Images"
                  className="w-full h-full object-cover object-center rounded-lg shadow-2xl hover:shadow-lg"
                />
              </div>
            </div>

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <h2 className="text-gray-800 dark:text-slate-50 text-2xl lg:text-3xl font-bold mb-3">
                  {gameDetail.name}
                </h2>
                <div className="flex-col flex flex-wrap">
                  <a
                    href={gameDetail.website}
                    className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-xl font-semibold transition duration-100 ml-2"
                  >
                    Website
                  </a>
                  <a
                    href={gameDetail.reddit_url}
                    className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-xl font-semibold transition duration-100 ml-2"
                  >
                    Reddit
                  </a>
                </div>
              </div>

              <div className="flex gap-2.5 mt-10">
                <button className="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  <Link to={`/home`}>Go back</Link>
                </button>

                <button
                  onClick={handleFavs}
                  className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </svg>
                </button>
              </div>

              <div className="mt-8 md:mt-14 lg:mt-18">
                <div className="text-gray-800 dark:text-slate-50 text-lg font-semibold mb-3">
                  Description
                </div>
                <div className="text-gray-500 dark:text-slate-50">
                  {gameDetail.description_raw}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GamePage;
