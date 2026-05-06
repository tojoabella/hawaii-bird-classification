import { useState } from "react";

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
      <nav className="bg-gray-800">
        <div className="container mx-auto flex justify-between items-center h-16">
          {/*first flexbox item */}
          <div className="text-white font-medium text-xl font-bold">
            Hawaii Bird Classification
          </div>
          {/*second flexbox item */}
          <div className="flex gap-1">
            {pages.map((page) => (
              <button
                key={page}
                className={`cursor-pointer text-gray-300 hover:text-white mx-2 ${
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
