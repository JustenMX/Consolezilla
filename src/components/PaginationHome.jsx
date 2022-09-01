/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

function PaginationHome({ gameCards, setgameCards }) {
  const [paginate, setPaginate] = useState(1);

  const PagePlus = () => {
    setPaginate(paginate + 1);
  };

  const PageMinus = () => {
    setPaginate(paginate - 1);
  };

  const handlePagination = () => {
    const searchURL = `https://api.rawg.io/api/games?key=9165d834ffc64009b09c43f0a1ed0f67&page=${paginate}&page_size=24`;
    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => setgameCards(data));
  };

  useEffect(() => {
    handlePagination();
  }, [paginate]);

  return (
    <>
      <div className="flex justify-center items-end gap-6 mb-8 flex-wrap">
        <nav aria-label="PaginationHome">
          <ul className="inline-flex -space-x-px">
            <li>
              <a
                onClick={PageMinus}
                className="py-2 px-3 ml-0 leading-tight  text-grey-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                aria-current="page"
                className="py-2 px-3 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-gray-700  dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                onClick={PagePlus}
                className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default PaginationHome;
