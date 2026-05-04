type Species = {
  scientificName: string;
  commonName: string;
  native: boolean;
};

const species: Species[] = [
  { scientificName: "Tringa incana", commonName: "Wandering Tattler", native: true },
  { scientificName: "Fulica alai", commonName: "Hawaiian Coot", native: true },
  { scientificName: "Branta sandvicensis", commonName: "Nene (Hawaiian Goose)", native: true },
  { scientificName: "Nycticorax nycticorax", commonName: "Black-crowned Night Heron", native: true },
  { scientificName: "Phoebastria immutabilis", commonName: "Laysan Albatross", native: true },
  { scientificName: "Himatione sanguinea", commonName: "Apapane", native: true },
  { scientificName: "Himantopus mexicanus knudseni", commonName: "Hawaiian Stilt", native: true },
  { scientificName: "Pluvialis fulva", commonName: "Pacific Golden-Plover", native: true },
  { scientificName: "Sula sula", commonName: "Red-footed Booby", native: true },
  { scientificName: "Fregata minor", commonName: "Great Frigatebird", native: true },
  { scientificName: "Arenaria interpres", commonName: "Ruddy Turnstone", native: true },
  { scientificName: "Ardenna pacifica", commonName: "Wedge-tailed Shearwater", native: true },
  { scientificName: "Gygis alba", commonName: "White Tern", native: true },
  { scientificName: "Drepanis coccinea", commonName: "Iiwi", native: true },
  { scientificName: "Phaethon lepturus", commonName: "White-tailed Tropicbird", native: true },
  { scientificName: "Chlorodrepanis virens", commonName: "Hawaii Amakihi", native: true },
  { scientificName: "Estrilda astrild", commonName: "Common Waxbill", native: false },
  { scientificName: "Paroaria coronata", commonName: "Red-crested Cardinal", native: false },
  { scientificName: "Gallus gallus domesticus", commonName: "Domestic Chicken", native: false },
  { scientificName: "Sicalis flaveola", commonName: "Saffron Finch", native: false },
  { scientificName: "Bubulcus ibis", commonName: "Cattle Egret", native: false },
  { scientificName: "Columba livia domestica", commonName: "Rock Pigeon", native: false },
  { scientificName: "Zosterops japonicus", commonName: "Warbling White-eye", native: false },
  { scientificName: "Haemorhous mexicanus", commonName: "House Finch", native: false },
  { scientificName: "Cardinalis cardinalis", commonName: "Northern Cardinal", native: false },
  { scientificName: "Passer domesticus", commonName: "House Sparrow", native: false },
  { scientificName: "Acridotheres tristis", commonName: "Common Myna", native: false },
  { scientificName: "Paroaria capitata", commonName: "Yellow-billed Cardinal", native: false },
  { scientificName: "Padda oryzivora", commonName: "Java Sparrow", native: false },
  { scientificName: "Pycnonotus cafer", commonName: "Red-vented Bulbul", native: false },
  { scientificName: "Ortygornis pondicerianus", commonName: "Gray Francolin", native: false },
  { scientificName: "Geopelia striata", commonName: "Zebra Dove", native: false },
  { scientificName: "Gallus gallus", commonName: "Red Junglefowl", native: false },
  { scientificName: "Spilopelia chinensis", commonName: "Spotted Dove", native: false },
  { scientificName: "Lophura leucomelanos", commonName: "Kalij Pheasant", native: false },
  { scientificName: "Crithagra mozambica", commonName: "Yellow-fronted Canary", native: false },
  { scientificName: "Cairina moschata domestica", commonName: "Domestic Muscovy Duck", native: false },
  { scientificName: "Lonchura atricapilla", commonName: "Chestnut Munia", native: false },
  { scientificName: "Lonchura punctulata", commonName: "Scaly-breasted Munia", native: false },
  { scientificName: "Psittacula krameri", commonName: "Rose-ringed Parakeet", native: false },
  { scientificName: "Alectoris chukar", commonName: "Chukar", native: false },
  { scientificName: "Leiothrix lutea", commonName: "Red-billed Leiothrix", native: false },
];

function BirdsPage() {
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

export default BirdsPage;
