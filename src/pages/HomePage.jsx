import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import { useState, useEffect } from "react";

function HomePage() {
  const [gameCards, setgameCards] = useState();
  const getGameList = `https://api.rawg.io/api/games?key=a902fd0835d54afaa5e3a07c3f6dddac&page=1&page_size=100`;

  useEffect(() => {
    fetch(getGameList)
      .then((response) => response.json())
      .then((data) => setgameCards(data));
  }, []);

  return (
    <>
      <NavBar />
      {/* Search component to inserted here */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          {/* START OF DIV CONTAINER */}
          {gameCards?.results?.map((r) => {
            return (
              <div className="flex-wrap" key={r.id}>
                <a href="/" className="block overflow-hidden rounded-2xl">
                  <img
                    className="object-cover w-full"
                    src={r?.background_image}
                    key={r.id}
                    alt="gameCards"
                  />
                  <div className="p-4 bg-gray-900">
                    <p className="text-xs text-gray-500">website.com</p>

                    <h5 className="text-sm text-white">{r?.name}</h5>

                    <p className="mt-1 text-xs text-gray-500">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Rerum nobis aliquid accusamus? Sint, sequi voluptas.
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
          {/* START OF DIV CONTAINER */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
