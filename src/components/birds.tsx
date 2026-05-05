import { use, useState } from "react";

// an object mapping bird image file paths to their URLs
/*
  "../assets/birds/Tringa incana.jpg": "/src/assets/birds/Tringa%20incana.jpg",
  "../assets/birds/Fulica alai.jpg":   "/src/assets/birds/Fulica%20alai.jpg",
  ...
}
*/
const birdImages = import.meta.glob<string>("../assets/birds/*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
});

const imageByName: Record<string, string> = Object.fromEntries(
  // Object.entries() converts an object (birdImages) to an array of [key, value] (path, url) arrays, which we can then map over
  // we use array destructuring to unpack the path and url from each entry. We could have just done: .map((entry) => { const [path, url] = entry; ... }) but this is more concise
  // .map() runs the callback on every element and collects the results into a new array, which we then convert back to an object with Object.fromEntries()
  // before from Entries, map returns: [[name1, url1], ...]
  Object.entries(birdImages).map(([path, url]) => {
    // Get the filename without extension and convert to lowercase - should be the species name
    const name = path
      .split("/")
      .pop()!
      .replace(/\.jpg$/i, "");
    return [name.toLowerCase(), url];
  }),
);

function getBirdImage(scientificName: string): string | undefined {
  // returns the URL of the bird image for the given scientific name
  return imageByName[scientificName.toLowerCase()];
}

type Species = {
  scientificName: string;
  commonName: string;
  native: boolean;
};

const species: Species[] = [
  {
    scientificName: "Tringa incana",
    commonName: "Wandering Tattler",
    native: true,
  },
  { scientificName: "Fulica alai", commonName: "Hawaiian Coot", native: true },
  {
    scientificName: "Branta sandvicensis",
    commonName: "Nēnē (Hawaiian Goose)",
    native: true,
  },
  {
    scientificName: "Nycticorax nycticorax",
    commonName: "Black-crowned Night Heron",
    native: true,
  },
  {
    scientificName: "Phoebastria immutabilis",
    commonName: "Laysan Albatross",
    native: true,
  },
  {
    scientificName: "Himatione sanguinea",
    commonName: "ʻApapane",
    native: true,
  },
  {
    scientificName: "Himantopus mexicanus knudseni",
    commonName: "Hawaiian Stilt",
    native: true,
  },
  {
    scientificName: "Pluvialis fulva",
    commonName: "Pacific Golden-Plover",
    native: true,
  },
  { scientificName: "Sula sula", commonName: "Red-footed Booby", native: true },
  {
    scientificName: "Fregata minor",
    commonName: "Great Frigatebird",
    native: true,
  },
  {
    scientificName: "Arenaria interpres",
    commonName: "Ruddy Turnstone",
    native: true,
  },
  {
    scientificName: "Ardenna pacifica",
    commonName: "Wedge-tailed Shearwater",
    native: true,
  },
  { scientificName: "Gygis alba", commonName: "White Tern", native: true },
  { scientificName: "Drepanis coccinea", commonName: "ʻIʻiwi", native: true },
  {
    scientificName: "Phaethon lepturus",
    commonName: "White-tailed Tropicbird",
    native: true,
  },
  {
    scientificName: "Chlorodrepanis virens",
    commonName: "Hawaii Amakihi",
    native: true,
  },
  {
    scientificName: "Estrilda astrild",
    commonName: "Common Waxbill",
    native: false,
  },
  {
    scientificName: "Paroaria coronata",
    commonName: "Red-crested Cardinal",
    native: false,
  },
  {
    scientificName: "Gallus gallus domesticus",
    commonName: "Domestic Chicken",
    native: false,
  },
  {
    scientificName: "Sicalis flaveola",
    commonName: "Saffron Finch",
    native: false,
  },
  {
    scientificName: "Bubulcus ibis",
    commonName: "Cattle Egret",
    native: false,
  },
  {
    scientificName: "Columba livia domestica",
    commonName: "Rock Pigeon",
    native: false,
  },
  {
    scientificName: "Zosterops japonicus",
    commonName: "Warbling White-eye",
    native: false,
  },
  {
    scientificName: "Haemorhous mexicanus",
    commonName: "House Finch",
    native: false,
  },
  {
    scientificName: "Cardinalis cardinalis",
    commonName: "Northern Cardinal",
    native: false,
  },
  {
    scientificName: "Passer domesticus",
    commonName: "House Sparrow",
    native: false,
  },
  {
    scientificName: "Acridotheres tristis",
    commonName: "Common Myna",
    native: false,
  },
  {
    scientificName: "Paroaria capitata",
    commonName: "Yellow-billed Cardinal",
    native: false,
  },
  {
    scientificName: "Padda oryzivora",
    commonName: "Java Sparrow",
    native: false,
  },
  {
    scientificName: "Pycnonotus cafer",
    commonName: "Red-vented Bulbul",
    native: false,
  },
  {
    scientificName: "Ortygornis pondicerianus",
    commonName: "Gray Francolin",
    native: false,
  },
  {
    scientificName: "Geopelia striata",
    commonName: "Zebra Dove",
    native: false,
  },
  {
    scientificName: "Gallus gallus",
    commonName: "Red Junglefowl",
    native: false,
  },
  {
    scientificName: "Spilopelia chinensis",
    commonName: "Spotted Dove",
    native: false,
  },
  {
    scientificName: "Lophura leucomelanos",
    commonName: "Kalij Pheasant",
    native: false,
  },
  {
    scientificName: "Crithagra mozambica",
    commonName: "Yellow-fronted Canary",
    native: false,
  },
  {
    scientificName: "Cairina moschata domestica",
    commonName: "Domestic Muscovy Duck",
    native: false,
  },
  {
    scientificName: "Lonchura atricapilla",
    commonName: "Chestnut Munia",
    native: false,
  },
  {
    scientificName: "Lonchura punctulata",
    commonName: "Scaly-breasted Munia",
    native: false,
  },
  {
    scientificName: "Psittacula krameri",
    commonName: "Rose-ringed Parakeet",
    native: false,
  },
  { scientificName: "Alectoris chukar", commonName: "Chukar", native: false },
  {
    scientificName: "Leiothrix lutea",
    commonName: "Red-billed Leiothrix",
    native: false,
  },
];

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
  const [showTable, setShowTable] = useState(true);
  const [nativeOnly, setNativeOnly] = useState(false);
  const [introducedOnly, setIntroducedOnly] = useState(false);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center tracking-wide uppercase text-gray-800">
        Birds of Hawaii used in our Dataset
      </h2>
      <p className="text-2xl font-bold mb-4 text-center tracking-wide uppercase text-gray-800">
        Note: this is not all birds in the dataset, just the ones we have images
        for.
      </p>
      {/* NATIVE ONLY BUTTON */}
      <button
        className={`cursor-pointer text-white rounded m-2 p-2 ${
          nativeOnly ? "bg-gray-500" : "bg-blue-900"
        }`}
        onClick={() => {
          setNativeOnly(!nativeOnly);
          if (introducedOnly) setIntroducedOnly(false);
        }}
      >
        Native Only
      </button>
      {/* INTRODUCED ONLY BUTTON */}
      <button
        className={`cursor-pointer text-white rounded m-2 p-2 ${
          introducedOnly ? "bg-gray-500" : "bg-blue-900"
        }`}
        onClick={() => {
          setIntroducedOnly(!introducedOnly);
          if (nativeOnly) setNativeOnly(false);
        }}
      >
        Introduced Only
      </button>
      {/* BIRDS TABLE BUTTON */}
      <button
        className="cursor-pointer mt-4 bg-blue-900 text-white py-2 px-4 rounded"
        onClick={() => {
          setShowTable(!showTable);
        }}
      >
        {showTable ? "Hide Birds Table" : "Show Birds Table"}
      </button>
      <div className="flex justify-center items-start content-start flex-wrap mt-10 gap-10">
        {species
          .filter((s) => !nativeOnly || s.native)
          .filter((s) => !introducedOnly || !s.native)
          .map((s) => {
            return <BirdCard key={s.scientificName} species={s} />;
          })}
      </div>
      {showTable && <BirdsTable />}
    </div>
  );
}

export default BirdsPage;
