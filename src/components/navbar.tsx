import { useState } from "react";

import HomePage from "./homepage";
import AbstractPage from "./abstract";

function NavBar() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            Hawaii Bird Classification
          </div>
          <div>
            <a
              href="#"
              className={`text-gray-300 hover:text-white mx-2 ${
                activePage === "home" ? "text-white" : ""
              }`}
              onClick={() => setActivePage("home")}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-gray-300 hover:text-white mx-2 ${
                activePage === "models" ? "text-white" : ""
              }`}
              onClick={() => setActivePage("models")}
            >
              Models
            </a>
            <a
              href="#"
              className={`text-gray-300 hover:text-white mx-2 ${
                activePage === "birds" ? "text-white" : ""
              }`}
              onClick={() => setActivePage("birds")}
            >
              Birds
            </a>
            <a
              href="#"
              className={`text-gray-300 hover:text-white mx-2 ${
                activePage === "abstract" ? "text-white" : ""
              }`}
              onClick={() => setActivePage("abstract")}
            >
              Abstract
            </a>
            <a
              href="#"
              className={`text-gray-300 hover:text-white mx-2 ${
                activePage === "contact" ? "text-white" : ""
              }`}
              onClick={() => setActivePage("contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
