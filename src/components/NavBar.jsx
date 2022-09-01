import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className="bg-emerald-800 dark:bg-emerald-900">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-300" href="/">
                <span className="sr-only">Home</span>
                <img
                  className="hover:animate-spin"
                  src="/favicon.ico"
                  alt="logo"
                />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav
                className="hidden md:block"
                aria-labelledby="header-navigation"
              >
                <h2 className="sr-only" id="header-navigation">
                  Header navigation
                </h2>

                <ul className="flex items-center gap-6 text-sm">
                  <li className="text-slate-50 transition hover:text-white/75 font-semibold">
                    <Link to={"/home"}>Home</Link>
                  </li>

                  <li className="text-white transition hover:text-white/75 font-semibold">
                    <Link to={"/genres"}>Genres</Link>
                  </li>

                  <li className="text-white transition hover:text-white/75 font-semibold">
                    <Link to={"/consoles"}>Consoles</Link>
                  </li>

                  <li className="text-white transition hover:text-white/75 font-semibold">
                    <Link to={"/favs"}>WatchList</Link>
                  </li>

                  <li className="text-white transition hover:text-white/75 font-semibold">
                    <Link to={"/about"}>About</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
