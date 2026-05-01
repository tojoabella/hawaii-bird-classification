import { useState } from "react";

import HomePage from "./homepage";
import AbstractPage from "./abstract";

function NavBar({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: (page: string) => void;
}) {
  const pages = ["home", "models", "birds", "abstract", "contact"];
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/*first flexbox item */}
          <div className="text-white text-lg font-bold">
            Hawaii Bird Classification
          </div>
          {/*second flexbox item */}
          <div>
            {pages.map((page) => (
              <button
                key={page}
                className={`text-gray-300 hover:text-white mx-2 ${
                  activePage === page ? "text-white" : ""
                }`}
                onClick={() => setActivePage(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
