import { useState } from "react";
import NavBar from "./components/navbar";

import HomePage from "./components/homepage";
import AbstractPage from "./components/abstract";
import BirdsPage from "./components/birds";
import ContactsPage from "./components/contacts";
import ModelsPage from "./components/models";

import "./App.css";

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
        ) : activePage === "contact" ? (
          <ContactsPage />
        ) : (
          <div className="p-8">Page under construction</div>
        )}
      </main>
    </>
  );
}

export default App;
