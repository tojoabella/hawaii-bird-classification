import type { Dispatch, SetStateAction } from "react";

import { PAGES, type Page } from "../types";

function NavBar({
  activePage,
  setActivePage,
}: {
  activePage: Page;
  setActivePage: Dispatch<SetStateAction<Page>>;
}) {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          {/*first flexbox item */}
          <div className="text-white text-xl font-bold">
            Hawaii Bird Classification
          </div>
          {/*second flexbox item */}
          <div className="flex gap-1">
            {PAGES.map((page) => (
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
