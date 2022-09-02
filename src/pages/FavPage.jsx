/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Img from "react-cool-img";

function FavPage({ favs }) {
  return (
    <>
      <NavBar />
      <div className="bg-white dark:bg-slate-900 py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex justify-between items-end gap-4 mb-6"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
            {/* .map() */}
            {favs?.map((f) => {
              return (
                <div
                  key={f.id}
                  className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3 shadow-xl"
                >
                  {/* Link Starts Here */}
                  <Link to={`/games/${f.id}`}>
                    <Img
                      src={f?.background_image}
                      key={f.id}
                      loading="lazy"
                      alt="game-background-image"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                    ></Img>
                  </Link>
                  <span className="bg-indigo-700 text-white text-sm font-semibold tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                    {f?.name}
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

export default FavPage;
