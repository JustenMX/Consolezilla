import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ImageOutputGenrePage from "../components/ImageOutputGenrePage";

function GenresPage() {
  return (
    <>
      <NavBar />
      {/* div wrapper */}
      <div className="bg-white dark:bg-slate-900 py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-emerald-800 dark:text-indigo-600 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Genres
            </h2>
            <ImageOutputGenrePage />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GenresPage;
