import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Img from "react-cool-img";

function GenresImagePage() {
  const { slug } = useParams();
  const [genreDetail, setGenreDetail] = useState({});
  const getGenreList = `https://api.rawg.io/api/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=1&page_size=24&genres=${slug}`;

  useEffect(() => {
    fetch(getGenreList)
      .then((response) => response.json())
      .then((data) => setGenreDetail(data));
  }, []);

  return (
    <>
      <NavBar />

      <div className="bg-white dark:bg-slate-900 py-6 sm:py-8 lg:py-12">
        <h2 className="text-emerald-800 dark:text-indigo-600 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
          Genres: {slug}
        </h2>
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-end gap-4 mb-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
              {/* .map() */}
              {genreDetail?.results?.map((r) => {
                return (
                  <div
                    key={r.id}
                    className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3 shadow-xl"
                  >
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GenresImagePage;
