import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

function HomePage() {
  const [gameCards, setgameCards] = useState();
  const getGameList = `https://api.rawg.io/api/games?key=a902fd0835d54afaa5e3a07c3f6dddac&page=1&page_size=100`;
  console.log(getGameList);

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
        <img src={gameCards?.results?.[0]?.background_image} />
        <div className="hero-content flex-col lg:flex-row">
          <h1>This is my API Key: </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
