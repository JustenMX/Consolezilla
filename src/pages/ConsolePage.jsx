import React from "react";
import Img from "react-cool-img";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function ConsolePage() {
  const [consoleList, setConsoleList] = useState([]);
  const getConsoleList = `https://api.rawg.io/api/platforms?key=9165d834ffc64009b09c43f0a1ed0f67`;

  useEffect(() => {
    fetch(getConsoleList)
      .then((response) => response.json())
      .then((data) => setConsoleList(data));
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Console List
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {/* console cards to start here */}
            {consoleList?.results?.map((r) => {
              return (
                <a
                  href="#"
                  className="group h-48 md:h-96 flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
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

                  <span className="text-gray-200 text-2xl md:text-sm backdrop-blur relative px-2 md:px-3 py-1 mr-3 mb-3">
                    {r?.name}
                  </span>
                </a>
              );
            })}
            {/* console cards to end here */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ConsolePage;
