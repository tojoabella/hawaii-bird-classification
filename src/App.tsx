import { useState } from "react";
import NavBar from "./components/navbar";

import HomePage from "./components/homepage";
import AbstractPage from "./components/abstract";
import ModelsPage from "./components/models";

import "./App.css";
import BirdsPage from "./components/birds";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <NavBar activePage={activePage} setActivePage={setActivePage} />
      <main>
        {activePage === "home" ? (
          <HomePage />
        ) : activePage === "abstract" ? (
          <AbstractPage />
        ) : activePage === "models" ? (
          <ModelsPage />
        ) : activePage === "birds" ? (
          <BirdsPage />
        ) : (
          <div className="p-8">Page under construction</div>
        )}
      </main>
    </>
  );
}

export default App;
