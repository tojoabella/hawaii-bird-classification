function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Hawaii Bird Classification
        </div>
        <div>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Models
          </a>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Birds
          </a>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Abstract
          </a>
          <a href="#" className="text-gray-300 hover:text-white mx-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

function ImagePlaceholder() {
  return (
    <div className="flex flex-col justify-center items-center w-128 h-64 bg-gray-300 rounded-lg">
      <div className="">Image Placeholder</div>
      <button className="mx-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded">
        Path
      </button>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        <ImagePlaceholder />
      </div>
    </div>
  );
}

export default HomePage;
