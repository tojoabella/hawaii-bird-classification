
export type Species = {
  scientificName: string;
  commonName: string;
  native: boolean;
};

export const species: Species[] = [
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


/* IMAGE LOOKUP FUNCTIONS */
/* an object mapping bird image file paths to their URLs
  "../assets/birds/Tringa incana.jpg": "/src/assets/birds/Tringa%20incana.jpg",
  "../assets/birds/Fulica alai.jpg":   "/src/assets/birds/Fulica%20alai.jpg",
  ...
}
*/
const birdImages = import.meta.glob<string>("../../assets/birds/*.jpg", {
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

export function getBirdImage(scientificName: string): string | undefined {
  // returns the URL of the bird image for the given scientific name
  return imageByName[scientificName.toLowerCase()];
}