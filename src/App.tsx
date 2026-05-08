import { useState } from "react";
import NavBar from "./components/navbar";

import HomePage from "./components/homepage";
import AbstractPage from "./components/abstract";
import BirdsPage from "./components/birds";
import ContactsPage from "./components/contacts";
import ModelsPage from "./components/models";
import UpcomingPage from "./components/upcoming";

import "./App.css";
import type { Page } from "./types";

function App() {
  const [activePage, setActivePage] = useState<Page>("home");

  const pages: Record<Page, React.ReactNode> = {
    home: <HomePage />,
    abstract: <AbstractPage />,
    birds: <BirdsPage />,
    models: <ModelsPage />,
    upcoming: <UpcomingPage />,
    contact: <ContactsPage />,
  };

  return (
    <>
      <NavBar activePage={activePage} setActivePage={setActivePage} />
      {pages[activePage] ?? <div className="p-8">Page under construction</div>}
    </>
  );
}

export default App;
