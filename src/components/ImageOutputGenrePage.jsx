import React, { useEffect, useState } from "react";
import Img from "react-cool-img";

const ImageOutputGenrePage = () => {
  const [genresList, setGenresList] = useState([]);
  const getGenresList = `https://api.rawg.io/api/genres?key=9165d834ffc64009b09c43f0a1ed0f67`;

  useEffect(() => {
    fetch(getGenresList)
      .then((response) => response.json())
      .then((data) => setGenresList(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        {/* Genre cards to start here */}
        {genresList?.results?.map((r) => {
          return (
            <a
              href="#"
              className="group h-20 md:h-40 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
              key={r.id}
            >
              <Img
                key={r.id}
                src={r?.image_background}
                loading="lazy"
                alt="genres"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="bg-indigo-700 text-white text-sm font-semibold tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                {r?.name}
              </span>

              <span className="text-gray-200 text-xs md:text-sm backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">
                {r?.games_count}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default ImageOutputGenrePage;
