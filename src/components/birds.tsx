import { useState } from "react";

import { type Species, species, getBirdImage } from "./data/birds";

function BirdsTable() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Species</h1>
      <table className="mx-auto border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Scientific name</th>
            <th className="text-left p-2">Common name</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {species.map((s) => (
            <tr key={s.scientificName} className="border-b">
              <td className="p-2 italic">{s.scientificName}</td>
              <td className="p-2">{s.commonName}</td>
              <td className="p-2">{s.native ? "Native" : "Non-native"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BirdCard({ species }: { species: Species }) {
  const image = getBirdImage(species.scientificName);
  return (
    <div className="rounded-lg shadow-lg p-2">
      {image && (
        <img
          src={image}
          alt={species.scientificName}
          className="w-48 h-48 object-cover mx-auto mb-3 rounded"
        />
      )}
      <p className="text-lg font-bold text-center">{species.commonName}</p>
      <p className="text-gray-700 italic text-center">
        {species.scientificName}
      </p>
      <p className="text-gray-700 text-center">
        Status: {species.native ? "Native" : "Non-native"}
      </p>
    </div>
  );
}

function BirdsPage() {
  const [showTable, setShowTable] = useState(false);
  const [filter, setFilter] = useState<"all" | "native" | "introduced">("all");

  return (
    <div className="page_container">
      <div className="title">
        <h1>Birds</h1>
        <p>
          A subset of birds found in Hawaii whose images were used for model
          training.
        </p>
      </div>

      <div>
        {/* NATIVE ONLY BUTTON */}
        <div className="flex justify-center">
          <button
            className={`cursor-pointer text-white rounded ml-2 p-2 ${
              filter == "native" ? "bg-gray-500" : "bg-blue-900"
            }`}
            onClick={() => {
              setFilter(filter == "native" ? "all" : "native");
            }}
          >
            Native Only
          </button>
          {/* INTRODUCED ONLY BUTTON */}
          <button
            className={`cursor-pointer text-white rounded ml-2 p-2 ${
              filter == "introduced" ? "bg-gray-500" : "bg-blue-900"
            }`}
            onClick={() => {
              setFilter(filter == "introduced" ? "all" : "introduced");
            }}
          >
            Introduced Only
          </button>
          {/* BIRDS TABLE BUTTON */}
          <button
            className={`cursor-pointer ml-2 p-2 rounded ${
              showTable ? "bg-gray-500" : "bg-blue-900"
            } text-white`}
            onClick={() => {
              setShowTable(!showTable);
            }}
          >
            {showTable ? "Hide Birds Table" : "Show Birds Table"}
          </button>
        </div>
        <div className="flex justify-center items-start content-start flex-wrap mt-10 gap-10">
          {species
            .filter((s) => (filter == "native" ? s.native : true))
            .filter((s) => (filter == "introduced" ? !s.native : true))
            .map((s) => {
              return <BirdCard key={s.scientificName} species={s} />;
            })}
        </div>
        {showTable && <BirdsTable />}
      </div>
    </div>
  );
}

export default BirdsPage;
