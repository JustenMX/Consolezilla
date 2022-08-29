import React from "react";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className="bg-emerald-800">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-300" href="/">
                <span className="sr-only">Home</span>
                <img src="/favicon.ico" alt="logo" />
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
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/home"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/games"
                    >
                      Game Page
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/genres"
                    >
                      Genres
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/consoles"
                    >
                      Platforms
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/favs"
                    >
                      Favourites
                    </a>
                  </li>

                  <li>
                    <Outlet />
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/about"
                    >
                      About
                    </a>
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
